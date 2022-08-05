import { PostItem } from 'components/molecules/PostItem';

type AllPostsData = {
    date: string
    title: string
    id: string
}

export const PostItems = ({
    allPostsData
} : {
    allPostsData: AllPostsData[]
}) => {
    return (
        <>
            <h2 className="text-2xl leading-loose my-4 font-bold">Blog</h2>
            <ul className="list-none p-0 m-0">
                {allPostsData.map(({ id, date, title }) => (
                    <PostItem date={date} title={title} id={id} />
                ))}
            </ul>
        </>
    );
}