import { FaXTwitter } from "react-icons/fa6";

type Props = {
    size: number
    id: string
}

const TwitterIconLink = ({
    size,
    id
}: Props) => {
    return (
        <a className='text-x m-2' href={`https://x.com/${id}`}>
            <FaXTwitter size={size} />
        </a>
    );
}

export default TwitterIconLink