# Apps Script - one-pager Google Docs

Este diretório contém um script para gerar um Google Docs do one-pager comercial B2B da C-Level Mobility com foco em:

- formato `A4`
- estética `premium sóbrio`
- hierarquia tipográfica forte
- leitura pensada para impressão em `1 folha`

## Arquivo principal

- `gerar-one-pager-google-docs.gs`

## Como usar

1. Crie um projeto no `Google Apps Script`.
2. Cole o conteúdo de `gerar-one-pager-google-docs.gs`.
3. Ative o serviço avançado `Docs API`.
4. Execute a função `gerarOnePagerCLevelMobility()`.
5. O script retornará a URL do documento criado.

## Observação importante

O script foi escrito para gerar um documento pronto e consistente. Ele nao faz parser do markdown. O markdown continua sendo a fonte editorial e o Apps Script gera uma versão diagramada para uso comercial.
