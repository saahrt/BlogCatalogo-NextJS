import type { ReactNode } from "react";
import { Breadcrumb } from "@components/Breadcrumb";

export const metadata = {
  title: "Blog de Artigos - Portal Next 14"
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <Breadcrumb />
      <h1 className="page-title">Blog de Artigos</h1>
      <p className="page-subtitle">
        Conteúdos focados em desenvolvimento front-end moderno, arquitetura e boas práticas.
      </p>
      {children}
    </section>
  );
}


