// Función serverless (Vercel) — Genera el prompt con IA (Claude) SOLO cuando el usuario toca una foto.
// Requiere variable de entorno: ANTHROPIC_API_KEY.
// Modelo por defecto: claude-haiku-4-5 (barato). Recibe POST { query, imageTitle, style }.
// Devuelve: { prompt }

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method !== 'POST') { res.status(405).json({ error: 'Usá POST' }); return; }

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body || '{}'); } catch (e) { body = {}; } }
  body = body || {};
  const query = (body.query || '').toString().trim();
  const imageTitle = (body.imageTitle || '').toString().trim();
  const style = (body.style || 'foto publicitaria realista').toString().trim();
  if (!query) { res.status(400).json({ error: 'Falta query' }); return; }

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) { res.status(500).json({ error: 'Falta ANTHROPIC_API_KEY' }); return; }

  const system = 'Sos un experto en prompts de imágenes para marketing, al estilo de la agencia Continuum. '
    + 'Respondés SOLO con el prompt, en español, listo para copiar y pegar. '
    + 'Incluí detalles de encuadre, luz, composición y estilo, y agregá parámetros --ar y --style raw --v 6.1 cuando sea una foto. '
    + 'No agregues explicaciones ni comillas, solo el prompt (2 a 4 frases).';
  const user = 'Escribí un prompt de imagen para: "' + query + '". '
    + (imageTitle ? ('Referencia visual elegida: "' + imageTitle + '". ') : '')
    + 'Estilo deseado: ' + style + '.';

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5',
        max_tokens: 300,
        system: system,
        messages: [{ role: 'user', content: user }]
      })
    });
    const d = await r.json();
    if (d.error) { res.status(502).json({ error: (d.error && d.error.message) || 'Error de Anthropic' }); return; }
    const prompt = d.content && d.content[0] && d.content[0].text ? d.content[0].text.trim() : '';
    res.status(200).json({ prompt });
  } catch (e) {
    res.status(500).json({ error: 'Fallo al generar el prompt', detail: String(e) });
  }
};
