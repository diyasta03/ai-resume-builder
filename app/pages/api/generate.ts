import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { bio } = req.body;

  const response = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-large", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: `Tolong buatkan bio resume profesional berdasarkan deskripsi berikut: ${bio}`,
    }),
  });

  const data = await response.json();
  const result = data[0]?.generated_text || "Gagal menghasilkan hasil dari AI.";

  res.status(200).json({ result });
}
