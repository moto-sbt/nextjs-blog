import { FaInstagram } from "react-icons/fa";

type Props = {
    size: number
    id: string
}

const InstagramIconLink = ({
    size,
    id
}: Props) => {
    return (
        <a className='text-instagram m-2' href={`https://www.instagram.com/${id}`}>
            <FaInstagram size={size} />
        </a>
    );
}

export default InstagramIconLink