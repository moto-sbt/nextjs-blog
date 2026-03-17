import Link from 'next/link'
import CopyRight from '@/components/atoms/CopyRight'

const PostFooter = () => {
    return (
        <footer className="max-w-3xl mx-auto px-6 pb-10">
            <div className="pt-8 mt-12" style={{ borderTop: '1px solid #e2e8f0' }}>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link href="/">
                        <a
                            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all"
                            style={{
                                color: '#0891b2',
                                background: '#f0f9ff',
                                border: '1px solid #bae6fd',
                            }}
                        >
                            ← Back to home
                        </a>
                    </Link>
                    <CopyRight />
                </div>
            </div>
        </footer>
    )
}

export default PostFooter
