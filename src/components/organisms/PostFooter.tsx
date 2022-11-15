import Link from 'next/link';

const PostFooter = () => {
    return (
        <div className="mt-12">
            <Link href="/">
                <button type="button" className="text-blue hover:text-white border border-blue hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded-lg py-2 px-3 text-xs text-center mr-2 mb-2">
                    ← Back to home
                </button>
            </Link>
        </div>
    );
}

export default PostFooter