import Link from 'next/link'
import PostItem from '@/components/molecules/PostItem'

const topPostsNum = 3

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
        <section className="max-w-5xl mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
                <span
                    className="text-xs font-mono font-semibold tracking-widest uppercase"
                    style={{ color: '#0891b2' }}
                >
                    &gt; latest_posts
                </span>
                <Link href="/posts">
                    <a
                        className="text-xs font-medium px-3 py-1.5 rounded-lg"
                        style={{
                            color: '#64748b',
                            background: '#ffffff',
                            border: '1px solid #e2e8f0',
                        }}
                    >
                        All posts →
                    </a>
                </Link>
            </div>

            <ul className="list-none p-0 m-0 grid grid-cols-1 md:grid-cols-3 gap-4">
                {allPostsData.map(({ id, date, title, tags }, index) => {
                    if (index >= topPostsNum) return null
                    return (
                        <li key={id} className="m-0">
                            <PostItem date={date} title={title} id={id} tags={tags} />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default TopPostItems
