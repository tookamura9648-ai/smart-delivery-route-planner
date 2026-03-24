export default async function handler(req, res) {
  try {
    const { q } = req.query;

    if (!q || !String(q).trim()) {
      return res.status(400).json({ error: "missing query" });
    }

    const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&q=${encodeURIComponent(q)}`;

    const r = await fetch(url, {
      headers: {
        "User-Agent": "smart-delivery-route-planner/1.0",
        "Accept-Language": "en"
      }
    });

    if (!r.ok) {
      return res.status(r.status).json({ error: "geocode upstream failed" });
    }

    const data = await r.json();

    // 今の index.html の extractLatLngFromGeocodeResponse() が読める形に変換
    const normalized = (Array.isArray(data) ? data : [])
      .filter(item => item && item.lat && item.lon)
      .map(item => ({
        geometry: {
          coordinates: [Number(item.lon), Number(item.lat)]
        },
        properties: {
          display_name: item.display_name || "",
          importance: typeof item.importance === "number"
            ? item.importance
            : Number(item.importance || 0)
        }
      }));

    return res.status(200).json(normalized);

  } catch (e) {
    return res.status(500).json({
      error: "geocode failed",
      detail: e?.message || String(e)
    });
  }
}
