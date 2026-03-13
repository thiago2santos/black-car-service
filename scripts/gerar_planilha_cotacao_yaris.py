from __future__ import annotations

import zipfile
from dataclasses import dataclass
from pathlib import Path

import ezodf
from lxml import etree


@dataclass(frozen=True)
class NamedRange:
    name: str
    cell_range_address: str


def _set_cell(sheet: ezodf.Sheet, row: int, col: int, value=None, formula: str | None = None):
    cell = sheet[row, col]
    if value is not None:
        cell.set_value(value)
    if formula:
        # LibreOffice expects OpenFormula with "of:=" prefix.
        cell.formula = f"of:={formula}"
    return cell


def _build_document(target_path: Path) -> Path:
    doc = ezodf.newdoc(doctype="ods", filename=str(target_path))

    # Sheets
    parametros = ezodf.Sheet("Parametros", size=(80, 8))
    cotacao = ezodf.Sheet("Cotacao", size=(120, 8))
    historico = ezodf.Sheet("Historico", size=(500, 20))
    listas = ezodf.Sheet("Listas", size=(200, 8))
    for sh in (parametros, cotacao, historico, listas):
        doc.sheets += sh

    # ---------------------------
    # Parametros
    # ---------------------------
    _set_cell(parametros, 0, 0, "Planejamento de parâmetros (Yaris)")
    _set_cell(parametros, 1, 0, "Parâmetro")
    _set_cell(parametros, 1, 1, "Valor")
    _set_cell(parametros, 1, 2, "Unidade")
    _set_cell(parametros, 1, 3, "Obs.")

    rows = [
        ("consumo_km_por_l", 8, "km/l", ""),
        ("preco_combustivel_por_l", 6.50, "R$/l", ""),
        ("custo_lavagem_mensal", 320, "R$/mês", "4 lavagens × R$ 80"),
        ("km_mensal_base", 4000, "km/mês", "premissa do orçamento"),
        ("margem_percentual", 0.35, "decimal", "35% = 0,35"),
        ("margem_valor", 0, "R$", ""),
        ("tarifa_minima", 180, "R$", ""),
        ("tarifa_espera_por_hora", 60, "R$/h", ""),
        ("km_por_hora_referencia", 40, "km/h", ""),
        ("usar_pedagio_percentual", 0, "0/1", "0=valor direto; 1=% padrão"),
        ("pedagio_percentual_padrao", 0.0, "decimal", "0,10 = 10%"),
        ("adicional_madrugada_modo", "VALOR", "texto", "VALOR|PERCENTUAL"),
        ("adicional_madrugada_padrao", 0.0, "R$ ou decimal", ""),
    ]

    # Spec aligns first input at B3 (0-based row 2, col 1).
    start_r = 2  # row index (0-based)
    for i, (k, v, unit, obs) in enumerate(rows):
        r = start_r + i
        _set_cell(parametros, r, 0, k)
        _set_cell(parametros, r, 1, v)
        _set_cell(parametros, r, 2, unit)
        _set_cell(parametros, r, 3, obs)

    # Derived (spec: B18..B20)
    _set_cell(parametros, 17, 0, "custo_combustivel_por_km")
    _set_cell(parametros, 17, 1, formula="B4/B3")
    _set_cell(parametros, 18, 0, "custo_lavagem_por_km")
    _set_cell(parametros, 18, 1, formula="B5/B6")
    _set_cell(parametros, 19, 0, "custo_variavel_base_por_km")
    _set_cell(parametros, 19, 1, formula="B18+B19")

    # ---------------------------
    # Listas
    # ---------------------------
    _set_cell(listas, 0, 0, "tipos_servico")
    for i, v in enumerate(["transfer", "diaria", "evento"], start=1):
        _set_cell(listas, i, 0, v)
    _set_cell(listas, 0, 2, "adicional_madrugada_modo")
    for i, v in enumerate(["VALOR", "PERCENTUAL"], start=1):
        _set_cell(listas, i, 2, v)

    # ---------------------------
    # Cotacao
    # ---------------------------
    _set_cell(cotacao, 0, 0, "Cotação (1 por vez)")

    form = [
        ("cliente", ""),
        ("data_hora", ""),
        ("origem", ""),
        ("destino", ""),
        ("tipo_servico", "transfer"),
        ("", ""),
        ("distancia_km", ""),
        ("km_extra", 0),
        ("duracao_horas", ""),
        ("tempo_espera_horas", 0),
        ("pedagio_estacionamento", 0),
        ("adicional_madrugada", 0),
    ]
    # place starting at row 2 (A3/B3)
    fr = 2
    for i, (label, default) in enumerate(form):
        r = fr + i
        if not label:
            continue
        _set_cell(cotacao, r, 0, label)
        _set_cell(cotacao, r, 1, default)

    # Helpers / derived inputs
    _set_cell(cotacao, 15, 0, "km_total")
    _set_cell(cotacao, 15, 1, formula="IF(ISBLANK(B9);0;B9)+IF(ISBLANK(B10);0;B10)")

    _set_cell(cotacao, 16, 0, "pedagio_efetivo")
    _set_cell(
        cotacao,
        16,
        1,
        formula=(
            "IF(usar_pedagio_percentual=1;"
            " (B16*custo_variavel_base_por_km)*pedagio_percentual_padrao;"
            " IF(ISBLANK(B13);0;B13)"
            ")"
        ),
    )

    _set_cell(cotacao, 17, 0, "adicional_madrugada_valor")
    _set_cell(
        cotacao,
        17,
        1,
        formula=(
            "IF(ISBLANK(B14);0;"
            " IF(adicional_madrugada_modo=\"PERCENTUAL\";"
            "   (B16*custo_variavel_base_por_km + B17)*B14;"
            "   B14"
            " )"
            ")"
        ),
    )

    # Price by km block
    _set_cell(cotacao, 21, 0, "custo_variavel_km")
    _set_cell(cotacao, 21, 1, formula="B16*custo_variavel_base_por_km")
    _set_cell(cotacao, 22, 0, "subtotal_km")
    _set_cell(cotacao, 22, 1, formula="B22+B17")
    _set_cell(cotacao, 23, 0, "preco_km")
    _set_cell(cotacao, 23, 1, formula="IF(B16=0;0; B23*(1+margem_percentual)+margem_valor+B18)")

    # Price by hour block
    _set_cell(cotacao, 27, 0, "km_equivalente_hora")
    _set_cell(cotacao, 27, 1, formula="IF(ISBLANK(B11);0;B11*km_por_hora_referencia)")
    _set_cell(cotacao, 28, 0, "custo_variavel_h")
    _set_cell(cotacao, 28, 1, formula="B28*custo_variavel_base_por_km")
    _set_cell(cotacao, 29, 0, "custo_espera")
    _set_cell(cotacao, 29, 1, formula="IF(ISBLANK(B12);0;B12*tarifa_espera_por_hora)")
    _set_cell(cotacao, 30, 0, "subtotal_h")
    _set_cell(cotacao, 30, 1, formula="B29+B17+B30")
    _set_cell(cotacao, 31, 0, "preco_h")
    _set_cell(cotacao, 31, 1, formula="IF(B28=0;0; B31*(1+margem_percentual)+margem_valor+B18)")

    # Recommended
    _set_cell(cotacao, 34, 0, "preco_recomendado")
    _set_cell(cotacao, 34, 1, formula="MAX(IF(B24=0;0;B24); IF(B32=0;0;B32); tarifa_minima)")

    # ---------------------------
    # Historico
    # ---------------------------
    headers = [
        "data_hora",
        "cliente",
        "tipo_servico",
        "origem",
        "destino",
        "distancia_km",
        "km_extra",
        "duracao_horas",
        "tempo_espera_horas",
        "pedagio_estacionamento",
        "preco_km",
        "preco_h",
        "preco_recomendado",
        "custo_variavel_base_por_km_snapshot",
        "margem_percentual_snapshot",
    ]
    for c, h in enumerate(headers):
        _set_cell(historico, 0, c, h)

    doc.save()
    return target_path


def _inject_named_ranges(ods_path: Path, named_ranges: list[NamedRange]) -> None:
    with zipfile.ZipFile(ods_path, "r") as zf:
        content_xml = zf.read("content.xml")
        members = {info.filename: zf.read(info.filename) for info in zf.infolist()}

    root = etree.fromstring(content_xml)
    ns = root.nsmap

    office_ns = ns.get("office", "urn:oasis:names:tc:opendocument:xmlns:office:1.0")
    table_ns = ns.get("table", "urn:oasis:names:tc:opendocument:xmlns:table:1.0")

    spreadsheet = root.find(f".//{{{office_ns}}}spreadsheet")
    if spreadsheet is None:
        raise RuntimeError("Não encontrei office:spreadsheet em content.xml")

    named_exprs = spreadsheet.find(f"./{{{table_ns}}}named-expressions")
    if named_exprs is None:
        named_exprs = etree.Element(f"{{{table_ns}}}named-expressions")
        # Prepend for readability (before first table if possible)
        first_table = spreadsheet.find(f"./{{{table_ns}}}table")
        if first_table is not None:
            spreadsheet.insert(spreadsheet.index(first_table), named_exprs)
        else:
            spreadsheet.insert(0, named_exprs)

    # Remove duplicates by name (keep last)
    existing = {el.get(f"{{{table_ns}}}name"): el for el in named_exprs.findall(f"./{{{table_ns}}}named-range")}
    for nr in named_ranges:
        if nr.name in existing:
            named_exprs.remove(existing[nr.name])
        el = etree.Element(f"{{{table_ns}}}named-range")
        el.set(f"{{{table_ns}}}name", nr.name)
        el.set(f"{{{table_ns}}}cell-range-address", nr.cell_range_address)
        named_exprs.append(el)

    new_content = etree.tostring(root, xml_declaration=True, encoding="UTF-8", standalone="yes")

    with zipfile.ZipFile(ods_path, "w", compression=zipfile.ZIP_DEFLATED) as zf:
        for name, data in members.items():
            if name == "content.xml":
                zf.writestr(name, new_content)
            else:
                zf.writestr(name, data)


def main() -> int:
    repo_root = Path(__file__).resolve().parents[1]
    out_path = repo_root / "planilha-cotacao-yaris.ods"

    _build_document(out_path)

    named_ranges = [
        NamedRange("consumo_km_por_l", "Parametros.$B$3"),
        NamedRange("preco_combustivel_por_l", "Parametros.$B$4"),
        NamedRange("custo_lavagem_mensal", "Parametros.$B$5"),
        NamedRange("km_mensal_base", "Parametros.$B$6"),
        NamedRange("margem_percentual", "Parametros.$B$7"),
        NamedRange("margem_valor", "Parametros.$B$8"),
        NamedRange("tarifa_minima", "Parametros.$B$9"),
        NamedRange("tarifa_espera_por_hora", "Parametros.$B$10"),
        NamedRange("km_por_hora_referencia", "Parametros.$B$11"),
        NamedRange("usar_pedagio_percentual", "Parametros.$B$12"),
        NamedRange("pedagio_percentual_padrao", "Parametros.$B$13"),
        NamedRange("adicional_madrugada_modo", "Parametros.$B$14"),
        NamedRange("adicional_madrugada_padrao", "Parametros.$B$15"),
        NamedRange("custo_combustivel_por_km", "Parametros.$B$18"),
        NamedRange("custo_lavagem_por_km", "Parametros.$B$19"),
        NamedRange("custo_variavel_base_por_km", "Parametros.$B$20"),
    ]
    _inject_named_ranges(out_path, named_ranges)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

