import SNSIconLinks from '@/components/molecules/SNSIconLinks';
import CopyRight from '@/components/atoms/CopyRight'

const HomeFooter = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <SNSIconLinks />
            </div>
            <hr className="my-3 border-gray-dark" />
            <CopyRight />
        </>
    );
}

export default HomeFooter