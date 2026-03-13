# Integração do formulário com Google Sheets

O formulário de cotação da landing pode enviar os dados para uma planilha do Google Sheets usando sua conta Google (ex.: [thiago4all@gmail.com](mailto:thiago4all@gmail.com)). Assim você centraliza os leads em uma planilha sem precisar de backend próprio.

## Passo a passo

### 1. Criar a planilha

1. Acesse [Google Drive](https://drive.google.com) e entre com sua conta Google.
2. **Arquivo > Novo > Google Planilhas** (ou acesse [sheets.google.com](https://sheets.google.com) e crie uma nova planilha).
3. Dê um nome à planilha (ex.: "**C-Level Mobility – Leads**").

### 2. Abrir o Apps Script

1. Na planilha: **Extensões > Apps Script** (ou **Ferramentas > Script do editor**).
2. O editor do Apps Script abrirá em outra aba. Apague o código que aparecer (a função `myFunction`).
3. Abra o arquivo `**scripts/google-sheets-webapp.gs`** deste projeto, copie todo o conteúdo e cole no editor do Apps Script.
4. (Opcional) No script, altere a variável `SHEET_NAME` se quiser outro nome para a aba (padrão: `"Leads"`).
5. (Opcional) Na função `createThankYouPage()`, troque `"https://seusite.com"` pela URL real da sua landing (para o link “Voltar ao site” na página de agradecimento).
6. Salve o projeto (Ctrl+S) e dê um nome ao projeto (ex.: “Receber formulário landing”).

### 3. Implantar como Web App

1. No editor do Apps Script: **Implantar > Nova implantação**.
2. Ao lado de “Selecionar tipo”, clique no ícone e escolha **Aplicativo da Web**.
3. Preencha:
  - **Descrição:** ex. “Formulário landing”
  - **Executar como:** **Eu** (sua conta, ex.: [thiago4all@gmail.com](mailto:thiago4all@gmail.com))
  - **Quem pode acessar:** **Qualquer pessoa** (para o formulário na internet poder enviar)
4. Clique em **Implantar**.
5. Na primeira vez, o Google pedirá **Autorizar o acesso**: escolha sua conta, avance e permita o acesso ao projeto.
6. Depois da implantação, será exibida a **URL do aplicativo da web**. Copie essa URL (ela termina em `/exec`).

### 4. Colar a URL na landing

1. Abra o `**index.html`** do projeto.
2. Localize o `<form id="contact-form" ... data-submit-url="">`.
3. Cole a URL que você copiou dentro de `data-submit-url=""`, por exemplo:
  ```html
   data-submit-url="https://script.google.com/macros/s/SUA_ID_AQUI/exec"
  ```
4. Salve o arquivo.

### 5. Testar

1. Abra a landing no navegador e preencha o formulário de cotação.
2. Clique em **Enviar solicitação**.
3. A página deve redirecionar para a mensagem “Obrigado! Entraremos em contato em breve.” e, na planilha, deve aparecer uma nova linha com os dados enviados.

## Colunas na planilha

Na primeira execução, o script cria a aba (padrão: **Leads**) e, se estiver vazia, adiciona uma linha de cabeçalho com:

| Data/Hora | Nome | Empresa | E-mail | Telefone | Origem | Destino | Data viagem | Horário | Passageiros | Tipo de serviço | Observações |

Cada envio do formulário vira uma nova linha nessa aba.

## Segurança

- A Web App está configurada para **Qualquer pessoa** poder **acessar** (enviar o formulário). Apenas a sua conta Google que implantou o script tem permissão para ver/editar a planilha.
- Não coloque a URL do script em repositórios públicos se quiser evitar que alguém envie dados indevidos; para uso normal da landing, esse risco costuma ser aceitável. Se quiser, depois dá para restringir por domínio com um pouco mais de configuração.

## Problemas comuns

- **“Configure a URL de envio”** ao enviar: você ainda não preencheu `data-submit-url` no `index.html` com a URL da Web App.
- **Página em branco ou erro após enviar:** confira se o script foi colado por completo e se a implantação está como “Aplicativo da Web” e “Qualquer pessoa”.
- **Dados não aparecem na planilha:** verifique se o script está vinculado à planilha correta (Apps Script aberto a partir dessa planilha) e se o nome da aba no script (`SHEET_NAME`) existe ou pode ser criado.

