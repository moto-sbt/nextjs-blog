import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src='https://connect.facebook.net/en_US/sdk.js'
                strategy='lazyOnload'
                onLoad={() => (
                    console.log(`script loaded correctly, window.FB has been populated`)
                )}
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
            <Image
                src="/images/profile.png"
                height={144}
                width={144}
                alt="motosbt"
            />
        </>   
    )
}