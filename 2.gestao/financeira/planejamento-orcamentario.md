## Planejamento Orçamentário – C-Level Mobility

### 1. Objetivo

- **Criar uma visão orçamentária anual básica** para o negócio de transporte executivo (C-Level Mobility), usando:
  - As premissas de mercado e operação descritas em `analise-mercado-transporte-corporativo.md`.
  - A **sazonalidade de demanda** inferida a partir da movimentação de passageiros em GRU em **2025**.

### 2. Premissas-Chave Utilizadas

- **Ano de referência para sazonalidade**: **2025**.  
- **Fonte de sazonalidade**: movimentação mensal de passageiros no Aeroporto de Guarulhos (GRU).  
- **Sazonalidade aplicada**: usamos os índices relativos de passageiros/mês vs média anual para ajustar o faturamento esperado mês a mês.
- **Recorte de operação** (baseado na análise de mercado):
  - Foco inicial em **Jundiaí e região**.
  - **1 carro + 1 motorista** em operação no cenário base.
  - Mix de corridas: **25% aeroportos (GRU/CGH/VCP)**, **75% corridas locais/região**.
  - Ticket médio (mix GRU + locais): **~R$ 230 a R$ 250 por corrida**.
  - Cenário realista: **4 corridas/dia**, **22 dias/mês** → algo próximo a **R$ 20k–R$ 22k/mês** em um “mês médio”.

> Para simplificar o primeiro rascunho orçamentário, vamos considerar um **mês médio de referência de R$ 22.000 de faturamento bruto por carro** e ajustar esse valor com fatores sazonais mensais.

### 3. Fatores de Sazonalidade (GRU – 2025)

Com base na movimentação de passageiros de GRU em 2025, calculamos **índices sazonais aproximados** (passageiros do mês ÷ média anual do ano). A ideia é usar esses índices como **multiplicadores sobre o “mês médio”**.


| Mês | Índice sazonal aproximado | Interpretação rápida        |
| --- | ------------------------- | --------------------------- |
| Jan | **1,02**                  | Leve acima da média         |
| Fev | **0,85**                  | Mês fraco (abaixo da média) |
| Mar | **0,94**                  | Abaixo da média             |
| Abr | **0,92**                  | Abaixo da média             |
| Mai | **0,97**                  | Um pouco abaixo da média    |
| Jun | **0,98**                  | Muito próximo da média      |
| Jul | **1,13**                  | Ponto alto do ano           |
| Ago | **1,06**                  | Acima da média              |
| Set | **1,01**                  | Quase igual à média         |
| Out | **1,05**                  | Acima da média              |
| Nov | **1,02**                  | Leve acima da média         |
| Dez | **1,07**                  | Alta de fim de ano          |


> Observação: são índices **aproximados** e servem como ferramenta de planejamento, não como previsão precisa. Em revisões futuras, dá para recalibrar esses valores com dados mais refinados (por exemplo, misturando sazonalidade de CGH/VCP ou dados reais de corridas).

### 4. Cenário Base – 1 Carro em Operação (Ano 1)

- **Mês médio de referência**: **R$ 22.000/mês** de faturamento bruto por carro.  
- **Ajuste sazonal**: Receita esperada no mês = `R$ 22.000 × índice sazonal do mês`.

#### 4.1. Faturamento Bruto Estimado por Mês (1 carro)

Valores aproximados, arredondados para a centena mais próxima:


| Mês | Índice sazonal | Receita bruta estimada (1 carro) |
| --- | -------------- | -------------------------------- |
| Jan | 1,02           | ~**R$ 22.400**                   |
| Fev | 0,85           | ~**R$ 18.700**                   |
| Mar | 0,94           | ~**R$ 20.700**                   |
| Abr | 0,92           | ~**R$ 20.200**                   |
| Mai | 0,97           | ~**R$ 21.300**                   |
| Jun | 0,98           | ~**R$ 21.600**                   |
| Jul | 1,13           | ~**R$ 24.900**                   |
| Ago | 1,06           | ~**R$ 23.300**                   |
| Set | 1,01           | ~**R$ 22.200**                   |
| Out | 1,05           | ~**R$ 23.100**                   |
| Nov | 1,02           | ~**R$ 22.400**                   |
| Dez | 1,07           | ~**R$ 23.500**                   |


> Como primeira aproximação, a soma anual desses valores deve ficar próxima de **R$ 264.000/ano** de faturamento bruto para **1 carro**, coerente com um “mês médio” em torno de R$ 22.000.

#### 4.2. Escalonamento para Mais Carros

Em um primeiro rascunho simplificado, podemos supor que:

- **2 carros** → dobrar os valores mensais (mantendo a mesma eficiência de ocupação).  
- **3 carros** → triplicar os valores, e assim por diante.

Na prática, essa relação **não é perfeitamente linear** (há ganhos de eficiência e também limitações de demanda), mas essa aproximação ajuda a:

- Ter uma noção rápida de **ordem de grandeza** do faturamento anual com 1, 2, 3 carros.  
- Planejar **faixas de custo fixo e variável** que façam sentido frente ao potencial de receita.

### 5. Próximos Passos para Detalhar o Orçamento

- **5.1. Inserir linha de custos principais por mês**:
  - Combustível, manutenção, seguro, depreciação, folha (motorista), pedágios, tecnologia (sistema), marketing, impostos (Simples/ISS etc.).
  - Incluir uma linha **“Impostos (~6–10%)”** sobre o faturamento, em linha com a análise tributária do CNAE 4923-0/02.
- **5.2. Criar cenários**:
  - Cenário conservador (3 corridas/dia, ticket médio na parte baixa).  
  - Cenário realista (4 corridas/dia, ticket médio em torno de R$ 230–250).  
  - Cenário agressivo (5 corridas/dia, uso intenso em meses de alta sazonalidade).
- **5.3. Conectar com o plano comercial**:
  - Relacionar o aumento de frota (2–3 carros) com metas de **fechamento de contratos corporativos** e acordos com hotéis/empresas.
  - Definir **gatilhos de expansão**: por exemplo, “atingir média de R$ X de faturamento líquido por 6 meses seguidos” antes de adicionar um novo carro.
- **5.4. Futuro**:
  - Migrar essas tabelas para **Google Sheets** ou ferramenta similar, permitindo simulações rápidas de:
    - Mudança de preços.  
    - Mudança de mix de corridas (mais CGH/VCP, mais locais).  
    - Aumento de frota e de custos fixos.

### 6. Premissas para DRE e Balanço Patrimonial

#### 6.1. Premissas de operação (base contábil)

- **Modelo de receita principal**: contratos corporativos recorrentes (CNPJ), com faturamento mensal fixo por empresa.
- **Carteira alvo em regime estável**: **3 contratos corporativos ativos**.
- **Ticket médio mensal por contrato**: **R$ 6.500** → faixa coerente de R$ 5.000 a R$ 8.000.
- **Receita bruta mensal de referência para o DRE**:
  - Cenário intermediário (base): `3 contratos × R$ 6.500 ≈ R$ 19.500/mês`.
  - Compatível com o “mês médio de R$ 22.000” descrito na seção 4 (diferença tratada como margem de segurança).
- **Regime tributário assumido**: **Simples Nacional** (serviço de transporte), com **alíquota efetiva aproximada de 6%** sobre o faturamento bruto.
- **Motorista**: o próprio sócio (sem folha CLT neste cenário base).

#### 6.2. Premissas de custos variáveis

Considerando um uso típico para atender 3 contratos corporativos:

- **Quilometragem mensal estimada**: ~**4.000 km/mês**.
- **Consumo médio**: **8 km/l** (carro a combustão eficiente).
- **Preço médio de combustível**: **R$ 6,50/l**.

Tabela-resumo de custos variáveis:


| Item                                     | Premissa / Observação                                        | Valor estimado (R$/mês) |
| ---------------------------------------- | ------------------------------------------------------------ | ----------------------- |
| Combustível                              | 4.000 km ÷ 8 km/l × R$ 6,50                                  | **R$ 3.250**            |
| Pedágios e estacionamentos (não repass.) | Meses com aeroportos/eventos, parte não repassada ao cliente | **R$ 600**              |
| Lavagem e higienização                   | 4 lavagens × R$ 80                                           | **R$ 320**              |
| Taxas de meios de pagamento              | ~1,5% sobre R$ 19.500                                        | **R$ 300**              |


- **Total de custos variáveis estimados**: ~**R$ 4.470/mês**.

#### 6.3. Premissas de despesas fixas operacionais


| Item                  | Observação                                | Valor estimado (R$/mês) |
| --------------------- | ----------------------------------------- | ----------------------- |
| Seguro do veículo     | Seguro total para carro executivo         | **R$ 400**              |
| IPVA (mensalizado)    | IPVA anual dividido por 12                | **R$ 200**              |
| Manutenção preventiva | Provisão para revisões e pneus            | **R$ 500**              |
| Contador / BPO fiscal | Escritório de contabilidade               | **R$ 300**              |
| Marketing             | Site, anúncios, materiais, networking     | **R$ 400**              |
| Telefonia / Internet  | Plano de dados e telefonia para o negócio | **R$ 150**              |
| Ferramentas SaaS      | Agenda, CRM simples, emissão de NF etc.   | **R$ 150**              |
| Outros fixos          | Pequenos gastos administrativos diversos  | **R$ 200**              |


- **Total de despesas fixas operacionais (sem depreciação)**: ~**R$ 2.300/mês**.

#### 6.4. Premissas de financiamento e depreciação do veículo

- **Valor de referência do veículo** (imobilizado): **R$ 140.000**  
  - Faixa compatível com a seção 2 (R$ 120.000 – R$ 160.000).
- **Entrada**: **R$ 30.000**.
- **Valor financiado**: **R$ 110.000**.
- **Prazo do financiamento**: **48 meses**.
- **Taxa de juros nominal estimada**: **1,5% ao mês** (CDC pessoa jurídica típica).
- **Parcela total aproximada**: entre **R$ 3.000 e R$ 3.300/mês** (juros + amortização do principal).
- **Despesa financeira considerada no DRE**: **R$ 1.500/mês** em média de juros (primeiro ano).
- **Vida útil contábil do veículo** (para depreciação): **5 anos (60 meses)**, método de linha reta.
  - **Depreciação mensal**: `R$ 140.000 ÷ 60 ≈ R$ 2.333/mês`.

#### 6.5. Premissa de capital de giro

- **Capital de giro alvo**: equivalente a **6 meses de custos fixos em caixa**.
- Considerando custos fixos em torno de **R$ 3.800/mês** (despesas fixas operacionais de R$ 2.300 + juros médios de R$ 1.500):
  - **Capital de giro em caixa**: `6 × R$ 3.800 ≈ R$ 22.800` → arredondado para **R$ 23.000**.

Essas premissas serão usadas para construir:

- Um **DRE mensal projetado** (seção 7).  
- Um **Balanço Patrimonial inicial e após 12 meses** (seções 8 e 9).

### 8. Balanço Patrimonial inicial (mês 0)

#### 8.1. Premissas específicas do balanço inicial

- **Veículo (imobilizado)**:
  - Valor de aquisição (base contábil): **R$ 140.000**.
  - Depreciação acumulada no mês 0: **R$ 0** (ainda não iniciada).
- **Financiamento do veículo**:
  - Valor financiado: **R$ 110.000**.
  - Prazo total: **48 meses**.
  - Consideraremos a divisão aproximada entre:
    - **Passivo circulante** (parcelas dos próximos 12 meses) ≈ **R$ 27.500** (≈ 110.000 ÷ 48 × 12, apenas principal).  
    - **Passivo não circulante** (demais parcelas) ≈ **R$ 82.500**.
- **Capital de giro em caixa**:
  - Alvo definido: **R$ 23.000** (≈ 6 meses de custos fixos).
- **Capital social (patrimônio líquido inicial)**:
  - Deve equilibrar a equação contábil: **Ativo = Passivo + PL**.

#### 8.2. Composição do balanço inicial

1. **Ativo**

- **Ativo Circulante**
  - Caixa e equivalentes de caixa: **R$ 23.000**.
  - Contas a receber: **R$ 0** (assumindo que no mês 0 ainda não há faturas emitidas).
- **Ativo Não Circulante**
  - Imobilizado – veículo (valor de custo): **R$ 140.000**.
  - (-) Depreciação acumulada: **R$ 0**.
  - Imobilizado líquido: **R$ 140.000**.

**Total do Ativo** = R$ 23.000 + R$ 140.000 = **R$ 163.000**.

1. **Passivo**

- **Passivo Circulante**
  - Empréstimos e financiamentos – curto prazo (12 meses): **R$ 27.500**.
- **Passivo Não Circulante**
  - Empréstimos e financiamentos – longo prazo: **R$ 82.500**.

**Total do Passivo** = R$ 27.500 + R$ 82.500 = **R$ 110.000**.

1. **Patrimônio Líquido**

- Capital social integralizado: **R$ 53.000**.
- Lucros acumulados: **R$ 0** (nenhuma operação ainda no mês 0).

**Total do Patrimônio Líquido** = **R$ 53.000**.

Verificação da equação contábil:

- Ativo (**R$ 163.000**) = Passivo (**R$ 110.000**) + Patrimônio Líquido (**R$ 53.000**).  
- **Equação fecha**, logo o balanço inicial está consistente com as premissas.

### 7. DRE mensal projetado – cenário base (3 contratos corporativos)

#### 7.1. Estrutura do DRE

Estrutura adotada:

1. **Receita bruta**
2. (-) **Impostos sobre faturamento** (Simples/ISS aproximado)
3. = **Receita líquida**
4. (-) **Custos variáveis**
5. = **Margem de contribuição**
6. (-) **Despesas fixas operacionais** (sem depreciação)
7. (-) **Depreciação**
8. = **Resultado operacional**
9. (-) **Despesas financeiras (juros do financiamento)**
10. = **Lucro líquido antes do IR/CSLL** (tratado aqui como lucro líquido, pois o Simples já foi considerado na etapa 2).

#### 7.2. DRE mensal com valores estimados

Premissas aplicadas:

- Receita bruta mensal de referência: **R$ 19.500**.  
- Impostos sobre faturamento (Simples/ISS): **6%** sobre a receita bruta.  
- Custos variáveis: **R$ 4.470/mês** (seção 6.2).  
- Despesas fixas operacionais (sem depreciação): **R$ 2.300/mês** (seção 6.3).  
- Depreciação: **R$ 2.333/mês** (seção 6.4).  
- Despesa financeira (juros): **R$ 1.500/mês** (seção 6.4).

Tabela do DRE mensal estimado:


| Linha                                         | Cálculo aproximado                      | Valor (R$/mês) |
| --------------------------------------------- | --------------------------------------- | -------------- |
| **Receita bruta**                             | —                                       | **19.500**     |
| (-) Impostos sobre faturamento (~6%)          | 19.500 × 6%                             | **(1.170)**    |
| **Receita líquida**                           | 19.500 − 1.170                          | **18.330**     |
| (-) Custos variáveis                          | Ver seção 6.2                           | **(4.470)**    |
| **Margem de contribuição**                    | 18.330 − 4.470                          | **13.860**     |
| (-) Despesas fixas operacionais (sem deprec.) | Ver seção 6.3                           | **(2.300)**    |
| **Resultado antes da depreciação**            | 13.860 − 2.300                          | **11.560**     |
| (-) Depreciação do veículo                    | 140.000 ÷ 60                            | **(2.333)**    |
| **Resultado operacional**                     | 11.560 − 2.333                          | **9.227**      |
| (-) Despesas financeiras (juros)              | Estimativa média mensal de juros do CDC | **(1.500)**    |
| **Lucro líquido estimado**                    | 9.227 − 1.500                           | **7.727**      |


> Ordem de grandeza: lucro líquido mensal projetado **≈ R$ 7.700** com 3 contratos corporativos na base de R$ 6.500 cada.

Esse DRE será a base para:

- Projetar o **lucro anual** (≈ 12 × R$ 7.700 ≈ **R$ 92.400/ano**).  
- Alimentar a projeção do **Balanço Patrimonial após 12 meses**.

### 9. Balanço Patrimonial projetado após 12 meses

#### 9.1. Premissas para a projeção de 12 meses

- A operação mantém, em média, o DRE mensal projetado na seção 7 ao longo de 12 meses.
- **Lucro líquido mensal médio**: ≈ **R$ 7.700**.
  - **Lucro líquido anual** projetado: ≈ **R$ 92.400**.
- Depreciação acumulada após 12 meses:
  - 12 × R$ 2.333 ≈ **R$ 28.000**.
- Amortização do principal do financiamento em 12 meses:
  - Aproximação: 110.000 ÷ 48 × 12 ≈ **R$ 27.500** de redução do saldo devedor.
- Consideramos, de forma simplificada:
  - Sem distribuição de lucros aos sócios no primeiro ano (todo lucro fica na empresa).  
  - Sem variações relevantes de capital de giro (contas a receber e a pagar estáveis).

#### 9.2. Evolução de caixa, financiamento e PL

1. **Lucro e depreciação – efeito no caixa**

- Lucro líquido anual estimado: **R$ 92.400**.  
- Depreciação é despesa contábil, mas **não sai do caixa**:
  - Efeito aproximado de geração de caixa operacional:  
    - `Lucro líquido + Depreciação anual` ≈ 92.400 + 28.000 = **R$ 120.400**.
- Amortização do principal do financiamento em 12 meses:
  - Saída de caixa com amortização: **R$ 27.500** (aprox.).
- Aumento líquido de caixa no ano:
  - 120.400 − 27.500 ≈ **R$ 92.900**.

1. **Caixa final após 12 meses**

- Caixa inicial (balanço do mês 0): **R$ 23.000**.  
- Aumento projetado em 12 meses: **R$ 92.900**.  
- Caixa final projetado: 23.000 + 92.900 = **R$ 115.900**.

1. **Saldo de financiamento após 12 meses**

- Saldo inicial do financiamento: **R$ 110.000**.  
- Amortização aproximada em 12 meses: **R$ 27.500**.  
- Saldo final de financiamento: 110.000 − 27.500 = **R$ 82.500**.

1. **Imobilizado e depreciação acumulada**

- Imobilizado – veículo (custo): **R$ 140.000**.  
- Depreciação acumulada após 12 meses: **R$ 28.000**.  
- Imobilizado líquido: 140.000 − 28.000 = **R$ 112.000**.

1. **Patrimônio Líquido após 12 meses**

- Capital social: **R$ 53.000**.  
- Lucros acumulados (12 meses): **R$ 92.400**.  
- Patrimônio Líquido final: 53.000 + 92.400 = **R$ 145.400**.

#### 9.3. Balanço Patrimonial projetado (resumo)

1. **Ativo**

- **Ativo Circulante**
  - Caixa e equivalentes de caixa: **R$ 115.900**.
  - Contas a receber: **R$ 0** (simplificação).
- **Ativo Não Circulante**
  - Imobilizado – veículo (custo): **R$ 140.000**.
  - (-) Depreciação acumulada: **R$ 28.000**.
  - Imobilizado líquido: **R$ 112.000**.

**Total do Ativo** = 115.900 + 112.000 = **R$ 227.900**.

1. **Passivo**

- **Passivo Circulante**
  - Empréstimos e financiamentos – curto prazo (12 meses seguintes): **R$ 27.500** (aprox., principal a vencer).
- **Passivo Não Circulante**
  - Empréstimos e financiamentos – longo prazo (remanescente): **R$ 55.000**.

**Total do Passivo** = 27.500 + 55.000 = **R$ 82.500**.

1. **Patrimônio Líquido**

- Capital social integralizado: **R$ 53.000**.
- Lucros acumulados: **R$ 92.400**.

**Total do Patrimônio Líquido** = **R$ 145.400**.

Verificação da equação contábil:

- Ativo (**R$ 227.900**) = Passivo (**R$ 82.500**) + Patrimônio Líquido (**R$ 145.400**).  
- **Equação fecha**, logo o balanço projetado após 12 meses é consistente com o DRE e as premissas adotadas.

### 10. Parâmetros ajustáveis e impacto no DRE/Balanço

Alguns parâmetros podem (e devem) ser ajustados ao longo do tempo para simular cenários diferentes. Resumo dos principais:


| Parâmetro                                          | Onde ajustar                          | Impacto principal                                         |
| -------------------------------------------------- | ------------------------------------- | --------------------------------------------------------- |
| Número de contratos corporativos                   | Seção 6.1 / DRE (seção 7)             | Aumenta/diminui diretamente a **receita bruta** e o lucro |
| Ticket médio por contrato                          | Seção 6.1 / DRE (seção 7)             | Afeta a receita e os impostos sobre faturamento           |
| Quilometragem mensal                               | Seção 6.2                             | Aumenta/diminui **combustível** e manutenção              |
| Preço do combustível                               | Seção 6.2                             | Impacta o custo variável por km                           |
| Percentual de pedágio/estacionamento não repassado | Seção 6.2                             | Aumenta ou reduz o custo variável total                   |
| Nível de marketing                                 | Seção 6.3                             | Aumenta despesa fixa; potencialmente eleva receita futura |
| Valor do veículo                                   | Seção 6.4                             | Altera depreciação, imobilizado e necessidade de capital  |
| Prazo e taxa do financiamento                      | Seção 6.4                             | Afeta **juros (DRE)** e o **passivo** no balanço          |
| Capital de giro alvo                               | Seção 6.5 / Balanço inicial (seção 8) | Define quanto de caixa a empresa precisa para operar      |


Qualitativamente:

- **Mais contratos / ticket maior** → aumenta receita, impostos sobre faturamento e, em geral, o lucro (desde que custos variáveis e fixos cresçam mais devagar).  
- **Mais km rodados ou combustível mais caro** → aumenta custos variáveis e reduz a margem de contribuição.  
- **Financiamento mais longo ou juros mais altos** → reduz lucro líquido via aumento de despesa financeira e mantém passivo elevado por mais tempo.  
- **Mais capital de giro** → aumenta segurança de caixa no balanço, mas exige mais aporte inicial dos sócios ou acumular lucros antes de distribuir.

