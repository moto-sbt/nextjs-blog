import SNSIconLinks from '@/components/molecules/SNSIconLinks';

const HomeFooter = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <SNSIconLinks />
            </div>
            <hr className="my-3 border-gray-dark" />
            <span className="text-sm text-gray sm:text-center">© 2022 motosbt. All Rights Reserved.
            </span>
        </>
    );
}

export default HomeFooter