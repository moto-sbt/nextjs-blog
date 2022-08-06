import { GithubIconLink } from "components/atoms/GithubIconLink"
import { TwitterIconLink } from "components/atoms/TwitterIconLink"

export const SNSIconLinks = () => {
    return (
        <>
            <GithubIconLink id="moto-sbt" size={40} />
            <TwitterIconLink id="moto-sbt" size={40} />
        </>
    );
}