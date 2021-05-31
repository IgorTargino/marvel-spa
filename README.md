<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/IgorTargino/podcastr?color=%2304D361&style=flat">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/IgorTargino/podcastr?style=flat">
  
  <a href="https://github.com/IgorTargino/podcastr/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/IgorTargino/podcastr?style=flat">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=flat">
  
</p>

## 🧐 Sobre o projeto

Uma aplicação que consome a api da Marvel e retorna uma lisa de personages ou séries, podendo também pesquisar pelo nome do personagem ou da série<br>

<a align="center" target="blank" href="https://marvel-spa.vercel.app/">
    <img alt="Site podcastr" src="https://img.shields.io/static/v1?label=site&message=podcastr&color=4953B8&style=flat&logo=vercel">
</a>

## 🎨 Layout

#### Figma: https://www.figma.com/file/mm5upc0jW8gBTZWNL7GRrc/marvel-spa?node-id=0%3A1
### Tela Desktop

<div align="center">
  <img width="100%" src="./.github/tela-desktop.png"/>
</div>

### Tela Mobile

<div align="center">
  <img width="25%" height="25%" src="./.github/tela-mobile.png"/>
</div>

## ⚙️ Funcionalidades

- [x] Listagem de personagen;
- [x] Listagem de séries;
- [x] Busca por nome/title;
- [x] Responsividade
- [x] Paginação
  
## Como executar o projeto
### Pré-requisitos
- git 
- Node.js
- NPM ou Yarn
### Variáveis de Ambiente
Além das ferramentas anteriores é necessário criar duas váriaveis de ambiente no arquivo .env.local localizado na raiz do projeto.

NEXT_PUBLIC_API_KEY= PUBLIC_KEY <br>
NEXT_PRIVATE_API_KEY= PRIVATE_KEY

Também deverá gerar um hash no site md5hashgenerator e adicionalo á váriavel hash presente no arquivo /src/services/api.

hash = (timestemp + PRIVATE_KEY + PUBLIC_KEY)

obs: timestemp = ts = 1622102400599 ou você pode gerar o seu próprio ts com Date.now()

### Instalação
```
# Abra o terminal e copie este repositório com o comando
$ git clone https://github.com/IgorTargino/marvel-spa.git

# Acesse a pasta do projeto no prompt de comando 
$ cd marvel-spa

# Instale as dependências
yarn install
ou
$ npm install

# Execute a aplicação
$ yarn dev
ou
$ npm run dev

# Acesse http://localhost:3000 no seu navagador.

```
## 🚀 Tecnologias 
Tecnologias utilizadas para desenvolver o projeto:
- next.js
- react.js
  - SPA
- typescript
- context
- axios
- sass
- lottie


## 🦸‍♂️ **Autor**

<p>
 <sub><strong>🌟 Igor Targino Marinho🌟</strong></sub>
</p>

[![Linkedin Badge](https://img.shields.io/badge/-IgorTargino-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/igor-targino/)](https://www.linkedin.com/in/igor-targino/)
[![Gmail Badge](https://img.shields.io/badge/-igortargino01@gmail.com-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:igortargino01@gmail.com)](mailto:igortargino01@gmail.com)
