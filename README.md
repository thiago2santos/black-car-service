# C-Level Mobility

## Objetivo deste repositorio

Este repositorio concentra:

- as macroareas funcionais do negocio na raiz
- os canais ativos da empresa em uma area propria
- a implementacao publica do site em WordPress
- infraestrutura local, scripts e documentacao de apoio
- arquivos arquivados em soft delete para preservacao de historico

## Estrutura principal

### `0.direcao-e-estrategia/`

Macroarea responsavel por `criar valor`.

Ponto de entrada:

- `0.direcao-e-estrategia/README.md`

### `1.comercial/`

Macroarea responsavel por `marketing` e `vendas`.

Subareas atuais:

- `1.comercial/mercado/`: pesquisas, analises e estudos de mercado
- `1.comercial/marketing/`: copy, pauta, SEO, campanhas e operacao comercial dos canais
- `1.comercial/vendas/`: contratos, automacao comercial e materiais de venda

Ponto de entrada:

- `1.comercial/README.md`

### `2.gestao/`

Macroarea responsavel por `financas` e pela base administrativa da empresa.

Subareas atuais:

- `2.gestao/financeira/`: planejamento, custos, precificacao e planilhas ativas
- `2.gestao/fiscal/`: diretrizes e estudos tributarios
- `2.gestao/pessoas/`: gestao de pessoas, RH, SST e LGPD aplicada a colaboradores

Ponto de entrada:

- `2.gestao/README.md`

### `3.operacao/`

Macroarea responsavel por `entrega`.

Ponto de entrada:

- `3.operacao/README.md`

### `4.canais/`

Area que concentra os ativos e as implementacoes tecnicas dos canais da empresa.

Pontos principais:

- `4.canais/site-institucional/`
- `4.canais/site-institucional/wordpress/wp-content/themes/c-level-mobility-theme/`

### `outros/`

Area de apoio ao trabalho principal do repositorio.

Subareas atuais:

- `outros/infra/`: infraestrutura local e apoio tecnico
- `outros/scripts/`: scripts utilitarios
- `outros/docs/`: documentacao auxiliar
- `outros/arquivo/`: soft delete e material retirado do fluxo principal
- `outros/referencias/`: acervos de referencia e materiais externos

## Regras atuais de organizacao

- documentacao em `kebab-case`, minusculas e sem acentos
- as macroareas principais ficam na raiz do repositorio
- `1.comercial/` define mensagem, oferta, SEO, campanhas e narrativa dos canais
- `4.canais/` implementa os canais em codigo, assets e integracoes
- arquivos ativos devem ficar em areas tematicas, nao soltos na raiz
- itens sem papel claro devem ir para `outros/arquivo/soft-delete/` em vez de exclusao imediata

## Onde mexer em cada coisa

### Direcao do negocio, tese e proposta de valor

- `0.direcao-e-estrategia/`

### Mercado, marketing, copy, SEO e campanhas

- `1.comercial/`
- `1.comercial/marketing/`

### Vendas, contratos e automacao comercial

- `1.comercial/vendas/`

### Execucao do servico e padroes operacionais

- `3.operacao/`

### Pessoas, financeiro, fiscal e planilhas ativas

- `2.gestao/`
- `2.gestao/pessoas/`
- `2.gestao/financeira/planilhas/`

### Site institucional e frontend publico

- `4.canais/site-institucional/wordpress/wp-content/themes/c-level-mobility-theme/`

### Infra local WordPress

- `outros/infra/wordpress-local/`

## Observacao

A raiz do repositorio continua enxuta, mas agora separa de forma explicita:

- macroareas do negocio
- implementacoes tecnicas dos canais
- apoio, referencia e arquivo
