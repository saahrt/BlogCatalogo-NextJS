import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@data/products";
import { categories } from "@data/categories";
import { ProductCard } from "@components/ProductCard";
import { Breadcrumb } from "@components/Breadcrumb";

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;

  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    // Categoria inexistente -> erro customizado via notFound (usa not-found.tsx global)
    notFound();
  }

  const categoryProducts = products.filter((product) => product.category === slug);

  return (
    <>
      <Breadcrumb />
      <div className="section-header">
        <div>
          <h1 className="section-title">Categoria: {category.name}</h1>
          <p>
            Exibindo todos os produtos cadastrados na categoria <strong>{category.name}</strong>.
          </p>
        </div>
        <Link href="/products" className="button button-sm">
          Ver todas as categorias
        </Link>
      </div>

      {categoryProducts.length === 0 ? (
        <p className="empty-state">
          Ainda não há produtos cadastrados nesta categoria. Volte mais tarde.
        </p>
      ) : (
        <div className="grid grid-3">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}


