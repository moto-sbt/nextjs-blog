import { FaXTwitter } from "react-icons/fa6";

type Props = {
    size: number
    id: string
}

const XTwitterIconLink = ({
    size,
    id
}: Props) => {
    return (
        <a className='m-2' style={{ color: '#000000' }} href={`https://x.com/${id}`}>
            <FaXTwitter size={size} />
        </a>
    );
}

export default XTwitterIconLink