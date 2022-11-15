import HeaderTitle from '@/components/molecules/HeaderTitle';
import CircleLogo from '@/components/atoms/CircleLogo';

const HomeHeader = () => {
    return (
        <div className="flex items-center space-x-4">
            <CircleLogo
                src="/images/profile.png"
                size={80}
            />
            <div className="font-medium">
                <div>motosbt</div>
                <HeaderTitle />
            </div>
        </div>
    )
}

export default HomeHeader