## Histórico de definição da automação WhatsApp – C-Level Mobility

Este arquivo registra as principais decisões e materiais produzidos para a automação de atendimento e cotação via WhatsApp.

---

### 1. Objetivo da automação

- **Data**: definição inicial em 2026-03-10
- **Objetivo principal**:
  - Criar um fluxo de perguntas no WhatsApp que permita:
    - Coletar dados suficientes para gerar cotação de transporte executivo.
    - Entender se o cliente é empresa, hotel ou uso pessoal.
    - Diferenciar transfers para aeroportos de eventos corporativos na região.
    - Preparar base para relacionamento contínuo com poucas empresas/hotéis.

---

### 2. Documentos criados

- **`docs/whatsapp-automacao-formulario-cotacao.md`**
  - Descrição detalhada do **formulário/fluxo de qualificação** para automação:
    - Mensagem de abertura.
    - Bloco de identificação do contato.
    - Bloco de tipo de serviço (airport/event/outro).
    - Bloco de detalhes da viagem (origem, destino, datas, horários, nº de passageiros, bagagens).
    - Bloco de tipo de viagem (ida/volta/ida e volta).
    - Bloco de contexto corporativo e recorrência.
    - Bloco de observações adicionais.
    - Bloco de confirmação e preferência de canal de retorno.
  - Inclui sugestão de **nomes de variáveis** para integração futura (ex.: `nome`, `origem`, `destino`, `data_ida`, `passageiros`, `observacoes`, etc.).
  - Inclui um **modelo de resumo final** com todos os campos para uso em:
    - E-mail.
    - CRM.
    - Planilha (por exemplo, Google Sheets).
    - Notificações internas.

- **`docs/whatsapp-respostas-rapidas-cotacao.md`**
  - Versão adaptada do fluxo para uso no **WhatsApp Business App**, com:
    - Textos prontos organizados como **Respostas Rápidas**.
    - Sugestões de **atalhos** (ex.: `/inicio`, `/contato`, `/tipo`, `/origemdestino`, `/quando`, `/voo`, `/idavolta`, `/bagagem`, `/frequencia`, `/obs`, `/fechamento`, `/propostaenviada`).
    - Mensagens prontas para:
      - Boas-vindas.
      - Coleta de dados básicos do contato.
      - Definição do tipo de serviço.
      - Coleta de origem/destino, datas, horários, passageiros e bagagens.
      - Verificação de viagem única ou recorrente.
      - Observações extras importantes (idioma, paradas, horários sensíveis).
      - Fechamento, confirmação e envio de proposta.

---

### 3. Estratégia de custo e ferramentas

- **Cenário financeiro atual**:
  - Poucos recursos financeiros para investir em plataformas pagas de API de WhatsApp.

- **Decisão tomada para o curto prazo**:
  - Utilizar **WhatsApp Business (app gratuito)** com:
    - Respostas rápidas configuradas usando os textos do arquivo `whatsapp-respostas-rapidas-cotacao.md`.
    - Anotação manual ou em planilha (por exemplo, Google Sheets) dos dados coletados durante as conversas.

- **Possível evolução futura**:
  - Quando houver volume e previsibilidade maior, considerar:
    - Provedor de API oficial com baixo custo relativo, como **360dialog** ou outro similar.
    - Integração com:
      - Google Sheets / scripts.
      - Sistemas internos de reservas e CRM.
      - Automação de fluxo completo (entrada → qualificação → cotação → registro).

---

### 4. Próximos passos sugeridos (não implementados ainda)

- **Curto prazo (manual + app WhatsApp Business)**:
  - Configurar, no app WhatsApp Business:
    - Mensagem de ausência (opcional).
    - Mensagem de boas-vindas (opcional, baseada em parte do `/inicio`).
    - Respostas rápidas conforme o arquivo `whatsapp-respostas-rapidas-cotacao.md`.
  - Criar uma **planilha simples** (ex.: Google Sheets) com colunas:
    - Data do atendimento.
    - Nome.
    - Empresa/hotel.
    - Telefone/WhatsApp.
    - Tipo de serviço.
    - Origem.
    - Destino.
    - Data/horário de ida.
    - Data/horário de volta (se houver).
    - Nº de passageiros.
    - Bagagens.
    - Observações.
    - Status da proposta (enviada, pendente, fechada, perdida).

- **Médio prazo (semi-automatizado)**:
  - Explorar uso de scripts para:
    - Ler/formalizar informações em planilha.
    - Gerar textos de proposta automaticamente a partir dos dados coletados.

- **Longo prazo (API oficial)**:
  - Implantar provedor oficial de WhatsApp Business API quando fizer sentido financeiro.
  - Reaproveitar o fluxo descrito em `whatsapp-automacao-formulario-cotacao.md` como base para:
    - Bot/fluxo automatizado.
    - Integrações com Google Apps Script, CRM ou outro backend.

---

### 5. Observações gerais

- Todo o desenho do fluxo considerou:
  - Foco em **Jundiaí e região**, com transfers para **GRU, CGH, VCP** e eventos corporativos.
  - Capacidade de **até 3 passageiros** em sedan executivo (Toyota Yaris 2023 XS).
  - Comunicação preferencial por **WhatsApp**.
  - Possível necessidade de comunicação básica em **inglês e espanhol** para hóspedes internacionais.

- Este arquivo deve ser atualizado sempre que:
  - Novos fluxos forem criados.
  - A operação migrar para API/integração mais avançada.
  - Houve mudança importante na estratégia de atendimento ou público-alvo.

