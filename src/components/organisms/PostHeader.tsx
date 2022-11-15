import Link from 'next/link';
import HeaderTitle from '@/components/molecules/HeaderTitle';
import CircleLogo from '@/components/atoms/CircleLogo';

const PostHeader = () => {
    return (
        <Link href="/">
            <div className="flex items-center space-x-4">
                <CircleLogo
                    src="/images/profile.png"
                    size={55}
                />
                <div className="font-medium">
                    <div>motosbt</div>
                    <HeaderTitle />
                </div>
            </div>
        </Link>
    )
}

export default PostHeader