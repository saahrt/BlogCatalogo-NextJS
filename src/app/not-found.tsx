import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-title">404</div>
      <h1 className="not-found-subtitle">Página não encontrada</h1>
      <p className="not-found-text">
        O conteúdo que você procura não existe mais, foi movido ou talvez nunca tenha existido.
      </p>
      <div className="not-found-actions">
        <Link href="/" className="button">
          Voltar para a Home
        </Link>
        <Link href="/products" className="button button-secondary">
          Ir para Produtos
        </Link>
      </div>
    </div>
  );
}


