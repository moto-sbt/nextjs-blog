import Link from 'next/link';
import Date from '@/components/atoms/Date';

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
                <a className="block p-6 bg-white rounded border border-gray-dark hover:no-underline">
                    <h5 className="mb-2 tracking-tight hover:underline">{title}</h5>
                    <small className="text-gray">
                        <Date dateString={date} />
                        {tags.map((tag, index) => (
                            <Link href={`/tags/${tag}`} key={index}>
                                <a className="bg-gray-light hover:bg-gray-dark text-gray font-medium text-sm ml-3 px-2 py-0.5 rounded dark:hover:bg-gray-dark hover:no-underline">
                                    <small>{tag}</small>
                                </a>
                            </Link>
                        ))}
                    </small>
                </a>
            </Link>    
        </>
    )
}

export default PostItem