import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import { NAV, SITE } from "@/data/content";

export function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div id="page" className="site ast-separate-container">
      <header id="masthead" className="site-header">
        <div className="ast-above-header-wrap">
          <div className="ast-above-header-bar ast-above-header">
            <div className="site-branding">
              <div className="ast-site-identity">
                <span className="site-logo-img">
                  <Link to="/" className="custom-logo-link" aria-label={SITE.name}>
                    <img
                      className="custom-logo"
                      src="/logo.svg"
                      width={512}
                      height={512}
                      alt={SITE.name}
                    />
                  </Link>
                </span>
                <div className="ast-site-title-wrap">
                  <p className="site-title">
                    <Link to="/">{SITE.name}</Link>
                  </p>
                  <p className="site-description">{SITE.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ast-main-header-wrap">
          <div className="ast-primary-header-bar main-header-bar">
            <div className="ast-button-wrap">
              <button
                type="button"
                className="menu-toggle ast-mobile-menu-trigger"
                aria-expanded={open}
                aria-controls="nox-primary-nav"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
                <span className="screen-reader-text">Menú</span>
              </button>
            </div>
            <nav
              id="nox-primary-nav"
              className={`main-navigation ast-builder-menu ast-builder-menu-1${open ? " is-open" : ""}`}
              aria-label="Principal"
            >
              <ul className="main-header-menu">
                {NAV.map((item) => {
                  const active =
                    item.slug === "inicio"
                      ? pathname === "/"
                      : pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <li
                      key={item.href}
                      className={`menu-item${active ? " current-menu-item" : ""}`}
                    >
                      {item.slug === "inicio" ? (
                        <Link to="/" className="menu-link">
                          {item.label}
                        </Link>
                      ) : (
                        <Link
                          to="/seccion/$slug"
                          params={{ slug: item.slug }}
                          className="menu-link"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div id="content" className="site-content">
        <div className="ast-container">{children}</div>
      </div>

      <SiteFooter />
    </div>
  );
}
