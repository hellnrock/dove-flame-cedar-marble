import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Section } from "@/data/content";
import { SITE } from "@/data/content";

const EXPLORE: { slug: Section; label: string }[] = [
  { slug: "noticias", label: "Noticias" },
  { slug: "musica", label: "Música" },
  { slug: "conciertos", label: "Conciertos" },
  { slug: "cultura", label: "Cultura" },
  { slug: "deporte", label: "Deporte" },
];

const METAL = ["Noticias", "Entrevistas", "Crónicas", "Fotografía", "Conciertos"];

export function SiteFooter() {
  return (
    <footer className="nox-footer site-footer">
      <section className="nox-footer-cta">
        <div className="nox-footer-cta-inner">
          <span className="nox-footer-kicker">
            Bandas · Artistas · Promotores · Sellos
          </span>
          <h2>¿Tienes un lanzamiento, una fecha o una historia que contar?</h2>
          <p>
            Envíanos tu material de prensa, próximos lanzamientos, fechas y novedades.
            Nuestro equipo editorial revisa cada propuesta y selecciona el contenido
            que tiene lugar en NOX.
          </p>
          <div className="nox-footer-actions">
            <a href="mailto:hellonox@infinitummail.com" className="nox-footer-button">
              Enviar material
            </a>
            <a
              href="https://hellnrock.com/services/press-managment-services/"
              className="nox-footer-service"
              target="_blank"
              rel="noopener noreferrer"
            >
              Servicios de promoción
              <span aria-hidden="true">
                <ArrowRight size={16} strokeWidth={1.75} />
              </span>
            </a>
          </div>
        </div>
      </section>

      <div className="nox-footer-main">
        <div className="nox-footer-grid">
          <div className="nox-footer-brand">
            <Link to="/" className="nox-footer-logo" aria-label={SITE.name}>
              {SITE.name}
            </Link>
            <p className="nox-footer-description">
              Un portal editorial nacido desde la escena. Noticias, música, conciertos,
              espectáculos, cultura y deporte, con una mirada propia.
            </p>
          </div>

          <nav className="nox-footer-column" aria-label="Secciones">
            <h3>Explora</h3>
            <ul>
              {EXPLORE.map((item) => (
                <li key={item.slug}>
                  <Link to="/seccion/$slug" params={{ slug: item.slug }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="nox-footer-column" aria-label="NOX Metal">
            <h3>NOX Metal</h3>
            <ul>
              {METAL.map((label) => (
                <li key={label}>
                  <a href="#nox-metal">{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="nox-footer-column" aria-label="Información">
            <h3>Información</h3>
            <ul>
              <li>
                <a href="https://hellnrock.com" target="_blank" rel="noopener noreferrer">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="mailto:hellonox@infinitummail.com">Contacto</a>
              </li>
              <li>
                <a href="https://hellnrock.com">Privacidad</a>
              </li>
              <li>
                <a href="https://hellnrock.com">Cookies</a>
              </li>
              <li>
                <a href="https://hellnrock.com">Términos</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="nox-footer-bottom">
          <div className="nox-footer-copy">© 2026 {SITE.name}. Todos los derechos reservados.</div>
          <div className="nox-footer-powered">
            Una publicación de{" "}
            <a href="https://hellnrock.com" target="_blank" rel="noopener noreferrer">
              HellNRock
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
