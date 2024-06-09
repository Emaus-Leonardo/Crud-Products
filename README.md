# Projeto de CRUD de Produtos

Este projeto é uma aplicação de CRUD (Create, Read, Update, Delete) de produtos desenvolvida utilizando Vite e React.js. Ele implementa as operações básicas de gerenciamento de produtos, como criar, ler, atualizar e deletar produtos, com uma interface de usuário intuitiva e responsiva.

## Funcionalidades

- **Listagem de Produtos**: Exibe uma lista de produtos cadastrados, com informações detalhadas sobre cada produto.
- **Cadastro de Produtos**: Permite adicionar novos produtos com nome, descrição, preço, status e quantidade em estoque.
- **Edição de Produtos**: Possibilita a edição das informações de produtos já cadastrados.
- **Exclusão de Produtos**: Permite deletar produtos, removendo-os da lista.

## Tecnologias Utilizadas

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de construção rápida de projetos front-end.
- **Toast**: Biblioteca para exibição de notificações de feedback ao usuário.
- **Zod**: Biblioteca para validação de esquemas de dados.
- **React Hook Form**: Biblioteca para gerenciar formulários em React.
- **Material-UI (MUI)**: Biblioteca de componentes React para design de interface.

## Autenticação e Autorização

A aplicação realiza autenticação através de uma API de login, que retorna um token de acesso. Este token é utilizado nas requisições subsequentes para garantir que apenas usuários autenticados possam acessar e manipular os dados dos produtos.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em seu sistema.

## Instalação

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/Emaus-Leonardo/Crud-Products

2. Instale as depêndencias

   ```bash
   npm install

## Uso

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

   ```bash
   npm run dev
   ```

## Para Rodar os testes

   ```bash
   npm run test
   ```
# ou 

   ```bash
   yarn test
   ```
Além disso, você pode usar a extensão "Jest Runner" do VS Code para facilitar a execução e a depuração dos testes diretamente no editor. 

## Conclusão
