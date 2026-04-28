# Teste Técnico Front-End Econverse

Projeto desenvolvido para o teste técnico de Front-End da Econverse.

A página foi construída em **React + TypeScript**, seguindo o layout do Figma, utilizando **SCSS** para estilização e consumindo os produtos através de uma API JSON.

---

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Sass/SCSS
- Swiper
- Fetch API

---

## Funcionalidades

- Layout responsivo baseado no Figma.
- Vitrine de produtos consumida via API.
- Modal com as informações do produto clicado.
- Componentes reutilizáveis.
- Estrutura organizada com `components`, `services`, `types` e `utils`.

---

## Configuração da API

A API utilizada no teste é:

```txt
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

Como a API bloqueia chamadas diretas do `localhost` por CORS, foi configurado um proxy no Vite para ambiente de desenvolvimento.

Crie um arquivo `.env` na raiz do projeto com:

```env
VITE_PRODUCTS_API_URL=/api/products
```

---

## Como rodar o projeto

Instale as dependências:

```bash
npm install
```

Rode o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

---

## Como compilar o projeto

Para gerar o build de produção:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

---

## Como verificar o projeto

Para verificar possíveis problemas de lint:

```bash
npm run lint
```

Para validar se o projeto compila corretamente:

```bash
npm run build
```

---

## Estrutura principal

```txt
src/
  components/
  services/
  types/
  utils/
  styles/
  assets/
```

- `components`: componentes da interface.
- `services`: consumo da API.
- `types`: tipagens TypeScript.
- `utils`: funções auxiliares, como formatação de moeda.
- `styles`: estilos globais e configuração de container.
- `assets`: imagens utilizadas no projeto.

---

## Observação

O arquivo `.env` não é versionado no Git.  
Para rodar o projeto corretamente, é necessário criar o `.env` localmente com a variável indicada acima.