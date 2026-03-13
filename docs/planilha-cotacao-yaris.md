# Planilha de Cotação (Yaris) — Especificação

## Objetivo

Modelo de planilha (LibreOffice Calc / `.ods`) para cotar 1 corrida/diária por vez com modelo híbrido:

- **Preço por km** (baseado em custos variáveis por km + pedágio/estacionamento + margem)
- **Preço por hora** (converte horas em km equivalentes via parâmetro de velocidade de referência + espera)
- **Preço recomendado** = `MAX(preco_km; preco_h; tarifa_minima)`

Escopo inicial (custos variáveis imediatos):

- Combustível
- Lavagem/higienização (rateada por km)
- Pedágio/estacionamento (informado na cotação; opcional % padrão)

## Convenções

- **Separador de função**: `;` (padrão pt-BR no Calc).
- **Moeda**: BRL (R$).
- **Campos vazios**: quando `distancia_km` ou `duracao_horas` estiverem vazios, a planilha ainda deve calcular a alternativa disponível.
- **Preenchimento mínimo para cotar**:
  - `cliente` + `tipo_servico` + (`distancia_km` ou `duracao_horas`).

## Abas

- `Parametros`: premissas editáveis + cálculos derivados.
- `Cotacao`: formulário (1 cotação) + blocos de cálculo + resumo para cliente.
- `Historico`: tabela para copiar/colar resultados de várias cotações.
- `Listas`: listas para validação (tipos de serviço, adicionais, textos padrão).

---

## Aba `Parametros`

### Layout sugerido (células)

Tabela com 4 colunas:

- **A**: chave (nome amigável)
- **B**: valor
- **C**: unidade
- **D**: observação

#### Entradas (valores editáveis)

- `B3` **consumo_km_por_l** (ex.: `8`)
- `B4` **preco_combustivel_por_l** (ex.: `6,50`)
- `B5` **custo_lavagem_mensal** (ex.: `320`)
- `B6` **km_mensal_base** (ex.: `4000`) — usado para ratear lavagem por km (premissa do orçamento)
- `B7` **margem_percentual** (ex.: `0,35`) — usar como percentual decimal (35% = 0,35)
- `B8` **margem_valor** (ex.: `0`) — ajuste fixo em R$
- `B9` **tarifa_minima** (ex.: `180`)
- `B10` **tarifa_espera_por_hora** (ex.: `60`)
- `B11` **km_por_hora_referencia** (ex.: `40`) — conversão hora→km equivalente
- `B12` **usar_pedagio_percentual** (ex.: `0`/`1`) — toggle (0 = usar valor direto; 1 = usar %)
- `B13` **pedagio_percentual_padrao** (ex.: `0,00`) — se `usar_pedagio_percentual=1`, aplica-se sobre subtotal de custo variável
- `B14` **adicional_madrugada_modo** (texto: `"VALOR"` ou `"PERCENTUAL"`)
- `B15` **adicional_madrugada_padrao** (ex.: `0` ou `0,10`)

#### Derivados (cálculos)

- `B18` **custo_combustivel_por_km**
  - Fórmula: `=B4/B3`
- `B19` **custo_lavagem_por_km**
  - Fórmula: `=B5/B6`
- `B20` **custo_variavel_base_por_km**
  - Fórmula: `=B18+B19`

### Nomes de intervalos (named ranges)

Crie nomes para as entradas/derivados acima (idealmente apontando para a célula da coluna B):

- `consumo_km_por_l` → `Parametros.$B$3`
- `preco_combustivel_por_l` → `Parametros.$B$4`
- `custo_lavagem_mensal` → `Parametros.$B$5`
- `km_mensal_base` → `Parametros.$B$6`
- `margem_percentual` → `Parametros.$B$7`
- `margem_valor` → `Parametros.$B$8`
- `tarifa_minima` → `Parametros.$B$9`
- `tarifa_espera_por_hora` → `Parametros.$B$10`
- `km_por_hora_referencia` → `Parametros.$B$11`
- `usar_pedagio_percentual` → `Parametros.$B$12`
- `pedagio_percentual_padrao` → `Parametros.$B$13`
- `adicional_madrugada_modo` → `Parametros.$B$14`
- `adicional_madrugada_padrao` → `Parametros.$B$15`
- `custo_combustivel_por_km` → `Parametros.$B$18`
- `custo_lavagem_por_km` → `Parametros.$B$19`
- `custo_variavel_base_por_km` → `Parametros.$B$20`

---

## Aba `Cotacao`

### Layout sugerido

Separar em 4 blocos:

1. **Formulário** (entradas)
2. **Cálculo por km**
3. **Cálculo por hora**
4. **Resumo para o cliente** (limpo)

### Formulário (entradas)

Sugestão de células (coluna B para valores):

- `B3` **cliente** (texto)
- `B4` **data_hora** (data/hora)
- `B5` **origem** (texto)
- `B6` **destino** (texto)
- `B7` **tipo_servico** (lista: `transfer`, `diaria`, `evento`)
- `B9` **distancia_km** (número; pode ficar vazio)
- `B10` **km_extra** (número; default 0)
- `B11` **duracao_horas** (número; pode ficar vazio)
- `B12` **tempo_espera_horas** (número; default 0)
- `B13` **pedagio_estacionamento** (R$; pode ficar vazio se for usar %)
- `B14` **adicional_madrugada** (R$ ou %; pode ficar vazio)

Derivados auxiliares:

- `B16` **km_total**:
  - Fórmula: `=SE(ÉCÉL.VAZIA(B9);0;B9)+SE(ÉCÉL.VAZIA(B10);0;B10)`

Pedágio efetivo:

- `B17` **pedagio_efetivo**:
  - Fórmula:
    - `=SE(usar_pedagio_percentual=1; (B16*custo_variavel_base_por_km)*pedagio_percentual_padrao; SE(ÉCÉL.VAZIA(B13);0;B13))`

Adicional madrugada efetivo (em R$):

- `B18` **adicional_madrugada_valor**:
  - Fórmula:
    - `=SE(ÉCÉL.VAZIA(B14);0;SE(adicional_madrugada_modo="PERCENTUAL"; (B16*custo_variavel_base_por_km + B17)*B14; B14))`

### Bloco “Preço por km”

- `B22` **custo_variavel_km**:
  - Fórmula: `=B16*custo_variavel_base_por_km`
- `B23` **subtotal_km**:
  - Fórmula: `=B22+B17`
- `B24` **preco_km**:
  - Fórmula: `=SE(B16=0;0; B23*(1+margem_percentual)+margem_valor+B18)`

### Bloco “Preço por hora”

Km equivalentes:

- `B28` **km_equivalente_hora**:
  - Fórmula: `=SE(ÉCÉL.VAZIA(B11);0;B11*km_por_hora_referencia)`

Custos:

- `B29` **custo_variavel_h**:
  - Fórmula: `=B28*custo_variavel_base_por_km`
- `B30` **custo_espera**:
  - Fórmula: `=SE(ÉCÉL.VAZIA(B12);0;B12*tarifa_espera_por_hora)`
- `B31` **subtotal_h**:
  - Fórmula: `=B29+B17+B30`
- `B32` **preco_h**:
  - Fórmula: `=SE(B28=0;0; B31*(1+margem_percentual)+margem_valor+B18)`

### Preço recomendado

- `B35` **preco_recomendado**:
  - Fórmula: `=MAX(SE(B24=0;0;B24); SE(B32=0;0;B32); tarifa_minima)`

### Resumo para o cliente (limpo)

Quadro com:

- Serviço / data / rota (origem→destino)
- Inclusões/exclusões (ex.: pedágios incluídos? espera incluída?)
- Condições (validade, cancelamento, no-show — texto padrão em `Listas`)
- **Preço final recomendado** (valor de `preco_recomendado`)

---

## Aba `Historico`

### Colunas sugeridas

Cada linha = 1 cotação (copiar/colar valores da aba `Cotacao`):

- `data_hora`
- `cliente`
- `tipo_servico`
- `origem`
- `destino`
- `distancia_km`
- `km_extra`
- `duracao_horas`
- `tempo_espera_horas`
- `pedagio_estacionamento` (valor informado)
- `preco_km`
- `preco_h`
- `preco_recomendado`

Opcional (para calibração):

- `custo_variavel_base_por_km` usado na cotação (snapshot)
- `margem_percentual` usado na cotação (snapshot)

---

## Aba `Listas`

Listas para validação:

- `tipos_servico`: `transfer`, `diaria`, `evento`
- `adicional_madrugada_modo`: `VALOR`, `PERCENTUAL`

Textos padrão (opcional):

- `condicoes_padrao_cliente`
- `politica_cancelamento`
- `observacoes_inclusoes`

---

## Validações recomendadas (Calc)

- Números **não negativos** (`distancia_km`, `km_extra`, `duracao_horas`, `tempo_espera_horas`, valores monetários).
- `tipo_servico`: lista (validação por intervalo em `Listas`).
- `adicional_madrugada_modo`: lista.
- Campos obrigatórios destacados via formatação condicional (ex.: `cliente`, `tipo_servico` e pelo menos um entre `distancia_km` e `duracao_horas`).

---

## Notas de evolução (sem mudar o modelo)

Deixar reservado na aba `Parametros` (linhas abaixo) para, quando ativar, incluir:

- manutenção/pneus por km
- depreciação por km
- seguro/IPVA por km

A ideia é somar isso em um futuro `custo_fixos_rateados_por_km` e passar a:

- `custo_total_base_por_km = custo_variavel_base_por_km + custo_fixos_rateados_por_km`

