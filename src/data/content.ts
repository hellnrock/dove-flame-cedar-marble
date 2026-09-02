export type Section = "noticias" | "musica" | "conciertos" | "cultura" | "deporte";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  section: Section;
  kicker: string;
  date: string;
  image: string;
  featured?: boolean;
};

export const SITE = {
  name: "NOX",
  tagline: "Puro Mexa Flow",
  description: "Noticias, música, conciertos, cultura y deporte",
};

export const NAV: (
  | { href: "/"; label: string; slug: "inicio" }
  | { href: string; label: string; slug: Section }
)[] = [
  { href: "/", label: "Inicio", slug: "inicio" },
  { href: "/seccion/noticias", label: "Noticias", slug: "noticias" },
  { href: "/seccion/musica", label: "Música", slug: "musica" },
  { href: "/seccion/conciertos", label: "Conciertos", slug: "conciertos" },
  { href: "/seccion/cultura", label: "Cultura", slug: "cultura" },
  { href: "/seccion/deporte", label: "Deporte", slug: "deporte" },
];

export const SECTION_LABEL: Record<Section, string> = {
  noticias: "Noticias",
  musica: "Música",
  conciertos: "Conciertos",
  cultura: "Cultura",
  deporte: "Deporte",
};

export const ARTICLES: Article[] = [
  {
    slug: "la-noche-que-el-rock-volvio-a-ser-rito",
    title: "La noche que el rock mexicano volvió a ser rito",
    excerpt:
      "Diez mil personas, una sola luz cian y un silencio de catedral antes del primer acorde. Crónica desde el piso.",
    kicker: "Crónica",
    section: "conciertos",
    date: "28 ago 2026",
    image: "/media/hero-arena.jpg",
    featured: true,
    body: [
      "El recinto no aplaudió cuando se apagaron las luces de servicio. Contuvo el aire. Esa es la diferencia entre un concierto y un rito: el público deja de ser audiencia y se convierte en coro.",
      "Desde la fosa, el primer acorde no se oyó: se sintió en el pecho, como un camión pasando bajo el asfalto. El escenario no pedía espectáculo. Pedía atención. Las luces cortaron la niebla en geometrías precisas —cian, blanco frío, nada de púrpura de festival— y el silencio previo se rompió sin alarde.",
      "Hay una generación que creció con el rock mexicano como archivo, no como presente. Esta noche lo devolvió al cuerpo. Sin pirotecnia, sin teloneros de relleno, sin el discurso de “gracias por venir”. Solo el trabajo: tempo, distorsión, coro.",
      "A la salida, la calle estaba mojada. Nadie hablaba fuerte. Eso también es un rito: salir cambiado y no saber aún cómo decirlo.",
    ],
  },
  {
    slug: "el-nuevo-mapa-del-regional",
    title: "El nuevo mapa del regional: del barrio al estadio",
    excerpt:
      "El género ya no pide permiso a las capitales. Quién escribe las reglas ahora y quién todavía no se enteró.",
    kicker: "Ensayo",
    section: "musica",
    date: "22 ago 2026",
    image: "/media/hero-guitar.jpg",
    featured: true,
    body: [
      "Durante veinte años el regional se midió con la vara de las disqueras del centro. Hoy la vara la pone un celular en una cochera de Culiacán, una sesión en León, un beat que viaja más rápido que cualquier sello.",
      "Eso no es “el fin de la industria”. Es el fin de un monopolio de sentido. Las canciones que llenan estadios se escribieron para un público que las cantaba antes de que existiera el merchandising.",
      "El riesgo, claro, es la fábrica: el corrido como plantilla, el lujo como único escenario. El oficio —el que dura— sigue siendo el mismo: una historia que alguien necesita oír dos veces.",
    ],
  },
  {
    slug: "despues-del-show-la-ciudad",
    title: "Después del show, la ciudad",
    excerpt:
      "Lo que queda cuando se apaga el PA: charcos, taxis y el oído todavía en 120 dB.",
    kicker: "Ciudad",
    section: "cultura",
    date: "18 ago 2026",
    image: "/media/hero-street.jpg",
    featured: true,
    body: [
      "Hay una hora, entre las doce y la una, en la que la ciudad todavía no decide si es de los que salen o de los que duermen. El asfalto guarda el eco. Un letrero lejano tiñe el agua de cian.",
      "Los fotógrafos guardan el cuerpo a mil. Los músicos fuman en la carga. El público ya es peatón otra vez. Nadie toma esa foto y, sin embargo, es la que explica la noche.",
      "NOX se queda un rato más. Porque el espectáculo termina en el escenario, pero la cultura empieza en la calle.",
    ],
  },
  {
    slug: "cronica-desde-las-gradas",
    title: "Crónica desde las gradas: el clásico bajo la lluvia",
    excerpt:
      "El marcador fue lo de menos. Lo demás —el agua, el coro, el cemento— fue el partido.",
    kicker: "Cancha",
    section: "deporte",
    date: "12 ago 2026",
    image: "/media/post-stadium.jpg",
    body: [
      "El primer tiempo se jugó contra el agua. El segundo, contra el silencio de un estadio que no perdona el pase fácil. En las gradas, el plástico de las capas sonaba como un hi-hat sucio.",
      "No hubo golazo para la historia. Hubo un córner al 87' y una tribuna que se puso de pie por costumbre, no por esperanza. Eso también es fútbol mexicano: la fe como músculo, no como cálculo.",
      "Al final, las escaleras brillaban. Nadie corrió. El partido se queda en el cuerpo más tiempo cuando el marcador no alcanza para explicarlo.",
    ],
  },
  {
    slug: "vinilo-en-el-altiplano",
    title: "Vinilo en el altiplano: por qué volvió el analog",
    excerpt:
      "No es nostalgia. Es control. Quién está prensando, quién está escuchando, quién está fingiendo.",
    kicker: "Formato",
    section: "musica",
    date: "09 ago 2026",
    image: "/media/post-vinyl.jpg",
    body: [
      "El disco no volvió porque sea bonito en el librero. Volvió porque el streaming aplanó el rito de escucha hasta dejarlo en un gesto de pulgar. El analog obliga a una decisión: este lado, ahora, hasta el final.",
      "En el altiplano hay tres plantas de prensado que ya no dan abasto con ediciones de 300 copias. Eso no es un revival de boutique. Es una red chica, terca, que no le pide permiso a ninguna plataforma.",
      "El fetiche existe, claro. También existe el oído. Se distinguen en el minuto tres, cuando la pista no perdona la mezcla barata.",
    ],
  },
  {
    slug: "fotografos-de-fosa",
    title: "Fotógrafos de fosa: el oficio de no estorbar",
    excerpt:
      "Tres canciones, sin flash, sin segunda oportunidad. El archivo visual del live mexicano se escribe desde abajo.",
    kicker: "Oficio",
    section: "cultura",
    date: "04 ago 2026",
    image: "/media/post-pit.jpg",
    body: [
      "La fosa no es un VIP. Es un pasillo de cincuenta centímetros entre el escenario y una marea. Ahí se trabaja de rodillas, con el pulso en 140 y el juramento de no levantar un brazo cuando alguien más tiene el plano.",
      "Las reglas son antiguas y se rompen todas las noches: tres temas, sin flash, salida por la izquierda. Lo que no se enseña es el criterio. Qué foto no se toma. Qué momento se deja para el que está atrás.",
      "El archivo del live mexicano —el verdadero, no el de la selfie con brazalete— cabe en unos cuantos discos duros y en unos cuantos nombres que casi nadie pide al micrófono.",
    ],
  },
  {
    slug: "la-sala-de-control",
    title: "La sala de control, a las 3:14 a.m.",
    excerpt:
      "Una LED cian, un fader que no se mueve y la decisión de no comprimir más. Así se oye un disco que va a durar.",
    kicker: "Estudio",
    section: "noticias",
    date: "29 jul 2026",
    image: "/media/post-studio.jpg",
    body: [
      "A esa hora el estudio deja de ser un lugar de trabajo y se convierte en una tesis. Cada dB de más es una deuda con el oído del que va a escuchar esto en un autobús dentro de cinco años.",
      "El ingeniero no habla. Mueve un filtro, espera, mueve otro. El productor ya no pide “más punch”. Pide aire. Esa es la noticia: una generación de estudios mexicanos que está dejando de copiar el loudness de las playlists.",
      "Cuando salga el disco, nadie va a mencionar las 3:14. Quedará el silencio entre el verso y el coro. Eso basta.",
    ],
  },
  {
    slug: "polvo-y-blue-hour",
    title: "Polvo y blue hour: anatomía de un festival que sí se oye",
    excerpt:
      "Lejos de la foto de drones y cerca del PA. Cómo se construye un escenario cuando el desierto no perdona.",
    kicker: "Festival",
    section: "conciertos",
    date: "21 jul 2026",
    image: "/media/post-festival.jpg",
    body: [
      "El desierto no es un backline. Es un adversario. El viento se come las frecuencias altas; el polvo se come los crossovers; el calor se come a los técnicos. Un festival que se oye bien aquí no es suerte: es ingeniería y terquedad.",
      "A las 19:10 el cielo se pone del color que los de marketing llaman “mágico” y los de audio llaman “todavía hay tiempo de rehacer el delay tower”. El público aún no llega en masa. El sonido, sí.",
      "NOX se queda en la torre, no en el palco. Desde ahí se entiende el mapa: un escenario no es una marca. Es una promesa de que, a 80 metros, el bombo todavía es un bombo.",
    ],
  },
];

export function articleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function articlesBySection(section: Section) {
  return ARTICLES.filter((a) => a.section === section);
}

export const FEATURED = ARTICLES.filter((a) => a.featured);
export const RECENT = [...ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1));
