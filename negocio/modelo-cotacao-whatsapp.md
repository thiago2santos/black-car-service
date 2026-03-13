# Modelo de cotação (WhatsApp) — C-Level Mobility

Copie/cole e preencha os campos entre `{CHAVES}`.

---

## Placeholders (campos para preencher)

### Cliente e contato
- `{NOME}` (ex.: Ana)
- `{EMPRESA}` (opcional)
- `{CANAL}` (WhatsApp / e-mail)

### Serviço
- `{TIPO_SERVICO}` (transfer / disposição / viagem / evento)
- `{DATA}` `{HORARIO}`
- `{ORIGEM}` → `{DESTINO}`
- `{PARADAS}` (se houver)
- `{PASSAGEIROS}` (qtde)
- `{BAGAGENS}` (qtde/observações)
- `{VOO}` (opcional) / `{HOTEL}` (opcional)
- `{VEICULO}` (Sedan executivo / SUV / Van)

### Cálculo e custos
- `{KM_CONSIDERADO}` (km inclusos no total)
- `{ROTA_REFERENCIA}` (Google Maps/Waze — opcional)
- `{VALOR_BASE}` (R$)
- `{EXCEDENTE_POR_KM}` (R$/km excedente)
- `{TOLERANCIA_ESPERA_MIN}` (min inclusos)
- `{VALOR_ESPERA_POR_15MIN}` (ou por hora)
- `{PEDAGIOS}` (Inclusos / à parte / estimativa R$)
- `{ESTACIONAMENTO}` (Incluso / à parte / estimativa R$)
- `{ADICIONAIS}` (cadeirinha, parada extra, madrugada, etc.)
- `{TOTAL}` (R$)
- `{VALIDADE}` (ex.: válido até hoje 18h)

### Pagamento (links fixos)
- `{LINK_PIX}`
- `{LINK_CARTAO_1X}`
- `{LINK_CARTAO_2A3X}` (ou outro parcelamento)

### Operação (opcional)
- `{MOTORISTA_BILINGUE}` (sim/não)
- `{EMITE_NF}` (sim/não) / `{DADOS_NF}` (o que precisa)
- `{OBS}` (observações finais)

---

## Modelo curto (objetivo)

Olá, `{NOME}`! Tudo bem? Obrigado por solicitar sua cotação com a **C-Level Mobility**.  
Segue a proposta para `{TIPO_SERVICO}` em `{DATA}` às `{HORARIO}`: **{ORIGEM} → {DESTINO}** (veículo: `{VEICULO}`).

- **Total**: **R$ {TOTAL}**  
- **Km considerados no cálculo**: **{KM_CONSIDERADO} km** (excedente: **R$ {EXCEDENTE_POR_KM}/km**)  
- **Espera**: **{TOLERANCIA_ESPERA_MIN} min** inclusos (após: **R$ {VALOR_ESPERA_POR_15MIN}**/15 min)  
- **Pedágios/estacionamento**: `{PEDAGIOS}` / `{ESTACIONAMENTO}`
- **Validade da proposta**: `{VALIDADE}`

**Pagamento** (escolha uma opção):  
- Pix: `{LINK_PIX}`  
- Cartão 1x: `{LINK_CARTAO_1X}`  
- Cartão (parc.): `{LINK_CARTAO_2A3X}`

Se estiver tudo certo, me confirme por aqui para eu **reservar o horário** e finalizar os dados do embarque.

---

## Modelo completo (detalhado + conversão)

Olá, `{NOME}`! Tudo bem?  
Obrigado por pedir sua cotação com a **C-Level Mobility** — vai ser um prazer atender você com conforto, segurança e pontualidade.

### 1) Resumo do serviço
- **Serviço**: `{TIPO_SERVICO}`  
- **Data/Hora**: `{DATA}` às `{HORARIO}`  
- **Rota**: `{ORIGEM} → {DESTINO}`  
- **Paradas**: `{PARADAS}`  
- **Passageiros/Bagagens**: `{PASSAGEIROS}` / `{BAGAGENS}`  
- **Veículo**: `{VEICULO}`  
- **Motorista bilíngue** (se aplicável): `{MOTORISTA_BILINGUE}`
- **Referência de rota** (opcional): `{ROTA_REFERENCIA}`

### 2) Valores e critérios do cálculo (transparente)
- **Valor base do serviço**: R$ `{VALOR_BASE}`  
- **Quilometragem considerada no cálculo**: **{KM_CONSIDERADO} km**  
  - **Excedente** (se passar do km considerado): **R$ {EXCEDENTE_POR_KM} por km**  
- **Espera / tolerância**: **{TOLERANCIA_ESPERA_MIN} min** inclusos  
  - Após a tolerância: **R$ {VALOR_ESPERA_POR_15MIN} a cada 15 min** (ou conforme combinado)  
- **Pedágios**: `{PEDAGIOS}`  
- **Estacionamento**: `{ESTACIONAMENTO}`  
- **Adicionais (se aplicável)**: `{ADICIONAIS}`

✅ **Total da proposta**: **R$ {TOTAL}**

**Validade da proposta**: `{VALIDADE}`

### 3) O que está incluso
- Motorista profissional e atendimento com discrição  
- Veículo limpo, revisado e com ar-condicionado  
- Apoio no embarque/desembarque e condução segura  
- Acompanhamento de horário conforme combinado (e, se houver, `{VOO}` / `{HOTEL}`)

### 4) Confirmação e previsibilidade (padrão premium)
Após a confirmação, envio por aqui:
- Nome do motorista e contato
- Modelo do veículo (e placa quando aplicável)
- Horário combinado e ponto exato de embarque

### 4) Pagamento (links fixos)
Você pode pagar agora e eu já **garanto a reserva do horário**:
- **Pix**: `{LINK_PIX}`  
- **Cartão 1x**: `{LINK_CARTAO_1X}`  
- **Cartão parcelado**: `{LINK_CARTAO_2A3X}`

Se preferir, também posso confirmar por aqui e te orientar no melhor formato para sua necessidade.

### 5) Próximo passo (para confirmar)
Me confirmando, só preciso de:
- Nome completo do passageiro principal  
- Ponto exato de embarque e um telefone de contato  
- Observações de bagagem/itens especiais (se houver)

`{OBS}`

---

## Blocos opcionais (cole quando precisar)

### A) Aeroporto (recomendado)
- **Voo**: `{VOO}`  
- **Observação**: monitoramos o horário do voo quando aplicável e combinamos o ponto de encontro para um embarque sem estresse.

### B) Tempo de espera (se o cliente perguntar)
O valor inclui **{TOLERANCIA_ESPERA_MIN} min** de tolerância para embarque.  
Após esse período, a espera é cobrada em **R$ {VALOR_ESPERA_POR_15MIN} por 15 min**, para manter a agenda do motorista e a pontualidade dos próximos atendimentos.

### C) Parada extra (se houver paradas)
Paradas extras podem alterar rota/tempo e, quando necessário, ajustamos com transparência (valor por km excedente e/ou tempo de espera).

### D) Nota fiscal / recibo (corporativo)
Emitimos `{EMITE_NF}`. Se precisar, me envie os dados para faturamento: razão social, CNPJ, endereço e e-mail.

### E) Pedágios e estacionamento (se o cliente perguntar)
Para manter o preço justo e transparente:
- **Pedágios**: `{PEDAGIOS}`
- **Estacionamento**: `{ESTACIONAMENTO}`

### E) Política de cancelamento (genérica, para você ajustar)
Para garantir disponibilidade, trabalhamos com reserva mediante confirmação.  
Se houver necessidade de cancelamento/alteração, me avise o quanto antes para eu tentar realocar a agenda e minimizar custos.

### F) Ida e volta / retorno (quando o cliente pede)
Se quiser, também posso montar **ida e volta** com valor fechado. Me confirme:
- Horário de saída e **horário previsto de retorno**
- Se haverá tempo de espera no local (e por quanto tempo)

### G) Atendimento corporativo / faturamento (quando for empresa)
Se `{EMPRESA}` preferir, podemos atender com rotinas corporativas (relatório/recorrência, dados para NF, centro de custo quando aplicável). Me diga se é para **uso recorrente** ou **pontual**.

