## Formulário de qualificação para automação no WhatsApp

Este fluxo de perguntas foi desenhado a partir da proposta de valor da landing page da C-Level Mobility, focado em:

- **Coletar dados mínimos para cotação**
- **Entender o contexto corporativo (empresa/hotel/uso pessoal)**
- **Diferenciar transfer para aeroportos de eventos corporativos**
- **Facilitar relacionamento contínuo com poucas empresas/hotéis**

Pode ser adaptado para qualquer plataforma de chatbot/automação (ManyChat, Zenvia, Take Blip, Gupshup etc.).

---

## 1. Mensagem de abertura

- **Boas-vindas**
  - “Olá! Aqui é a C-Level Mobility, transporte executivo em Jundiaí e região. Vou te ajudar a solicitar uma cotação rápida para sua próxima viagem. Podemos começar?”

- **Condição**
  - Se a resposta for afirmativa (ou qualquer mensagem), seguir para o bloco 2.

---

## 2. Identificação do contato

- **2.1 Nome completo** (obrigatório)
  - Pergunta: “Para começar, por favor me informe **seu nome completo**.”
  - Variável sugerida: `nome`

- **2.2 Empresa / hotel** (opcional)
  - Pergunta: “Você está solicitando o transporte em nome de **alguma empresa ou hotel**?  
    Se sim, me informe o **nome da empresa/hotel**.  
    Se não, pode responder ‘uso pessoal’.”
  - Variável sugerida: `empresa_hotel`

- **2.3 E-mail** (obrigatório para proposta formal)
  - Pergunta: “Qual é o **seu e-mail** para eu enviar a proposta e os detalhes da viagem?”
  - Variável sugerida: `email`

- **2.4 Telefone / WhatsApp** (obrigatório)
  - Pergunta: “Confirma para mim o **número de telefone/WhatsApp** para contato (com DDD), por favor?”
  - Variável sugerida: `telefone`

---

## 3. Tipo de serviço

- **3.1 Tipo de necessidade** (obrigatório)
  - Pergunta: “Agora me conta: qual é o **tipo de serviço** que você precisa?”
  - Opções recomendadas em botões:
    - `1` – Transfer para aeroporto (GRU, CGH ou VCP)
    - `2` – Evento / compromisso corporativo na região (Jundiaí, Campinas, São Paulo)
    - `3` – Outro tipo (explicar)
  - Variável sugerida: `tipo_servico` (`airport`, `event`, `other`)

- **3.2 Descrição livre (se “Outro”)**
  - Condição: se `tipo_servico == other`
  - Pergunta: “Perfeito. Pode me explicar em poucas palavras **qual é a necessidade de transporte**?”
  - Variável sugerida: `descricao_outro`

---

## 4. Detalhes da viagem

- **4.1 Origem** (obrigatório)
  - Pergunta: “Qual será o **ponto de origem** da viagem? (por exemplo: ‘Jundiaí – bairro X’, ‘Hotel Y em Jundiaí’, ‘Indústria Z em Itupeva’…)”
  - Variável sugerida: `origem`

- **4.2 Destino** (obrigatório)
  - Condição:
    - Se `tipo_servico == airport`:
      - Pergunta: “E qual é o **aeroporto de destino ou origem**? (GRU, CGH, VCP ou outro?)”
    - Se `tipo_servico == event` ou `other`:
      - Pergunta: “E qual é o **destino**? (endereço do evento, empresa, hotel, etc.)”
  - Variável sugerida: `destino`

- **4.3 Data da viagem** (obrigatório)
  - Pergunta: “Em que **data** você precisa do transporte? (dia/mês/ano)”
  - Variável sugerida: `data_ida`

- **4.4 Horário desejado de embarque** (obrigatório)
  - Pergunta: “Qual é o **horário desejado para embarque**?”
  - Variável sugerida: `horario_ida`

- **4.5 Horário do voo (opcional, mas recomendado em aeroportos)**
  - Condição: idealmente perguntar se `tipo_servico == airport`
  - Pergunta: “Você já tem o **horário do voo**? Se sim, me envie **horário + aeroporto**, assim consigo sugerir o melhor horário de saída.”
  - Variável sugerida: `detalhes_voo`

- **4.6 Número de passageiros** (obrigatório)
  - Pergunta: “Quantos **passageiros** irão no carro? (lembrando que trabalhamos com até **3 passageiros** em sedan executivo)”
  - Variável sugerida: `passageiros`

- **4.7 Bagagens** (opcional, mas útil)
  - Pergunta: “Quantas **bagagens** aproximadamente? (ex.: ‘1 mala grande e 1 de mão’, ou ‘3 malas médias’). Isso me ajuda a confirmar o conforto no sedan executivo.”
  - Variável sugerida: `bagagens`

---

## 5. Tipo de viagem (ida / volta / day use)

- **5.1 Estrutura da viagem** (obrigatório)
  - Pergunta: “Esse transporte será **apenas ida**, **apenas volta** ou **ida e volta**?”
  - Opções recomendadas:
    - `1` – Só ida
    - `2` – Só volta
    - `3` – Ida e volta no mesmo dia
    - `4` – Ida e volta em dias diferentes
  - Variável sugerida: `tipo_viagem`

- **5.2 Dados de retorno** (se aplicável)
  - Condição: se `tipo_viagem` em {`2`, `3`, `4`}
  - Pergunta: “Perfeito. Qual a **data e horário aproximados do retorno**?”
  - Variáveis sugeridas: `data_volta`, `horario_volta`

---

## 6. Contexto corporativo e recorrência

- **6.1 Viagem única ou recorrente**
  - Pergunta: “Esse transporte é para **um único evento/viagem** ou você imagina que possa ser algo **recorrente** (visitas frequentes, hóspedes, executivos que vêm com frequência etc.)?”
  - Opções:
    - `1` – Apenas essa viagem
    - `2` – Deve se repetir com alguma frequência
  - Variável sugerida: `frequencia`

- **6.2 Comentário (se recorrente)**
  - Condição: se `frequencia == 2`
  - Mensagem: “Ótimo, isso ajuda a planejar melhor rotas e horários. Depois da primeira viagem, podemos alinhar um padrão fixo para a sua empresa/hotel.”

---

## 7. Observações adicionais

- **7.1 Campo livre de observações**
  - Pergunta: “Há **alguma observação importante** que eu deva saber?  
    (por exemplo: idioma do passageiro – inglês/espanhol, necessidade de parada rápida no caminho, horário sensível por reunião/turno etc.)”
  - Variável sugerida: `observacoes`

---

## 8. Confirmação e preferências de contato

- **8.1 Canal preferido para retorno**
  - Pergunta: “Perfeito, já tenho as principais informações. Vou analisar os detalhes da rota e horário e te retorno com uma **proposta personalizada** para essa viagem.  
    Você prefere receber a proposta **aqui pelo WhatsApp** ou também por **e-mail**?”
  - Variável sugerida: `canal_preferido` (`whatsapp`, `email`, `ambos`)

- **8.2 Encerramento da automação**
  - Mensagem final sugerida:
    - “Obrigado pelas informações!  
      Em breve você receberá a **cotação detalhada** com valores e condições para o seu transporte executivo com a C-Level Mobility.  
      Se precisar de algo antes disso, é só me mandar uma mensagem aqui.”

---

## 9. Campos mínimos x recomendados

- **Campos mínimos para gerar cotação:**
  - `nome`
  - `telefone`
  - `tipo_servico`
  - `origem`
  - `destino`
  - `data_ida`
  - `horario_ida`
  - `passageiros`

- **Campos recomendados para contexto corporativo e qualidade do atendimento:**
  - `empresa_hotel`
  - `email`
  - `tipo_viagem` + dados de retorno (`data_volta`, `horario_volta`, quando houver)
  - `detalhes_voo` (em transfers para aeroportos)
  - `bagagens`
  - `frequencia` (viagem única ou recorrente)
  - `observacoes` (idioma, paradas, observações de agenda)
  - `canal_preferido`

---

## 10. Exemplo de resumo para operador/hub de atendimento

Depois que o fluxo for preenchido, a automação pode montar um resumo para o operador (ou para você mesmo) em um único bloco de texto, por exemplo:

```text
Nova solicitação de transporte executivo – C-Level Mobility

Nome: {{nome}}
Empresa/Hotel: {{empresa_hotel}}
E-mail: {{email}}
Telefone/WhatsApp: {{telefone}}

Tipo de serviço: {{tipo_servico}}
Origem: {{origem}}
Destino: {{destino}}

Data ida: {{data_ida}}
Horário ida: {{horario_ida}}
Data volta (se houver): {{data_volta}}
Horário volta (se houver): {{horario_volta}}

Passageiros: {{passageiros}}
Bagagens: {{bagagens}}
Detalhes de voo: {{detalhes_voo}}

Viagem única ou recorrente: {{frequencia}}
Observações: {{observacoes}}
Canal preferido para retorno: {{canal_preferido}}
```

Esse modelo pode ser usado em e-mail, CRM, planilha do Google Sheets ou notificação interna (por exemplo, em um grupo de WhatsApp próprio para operação).

