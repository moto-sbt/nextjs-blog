import { FaGithub } from "react-icons/fa";

export const GithubIconLink = ({
    size,
    id,
    repository
} : {
    size: number
    id: string
    repository?: string
}) => {
    return (
        <a className='text-black m-2' href={`https://github.com/${id}/${repository}`}>
            <FaGithub size={size} />
        </a>
    );
}

GithubIconLink.defaultProps = {
    repository: ""
}