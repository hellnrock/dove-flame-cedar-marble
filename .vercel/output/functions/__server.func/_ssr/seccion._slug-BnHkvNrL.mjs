import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as SECTION_LABEL, n as Route } from "./router-XadIpdSt.mjs";
import { n as Sidebar, t as PageShell } from "./sidebar-Ai4ZPDia.mjs";
import { n as PostCard, t as Hero } from "./post-card-BuhrPdPS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/seccion._slug-BnHkvNrL.js
var import_jsx_runtime = require_jsx_runtime();
function SectionPage() {
	const { section, articles } = Route.useLoaderData();
	const featured = articles.slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ast-row",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "primary",
			className: "content-area",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				children: [featured.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { slides: featured }) : null, articles.length ? articles.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostCard, { article }, article.slug)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "ast-article-single",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "entry-header",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "entry-title",
							children: SECTION_LABEL[section]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "entry-meta",
							children: "Sin piezas en esta sección todavía."
						})]
					})
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {})]
	}) });
}
//#endregion
export { SectionPage as component };
