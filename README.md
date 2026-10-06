# Entrelinhas

O Entrelinhas é um projeto acadêmico desenvolvido com o objetivo de criar uma aplicação web para uma ONG fictícia voltada ao incentivo à leitura, à doação de livros e ao trabalho voluntário.

## Sobre o projeto

A aplicação apresenta informações sobre a ONG, seus projetos e formas de participação. Também permite o cadastro de voluntários e utiliza armazenamento local para manter os registros realizados pelo usuário.

O projeto foi desenvolvido inicialmente como um site estruturado com HTML5 e posteriormente evoluiu para uma Single Page Application (SPA).

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- ES6 Modules
- LocalStorage
- AOS (Animate On Scroll)
- Vite
- Node.js
- npm
- Git
- GitHub

## Funcionalidades

- Navegação em formato SPA
- Menu responsivo
- Formulário de cadastro
- Validação dinâmica dos campos
- Máscaras para CPF, telefone e CEP
- Armazenamento de dados com LocalStorage
- Área para visualização de voluntários
- Animações com AOS
- Layout responsivo
- Recursos de acessibilidade

## Estrutura do projeto

- `index.html`: estrutura principal da SPA
- `css/`: estilos e responsividade
- `html/`: templates das páginas
- `public/`: arquivos estáticos e recursos visuais
- `js/`: módulos JavaScript da aplicação

## Acessibilidade

O projeto utiliza práticas de acessibilidade como HTML semântico, textos alternativos em imagens, navegação por teclado, foco visível, identificação da página atual e redução de movimentos conforme a preferência do usuário.

As melhorias foram desenvolvidas considerando as diretrizes da WCAG 2.1 nível AA.

## Instalação e execução

Para executar o projeto é necessário ter o Node.js instalado.

Após baixar ou clonar o projeto, instale as dependências:

```bash
npm install
```

Para iniciar o ambiente de desenvolvimento:

```bash
npm run dev
```

Para gerar a versão otimizada de produção:

```bash
npm run build
```

Para visualizar localmente a build de produção:

```bash
npm run preview
```

A versão preparada para produção é gerada na pasta `dist`.

## Versionamento

O projeto utiliza Git e GitHub para controle de versão, com organização baseada no GitFlow.

Principais branches:

- `main`: versão estável
- `develop`: integração das alterações
- `feature/`: desenvolvimento de novas funcionalidades

## Autora

Yasmim Oliveira

Projeto desenvolvido como parte das atividades acadêmicas do curso de Análise e Desenvolvimento de Sistemas.