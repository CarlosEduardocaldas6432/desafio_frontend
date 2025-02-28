# Desafio Front-End - BeTalent

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instruções para Rodar a Aplicação](#instruções-para-rodar-a-aplicação)
  - [1. Clonar o Repositório](#1-clonar-o-repositório)
  - [2. Instalar as Dependências](#2-instalar-as-dependências)
  - [3. Rodar a API Simulada](#3-rodar-a-api-simulada)
  - [4. Rodar o Frontend](#4-rodar-o-frontend)
- [Funcionalidades Implementadas](#funcionalidades-implementadas)
- [Considerações Finais](#considerações-finais)

## Sobre o Projeto

Este projeto foi desenvolvido como parte do Teste Técnico para Front-End da BeTalent. Ele consiste na criação de uma tabela interativa que exibe dados de uma API simulada. A tabela permite a visualização de informações dos funcionários, incluindo:

- Imagem (thumbnail do usuário);
- Nome;
- Cargo;
- Data de admissão;
- Telefone.

Além disso, a tabela conta com um campo de pesquisa, permitindo filtrar os dados por nome, cargo ou telefone. O projeto foi desenvolvido utilizando React.js com TypeScript e Vite, garantindo uma aplicação performática e de fácil manutenção.

## Tecnologias Utilizadas

- React.js
- TypeScript
- Vite
- json-server (para simulação da API)


## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) ou npm

## Instruções para Rodar a Aplicação

Siga os passos abaixo para executar o projeto corretamente:

### 1. Clonar o Repositório

```sh
git clone https://github.com/CarlosEduardocaldas6432/desafio_frontend.git
cd desafio-front-end
```

### 2. Instalar as Dependências

Com npm:

```sh
npm install
```

Ou com Yarn:

```sh
yarn install
```

### 3. Rodar a API Simulada

O backend utiliza `json-server` para fornecer os dados. Execute o seguinte comando:

```sh
npm run server
```

A API estará disponível na porta `http://localhost:3000`.

Se necessário, tente:

```sh
npx json-server --watch db.json --port 3000
```

Ou:

```sh
yarn json-server --watch db.json --port 3000
```

#### Endpoint da API:

- `http://localhost:3000/employees`

Exemplo de array de objetos retornado:

```json
[
  {
    "id": "1",
    "name": "João",
    "job": "Back-end",
    "admission_date": "2019-12-02T00:00:00.000Z",
    "phone": "5551234567890"
  },
  {
    "id": "2",
    "name": "Maria",
    "job": "Front-end",
    "admission_date": "2020-05-15T00:00:00.000Z",
    "phone": "5559876543210"
  }
]
```

### 4. Rodar o Frontend

Para iniciar o projeto frontend, utilize o comando:

```sh
npm run dev
```

O projeto estará disponível no navegador em `http://localhost:5173` (porta padrão do Vite).

## Funcionalidades Implementadas

- Exibição de uma tabela responsiva com dados da API simulada.
- Filtro de pesquisa por nome, cargo e telefone.
- Formatação de datas e telefones no frontend.
- Interface moderna e intuitiva.

## Considerações Finais

Caso encontre problemas ao rodar o projeto, verifique se todas as dependências estão instaladas corretamente e se o json-server está rodando. Se necessário, consulte a documentação oficial das ferramentas utilizadas.

Bom desenvolvimento!

