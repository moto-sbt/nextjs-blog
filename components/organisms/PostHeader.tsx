import Link from 'next/link';
import Image from 'next/image';

export const PostHeader = () => {
    return (
        <>
            <Link href="/">
                <a>
                    <Image
                    priority
                    src="/images/profile.png"
                    className="rounded-full"
                    height={108}
                    width={108}
                    alt='motosbt'
                    />
                </a>
            </Link>
            <h2 className="text-2xl font-bold leading-loose mt-2 mb-4">
                <Link href="/">
                    <a className="text-inherit">motosbt</a>
                </Link>
            </h2>
        </>
    )
}