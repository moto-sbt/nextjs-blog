import GithubIconLink from "@/components/atoms/GithubIconLink"
import XTwitterIconLink from "@/components/atoms/XTwitterIconLink"
import QiitaIconLink from "@/components/atoms/QiitaLogo"
import YouTubeIconLink from "@/components/atoms/YouTubeIconLink"

const SNSIconLinks = () => {
    return (
        <>
            <GithubIconLink id="moto-sbt" size={28} />
            <XTwitterIconLink id="moto_sbt" size={28} />
            <QiitaIconLink id="motosbt" size={28} />
            <YouTubeIconLink id="UCn5JtdxpDzCRiSM7fdomt9g" size={28} />
        </>
    );
}

export default SNSIconLinks