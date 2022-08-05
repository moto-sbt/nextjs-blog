import { FaGithub, FaTwitter } from "react-icons/fa";

export const IconLinks = () => {
    return (
        <>
            <a className='text-black m-2' href="https://github.com/moto-sbt/nextjs-blog">
                <FaGithub size={40} />
            </a>
            <a className='text-twitter m-2' href="https://twitter.com/moto_sbt">
                <FaTwitter size={40} />
            </a>
        </>
    );
}