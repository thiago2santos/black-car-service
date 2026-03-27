# Aprendizados de contratos de referencia para a C-Level Mobility

## Objetivo deste documento

Consolidar, de forma pragmatica, os aprendizados obtidos a partir da leitura e comparacao de contratos de locadoras de grande porte com o contexto real da C-Level Mobility.

Este documento responde principalmente a estas perguntas:

- o que faz sentido aproveitar dos contratos de referencia
- o que nao faz sentido replicar no nosso caso
- o que precisa existir no nosso contrato por causa do nosso modelo real de negocio
- quais pontos ainda dependem de decisao antes de redigir um contrato-base

Importante:

- este documento trabalha apenas com o que existe concretamente no repositorio e nos PDFs analisados
- ele nao substitui revisao juridica
- ele nao inventa politica comercial, clausula ou escopo que ainda nao esteja minimamente sustentado pelos materiais do projeto

---

## Fontes consideradas

### Contratos analisados

- `negocio/vendas/contrato/Contrato_Geral_Aluguel_de_Carros.pdf`
  - Condicoes gerais de aluguel de carros e seguro da Localiza
- `negocio/vendas/contrato/contrato_publico.pdf`
  - Termos e condicoes gerais de locacao de veiculos da Movida
- `negocio/vendas/contrato/4612_CONTRATOLOCAÇÃOVEICULO7.pdf`
  - contrato de locacao de veiculo de perfil mais tradicional, util como contraste

### Materiais internos do repositorio usados para contextualizacao

- `negocio/vendas/contrato-mensal-com-motorista.md`
- `negocio/gestao/financeira/estrutura-de-custos-e-precificacao-rastreavel.md`
- `negocio/gestao/financeira/planejamento-orcamentario.md`
- `negocio/mercado/requisitos.md`
- `negocio/mercado/comparativo-concorrentes-browser.md`

---

## Leitura principal: o que exatamente estamos comparando

Os contratos da Localiza e da Movida foram desenhados para um modelo de:

- locacao de veiculo em escala
- operacao com multiplas lojas/agencias
- cliente dirigindo o carro
- cobrancas padronizadas de balcão e pos-devolucao
- controle de risco patrimonial da locadora

Ja o material da C-Level Mobility aponta, ate aqui, para um modelo diferente:

- foco em transporte executivo
- foco em `1 carro + 1 motorista` no cenario base
- foco inicial em `Jundiai e regiao`
- foco em `empresas`, `executivos` e `contratos corporativos recorrentes`
- proposta de valor mais ligada a `disponibilidade`, `previsibilidade`, `prioridade de agenda` e `padrao de atendimento`
- servico de `carro com motorista`, nao de locacao pura para o cliente dirigir

Essa diferenca e o ponto central do aprendizado:

> nao devemos partir de um contrato de locacao de carro e apenas trocar o nome da empresa.

Se fizermos isso, corremos o risco de herdar clausulas de um modelo de negocio que nao e o nosso.

Nosso contrato precisa proteger a operacao, mas tambem precisa espelhar o que realmente esta sendo vendido:

- disponibilidade de mobilidade executiva
- janela de atendimento
- franquia de horas e quilometragem
- regras de agenda e excedente
- comportamento esperado do cliente e da operacao

---

## O que os contratos de referencia ensinam muito bem

Mesmo nao sendo o mesmo modelo, Localiza e Movida ensinam varias coisas importantes sobre disciplina contratual.

### 1. O contrato nao deve viver sozinho

Nos dois casos, o contrato e tratado como um conjunto de documentos:

- contrato principal
- condicoes gerais
- tarifario
- anexos
- regras por segmento

Aprendizado:

- um contrato bom nao tenta colocar toda a operacao em uma unica pagina
- separar `termos gerais` de `anexos operacionais/comerciais` da mais clareza e facilita atualizacao

Para a C-Level Mobility, isso sugere uma estrutura do tipo:

- contrato principal
- anexo comercial do plano contratado
- anexo operacional com janela, franquias e excedentes
- anexo de dados do veiculo e do motorista, quando necessario

### 2. Cobranca precisa estar prevista antes do problema aparecer

Os contratos de referencia deixam muito claro:

- pre-autorizacao
- cobranca posterior
- multas
- avarias
- combustivel
- lavagem
- pedagio/tag
- custos descobertos apos a devolucao

Aprendizado:

- se algo pode ser cobrado, precisa estar previsto
- o contrato nao pode depender de improviso nem de "depois a gente combina"

Para a C-Level Mobility, isso nao significa copiar a logica de combustivel e devolucao de tanque, mas significa formalizar:

- mensalidade
- excedentes de hora
- excedentes de km
- pedagios
- estacionamento
- pernoite
- hospedagem e alimentacao do motorista quando aplicavel
- reajustes ordinarios e extraordinarios

### 3. Evento anormal precisa ter procedimento objetivo

Localiza e Movida detalham:

- acidente
- furto
- roubo
- incendio
- comunicacao
- prazo para BO
- relatorio do evento
- perda de protecao em caso de descumprimento

Aprendizado:

- incidentes nao podem depender de memoria ou boa vontade das partes
- a ausencia de procedimento abre espaco para conflito

Para a C-Level Mobility, faz sentido haver um bloco claro sobre:

- atraso relevante
- cancelamento
- ausencia do passageiro
- pane
- acidente no trajeto
- necessidade de substituicao do veiculo
- impossibilidade de execucao por motivo externo

### 4. "Uso indevido" precisa ser concreto

As locadoras sao muito especificas sobre o que descaracteriza cobertura e gera responsabilidade integral:

- alcool
- condutor nao autorizado
- fronteira
- carga/passageiros acima do limite
- uso em local inadequado
- falta de comunicacao do sinistro

Aprendizado:

- a boa clausula nao fala genericamente em "mau uso"
- ela exemplifica

Para a C-Level Mobility, essa logica pode ser reaproveitada em outro formato:

- conduta inadequada do cliente ou de passageiros
- solicitacoes fora do escopo
- excesso de lotacao
- transporte de itens vedados
- exigencia de deslocamento fora da area atendida sem aprovacao previa
- uso do servico em contexto diverso do contratado

### 5. Localiza e Movida sao muito fortes em "proteger a execucao financeira"

Os contratos deixam claro que:

- valores podem ser cobrados mesmo depois do encerramento do contrato
- ha taxa administrativa para certos eventos
- a locadora se reserva mecanismos de cobranca
- inadimplencia gera penalidade

Aprendizado:

- o contrato nao serve apenas para definir o servico
- ele tambem define o que acontece quando o combinado deixa de ser cumprido

Para a C-Level Mobility, isso aponta para a necessidade de prever:

- vencimento da mensalidade
- vencimento dos excedentes
- juros e multa por atraso
- suspensao do atendimento em caso de inadimplencia
- reajuste por mudanca relevante de custo ou escopo

---

## O que faz sentido estar no contrato da C-Level Mobility

Esta secao considera o nosso contexto atual, conforme o repositorio, e separa o que de fato parece aderente ao modelo de negocio.

### 1. Qualificacao das partes

Deve existir.

Faz sentido porque:

- ja estamos pensando em contratos corporativos recorrentes
- havera clientes pessoa juridica
- e importante saber quem contrata, quem usa e quem responde financeiramente

Ponto pratico:

- pode haver diferenca entre `contratante`, `usuario principal` e `responsavel financeiro`

Isso aparece fortemente na Movida e faz sentido no nosso caso corporativo.

### 2. Objeto do contrato

Deve existir com muita clareza.

No nosso caso, o objeto nao deve ser descrito como:

- "locacao de veiculo"

O objeto deve refletir algo mais proximo de:

- prestacao de servicos de mobilidade executiva com carro e motorista
- disponibilidade operacional dentro de parametros definidos

Esse e um ponto estrategico, nao apenas juridico.

Se o objeto for mal descrito, o cliente tende a comparar com:

- locacao simples
- aplicativo
- corrida avulsa

Se o objeto for bem descrito, o contrato reforca:

- disponibilidade
- padrao
- previsibilidade
- atendimento executivo

### 3. Escopo operacional do plano contratado

Deve existir e provavelmente deve ficar em anexo.

Com base em `contrato-mensal-com-motorista.md`, isso inclui:

- plano contratado
- horas inclusas
- km inclusos
- horario padrao de atendimento
- dias atendidos
- politica para sabados, domingos e feriados
- regra de excedentes
- politica de pedagio e estacionamento
- politica de pernoite e viagens fora da base
- nao cumulatividade de horas e km

Esse talvez seja o bloco mais importante do nosso contrato.

Motivo:

- no nosso modelo, o conflito mais provavel nao e "quem bateu o carro"
- e sim "o que estava dentro ou fora do pacote"

### 4. Janela de atendimento

Deve existir.

No material interno ja aparece como recomendacao concreta:

- segunda a sexta, das 7h as 19h, dentro do plano
- fora da janela: cobranca adicional ou aprovacao previa

Isso e totalmente coerente com:

- a ideia de franquia mensal
- o controle de margem
- a diferenca entre servico recorrente e disponibilidade irrestrita

Sem essa clausula, o cliente pode interpretar o contrato mensal como disponibilidade permanente.

### 5. Quilometragem e horas excedentes

Deve existir.

Isso esta diretamente sustentado por:

- `contrato-mensal-com-motorista.md`
- `estrutura-de-custos-e-precificacao-rastreavel.md`

Razao:

- no nosso modelo, km e hora excedente nao sao detalhe operacional
- sao parte da logica economica do contrato

O repositorio ja sustenta que:

- a mensalidade cobre uma franquia
- o uso adicional precisa ser precificado
- o cliente pode ser melhor atendido ajustando escopo, nao simplesmente reduzindo preco

### 6. Pedagios e estacionamento

Devem existir.

O material interno sugere de forma objetiva:

- cobrar a parte

Isso faz sentido porque:

- sao custos variaveis por roteiro
- misturar esses custos no valor fixo distorce a comparabilidade entre clientes

### 7. Pernoite, viagens fora da base e despesas do motorista

Devem existir.

Ja ha base concreta no repositorio para isso:

- diaria de viagem, se houver necessidade de pernoite
- hospedagem e alimentacao do motorista quando aplicavel
- aprovacao previa para rotas fora da area base

Esse tipo de clausula parece muito mais aderente a C-Level Mobility do que varias clausulas classicas de locadora.

### 8. Faturamento, pagamento e reajuste

Devem existir.

Base concreta no repositorio:

- mensalidade faturada no inicio do periodo
- excedentes faturados no fechamento do mes
- reajuste anual
- revisao extraordinaria se houver mudanca relevante em combustivel, pedagio, tributacao ou escopo operacional

Esse ponto tambem conversa com:

- planejamento orcamentario
- precificacao rastreavel
- necessidade de proteger margem

### 9. Regras de cancelamento, no-show e mudanca de agenda

Devem existir.

Justificativa:

- Localiza e Movida mostram a importancia de formalizar no-show e cancelamento
- nosso servico depende fortemente de agenda reservada
- o proprio material de vendas fala em disponibilidade e prioridade

No nosso caso, essa clausula deve ser adaptada ao servico com motorista, incluindo por exemplo:

- cancelamento com antecedencia minima
- ausencia do passageiro no local combinado
- alteracao de roteiro em cima da hora
- espera acima do tolerado

O conceito faz sentido.
Os numeros e prazos ainda precisam ser decididos.

### 10. Padrao de atendimento e comportamento esperado

Faz sentido existir, ainda que em redacao simples.

Isso decorre do proprio posicionamento do negocio:

- transporte executivo
- discricao
- apresentacao
- pontualidade
- atendimento priorizado

Nao necessariamente como uma clausula "estetica", mas como regra de servico:

- o que a empresa entrega
- o que o cliente pode esperar
- o que descaracteriza a boa execucao

### 11. Responsabilidade por multas, pedagios e despesas geradas pelo atendimento

Faz sentido existir.

Mesmo com motorista proprio, o cliente pode gerar custos especificos ligados ao atendimento:

- pedagio
- estacionamento
- rotas excepcionais
- pernoite
- mudancas relevantes no escopo

Ja as `multas de transito` exigem mais cuidado na redacao, porque no nosso modelo o condutor tende a ser da propria operacao.

Entao:

- faz sentido tratar responsabilidade por custos gerados pela agenda/roteiro do cliente
- nao faz sentido copiar automaticamente a logica de repasse integral de multas como se o cliente fosse o motorista

### 12. Clausula de vigencia, renovacao e encerramento

Deve existir.

Faz sentido porque:

- o repositorio trabalha com contratos mensais e recorrencia
- ha ideia de contrato piloto de 30 dias
- e necessario prever encerramento, renovacao e revisao do uso real

### 13. Clausula de assinatura eletronica e comunicacoes digitais

Faz sentido existir.

Os contratos analisados usam isso com naturalidade.

E no nosso caso isso parece aderente, porque:

- o atendimento comercial tende a ocorrer por WhatsApp, e-mail e PDF
- isso ajuda a formalizar aprovacoes, aditivos e aceite

### 14. Privacidade e tratamento de dados

Faz sentido existir pelo menos em nivel basico.

Motivo:

- ha coleta de dados de clientes corporativos e passageiros
- ha agenda operacional
- podem existir dados de deslocamento, contatos e preferencias

Porem, devemos tomar cuidado para nao copiar clausulas robustas de telemetria, score e consulta de credito se isso nao existir na pratica.

### 15. Foro e disposicoes gerais

Devem existir.

Sao itens padrao e ajudam a fechar o instrumento com consistencia minima.

---

## O que nao faz sentido copiar para o nosso contrato, pelo menos nao do jeito que aparece nas locadoras

Esta e uma secao critica. O risco maior nao e esquecer uma clausula importante. E copiar uma clausula que pressupoe um modelo operacional diferente.

### 1. Regras centradas em "cliente dirigindo o carro"

Nao faz sentido copiar como base:

- condutor adicional
- condutor jovem
- cliente habilitado como requisito central da contratacao
- transferencia de posse do carro ao cliente
- devolucao do carro pelo cliente
- checklist de retirada/devolucao como se o cliente tivesse a guarda do ativo durante todo o contrato

Motivo:

- isso pertence ao modelo `self-drive`
- nosso servico, conforme o repositorio, e `carro com motorista`

### 2. Logica de tanque cheio / devolucao com combustivel

Nao faz sentido como clausula central.

Em locadora, isso e essencial porque o cliente retira e devolve o ativo.

No nosso modelo:

- o combustivel compoe custo operacional do servico
- ou entra na franquia
- ou e considerado indiretamente no km

Portanto, nao devemos transplantar a logica de "retira com tanque cheio e devolve cheio".

### 3. Copiar a estrutura de "protecao do carro" como se fosse produto de balcão

Nao faz sentido replicar automaticamente:

- custo prefixado de limite de danos
- coparticipacao padrao de locadora
- pacote de protecoes no modelo LDW/ALI/TOT, etc.

Motivo:

- isso existe porque a locadora transfere a posse do carro ao cliente
- no nosso caso, a operacao do veiculo tende a permanecer conosco

Isso nao quer dizer ignorar responsabilidade e seguro.
Quer dizer apenas que a engenharia contratual precisa ser outra.

### 4. Apropriacao indebita do veiculo pelo cliente, como eixo central

So faria sentido em situacoes muito especificas e diferentes do modelo atual.

No servico de carro com motorista, o cliente nao esta, em principio:

- retirando o carro
- mantendo posse autonoma do veiculo
- administrando devolucao como numa locadora

Entao nao devemos estruturar o contrato ao redor desse risco.

### 5. Regras de fronteira, territorio internacional e posse prolongada do ativo

Nao parecem prioritarias para a fase atual.

Podem fazer sentido em contratos muito sofisticados ou em viagens especificas, mas hoje:

- nao aparecem como eixo comercial nosso
- nao aparecem como operacao base do repositorio

Entao, se entrarem, devem entrar so se houver necessidade concreta.

### 6. Multas de transito tratadas como se o cliente fosse o condutor principal

Nao faz sentido copiar literalmente.

No nosso modelo atual:

- ha `1 carro + 1 motorista`
- o servico e operacionalizado pelo nosso lado

Portanto, a logica de multa precisa ser adaptada com muito cuidado.

O que talvez faca sentido e prever:

- despesas diretamente causadas por instrucao do cliente
- excecoes operacionais aprovadas
- reembolso de custos extraordinarios gerados por roteiro ou espera

Mas nao simplesmente empurrar a multa ao cliente como se ele estivesse dirigindo.

### 7. Excesso de juridiquês e de mecanismos de escala que hoje nao temos

Movida e Localiza trabalham com:

- multiplas lojas
- bloqueio remoto
- etiquetas eletronicas
- consulta de credito em escala
- regras de varios segmentos simultaneos
- debitos em cartoes cadastrados ao longo de diversas locacoes

Isso nao e necessariamente errado.
So que pode tornar nosso contrato:

- maior do que a operacao suporta
- menos claro para o cliente
- juridicamente inflado para um negocio ainda em fase de estruturacao

---

## Pontos que parecem "nossos" e que o contrato deveria refletir

Aqui estao os pontos em que o repositorio mostra uma identidade propria da C-Level Mobility e que, portanto, merecem aparecer no contrato ou em anexo.

### 1. A proposta de valor nao e posse do carro; e mobilidade executiva

Esse talvez seja o principal aprendizado estrategico.

Pelos materiais internos, o cliente nao esta comprando apenas:

- deslocamento
- carro
- corrida

Ele esta comprando:

- disponibilidade
- prioridade de agenda
- previsibilidade de custo
- padrao de atendimento
- tranquilidade operacional

Isso precisa aparecer no contrato, pelo menos no objeto e na descricao do plano contratado.

### 2. O contrato mensal nao deve parecer "pacote de corridas com desconto"

Isso esta dito de forma direta em `contrato-mensal-com-motorista.md`.

O contrato precisa reforcar que o cliente paga por:

- disponibilidade do veiculo
- disponibilidade do motorista
- previsibilidade operacional
- prioridade de agenda
- franquia mensal de horas e quilometragem

Se isso nao estiver formalizado, a percepcao de valor enfraquece.

### 3. O centro economico do contrato esta nas franquias

Os materiais internos deixam claro que a sustentabilidade depende de:

- horas inclusas
- km inclusos
- excedentes
- protecao contra ociosidade reservada

Ou seja:

- o contrato da C-Level Mobility precisa ser tao bom em `escopo mensal` quanto os contratos das locadoras sao em `risco patrimonial`

### 4. Cidade-base e area de operacao importam

O repositorio aponta foco inicial em:

- Jundiai e regiao

Tambem ha mix de corridas com:

- aeroportos GRU, CGH e VCP

Isso sugere que o contrato pode precisar definir:

- cidade-base da operacao
- area padrao de atendimento
- criterio para viagens fora da base

### 5. O motorista e parte do produto

Nas locadoras, o motorista quase nao existe juridicamente, exceto como servico acessorio.

No nosso caso, o motorista e parte central da entrega.

Isso sugere a necessidade de o contrato refletir, de algum modo:

- atendimento executivo
- pontualidade
- apresentacao
- conduta profissional

E, em contrapartida, tambem:

- respeito ao profissional
- limites de jornada
- regras de espera
- pernoite quando aplicavel

O repositorio nao traz ainda uma politica trabalhista detalhada, entao nao devemos inventa-la.
Mas o contrato nao pode fingir que o motorista e irrelevante.

### 6. Contrato piloto de 30 dias e uma ideia concreta do repositorio

Isso e importante.

O material comercial ja sugere:

- opcao A: contrato mensal fechado
- opcao B: piloto de 30 dias

Logo, o contrato-base pode precisar nascer com possibilidade de duas modalidades:

- contrato recorrente mensal
- contrato piloto de validacao

### 7. Reajuste extraordinario por mudanca relevante de custo faz sentido no nosso caso

Isso nao e teorico.

O repositorio explicita sensibilidade a:

- combustivel
- pedagio
- tributacao
- escopo operacional

Num negocio com margem ainda sendo estruturada, isso e especialmente relevante.

### 8. Substituicao de veiculo e tema importante, mas ainda nao resolvido

Os materiais internos levantam a pergunta:

- se havera carro reserva/substituicao

Isso e sinal de que:

- o contrato deve tratar indisponibilidade do carro
- mas ainda nao ha base suficiente para prometer substituicao irrestrita

Portanto, esse ponto precisa ser decidido antes da redacao final.

---

## Estrutura de contrato que parece mais aderente ao que temos hoje

Sem redigir juridicamente ainda, a estrutura abaixo parece coerente com o que o repositorio sustenta.

### Parte 1. Dados basicos

- identificacao das partes
- vigencia
- plano contratado
- valor mensal
- forma de faturamento

### Parte 2. Objeto

- prestacao de servicos de mobilidade executiva com carro e motorista
- atendimento conforme franquias e janela definidas

### Parte 3. Escopo do plano

- horas inclusas
- km inclusos
- cidade-base
- horario padrao
- dias incluidos
- regras para sabado, domingo e feriado

### Parte 4. Itens cobrados a parte

- km excedente
- hora excedente
- pedagio
- estacionamento
- pernoite
- hospedagem/alimentacao do motorista, quando aplicavel

### Parte 5. Regras operacionais

- agendamento
- alteracao de agenda
- cancelamento
- tolerancia de espera
- viagens fora da base
- nao cumulatividade de horas e km

### Parte 6. Faturamento, vencimento, atraso e reajuste

- quando fatura
- quando vencem mensalidade e excedentes
- multa e juros
- reajuste anual
- revisao extraordinaria

### Parte 7. Incidentes e impossibilidade de atendimento

- pane
- acidente
- atraso por forca maior
- indisponibilidade eventual
- procedimento de comunicacao

### Parte 8. Responsabilidades gerais

- dever de boa-fe das partes
- conduta adequada dos passageiros
- lotacao maxima
- itens/produtos vedados, se houver
- respeito ao motorista e ao veiculo

### Parte 9. Disposicoes finais

- assinatura eletronica
- comunicacoes digitais
- privacidade
- foro

---

## O que percebi alem do obvio ao comparar tudo

Esta secao registra observacoes analiticas que nao aparecem necessariamente de forma explicita em um unico arquivo, mas decorrem da leitura cruzada do material.

### 1. O risco principal da locadora e patrimonial; o nosso risco principal parece ser de escopo e margem

Nas locadoras, o contrato gira em torno de:

- dano ao carro
- perda da posse
- sinistro
- recuperacao do ativo

No nosso caso, lendo vendas + precificacao + planejamento, o risco que mais aparece e:

- escopo mal definido
- excesso de disponibilidade nao precificado
- custo variavel corroendo margem
- cliente enxergando mensalidade como "direito irrestrito ao carro"

Isso muda profundamente a funcao do contrato.

Conclusao:

- nosso contrato precisa ser excelente em delimitar `como o servico funciona`
- e nao apenas em proteger o carro juridicamente

### 2. Nosso contrato talvez precise de um anexo comercial mais forte do que um anexo juridico

Isso porque o material do repositorio ja esta muito maduro em:

- planos
- franquias
- excedentes
- narrativa comercial

e ainda nao esta igualmente maduro em:

- regras juridicas finas de contingencia
- cobertura de seguro
- substituicao
- SLA formal

Conclusao:

- o primeiro grande salto de qualidade talvez nao seja um contrato "mais pesado"
- e sim um contrato com `anexo comercial-operacional` muito claro

### 3. O repositorio sugere uma empresa premium de servico, nao uma mini-locadora

Essa diferenca e importante para evitar erro de posicionamento.

Os materiais internos falam em:

- mobilidade executiva
- prioridade de agenda
- padrao de atendimento
- apresentacao
- tranquilidade operacional

Se o contrato parecer contrato de rent-a-car, podemos enfraquecer a propria proposta de valor.

### 4. Ha um conflito potencial entre "discurso premium" e "promessa excessiva"

Os materiais comerciais falam em:

- atendimento prioritario
- disponibilidade
- dedicacao

Mas o planejamento orcamentario ainda aponta:

- `1 carro + 1 motorista` no cenario base

Conclusao:

- o contrato nao deve prometer disponibilidade irrestrita ou redundancia operacional sem que isso esteja realmente estruturado
- isso vale especialmente para carro reserva, cobertura fora da janela e atendimento emergencial

### 5. O nosso contrato precisara equilibrar clareza comercial com protecao operacional

Se ele for juridico demais:

- assusta
- fica generico
- nao ajuda a vender

Se ele for comercial demais:

- vira proposta
- nao protege margem
- deixa lacunas em cobranca e escopo

O bom desenho, para o nosso caso, parece ser:

- linguagem clara
- escopo objetivo
- poucos mecanismos de cobranca, mas muito bem definidos

### 6. O contrato pode reforcar a propria proposta de valor

Isso ficou mais claro depois da comparacao.

Nas locadoras, o contrato descreve um ativo.
No nosso caso, o contrato pode e deve descrever um servico de valor superior.

Se bem escrito, o contrato ajuda o cliente a entender que ele contratou:

- mobilidade executiva
- disponibilidade qualificada
- tempo produtivo
- menos friccao operacional

Ou seja:

- o contrato nao e so defesa
- ele tambem e enquadramento de valor

---

## O que ainda nao temos base suficiente para fechar

Para evitar inventar, estes pontos ficam marcados como `pendentes de decisao`.

### 1. Carro reserva / substituicao

O material pergunta se havera carro reserva/substituicao, mas nao fecha a politica.

### 2. Politica exata de cancelamento

Sabemos que precisa existir, mas ainda nao ha:

- antecedencia minima definida
- regra de no-show definida
- tolerancia de espera fechada

### 3. Politica exata para fora da janela de atendimento

Sabemos que precisa existir, mas faltam:

- horario final aprovado
- valor ou criterio do adicional
- regra de aprovacao

### 4. Politica exata de pernoite

Sabemos que deve existir, mas faltam:

- valor da diaria de viagem
- criterio de aprovacao
- o que o cliente reembolsa exatamente

### 5. Regra final sobre combustivel no contrato mensal

Os materiais internos mencionam combustivel dentro da franquia nos planos, mas tambem levantam a necessidade de revisar se ele deve ficar dentro ou fora do contrato.

### 6. Motorista dedicado vs compartilhado

Esse ponto aparece no repositorio como algo ainda a definir e muda a redacao do contrato.

### 7. Politica de inadimplencia operacional

Faz sentido prever suspensao do atendimento em caso de atraso, mas os materiais ainda nao trazem uma regra fechada.

### 8. Politica de LGPD em nivel contratual

Faz sentido haver, mas ainda nao ha no repositorio um texto proprio da C-Level Mobility consolidado sobre:

- quais dados coleta
- por quanto tempo guarda
- com quem compartilha

---

## Recomendacao pratica de proximo passo

Antes de redigir o contrato-base definitivo, parece recomendavel fechar primeiro estes blocos:

1. modelo exato de escopo operacional
2. politica de cancelamento, espera e no-show
3. politica de fora da base e pernoite
4. faturamento, vencimento, multa e reajuste
5. regra de substituicao ou indisponibilidade
6. modalidade principal do contrato

Minha leitura hoje:

- o contrato-base da C-Level Mobility deve nascer mais perto de um `contrato de prestacao de servicos de mobilidade executiva recorrente` do que de um `contrato de locacao de veiculo`

---

## Perguntas em aberto para dirimir duvidas

### Sobre o modelo do servico

- O contrato principal da C-Level Mobility sera, de fato, sempre `carro com motorista`, ou tambem existira locacao sem motorista?
- O foco inicial e exclusivamente contrato mensal, ou tambem queremos um instrumento para servicos avulsos e transfers?
- O motorista sera dedicado ao cliente em alguns planos, ou sempre compartilhado conforme agenda?

### Sobre escopo operacional

- Qual sera a janela-padrao oficial de atendimento do contrato mensal?
- Sabado, domingo e feriado entram no pacote ou sempre sao tratados como adicional?
- Qual sera a cidade-base oficial da operacao no contrato?
- Como definiremos `fora da base`: por municipio, raio, roteiro ou tempo estimado?

### Sobre cobranca

- Combustivel ficara embutido no contrato mensal ou sera tratado de forma diferente em alguns casos?
- Pedagio e estacionamento serao sempre reembolsados a parte?
- Havera diaria de viagem/pernoite formal? Se sim, qual logica?
- Excedentes serao cobrados no fechamento do mes ou imediatamente apos a ocorrencia?

### Sobre cancelamento e agenda

- Qual antecedencia minima para cancelamento sem custo?
- Havera tolerancia de espera? De quantos minutos?
- Como tratar no-show do passageiro?
- Como tratar mudancas de roteiro durante o atendimento?

### Sobre contingencia operacional

- Havera compromisso formal de substituicao do veiculo em caso de pane ou indisponibilidade?
- Se nao houver carro reserva garantido, qual sera a redacao correta para nao prometer mais do que conseguimos cumprir?
- Em caso de atraso por transito, acidente ou intermitencia operacional, qual sera o procedimento formal de comunicacao?

### Sobre formalizacao juridica

- Queremos um contrato mais enxuto com anexos comerciais, ou um instrumento juridico mais robusto desde a primeira versao?
- Fara sentido inserir desde ja clausula de privacidade/LGPD em versao simples?
- Fara sentido inserir assinatura eletronica e validade de aprovacoes por e-mail/WhatsApp desde a versao inicial?

