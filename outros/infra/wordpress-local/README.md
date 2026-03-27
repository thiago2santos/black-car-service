# WordPress Local

## Objetivo

Esta pasta concentra a infraestrutura local de desenvolvimento do WordPress da C-Level Mobility.

## Arquivos

- `docker-compose.yml`: sobe WordPress, MariaDB e phpMyAdmin para uso local

## Como usar

Exemplo:

```bash
docker compose up -d
```

## Portas padrão

- WordPress: `http://localhost:8080`
- phpMyAdmin: `http://localhost:8081`

## Observação

Esta infraestrutura serve para desenvolvimento local. O site canônico do projeto está consolidado em `4.canais/site-institucional/wordpress/wp-content/themes/c-level-mobility-theme/`.
