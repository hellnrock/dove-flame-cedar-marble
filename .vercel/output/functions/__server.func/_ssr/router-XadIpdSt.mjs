import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, _ as createRootRoute, b as require_jsx_runtime, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, y as useRouter, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-CZS7hQSA.js
var SITE = {
	name: "NOX",
	tagline: "Puro Mexa Flow",
	description: "Noticias, música, conciertos, cultura y deporte"
};
var NAV = [
	{
		href: "/",
		label: "Inicio",
		slug: "inicio"
	},
	{
		href: "/seccion/noticias",
		label: "Noticias",
		slug: "noticias"
	},
	{
		href: "/seccion/musica",
		label: "Música",
		slug: "musica"
	},
	{
		href: "/seccion/conciertos",
		label: "Conciertos",
		slug: "conciertos"
	},
	{
		href: "/seccion/cultura",
		label: "Cultura",
		slug: "cultura"
	},
	{
		href: "/seccion/deporte",
		label: "Deporte",
		slug: "deporte"
	}
];
var SECTION_LABEL = {
	noticias: "Noticias",
	musica: "Música",
	conciertos: "Conciertos",
	cultura: "Cultura",
	deporte: "Deporte"
};
var ARTICLES = [
	{
		slug: "la-noche-que-el-rock-volvio-a-ser-rito",
		title: "La noche que el rock mexicano volvió a ser rito",
		excerpt: "Diez mil personas, una sola luz cian y un silencio de catedral antes del primer acorde. Crónica desde el piso.",
		kicker: "Crónica",
		section: "conciertos",
		date: "28 ago 2026",
		image: "/media/hero-arena.jpg",
		featured: true,
		body: [
			"El recinto no aplaudió cuando se apagaron las luces de servicio. Contuvo el aire. Esa es la diferencia entre un concierto y un rito: el público deja de ser audiencia y se convierte en coro.",
			"Desde la fosa, el primer acorde no se oyó: se sintió en el pecho, como un camión pasando bajo el asfalto. El escenario no pedía espectáculo. Pedía atención. Las luces cortaron la niebla en geometrías precisas —cian, blanco frío, nada de púrpura de festival— y el silencio previo se rompió sin alarde.",
			"Hay una generación que creció con el rock mexicano como archivo, no como presente. Esta noche lo devolvió al cuerpo. Sin pirotecnia, sin teloneros de relleno, sin el discurso de “gracias por venir”. Solo el trabajo: tempo, distorsión, coro.",
			"A la salida, la calle estaba mojada. Nadie hablaba fuerte. Eso también es un rito: salir cambiado y no saber aún cómo decirlo."
		]
	},
	{
		slug: "el-nuevo-mapa-del-regional",
		title: "El nuevo mapa del regional: del barrio al estadio",
		excerpt: "El género ya no pide permiso a las capitales. Quién escribe las reglas ahora y quién todavía no se enteró.",
		kicker: "Ensayo",
		section: "musica",
		date: "22 ago 2026",
		image: "/media/hero-guitar.jpg",
		featured: true,
		body: [
			"Durante veinte años el regional se midió con la vara de las disqueras del centro. Hoy la vara la pone un celular en una cochera de Culiacán, una sesión en León, un beat que viaja más rápido que cualquier sello.",
			"Eso no es “el fin de la industria”. Es el fin de un monopolio de sentido. Las canciones que llenan estadios se escribieron para un público que las cantaba antes de que existiera el merchandising.",
			"El riesgo, claro, es la fábrica: el corrido como plantilla, el lujo como único escenario. El oficio —el que dura— sigue siendo el mismo: una historia que alguien necesita oír dos veces."
		]
	},
	{
		slug: "despues-del-show-la-ciudad",
		title: "Después del show, la ciudad",
		excerpt: "Lo que queda cuando se apaga el PA: charcos, taxis y el oído todavía en 120 dB.",
		kicker: "Ciudad",
		section: "cultura",
		date: "18 ago 2026",
		image: "/media/hero-street.jpg",
		featured: true,
		body: [
			"Hay una hora, entre las doce y la una, en la que la ciudad todavía no decide si es de los que salen o de los que duermen. El asfalto guarda el eco. Un letrero lejano tiñe el agua de cian.",
			"Los fotógrafos guardan el cuerpo a mil. Los músicos fuman en la carga. El público ya es peatón otra vez. Nadie toma esa foto y, sin embargo, es la que explica la noche.",
			"NOX se queda un rato más. Porque el espectáculo termina en el escenario, pero la cultura empieza en la calle."
		]
	},
	{
		slug: "cronica-desde-las-gradas",
		title: "Crónica desde las gradas: el clásico bajo la lluvia",
		excerpt: "El marcador fue lo de menos. Lo demás —el agua, el coro, el cemento— fue el partido.",
		kicker: "Cancha",
		section: "deporte",
		date: "12 ago 2026",
		image: "/media/post-stadium.jpg",
		body: [
			"El primer tiempo se jugó contra el agua. El segundo, contra el silencio de un estadio que no perdona el pase fácil. En las gradas, el plástico de las capas sonaba como un hi-hat sucio.",
			"No hubo golazo para la historia. Hubo un córner al 87' y una tribuna que se puso de pie por costumbre, no por esperanza. Eso también es fútbol mexicano: la fe como músculo, no como cálculo.",
			"Al final, las escaleras brillaban. Nadie corrió. El partido se queda en el cuerpo más tiempo cuando el marcador no alcanza para explicarlo."
		]
	},
	{
		slug: "vinilo-en-el-altiplano",
		title: "Vinilo en el altiplano: por qué volvió el analog",
		excerpt: "No es nostalgia. Es control. Quién está prensando, quién está escuchando, quién está fingiendo.",
		kicker: "Formato",
		section: "musica",
		date: "09 ago 2026",
		image: "/media/post-vinyl.jpg",
		body: [
			"El disco no volvió porque sea bonito en el librero. Volvió porque el streaming aplanó el rito de escucha hasta dejarlo en un gesto de pulgar. El analog obliga a una decisión: este lado, ahora, hasta el final.",
			"En el altiplano hay tres plantas de prensado que ya no dan abasto con ediciones de 300 copias. Eso no es un revival de boutique. Es una red chica, terca, que no le pide permiso a ninguna plataforma.",
			"El fetiche existe, claro. También existe el oído. Se distinguen en el minuto tres, cuando la pista no perdona la mezcla barata."
		]
	},
	{
		slug: "fotografos-de-fosa",
		title: "Fotógrafos de fosa: el oficio de no estorbar",
		excerpt: "Tres canciones, sin flash, sin segunda oportunidad. El archivo visual del live mexicano se escribe desde abajo.",
		kicker: "Oficio",
		section: "cultura",
		date: "04 ago 2026",
		image: "/media/post-pit.jpg",
		body: [
			"La fosa no es un VIP. Es un pasillo de cincuenta centímetros entre el escenario y una marea. Ahí se trabaja de rodillas, con el pulso en 140 y el juramento de no levantar un brazo cuando alguien más tiene el plano.",
			"Las reglas son antiguas y se rompen todas las noches: tres temas, sin flash, salida por la izquierda. Lo que no se enseña es el criterio. Qué foto no se toma. Qué momento se deja para el que está atrás.",
			"El archivo del live mexicano —el verdadero, no el de la selfie con brazalete— cabe en unos cuantos discos duros y en unos cuantos nombres que casi nadie pide al micrófono."
		]
	},
	{
		slug: "la-sala-de-control",
		title: "La sala de control, a las 3:14 a.m.",
		excerpt: "Una LED cian, un fader que no se mueve y la decisión de no comprimir más. Así se oye un disco que va a durar.",
		kicker: "Estudio",
		section: "noticias",
		date: "29 jul 2026",
		image: "/media/post-studio.jpg",
		body: [
			"A esa hora el estudio deja de ser un lugar de trabajo y se convierte en una tesis. Cada dB de más es una deuda con el oído del que va a escuchar esto en un autobús dentro de cinco años.",
			"El ingeniero no habla. Mueve un filtro, espera, mueve otro. El productor ya no pide “más punch”. Pide aire. Esa es la noticia: una generación de estudios mexicanos que está dejando de copiar el loudness de las playlists.",
			"Cuando salga el disco, nadie va a mencionar las 3:14. Quedará el silencio entre el verso y el coro. Eso basta."
		]
	},
	{
		slug: "polvo-y-blue-hour",
		title: "Polvo y blue hour: anatomía de un festival que sí se oye",
		excerpt: "Lejos de la foto de drones y cerca del PA. Cómo se construye un escenario cuando el desierto no perdona.",
		kicker: "Festival",
		section: "conciertos",
		date: "21 jul 2026",
		image: "/media/post-festival.jpg",
		body: [
			"El desierto no es un backline. Es un adversario. El viento se come las frecuencias altas; el polvo se come los crossovers; el calor se come a los técnicos. Un festival que se oye bien aquí no es suerte: es ingeniería y terquedad.",
			"A las 19:10 el cielo se pone del color que los de marketing llaman “mágico” y los de audio llaman “todavía hay tiempo de rehacer el delay tower”. El público aún no llega en masa. El sonido, sí.",
			"NOX se queda en la torre, no en el palco. Desde ahí se entiende el mapa: un escenario no es una marca. Es una promesa de que, a 80 metros, el bombo todavía es un bombo."
		]
	}
];
function articleBySlug(slug) {
	return ARTICLES.find((a) => a.slug === slug);
}
function articlesBySection(section) {
	return ARTICLES.filter((a) => a.section === section);
}
var FEATURED = ARTICLES.filter((a) => a.featured);
var RECENT = [...ARTICLES].sort((a, b) => a.date < b.date ? 1 : -1);
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-XadIpdSt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-D62_On1-.css";
var APP_NAME = "NOX";
var Route$3 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${APP_NAME} — Puro Mexa Flow` },
			{
				name: "theme-color",
				content: "#05070B"
			},
			{
				name: "description",
				content: "Noticias, música, conciertos, cultura y deporte. Puro Mexa Flow."
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "es",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$2 = () => import("./routes-B75sqgh5.mjs");
var Route$2 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./articulo._slug-Vw-ZWvX_.mjs");
var Route$1 = createFileRoute("/articulo/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	loader: ({ params }) => {
		const article = articleBySlug(params.slug);
		if (!article) throw notFound();
		return { article };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.article.title} — NOX` : "NOX" }] })
});
var $$splitComponentImporter = () => import("./seccion._slug-BnHkvNrL.mjs");
var SECTIONS = [
	"noticias",
	"musica",
	"conciertos",
	"cultura",
	"deporte"
];
var Route = createFileRoute("/seccion/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: ({ params }) => {
		if (!SECTIONS.includes(params.slug)) throw notFound();
		const section = params.slug;
		return {
			section,
			articles: articlesBySection(section)
		};
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${SECTION_LABEL[loaderData.section]} — NOX` : "NOX" }] })
});
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	ArticuloSlugRoute: Route$1.update({
		id: "/articulo/$slug",
		path: "/articulo/$slug",
		getParentRoute: () => Route$3
	}),
	SeccionSlugRoute: Route.update({
		id: "/seccion/$slug",
		path: "/seccion/$slug",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { FEATURED as a, SECTION_LABEL as c, ARTICLES as i, SITE as l, Route as n, NAV as o, Route$1 as r, RECENT as s, router_exports as t };
