import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { FEATURED, SECTION_LABEL, type Article } from "@/data/content";

const INTERVAL = 7000;

export function Hero({ slides = FEATURED }: { slides?: Article[] }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const go = useCallback(
    (dir: number) => {
      setIndex((i) => (i + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (total < 2) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => go(1), INTERVAL);
    return () => window.clearInterval(id);
  }, [go, total]);

  if (!total) return null;
  const current = slides[index];

  return (
    <section className="nox-hero-gallery" aria-roledescription="carrusel" aria-label="Destacados">
      {slides.map((slide, i) => (
        <div key={slide.slug} className={`nox-slide${i === index ? " active" : ""}`}>
          <img src={slide.image} alt="" className="nox-slide-media" />
        </div>
      ))}
      <div className="nox-hero-overlay">
        <span className="nox-hero-badge">{SECTION_LABEL[current.section]}</span>
        <h2 className="nox-hero-title">
          <Link to="/articulo/$slug" params={{ slug: current.slug }}>
            {current.title}
          </Link>
        </h2>
        <p className="nox-hero-kicker">{current.excerpt}</p>
      </div>
      {total > 1 ? (
        <>
          <button type="button" className="nox-hero-prev" onClick={() => go(-1)} aria-label="Anterior">
            <ChevronLeft size={18} strokeWidth={1.75} />
          </button>
          <button type="button" className="nox-hero-next" onClick={() => go(1)} aria-label="Siguiente">
            <ChevronRight size={18} strokeWidth={1.75} />
          </button>
          <div className="nox-hero-dots" role="tablist" aria-label="Diapositivas">
            {slides.map((slide, i) => (
              <button
                key={slide.slug}
                type="button"
                aria-label={`Ir a ${slide.title}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}
