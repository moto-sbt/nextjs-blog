import GithubIconLink from "@/components/atoms/GithubIconLink"
import TwitterIconLink from "@/components/atoms/TwitterIconLink"

const SNSIconLinks = () => {
    return (
        <>
            <GithubIconLink id="moto-sbt" size={40} repository="nextjs-blog" />
            <TwitterIconLink id="moto_sbt" size={40} />
        </>
    );
}

export default SNSIconLinks