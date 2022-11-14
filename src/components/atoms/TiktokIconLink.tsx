import { FaTiktok } from "react-icons/fa";

type Props = {
    size: number
    id: string
}

const TiktokIconLink = ({
    size,
    id
}: Props) => {
    return (
        <a className='text-tiktok m-2' href={`https://www.tiktok.com/@${id}`}>
            <FaTiktok size={size} />
        </a>
    );
}

export default TiktokIconLink