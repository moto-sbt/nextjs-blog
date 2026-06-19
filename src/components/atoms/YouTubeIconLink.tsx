import { FaYoutube } from "react-icons/fa";

type Props = {
    size: number
    id: string
}

const YoutubeIconLink = ({
    size,
    id
}: Props) => {
    return (
        <a className='text-black m-2' href={`https://www.youtube.com/channel/${id}`}>
            <FaYoutube size={size} />
        </a>
    );
}

export default YoutubeIconLink