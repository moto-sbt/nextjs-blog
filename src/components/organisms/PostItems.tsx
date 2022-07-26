import PostItem from '@/components/molecules/PostItem';

type Props = {
    allPostsData: {
        date: string
        title: string
        id: string
        tags: Array<string>
    }[],
    title?: string
}

const PostItems = ({ allPostsData, title }: Props) => {
    return (
        <>
            <h2 className="text-2xl leading-loose my-4 font-bold">{title}</h2>
            <ul className="list-none p-0 m-0">
                {allPostsData.map(({ id, date, title, tags }) => (
                    <li className="my-4" key={id}>
                        <PostItem date={date} title={title} id={id} tags={tags}/>
                    </li>
                ))}
            </ul>
        </>
    );
}

PostItems.defaultProps = {
    title: '記事一覧'
}

export default PostItems