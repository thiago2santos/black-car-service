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

function createThankYouPage() {
  // URL base da sua landing (ex.: https://blackcarsservice.netlify.app)
  var landingUrl = "https://seusite.com";
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
  var landingUrl = "https://seusite.com";
  var html = '<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Erro – Black Cars Service</title></head><body style="margin:0;min-height:100vh;background:#020617;color:#f8fafc;font-family:system-ui,-apple-system,sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1.5rem;box-sizing:border-box;">'
    + '<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:2rem;">'
    + '<span style="display:inline-flex;height:2.5rem;width:2.5rem;align-items:center;justify-content:center;border-radius:9999px;background:#f1f5f9;color:#020617;font-size:0.875rem;font-weight:600;">BC</span>'
    + '<div><span style="display:block;font-size:0.875rem;font-weight:600;">Black Cars Service</span><span style="display:block;font-size:0.75rem;color:#94a3b8;">Transporte executivo em Jundiaí</span></div>'
    + '</div>'
    + '<div style="max-width:28rem;width:100%;padding:2rem;border:1px solid #1e293b;border-radius:1rem;background:rgba(15,23,42,0.6);text-align:center;">'
    + '<h1 style="margin:0 0 0.75rem;font-size:1.25rem;font-weight:600;">Erro ao enviar</h1>'
    + '<p style="margin:0 0 1.5rem;font-size:0.9375rem;color:#94a3b8;">Tente novamente ou entre em contato por WhatsApp.</p>'
    + '<a href="' + landingUrl + '" style="display:inline-flex;align-items:center;justify-content:center;padding:0.625rem 1.25rem;border-radius:9999px;background:#fbbf24;color:#020617;font-size:0.875rem;font-weight:600;text-decoration:none;">Voltar ao site</a>'
    + '</div>'
    + '</body></html>';
  return HtmlService.createHtmlOutput(html).setTitle("Erro");
}
