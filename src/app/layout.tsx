import type { ReactNode } from "react";
import "../styles/globals.css";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { Container } from "@components/Container";

export const metadata = {
  title: "Portal Next 14 - Catálogo e Blog",
  description: "Portal com catálogo de produtos e blog de artigos, usando Next.js 14 e dados locais."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}


