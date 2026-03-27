# Duplicidades Investigadas Sem Movimentacao

## Objetivo

Registrar os arquivos avaliados para uma segunda rodada de soft delete conservador que, ao final da analise, **nao foram movidos** por ainda fazerem parte de dois fluxos ativos do projeto.

## Escopo analisado

- `index.html`
- `assets/js/*`
- `wp-content/themes/c-level-mobility-theme/functions.php`
- `wp-content/themes/c-level-mobility-theme/assets/js/*`

## Conclusao executiva

Nao foi aplicado soft delete adicional nesta rodada porque a mesma camada funcional da landing existe em dois alvos ativos:

1. site estatico na raiz do projeto
2. tema WordPress customizado

Ambos referenciam seus respectivos arquivos locais de JavaScript.

## Evidencias

### Landing estatica

`index.html` carrega:

- `assets/js/lang.js`
- `assets/js/form-phone.js`
- `assets/js/destination-autocomplete.js`
- `assets/js/form-validation.js`
- `assets/js/feedback-banner.js`

### Tema WordPress

`wp-content/themes/c-level-mobility-theme/functions.php` faz enqueue de:

- `wp-content/themes/c-level-mobility-theme/assets/js/lang.js`
- `wp-content/themes/c-level-mobility-theme/assets/js/form-phone.js`
- `wp-content/themes/c-level-mobility-theme/assets/js/destination-autocomplete.js`
- `wp-content/themes/c-level-mobility-theme/assets/js/form-validation.js`
- `wp-content/themes/c-level-mobility-theme/assets/js/feedback-banner.js`

## Resultado da comparacao

### `feedback-banner.js`

- status: identico byte a byte
- acao: nao mover
- motivo: apesar de duplicado, cada fluxo referencia sua propria copia

### `form-phone.js`

- status: equivalente na pratica; diferenca observada apenas de newline final
- acao: nao mover
- motivo: duplicidade ativa em dois fluxos

### `destination-autocomplete.js`

- status: equivalente na pratica; diferenca observada apenas de newline final
- acao: nao mover
- motivo: duplicidade ativa em dois fluxos

### `form-validation.js`

- status: equivalente na pratica; diferenca observada apenas de newline final
- acao: nao mover
- motivo: duplicidade ativa em dois fluxos

### `lang.js`

- status: implementacoes diferentes
- raiz: dicionario embutido no proprio arquivo
- tema: carga traducoes via `locales/*.json` com `wp_localize_script`
- acao: nao mover
- motivo: nao sao duplicatas funcionais simples

## Regra adotada

Enquanto o projeto mantiver:

- a landing estatica na raiz
- e o tema WordPress customizado

nao e seguro aplicar soft delete nos scripts duplicados apenas por nome ou semelhanca.

## Proximo passo correto, se quiser consolidar de verdade

Antes de qualquer soft delete nessa camada, decidir uma destas estrategias:

1. manter apenas a versao estatica como fonte oficial
2. manter apenas a versao WordPress como fonte oficial
3. criar um processo formal de sincronizacao ou build para gerar uma copia da outra

Sem essa decisao, remover qualquer lado aumenta risco de quebra em deploy, testes ou manutencao.
