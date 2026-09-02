//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v--4dAejJM.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: [
			"/",
			"/articulo/$slug",
			"/seccion/$slug"
		],
		preloads: ["/assets/index-XBBExSxh.js", "/assets/content-B-CDl0-3.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-XBBExSxh.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		preloads: [
			"/assets/routes-L7Z0x3iM.js",
			"/assets/sidebar-bBt_fJCj.js",
			"/assets/post-card-op5sOx0p.js"
		]
	},
	"/articulo/$slug": {
		filePath: "/workspace/src/routes/articulo.$slug.tsx",
		children: void 0,
		preloads: ["/assets/articulo._slug-h2z3XAQe.js", "/assets/sidebar-bBt_fJCj.js"]
	},
	"/seccion/$slug": {
		filePath: "/workspace/src/routes/seccion.$slug.tsx",
		children: void 0,
		preloads: [
			"/assets/seccion._slug-CrV5ECvi.js",
			"/assets/sidebar-bBt_fJCj.js",
			"/assets/post-card-op5sOx0p.js"
		]
	}
} });
//#endregion
export { tsrStartManifest };
