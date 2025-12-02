## Portal Next 14 – Catálogo de Produtos e Blog

Este projeto é um portal didático construído com **Next.js 14 (App Router)** e **TypeScript**, mostrando na prática:

- Rotas **estáticas** e **dinâmicas**
- **Layouts independentes** para áreas diferentes
- **Componentes reutilizáveis**
- **Breadcrumb automático** via `usePathname`
- Carregamento de **dados locais** (sem nenhuma API externa)

A ideia é simular um pequeno portal com duas áreas principais:

- 🛒 **Catálogo de Produtos**
- 📰 **Blog de Artigos**

---

## Tecnologias utilizadas

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- Estilização via **CSS global** (`globals.css`) com uma UI moderna e responsiva
- Dados mockados em arquivos `.ts` dentro de `src/data`

---

## Estrutura principal de pastas

src/
 ├─ app/
 │   ├─ layout.tsx           # Layout raiz do app
 │   ├─ page.tsx             # Home: produtos + posts recentes
 │   ├─ about/page.tsx       # Página estática "Sobre"
 │   ├─ not-found.tsx        # Página 404 personalizada
 │   ├─ products/
 │   │    ├─ layout.tsx      # Layout exclusivo do catálogo
 │   │    ├─ page.tsx        # Lista de produtos + filtro por query ?category=
 │   │    ├─ [id]/page.tsx   # Página de detalhe de produto
 │   │    └─ category/[slug]/page.tsx  # Produtos por categoria (rota dinâmica)
 │   ├─ blog/
 │   │    ├─ layout.tsx      # Layout exclusivo do blog
 │   │    ├─ page.tsx        # Lista de posts, ordenados por data
 │   │    └─ [slug]/page.tsx # Página de post individual
 │
 ├─ components/
 │   ├─ Navbar.tsx           # Menu principal (Home, Produtos, Blog, Sobre)
 │   ├─ Footer.tsx           # Rodapé simples e responsivo
 │   ├─ ProductCard.tsx      # Card tipado para produtos
 │   ├─ PostCard.tsx         # Card para posts do blog
 │   ├─ Breadcrumb.tsx       # Breadcrumb automático via usePathname
 │   └─ Container.tsx        # Container padrão de layout
 │
 ├─ data/
 │   ├─ products.ts          # Produtos mockados (com imagens, preço, categoria, etc.)
 │   ├─ categories.ts        # Categorias disponíveis
 │   └─ posts.ts             # Posts do blog (slug, título, conteúdo, data)
 │
 ├─ types/
 │   ├─ product.ts           # Tipo Product
 │   └─ post.ts              # Tipo Post
 │
 └─ styles/
     └─ globals.css          # Reset, tipografia, grid, cards e layout geral
     
     As imagens dos produtos ficam em:

public/
 └─ images/
     └─ products/
         ├─ smartphone-1.svg
         ├─ notebook-1.svg
         ├─ books-1.svg
         ├─ jacket-1.svg
         └─ decor-1.svg---

## Funcionalidades por área

### 🏠 Home (`/`)

- Seção **“Produtos Recentes”** (3 últimos produtos por data)
- Seção **“Posts Recentes”** (3 últimos posts por data)
- Botões de atalho para **/products** e **/blog**
- Pequeno “hero” explicando que é um projeto exemplo com App Router + TS

### 🛒 Produtos

- **`/products`**  
  - Lista todos os produtos
  - Filtra por query string: `?category=slug`
  - Usa componente reutilizável `ProductCard`
  - Mostra pills com as categorias para facilitar a navegação

- **`/products/[id]`**  
  - Página de detalhe do produto
  - Mostra imagem principal + miniaturas (se houver mais imagens)
  - Exibe nome, preço, data de criação, descrição e categoria
  - **Breadcrumb automático**
  - Botão “Voltar para a lista de produtos”

- **`/products/category/[slug]`**  
  - Lista apenas produtos de uma categoria específica
  - Se a categoria não existir, dispara `notFound()` → cai na página 404 personalizada
  - Traz botão para voltar para a listagem geral de produtos

### 📰 Blog

- **`/blog`**  
  - Lista todos os posts
  - Ordenação por **data decrescente** (mais novos primeiro)
  - Usa componente `PostCard`
  - Mostra um badge com o total de posts

- **`/blog/[slug]`**  
  - Página de um post específico
  - Exibe título, data formatada e conteúdo completo
  - **Breadcrumb automático**
  - Botão para voltar para o `/blog`

---

## Layouts e navegação

- **Layout global (`src/app/layout.tsx`)**  
  - Inclui `Navbar`, `Footer` e o `Container` padrão em volta das páginas.

- **Layout de produtos (`src/app/products/layout.tsx`)**  
  - Título grande “Catálogo de Produtos”
  - Subtítulo da seção
  - Inclui `Breadcrumb` no topo

- **Layout do blog (`src/app/blog/layout.tsx`)**  
  - Título grande “Blog de Artigos”
  - Subtítulo descritivo
  - Inclui `Breadcrumb` no topo

- **Breadcrumb (`src/components/Breadcrumb.tsx`)**  
  - Implementado como **Client Component**
  - Usa `usePathname()` para quebrar a URL em segmentos e montar os links
  - Converte slugs em rótulos legíveis (ex.: `products` → “Produtos”, `blog` → “Blog”)

---

## Como rodar o projeto

1. Instale as dependências:

  
   npm install
   2. Rode o servidor de desenvolvimento:

  
   npm run dev
   3. Abra no navegador:

  
   http://localhost:3000
   ---

## Observações

- Não há **nenhuma chamada a API externa**: todos os dados vêm dos arquivos em `src/data`.
- O projeto é pensado para estudos de:
  - App Router no Next.js 14
  - Rotas dinâmicas (`[id]`, `[slug]`)
  - Layouts aninhados
  - Componentização e tipagem com TypeScript
  - Organização clara de pastas para catálogo + blog.

Sinta-se à vontade para adaptar os dados, trocar imagens e estender as funcionalidades a partir desta base. 🙂
