# Soft Delete - 2026-03-27

## Objetivo

Esta pasta centraliza arquivos retirados do fluxo principal do repositório sem exclusão definitiva.

O objetivo do `soft delete` é:

- reduzir ruído e duplicidade
- retirar arquivos sensíveis ou obsoletos das pastas ativas
- preservar rastreabilidade para revisão futura

## Regra de uso

- arquivos movidos para esta pasta não devem mais ser tratados como fontes ativas
- se algum item precisar voltar, ele deve ser restaurado explicitamente para o caminho original ou para um novo caminho oficial
- referências ativas devem apontar para o novo local apenas quando o histórico do arquivo continuar relevante

## Estrutura

Os arquivos são organizados preservando o caminho original dentro desta pasta sempre que possível.

## Itens desta rodada

### Duplicatas e backups

- `index-copy.html`
- `negocio/vendas/contrato/contrato.txt`

### Consolidação para WordPress

- `frontend-estatico-raiz/index.html`
- `frontend-estatico-raiz/assets/`

### Rascunhos, notas brutas ou backlog

- `negocio/vendas/contrato/leis/pesquisar-essas-leis.txt`
- `negocio/mercado/requisitos.md`
- `negocio/mercado/pesquisa-geral-20260226.txt`
- `negocio/mercado/pros-e-contras.txt`
- `docs/producao-conteudo.txt`
- `todo.md`

### Sensíveis ou inadequados no fluxo ativo

- `docs/webmail-codigos-de-backup.txt`
- `.vscode/sftp.json`

### Legado sem papel claro

- `planilhas-legadas/c-level-mobility.ods`

## Observação crítica

Os arquivos abaixo foram movidos por conterem material sensível e ainda exigem ação operacional fora do Git:

- `docs/webmail-codigos-de-backup.txt`
- `.vscode/sftp.json`

Recomendação:

- invalidar e regenerar códigos de backup do webmail
- rotacionar a senha ou credencial de SFTP antes de considerar o tema encerrado
