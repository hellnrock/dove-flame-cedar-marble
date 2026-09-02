import { createFileRoute, notFound } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { PageShell } from "@/components/page-shell";
import { PostCard } from "@/components/post-card";
import { Sidebar } from "@/components/sidebar";
import {
  articlesBySection,
  SECTION_LABEL,
  type Section,
} from "@/data/content";

const SECTIONS: Section[] = ["noticias", "musica", "conciertos", "cultura", "deporte"];

export const Route = createFileRoute("/seccion/$slug")({
  component: SectionPage,
  loader: ({ params }) => {
    if (!SECTIONS.includes(params.slug as Section)) throw notFound();
    const section = params.slug as Section;
    const articles = articlesBySection(section);
    return { section, articles };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${SECTION_LABEL[loaderData.section]} — NOX`
          : "NOX",
      },
    ],
  }),
});

function SectionPage() {
  const { section, articles } = Route.useLoaderData();
  const featured = articles.slice(0, 3);

  return (
    <PageShell>
      <div className="ast-row">
        <div id="primary" className="content-area">
          <main id="main">
            {featured.length ? <Hero slides={featured} /> : null}
            {articles.length ? (
              articles.map((article) => <PostCard key={article.slug} article={article} />)
            ) : (
              <article className="ast-article-single">
                <header className="entry-header">
                  <h1 className="entry-title">{SECTION_LABEL[section]}</h1>
                  <p className="entry-meta">Sin piezas en esta sección todavía.</p>
                </header>
              </article>
            )}
          </main>
        </div>
        <Sidebar />
      </div>
    </PageShell>
  );
}
