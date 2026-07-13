# Generador de Prompts de Continuum — Guía de despliegue

El usuario busca algo (ej. "perro"), ve imágenes de referencia de **Google** y, **solo cuando toca una foto**, se genera el prompt con **IA**. Así se usa poco cómputo: una llamada de IA por clic, no por búsqueda.

## Cómo funciona

- **Frontend:** `index.html` (una sola página, estática).
- **Backend (funciones serverless en Vercel):**
  - `api/search.js` → busca imágenes con **Google Programmable Search**.
  - `api/prompt.js` → genera el prompt con **OpenAI** (se llama solo al tocar una foto).
- Las **claves quedan escondidas** en Vercel (variables de entorno). Nunca van en el código público.

> **Modo demo:** tal como está, `index.html` ya funciona sin claves (imágenes de ejemplo + prompt por plantilla). Para ver la experiencia, abrilo con doble clic. Para producción, seguí los pasos de abajo.

---

## Paso 1 — Google Programmable Search (imágenes)

1. Entrá a https://programmablesearchengine.google.com/ y creá un **motor de búsqueda**.
   - En "Qué buscar" podés elegir **Buscar en toda la web**, o **agregar sitios específicos como `pinterest.com`** si querés resultados tipo Pinterest (así combinás Google + Pinterest de forma legal).
   - Activá **Búsqueda de imágenes** (Image search) en la configuración del motor.
2. Copiá el **ID del motor de búsqueda** (`cx`).
3. Entrá a https://console.cloud.google.com/ → creá un proyecto → **APIs y servicios → Biblioteca** → activá **Custom Search API**.
4. En **Credenciales** creá una **API key** y copiala.
   - Tier gratis: **100 búsquedas por día**. Después es pago (aprox. USD 5 por cada 1.000 búsquedas).

Vas a tener dos datos: `GOOGLE_CX` (el ID del motor) y `GOOGLE_API_KEY` (la clave).

## Paso 2 — OpenAI (el prompt)

1. Entrá a https://platform.openai.com/ → **API keys** → creá una clave (`OPENAI_API_KEY`).
2. Cargá saldo en **Billing**. El modelo por defecto es `gpt-4o-mini` (muy barato: fracción de centavo por prompt).
   - Como el prompt se genera **solo al tocar una foto**, el gasto es mínimo.

## Paso 3 — Subir a GitHub

1. Creá un repositorio nuevo en https://github.com/new
2. Subí esta carpeta completa (`index.html`, `package.json` y la carpeta `api/`).

## Paso 4 — Publicar en Vercel

1. Entrá a https://vercel.com/ con tu cuenta de GitHub.
2. **Add New → Project** → elegí el repo → **Deploy**.
3. En **Settings → Environment Variables** cargá:
   - `GOOGLE_API_KEY` = tu clave de Google
   - `GOOGLE_CX` = el ID del motor de búsqueda
   - `OPENAI_API_KEY` = tu clave de OpenAI
   - (opcional) `OPENAI_MODEL` = `gpt-4o-mini`
4. Volvé a hacer **Deploy** para que tome las variables.

## Paso 5 — Activar el modo producción

En `index.html`, arriba de todo del `<script>`, cambiá:

```js
var CONFIG = { apiBase: "" };      // modo demo
```
por:
```js
var CONFIG = { apiBase: "/api" };  // producción (Google + IA reales)
```
Guardá y volvé a subir a GitHub (Vercel redeploya solo).

## Paso 6 — Linkear desde la web de Continuum

Vercel te da una URL tipo `https://tu-proyecto.vercel.app`. Poné ese link en la web de Continuum (botón o menú). Si querés, podés apuntar un subdominio propio, ej. `prompts.continuumai.agency`, desde **Settings → Domains** en Vercel.

---

## Costos y límites (para tener en cuenta)

- **Google:** 100 búsquedas/día gratis; después ~USD 5 / 1.000.
- **OpenAI:** centavos por prompt con `gpt-4o-mini` (solo se gasta al tocar una foto).
- Si lo abrís al público, conviene poner un límite de búsquedas por usuario (se puede agregar después).

## Si algún día querés cambiar de fuente de imágenes

El código está aislado: la única parte que habla con Google es `api/search.js`. Para cambiar a **Pexels** (gratis, sin límite diario, uso comercial), se reemplaza ese archivo por una llamada a la API de Pexels — el resto de la página no cambia.
