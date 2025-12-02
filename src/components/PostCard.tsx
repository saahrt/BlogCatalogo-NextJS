import Link from "next/link";
import type { Post } from "@types/post";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="card">
      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-meta">
          {new Date(post.createdAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
          })}
        </p>
        <p className="card-description">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="card-link">
          Ler artigo
        </Link>
      </div>
    </article>
  );
}


