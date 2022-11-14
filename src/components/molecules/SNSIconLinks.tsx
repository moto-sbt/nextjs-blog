import GithubIconLink from "@/components/atoms/GithubIconLink"
import TwitterIconLink from "@/components/atoms/TwitterIconLink"
import YouTubeIconLink from "@/components/atoms/YouTubeIconLink"

const SNSIconLinks = () => {
    return (
        <>
            <GithubIconLink id="moto-sbt" size={40} repository="nextjs-blog" />
            <TwitterIconLink id="moto_sbt" size={40} />
            <YouTubeIconLink id="UCn5JtdxpDzCRiSM7fdomt9g" size={40} />
        </>
    );
}

export default SNSIconLinks