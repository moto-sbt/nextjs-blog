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
    tags,
}: Props) => {
    return (
        <>
            <Link href={`/posts/${id}`}>
                <a className="leading-7">{title}</a>
            </Link>
            <br />
            <small className="text-gray">
                <Date dateString={date} />
            </small>
            {tags.map((tag, index) => (
                <Link href={`/tags/${tag}`} key={index}>
                    <a className="text-sm text-gray bg-gray-light mx-1 px-1 rounded-md hover:bg-gray-dark hover:no-underline">
                        <small>{tag}</small>
                    </a>
                </Link>
            ))}
        </>
    )
}

export default PostItem