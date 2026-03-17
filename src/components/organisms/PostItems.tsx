import PostItem from '@/components/molecules/PostItem'

type Props = {
    allPostsData: {
        date: string
        title: string
        id: string
        tags: Array<string>
    }[]
    title?: string
}

const PostItems = ({ allPostsData, title }: Props) => {
    return (
        <section>
            <div className="flex items-center gap-3 mb-6">
                <span
                    className="text-xs font-mono font-semibold tracking-widest uppercase"
                    style={{ color: '#0891b2' }}
                >
                    &gt; {title ?? 'all_posts'}
                </span>
                <span
                    className="text-xs font-mono px-2 py-0.5 rounded-full"
                    style={{
                        color: '#64748b',
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                    }}
                >
                    {allPostsData.length}
                </span>
            </div>
            <ul className="list-none p-0 m-0 grid grid-cols-1 gap-3">
                {allPostsData.map(({ id, date, title, tags }) => (
                    <li key={id} className="m-0">
                        <PostItem date={date} title={title} id={id} tags={tags} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default PostItems
