import Link from 'next/link';
import PostItem from '@/components/molecules/PostItem';

const topPostsNum = 1

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
                        <li className="my-4" key={id}>
                            <PostItem date={date} title={title} id={id} tags={tags}/>
                        </li>
                    )
                })}
            </ul>
            <div className='flex justify-center items-center'>
                <Link href="/posts">
                        <button type="button" className="text-blue hover:text-white border border-blue hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded py-2 px-3 text-xs text-center mr-2 mb-2">
                            More
                        </button>
                </Link>
            </div>
        </>
    );
}

export default TopPostItems