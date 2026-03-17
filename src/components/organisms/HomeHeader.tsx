import Link from 'next/link'
import Image from 'next/image'
import SNSIconLinks from '@/components/molecules/SNSIconLinks'

const HomeHeader = () => {
    return (
        <header className="w-full">
            {/* Sticky nav */}
            <nav className="w-full sticky top-0 z-50 glass-nav">
                <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
                    <Link href="/">
                        <a className="font-bold text-lg tracking-tight gradient-text">
                            motosbt
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

            {/* Hero */}
            <div className="max-w-5xl mx-auto px-6 pt-16 pb-14">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                        <div
                            className="rounded-full"
                            style={{
                                background: 'linear-gradient(135deg, #0891b2, #6366f1, #7c3aed)',
                                width: '98px',
                                height: '98px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <div
                                className="rounded-full overflow-hidden"
                                style={{
                                    width: '90px',
                                    height: '90px',
                                    background: '#f8fafc',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Image
                                    priority
                                    src="/images/profile.png"
                                    className="rounded-full"
                                    height={88}
                                    width={88}
                                    alt="motosbt"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <span
                            className="text-xs font-mono font-semibold tracking-widest uppercase"
                            style={{ color: '#0891b2' }}
                        >
                            &gt; developer_blog
                        </span>
                        <h1 className="text-4xl font-black leading-tight tracking-tight gradient-text">
                            motosbt
                        </h1>
                        <p className="text-sm leading-relaxed max-w-sm mt-1" style={{ color: '#64748b' }}>
                            技術的なまとめとか、所感とかを気ままに。
                        </p>
                        <div className="flex items-center gap-2 justify-center md:justify-start mt-2">
                            <SNSIconLinks />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader
