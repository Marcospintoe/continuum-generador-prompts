// Función serverless (Vercel) — Búsqueda de imágenes con Google Programmable Search.
// Requiere variables de entorno: GOOGLE_API_KEY y GOOGLE_CX.
// Devuelve: { images: [{ url, thumb, title, source, context }] }

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const q = (req.query && req.query.q ? String(req.query.q) : '').trim();
  if (!q) { res.status(400).json({ error: 'Falta el parámetro q' }); return; }

  const key = process.env.GOOGLE_API_KEY;
  const cx = process.env.GOOGLE_CX;
  if (!key || !cx) { res.status(500).json({ error: 'Faltan GOOGLE_API_KEY / GOOGLE_CX' }); return; }

  // searchType=image → solo imágenes. num=10 (máx por request). safe=active.
  const url = 'https://www.googleapis.com/customsearch/v1?searchType=image&num=10&safe=active'
            + '&key=' + encodeURIComponent(key)
            + '&cx=' + encodeURIComponent(cx)
            + '&q=' + encodeURIComponent(q);

  try {
    const r = await fetch(url);
    const d = await r.json();
    if (d.error) { res.status(502).json({ error: d.error.message || 'Error de Google' }); return; }
    const images = (d.items || []).map(it => ({
      url: it.link,
      thumb: it.image ? it.image.thumbnailLink : it.link,
      title: it.title || q,
      source: it.displayLink || '',
      context: it.image ? it.image.contextLink : ''
    }));
    res.status(200).json({ images });
  } catch (e) {
    res.status(500).json({ error: 'Fallo al consultar Google', detail: String(e) });
  }
};
