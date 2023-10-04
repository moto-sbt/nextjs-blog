import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { url } = req.query;

    res.setHeader('Cache-Control', 'no-store');

    if (!url || typeof url !== 'string') {
        return res.status(400).json({ error: 'URL parameter is required.' });
    }

    try {
        const response = await fetch(url);
        const html = await response.text();
        const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]+)" \/>/);
        const ogDescriptionMatch = html.match(/<meta property="og:description" content="([^"]+)" \/>/);

        const title = ogTitleMatch ? ogTitleMatch[1] : null;
        const description = ogDescriptionMatch ? ogDescriptionMatch[1] : null;

        return res.status(200).json({ title, description });

    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch OGP data.' });
    }
}
