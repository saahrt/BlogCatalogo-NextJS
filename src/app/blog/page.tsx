import { posts } from "@data/posts";
import { PostCard } from "@components/PostCard";

export default function BlogPage() {
  const orderedPosts = [...posts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <>
      <div className="section-header">
        <div>
          <h2 className="section-title">Todos os posts</h2>
          <p>Artigos organizados por data de publicação (mais recentes primeiro).</p>
        </div>
        <span className="badge">{orderedPosts.length} posts publicados</span>
      </div>

      {orderedPosts.length === 0 ? (
        <p className="empty-state">Nenhum post cadastrado até o momento.</p>
      ) : (
        <div className="grid grid-3">
          {orderedPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  );
}


