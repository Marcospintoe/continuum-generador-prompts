window.PROMPTS_DATA = {
  "meta": {
    "brand": "Continuum",
    "note": "Las imágenes son miniaturas de estilo (placeholders). Reemplazalas por tus imágenes reales cuando quieras.",
    "categories": [
      "Sistemas de IA y Automatización",
      "Playbook Continuum",
      "Streetwear y Editorial",
      "Creativos para Ads",
      "E-commerce y Retail",
      "Promociones y Ofertas",
      "Lifestyle y UGC",
      "Fotos de Producto",
      "Posts para Redes",
      "Video y Motion",
      "Textos y Captions",
      "Historia de Marca"
    ],
    "types": [
      "image",
      "video",
      "text"
    ]
  },
  "prompts": [
    {
      "id": "p001",
      "type": "image",
      "category": "Fotos de Producto",
      "title": "Producto Estilo Estudio",
      "prompt": "Foto de producto súper limpia: {PRODUCTO} centrado sobre un fondo de color con degradado suave, luz de estudio pareja, un reflejo sutil en la superficie brillante, mucho detalle, estilo catálogo profesional, alta resolución 4k. CAMBIÁ {PRODUCTO} y el color.",
      "image": "https://picsum.photos/seed/cont01/500/620",
      "model": "Midjourney v6",
      "tags": [
        "ecommerce",
        "studio",
        "clean",
        "hero"
      ]
    },
    {
      "id": "p002",
      "type": "image",
      "category": "Fotos de Producto",
      "title": "Producto Flotando con Salpicadura",
      "prompt": "Foto dinámica de {PRODUCTO} flotando en el aire rodeado de una salpicadura de agua y hielo, luz dramática en los bordes, fondo oscuro, gotas muy realistas, sensación premium y con energía. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/cont02/500/560",
      "model": "Midjourney v6",
      "tags": [
        "splash",
        "dynamic",
        "premium",
        "beverage"
      ]
    },
    {
      "id": "p003",
      "type": "image",
      "category": "Fotos de Producto",
      "title": "Vista desde Arriba (Flat Lay)",
      "prompt": "Foto desde arriba de {PRODUCTO} acomodado con objetos que combinan sobre una superficie {COLOR} con textura, luz natural de ventana, con espacio libre para poner texto, estilo editorial listo para Instagram. CAMBIÁ {PRODUCTO} y {COLOR}.",
      "image": "https://picsum.photos/seed/cont03/500/500",
      "model": "DALL·E 3",
      "tags": [
        "flatlay",
        "editorial",
        "topdown",
        "styled"
      ]
    },
    {
      "id": "p004",
      "type": "image",
      "category": "Lifestyle y UGC",
      "title": "Selfie UGC Real",
      "prompt": "Foto tipo celular (parece hecha con un iPhone) de una persona real sosteniendo {PRODUCTO}, luz natural imperfecta, un poco granulada, estilo auténtico de usuario, en casa, sonrisa genuina. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/cont04/500/640",
      "model": "Midjourney v6 --style raw",
      "tags": [
        "ugc",
        "authentic",
        "selfie",
        "social"
      ]
    },
    {
      "id": "p005",
      "type": "image",
      "category": "Lifestyle y UGC",
      "title": "Producto en Uso (Lifestyle)",
      "prompt": "Foto de estilo de vida: una persona usando {PRODUCTO} de forma natural en un {ESCENARIO} con sol, tonos cálidos de atardecer, fondo desenfocado, aspiracional pero realista. CAMBIÁ {PRODUCTO} y {ESCENARIO}.",
      "image": "https://picsum.photos/seed/cont05/500/580",
      "model": "Midjourney v6",
      "tags": [
        "lifestyle",
        "golden-hour",
        "aspirational",
        "in-use"
      ]
    },
    {
      "id": "p006",
      "type": "image",
      "category": "Lifestyle y UGC",
      "title": "Detalle Solo Manos",
      "prompt": "Primer plano de unas manos usando {PRODUCTO}, foco en la textura y el detalle, luz suave, fondo neutro, sensación cercana que muestra la calidad. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/cont06/500/540",
      "model": "DALL·E 3",
      "tags": [
        "macro",
        "hands",
        "detail",
        "tactile"
      ]
    },
    {
      "id": "p007",
      "type": "image",
      "category": "Creativos para Ads",
      "title": "Banner de Oferta Llamativo",
      "prompt": "Creativo de publicidad para {PRODUCTO} con fondo {COLOR} bien fuerte, espacio libre arriba para el título, el producto a la derecha, mucho contraste, pensado para un anuncio de Meta, con lugar para el botón de acción. CAMBIÁ {PRODUCTO} y {COLOR}.",
      "image": "https://picsum.photos/seed/cont07/500/500",
      "model": "Midjourney v6",
      "tags": [
        "ad",
        "meta",
        "promo",
        "banner"
      ]
    },
    {
      "id": "p008",
      "type": "image",
      "category": "Creativos para Ads",
      "title": "Antes / Después",
      "prompt": "Imagen de publicidad dividida en dos: a la izquierda el 'antes' apagado y aburrido, a la derecha el 'después' con {PRODUCTO}, vibrante y brillante, una línea clara en el medio. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/cont08/500/500",
      "model": "DALL·E 3",
      "tags": [
        "ad",
        "before-after",
        "transformation",
        "conversion"
      ]
    },
    {
      "id": "p009",
      "type": "image",
      "category": "Creativos para Ads",
      "title": "Anuncio Vertical (Stories)",
      "prompt": "Creativo vertical 9:16 para {PRODUCTO}, fondo inmersivo, producto centrado, espacio arriba y abajo para texto y 'deslizá', optimizado para Stories de Instagram/TikTok, que frene el scroll. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/cont09/500/700",
      "model": "Midjourney v6 --ar 9:16",
      "tags": [
        "ad",
        "stories",
        "vertical",
        "tiktok"
      ]
    },
    {
      "id": "p010",
      "type": "image",
      "category": "Posts para Redes",
      "title": "Placa de Frase",
      "prompt": "Fondo minimalista para una placa de frase, en el azul marino de Continuum (#0f172a) con un brillo sutil, mucho espacio centrado para una frase corta, tipografía moderna, premium y calma.",
      "image": "https://picsum.photos/seed/cont10/500/500",
      "model": "DALL·E 3",
      "tags": [
        "quote",
        "branded",
        "minimal",
        "carousel"
      ]
    },
    {
      "id": "p011",
      "type": "image",
      "category": "Posts para Redes",
      "title": "Base para Carrusel",
      "prompt": "Plantilla limpia para una slide de carrusel, con un degradado suave de dos tonos, zonas claras para un título y una línea de apoyo, márgenes parejos, coherente con una marca moderna y tecnológica.",
      "image": "https://picsum.photos/seed/cont11/500/500",
      "model": "Midjourney v6",
      "tags": [
        "carousel",
        "template",
        "gradient",
        "instagram"
      ]
    },
    {
      "id": "p012",
      "type": "image",
      "category": "Historia de Marca",
      "title": "Retrato de Fundador",
      "prompt": "Retrato editorial de un fundador seguro en una oficina moderna con ventanales, luz natural, fondo desenfocado, expresión auténtica y cercana, color de calidad de revista.",
      "image": "https://picsum.photos/seed/cont12/500/620",
      "model": "Midjourney v6",
      "tags": [
        "portrait",
        "founder",
        "editorial",
        "brand"
      ]
    },
    {
      "id": "p013",
      "type": "image",
      "category": "Historia de Marca",
      "title": "Detrás de Escena",
      "prompt": "Foto estilo documental detrás de escena de un equipo creativo trabajando juntos, energía espontánea, mezcla de luz natural y de pantallas, tonos cinematográficos apagados, muestra cultura y trabajo.",
      "image": "https://picsum.photos/seed/cont13/500/560",
      "model": "Midjourney v6 --style raw",
      "tags": [
        "bts",
        "team",
        "culture",
        "documentary"
      ]
    },
    {
      "id": "p014",
      "type": "image",
      "category": "Historia de Marca",
      "title": "Textura Abstracta de Marca",
      "prompt": "Render 3D abstracto de cintas de metal líquido en azul marino y violeta eléctrico, luz de estudio suave, premium y futurista, sirve como fondo de web o motivo de marca, alta resolución.",
      "image": "https://picsum.photos/seed/cont14/500/600",
      "model": "Midjourney v6",
      "tags": [
        "abstract",
        "3d",
        "texture",
        "hero"
      ]
    },
    {
      "id": "p015",
      "type": "image",
      "category": "Fotos de Producto",
      "title": "Pedestal Minimalista",
      "prompt": "{PRODUCTO} sobre un pedestal de piedra minimalista, una sola luz que genera una sombra larga y suave, fondo beige apagado, composición elegante tipo galería, mucho espacio vacío. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/cont15/500/640",
      "model": "Midjourney v6",
      "tags": [
        "minimal",
        "pedestal",
        "premium",
        "shadow"
      ]
    },
    {
      "id": "p016",
      "type": "image",
      "category": "Lifestyle y UGC",
      "title": "Escritorio desde Arriba",
      "prompt": "Foto desde arriba de un escritorio de home office con {PRODUCTO} entre una notebook, un café y una planta, luz cálida de mañana, estilo real y acogedor. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/cont16/500/520",
      "model": "DALL·E 3",
      "tags": [
        "desk",
        "wfh",
        "flatlay",
        "relatable"
      ]
    },
    {
      "id": "p017",
      "type": "image",
      "category": "Creativos para Ads",
      "title": "Anuncio con Características",
      "prompt": "Anuncio con {PRODUCTO} centrado y tres líneas que señalan características clave, diseño moderno y tecnológico, fondo con grilla sutil, espacio para un ícono al lado de cada característica. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/cont17/500/500",
      "model": "DALL·E 3",
      "tags": [
        "ad",
        "features",
        "callout",
        "explainer"
      ]
    },
    {
      "id": "p018",
      "type": "image",
      "category": "Posts para Redes",
      "title": "Imagen tipo Meme",
      "prompt": "Imagen social tipo meme con energía expresiva, espacio para texto arriba y abajo, mucho contraste, fácil de compartir, humor de marketing, que se vea nativa del feed.",
      "image": "https://picsum.photos/seed/cont18/500/500",
      "model": "Midjourney v6 --style raw",
      "tags": [
        "meme",
        "humor",
        "shareable",
        "engagement"
      ]
    },
    {
      "id": "v001",
      "type": "video",
      "category": "Video y Motion",
      "title": "Producto Girando (loop)",
      "prompt": "Un giro lento de 360° de {PRODUCTO} sobre una superficie que refleja, luz de estudio suave que recorre la superficie, loop sin cortes, fondo desenfocado, sensación premium, clip de 5 segundos. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/cont19/500/560",
      "model": "Runway Gen-3 / Sora",
      "tags": [
        "video",
        "loop",
        "product",
        "rotation"
      ]
    },
    {
      "id": "v002",
      "type": "video",
      "category": "Video y Motion",
      "title": "UGC Hablando a Cámara",
      "prompt": "Clip vertical 9:16 estilo UGC de una persona recomendando {PRODUCTO} a cámara con entusiasmo, cámara en mano, luz de casa, entrega auténtica, subtítulos incrustados, ritmo tipo TikTok, 15 segundos. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/cont20/500/700",
      "model": "Runway Gen-3 / HeyGen",
      "tags": [
        "video",
        "ugc",
        "tiktok",
        "testimonial"
      ]
    },
    {
      "id": "v003",
      "type": "video",
      "category": "Video y Motion",
      "title": "Revelado Cinematográfico",
      "prompt": "Acercamiento lento y cinematográfico que revela {PRODUCTO} saliendo de la sombra hacia una luz cálida, atmósfera con partículas, ritmo tipo videoclip, look de cine, clip de 6 segundos para un lanzamiento. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/cont21/500/580",
      "model": "Sora / Kling",
      "tags": [
        "video",
        "cinematic",
        "reveal",
        "launch"
      ]
    },
    {
      "id": "v004",
      "type": "video",
      "category": "Video y Motion",
      "title": "Intro de Texto en Movimiento",
      "prompt": "Intro de tipografía en movimiento animando el eslogan '{FRASE}', tipografía bold, fondo azul marino con acentos violetas, transiciones rápidas al ritmo de un beat, cortina de marca de 4 segundos. CAMBIÁ {FRASE}.",
      "image": "https://picsum.photos/seed/cont22/500/500",
      "model": "After Effects / Runway",
      "tags": [
        "video",
        "kinetic",
        "typography",
        "intro"
      ]
    },
    {
      "id": "v005",
      "type": "video",
      "category": "Video y Motion",
      "title": "Montaje de B-Roll Lifestyle",
      "prompt": "Montaje de tomas aspiracionales de estilo de vida con {PRODUCTO} en momentos del día, movimiento suave de cámara, color cálido, cortes rápidos al ritmo, clima positivo, ideal para un anuncio, 12 segundos. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/cont23/500/540",
      "model": "Runway Gen-3 / Pika",
      "tags": [
        "video",
        "broll",
        "montage",
        "lifestyle"
      ]
    },
    {
      "id": "t001",
      "type": "text",
      "category": "Textos y Captions",
      "title": "Ganchos que Frenan el Scroll",
      "prompt": "Escribí 5 primeras frases que frenen el scroll para un anuncio de {PRODUCTO}. Cada gancho de menos de 12 palabras, que genere curiosidad o tensión, sin frases trilladas. Público: {AUDIENCIA}. En lista numerada. CAMBIÁ {PRODUCTO} y {AUDIENCIA}.",
      "image": "https://picsum.photos/seed/cont24/500/480",
      "model": "GPT-4o / Claude",
      "tags": [
        "copy",
        "hooks",
        "ads",
        "social"
      ]
    },
    {
      "id": "t002",
      "type": "text",
      "category": "Textos y Captions",
      "title": "Pack de Captions de Instagram",
      "prompt": "Generá 3 captions de Instagram para un post sobre {PRODUCTO}: uno con humor, uno emotivo y uno directo. Cada uno de menos de 150 caracteres, con un CTA suave y 3 hashtags. Voz de marca: {VOZ}. CAMBIÁ {PRODUCTO} y {VOZ}.",
      "image": "https://picsum.photos/seed/cont25/500/520",
      "model": "GPT-4o / Claude",
      "tags": [
        "copy",
        "caption",
        "instagram",
        "cta"
      ]
    },
    {
      "id": "t003",
      "type": "text",
      "category": "Textos y Captions",
      "title": "Texto Principal de Anuncio Meta",
      "prompt": "Escribí 3 versiones del texto principal de un anuncio de Meta para {PRODUCTO} usando el método PAS (Problema, Agitar, Solución). Máximo 3 párrafos cortos, charlado, pensado para celular, terminando con un CTA a {ACCION}. CAMBIÁ {PRODUCTO} y {ACCION}.",
      "image": "https://picsum.photos/seed/cont26/500/500",
      "model": "GPT-4o / Claude",
      "tags": [
        "copy",
        "meta",
        "pas",
        "direct-response"
      ]
    },
    {
      "id": "t004",
      "type": "text",
      "category": "Textos y Captions",
      "title": "Guion de TikTok (30s)",
      "prompt": "Escribí un guion de TikTok de 30 segundos para {PRODUCTO} con un gancho fuerte en los primeros 3 segundos, un medio con valor rápido y un CTA claro. Incluí indicaciones de texto en pantalla y de tomas entre corchetes. Tono casual y nativo. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/cont27/500/620",
      "model": "GPT-4o / Claude",
      "tags": [
        "copy",
        "script",
        "tiktok",
        "video"
      ]
    },
    {
      "id": "t005",
      "type": "text",
      "category": "Textos y Captions",
      "title": "Asuntos de Email",
      "prompt": "Generá 10 asuntos de email con buena tasa de apertura para una campaña de {PRODUCTO}. Mezclá curiosidad, urgencia y beneficio. Cada uno de menos de 50 caracteres. Evitá palabras que caen en spam. En lista. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/cont28/500/480",
      "model": "GPT-4o / Claude",
      "tags": [
        "copy",
        "email",
        "subject-lines",
        "crm"
      ]
    },
    {
      "id": "t006",
      "type": "text",
      "category": "Textos y Captions",
      "title": "Título de Landing Page",
      "prompt": "Escribí 8 títulos para la parte de arriba de una landing de {PRODUCTO}, cada uno con un subtítulo de una línea. Cubrí distintos ángulos: resultado, rapidez, facilidad, estatus y garantía. Directos, enfocados en el beneficio, sin tecnicismos. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/cont29/500/500",
      "model": "GPT-4o / Claude",
      "tags": [
        "copy",
        "landing-page",
        "headline",
        "cro"
      ]
    },
    {
      "id": "t007",
      "type": "text",
      "category": "Historia de Marca",
      "title": "Borrador de Historia de Marca",
      "prompt": "Escribí una historia de origen de marca de 150 palabras para {MARCA} que conecte la motivación del fundador con el problema del cliente. Cálida, auténtica, en primera persona plural. Cerrá con la misión. Sin palabras corporativas vacías. CAMBIÁ {MARCA}.",
      "image": "https://picsum.photos/seed/cont30/500/540",
      "model": "Claude / GPT-4o",
      "tags": [
        "copy",
        "story",
        "brand",
        "about"
      ]
    },
    {
      "id": "t008",
      "type": "text",
      "category": "Textos y Captions",
      "title": "Propuesta de Valor en una Frase",
      "prompt": "Creá 6 propuestas de valor de una sola frase para {PRODUCTO} con el formato 'Ayudamos a {AUDIENCIA} a lograr {RESULTADO} sin {DOLOR}'. Que cada una sea concreta y creíble, sin exageraciones. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/cont31/500/460",
      "model": "Claude / GPT-4o",
      "tags": [
        "copy",
        "value-prop",
        "positioning",
        "messaging"
      ]
    },
    {
      "id": "p019",
      "type": "image",
      "category": "Posts para Redes",
      "title": "Placa de Anuncio",
      "prompt": "Placa de anuncio llamativa con una insignia grande de 'NUEVO', degradado azul marino y violeta, partículas de confeti, espacio centrado para el nombre del producto y la fecha, festivo pero premium, formato cuadrado.",
      "image": "https://picsum.photos/seed/cont32/500/500",
      "model": "DALL·E 3",
      "tags": [
        "announcement",
        "launch",
        "social",
        "badge"
      ]
    },
    {
      "id": "p020",
      "type": "image",
      "category": "Creativos para Ads",
      "title": "Placa de Testimonio",
      "prompt": "Creativo de publicidad con 5 estrellas, espacio para una frase de un cliente y una foto de perfil, diseño limpio y confiable, enfocado en la prueba social.",
      "image": "https://picsum.photos/seed/cont33/500/500",
      "model": "DALL·E 3",
      "tags": [
        "ad",
        "testimonial",
        "social-proof",
        "reviews"
      ]
    },
    {
      "id": "p021",
      "type": "image",
      "category": "Fotos de Producto",
      "title": "Fondo de Color Vibrante",
      "prompt": "Foto de {PRODUCTO} contra un fondo de un solo color {COLOR} bien fuerte que combina con el producto, luz dura con sombras marcadas, estilo moderno y divertido, colores saturados. CAMBIÁ {PRODUCTO} y {COLOR}.",
      "image": "https://picsum.photos/seed/cont34/500/560",
      "model": "Midjourney v6",
      "tags": [
        "colorful",
        "bold",
        "product",
        "vibrant"
      ]
    },
    {
      "id": "p022",
      "type": "image",
      "category": "Lifestyle y UGC",
      "title": "Aventura al Aire Libre",
      "prompt": "Foto de estilo de vida de {PRODUCTO} al aire libre en un {ESCENARIO} al amanecer, una persona activa en la escena, composición con energía, luz natural, aspiracional, formato panorámico. CAMBIÁ {PRODUCTO} y {ESCENARIO}.",
      "image": "https://picsum.photos/seed/cont35/500/440",
      "model": "Midjourney v6",
      "tags": [
        "outdoor",
        "adventure",
        "lifestyle",
        "cinematic"
      ]
    },
    {
      "id": "v006",
      "type": "video",
      "category": "Video y Motion",
      "title": "Características en Movimiento",
      "prompt": "Clip animado que muestra 3 características de {PRODUCTO} con textos que aparecen en secuencia, movimiento suave, paleta azul marino, música positiva, 10 segundos, formato 1:1 para el feed. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/cont36/500/500",
      "model": "After Effects / Runway",
      "tags": [
        "video",
        "explainer",
        "motion",
        "features"
      ]
    },
    {
      "id": "promo01",
      "type": "image",
      "category": "Promociones y Ofertas",
      "title": "Descuento Grande",
      "prompt": "Creativo de promo que anuncia '{DESCUENTO}% OFF' en letras enormes, {PRODUCTO} al costado, fondo {COLOR} con degradado y mucha energía, espacio para el código '{CODIGO}' y la fecha límite '{FECHA}', urgente y premium, formato cuadrado. CAMBIÁ {DESCUENTO}, {CODIGO}, {FECHA} y {COLOR}.",
      "image": "https://picsum.photos/seed/promo01/500/500",
      "model": "Midjourney v6 / DALL·E 3",
      "tags": [
        "promo",
        "discount",
        "editable",
        "sale"
      ]
    },
    {
      "id": "promo02",
      "type": "image",
      "category": "Promociones y Ofertas",
      "title": "Oferta Flash con Cuenta Regresiva",
      "prompt": "Banner de oferta flash urgente con un gráfico de cuenta regresiva que dice '{HORAS}H', {PRODUCTO} centrado, degradado dramático de rojo a negro, zona de texto 'TERMINA {FECHA}', que frene el scroll y enfocado en convertir. CAMBIÁ {HORAS}, {FECHA} y los colores.",
      "image": "https://picsum.photos/seed/promo02/500/560",
      "model": "DALL·E 3",
      "tags": [
        "promo",
        "flash-sale",
        "urgency",
        "editable"
      ]
    },
    {
      "id": "promo03",
      "type": "image",
      "category": "Promociones y Ofertas",
      "title": "Oferta de Temporada",
      "prompt": "Creativo de oferta para {TEMPORADA} de {PRODUCTO}, decoración y objetos del tema, paleta festiva y cálida, espacio claro para el título '{TITULAR}' y la oferta '{OFERTA}', clima alegre y premium. CAMBIÁ {TEMPORADA}, {TITULAR} y {OFERTA}.",
      "image": "https://picsum.photos/seed/promo03/500/520",
      "model": "Midjourney v6",
      "tags": [
        "promo",
        "seasonal",
        "holiday",
        "editable"
      ]
    },
    {
      "id": "promo04",
      "type": "image",
      "category": "Promociones y Ofertas",
      "title": "Oferta 2x1",
      "prompt": "Imagen de promo 2x1 limpia mostrando dos unidades de {PRODUCTO}, una insignia grande de 'LLEVÁ 2 PAGÁ 1', fondo {COLOR} alegre, espacio para la letra chica y el CTA, listo para retail. CAMBIÁ la oferta, {PRODUCTO} y {COLOR}.",
      "image": "https://picsum.photos/seed/promo04/500/500",
      "model": "DALL·E 3",
      "tags": [
        "promo",
        "bogo",
        "offer",
        "editable"
      ]
    },
    {
      "id": "promo05",
      "type": "image",
      "category": "Promociones y Ofertas",
      "title": "Banner de Envío Gratis",
      "prompt": "Banner ancho y simple con un ícono de camión y el título 'ENVÍO GRATIS desde {MONTO}', fondo azul marino minimalista, confiable y limpio, con espacio para un botón. CAMBIÁ {MONTO}, colores e ícono.",
      "image": "https://picsum.photos/seed/promo05/500/360",
      "model": "DALL·E 3",
      "tags": [
        "promo",
        "shipping",
        "banner",
        "editable"
      ]
    },
    {
      "id": "promo06",
      "type": "image",
      "category": "Promociones y Ofertas",
      "title": "Combo con Descuento",
      "prompt": "Foto de promo de un combo que agrupa {LISTA_PRODUCTOS} con una insignia de 'COMBO -{DESCUENTO}%', estilo coherente, luz de estudio suave, composición enfocada en el ahorro. CAMBIÁ {LISTA_PRODUCTOS} y {DESCUENTO}.",
      "image": "https://picsum.photos/seed/promo06/500/540",
      "model": "Midjourney v6",
      "tags": [
        "promo",
        "bundle",
        "value",
        "editable"
      ]
    },
    {
      "id": "promo07",
      "type": "text",
      "category": "Promociones y Ofertas",
      "title": "Caption de Promo con Código",
      "prompt": "Escribí 3 captions que anuncien '{OFERTA}' en {PRODUCTO}, cada uno con urgencia, el código '{CODIGO}' y un CTA a '{ACCION}'. Menos de 150 caracteres, con 3 hashtags. Voz de marca: {VOZ}. CAMBIÁ {OFERTA}, {CODIGO}, {ACCION} y {VOZ}.",
      "image": "https://picsum.photos/seed/promo07/500/480",
      "model": "GPT-4o / Claude",
      "tags": [
        "promo",
        "caption",
        "code",
        "editable"
      ]
    },
    {
      "id": "promo08",
      "type": "text",
      "category": "Promociones y Ofertas",
      "title": "Email de Oferta (completo)",
      "prompt": "Escribí un email de promo para '{OFERTA}' en {PRODUCTO}: asunto, intro de 2 frases con urgencia, 3 bullets de beneficios, el código '{CODIGO}' y el texto del botón. Fecha límite '{FECHA}'. Tono: {VOZ}. CAMBIÁ los datos entre llaves.",
      "image": "https://picsum.photos/seed/promo08/500/520",
      "model": "GPT-4o / Claude",
      "tags": [
        "promo",
        "email",
        "campaign",
        "editable"
      ]
    },
    {
      "id": "ad010",
      "type": "image",
      "category": "Creativos para Ads",
      "title": "Anuncio Problema → Solución",
      "prompt": "Anuncio de dos partes: una muestra la frustración de {PROBLEMA}, la otra el alivio con {PRODUCTO}, contraste visual claro, espacio para el título, formato para el feed de Meta. CAMBIÁ {PROBLEMA} y {PRODUCTO}.",
      "image": "https://picsum.photos/seed/ad10/500/500",
      "model": "DALL·E 3",
      "tags": [
        "ad",
        "problem-solution",
        "editable",
        "conversion"
      ]
    },
    {
      "id": "ad011",
      "type": "image",
      "category": "Creativos para Ads",
      "title": "Anuncio tipo Captura UGC",
      "prompt": "Anuncio que parece una captura de celular: {PRODUCTO} sostenido por una persona real, texto casual encima '{FRASE}', con pequeñas imperfecciones para que se vea orgánico en el feed. CAMBIÁ {FRASE} y {PRODUCTO}.",
      "image": "https://picsum.photos/seed/ad11/500/640",
      "model": "Midjourney v6 --style raw",
      "tags": [
        "ad",
        "ugc",
        "native",
        "editable"
      ]
    },
    {
      "id": "ad012",
      "type": "image",
      "category": "Creativos para Ads",
      "title": "Comparación Nosotros vs Otros",
      "prompt": "Anuncio comparativo con una tabla de dos columnas: la de '{PRODUCTO}' con tildes verdes y la de 'Otros' con cruces grises, filas con las características '{CARACTERISTICAS}', claro y convincente. CAMBIÁ {CARACTERISTICAS} y {PRODUCTO}.",
      "image": "https://picsum.photos/seed/ad12/500/520",
      "model": "DALL·E 3",
      "tags": [
        "ad",
        "comparison",
        "editable",
        "positioning"
      ]
    },
    {
      "id": "ad013",
      "type": "image",
      "category": "Creativos para Ads",
      "title": "Recordatorio (Retargeting)",
      "prompt": "Anuncio amable de recordatorio para {PRODUCTO} con un mensaje tipo '{TITULAR}', colores suaves, un pequeño incentivo '{INCENTIVO}', tono de recordatorio, para el feed. CAMBIÁ {TITULAR}, {INCENTIVO} y {PRODUCTO}.",
      "image": "https://picsum.photos/seed/ad13/500/500",
      "model": "DALL·E 3",
      "tags": [
        "ad",
        "retargeting",
        "editable",
        "funnel"
      ]
    },
    {
      "id": "ad014",
      "type": "text",
      "category": "Creativos para Ads",
      "title": "Generador de Ángulos de Ads",
      "prompt": "Dame 8 ángulos distintos para anunciar {PRODUCTO} a {AUDIENCIA}: dolor, deseo, curiosidad, prueba social, miedo a perdérselo, autoridad, historia y objeciones. Una línea cada uno. CAMBIÁ {PRODUCTO} y {AUDIENCIA}.",
      "image": "https://picsum.photos/seed/ad14/500/480",
      "model": "GPT-4o / Claude",
      "tags": [
        "ad",
        "angles",
        "strategy",
        "editable"
      ]
    },
    {
      "id": "ugc07",
      "type": "image",
      "category": "Lifestyle y UGC",
      "title": "Momento de Unboxing",
      "prompt": "Foto real (estilo usuario) abriendo el paquete de {PRODUCTO}, las manos abriendo la caja, luz de casa, emoción genuina, un poco de desorden real, estética de foto de celular. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/ugc07/500/620",
      "model": "Midjourney v6 --style raw",
      "tags": [
        "ugc",
        "unboxing",
        "authentic",
        "editable"
      ]
    },
    {
      "id": "ugc08",
      "type": "image",
      "category": "Lifestyle y UGC",
      "title": "Get Ready With Me",
      "prompt": "Foto tipo usuario con {PRODUCTO} sobre la mesada del baño o tocador, estilo selfie al espejo, luz cálida de mañana, casual y aspiracional. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/ugc08/500/660",
      "model": "Midjourney v6 --style raw",
      "tags": [
        "ugc",
        "grwm",
        "beauty",
        "editable"
      ]
    },
    {
      "id": "ugc09",
      "type": "image",
      "category": "Lifestyle y UGC",
      "title": "Testimonio tipo Chat",
      "prompt": "Imagen tipo usuario que parece una conversación de mensajes de texto elogiando {PRODUCTO}, burbujas de chat realistas con la frase '{FRASE}', se lee rápido y genera confianza. CAMBIÁ {FRASE} y {PRODUCTO}.",
      "image": "https://picsum.photos/seed/ugc09/500/640",
      "model": "DALL·E 3",
      "tags": [
        "ugc",
        "testimonial",
        "screenshot",
        "editable"
      ]
    },
    {
      "id": "ugc10",
      "type": "video",
      "category": "Video y Motion",
      "title": "Clip UGC de Unboxing",
      "prompt": "Video vertical 9:16 estilo UGC abriendo {PRODUCTO}, cámara en mano, luz de casa, reacciones genuinas, revelaciones rápidas, texto en pantalla '{TITULAR}', ritmo tipo TikTok, 15 segundos. CAMBIÁ {PRODUCTO} y {TITULAR}.",
      "image": "https://picsum.photos/seed/ugc10/500/700",
      "model": "Runway Gen-3 / Pika",
      "tags": [
        "ugc",
        "video",
        "unboxing",
        "editable"
      ]
    },
    {
      "id": "ugc11",
      "type": "text",
      "category": "Lifestyle y UGC",
      "title": "Brief para Creador UGC",
      "prompt": "Escribí un brief para un creador de contenido (UGC) sobre {PRODUCTO}: opciones de gancho inicial, 3 puntos para mencionar, qué hacer y qué no, tomas necesarias, CTA y el tono {VOZ}. Que sea fácil de leer. CAMBIÁ {PRODUCTO} y {VOZ}.",
      "image": "https://picsum.photos/seed/ugc11/500/500",
      "model": "GPT-4o / Claude",
      "tags": [
        "ugc",
        "brief",
        "creator",
        "editable"
      ]
    },
    {
      "id": "ugc12",
      "type": "text",
      "category": "Lifestyle y UGC",
      "title": "3 Ganchos para UGC",
      "prompt": "Escribí 3 ganchos (primeras frases) para un video UGC de {PRODUCTO} con voz auténtica de creador: uno desde el problema, uno desde la curiosidad y uno desde el resultado. Menos de 10 palabras cada uno, como hablado. CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/ugc12/500/470",
      "model": "GPT-4o / Claude",
      "tags": [
        "ugc",
        "hooks",
        "video",
        "editable"
      ]
    },
    {
      "id": "ad015",
      "type": "image",
      "category": "Creativos para Ads",
      "title": "Anuncio con Frase de Cliente",
      "prompt": "Anuncio construido alrededor de una frase grande de un cliente '{FRASE}', 5 estrellas, espacio para foto y nombre '{NOMBRE}', diseño limpio y confiable, basado en prueba social. CAMBIÁ {FRASE} y {NOMBRE}.",
      "image": "https://picsum.photos/seed/ad15/500/500",
      "model": "DALL·E 3",
      "tags": [
        "ad",
        "testimonial",
        "social-proof",
        "editable"
      ]
    },
    {
      "id": "ad016",
      "type": "image",
      "category": "Creativos para Ads",
      "title": "Anuncio para Captar Datos",
      "prompt": "Anuncio que ofrece un '{IMAN}' gratis relacionado a {PRODUCTO}, diseño claro enfocado en el valor, botón bien visible de 'Descargar gratis', profesional y creíble. CAMBIÁ {IMAN} y {PRODUCTO}.",
      "image": "https://picsum.photos/seed/ad16/500/520",
      "model": "DALL·E 3",
      "tags": [
        "ad",
        "lead-gen",
        "b2b",
        "editable"
      ]
    },
    {
      "id": "promo09",
      "type": "image",
      "category": "Promociones y Ofertas",
      "title": "Oferta para Clientes Nuevos",
      "prompt": "Promo de bienvenida para quienes compran {PRODUCTO} por primera vez, título amable '{DESCUENTO}% off en tu primera compra', paleta cálida y acogedora, zona para el código '{CODIGO}', cercano y premium. CAMBIÁ {DESCUENTO} y {CODIGO}.",
      "image": "https://picsum.photos/seed/promo09/500/500",
      "model": "DALL·E 3",
      "tags": [
        "promo",
        "acquisition",
        "welcome",
        "editable"
      ]
    },
    {
      "id": "promo10",
      "type": "image",
      "category": "Promociones y Ofertas",
      "title": "Recordatorio de Última Oportunidad",
      "prompt": "Promo de mucha urgencia 'ÚLTIMA OPORTUNIDAD' para {PRODUCTO}, título que avisa que la oferta vence, motivo de reloj corriendo, mucho contraste, termina '{FECHA}', espacio para el CTA, para cerrar ventas. CAMBIÁ {FECHA} y {PRODUCTO}.",
      "image": "https://picsum.photos/seed/promo10/500/540",
      "model": "DALL·E 3",
      "tags": [
        "promo",
        "urgency",
        "last-chance",
        "editable"
      ]
    },
    {
      "id": "com01",
      "type": "image",
      "category": "E-commerce y Retail",
      "title": "Foto Fondo Blanco para Marketplace",
      "prompt": "Foto de producto profesional de {PRODUCTO} en {MATERIAL}, centrado sobre un fondo blanco puro sin textura ni sombras. Luz de softbox grande desde arriba para una luz pareja y sin sombras, con un rebote a la izquierda. Todo el producto enfocado y nítido, tomado de frente, ocupando ~70% del alto. Sin objetos ni reflejos. Foto realista 8K, lista para la imagen principal de Amazon. --ar 1:1 --style raw --v 6.1 · CAMBIÁ {PRODUCTO} y {MATERIAL}.",
      "image": "https://picsum.photos/seed/com01/500/560",
      "model": "Midjourney v6.1",
      "tags": [
        "ecommerce",
        "amazon",
        "white-bg",
        "listing",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com02",
      "type": "image",
      "category": "E-commerce y Retail",
      "title": "Hero Oscuro Premium",
      "prompt": "Foto de producto de lujo de {PRODUCTO} sobre una superficie negra pulida que lo refleja debajo. Una sola luz dura y angosta desde la derecha crea un borde brillante de ese lado mientras el otro se hunde en sombra, con una luz fría sutil que lo separa del fondo casi negro. Cinematográfico y premium, sin objetos. Foto realista 8K de lujo. --ar 3:4 --style raw --v 6.1 · CAMBIÁ {PRODUCTO} y el color de marca.",
      "image": "https://picsum.photos/seed/com02/500/640",
      "model": "Midjourney v6.1",
      "tags": [
        "ecommerce",
        "luxury",
        "premium",
        "dark",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com03",
      "type": "image",
      "category": "E-commerce y Retail",
      "title": "Set de Regalo desde Arriba",
      "prompt": "Foto flat lay tomada desde arriba de {LISTA_PRODUCTOS} acomodados de forma equilibrada sobre una superficie de lino {COLOR}, con objetos naturales ({PROPS}) alrededor. Todas las etiquetas mirando a cámara y legibles. Luz suave y pareja de ventana, con sombras muy sutiles. Paleta neutra y cálida. Foto realista tipo catálogo. --ar 1:1 --style raw --v 6.1 · CAMBIÁ {LISTA_PRODUCTOS}, {COLOR} y {PROPS}.",
      "image": "https://picsum.photos/seed/com03/500/500",
      "model": "Midjourney v6.1",
      "tags": [
        "ecommerce",
        "flatlay",
        "gift-set",
        "catalog",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com04",
      "type": "image",
      "category": "E-commerce y Retail",
      "title": "Comida/Bebida con Luz Dorada",
      "prompt": "Foto de estilo de vida al aire libre de {PRODUCTO} sobre una mesa de madera gastada con la luz dorada del atardecer. El sol desde atrás a la izquierda ilumina el producto para que brille cálido; fondo verde desenfocado con destellos suaves. Objetos casuales ({PROPS}) al lado. Cámara ~20° arriba. Foto realista de comida/bebida. --ar 4:5 --style raw --v 6.1 · CAMBIÁ {PRODUCTO} y {PROPS}.",
      "image": "https://picsum.photos/seed/com04/500/600",
      "model": "Midjourney v6.1",
      "tags": [
        "ecommerce",
        "food",
        "beverage",
        "golden-hour",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com05",
      "type": "image",
      "category": "E-commerce y Retail",
      "title": "Ropa desde Arriba (Flat Lay)",
      "prompt": "Flat lay de ecommerce de {PRENDA} en {COLOR} apoyada perfectamente plana, de frente, sobre una superficie blanca lisa, con las mangas extendidas para ver toda la forma. Cuello, puños y ruedo nítidos; textura de la tela visible con caída natural. Luz LED grande desde arriba, pareja y sin sombras. Color fiel, sin objetos ni manos. Foto realista 8K, lista para marketplace. --ar 1:1 --style raw --v 6.1 · CAMBIÁ {PRENDA} y {COLOR}.",
      "image": "https://picsum.photos/seed/com05/500/500",
      "model": "Midjourney v6.1",
      "tags": [
        "ecommerce",
        "fashion",
        "apparel",
        "flatlay",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com06",
      "type": "image",
      "category": "E-commerce y Retail",
      "title": "Banner con Espacio para Texto",
      "prompt": "Foto de producto ancha 16:9 pensada como banner de web con espacio libre a propósito. {PRODUCTO} en el tercio derecho, inclinado ~15°, sobre una superficie {SUPERFICIE}. Luz fuerte desde arriba con una sombra limpia que da profundidad; los dos tercios de la izquierda quedan como fondo {COLOR} limpio sin objetos — espacio para el título y el botón. Paleta: {COLOR}, acento de marca, negro mate. Foto realista, formato banner. --ar 16:9 --style raw --v 6.1 · CAMBIÁ {PRODUCTO}, {SUPERFICIE} y {COLOR}.",
      "image": "https://picsum.photos/seed/com06/500/300",
      "model": "Midjourney v6.1",
      "tags": [
        "ecommerce",
        "banner",
        "hero",
        "negative-space",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com07",
      "type": "image",
      "category": "E-commerce y Retail",
      "title": "Detalle Macro de Material",
      "prompt": "Foto macro (muy de cerca) de {PRODUCTO} tomada a 45° con una luz dura y angosta rozando la superficie desde abajo a la izquierda, resaltando cada detalle de textura, costura o terminación para que se sienta al tacto. Mostrá el trabajo artesanal. Paleta cálida con mucho contraste, producto nítido. Foto realista macro. --ar 1:1 --style raw --v 6.1 · CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/com07/500/500",
      "model": "Midjourney v6.1",
      "tags": [
        "ecommerce",
        "macro",
        "texture",
        "craftsmanship",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com08",
      "type": "image",
      "category": "E-commerce y Retail",
      "title": "Caja de Regalo de Temporada",
      "prompt": "Foto festiva con estética de {TEMPORADA}. El protagonista es una caja de regalo premium en {COLOR} con logo dorado, la tapa abierta a 45° mostrando el interior ({CONTENIDO}). Brillo cálido de velas de los objetos alrededor ({PROPS}) sobre una tela de seda, fondo totalmente oscuro para contraste. Paleta: {COLOR}, dorado, ámbar cálido. Foto realista festiva. --ar 4:5 --style raw --v 6.1 · CAMBIÁ {TEMPORADA}, {COLOR}, {CONTENIDO} y {PROPS}.",
      "image": "https://picsum.photos/seed/com08/500/620",
      "model": "Midjourney v6.1",
      "tags": [
        "ecommerce",
        "seasonal",
        "gift",
        "hamper",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com09",
      "type": "image",
      "category": "E-commerce y Retail",
      "title": "Producto Tech Fondo Blanco",
      "prompt": "Foto muy limpia y precisa de {PRODUCTO} centrado sobre un fondo blanco puro de estudio, sin tono ni sombra. Iluminación de estudio de cuatro puntos (softbox principal arriba-izquierda, softbox de apoyo arriba-derecha para un brillo suave en el borde, luz atrás a nivel del piso para separar la base, y un rebote a la izquierda) para que el producto flote en blanco puro. Si tiene pantalla, legible y nítida. Foto realista 8K, lista para retail. --ar 2:3 --style raw --v 6.1 · CAMBIÁ {PRODUCTO}.",
      "image": "https://picsum.photos/seed/com09/500/660",
      "model": "Midjourney v6.1",
      "tags": [
        "ecommerce",
        "tech",
        "clinical",
        "white-bg",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com10",
      "type": "image",
      "category": "E-commerce y Retail",
      "title": "Producto en Modelo",
      "prompt": "Foto comercial de una persona usando o llevando {PRODUCTO} de forma natural, {ESCENARIO}, luz principal suave y favorecedora con una luz de contorno sutil, fondo desenfocado que deja el producto nítido, expresión auténtica pero aspiracional, composición limpia con lugar para texto. Paleta según {MARCA_COLOR}. Foto realista comercial. --ar 4:5 --style raw --v 6.1 · CAMBIÁ {PRODUCTO}, {ESCENARIO} y {MARCA_COLOR}.",
      "image": "https://picsum.photos/seed/com10/500/620",
      "model": "Midjourney v6.1",
      "tags": [
        "ecommerce",
        "on-model",
        "fashion",
        "lifestyle",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com11",
      "type": "text",
      "category": "Creativos para Ads",
      "title": "10 Títulos de Beneficio (menos de 10 palabras)",
      "prompt": "Escribí 10 títulos llamativos para un anuncio de Facebook de {PRODUCTO} que hablen del beneficio o la transformación (no de las características). Cada uno con menos de 10 palabras, que generen curiosidad o urgencia, para {AUDIENCIA}. En lista numerada. CAMBIÁ {PRODUCTO} y {AUDIENCIA}.",
      "image": "https://picsum.photos/seed/com11/500/470",
      "model": "GPT-4o / Claude",
      "tags": [
        "ad",
        "headlines",
        "benefit",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com12",
      "type": "text",
      "category": "Creativos para Ads",
      "title": "Anuncio Historia de Cliente",
      "prompt": "Escribí un anuncio de Facebook que cuente una historia breve y creíble de un cliente de {PRODUCTO}. Empezá con su problema, mostrá el cambio con {PRODUCTO} y cerrá con un resultado concreto ({RESULTADO}). Charlado, 3 párrafos cortos, con CTA a {ACCION}. CAMBIÁ {PRODUCTO}, {RESULTADO} y {ACCION}.",
      "image": "https://picsum.photos/seed/com12/500/500",
      "model": "GPT-4o / Claude",
      "tags": [
        "ad",
        "story",
        "social-proof",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com13",
      "type": "text",
      "category": "Creativos para Ads",
      "title": "Anuncio que Responde Objeciones",
      "prompt": "Identificá las 3 dudas más comunes que {AUDIENCIA} tiene sobre {PRODUCTO} (precio, confianza, esfuerzo) y escribí un anuncio que las responda de una y las convierta en razones para comprar. Cerrá con un CTA de bajo riesgo (garantía o prueba gratis). CAMBIÁ {PRODUCTO} y {AUDIENCIA}.",
      "image": "https://picsum.photos/seed/com13/500/520",
      "model": "GPT-4o / Claude",
      "tags": [
        "ad",
        "objections",
        "trust",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com14",
      "type": "text",
      "category": "Creativos para Ads",
      "title": "Anuncio que Toca el Dolor",
      "prompt": "Escribí 3 versiones de anuncio para {PRODUCTO}: nombrá la frustración puntual de {AUDIENCIA}, hacela sentir con un ejemplo del día a día y presentá {PRODUCTO} como la solución. Charlado, pensado para celular, cada uno con un CTA claro. CAMBIÁ {PRODUCTO} y {AUDIENCIA}.",
      "image": "https://picsum.photos/seed/com14/500/480",
      "model": "GPT-4o / Claude",
      "tags": [
        "ad",
        "pain-point",
        "pas",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com15",
      "type": "text",
      "category": "Creativos para Ads",
      "title": "Anuncio de Búsqueda de Google",
      "prompt": "Creá un anuncio de búsqueda de Google para {PRODUCTO}: 15 títulos (máx. 30 caracteres) y 4 descripciones (máx. 90 caracteres). Mezclá beneficio, oferta, confianza y CTA; incluí la palabra '{PALABRA_CLAVE}' en varios títulos. Devolvelo separado en 'Títulos' y 'Descripciones'. CAMBIÁ {PRODUCTO} y {PALABRA_CLAVE}.",
      "image": "https://picsum.photos/seed/com15/500/460",
      "model": "GPT-4o / Claude",
      "tags": [
        "ad",
        "google",
        "search-ad",
        "sem",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com16",
      "type": "text",
      "category": "Textos y Captions",
      "title": "Descripción de Producto (Amazon/Shopify)",
      "prompt": "Escribí una descripción de producto para ecommerce de {PRODUCTO} pensada para SEO: un gancho de 2 frases enfocado en el beneficio, un párrafo corto sobre qué lo hace diferente y 5 bullets de característica → beneficio. Incluí de forma natural las palabras {PALABRAS_CLAVE}. Convincente, confiable, voz {VOZ}. CAMBIÁ {PRODUCTO}, {PALABRAS_CLAVE} y {VOZ}.",
      "image": "https://picsum.photos/seed/com16/500/540",
      "model": "GPT-4o / Claude",
      "tags": [
        "copy",
        "product-description",
        "seo",
        "ecommerce",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com17",
      "type": "text",
      "category": "Textos y Captions",
      "title": "Bullets Característica → Beneficio",
      "prompt": "Convertí estas características de {PRODUCTO} — {CARACTERISTICAS} — en 5 bullets de 'característica → beneficio' que arranquen por el resultado para el cliente, no por el dato técnico. Cada uno de una línea, concreto y sin tecnicismos. CAMBIÁ {PRODUCTO} y {CARACTERISTICAS}.",
      "image": "https://picsum.photos/seed/com17/500/470",
      "model": "GPT-4o / Claude",
      "tags": [
        "copy",
        "bullets",
        "benefits",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com18",
      "type": "text",
      "category": "Textos y Captions",
      "title": "Emails de Carrito Abandonado",
      "prompt": "Escribí una secuencia de 3 emails de carrito abandonado para {PRODUCTO}: (1) recordatorio amable, (2) responder la duda principal + prueba social, (3) urgencia con un incentivo '{INCENTIVO}'. Para cada uno: asunto, texto de vista previa, 2-3 frases cortas y el texto del botón. Tono: {VOZ}. CAMBIÁ {PRODUCTO}, {INCENTIVO} y {VOZ}.",
      "image": "https://picsum.photos/seed/com18/500/520",
      "model": "GPT-4o / Claude",
      "tags": [
        "copy",
        "email",
        "abandoned-cart",
        "crm",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com19",
      "type": "text",
      "category": "Creativos para Ads",
      "title": "Guion de Anuncio UGC",
      "prompt": "Escribí un guion de anuncio estilo UGC de 30 segundos para {PRODUCTO} con voz de cliente real: un gancho de 3 segundos, un medio corto con un resultado concreto, y un CTA casual. Incluí indicaciones de texto en pantalla y de tomas entre corchetes. Tono natural, poco vendedor. CAMBIÁ {PRODUCTO} y {RESULTADO}.",
      "image": "https://picsum.photos/seed/com19/500/640",
      "model": "GPT-4o / Claude",
      "tags": [
        "ad",
        "ugc",
        "script",
        "video",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com20",
      "type": "text",
      "category": "Promociones y Ofertas",
      "title": "Kit de Campaña de Promo",
      "prompt": "Creá un mini kit de campaña para '{OFERTA}' en {PRODUCTO}: 3 títulos de anuncio, 1 texto principal de anuncio, 1 caption de Instagram, 1 asunto de email + cuerpo de 2 líneas, y 1 SMS (menos de 160 caracteres). Incluí el código '{CODIGO}' y la fecha '{FECHA}', con la misma voz {VOZ}. CAMBIÁ los datos entre llaves.",
      "image": "https://picsum.photos/seed/com20/500/500",
      "model": "GPT-4o / Claude",
      "tags": [
        "promo",
        "campaign",
        "multichannel",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "com21",
      "type": "image",
      "category": "E-commerce y Retail",
      "title": "Set de Fotos Multi-Ángulo",
      "prompt": "Set de fotos de producto coherentes de {PRODUCTO} sobre fondo blanco puro: de frente, a 45°, de perfil y un detalle cercano de {DETALLE}. La misma luz suave y pareja desde arriba en todas las tomas para que se vean como una familia, producto nítido, sin objetos ni sombras en el fondo. Foto realista 8K, lista para marketplace. --ar 1:1 --style raw --v 6.1 · CAMBIÁ {PRODUCTO} y {DETALLE}.",
      "image": "https://picsum.photos/seed/com21/500/500",
      "model": "Midjourney v6.1",
      "tags": [
        "ecommerce",
        "multi-angle",
        "listing",
        "white-bg",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sw01",
      "type": "image",
      "category": "Streetwear y Editorial",
      "title": "Póster de Drop Streetwear",
      "prompt": "Póster de campaña de streetwear: un modelo recortado (torso) usando {PRENDA} con una gráfica vintage gastada, tomada en película 35mm con grano visible y colores apagados. Logo de {MARCA} arriba a la derecha y un logo chico arriba a la izquierda. Tipografía en capas: el nombre del producto grande abajo a la izquierda sobre un bloque negro, más datos en mayúsculas chicas ('AT / WORLDWIDE', '{TEMPORADA} 2026', 'SHIPPING', '{MARCA}.COM'). Fondo gris neutro, detalles como una cadena y un mosquetón en el {PANTALON}. Clima frío y sobrio. --ar 4:5 --style raw --v 6.1 · CAMBIÁ {PRENDA}, {MARCA}, {TEMPORADA} y {PANTALON}.",
      "image": "https://picsum.photos/seed/sw01/500/660",
      "model": "Midjourney v6.1",
      "tags": [
        "streetwear",
        "poster",
        "editorial",
        "film-grain",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sw02",
      "type": "image",
      "category": "Streetwear y Editorial",
      "title": "Detalle de Accesorios Recortado",
      "prompt": "Recorte editorial ajustado — solo cintura y cadera — mostrando {PANTALON} con detalles de herrajes: una cadena plateada gruesa, mosquetones y un clip de color. Textura de jean gastado, look de película 35mm con grano, colores apagados, luz dura direccional. Espacio libre para un texto chico. Estética de lookbook hypebeast. --ar 4:5 --style raw --v 6.1 · CAMBIÁ {PANTALON} y el color de acento.",
      "image": "https://picsum.photos/seed/sw02/500/620",
      "model": "Midjourney v6.1",
      "tags": [
        "streetwear",
        "detail",
        "accessory",
        "editorial",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sw03",
      "type": "image",
      "category": "Streetwear y Editorial",
      "title": "Primer Plano de Remera Gastada",
      "prompt": "Primer plano de una {PRENDA} de algodón grueso en {COLOR} con una gráfica estampada vintage descolorida y agrietada que dice '{TEXTO}', con las fibras y el desgaste del estampado a la vista. Luz rozante suave, textura de película con grano, color retro apagado. Se siente usada y auténtica, estética de reventa streetwear. --ar 1:1 --style raw --v 6.1 · CAMBIÁ {PRENDA}, {COLOR} y {TEXTO}.",
      "image": "https://picsum.photos/seed/sw03/500/500",
      "model": "Midjourney v6.1",
      "tags": [
        "streetwear",
        "graphic-tee",
        "vintage",
        "texture",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sw04",
      "type": "image",
      "category": "Streetwear y Editorial",
      "title": "Lookbook Cuerpo Entero",
      "prompt": "Foto de lookbook streetwear de cuerpo entero de un modelo con {CONJUNTO} contra una pared de hormigón o de color {COLOR}, pose relajada y confiada, luz natural dura con sombra marcada, grano de película 35mm, color un poco apagado. Espacio arriba o al costado para el logo y la temporada. Look coherente de campaña. --ar 4:5 --style raw --v 6.1 · CAMBIÁ {CONJUNTO} y {COLOR}.",
      "image": "https://picsum.photos/seed/sw04/500/700",
      "model": "Midjourney v6.1",
      "tags": [
        "streetwear",
        "lookbook",
        "full-body",
        "campaign",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sw05",
      "type": "image",
      "category": "Streetwear y Editorial",
      "title": "Campaña B&N de Concierto",
      "prompt": "Foto en blanco y negro con mucho contraste y grano de un show en vivo: público en silueta con las manos y los cuernos arriba, una gran instalación de luz cuadrada arriba, humo y luces de escenario. Energía documental, grano de película 35mm, negros profundos. Visual de marca-cultura con espacio para un logo o eslogan. --ar 4:5 --style raw --v 6.1 · después agregá el logo de {MARCA}.",
      "image": "https://picsum.photos/seed/sw05/500/700",
      "model": "Midjourney v6.1",
      "tags": [
        "streetwear",
        "concert",
        "b&w",
        "event",
        "culture",
        "commercial"
      ]
    },
    {
      "id": "sw06",
      "type": "image",
      "category": "Streetwear y Editorial",
      "title": "Energía de Público",
      "prompt": "Foto en POV desde adentro de un público apretado en un {EVENTO}, brazos arriba, movimiento y grano, luz cálida de escenario atravesando el humo, energía cruda y espontánea. Color cinematográfico apagado con luces cálidas, se siente como grabado con un celular en la multitud. Ideal para contenido de hype. --ar 4:5 --style raw --v 6.1 · CAMBIÁ {EVENTO}.",
      "image": "https://picsum.photos/seed/sw06/500/660",
      "model": "Midjourney v6.1",
      "tags": [
        "streetwear",
        "crowd",
        "hype",
        "event",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sw07",
      "type": "image",
      "category": "Streetwear y Editorial",
      "title": "Objeto con Frase Fuerte",
      "prompt": "Primer plano cinematográfico de una mano sosteniendo {OBJETO} que muestra un texto blanco en mayúsculas '{TEXTO}', color cálido y oscuro con sombras profundas y grano de película, poca profundidad de foco, clima callejero aspiracional. Contenido de mensaje fuerte para redes. --ar 4:5 --style raw --v 6.1 · CAMBIÁ {OBJETO} (celular/cartel/tarjeta) y {TEXTO}.",
      "image": "https://picsum.photos/seed/sw07/500/640",
      "model": "Midjourney v6.1",
      "tags": [
        "motivational",
        "statement",
        "typography",
        "gritty",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sw08",
      "type": "image",
      "category": "Streetwear y Editorial",
      "title": "POV Callejero Espontáneo",
      "prompt": "Foto espontánea de street-style en POV de una persona con {CONJUNTO} caminando por {CIUDAD} al atardecer, movimiento en la toma, reflejos de neón y luces de autos, grano 35mm, color cinematográfico. Se ve real, no armado, editorial streetwear. --ar 4:5 --style raw --v 6.1 · CAMBIÁ {CONJUNTO} y {CIUDAD}.",
      "image": "https://picsum.photos/seed/sw08/500/680",
      "model": "Midjourney v6.1",
      "tags": [
        "streetwear",
        "street-style",
        "candid",
        "cinematic",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sw09",
      "type": "image",
      "category": "Streetwear y Editorial",
      "title": "Ciudad de Noche con Neón",
      "prompt": "Foto de campaña streetwear de noche de un modelo con {CONJUNTO} iluminado por carteles de neón {COLOR}, reflejos en el asfalto mojado, humo, look de película con grano, mucho contraste con acentos de neón saturados sobre sombra profunda. Clima ciber-callejero. --ar 4:5 --style raw --v 6.1 · CAMBIÁ {CONJUNTO} y {COLOR}.",
      "image": "https://picsum.photos/seed/sw09/500/700",
      "model": "Midjourney v6.1",
      "tags": [
        "streetwear",
        "neon",
        "night",
        "cinematic",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sw10",
      "type": "image",
      "category": "Streetwear y Editorial",
      "title": "Póster Brutalista de Tipografía Grande",
      "prompt": "Póster de publicidad brutalista: un título en tipografía condensada bold gigante '{TEXTO}' que domina el diseño, una foto chica y granulada en dos tonos de {PRODUCTO}, grilla cruda, paleta mínima de {COLOR} y negro. Energía de lanzamiento de alta moda, listo para imprimir. --ar 4:5 · CAMBIÁ {TEXTO}, {PRODUCTO} y {COLOR}.",
      "image": "https://picsum.photos/seed/sw10/500/660",
      "model": "Midjourney v6.1 / Ideogram",
      "tags": [
        "streetwear",
        "typography",
        "poster",
        "brutalist",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sw11",
      "type": "image",
      "category": "Streetwear y Editorial",
      "title": "Y2K Retro Gastado",
      "prompt": "Editorial streetwear estilo Y2K de {CONJUNTO}, foto con flash quemado, colores retro lavados, algo de movimiento y mucho grano, estética de cámara digital de principios de los 2000. Clima nostálgico y divertido, con espacio para un logo chico. --ar 4:5 --style raw --v 6.1 · CAMBIÁ {CONJUNTO}.",
      "image": "https://picsum.photos/seed/sw11/500/640",
      "model": "Midjourney v6.1",
      "tags": [
        "streetwear",
        "y2k",
        "retro",
        "flash",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sw12",
      "type": "image",
      "category": "Streetwear y Editorial",
      "title": "Acción de Cultura Skate",
      "prompt": "Foto de acción de un skater en pleno truco con {CONJUNTO} en un {LUGAR} urbano, movimiento, ángulo bajo con ojo de pez, película con grano, color apagado con destello de sol. Energía cruda y auténtica de cultura skate para una campaña streetwear. --ar 4:5 --style raw --v 6.1 · CAMBIÁ {CONJUNTO} y {LUGAR}.",
      "image": "https://picsum.photos/seed/sw12/500/680",
      "model": "Midjourney v6.1",
      "tags": [
        "streetwear",
        "skate",
        "action",
        "culture",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sw13",
      "type": "image",
      "category": "Streetwear y Editorial",
      "title": "Bodegón sobre Asfalto",
      "prompt": "Bodegón callejero de {PRODUCTO} apoyado sobre asfalto mojado y agrietado o una reja de metal, luz de flash dura con sombra marcada, textura de película con grano, clima industrial y crudo, color frío apagado con un color de acento. Foto de producto con actitud. --ar 4:5 --style raw --v 6.1 · CAMBIÁ {PRODUCTO} y el color de acento.",
      "image": "https://picsum.photos/seed/sw13/500/620",
      "model": "Midjourney v6.1",
      "tags": [
        "streetwear",
        "still-life",
        "product",
        "gritty",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sw14",
      "type": "image",
      "category": "Streetwear y Editorial",
      "title": "Póster Duotono de Alto Contraste",
      "prompt": "Póster de campaña en duotono de {SUJETO} en {COLOR} y negro, mucho grano, textura de semitono, composición mínima y fuerte con una sola línea de texto '{TEXTO}'. Estética de fanzine / underground streetwear, impactante y listo para imprimir. --ar 4:5 · CAMBIÁ {SUJETO}, {COLOR} y {TEXTO}.",
      "image": "https://picsum.photos/seed/sw14/500/660",
      "model": "Midjourney v6.1 / Ideogram",
      "tags": [
        "streetwear",
        "duotone",
        "poster",
        "zine",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sw15",
      "type": "image",
      "category": "Streetwear y Editorial",
      "title": "Placa Motivacional",
      "prompt": "Gráfica motivacional: un texto grande en mayúsculas '{TEXTO}' centrado sobre un fondo oscuro y texturado con grano y una imagen tenue de {SUJETO} detrás, color cálido cinematográfico. Energía de placa para compartir, para un público con ambición. --ar 4:5 · CAMBIÁ {TEXTO} y {SUJETO}.",
      "image": "https://picsum.photos/seed/sw15/500/600",
      "model": "DALL·E 3 / Ideogram",
      "tags": [
        "motivational",
        "quote",
        "statement",
        "social",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sw16",
      "type": "image",
      "category": "Streetwear y Editorial",
      "title": "Grilla Teaser de Drop",
      "prompt": "Teaser de drop streetwear en una grilla de 3 paneles tipo hoja de contactos: un detalle de la gráfica de {PRODUCTO}, una toma de modelo recortada y una textura, unidos por grano de película, color apagado y líneas blancas finas con datos chicos ('{TEMPORADA} 2026', 'DROP 01', '{MARCA}.COM'). Anuncio de lanzamiento coherente. --ar 4:5 --style raw --v 6.1 · CAMBIÁ {PRODUCTO}, {TEMPORADA} y {MARCA}.",
      "image": "https://picsum.photos/seed/sw16/500/660",
      "model": "Midjourney v6.1",
      "tags": [
        "streetwear",
        "teaser",
        "grid",
        "drop",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sw17",
      "type": "text",
      "category": "Streetwear y Editorial",
      "title": "Caption de Anuncio de Drop",
      "prompt": "Escribí 3 captions para anunciar un drop de streetwear de '{PRODUCTO}' de {MARCA}, {TEMPORADA} 2026. Voz segura, sobria, de cultura (nada corporativo). Cada uno de menos de 140 caracteres, una línea de hype + datos del lanzamiento, más 3 hashtags. CAMBIÁ {PRODUCTO}, {MARCA} y {TEMPORADA}.",
      "image": "https://picsum.photos/seed/sw17/500/470",
      "model": "GPT-4o / Claude",
      "tags": [
        "streetwear",
        "caption",
        "drop",
        "copy",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sw18",
      "type": "text",
      "category": "Streetwear y Editorial",
      "title": "Texto de Lanzamiento con Hype",
      "prompt": "Escribí el texto de lanzamiento para un drop limitado '{PRODUCTO}' de {MARCA}: una frase principal de 5 palabras, una historia de 2 frases sobre la inspiración, una línea de escasez (unidades limitadas, {FECHA}) y un CTA. Tono: cool, mínimo, de cultura. CAMBIÁ {PRODUCTO}, {MARCA} y {FECHA}.",
      "image": "https://picsum.photos/seed/sw18/500/500",
      "model": "GPT-4o / Claude",
      "tags": [
        "streetwear",
        "launch",
        "hype",
        "copy",
        "editable",
        "commercial"
      ]
    },
    {
      "id": "sys01",
      "type": "text",
      "category": "Sistemas de IA y Automatización",
      "title": "Veo 3 · Carrusel → YAML Engineer",
      "prompt": "Eres un ingeniero de Veo 3 de Google DeepMind. Convertí la descripción de un carrusel en un prompt estructurado YAML para Veo 3 con dos secciones: metadata y timeline. Respetá estética, narrativa y contenido del carrusel. Reglas: salida ÚNICA en YAML válido, sin texto extra; integrá CTA, hook, value, context, interrupt, open loop, explanation y el slide-by-slide; mapeá cada slide a un bloque del timeline; mantené continuidad visual; no introduzcas marcas ajenas. Defaults si faltan: base_style 'cinematic, premium tech, photorealistic, 4K, minimalistic'; aspect_ratio '9:16'; duration 12s; color_palette ['#1C1C1E','#F5F5F5','#005F6B','#A1A1A1']; lighting 'soft diffused studio'; negatives ['no cartoon','no oversaturation','no extra objects','no third-party logos','no distorted anatomy','no unreadable text']. Timeline: segmentos contiguos 'MM:SS-MM:SS', cada item con sequence, timestamp, action (verbos + movimientos de cámara) y audio; CTA en el último beat. INPUT del carrusel entre <<< y >>>. Devolvé SOLO el YAML.",
      "image": "https://picsum.photos/seed/sys01/500/560",
      "model": "Veo 3 / GPT-4o",
      "tags": [
        "veo3",
        "video",
        "yaml",
        "automation",
        "system",
        "continuum"
      ]
    },
    {
      "id": "sys02",
      "type": "video",
      "category": "Sistemas de IA y Automatización",
      "title": "Veo 3 · Condensar a Video de 8s",
      "prompt": "Eres un editor de video en Veo 3. Recibirás un bloque con Narrative Script (cta, hook, value, context, interrupt, open loop, explanation, slide-by-slide) y Technical Edit Script (music, effects, sound hooks, visual hook, camera shots, format). Condensá todo en UN video vertical 9:16 de exactamente 8 segundos. Reglas obligatorias: incluí SIEMPRE el hook en los primeros 3s; al menos UNA visualización del producto/UI entre los segundos 3–6; el CTA completo con logo en los últimos 2s; mantené la música y efectos pero resumidos; no inventes contenido fuera del input; si el guion excede 8s, priorizá (1) hook, (2) demo/valor, (3) CTA. Salida: el prompt final listo para generar en Veo 3.",
      "image": "https://picsum.photos/seed/sys02/500/620",
      "model": "Veo 3",
      "tags": [
        "veo3",
        "video",
        "8s",
        "editing",
        "system",
        "continuum"
      ]
    },
    {
      "id": "sys03",
      "type": "video",
      "category": "Sistemas de IA y Automatización",
      "title": "Veo 3 · Dividir en Serie de 8s (continuidad)",
      "prompt": "Eres un editor de video en Veo 3. A partir del Narrative Script + Technical Edit Script, dividí el guion en una SERIE de videos verticales 9:16 de 8s cada uno, con continuidad narrativa (cada clip funciona solo, pero juntos cuentan la historia). Distribución: Video 1 hook + problema; Video 2 contexto + valor; Video 3 comparativa (Before/After o manual vs automatizado); Video 4 personalización (DCO) + métricas; Video 5 opcional CTA final + logo (máx. 5 videos, el mínimo necesario para cubrir el slide-by-slide). Cada clip abre con hook visual/textual y cierra con micro-CTA de continuidad ('Seguí mirando'), salvo el último con el CTA principal. Mantené música/efectos/sonidos continuos entre clips. No inventes contenido.",
      "image": "https://picsum.photos/seed/sys03/500/580",
      "model": "Veo 3",
      "tags": [
        "veo3",
        "video",
        "series",
        "continuity",
        "system",
        "continuum"
      ]
    },
    {
      "id": "sys04",
      "type": "text",
      "category": "Sistemas de IA y Automatización",
      "title": "Video → Guion Parseado (estándar Continuum)",
      "prompt": "Analizá un video y descomponelo en este formato de guion, estilo Continuum, listo para producción y repetible (como un manual de estandarización): 1) Content Objective (educar/inspirar/beneficios/engagement + target). 2) Narrative Script: CTA, Hook, Value, Context, Interrupt, Open Loop, Explanation, Slide-by-Slide Breakdown. 3) Technical Edit Script: Music, Effects, Sound Hooks, Visual Hook, Camera Shots, Video Format/Image Style. 4) Post Copy (texto corto para redes con CTA claro). 5) Hashtags (3–5). Instrucciones: usá el formato sin omitir secciones; adaptá el detalle a la duración; si es imagen estática/carrusel, convertí Technical Edit Script en Image Style + Image Elements; mantené tono corporativo, tech, profesional, repetible y escalable.",
      "image": "https://picsum.photos/seed/sys04/500/540",
      "model": "GPT-4o / Claude",
      "tags": [
        "parsing",
        "script",
        "standardization",
        "system",
        "continuum"
      ]
    },
    {
      "id": "sys05",
      "type": "text",
      "category": "Sistemas de IA y Automatización",
      "title": "Extractor de Estilo de Cuenta de Instagram",
      "prompt": "Se te enviará un screenshot de una cuenta de Instagram (mín. 3 publicaciones). Analizá visual y estructuralmente la cuenta y devolveme un resumen de su estilo como si fuera un manual de marca, con estas variables: Formato predominante (carruseles/reels/historias/post); Orientación (9:16, 1:1, 16:9); Paleta de colores (hex dominantes y combinaciones); Tipografías (familia, tamaño relativo, mayúsculas, bold, serif/sans); Jerarquía visual (títulos, bullets, emojis, destacados); Elementos gráficos (íconos, stickers, subrayados, recuadros, mockups, flechas); Animaciones/efectos en reels (transiciones, ritmo, tipo de edición); Estilo de imágenes/videos (propia o stock, recorte, filtros, bordes); Tono textual (informal, humor, técnico, educativo, persuasivo…); Uso de emojis/CTAs; Hashtags y copywriting. El output es un prompt reutilizable que describe ese estilo con precisión para replicarlo.",
      "image": "https://picsum.photos/seed/sys05/500/560",
      "model": "GPT-4o Vision / Claude",
      "tags": [
        "instagram",
        "style-extraction",
        "brand-manual",
        "system",
        "continuum"
      ]
    },
    {
      "id": "sys06",
      "type": "text",
      "category": "Sistemas de IA y Automatización",
      "title": "Slide → Post de Instagram (transformador)",
      "prompt": "Tomá una slide (de Gamma u otra herramienta) y transformala en contenido visual que imite el estilo de una cuenta de Instagram de referencia. Input: Slide original (texto principal, subtexto, imagen/ícono) + Objetivo del contenido. Transformalo en un post estilo [cuenta], aplicando: formato visual (ej. carrusel 5 slides 1080x1920), colores base y secundarios del estilo detectado, tipografía aproximada con jerarquía título/subtítulo/base, íconos/emojis similares, fondo o textura si la cuenta usa (ondulado, degradado, granulado), CTA visual al final si aplica ('Deslizá para ver más', 'Guardá este post'), tono textual definido y animación sugerida. Output: la slide reimaginada como pieza en el estilo de la cuenta. Reglas: siempre formato Instagram salvo pedido; textos legibles (tamaño/contraste); mínimo 3 imágenes por tanda; si no convence, dar alternativas.",
      "image": "https://picsum.photos/seed/sys06/500/580",
      "model": "GPT-4o / Midjourney",
      "tags": [
        "instagram",
        "slide-to-post",
        "gamma",
        "system",
        "continuum"
      ]
    },
    {
      "id": "play01",
      "type": "text",
      "category": "Playbook Continuum",
      "title": "Framework de Pilares de Contenido",
      "prompt": "Definí un sistema de contenido en 3–5 pilares y clasificá cada pieza dentro de uno (si no encaja, no se publica). Pilares base Continuum: Producto/Servicio (qué vendés y cómo usarlo), Prueba Social (testimonios, UGC, antes/después), Educación (tips rápidos, cómo hacer X, mitos/verdades), Marca (valores, detrás de escena, cultura), Oportunidad (promos, lanzamientos, eventos). Para {MARCA} y {AUDIENCIA}, generá: los pilares finales, 3 ideas de post por pilar, el formato sugerido (reel/carrusel/story) y una CTA para cada uno. · EDIT {MARCA}, {AUDIENCIA}.",
      "image": "https://picsum.photos/seed/play01/500/520",
      "model": "GPT-4o / Claude",
      "tags": [
        "playbook",
        "content-pillars",
        "strategy",
        "continuum",
        "editable"
      ]
    },
    {
      "id": "play02",
      "type": "text",
      "category": "Playbook Continuum",
      "title": "Guion Reel 'Problema → Solución'",
      "prompt": "Escribí un guion de reel de 20–30s con tono Continuum (cercano, claro, directo) para {PRODUCTO}: Hook on-screen (0–2s) con el dolor del cliente ('¿Te piden 50 versiones y solo llegás a 5?'); 3–10s: 2 escenas del problema; 11–22s: cómo lo resuelve {PRODUCTO} (valor concreto, ej. DCO / volumen / batch); 23–30s: CTA ('Escribí DEMO y te muestro tu caso'). Incluí texto en pantalla en mayúsculas (máx. 5–6 palabras por escena) con keywords resaltadas, y sugerencias de cortes cada 0.8–1.2s. · EDIT {PRODUCTO}.",
      "image": "https://picsum.photos/seed/play02/500/560",
      "model": "GPT-4o / Claude",
      "tags": [
        "playbook",
        "reel",
        "script",
        "problema-solucion",
        "continuum",
        "editable"
      ]
    },
    {
      "id": "play03",
      "type": "text",
      "category": "Playbook Continuum",
      "title": "Carrusel 'Mini-guía' (7 slides)",
      "prompt": "Armá un carrusel mini-guía de 7 slides sobre {TEMA} para {AUDIENCIA}, estructura: 1) Portada promesa ('Cómo lograr ___ sin ___'); 2) Error común; 3–5) 3 pasos accionables (uno por slide, con ejemplo visual en el 5); 6) Checklist de 3 ítems; 7) Cierre CTA ('Comentá GUÍA y te mando el template'). Títulos súper cortos (4–6 palabras, mayúsculas), 1 idea por slide, tono Continuum. · EDIT {TEMA}, {AUDIENCIA}.",
      "image": "https://picsum.photos/seed/play03/500/500",
      "model": "GPT-4o / Claude",
      "tags": [
        "playbook",
        "carousel",
        "mini-guide",
        "continuum",
        "editable"
      ]
    },
    {
      "id": "play04",
      "type": "text",
      "category": "Playbook Continuum",
      "title": "10 Hooks Listos (voz Continuum)",
      "prompt": "Generá 10 hooks en español con tono Continuum (para marketers/agencias), estilo: '¿Tu equipo no llega con las piezas? Probá este flujo.', 'El cuello de botella no es creativo, es operativo.', 'De 5 a 25.000 piezas: así escalamos testing sin sufrir.', 'Brief in → creatividades out. Sin drama, en batch.'. Adaptalos a {PRODUCTO}/{ANGULO}: cada uno una línea, punchy, que nombre un dolor operativo o una promesa de escala. · EDIT {PRODUCTO}, {ANGULO}.",
      "image": "https://picsum.photos/seed/play04/500/480",
      "model": "GPT-4o / Claude",
      "tags": [
        "playbook",
        "hooks",
        "copy",
        "continuum",
        "editable"
      ]
    },
    {
      "id": "play05",
      "type": "video",
      "category": "Playbook Continuum",
      "title": "Reel Cinematográfico de Texto Bold",
      "prompt": "Video vertical 9:16 estilo Instagram Reels: persona hablando con claridad frente a cámara, tipografía bold minimalista en MAYÚSCULAS sobre pantalla, colores vivos y alto contraste (negro, blanco y un color acento). Cortes rápidos y dinámicos al ritmo de la voz, subtítulos animados sincronizados con keywords resaltadas en color. Estética moderna, profesional, iluminación nítida, transiciones limpias, música energética no intrusiva. (Estilo: Cinematic Reels / bold text short-form / documentary-style social.) · EDIT color acento, tema.",
      "image": "https://picsum.photos/seed/play05/500/640",
      "model": "Veo 3 / CapCut",
      "tags": [
        "playbook",
        "reel",
        "bold-text",
        "cinematic",
        "continuum",
        "editable"
      ]
    },
    {
      "id": "play06",
      "type": "text",
      "category": "Playbook Continuum",
      "title": "Guion UGC / Testimonio (10–15s)",
      "prompt": "Escribí un guion de testimonio/UGC de 10–15s para {PRODUCTO}: clip corto + quote enorme on-screen ('En 2 semanas encontramos 3 winners'), overlay con ⭐⭐⭐⭐⭐ + nombre/cargo si aplica, voz en off breve con un resultado concreto ({RESULTADO}), y CTA ('DM TEST'). Tono auténtico, cercano, no publicitario. · EDIT {PRODUCTO}, {RESULTADO}.",
      "image": "https://picsum.photos/seed/play06/500/560",
      "model": "GPT-4o / Claude",
      "tags": [
        "playbook",
        "ugc",
        "testimonial",
        "script",
        "continuum",
        "editable"
      ]
    },
    {
      "id": "play07",
      "type": "text",
      "category": "Playbook Continuum",
      "title": "Guía de Estilo Visual Continuum",
      "prompt": "Aplicá la identidad visual Continuum a cualquier pieza. Tipografías: títulos Sora Bold en MAYÚSCULAS (tracking 0 a +2), texto Inter Regular/Medium. Colores: fondo #0E0E10 (negro suave) o #FFFFFF; acento 1 #A78BFA (lila); acento 2 #22D3EE (cyan); texto #F5F7FA; gradientes suaves diagonales lila→cyan al 12–20% detrás. Composición: márgenes amplios (8–10%), titulares 4–6 palabras, iconografía de líneas 2px. Motion: cortes cada 0.8–1.2s, zoom leve 2–4% en beats, subtítulos con keywords en Sora Bold + acento. Regla de oro: portada/primer segundo hiper legible en miniatura, alto contraste, 1 idea por escena. Devolvé la pieza {PIEZA} descrita con estas reglas. · EDIT {PIEZA}.",
      "image": "https://picsum.photos/seed/play07/500/540",
      "model": "GPT-4o / Claude",
      "tags": [
        "playbook",
        "style-guide",
        "brand",
        "continuum",
        "editable"
      ]
    },
    {
      "id": "play08",
      "type": "text",
      "category": "Playbook Continuum",
      "title": "Prompt Builder (qué → cómo → estilo)",
      "prompt": "Construí un prompt de imagen/video ordenado en capas, porque 'la IA no ve lo que vos ves; si no lo escribís, no existe'. Estructura: 1) QUÉ es (sujeto principal concreto), 2) CÓMO es (detalles, acción, contexto), 3) ESTILO (fotografía realista, animación, publicidad…), 4) palabras de cámara (primer plano, fondo desenfocado, luz suave/cálida), 5) emoción y 6) para qué se usa. Ejemplo: 'Un perro golden retriever corriendo en la playa al atardecer, estilo fotografía realista, luz cálida'. Tomá la idea {IDEA} y devolvé 3 versiones del prompt (realista, ilustrada, cinematográfica). Ni muy corto ni muy largo: escribí bien, no mucho. · EDIT {IDEA}.",
      "image": "https://picsum.photos/seed/play08/500/500",
      "model": "GPT-4o / Claude",
      "tags": [
        "playbook",
        "prompt-builder",
        "framework",
        "education",
        "editable"
      ]
    }
  ]
};
