import { Link } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { NAV, RECENT, SECTION_LABEL } from "@/data/content";

export function Sidebar() {
  const [q, setQ] = useState("");
  const [note, setNote] = useState("");

  function onSearch(e: FormEvent) {
    e.preventDefault();
    setNote(q.trim() ? `Sin índice local para “${q.trim()}”.` : "");
  }

  const cats = NAV.filter((n) => n.slug !== "inicio");

  return (
    <aside id="secondary" className="widget-area ast-col-md-4">
      <section className="widget">
        <h3 className="widget-title">Buscar</h3>
        <form className="search-form" onSubmit={onSearch}>
          <label className="screen-reader-text" htmlFor="nox-search">
            Buscar
          </label>
          <input
            id="nox-search"
            className="search-field"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Archivo NOX"
          />
          <input className="search-submit" type="submit" value="Ir" />
        </form>
        {note ? <p className="search-note">{note}</p> : null}
      </section>

      <section className="widget">
        <h3 className="widget-title">Recientes</h3>
        <ul>
          {RECENT.slice(0, 5).map((a) => (
            <li key={a.slug}>
              <Link to="/articulo/$slug" params={{ slug: a.slug }}>
                {a.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="widget">
        <h3 className="widget-title">Secciones</h3>
        <ul>
          {cats.map((c) => (
            <li key={c.slug}>
              <Link to="/seccion/$slug" params={{ slug: c.slug }}>
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="widget">
        <h3 className="widget-title">En el aire</h3>
        <p className="widget-copy">
          {SECTION_LABEL.conciertos} · {SECTION_LABEL.musica} · archivo vivo desde HellNRock Labs.
        </p>
      </section>
    </aside>
  );
}
