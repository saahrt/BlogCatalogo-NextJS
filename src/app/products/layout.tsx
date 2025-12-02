import type { ReactNode } from "react";
import { Breadcrumb } from "@components/Breadcrumb";

export const metadata = {
  title: "Catálogo de Produtos - Portal Next 14"
};

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <Breadcrumb />
      <h1 className="page-title">Catálogo de Produtos</h1>
      <p className="page-subtitle">
        Explore produtos fictícios organizados por categorias, usando apenas dados locais.
      </p>
      {children}
    </section>
  );
}


