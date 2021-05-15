# Backend

Clone do back-end do [Mercado Livre](https://www.mercadolivre.com.br/) feito em [Django](https://www.djangoproject.com/)

## Requisitos

- Python >= 3.5

## Como rodar?

- Instalar dependências

```sh
$ python -m pip -r requirements.txt
```

- Migrar o banco de dados

```sh
$ python ./src/manage.py migrate
```

- Iniciar o servidor

```sh
$ python ./src/manage.py runserver
```
