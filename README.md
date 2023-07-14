# Sistema de Cadastro de Receitas

Este é um sistema de cadastro de receitas desenvolvido como parte de um projeto para disciplina "Desenvolvimento Web II".

## Funcionalidades

- Cadastro de receitas culinárias
- Consulta de receitas cadastradas

## Tecnologias Utilizadas

- Node.js
- Express.js
- EJS (Embedded JavaScript) - para renderizar as páginas HTML
- Body-parser - para processar os dados enviados via solicitação POST
- Sequelize - para interação com o banco de dados MySQL

## Pré-requisitos

- Node.js instalado
- Gerenciador de pacotes npm ou yarn
- Banco de dados MySQL configurado e conectado

## Como executar o projeto

1. Clone o repositório para sua máquina local.
2. Navegue até o diretório raiz do projeto.
3. Instale as dependências do projeto executando o comando `npm install`.
4. Configure as variáveis de ambiente no arquivo `.env` com as informações do banco de dados.
```
    DB_NAME = nome_do_seu_banco
    DB_USERNAME = seu_usuario
    DB_PASSWORD = sua_senha
    DB_HOST = localhost
    DB_PORT = 3306
```
6. Inicie o servidor executando o comando `npm start`.
7. Acesse o aplicativo no seu navegador em `http://localhost:3000`.

## Uso

1. Na página inicial (`http://localhost:3000`), você pode cadastrar uma nova receita clicando no link "Cadastrar Receita".
2. Preencha os detalhes da receita no formulário e envie o formulário.
3. Após o envio do formulário, você será redirecionado para a página de resultado de cadastro.
4. Para consultar as receitas cadastradas, clique no link "Buscar Receitas" na página inicial.
5. Preencha o nome da receita na página de busca e envie o formulário.
6. Você será redirecionado para a página de resultado da consulta, onde poderá visualizar as receitas encontradas.

## Dupla Idealizadora
- **Rafael Vasconcelos ([@rafael-vas](https://github.com/rafael-vas))**
- **Wesley Vinícius ([@Wesley-Vini](https://github.com/Wesley-Vini))**
