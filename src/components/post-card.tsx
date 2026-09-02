import { Link } from "@tanstack/react-router";
import { SECTION_LABEL, type Article } from "@/data/content";

export function PostCard({ article }: { article: Article }) {
  return (
    <article className="ast-article-post">
      <div className="post-thumb">
        <Link to="/articulo/$slug" params={{ slug: article.slug }}>
          <img src={article.image} alt="" />
        </Link>
      </div>
      <div className="post-content">
        <p className="entry-meta">
          <Link to="/seccion/$slug" params={{ slug: article.section }}>
            {SECTION_LABEL[article.section]}
          </Link>
          <span> · {article.date}</span>
        </p>
        <h2 className="entry-title">
          <Link to="/articulo/$slug" params={{ slug: article.slug }}>
            {article.title}
          </Link>
        </h2>
        <p className="ast-excerpt">{article.excerpt}</p>
        <p className="read-more">
          <Link to="/articulo/$slug" params={{ slug: article.slug }}>
            Leer
          </Link>
        </p>
      </div>
    </article>
  );
}
