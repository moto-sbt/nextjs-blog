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

const Layout = ({
    children,
    home
}: Props) => {
    return (<div className="max-w-xl px-4 py-0 mt-12 mx-auto mb-24">
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta 
                name='description'
                content='技術的なまとめとか、所感とかを気ままに。'
            />
            <meta property='og:image' content="https://motosbt.vercel.app/images/motosbt.png" />
            <meta name='og:title' content={siteTitle} />
            {/* <meta name='twitter:card' content='summary_large_image' /> */}
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:image' content='https://motosbt.vercel.app/images/motosbt.png' />
            <meta name="twitter:site" content="@moto_sbt" />
        </Head>
        <header className="flex flex-col items-center">
            { home ? <HomeHeader /> : <PostHeader /> }
        </header>
        <main>{children}</main>
        <footer>
            { home ? <HomeFooter /> : <PostFooter /> }
        </footer>
    </div>);
}

export default Layout