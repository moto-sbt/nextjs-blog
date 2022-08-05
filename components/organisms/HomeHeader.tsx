import Image from 'next/image';

export const HomeHeader = () => {
    return (
        <>
            <Image
                priority
                src="/images/profile.png"
                className="rounded-full"
                height={144}
                width={144}
                alt='motosbt'
            />
            <h1 className="text-4xl font-extrabold tracking-tight my-4">motosbt</h1>
            <section className="text-xl leading-8">
                <p className="text-gray">技術的なまとめとか、所感とかを気ままに。</p>
            </section>
        </>
    );
}