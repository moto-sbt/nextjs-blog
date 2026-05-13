import { useState, useEffect } from 'react';

type Props = {
  url: string;
};

type OgpData = {
  title: string;
  description: string;
};

const LinkCard = ({ url }: Props) => {
  const [data, setData] = useState<OgpData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/getOgpData?url=${encodeURIComponent(url)}`);
        if (!response.ok) return;
        const result: OgpData = await response.json();
        setData(result);
      } catch {
        // OGP取得失敗は無視してフォールバック表示
      }
    };

    fetchData();
  }, [url]);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full p-6 bg-white border border-gray rounded-lg hover:bg-gray-100 transition-colors"
    >
      <h5 className="mb-2 tracking-tight text-gray">
        {data?.title || 'No Title'}
      </h5>
      <p className="font-normal text-gray-700">{data?.description}</p>
    </a>
  );
};

export default LinkCard;
