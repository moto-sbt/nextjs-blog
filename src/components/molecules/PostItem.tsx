import Link from 'next/link'
import Date from '@/components/atoms/Date'

type Props = {
    date: string
    title: string
    id: string
    tags: Array<string>
}

const PostItem = ({ date, title, id, tags }: Props) => {
    return (
        <Link href={`/posts/${id}`}>
            <a className="block h-full card-base p-5">
                {/* タグ */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag-pill">#{tag}</span>
                    ))}
                </div>

                {/* タイトル */}
                <h3
                    className="text-base font-semibold leading-snug mb-3"
                    style={{ color: '#0f172a' }}
                >
                    {title}
                </h3>

                {/* 日付 */}
                <div className="text-xs font-mono" style={{ color: '#94a3b8' }}>
                    <Date dateString={date} />
                </div>
            </a>
        </Link>
    )
}

export default PostItem
