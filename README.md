# Dio Clone Banco Inter API

Em estudo: 11/12/2021

Semana Frontend Inter - 06 a 09/12/2021

Instrutor: [Pablo Henrique](https://github.com/pablohdev)

Aula Apoio: [Renan Oliveira](https://www.linkedin.com/in/renanoliveira-ti/)

Repositórios originais: [dio-inter-clone-backend](https://github.com/pablohdev/dio-inter-clone-backend) e [dio-inter-clone-frontend](https://github.com/pablohdev/dio-inter-clone-frontend)

Plataforma de Ensino: [Digital Innovation One](https://digitalinnovation.one/sign-up?ref=K5EF2VCVKA)



<hr>

##  Objetivo

- Aplicação destinada à prática da Semana Inter Frontend em React.js e Backend em Node.Js com banco de dados PostgreSQL
- Desenvolver um Super App Inter para realizar transações simulando o PIX entre contas.



<hr>

## Autor

Bruno Gamba Rocha

[https://www.linkedin.com/in/bruno-gamba-rocha](https://www.linkedin.com/in/bruno-gamba-rocha/)



<hr>

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/pt-br/docs/)
- [React.js](https://pt-br.reactjs.org/docs/getting-started.html)
- [npm](https://docs.npmjs.com/)
- [yarn](https://classic.yarnpkg.com/en/docs)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [TypeOrm](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/docs/8.1/index.html)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [Crypto-JS](https://www.npmjs.com/package/crypto-js)
- [express-async-erros](https://www.npmjs.com/package/express-async-errors)
- [Styled-Components](https://styled-components.com/docs)
- [Docker](https://docs.docker.com/)
- [Git](https://git-scm.com/doc/)
- [VS Code](https://code.visualstudio.com/)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
- [DBeaver](https://dbeaver.io/)
- [Aquitetura REST](https://pt.wikipedia.org/wiki/REST)



<hr>

## Orientações

#### Criar o ambiente de desenvolvimento
- VS Code
- VS Code - Extensões: Prettier, EditorConfig, ESLint e Thunder Client
- Git
- Node.js

#### Criar pastas backend e frontend do seu projeto (clone dos repositórios)

- Abrir terminal do Git Bash

``` git clone https://github.com/pablohdev/dio-inter-clone-backend.git ```

``` git clone https://github.com/pablohdev/dio-inter-clone-frontend.git ```

#### Abrir VS Code, selecionar a pasta do projeto backend

- Alterar para a branch "template"

``` git checkout template ```
	
- Executar comandos abaixo, linha a linha, para baixar as dependências

``` npm i ```

``` npm install --global yarn ```

``` npm install express ```

``` npm install typecript ```

``` npm install typeorm ```

``` npm install pg ```

``` npm install nodemon ```

``` yarn add crypto-js ```

``` yarn add @types/crypto-js -D ```

``` yarn add express-async-errors ```

``` yarn add jsonwebtoken ```

``` yarn add @types/jsonwebtoken -D ```

``` yarn add js-base64 ```


- Caso VS Code não execute o Power Shell. Abra o Power Shell como Administrador, execute o comando abaixo e confirme.

``` Set-ExecutionPolicy ByPass ```
		
- Testar ambiente. Executar o comando abaixo e testar no navegador quando subir aplicação http://localhost:3333

``` yarn start:dev ```

- Verificando a versão do Docker. Iniciando a máquina virtual. Iniciando a instância com as imagens do docker-compose. Verificando serviços em execução. Obtendo IP da máquina virtual.

``` docker --version ``` 

``` docker-machine start default ```

``` docker-compose up -d ``` 

``` docker ps ``` 

``` docker-machine ip ``` 


<hr>

## Material complementar

- [Configurando ESLint no Node com Express e Typescript](https://dev.to/melquisedecfelipe/configurando-eslint-no-node-com-express-e-typescript-58p9)

- [Introduction to JSON Web Tokens](https://jwt.io/introduction)
- [JsonWebToken implementation for node.js](https://github.com/auth0/node-jsonwebtoken)



<hr>

## Andamento

#### Testantando ambiente

<img src="/backend/screenshots/screenshot-01.png"/> 

#### Configurando o Docker e PostgreSQL

<img src="/backend/screenshots/screenshot-02.png"/> 

#### Configurando o TypeOrm, criando as Entitys e Tabelas no BD

<img src="/backend/screenshots/screenshot-03.png"/> 

#### Criando e Testando a base das Rotas

<img src="/backend/screenshots/screenshot-04.png"/> 

#### Criando e Testando o user.controllers

<img src="/backend/screenshots/screenshot-05.png"/> 

#### Criando as Interfaces de user.dtos

<img src="/backend/screenshots/screenshot-06.png"/> 

#### Criando e Testando user.service, middlewares globalErros, shared error AppError

<img src="/backend/screenshots/screenshot-07.png"/> 

#### Configurando JWT user.service

<img src="/backend/screenshots/screenshot-08.png"/> 

#### Criando e Testando user.service.signup

<img src="/backend/screenshots/screenshot-09.png"/> 

#### Criando pix interface, controllers, service, middleware, rotas

<img src="/backend/screenshots/screenshot-10.png"/> 

#### Correção regras de negócio pix.pay

<img src="/backend/screenshots/screenshot-11.png"/> 