# Ferramentas

- [asdf](https://asdf-vm.com/)
- [Poetry 1.8.4](https://python-poetry.org/)
- [Python 3.13.0](https://www.python.org/downloads/release/python-3130/)


# Como rodar o projeto

## Localmente

1. Crie um arquivo `.env` e adicione as variáveis de ambiente, você pode usar o arquivo `.env.example` como base.

```bash
cp .env.example .env
```

2. Utilize o banco de dados Postgres. Você pode usar o docker-compose para isso.

```bash
docker-compose up -d docker-compose.yml db
```

3. Instale as dependências do projeto.

```bash
poetry install
```

4. Rode as migrações.

```bash
poetry run python manage.py migrate
```

5. Rode o projeto.

```bash
poetry run python manage.py runserver
```

## Docker

1. Crie um arquivo `.env` e adicione as variáveis de ambiente, você pode usar o arquivo `.env.example` como base.

```bash
cp .env.example .env
```

2. Rode o projeto.

```bash
docker-compose up -d docker-compose.yml
```