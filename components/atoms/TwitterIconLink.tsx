import { FaTwitter } from "react-icons/fa";

export const TwitterIconLink = ({
    size,
    id
} : {
    size: number
    id: string
}) => {
    return (
        <a className='text-twitter m-2' href={`https://twitter.com/${id}`}>
            <FaTwitter size={size} />
        </a>
    );
}