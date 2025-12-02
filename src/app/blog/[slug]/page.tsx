import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@data/posts";
import { Breadcrumb } from "@components/Breadcrumb";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Breadcrumb />
      <article>
        <div className="post-header">
          <h1 className="section-title">{post.title}</h1>
          <p className="post-meta">
            Publicado em{" "}
            {new Date(post.createdAt).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric"
            })}
          </p>
        </div>
        <div className="post-content">{post.content}</div>
        <div className="detail-back" style={{ marginTop: "1.5rem" }}>
          <Link href="/blog" className="button button-sm">
            Voltar para o blog
          </Link>
        </div>
      </article>
    </>
  );
}


