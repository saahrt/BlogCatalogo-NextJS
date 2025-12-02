'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

type Crumb = {
  href: string;
  label: string;
  isLast: boolean;
};

function formatSegment(segment: string): string {
  if (segment === "") return "Home";
  if (segment === "products") return "Produtos";
  if (segment === "blog") return "Blog";
  if (segment === "about") return "Sobre";
  if (segment === "category") return "Categoria";
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const crumbs: Crumb[] = [
    {
      href: "/",
      label: "Home",
      isLast: segments.length === 0
    },
    ...segments.map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/");
      const isLast = index === segments.length - 1;
      return {
        href,
        label: formatSegment(segment),
        isLast
      };
    })
  ];

  if (pathname === "/") return null;

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      {crumbs.map((crumb, index) => (
        <span key={crumb.href} className="breadcrumb-item">
          {crumb.isLast ? (
            <span aria-current="page">{crumb.label}</span>
          ) : (
            <Link href={crumb.href}>{crumb.label}</Link>
          )}
          {index < crumbs.length - 1 && <span className="breadcrumb-separator">/</span>}
        </span>
      ))}
    </nav>
  );
}


