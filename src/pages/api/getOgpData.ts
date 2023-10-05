import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { JSDOM } from 'jsdom';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { url } = req.query;

    res.setHeader('Cache-Control', 'no-store');

    if (!url || typeof url !== 'string') {
        return res.status(400).json({ error: 'URL parameter is required.' });
    }

    try {
        const encodedUri = encodeURI(url);
        const headers = { 'User-Agent': 'bot' };
        const response = await axios.get(encodedUri, { headers: headers });
        const html = response.data;
        const dom = new JSDOM(html);
        const meta = dom.window.document.head.querySelectorAll("meta");
        const ogp = extractOgp([...meta]);
        const { title, description } = ogp;
        return res.status(200).json({ title, description });

    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch OGP data.' });
    }
}

function extractOgp(metaElements) {
    const ogp: any = {};
    metaElements.forEach(element => {
        const property = element.getAttribute("property");
        const content = element.getAttribute("content");
        if (property === "og:title") {
            ogp.title = content;
        } else if (property === "og:description") {
            ogp.description = content;
        }
    });
    return ogp;
}
