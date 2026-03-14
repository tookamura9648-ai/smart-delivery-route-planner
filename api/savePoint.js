import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ ok:false });
    }

    const { address, lat, lng } = req.body;

    if (!address || !lat || !lng) {
      return res.status(400).json({ ok:false });
    }

    const key = "addr:" + address;
    await redis.set(key, { lat, lng });

    res.status(200).json({ ok:true });

  } catch (e) {
    res.status(500).json({ ok:false, error:e.message });
  }
}