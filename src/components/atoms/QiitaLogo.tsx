import { SiQiita } from "react-icons/si";

type Props = {
    size: number
    id: string
}

const QiitaIconLink = ({
    size,
    id
}: Props) => {
    return (
        <a className='text-qiita m-2' href={`https://qiita.com/${id}`}>
            <SiQiita size={size} />
        </a>
    );
}

export default QiitaIconLink