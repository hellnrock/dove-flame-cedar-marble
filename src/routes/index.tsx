import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { PageShell } from "@/components/page-shell";
import { PostCard } from "@/components/post-card";
import { Sidebar } from "@/components/sidebar";
import { ARTICLES } from "@/data/content";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <PageShell>
      <div className="ast-row">
        <div id="primary" className="content-area">
          <main id="main">
            <Hero />
            {ARTICLES.map((article) => (
              <PostCard key={article.slug} article={article} />
            ))}
          </main>
        </div>
        <Sidebar />
      </div>
    </PageShell>
  );
}
