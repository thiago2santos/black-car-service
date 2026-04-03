/**
 * Gera um Google Docs em formato A4, com hierarquia visual pensada
 * para um one-pager comercial B2B da C-Level Mobility.
 *
 * Antes de rodar:
 * 1. Crie um projeto Apps Script.
 * 2. Cole este arquivo no projeto.
 * 3. Ative o servico avancado "Google Docs API":
 *    Services > Add a service > Docs API
 * 4. Execute gerarOnePagerCLevelMobility().
 *
 * Saida esperada:
 * - 1 documento Google Docs
 * - formato A4
 * - tipografia e espacamento premium sobrios
 * - pensado para impressao em 1 folha
 */

function gerarOnePagerCLevelMobility() {
  const content = getOnePagerContent_();
  const doc = DocumentApp.create(content.documentTitle);
  const docId = doc.getId();

  applyA4DocumentStyle_(docId);

  const body = doc.getBody();
  body.clear();

  insertTopMeta_(body, content);
  insertHero_(body, content);
  insertProposalBlock_(body, content);
  insertPilotBox_(body, content);
  insertNextStepBox_(body, content);
  insertFooterNote_(body, content);

  doc.saveAndClose();

  Logger.log("Documento criado com sucesso:");
  Logger.log(doc.getUrl());

  return doc.getUrl();
}

function getOnePagerContent_() {
  return {
    documentTitle: "C-Level Mobility - One-pager comercial B2B",
    brand: "C-Level Mobility",
    category: "MOBILIDADE EXECUTIVA B2B",
    title: "Piloto corporativo de 30 dias para deslocamentos executivos planejados",
    subtitle:
      "Proposta inicial para empresas da regiao de Jundiai que precisam reduzir improviso e organizar melhor transfers para aeroportos e agendas corporativas.",
    forWhoTitle: "Para quem",
    forWhoBody:
      "Empresas que precisam atender executivos, visitantes e agendas corporativas planejadas com mais previsibilidade e um ponto de contato mais direto.",
    proposalTitle: "A proposta",
    proposalIntro:
      "A C-Level Mobility entra com um escopo inicial enxuto e orientado a rotina corporativa planejada:",
    proposalBullets: [
      "Transfers para GRU, CGH e VCP",
      "Deslocamentos corporativos regionais",
      "Atendimento direto e comunicacao clara",
      "Operacao orientada a previsibilidade, pontualidade e discricao"
    ],
    differentiationTitle: "Por que comecar assim",
    differentiationBullets: [
      "Escopo controlado e mais crivel",
      "Menos ruido operacional para a empresa",
      "Validacao antes de discutir um contrato maior"
    ],
    pilotTitle: "Piloto corporativo de 30 dias",
    pilotBody:
      "Nao como desconto. O piloto deve ser lido como uma fase controlada para validar rotina, frequencia, rotas e nivel de servico antes de evoluir para um formato recorrente maior.",
    pilotBullets: [
      "Testar aderencia do servico a rotina da empresa",
      "Mapear perfil de uso e principais rotas",
      "Decidir se faz sentido evoluir para recorrencia"
    ],
    nextStepTitle: "Proximo passo sugerido",
    nextStepBody:
      "Agendar uma conversa curta para avaliar perfil de uso, rotas mais frequentes e se faz sentido iniciar por um piloto corporativo de 30 dias.",
    footerLeft:
      "Eixo inicial: Jundiai - Sao Paulo - aeroportos",
    footerRight:
      "Material comercial inicial | formato A4",
    internalNote: ""
  };
}

function applyA4DocumentStyle_(documentId) {
  const requests = [
    {
      updateDocumentStyle: {
        documentStyle: {
          pageSize: {
            width: { magnitude: 595, unit: "PT" },
            height: { magnitude: 842, unit: "PT" }
          },
          marginTop: { magnitude: 34, unit: "PT" },
          marginBottom: { magnitude: 34, unit: "PT" },
          marginLeft: { magnitude: 36, unit: "PT" },
          marginRight: { magnitude: 36, unit: "PT" }
        },
        fields: "pageSize,marginTop,marginBottom,marginLeft,marginRight"
      }
    }
  ];

  try {
    Docs.Documents.batchUpdate({ requests: requests }, documentId);
  } catch (error) {
    Logger.log("Nao foi possivel aplicar estilo A4 via Docs API.");
    Logger.log("Ative o servico avancado Docs API no Apps Script.");
    Logger.log(error);
  }
}

function insertTopMeta_(body, content) {
  const meta = body.appendParagraph(content.category);
  styleKicker_(meta);

  const brand = body.appendParagraph(content.brand);
  styleBrand_(brand);
}

function insertHero_(body, content) {
  const title = body.appendParagraph(content.title);
  styleTitle_(title);

  const subtitle = body.appendParagraph(content.subtitle);
  styleSubtitle_(subtitle);

  body.appendHorizontalRule();

  const forWhoTitle = body.appendParagraph(content.forWhoTitle);
  styleSectionTitle_(forWhoTitle);

  const forWhoBody = body.appendParagraph(content.forWhoBody);
  styleBody_(forWhoBody);
}

function insertProposalBlock_(body, content) {
  const title = body.appendParagraph(content.proposalTitle);
  styleSectionTitle_(title);

  const intro = body.appendParagraph(content.proposalIntro);
  styleBody_(intro);

  appendBullets_(body, content.proposalBullets);

  const differentiationTitle = body.appendParagraph(content.differentiationTitle);
  styleMiniTitle_(differentiationTitle);

  appendBullets_(body, content.differentiationBullets, true);
}

function insertPilotBox_(body, content) {
  const table = body.appendTable([[content.pilotTitle], [content.pilotBody]]);
  styleHighlightTable_(table, "#F5EFE3", "#1E2A38");

  const titleCell = table.getCell(0, 0);
  const titleParagraph = titleCell.getChild(0).asParagraph();
  styleBoxTitle_(titleParagraph);

  const bodyCell = table.getCell(1, 0);
  const bodyParagraph = bodyCell.getChild(0).asParagraph();
  styleBoxBody_(bodyParagraph);

  for (let i = 0; i < content.pilotBullets.length; i++) {
    const paragraph = bodyCell.appendParagraph("• " + content.pilotBullets[i]);
    styleBoxBullet_(paragraph);
  }
}

function insertNextStepBox_(body, content) {
  const table = body.appendTable([[content.nextStepTitle], [content.nextStepBody]]);
  styleHighlightTable_(table, "#1F2C3A", "#FFFFFF");

  const titleCell = table.getCell(0, 0);
  const titleParagraph = titleCell.getChild(0).asParagraph();
  styleDarkBoxTitle_(titleParagraph);

  const bodyCell = table.getCell(1, 0);
  const bodyParagraph = bodyCell.getChild(0).asParagraph();
  styleDarkBoxBody_(bodyParagraph);
}

function insertFooterNote_(body, content) {
  body.appendParagraph("");

  const footerTable = body.appendTable([[content.footerLeft, content.footerRight]]);
  try {
    footerTable.setBorderWidth(0);
  } catch (error) {
    Logger.log("Nao foi possivel remover a borda da tabela de rodape.");
  }

  const leftCellParagraph = footerTable.getCell(0, 0).getChild(0).asParagraph();
  styleFooterText_(leftCellParagraph, false);

  const rightCellParagraph = footerTable.getCell(0, 1).getChild(0).asParagraph();
  styleFooterText_(rightCellParagraph, true);

  if (content.internalNote) {
    const note = body.appendParagraph(content.internalNote);
    styleInternalNote_(note);
  }
}

function appendBullets_(body, items, compact) {
  const indent = compact ? 10 : 12;
  const spacingBefore = compact ? 1 : 2;
  const spacingAfter = compact ? 0 : 1;

  items.forEach(function(item) {
    const p = body.appendParagraph("• " + item);
    p.setIndentStart(indent);
    p.setSpacingBefore(spacingBefore);
    p.setSpacingAfter(spacingAfter);
    const text = p.editAsText();
    text.setFontFamily("Source Sans Pro");
    text.setFontSize(compact ? 9.5 : 10);
    text.setForegroundColor("#243241");
  });
}

function styleKicker_(paragraph) {
  paragraph.setSpacingAfter(1);
  paragraph.setAlignment(DocumentApp.HorizontalAlignment.LEFT);
  const text = paragraph.editAsText();
  text.setFontFamily("Source Sans Pro");
  text.setFontSize(8);
  text.setBold(true);
  text.setForegroundColor("#8C6B2E");
}

function styleBrand_(paragraph) {
  paragraph.setSpacingAfter(5);
  const text = paragraph.editAsText();
  text.setFontFamily("Merriweather");
  text.setFontSize(12);
  text.setBold(true);
  text.setForegroundColor("#1E2A38");
}

function styleTitle_(paragraph) {
  paragraph.setSpacingBefore(1);
  paragraph.setSpacingAfter(4);
  const text = paragraph.editAsText();
  text.setFontFamily("Merriweather");
  text.setFontSize(18.5);
  text.setBold(true);
  text.setForegroundColor("#16212B");
}

function styleSubtitle_(paragraph) {
  paragraph.setSpacingAfter(6);
  const text = paragraph.editAsText();
  text.setFontFamily("Source Sans Pro");
  text.setFontSize(10);
  text.setForegroundColor("#4C5A68");
}

function styleSectionTitle_(paragraph) {
  paragraph.setSpacingBefore(6);
  paragraph.setSpacingAfter(2);
  const text = paragraph.editAsText();
  text.setFontFamily("Source Sans Pro");
  text.setFontSize(9);
  text.setBold(true);
  text.setForegroundColor("#8C6B2E");
}

function styleMiniTitle_(paragraph) {
  paragraph.setSpacingBefore(5);
  paragraph.setSpacingAfter(1);
  const text = paragraph.editAsText();
  text.setFontFamily("Source Sans Pro");
  text.setFontSize(9);
  text.setBold(true);
  text.setForegroundColor("#1E2A38");
}

function styleBody_(paragraph) {
  paragraph.setSpacingAfter(2);
  const text = paragraph.editAsText();
  text.setFontFamily("Source Sans Pro");
  text.setFontSize(10);
  text.setForegroundColor("#243241");
}

function styleHighlightTable_(table, backgroundColor, foregroundColor) {
  try {
    table.setBorderWidth(0);
  } catch (error) {
    Logger.log("Nao foi possivel ajustar borda da tabela.");
  }

  for (let row = 0; row < table.getNumRows(); row++) {
    const cell = table.getCell(row, 0);
    cell.setBackgroundColor(backgroundColor);
    try {
      cell.setPaddingTop(4);
      cell.setPaddingBottom(4);
      cell.setPaddingLeft(6);
      cell.setPaddingRight(6);
    } catch (error) {
      Logger.log("Nao foi possivel aplicar padding completo na tabela.");
    }

    const paragraph = cell.getChild(0).asParagraph();
    const text = paragraph.editAsText();
    text.setForegroundColor(foregroundColor);
  }
}

function styleBoxTitle_(paragraph) {
  paragraph.setSpacingBefore(1);
  paragraph.setSpacingAfter(1);
  const text = paragraph.editAsText();
  text.setFontFamily("Merriweather");
  text.setFontSize(11.5);
  text.setBold(true);
  text.setForegroundColor("#1E2A38");
}

function styleBoxBody_(paragraph) {
  paragraph.setSpacingAfter(2);
  const text = paragraph.editAsText();
  text.setFontFamily("Source Sans Pro");
  text.setFontSize(9.5);
  text.setForegroundColor("#243241");
}

function styleBoxBullet_(paragraph) {
  paragraph.setIndentStart(8);
  paragraph.setSpacingBefore(0);
  paragraph.setSpacingAfter(0);
  const text = paragraph.editAsText();
  text.setFontFamily("Source Sans Pro");
  text.setFontSize(9);
  text.setForegroundColor("#243241");
}

function styleDarkBoxTitle_(paragraph) {
  paragraph.setSpacingBefore(1);
  paragraph.setSpacingAfter(1);
  const text = paragraph.editAsText();
  text.setFontFamily("Merriweather");
  text.setFontSize(11);
  text.setBold(true);
  text.setForegroundColor("#FFFFFF");
}

function styleDarkBoxBody_(paragraph) {
  paragraph.setSpacingAfter(1);
  const text = paragraph.editAsText();
  text.setFontFamily("Source Sans Pro");
  text.setFontSize(9.5);
  text.setForegroundColor("#F2F4F7");
}

function styleFooterText_(paragraph, alignRight) {
  paragraph.setSpacingBefore(3);
  paragraph.setSpacingAfter(0);
  paragraph.setAlignment(
    alignRight
      ? DocumentApp.HorizontalAlignment.RIGHT
      : DocumentApp.HorizontalAlignment.LEFT
  );
  const text = paragraph.editAsText();
  text.setFontFamily("Source Sans Pro");
  text.setFontSize(8);
  text.setForegroundColor("#6C7782");
}

function styleInternalNote_(paragraph) {
  paragraph.setSpacingBefore(4);
  const text = paragraph.editAsText();
  text.setFontFamily("Source Sans Pro");
  text.setFontSize(8);
  text.setItalic(true);
  text.setForegroundColor("#8A9099");
}
