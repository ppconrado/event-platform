# WEB App - Plataforma de Eventos e Cursos 

![ppconrado github img](https://raw.githubusercontent.com/ppconrado/bds-assets/master/img/NLW-EVENTPLATFORM.png)
![ppconrado github img](https://raw.githubusercontent.com/ppconrado/bds-assets/master/img/NLW-EVENTPLATFORM-VIDEOS.png)

## Bundling ambiente: Vite

### npm create vite@latest

### name: event-platform

### framework: react

### variant: react-ts

## Style:

### npm i tailwindcss postcss autoprefixer -D

### npx tailwindcss init -p --> tailwind.config.js

## CMS = Content Management System

### Wordpress traz o painel ADMIN e a parte visual do front-end (temas)

### Headless CMS (GraphCMS): Painel de ADMIN (dados fornecidos atraves de uma API REST ou GraphQL)

### React consome esta API do CMS

### query / mutation

### query = buscar dados

### mutation = criar, alterar ou deletar dados

## Requisicoes

### npm i @apollo/client

### npm i graphql

## Convert image SVG para (.jsx)

### https://svg2jsx.com/

## Icons

### npm i phosphor-react

## Formatacao de Datas

### npm i date-fns

## Videos

### https://vimejs.com/

### npm i @vime/core @vime/react --force

## Roteamento

### npm i react-router-dom

### React Hook Form - not used

## Style Logic

### npm i classnames

## Integracao frontend e GraphQL API

GraphQL Code Generator is a plugin-based tool that helps you get the best out of your GraphQL stack.

From back-end to front-end, GraphQL Code Generator automates the generation of:

Typed Queries, Mutations and, Subscriptions for React, Vue, Angular, Next.js, Svelte, whether you are using Apollo Client, URQL or, React Query.
Typed GraphQL resolvers, for any Node.js (GraphQL Yoga, GraphQL Modules, TypeGraphQL or Apollo) or Java GraphQL server.
Fully-typed Node.js SDKs, Apollo Android support, and more!

Manually maintaining the GraphQL operation types or the complete absence of types can lead to many issues:

outdated typing (regarding the current Schema)

typos

partial typing of data (not all Schema's fields has a corresponding type)

The strength of your front-end application types is based on your data types. Any mistake on your manually maintained data types ripples in many of your components.

For this reason, automating and generating the typing of your GraphQL operations will both improve the developer experience and stability of your stack.

After installing and configuring GraphQL Code Generator, our front-end code will be fully-typed and up-to-date.

### https://www.graphql-code-generator.com/

### npm install @graphql-codegen/typescript-react-appolo -D

### npm install @graphql-codegen/typescript @graphql-codegen/typescript-operations -D

### npm install npm install @graphql-codegen/cli -D

### npm run codegen --> src/graphql/generate.ts
