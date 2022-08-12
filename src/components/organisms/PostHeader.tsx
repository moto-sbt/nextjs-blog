import Link from 'next/link';
import CircleLogo from '@/components/atoms/CircleLogo';

const PostHeader = () => {
    return (
        <>
            <Link href="/">
                <a>
                    <CircleLogo src="/images/profile.png" size={108} />
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

export default PostHeader