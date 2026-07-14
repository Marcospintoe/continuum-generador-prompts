// Función serverless (Vercel) — Búsqueda de imágenes con Pexels (gratis, confiable).
// Requiere variable de entorno: PEXELS_API_KEY (gratis en https://www.pexels.com/api/).
// Devuelve: { images: [{ url, thumb, title, source, context }] }

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const q = (req.query && req.query.q ? String(req.query.q) : '').trim();
  if (!q) { res.status(400).json({ error: 'Falta el parámetro q' }); return; }

  const key = process.env.PEXELS_API_KEY;
  if (!key) { res.status(500).json({ error: 'Falta PEXELS_API_KEY' }); return; }

  const url = 'https://api.pexels.com/v1/search?per_page=15&orientation=portrait&locale=es-ES&query=' + encodeURIComponent(q);

  try {
    const r = await fetch(url, { headers: { 'Authorization': key } });
    const d = await r.json();
    if (d.error) { res.status(502).json({ error: d.error }); return; }
    const images = (d.photos || []).map(p => ({
      url: (p.src && (p.src.large || p.src.portrait || p.src.medium)) || '',
      thumb: (p.src && (p.src.medium || p.src.tiny)) || '',
      title: p.alt || q,
      source: 'Pexels',
      context: p.url || ''
    }));
    res.status(200).json({ images });
  } catch (e) {
    res.status(500).json({ error: 'Fallo al consultar Pexels', detail: String(e) });
  }
};
