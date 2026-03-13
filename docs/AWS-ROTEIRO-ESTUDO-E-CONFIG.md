### Roteiro de estudo e configuração AWS – C-Level Mobility

Este roteiro foca em **hospedar a landing** e preparar a **camada de API** usando o mínimo de serviços AWS possível para validar o MVP.

---

### 1. Fundamentos rápidos de AWS

- **IAM**
  - Conceitos: usuário, role, policy, permissões mínimas (least privilege).
  - Prática: criar um usuário de desenvolvimento com acesso programático e console.
- **Região**
  - Escolher UMA região padrão (ex.: `us-east-1`) e usá-la em todos os serviços do MVP.
- **Ferramentas**
  - Console AWS (web).
  - (Opcional) AWS CLI configurado (`aws configure`) para operações de script.

---

### 2. Hospedar a landing como site estático (S3)

1. **Criar bucket S3**
   - Nome ex.: `black-cars-service-landing`.
   - Região: a que você escolheu (ex.: `us-east-1`).
2. **Ativar static website hosting**
   - Em **Properties > Static website hosting**.
   - Habilitar e definir:
     - *Index document*: `index.html`.
     - (Opcional) *Error document*: `404.html`.
3. **Upload da landing**
   - Subir `index.html`, pasta `assets/`, `assets/js/` etc.
4. **Permitir leitura pública dos objetos**
   - Em **Permissions**:
     - Desmarcar “Block all public access” apenas para esse bucket (com atenção).
     - Adicionar uma **Bucket Policy** permitindo `s3:GetObject` em `arn:aws:s3:::NOME-DO-BUCKET/*` para `Principal: *`.
5. **Testar**
   - Usar a URL de website do S3 (mostrada em Static website hosting), do tipo:  
     `http://NOME-DO-BUCKET.s3-website-REGIAO.amazonaws.com`.

---

### 3. Deixar “produtivo”: CloudFront + domínio + HTTPS

#### 3.1. Certificado SSL (ACM)

1. Em **AWS Certificate Manager (ACM)**:
   - Solicitar certificado público para:
     - `seu-dominio.com`
     - `www.seu-dominio.com` (se necessário).
   - Método de validação: **DNS**.
2. No seu provedor de DNS (ou Route 53):
   - Criar os CNAMEs sugeridos pelo ACM.
3. Aguardar status **ISSUED** no ACM.

#### 3.2. CloudFront

1. Criar **Distribution**:
   - Origem: endpoint de website do S3 (não o “REST endpoint”).
   - Viewer protocol policy: **Redirect HTTP to HTTPS**.
   - Alternate domain names (CNAME): `seu-dominio.com` (e `www` se usar).
   - Custom SSL certificate: o certificado criado no ACM.
2. Opcional: cache policy básica, TTL razoável (minutos/horas) para assets estáticos.

#### 3.3. DNS

1. No **Route 53** (ou outro DNS):
   - Criar um **A/ALIAS** ou **CNAME** apontando seu domínio para o domínio do CloudFront.
2. Testar:
   - Acessar `https://seu-dominio.com` e verificar se carrega o conteúdo do S3 com HTTPS.

---

### 4. Preparar a API minimalista (Gateway + Lambda)

Objetivo: expor um endpoint `POST /lead` no seu domínio (ou subdomínio) para **receber o formulário** e repostar para o **Apps Script** que grava na planilha + envia e-mail.

#### 4.1. Desenho do endpoint `/lead`

- **Método**: `POST`
- **Body (JSON)** – exemplo:
  ```json
  {
    "name": "Fulano",
    "company": "Empresa X",
    "email": "fulano@empresa.com",
    "phone": "+55 11 99999-9999",
    "origin": "Jundiaí - SP",
    "destination": "GRU",
    "date": "2026-03-10",
    "time": "08:30",
    "passengers": 2,
    "serviceType": "airport",
    "notes": "Precisa de cadeirinha."
  }
  ```
- **Resposta** (para o front):
  ```json
  { "success": true }
  ```

#### 4.2. DynamoDB (opcional neste estágio)

> Como você quer usar Apps Script + Sheets, o DynamoDB é opcional neste momento.  
> Pode ser adotado depois se quiser sair da planilha.

- Se decidir usar mais tarde:
  - Criar tabela `leads_black_cars` (PK: `id` string).
  - Lambda gravaria (`PutItem`) antes/depois de chamar o Apps Script.

#### 4.3. Função Lambda (`createLead`)

- **Runtime**: Node.js (por exemplo, 18.x).
- **Responsabilidades**:
  1. Validar o JSON recebido (campos obrigatórios / tipos simples).
  2. Reformatar o payload em formato de formulário (`application/x-www-form-urlencoded`) ou JSON, conforme o **Apps Script** espera.
  3. Fazer **requisição HTTP POST server-side** para a URL do Apps Script (atual):
     - URL: atual `data-submit-url` da landing.
     - Body: mesmos campos (`name`, `company`, `email`, etc.).
  4. Interpretar o sucesso (status 200) e retornar `{ success: true }` para o front.
  5. Logar erros no **CloudWatch Logs**.

- **Permissões (IAM Role da Lambda)**:
  - Se não usar DynamoDB agora: apenas permissão básica de log (`AWSLambdaBasicExecutionRole`).
  - Com DynamoDB: adicionar `dynamodb:PutItem` na tabela de leads.

#### 4.4. API Gateway

- Usar **HTTP API** (mais simples e barato que REST API clássico) para o MVP.
- Rotas:
  - `POST /lead` → integração com a Lambda `createLead`.
- **CORS**:
  - `Access-Control-Allow-Origin`: `https://seu-dominio.com`
  - `Access-Control-Allow-Methods`: `POST, OPTIONS`
  - `Access-Control-Allow-Headers`: `content-type`

#### 4.5. Domínio para a API (opcional)

- Criar **Custom Domain** no API Gateway (ex.: `api.seu-dominio.com`).
- Apontar via DNS (Route 53) `api.seu-dominio.com` → API Gateway.

---

### 5. Ajustar a landing para consumir a API

1. **Configuração do formulário**
   - Atualizar `data-submit-url` do `<form>` para a URL da API:
     - Ex.: `data-submit-url="https://api.seu-dominio.com/lead"`.
2. **Envio**
   - Como já existe uma camada de validação no front (`form-validation.js`):
     - Manter a lógica atual de validação e rolagem.
     - Em vez de deixar o `POST` navegar, você pode evoluir para um **envio via `fetch`**:
       - No sucesso (`{ success: true }`), mostrar o banner de sucesso (sem recarregar).
       - Em caso de erro, mostrar uma mensagem amigável.
   - Enquanto não migrar para `fetch`, é possível manter o comportamento de redireciono via Apps Script (`?sent=1`), mas vindo da API.

---

### 6. Operação e custos

- **S3 + CloudFront**: extremamente baratos no volume inicial (MBs transferidos).
- **Lambda + HTTP API**:
  - Chamadas só quando alguém envia o formulário.
  - Ficam praticamente dentro do **free tier** no começo.
- **Google Sheets + Apps Script**:
  - Continua sendo “banco de dados + automação de e-mail” do MVP com custo zero/próximo de zero.

---

### 7. Próximos passos sugeridos

1. **Colocar a landing em S3** e, em seguida, em CloudFront + domínio.
2. **Criar a Lambda** de `createLead` e a rota `POST /lead` no API Gateway que apenas reposta para o Apps Script.
3. **Apontar a landing para a API** (em vez de falar direto com o Apps Script).
4. Quando estiver confortável com essa base:
   - Considerar DynamoDB como armazenamento primário de leads.
   - Adicionar outros canais de notificação (ex.: e-mail via SES, integração futura com WhatsApp API).***
