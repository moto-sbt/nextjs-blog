import Link from 'next/link';
import Date from 'components/atoms/Date';

type Props = {
    date: string
    title: string
    id: string
    tags: Array<string>
}

const PostItem = ({
    date,
    title,
    id,
    tags
}: Props) => {
    return (
        <>
            <li className="my-6" key={id}>
                <Link href={`/posts/${id}`}>
                    <a className="leading-7">{title}</a>
                </Link>
                <br />
                <small className="text-gray">
                    <Date dateString={date} />
                </small>
                {tags.map((tag) => (
                    <Link href={`/tags/${tag}`}>
                        <a>
                            <small>#{tag} </small>
                        </a>
                    </Link>
                ))}
            </li>
        </>
    )
}

export default PostItem