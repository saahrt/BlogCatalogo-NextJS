import Link from "next/link";

export function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="logo">
          Portal Next 14
        </Link>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/products">Produtos</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">Sobre</Link>
        </nav>
      </div>
    </header>
  );
}


