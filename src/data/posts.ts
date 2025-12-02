import type { Post } from "@types/post";

export const posts: Post[] = [
  {
    slug: "boas-praticas-em-react",
    title: "Boas práticas em React para projetos escaláveis",
    excerpt: "Organização de pastas, componentes reutilizáveis e padronização são a base de um projeto React saudável.",
    content:
      "Organizar um projeto React ou Next.js vai muito além de apenas criar componentes. É importante separar bem responsabilidades, criar componentes reutilizáveis e manter padrões de nomenclatura. Neste artigo, vamos explorar algumas boas práticas para deixar seus projetos mais escaláveis e fáceis de manter.\n\nComece pensando na estrutura de pastas, depois em componentes base, hooks reutilizáveis e camadas de dados bem definidas.",
    createdAt: "2025-11-28"
  },
  {
    slug: "porque-usar-nextjs-14",
    title: "Por que usar Next.js 14 em novos projetos",
    excerpt: "O Next.js 14 trouxe melhorias importantes na App Router, renderização e experiência de desenvolvimento.",
    content:
      "O Next.js 14 continua evoluindo o modelo de App Router, facilitando a criação de aplicações híbridas, com renderização estática e dinâmica. Além disso, a experiência de desenvolvimento ficou mais fluida com melhorias no Hot Reload e suporte aprimorado a TypeScript.\n\nSe você está iniciando um novo projeto em 2025, vale muito a pena considerar o Next.js como base.",
    createdAt: "2025-11-22"
  },
  {
    slug: "como-organizar-seu-design-system",
    title: "Como organizar seu design system em projetos front-end",
    excerpt: "Um bom design system acelera o desenvolvimento e mantém a consistência visual da aplicação.",
    content:
      "Criar um design system não significa apenas ter um arquivo no Figma. No código, é fundamental ter componentes base bem definidos, tokens de design e uma estratégia clara de estilização.\n\nComece pequeno, com botões, tipografia, cores e espaçamentos. Depois, evolua para componentes mais complexos, sempre pensando em reutilização.",
    createdAt: "2025-10-10"
  }
];


