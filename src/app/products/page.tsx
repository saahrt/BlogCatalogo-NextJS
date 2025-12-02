import Link from "next/link";
import { products } from "@data/products";
import { categories } from "@data/categories";
import { ProductCard } from "@components/ProductCard";

type ProductsPageProps = {
  searchParams?: {
    category?: string;
  };
};

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const categorySlug = searchParams?.category;

  const filteredProducts = categorySlug
    ? products.filter((product) => product.category === categorySlug)
    : products;

  const selectedCategory =
    categorySlug && categories.find((category) => category.slug === categorySlug);

  return (
    <>
      <div className="section-header">
        <div>
          <h2 className="section-title">
            {selectedCategory ? `Categoria: ${selectedCategory.name}` : "Todos os produtos"}
          </h2>
          <p>
            {selectedCategory
              ? "Exibindo apenas os produtos da categoria selecionada."
              : "Veja todos os itens disponíveis no catálogo."}
          </p>
        </div>
        <div className="pill-row">
          <Link href="/products" className="pill">
            Todas as categorias
          </Link>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="pill"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="empty-state">
          Nenhum produto encontrado para os filtros selecionados. Tente outra categoria.
        </p>
      ) : (
        <div className="grid grid-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}


