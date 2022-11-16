import LinkButton from '@/components/atoms/LinkButton'
import CopyRight from '@/components/atoms/CopyRight'

const PostFooter = () => {
    return (
        <div className="mt-12">
            <LinkButton href="/" text="← Back to home" />
            <hr className="my-3 border-gray-dark" />
            <CopyRight />
        </div>
    );
}

export default PostFooter