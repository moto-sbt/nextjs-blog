import Image from 'next/image';

type Props = {
    size: number
    src: string
}

const CircleLogo = ({ size, src }: Props) => {
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

export default CircleLogo