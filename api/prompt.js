// Función serverless (Vercel) — Genera el prompt con IA SOLO cuando el usuario toca una foto.
// Requiere variable de entorno: OPENAI_API_KEY.
// Modelo por defecto: gpt-4o-mini (barato). Recibe POST { query, imageTitle, style }.
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

  const key = process.env.OPENAI_API_KEY;
  if (!key) { res.status(500).json({ error: 'Falta OPENAI_API_KEY' }); return; }

  const system = 'Sos un experto en prompts de imágenes para marketing, al estilo de la agencia Continuum. '
    + 'Respondés SOLO con el prompt, en español, listo para copiar y pegar. '
    + 'Incluí detalles de encuadre, luz, composición y estilo, y agregá parámetros --ar y --style raw --v 6.1 cuando sea una foto. '
    + 'No agregues explicaciones ni comillas, solo el prompt (2 a 4 frases).';
  const user = 'Escribí un prompt de imagen para: "' + query + '". '
    + (imageTitle ? ('Referencia visual elegida: "' + imageTitle + '". ') : '')
    + 'Estilo deseado: ' + style + '.';

  try {
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        messages: [{ role: 'system', content: system }, { role: 'user', content: user }],
        temperature: 0.7,
        max_tokens: 240
      })
    });
    const d = await r.json();
    if (d.error) { res.status(502).json({ error: d.error.message || 'Error de OpenAI' }); return; }
    const prompt = d.choices && d.choices[0] && d.choices[0].message && d.choices[0].message.content
      ? d.choices[0].message.content.trim() : '';
    res.status(200).json({ prompt });
  } catch (e) {
    res.status(500).json({ error: 'Fallo al generar el prompt', detail: String(e) });
  }
};
