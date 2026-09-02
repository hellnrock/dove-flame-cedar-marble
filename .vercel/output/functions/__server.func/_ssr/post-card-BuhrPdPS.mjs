import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronLeft, i as ChevronRight } from "../_libs/lucide-react.mjs";
import { a as FEATURED, c as SECTION_LABEL } from "./router-XadIpdSt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/post-card-BuhrPdPS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var INTERVAL = 7e3;
function Hero({ slides = FEATURED }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const total = slides.length;
	const go = (0, import_react.useCallback)((dir) => {
		setIndex((i) => (i + dir + total) % total);
	}, [total]);
	(0, import_react.useEffect)(() => {
		if (total < 2) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setInterval(() => go(1), INTERVAL);
		return () => window.clearInterval(id);
	}, [go, total]);
	if (!total) return null;
	const current = slides[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "nox-hero-gallery",
		"aria-roledescription": "carrusel",
		"aria-label": "Destacados",
		children: [
			slides.map((slide, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `nox-slide${i === index ? " active" : ""}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: slide.image,
					alt: "",
					className: "nox-slide-media"
				})
			}, slide.slug)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "nox-hero-overlay",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "nox-hero-badge",
						children: SECTION_LABEL[current.section]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "nox-hero-title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/articulo/$slug",
							params: { slug: current.slug },
							children: current.title
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "nox-hero-kicker",
						children: current.excerpt
					})
				]
			}),
			total > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "nox-hero-prev",
					onClick: () => go(-1),
					"aria-label": "Anterior",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						size: 18,
						strokeWidth: 1.75
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "nox-hero-next",
					onClick: () => go(1),
					"aria-label": "Siguiente",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						size: 18,
						strokeWidth: 1.75
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "nox-hero-dots",
					role: "tablist",
					"aria-label": "Diapositivas",
					children: slides.map((slide, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": `Ir a ${slide.title}`,
						"aria-current": i === index ? "true" : void 0,
						onClick: () => setIndex(i)
					}, slide.slug))
				})
			] }) : null
		]
	});
}
function PostCard({ article }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "ast-article-post",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "post-thumb",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/articulo/$slug",
				params: { slug: article.slug },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: article.image,
					alt: ""
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "post-content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "entry-meta",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/seccion/$slug",
						params: { slug: article.section },
						children: SECTION_LABEL[article.section]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [" · ", article.date] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "entry-title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/articulo/$slug",
						params: { slug: article.slug },
						children: article.title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "ast-excerpt",
					children: article.excerpt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "read-more",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/articulo/$slug",
						params: { slug: article.slug },
						children: "Leer"
					})
				})
			]
		})]
	});
}
//#endregion
export { PostCard as n, Hero as t };
