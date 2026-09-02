import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowRight, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { c as SECTION_LABEL, l as SITE, o as NAV, s as RECENT } from "./router-XadIpdSt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sidebar-Ai4ZPDia.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EXPLORE = [
	{
		slug: "noticias",
		label: "Noticias"
	},
	{
		slug: "musica",
		label: "Música"
	},
	{
		slug: "conciertos",
		label: "Conciertos"
	},
	{
		slug: "cultura",
		label: "Cultura"
	},
	{
		slug: "deporte",
		label: "Deporte"
	}
];
var METAL = [
	"Noticias",
	"Entrevistas",
	"Crónicas",
	"Fotografía",
	"Conciertos"
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "nox-footer site-footer",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "nox-footer-cta",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "nox-footer-cta-inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "nox-footer-kicker",
						children: "Bandas · Artistas · Promotores · Sellos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "¿Tienes un lanzamiento, una fecha o una historia que contar?" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Envíanos tu material de prensa, próximos lanzamientos, fechas y novedades. Nuestro equipo editorial revisa cada propuesta y selecciona el contenido que tiene lugar en NOX." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "nox-footer-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:hellonox@infinitummail.com",
							className: "nox-footer-button",
							children: "Enviar material"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://hellnrock.com/services/press-managment-services/",
							className: "nox-footer-service",
							target: "_blank",
							rel: "noopener noreferrer",
							children: ["Servicios de promoción", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 16,
									strokeWidth: 1.75
								})
							})]
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "nox-footer-main",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "nox-footer-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "nox-footer-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "nox-footer-logo",
							"aria-label": SITE.name,
							children: SITE.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "nox-footer-description",
							children: "Un portal editorial nacido desde la escena. Noticias, música, conciertos, espectáculos, cultura y deporte, con una mirada propia."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "nox-footer-column",
						"aria-label": "Secciones",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Explora" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: EXPLORE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/seccion/$slug",
							params: { slug: item.slug },
							children: item.label
						}) }, item.slug)) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "nox-footer-column",
						"aria-label": "NOX Metal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "NOX Metal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: METAL.map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#nox-metal",
							children: label
						}) }, label)) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "nox-footer-column",
						"aria-label": "Información",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Información" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://hellnrock.com",
								target: "_blank",
								rel: "noopener noreferrer",
								children: "Nosotros"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:hellonox@infinitummail.com",
								children: "Contacto"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://hellnrock.com",
								children: "Privacidad"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://hellnrock.com",
								children: "Cookies"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://hellnrock.com",
								children: "Términos"
							}) })
						] })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "nox-footer-bottom",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "nox-footer-copy",
					children: [
						"© 2026 ",
						SITE.name,
						". Todos los derechos reservados."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "nox-footer-powered",
					children: [
						"Una publicación de",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://hellnrock.com",
							target: "_blank",
							rel: "noopener noreferrer",
							children: "HellNRock"
						})
					]
				})]
			})]
		})]
	});
}
function PageShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "page",
		className: "site ast-separate-container",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				id: "masthead",
				className: "site-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ast-above-header-wrap",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ast-above-header-bar ast-above-header",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "site-branding",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ast-site-identity",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "site-logo-img",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										className: "custom-logo-link",
										"aria-label": SITE.name,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											className: "custom-logo",
											src: "/logo.svg",
											width: 512,
											height: 512,
											alt: SITE.name
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ast-site-title-wrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "site-title",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/",
											children: SITE.name
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "site-description",
										children: SITE.tagline
									})]
								})]
							})
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ast-main-header-wrap",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ast-primary-header-bar main-header-bar",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ast-button-wrap",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "menu-toggle ast-mobile-menu-trigger",
								"aria-expanded": open,
								"aria-controls": "nox-primary-nav",
								onClick: () => setOpen((v) => !v),
								children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									size: 18,
									strokeWidth: 1.75
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
									size: 18,
									strokeWidth: 1.75
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "screen-reader-text",
									children: "Menú"
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							id: "nox-primary-nav",
							className: `main-navigation ast-builder-menu ast-builder-menu-1${open ? " is-open" : ""}`,
							"aria-label": "Principal",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "main-header-menu",
								children: NAV.map((item) => {
									const active = item.slug === "inicio" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: `menu-item${active ? " current-menu-item" : ""}`,
										children: item.slug === "inicio" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/",
											className: "menu-link",
											children: item.label
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/seccion/$slug",
											params: { slug: item.slug },
											className: "menu-link",
											children: item.label
										})
									}, item.href);
								})
							})
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "content",
				className: "site-content",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ast-container",
					children
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Sidebar() {
	const [q, setQ] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	function onSearch(e) {
		e.preventDefault();
		setNote(q.trim() ? `Sin índice local para “${q.trim()}”.` : "");
	}
	const cats = NAV.filter((n) => n.slug !== "inicio");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		id: "secondary",
		className: "widget-area ast-col-md-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "widget",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "widget-title",
						children: "Buscar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "search-form",
						onSubmit: onSearch,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "screen-reader-text",
								htmlFor: "nox-search",
								children: "Buscar"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "nox-search",
								className: "search-field",
								type: "search",
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: "Archivo NOX"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "search-submit",
								type: "submit",
								value: "Ir"
							})
						]
					}),
					note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "search-note",
						children: note
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "widget",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "widget-title",
					children: "Recientes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: RECENT.slice(0, 5).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/articulo/$slug",
					params: { slug: a.slug },
					children: a.title
				}) }, a.slug)) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "widget",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "widget-title",
					children: "Secciones"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/seccion/$slug",
					params: { slug: c.slug },
					children: c.label
				}) }, c.slug)) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "widget",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "widget-title",
					children: "En el aire"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "widget-copy",
					children: [
						SECTION_LABEL.conciertos,
						" · ",
						SECTION_LABEL.musica,
						" · archivo vivo desde HellNRock Labs."
					]
				})]
			})
		]
	});
}
//#endregion
export { Sidebar as n, PageShell as t };
