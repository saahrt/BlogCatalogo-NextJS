import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@data/products";
import { categories } from "@data/categories";
import { Breadcrumb } from "@components/Breadcrumb";

type ProductDetailPageProps = {
  params: {
    id: string;
  };
};

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const category = categories.find((cat) => cat.slug === product.category);

  return (
    <>
      <Breadcrumb />
      <div className="detail-layout">
        <div className="detail-gallery">
          <div className="detail-gallery-main">
            {product.images[0] ? (
              <img src={product.images[0]} alt={product.name} />
            ) : (
              "Sem imagem disponível"
            )}
          </div>
          {product.images.length > 1 && (
            <div className="detail-gallery-thumbs">
              {product.images.map((image, index) => (
                <div key={image} className="detail-thumb">
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
        <aside className="detail-panel">
          <h1 className="section-title">{product.name}</h1>
          <div className="detail-price-row">
            <span className="detail-price">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            </span>
            <span className="detail-meta">
              Cadastrado em{" "}
              {new Date(product.createdAt).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
              })}
            </span>
          </div>

          <div className="pill-row" style={{ marginTop: "0.9rem" }}>
            {category && (
              <Link href={`/products/category/${category.slug}`} className="pill">
                {category.name}
              </Link>
            )}
          </div>

          <p className="detail-description">{product.description}</p>

          <div className="detail-back">
            <Link href="/products" className="button button-sm">
              Voltar para a lista de produtos
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}


