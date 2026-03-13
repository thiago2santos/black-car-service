/**
 * Google Apps Script – Web App que recebe o envio do formulário da landing
 * e grava uma nova linha na planilha.
 *
 * COMO USAR:
 * 1. Crie uma nova planilha no Google Sheets (drive.google.com) com a conta que você usa (ex.: thiago4all@gmail.com).
 * 2. Em Ferramentas (ou Extensões) > Script do editor do Apps Script.
 * 3. Apague o conteúdo padrão e cole este arquivo inteiro.
 * 4. Ajuste o nome da aba da planilha abaixo, se quiser (padrão: "Leads").
 * 5. Salve (Ctrl+S) e clique em Implantar > Nova implantação > Tipo: Aplicativo da Web.
 *    - Descrição: ex. "Receber formulário landing"
 *    - Executar como: Eu (seu e-mail)
 *    - Quem pode acessar: Qualquer pessoa
 * 6. Clique em Implantar e copie a URL do aplicativo da web (termina em /exec).
 * 7. Na landing, no <form>, preencha o atributo data-submit-url com essa URL (veja instruções no index.html ou no README).
 *
 * A primeira linha da aba "Leads" será usada como cabeçalho. Se a aba estiver vazia,
 * o script adiciona os cabeçalhos na primeira execução.
 */

var SHEET_NAME = "Leads";
// E-mail que receberá notificações de novos leads.
// Troque pelo seu e-mail (ex.: "thiago4all@gmail.com").
var NOTIFY_EMAIL = "thisanti@hotmail.com";

function doPost(e) {
  try {
    var params = e.parameter;
    var sheet = getOrCreateSheet();

    var timestamp = new Date();
    var row = [
      timestamp,
      params.name || "",
      params.company || "",
      params.email || "",
      params.phone || "",
      params.origin || "",
      params.destination || "",
      params.date || "",
      params.time || "",
      params.passengers || "",
      params.serviceType || "",
      params.notes || ""
    ];

    sheet.appendRow(row);

    try {
      sendNotificationEmail(params, timestamp);
    } catch (notifyErr) {
      // Não quebra o fluxo se o e-mail falhar.
      console.error("Erro ao enviar e-mail de notificação:", notifyErr);
    }

    return createThankYouPage();
  } catch (err) {
    return createErrorPage(err.message);
  }
}

function getOrCreateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Data/Hora",
      "Nome",
      "Empresa",
      "E-mail",
      "Telefone",
      "Origem",
      "Destino",
      "Data viagem",
      "Horário",
      "Passageiros",
      "Tipo de serviço",
      "Observações"
    ]);
  }

  return sheet;
}

function sendNotificationEmail(params, timestamp) {
  if (!NOTIFY_EMAIL || NOTIFY_EMAIL === "thisanti@hotmail.com") {
    // E-mail de notificação não configurado.
    return;
  }

  var subject = "Novo lead – C-Level Mobility";

  var lines = [];
  lines.push("Novo lead recebido em " + timestamp.toLocaleString() + ":");
  lines.push("");
  lines.push("Nome: " + (params.name || ""));
  lines.push("Empresa: " + (params.company || ""));
  lines.push("E-mail: " + (params.email || ""));
  lines.push("Telefone: " + (params.phone || ""));
  lines.push("Origem: " + (params.origin || ""));
  lines.push("Destino: " + (params.destination || ""));
  lines.push("Data da viagem: " + (params.date || ""));
  lines.push("Horário desejado: " + (params.time || ""));
  lines.push("Passageiros: " + (params.passengers || ""));
  lines.push("Tipo de serviço: " + (params.serviceType || ""));
  lines.push("");
  lines.push("Observações:");
  lines.push(params.notes || "-");

  var body = lines.join("\n");

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: subject,
    body: body,
    replyTo: params.email || undefined
  });
}

function createThankYouPage() {
  // URL base da sua landing (ex.: https://blackcarsservice.netlify.app)
  var landingUrl = "http://127.0.0.1:5500/index.html";
  // Acrescenta um marcador opcional na query string para você exibir uma mensagem na landing, se quiser.
  var redirectUrl = landingUrl + "?sent=1";

  var html =
    '<!DOCTYPE html><html lang="pt-BR"><head>' +
    '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<title>Redirecionando…</title>' +
    '<script>window.location.replace("' + redirectUrl + '");</script>' +
    '</head><body style="margin:0;min-height:100vh;background:#020617;"></body></html>';

  return HtmlService.createHtmlOutput(html).setTitle("Redirecionando…");
}

function createErrorPage(message) {
  var landingUrl = "http://127.0.0.1:5500/index.html";
  var html = '<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Erro – C-Level Mobility</title></head><body style="margin:0;min-height:100vh;background:#020617;color:#f8fafc;font-family:system-ui,-apple-system,sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1.5rem;box-sizing:border-box;">'
    + '<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:2rem;">'
    + '<span style="display:inline-flex;height:2.5rem;width:2.5rem;align-items:center;justify-content:center;border-radius:9999px;background:#f1f5f9;color:#020617;font-size:0.875rem;font-weight:600;">BC</span>'
    + '<div><span style="display:block;font-size:0.875rem;font-weight:600;">C-Level Mobility</span><span style="display:block;font-size:0.75rem;color:#94a3b8;">Transporte executivo em Jundiaí</span></div>'
    + '</div>'
    + '<div style="max-width:28rem;width:100%;padding:2rem;border:1px solid #1e293b;border-radius:1rem;background:rgba(15,23,42,0.6);text-align:center;">'
    + '<h1 style="margin:0 0 0.75rem;font-size:1.25rem;font-weight:600;">Erro ao enviar</h1>'
    + '<p style="margin:0 0 1.5rem;font-size:0.9375rem;color:#94a3b8;">Tente novamente ou entre em contato por WhatsApp.</p>'
    + '<a href="' + landingUrl + '" style="display:inline-flex;align-items:center;justify-content:center;padding:0.625rem 1.25rem;border-radius:9999px;background:#fbbf24;color:#020617;font-size:0.875rem;font-weight:600;text-decoration:none;">Voltar ao site</a>'
    + '</div>'
    + '</body></html>';
  return HtmlService.createHtmlOutput(html).setTitle("Erro");
}
