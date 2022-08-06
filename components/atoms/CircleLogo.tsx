import Image from 'next/image';

export const CircleLogo = ({ size, src }) => {
    return (
        <Image
            priority
            src={src}
            className="rounded-full"
            height={size}
            width={size}
            alt='motosbt'
        />
    );
}