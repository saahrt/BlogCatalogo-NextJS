import Link from "next/link";
import { products } from "@data/products";
import { posts } from "@data/posts";
import { ProductCard } from "@components/ProductCard";
import { PostCard } from "@components/PostCard";

export default function HomePage() {
  const recentProducts = [...products]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  return (
    <>
      <section className="hero">
        <div>
          <div className="hero-highlight">
            <span className="hero-badge-dot" />
            <span>Portal completo em Next.js 14</span>
          </div>
          <h1 className="page-title">Catálogo de Produtos &amp; Blog de Artigos</h1>
          <p className="hero-text">
            Explore um catálogo fictício de produtos e um blog de conteúdos técnicos, tudo rodando
            em App Router, com rotas estáticas, dinâmicas, layouts independentes e dados locais.
          </p>
          <div className="hero-actions">
            <Link href="/products" className="button">
              Ver catálogo de produtos
            </Link>
            <Link href="/blog" className="button button-secondary">
              Ler artigos do blog
            </Link>
          </div>
        </div>
        <aside className="hero-aside">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            <span>Feito com App Router + TypeScript</span>
          </div>
          <div className="hero-metric">
            <span>Rotas dinâmicas</span>
            <span>/products/[id], /products/category/[slug], /blog/[slug]</span>
          </div>
          <div className="hero-metric">
            <span>Layouts dedicados</span>
            <span>/products/layout.tsx &amp; /blog/layout.tsx</span>
          </div>
          <div className="hero-metric">
            <span>Dados locais</span>
            <span>Carregados de arquivos em /data</span>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Produtos recentes</h2>
            <p>Últimos itens adicionados ao catálogo.</p>
          </div>
          <Link href="/products" className="button button-sm">
            Ver todos os produtos
          </Link>
        </div>
        {recentProducts.length === 0 ? (
          <p className="empty-state">Nenhum produto cadastrado.</p>
        ) : (
          <div className="grid grid-3">
            {recentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Posts recentes</h2>
            <p>Conteúdos frescos sobre desenvolvimento front-end.</p>
          </div>
          <Link href="/blog" className="button button-sm">
            Ver todos os posts
          </Link>
        </div>
        {recentPosts.length === 0 ? (
          <p className="empty-state">Nenhum post cadastrado.</p>
        ) : (
          <div className="grid grid-3">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}


