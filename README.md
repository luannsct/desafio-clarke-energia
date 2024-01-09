
## Desafio Clarke Energia [![Implantado com Vercel](https://vercel.com/button)](https://desafio-clarke-energia.vercel.app/)

Olá, seja muito bem-vindo! Esse é o front do projeto foi feito em React. para acessar o Deploy [Clique aqui](https://desafio-clarke-energia.vercel.app/). Esse projeto foi feito para responder ao desafio feito pela [Clarke Energia](https://clarke.com.br/) para a vaga de DEV FullStack.

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:luannsct/desafio-clarke-energia.git
```

Entre no diretório do projeto

```bash
  cd desafio-clarke-energia
```

Instale as dependências

```bash
  npm install
  npm install -D nodemon
```

Inicie o servidor

```bash
  npm run start
```

Inicie o projeto em.\
[http://localhost:3000](http://localhost:3000) para ver no navegador.


## Solicitação Clarke

SPA de escolha de fornecedor. Os usuários poderão informar o seu consumo de energia e escolher o melhor fornecedor de acordo com as suas necessidades.

## Dos Requisitos de Produto:

* O usuário deverá informar a sua consumo mensal de energia, exemplo: 30000 kWh (um número fictício > 0)

* Ao informar o consumo, o sistema deverá mostrar quais fornecedores poderiam atender a necessidade do cliente

* Cada fornecedor deve ter as seguintes informações: nome, logo, estado de origem, custo por kWh, limite mínimo de kWh, número total de clientes e avaliação média dos clientes

* Um fornecedor só pode atender um cliente caso o consumo mensal de energia deste seja maior do que o lmite mínimo de kWh do fornecedor

## Deploy

o Deploy do FrontEnd está rodando na [Vercel](https://desafio-clarke-energia.vercel.app/)
e o Deploy do BackEnd está rodando na [Cyclic](https://api-deploy.cyclic.app/)

## Stack utilizada

**Front-end:** ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
---
**Back-end:** ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
---
**SQL**
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## Features

- Enviar e-mail ao finalizar a cotação informando todos os detalhes da solicitação;
- Informar que já há uma solicitação feita ao clicar no botão fazer cotação perguntando se ele deseja ver o Status do pedido (se foi aceito ou não).

 

