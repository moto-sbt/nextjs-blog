import Link from 'next/link';

export const PostFooter = () => {
    return (
        <div className="mt-12">
            <Link href="/">
                <a>← Back to home</a>
            </Link>
        </div>
    );
}