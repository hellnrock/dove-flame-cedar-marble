import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Sidebar } from "@/components/sidebar";
import { articleBySlug, SECTION_LABEL } from "@/data/content";

export const Route = createFileRoute("/articulo/$slug")({
  component: ArticlePage,
  loader: ({ params }) => {
    const article = articleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData ? `${loaderData.article.title} — NOX` : "NOX",
      },
    ],
  }),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();

  return (
    <PageShell>
      <div className="ast-row">
        <div id="primary" className="content-area">
          <main id="main">
            <article className="ast-article-single">
              <div className="post-thumb">
                <img src={article.image} alt="" />
              </div>
              <header className="entry-header">
                <p className="entry-meta">
                  <Link to="/seccion/$slug" params={{ slug: article.section }}>
                    {SECTION_LABEL[article.section]}
                  </Link>
                  <span> · {article.kicker} · {article.date}</span>
                </p>
                <h1 className="entry-title">{article.title}</h1>
              </header>
              <div className="entry-content">
                {article.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
                <p>
                  <Link to="/">← Archivo</Link>
                </p>
              </div>
            </article>
          </main>
        </div>
        <Sidebar />
      </div>
    </PageShell>
  );
}
