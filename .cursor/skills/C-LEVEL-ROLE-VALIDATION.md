# C-Level role validation

Use esta matriz para testar se os gatilhos das skills estao funcionando bem.

## Como validar

1. Rode um prompt cru, sem mencionar explicitamente a skill.
2. Observe se a resposta tende ao tipo certo de entregavel.
3. Rode um segundo prompt parecido, mas mudando o foco.
4. Se duas skills puderem responder, verifique qual deveria liderar e qual deveria apenas complementar.

## Casos de teste

| Prompt de teste | Skill esperada | Sinal de acerto | Sinal de overlap |
| --- | --- | --- | --- |
| "Organize as hipoteses e lacunas deste plano comercial antes de eu falar com clientes." | `marketing-research` | resposta separa fatos, hipoteses e gaps | responde com copy ou slogan cedo demais |
| "Transforme esse material em um one-pager para gestor administrativo." | `marketing-content` | resposta vira ativo comercial com CTA e prova | responde como plano de pesquisa |
| "Monte um fluxo minimo de onboarding para motorista executivo." | `people-ops` | resposta define objetivo, etapas, donos e registros | entra em matriz legal como estrutura principal |
| "Converta essas exigencias em matriz de obrigacoes com dono e frequencia." | `compliance-docs` | resposta explicita risco, dono, gatilho e impacto | vira manual amplo de RH |
| "Quero revisar se nosso posicionamento premium enxuto faz sentido ou e so retorica." | `marketing-research` | resposta busca validacao e criterios de evidencia | responde com campanha pronta |
| "Escreva uma mensagem curta de prospeccao a partir deste diagnostico." | `marketing-content` | resposta adapta mensagem ao publico e CTA | volta a abrir entrevistas ou benchmark |

## Ganhos esperados vs baseline sem skill

### Antes

- respostas mais genericas
- maior mistura entre pesquisa, copy e compliance
- necessidade de repetir o tipo de entregavel

### Depois

- estrutura de saida mais previsivel
- menos confusao entre "validar", "escrever", "operar" e "mapear obrigacao"
- menos retrabalho para ajustar foco

## Falhas para observar

- descricao ampla demais acionando a skill errada
- skill fazendo perguntas demais antes de entregar algo util
- tom excessivamente abstrato
- mistura entre recomendacao operacional e interpretacao juridica fechada

## Ajustes feitos nesta primeira iteracao

- `marketing-content` foi mantida separada de `marketing-research` para evitar que copy apareca cedo demais.
- `people-ops` ficou responsavel por processos e cadencias; `compliance-docs` ficou responsavel por obrigacoes, riscos e controles.
- Todas as skills receberam secoes de "Do not use this skill for" para reduzir overlap.
- As descricoes passaram a enfatizar o `entregavel principal` de cada skill, reduzindo a ambiguidade de palavras como "liderar".
- As descricoes foram reforcadas com gatilhos em portugues para melhorar ativacao em prompts naturais do seu uso diario.

## Resultados desta rodada de revisao

- Quatro prompts ficaram com mapeamento limpo: hipoteses/lacunas, one-pager, matriz com dono/frequencia e mensagem de prospeccao.
- Dois pontos exigiram refinamento: `posicionamento defensavel vs retorica` e `onboarding com exigencias obrigatorias`.
- O criterio de desempate adotado foi: `pesquisa antes de copy` e `processo antes de compliance`, salvo quando o artefato principal for matriz, auditoria ou controle.
