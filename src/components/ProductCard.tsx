import Link from "next/link";
import type { Product } from "@types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="card">
      <div className="card-image">
        {product.images[0] ? (
          <img src={product.images[0]} alt={product.name} className="image-placeholder" />
        ) : (
          <div className="image-placeholder">Sem imagem</div>
        )}
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-price">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
        </p>
        <p className="card-description">{product.description}</p>
        <Link href={`/products/${product.id}`} className="card-link">
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}


