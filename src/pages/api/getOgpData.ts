import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { JSDOM } from 'jsdom';
import { promises as dns } from 'dns';
import { isIP } from 'net';

const PRIVATE_IP_PATTERNS = [
  /^127\./,
  /^10\./,
  /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
  /^192\.168\./,
  /^169\.254\./, // link-local / クラウドメタデータ (AWS: 169.254.169.254)
  /^0\./,
  /^::1$/,
  /^fc[0-9a-f]{2}:/i,
  /^fe80:/i,
];

function isPrivateIp(ip: string): boolean {
  return PRIVATE_IP_PATTERNS.some((pattern) => pattern.test(ip));
}

async function validateUrl(rawUrl: string): Promise<string> {
  let parsed: URL;
  try {
    parsed = new URL(rawUrl);
  } catch {
    throw new Error('Invalid URL format.');
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    throw new Error('Only http and https protocols are allowed.');
  }

  const hostname = parsed.hostname;

  if (isIP(hostname) !== 0) {
    if (isPrivateIp(hostname)) {
      throw new Error('Access to private IP addresses is not allowed.');
    }
  } else {
    const addresses = await dns.lookup(hostname, { all: true });
    for (const { address } of addresses) {
      if (isPrivateIp(address)) {
        throw new Error('URL resolves to a private IP address.');
      }
    }
  }

  return parsed.href;
}

const MAX_FIELD_LENGTH = 300;

function truncate(value: string | null): string {
  if (!value) return '';
  return value.replace(/[\x00-\x1F\x7F]/g, '').slice(0, MAX_FIELD_LENGTH);
}

type OgpData = {
  title: string;
  description: string;
};

function extractOgp(metaElements: Element[]): OgpData {
  const ogp: OgpData = { title: '', description: '' };
  metaElements.forEach((element) => {
    const property = element.getAttribute('property');
    const content = element.getAttribute('content');
    if (property === 'og:title') {
      ogp.title = truncate(content);
    } else if (property === 'og:description') {
      ogp.description = truncate(content);
    }
  });
  return ogp;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  res.setHeader('Cache-Control', 'no-store');

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'URL parameter is required.' });
  }

  let validatedUrl: string;
  try {
    validatedUrl = await validateUrl(url);
  } catch (error) {
    return res.status(400).json({ error: 'Invalid or disallowed URL.' });
  }

  try {
    const response = await axios.get(validatedUrl, {
      headers: { 'User-Agent': 'bot' },
      timeout: 5000,
      maxContentLength: 1_000_000,
      maxBodyLength: 1_000_000,
      maxRedirects: 3,
      responseType: 'text',
    });

    const contentType = String(response.headers['content-type'] ?? '');
    if (!contentType.includes('text/html')) {
      return res.status(400).json({ error: 'URL does not return HTML content.' });
    }

    const dom = new JSDOM(response.data as string);
    const meta = dom.window.document.head.querySelectorAll('meta');
    const { title, description } = extractOgp([...meta]);
    return res.status(200).json({ title, description });
  } catch (error) {
    console.error('[getOgpData] Failed to fetch OGP:', error instanceof Error ? error.message : error);
    return res.status(500).json({ error: 'Failed to fetch OGP data.' });
  }
}
