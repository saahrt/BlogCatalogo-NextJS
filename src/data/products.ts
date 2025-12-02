import type { Product } from "@types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Smartphone X Pro",
    description: "Smartphone topo de linha com câmera avançada e bateria de longa duração.",
    price: 3999.9,
    category: "eletronicos",
    images: ["/images/products/smartphone-1.svg"],
    createdAt: "2025-11-15"
  },
  {
    id: 2,
    name: "Notebook Ultra",
    description: "Notebook leve e potente para estudo, trabalho e entretenimento.",
    price: 6999.9,
    category: "eletronicos",
    images: ["/images/products/notebook-1.svg"],
    createdAt: "2025-11-20"
  },
  {
    id: 3,
    name: "Coleção de Livros de Programação",
    description: "Kit com 5 livros essenciais para desenvolvedores modernos.",
    price: 499.9,
    category: "livros",
    images: ["/images/products/books-1.svg"],
    createdAt: "2025-10-05"
  },
  {
    id: 4,
    name: "Jaqueta Minimalista",
    description: "Jaqueta unissex com design moderno e tecido resistente.",
    price: 299.9,
    category: "moda",
    images: ["/images/products/jacket-1.svg"],
    createdAt: "2025-09-28"
  },
  {
    id: 5,
    name: "Kit Decoração Sala",
    description: "Conjunto de quadros e objetos decorativos para sala de estar.",
    price: 899.9,
    category: "casa-e-decoracao",
    images: ["/images/products/decor-1.svg"],
    createdAt: "2025-11-30"
  }
];


