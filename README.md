#Bundling ambiente: Vite

npm create vite@latest
name: event-platform
framework: react
variant: react-ts
style:
npm i tailwindcss postcss autoprefixer -D
npx tailwindcss init -p --> tailwind.config.js

# CMS = Content Management System

Wordpress traz o painel ADMIN e a parte visual do front-end (temas)
Headless CMS (GraphCMS): Painel de ADMIN (dados fornecidos atraves de uma API REST ou GraphQL)
React consome esta API do CMS
query / mutation

query = buscar dados
mutation = criar, alterar ou deletar dados

requisicoes
npm i @apollo/client
npm i graphql