import Link from 'next/link';
import PostItem from '@/components/molecules/PostItem';

const topPostsNum = 2

type Props = {
    allPostsData: {
        date: string
        title: string
        id: string
        tags: Array<string>
    }[]
}

const TopPostItems = ({ allPostsData }: Props) => {
    return (
        <>
            <h2 className="text-2xl leading-loose my-4 font-bold">最新記事</h2>
            <ul className="list-none p-0 m-0">
                {allPostsData.map(({ id, date, title, tags }, index) => {
                    if (index >= topPostsNum) {
                        return null
                    }
                    return (
                        <li className="my-6" key={id}>
                            <PostItem date={date} title={title} id={id} tags={tags}/>
                        </li>
                    )
                })}
            </ul>
            <div className='flex justify-center items-center'>
                <Link href="/posts">
                        <a>More</a>
                </Link>
            </div>
        </>
    );
}

export default TopPostItems