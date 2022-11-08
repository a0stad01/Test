// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Image {
  url: string;
  title: string;
  description: string;
  artist: string;
}

type Data = {
  images: Image[];
}

const images: Image[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    res.status(200).json({ images: [{url: "...", title: "Title", description: "...", artist: "Artist Name"}] })
  } else if (req.method === "POST") {
    const image = req.body;
    images.push(JSON.parse(image));
    res.status(200).json({ images })
  }
}
