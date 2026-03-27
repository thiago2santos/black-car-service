# Estrutura de custos e precificacao rastreavel

## 1. Objetivo

Este documento organiza uma base de **precificacao rastreavel** para contratos mensais de carro com motorista.

A ideia e simples:

- separar os custos da empresa
- identificar o que e custo fixo e o que varia com o uso
- transformar isso em uma memoria de calculo defensavel
- permitir revisoes futuras sem precisar reinventar o modelo

Este material nao substitui uma planilha, mas funciona como a logica oficial da formacao de preco.

---

## 2. Principio da precificacao

Um contrato mensal precisa cobrir, no minimo:

- custo do veiculo
- custo do motorista
- custo operacional da empresa
- manutencao e desgaste por uso
- impostos
- margem de seguranca
- margem de lucro

Em termos praticos:

`Preco mensal = custo total mensal + impostos + margem`

Mas, para o numero ficar rastreavel, vamos quebrar isso em blocos.

---

## 3. Estrutura de custos

### 3.1. Custos fixos mensais da empresa

Sao custos que existem mesmo se o carro rodar menos no mes.

Itens ja presentes nas premissas atuais do negocio:


| Item                  | Valor de referencia | Observacao                        |
| --------------------- | ------------------- | --------------------------------- |
| Seguro do veiculo     | **R$ 400**          | valor mensalizado                 |
| IPVA                  | **R$ 200**          | valor mensalizado                 |
| Contador / BPO fiscal | **R$ 300**          | administrativo                    |
| Marketing             | **R$ 400**          | site, anuncios, networking        |
| Telefonia / internet  | **R$ 150**          | operacao                          |
| Ferramentas / SaaS    | **R$ 150**          | agenda, NF, CRM etc.              |
| Outros fixos          | **R$ 200**          | pequenas despesas administrativas |


**Subtotal de custos fixos administrativos e estruturais: R$ 1.800/mes**

Observacao:

- no planejamento anterior havia uma linha de manutencao preventiva de **R$ 500/mes**
- neste novo modelo, a manutencao sera tratada preferencialmente como **provisao vinculada ao uso**
- isso deixa a conta mais rastreavel quando a quilometragem muda

---

### 3.2. Custo mensal do veiculo

Aqui existem duas leituras possiveis:

#### A) Visao de caixa

Usa o desembolso mensal real.

Exemplo:

- parcela do financiamento: **R$ 3.000 a R$ 3.300/mes**

Essa visao e importante para saber se o contrato paga as contas no curto prazo.

#### B) Visao economica

Usa o custo real de manter e repor o ativo ao longo do tempo.

Exemplo com premissas atuais:

- valor do veiculo: **R$ 140.000**
- vida util contabil: **60 meses**
- depreciacao mensal: **R$ 2.333**
- juros medios estimados: **R$ 1.500/mes**

Pela logica economica:

`Custo economico mensal do veiculo = depreciacao + juros`

`R$ 2.333 + R$ 1.500 = R$ 3.833/mes`

### Recomendacao pratica

Para formar preco de contrato, o ideal e trabalhar com:

`Custo de referencia do veiculo = maior valor entre a parcela mensal e o custo economico mensal`

Com as premissas atuais:

- parcela: ate **R$ 3.300**
- custo economico: **R$ 3.833**

Logo, neste modelo:

**Custo de referencia do veiculo = R$ 3.833/mes**

Isso evita subprecificar a operacao apenas porque a parcela do financiamento parece menor no curto prazo.

---

### 3.3. Custo do motorista

Este e um dos pontos mais importantes e precisa ser separado do carro.

Existem 2 cenarios possiveis:

#### Cenario 1 — motorista e o proprio socio

Mesmo nesse caso, o ideal e atribuir um valor ao trabalho operacional, senao o preco fica artificialmente baixo.

Formula:

`Custo do motorista = pro-labore desejado + encargos pessoais + reserva para cobertura`

#### Cenario 2 — motorista contratado

Formula:

`Custo do motorista = salario + encargos + beneficios + uniforme + custo de cobertura`

Campos para preencher quando voce quiser fechar esse numero:


| Componente                            | Valor     |
| ------------------------------------- | --------- |
| Salario ou pro-labore                 | `R$ ____` |
| Encargos / custos indiretos           | `R$ ____` |
| Beneficios / ajuda de custo           | `R$ ____` |
| Reserva para cobertura / substituicao | `R$ ____` |
| **Total mensal do motorista**         | `R$ ____` |


Observacao:

- sem esse bloco bem definido, qualquer preco mensal fica fragil
- se quiser, depois podemos criar uma versao especifica para **motorista socio** e outra para **motorista CLT**

---

### 3.4. Custos variaveis vinculados ao uso

Sao custos que aumentam quando o carro roda mais ou fica mais tempo em operacao.

#### 3.4.1. Combustivel

Premissas atuais do planejamento:

- consumo medio: **8 km/l**
- preco medio do combustivel: **R$ 6,50/l**

Formula:

`Custo de combustivel = km mensal / consumo medio x preco por litro`

Exemplo para **10.000 km/mes**:

`10.000 / 8 x 6,50 = R$ 8.125/mes`

Logo:

**Custo medio de combustivel por km = R$ 0,8125/km**

---

#### 3.4.2. Revisoes Toyota a cada 10.000 km

Esta passa a ser uma premissa importante do modelo.

Se as revisoes sao feitas a cada **10.000 km**, a forma mais rastreavel de tratar isso e como **provisao por km rodado**.

Formula:

`Provisao de revisao por km = custo medio da revisao / 10.000`

`Provisao mensal de revisao = km mensal x provisao de revisao por km`

Ou, de forma equivalente:

`Provisao mensal de revisao = (km mensal / 10.000) x custo medio da revisao`

Isso significa:

- se o carro rodar **10.000 km no mes**, a provisao mensal de revisao equivale a **1 revisao**
- se rodar **5.000 km**, a provisao equivale a **meia revisao**
- se rodar **15.000 km**, a provisao equivale a **1,5 revisao**

Tabela-modelo:


| Custo medio da revisao | Km mensal | Provisao mensal |
| ---------------------- | --------- | --------------- |
| `R$ 1.000`             | 10.000 km | `R$ 1.000`      |
| `R$ 1.500`             | 10.000 km | `R$ 1.500`      |
| `R$ 2.000`             | 10.000 km | `R$ 2.000`      |


Importante:

- aqui ainda falta colocar o **valor real medio das revisoes da Toyota**
- assim que voce tiver os historicos ou uma faixa confiavel, basta substituir na formula

---

#### 3.4.3. Pneus

Pneus tambem devem entrar como provisao por km.

Formula:

`Provisao de pneus por km = custo do jogo de pneus / vida util esperada em km`

`Provisao mensal de pneus = km mensal x provisao de pneus por km`

Exemplo ilustrativo:

- jogo de pneus: `R$ 4.000`
- vida util: `40.000 km`

`R$ 4.000 / 40.000 = R$ 0,10/km`

Para **10.000 km/mes**:

`10.000 x 0,10 = R$ 1.000/mes`

Esse exemplo e apenas para mostrar a logica. O numero final deve ser substituido pelo custo real do pneu e pela durabilidade observada.

---

#### 3.4.4. Lavagem e apresentacao

No planejamento atual:

- 4 lavagens x R$ 80 = **R$ 320/mes**

Se o uso mensal aumentar bastante, esse valor precisa subir.

Logo, existem duas possibilidades:

- manter como fixo de referencia minima
- ou recalcular conforme quantidade real de lavagens necessarias

Para um uso pesado, o mais correto e acompanhar a frequencia real.

---

#### 3.4.5. Pedagios e estacionamento nao repassados

No planejamento atual:

- referencia de **R$ 600/mes**

Mas, para contrato mensal, o ideal e:

- repassar sempre que possivel
- manter provisao apenas para a parte que a empresa absorve

Formula:

`Custo mensal nao repassado = total mensal de pedagios e estacionamentos - total cobrado do cliente`

---

## 4. Estrutura sugerida de custo total mensal

### 4.1. Formula geral

`Custo total mensal antes dos impostos =`

`custo fixo administrativo`
`+ custo de referencia do veiculo`
`+ custo do motorista`
`+ combustivel`
`+ provisao de revisao`
`+ provisao de pneus`
`+ lavagem/apresentacao`
`+ custos nao repassados`

Em forma resumida:

`CT = CFA + CVEIC + CMOT + CCOMB + CREV + CPNEU + CLAV + CNR`

---

### 4.2. Com valores que ja existem

Usando apenas os numeros que ja aparecem no material atual:

- custo fixo administrativo: **R$ 1.800**
- custo de referencia do veiculo: **R$ 3.833**
- lavagem/apresentacao: **R$ 320**
- custos nao repassados: **R$ 600**

Subtotal parcial ja conhecido:

`R$ 1.800 + R$ 3.833 + R$ 320 + R$ 600 = R$ 6.553/mes`

Ou seja:

**Antes mesmo de incluir motorista, combustivel, revisoes e pneus, a operacao ja carrega R$ 6.553/mes**

Esse numero e importante porque cria um piso de realidade para a precificacao.

---

## 5. Modelo de precificacao do contrato mensal

### 5.1. Passo 1 — definir a franquia do contrato

Todo plano mensal precisa nascer de uma franquia, por exemplo:

- horas incluidas por mes
- km incluidos por mes

Exemplo:

- contrato de `X horas/mes`
- contrato de `Y km/mes`

O custo variavel do plano depende principalmente do `Y km/mes`.

---

### 5.2. Passo 2 — calcular o custo variavel da franquia

Formula:

`Custo variavel da franquia = combustivel + revisao + pneus + variaveis adicionais ligadas ao uso`

Em formato expandido:

`CVF = (km / consumo x preco combustivel)`
`+ (km / 10.000 x custo medio revisao)`
`+ (km x provisao de pneus por km)`
`+ outros variaveis`

---

### 5.3. Passo 3 — somar os custos fixos e operacionais

Formula:

`Custo operacional da proposta = subtotal fixo conhecido + custo do motorista + custo variavel da franquia`

Ou:

`COP = 6.553 + CMOT + CVF`

Lembrando:

- `6.553` e apenas o subtotal conhecido com base nas premissas atuais
- esse numero pode mudar quando voce revisar seguro, financiamento, lavagens ou pedagios nao repassados

---

### 5.4. Passo 4 — aplicar impostos

Premissa atual:

- Simples Nacional aproximado: **6%**

Se o custo operacional e `COP`, o preco minimo sem margem de lucro seria:

`Preco minimo = COP / (1 - 0,06)`

Ou seja:

`Preco minimo = COP / 0,94`

Esse e o valor que cobre custo e imposto, mas ainda nao remunera adequadamente risco, ociosidade e lucro.

---

### 5.5. Passo 5 — aplicar margem

Se voce quiser uma margem-alvo de contribuicao e seguranca de `M`, a formula fica:

`Preco final = COP / (1 - impostos - margem-alvo)`

Exemplo:

- impostos: `6%`
- margem-alvo: `15%`

`Preco final = COP / (1 - 0,06 - 0,15)`

`Preco final = COP / 0,79`

Isso quer dizer:

- se o custo operacional for `R$ 10.000`
- o preco final com 6% de imposto e 15% de margem seria:

`R$ 10.000 / 0,79 = R$ 12.658`

---

## 6. Modelo de memoria de calculo

Use esta estrutura sempre que quiser precificar um contrato:


| Bloco                             | Formula / origem                      | Valor      |
| --------------------------------- | ------------------------------------- | ---------- |
| Custo fixo administrativo         | valor consolidado                     | `R$ 1.800` |
| Custo de referencia do veiculo    | maior entre parcela e custo economico | `R$ 3.833` |
| Custo do motorista                | preencher                             | `R$ ____`  |
| Combustivel                       | `km / consumo x preco`                | `R$ ____`  |
| Revisao Toyota                    | `km / 10.000 x custo medio revisao`   | `R$ ____`  |
| Pneus                             | `km x provisao por km`                | `R$ ____`  |
| Lavagem e apresentacao            | referencia mensal                     | `R$ 320`   |
| Pedagios/estac. nao repassados    | provisao                              | `R$ 600`   |
| **Custo operacional da proposta** | soma dos itens acima                  | `R$ ____`  |
| Impostos                          | `6%` embutido no preco                | `R$ ____`  |
| Margem-alvo                       | definir                               | `R$ ____`  |
| **Preco final sugerido**          | formula final                         | `R$ ____`  |


---

## 7. O que ainda falta preencher para fechar os numeros

Para transformar este modelo em uma precificacao definitiva, faltam principalmente estes dados:

- custo real medio das revisoes Toyota
- custo real e vida util dos pneus
- custo real do motorista
- politica real de pedagio e estacionamento
- consumo real do carro na operacao
- quilometragem mensal tipica por tipo de contrato

Sem isso, o modelo ainda e conceitual.

Com isso preenchido, ele vira uma memoria de calculo completa.

---

## 8. Conclusao

Este documento resolve um problema importante:

- em vez de apresentar um preco "parecido com o mercado"
- a empresa passa a ter uma logica de formacao de preco baseada em custo, uso, imposto e margem

O principal ajuste novo deste modelo e:

- tratar a **revisao Toyota como provisao vinculada a cada 10.000 km**

Isso melhora a rastreabilidade e aproxima a precificacao da realidade operacional.

---

## 9. Proximo passo recomendado

Depois deste documento, o ideal e criar uma segunda camada:

- uma tabela de simulacao por franquia mensal

Por exemplo:

- 2.000 km/mes
- 3.500 km/mes
- 5.000 km/mes
- 10.000 km/mes

Assim voce passa a enxergar claramente:

- custo por faixa de uso
- preco minimo
- preco recomendado
- faixa de negociacao

