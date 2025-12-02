export const metadata = {
  title: "Sobre - Portal Next 14"
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="page-title">Sobre este projeto</h1>
      <p className="page-subtitle">
        Um portal demonstrativo construído com Next.js 14, App Router e TypeScript.
      </p>
      <p>
        Este projeto foi criado para demonstrar a organização de rotas estáticas e dinâmicas, uso de
        layouts independentes, componentes reutilizáveis, breadcrumbs automáticos e carregamento de
        dados a partir de arquivos locais.
      </p>
      <p style={{ marginTop: "1rem" }}>
        Toda a experiência roda sem nenhuma chamada a APIs externas, ideal para estudos de
        arquitetura front-end moderna em 2025.
      </p>
    </section>
  );
}


