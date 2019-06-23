# help-me

Repositório do front-end do projeto Help-Me para a Universidade Unigranrio.

## Tecnologias utilizadas

* [Vuejs](https://vuejs.org/) como Framework de criação de componentes
* [Quasar Framework](https://quasar.dev/) como biblioteca de componentes usando o Design do Material Design 2.
* [Firestore](https://firebase.google.com/docs/firestore/?hl=pt-br) do Firebase como banco de dados

## Desenvolvimento

1. Clone o projeto com:

```sh
git clone ...
```

1. Use o arquivo `.env.sample` para criar um arquivo de ambiente `.env` com as variáveis do Firebase.

```sh
# instala as depedências
cp .env.sample .env
```

É necessário ter o Node.js juntamente com o gerenciador de pacotes Yarn para instalar as dependências.

1. Tendo os dois instalados, execute:

```sh
# instala as depedências
yarn
```

Tendo as depedências instaladas, execute o comando para subir a aplicação localmente

```sh
yarn dev
```

A aplicação estará disponível em http://localhost:8080. Para mudar a porta, edite o arquivo quasar.config.js em `devServer.port`

## Buildando a aplicação

Para gerar uma [PWA (Progressive Web Application)](https://developers.google.com/web/progressive-web-apps/), com os assets para produção, use:

```sh
yarn build:pwa
```

Será gerado os assets na pasta `dist/pwa` prontos para serem colocados num servidor de arquivos estáticos como o [Nginx](https://www.nginx.com/)
