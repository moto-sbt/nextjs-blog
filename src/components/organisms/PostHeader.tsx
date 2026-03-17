import Link from 'next/link'
import Image from 'next/image'

const PostHeader = () => {
    return (
        <nav className="w-full sticky top-0 z-50 glass-nav">
            <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link href="/">
                    <a className="flex items-center gap-2.5">
                        <div
                            className="rounded-full"
                            style={{
                                background: 'linear-gradient(135deg, #0891b2, #7c3aed)',
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <div
                                className="rounded-full overflow-hidden"
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    background: '#f8fafc',
                                }}
                            >
                                <Image
                                    priority
                                    src="/images/profile.png"
                                    className="rounded-full"
                                    height={30}
                                    width={30}
                                    alt="motosbt"
                                />
                            </div>
                        </div>
                        <span className="font-bold text-sm tracking-tight gradient-text">
                            motosbt
                        </span>
                    </a>
                </Link>
                <div className="flex items-center gap-6">
                    <Link href="/posts">
                        <a className="text-sm font-medium" style={{ color: '#64748b' }}>Posts</a>
                    </Link>
                    <Link href="/tags">
                        <a className="text-sm font-medium" style={{ color: '#64748b' }}>Tags</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default PostHeader
