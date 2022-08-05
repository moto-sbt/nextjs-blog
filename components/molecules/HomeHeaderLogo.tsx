import Image from 'next/image';
import { CircleLogo } from 'components/atoms/CircleLogo';

export const HomeHeaderLogo = () => {
    return (
        <>
            <CircleLogo
                src="/images/profile.png"
                size={144}
            />
            <h1 className="text-4xl font-extrabold tracking-tight my-4">motosbt</h1>
        </>
    )
}