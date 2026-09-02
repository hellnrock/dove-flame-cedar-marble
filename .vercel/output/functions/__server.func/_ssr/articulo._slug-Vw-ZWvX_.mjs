import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as SECTION_LABEL, r as Route$1 } from "./router-XadIpdSt.mjs";
import { n as Sidebar, t as PageShell } from "./sidebar-Ai4ZPDia.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articulo._slug-Vw-ZWvX_.js
var import_jsx_runtime = require_jsx_runtime();
function ArticlePage() {
	const { article } = Route$1.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ast-row",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "primary",
			className: "content-area",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "ast-article-single",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "post-thumb",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: article.image,
								alt: ""
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "entry-header",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "entry-meta",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/seccion/$slug",
									params: { slug: article.section },
									children: SECTION_LABEL[article.section]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									" · ",
									article.kicker,
									" · ",
									article.date
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "entry-title",
								children: article.title
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "entry-content",
							children: [article.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 24))), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								children: "← Archivo"
							}) })]
						})
					]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {})]
	}) });
}
//#endregion
export { ArticlePage as component };
