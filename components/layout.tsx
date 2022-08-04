import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaTwitter } from "react-icons/fa";

const name = 'motosbt';
export const siteTitle = 'motosbt';

export default function Layout({
    children,
    home
}: {
    children: React.ReactNode
    home?: boolean
}) {
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
            {home ? (
                <>
                    <Image
                        priority
                        src="/images/profile.png"
                        className="rounded-full"
                        height={144}
                        width={144}
                        alt={name}
                    />
                    <h1 className="text-4xl font-extrabold tracking-tight my-4">{name}</h1>
                </>
            ) : (
                <>
                    <Link href="/">
                    <a>
                        <Image
                        priority
                        src="/images/profile.png"
                        className="rounded-full"
                        height={108}
                        width={108}
                        alt={name}
                        />
                    </a>
                    </Link>
                    <h2 className="text-2xl font-bold leading-loose mt-2 mb-4">
                        <Link href="/">
                            <a className="text-inherit">{name}</a>
                        </Link>
                    </h2>
                </>
            )}
        </header>
        <main>{children}</main>
        {home ? (
            <footer className="flex justify-center items-center">
                <a className='text-black m-2' href="https://github.com/moto-sbt/nextjs-blog">
                    <FaGithub size={40} />
                </a>
                <a className='text-twitter m-2' href="https://twitter.com/moto_sbt">
                    <FaTwitter size={40} />
                </a>
            </footer>
        ) : (
        <div className="mt-12">
            <Link href="/">
                <a>← Back to home</a>
            </Link>
        </div>
        )}
    </div>);
}