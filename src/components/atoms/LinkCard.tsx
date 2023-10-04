import { useState, useEffect } from 'react';

type Props = {
  url: string;
};

type ApiResponse = {
  title: string;
  subtitle: string;
};

const LinkCard = ({ url }: Props) => {

  const handleCardClick = () => {
    window.location.href = url;
  }


  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/getOgpData?url=${encodeURIComponent(url)}`);
        const result: ApiResponse = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div 
      onClick={handleCardClick} 
      className="block w-full p-6 bg-white border border-gray cursor-pointer rounded-lg hover:bg-gray-100 transition-colors"
    >
      <h5 className="mb-2 tracking-tight text-gray">
        {data?.title || "No Title"}
      </h5>
      <p className="font-normal text-gray-700">{data?.subtitle}</p>
    </div>
  );
}

export default LinkCard;
