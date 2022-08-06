import { FaGithub } from "react-icons/fa";

type Props = {
    size: number
    id: string
    repository?: string
}

const GithubIconLink = ({
    size,
    id,
    repository
}: Props) => {
    return (
        <a className='text-black m-2' href={`https://github.com/${id}/${repository}`}>
            <FaGithub size={size} />
        </a>
    );
}

GithubIconLink.defaultProps = {
    repository: ""
}

export default GithubIconLink