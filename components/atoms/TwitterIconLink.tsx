import { FaTwitter } from "react-icons/fa";

type Props = {
    size: number
    id: string
}

const TwitterIconLink = ({
    size,
    id
}: Props) => {
    return (
        <a className='text-twitter m-2' href={`https://twitter.com/${id}`}>
            <FaTwitter size={size} />
        </a>
    );
}

export default TwitterIconLink