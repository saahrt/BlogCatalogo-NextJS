export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} Portal Next 14. Todos os direitos reservados.</p>
        <p className="footer-small">Projeto demonstrativo com Next.js 14, App Router e dados locais.</p>
      </div>
    </footer>
  );
}


