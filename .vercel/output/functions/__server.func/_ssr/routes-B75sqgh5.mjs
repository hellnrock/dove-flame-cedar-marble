import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ARTICLES } from "./router-XadIpdSt.mjs";
import { n as Sidebar, t as PageShell } from "./sidebar-Ai4ZPDia.mjs";
import { n as PostCard, t as Hero } from "./post-card-BuhrPdPS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B75sqgh5.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ast-row",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "primary",
			className: "content-area",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}), ARTICLES.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostCard, { article }, article.slug))]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {})]
	}) });
}
//#endregion
export { Home as component };
