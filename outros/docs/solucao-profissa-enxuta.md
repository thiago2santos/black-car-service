### Arquitetura “profissa enxuta” – C-Level Mobility

Este documento resume a solução final desenhada para o MVP, focando em **poucos serviços**, baixo custo e sensação de produto profissional.

---

### Visão geral da arquitetura

- **Front (landing page)**  
  - Home consolidada em **WordPress** com tema customizado em `4.canais/site-institucional/wordpress/wp-content/themes/c-level-mobility-theme/`.
  - Público alvo: indústrias, hotéis e executivos de Jundiaí/região.
  - Recursos principais:
    - Conteúdo em **pt-BR/en/es** (i18n).
    - Formulário de cotação (nome, empresa, e-mail, telefone, origem, destino, data, horário, passageiros, tipo de serviço, observações).
    - Autocomplete de **Origem/Destino** com Nominatim (OpenStreetMap).
    - Validações mínimas no front (HTML5 + JS).
    - Banner discreto de sucesso quando o lead é enviado.

- **Backend de leads (versão enxuta/profissa)**  
  - **Nível 1 (atual)**:
    - Formulário → **Google Apps Script Web App** → **Google Sheets + e-mail**.
  - **Nível 2 (evolução profissional)**:
    - Formulário → **API Gateway/Lambda** (AWS) → **Apps Script** → **Google Sheets + e-mail**.
  - Objetivo: o navegador fala **só com o seu domínio**; Apps Script e Sheets ficam “atrás do palco”.

---

### Componentes detalhados

#### 1. Frontend no WordPress

- **Hospedagem alvo**:
  - WordPress como origem principal do site.
  - Tema customizado centralizando layout, scripts e traduções da landing.

- **Funcionalidades da landing**:
  - UI escura (slate) com destaques em âmbar (amber).
  - Seletor de idiomas (PT / EN / ES) com JS de i18n do tema (`4.canais/site-institucional/wordpress/wp-content/themes/c-level-mobility-theme/assets/js/lang.js`) e `locales/*.json`.
  - Formulário de cotação com:
    - Campos obrigatórios com `required`, `minlength`, `pattern` (telefone).
    - Scroll automático até o primeiro campo inválido no envio.
    - Autocomplete de origem e destino (`4.canais/site-institucional/wordpress/wp-content/themes/c-level-mobility-theme/assets/js/destination-autocomplete.js`) usando Nominatim.
  - Banner de feedback:
    - Quando a URL tem `?sent=1`, mostra um aviso discreto de **“Solicitação recebida com sucesso”**.
    - JS remove o parâmetro da URL para deixá-la limpa após o carregamento.

#### 2. Camada de automação atual (Google Apps Script + Sheets)

- **Arquivo**: `outros/scripts/google-sheets-webapp.gs`
- **Fluxo**:
  1. Formulário envia `POST` para a URL do Apps Script (Web App).
  2. Função `doPost(e)`:
     - Lê os parâmetros do formulário (`e.parameter`).
     - Garante que a aba **Leads** existe e tem cabeçalho.
     - Adiciona uma nova linha com:
       - Data/Hora
       - Nome, Empresa, E-mail, Telefone
       - Origem, Destino, Data da viagem, Horário
       - Passageiros, Tipo de serviço, Observações
     - Chama `sendNotificationEmail(...)`:
       - Envia e-mail para `NOTIFY_EMAIL` com todos os dados do lead.
  3. Função `createThankYouPage()`:
     - Deixou de exibir uma página “própria” de obrigado.
     - Agora **redireciona imediatamente de volta para a landing** usando `window.location.replace(landingUrl + "?sent=1")`.
     - O usuário vê apenas o domínio da sua landing; a gestão de leads fica oculta.

- **Campos configuráveis**:
  - `SHEET_NAME`: nome da aba na planilha (padrão: `"Leads"`).
  - `NOTIFY_EMAIL`: e-mail que recebe notificação de novo lead.
  - `landingUrl`: URL pública da landing (usada no redirect).

#### 3. Evolução “API Gateway/Lambda → Apps Script”

Quando você quiser “subir de nível” na arquitetura mantendo custos baixos:

- **API Gateway + Lambda (AWS)**:
  - Expor um endpoint `POST /lead` (ex.: `https://api.seu-dominio.com/lead`).
  - A função Lambda:
    - Recebe o JSON com os dados do formulário.
    - Faz um **POST HTTP server-side** para a mesma URL do Apps Script (hoje usada pelo formulário).
    - Opcional: valida campos e loga em CloudWatch.
  - Vantagens:
    - O navegador só enxerga **seu domínio** (API e front).
    - Apps Script continua cuidando da planilha + e-mail, sem reescrever a lógica.
    - Usa poucos serviços AWS (API Gateway, Lambda) e se mantém, na prática, dentro do free tier para baixo volume.

- **Formulário na landing**:
  - `data-submit-url` passa a apontar para a API (`https://api.seu-dominio.com/lead`), não mais para o Apps Script.
  - O resto do fluxo (planilha + e-mail + `?sent=1` + banner) continua igual.

---

### Motivações da solução

- **Baixo custo e simplicidade**:
  - Front concentrado em uma única implementação WordPress.
  - Orquestração de leads reaproveitando **Google Sheets + Apps Script**.
  - Lambda só como “ponte” para esconder detalhes de automação do cliente final.

- **Experiência profissional para o usuário**:
  - Sempre navega em URLs do seu domínio.
  - Recebe feedback visual claro de envio (banner discreto na landing).
  - Não fica exposto a URLs de automação (Apps Script, planilha, etc.).

- **Escalabilidade incremental**:
  - Pode trocar a persistência (Sheets → DynamoDB) no futuro sem mexer no front.
  - Pode adicionar novas saídas (e.g. Slack/WhatsApp API) na Lambda mantendo a planilha como “backup” ou relatório.

---

### Observação de consolidação

- A implementação estática antiga da landing na raiz do projeto (`index.html` + `assets/`) foi arquivada via soft delete.
- A fonte oficial da landing passou a ser o tema `4.canais/site-institucional/wordpress/wp-content/themes/c-level-mobility-theme/`.

