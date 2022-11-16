import LinkButton from '@/components/atoms/LinkButton'

const PostFooter = () => {
    return (
        <div className="mt-12">
            <LinkButton href="/" text="← Back to home" />
            <hr className="my-3 border-gray-dark" />
            <span className="text-sm text-gray sm:text-center">© 2022 motosbt. All Rights Reserved.
            </span>
        </div>
    );
}

export default PostFooter