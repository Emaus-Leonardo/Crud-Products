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
- **Zod**: Biblioteca para validação de esquemas de dados.
- **React Hook Form**: Biblioteca para gerenciar formulários em React.

## Autenticação e Autorização

A aplicação realiza autenticação através de uma API de login, que retorna um token de acesso. Este token é utilizado nas requisições subsequentes para garantir que apenas usuários autenticados possam acessar e manipular os dados dos produtos.

## Estrutura do Projeto

   ```bash
CRUD-PROJECT/
├── jest/
├── node_modules/
├── public/
├── src/
│   ├── Api/
│   │   ├── test/
│   │   └── index.js
│   ├── components/
│   │   ├── FormProducts/
│   │   │   └── index.jsx
│   │   └── Header/
│   │       ├── index.jsx
│   │       └── mobileMenu.jsx
│   ├── Pages/
│   │   ├── About/
│   │   ├── Home/
│   │   └── Products/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── babel.config.json
├── index.html
├── jest.config.cjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── prettier.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

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

# Testes

Este projeto inclui uma série de testes para garantir que as principais funcionalidades estejam funcionando corretamente. A seguir, um resumo dos testes implementados.

## Login

**Objetivo:**  
Verificar se a funcionalidade de login funciona corretamente.

## ListProducts

**Objetivo:**  
Verificar se a lista de produtos é exibida corretamente e se a busca/filtragem funciona.

## CreateAndEdit 

**Objetivo:**  
Verificar se o formulário de criação e edição de produtos funciona corretamente.

## DeleteProducts

**Objetivo:**  
Verificar se a funcionalidade de exclusão de produtos funciona corretamente.

## Modal

**Objetivo:**  
Verificar se o modal é exibido e fechado corretamente.

## Navlink

**Objetivo:**  
Verificar se os links de navegação funcionam corretamente.

## Demo do Layout

![Simplify Demo](https://github.com/Emaus-Leonardo/Crud-Products/assets/126693677/644f1b9c-7415-4eb7-90c3-36c9251905ab)


## Conclusão
