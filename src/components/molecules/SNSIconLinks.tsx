import GithubIconLink from "@/components/atoms/GithubIconLink"
import TwitterIconLink from "@/components/atoms/TwitterIconLink"
import YouTubeIconLink from "@/components/atoms/YouTubeIconLink"
import TiktokIconLink from "@/components/atoms/TiktokIconLink"
import InstagramIconLink from "@/components/atoms/InstagramIconLink"

const SNSIconLinks = () => {
    return (
        <>
            <GithubIconLink id="moto-sbt" size={40} repository="nextjs-blog" />
            <TwitterIconLink id="moto_sbt" size={40} />
            <YouTubeIconLink id="UCn5JtdxpDzCRiSM7fdomt9g" size={40} />
            <TiktokIconLink id="moto-sbt" size={40} />
            <InstagramIconLink id="moto_sbt" size={40} />
        </>
    );
}

export default SNSIconLinks