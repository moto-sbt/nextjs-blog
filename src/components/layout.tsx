import Head from 'next/head';
import HomeHeader from '@/components/organisms/HomeHeader';
import HomeFooter from '@/components/organisms/HomeFooter';
import PostHeader from '@/components/organisms/PostHeader';
import PostFooter from '@/components/organisms/PostFooter';

export const siteTitle = 'motosbt';

type Props = {
    children: React.ReactNode
    home?: boolean
}

const Layout = ({ children, home }: Props) => {
    return (
        <div className="relative min-h-screen" style={{ background: '#f8fafc' }}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="技術的なまとめとか、所感とかを気ままに。" />
                <meta property="og:image" content="https://motosbt.vercel.app/images/motosbt.png" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:image" content="https://motosbt.vercel.app/images/motosbt.png" />
                <meta name="twitter:site" content="@moto_sbt" />
            </Head>

            {home ? <HomeHeader /> : <PostHeader />}
            <main className={home ? 'py-6' : 'max-w-3xl mx-auto px-6 py-10'}>
                {children}
            </main>
            {home ? <HomeFooter /> : <PostFooter />}
        </div>
    );
}

export default Layout;
