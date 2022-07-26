import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Layout from '@/components/layout';
import Date from '@/components/atoms/Date';
import { getAllPostIds, getPostData } from '@/lib/posts'
import 'prismjs/themes/prism-tomorrow.css';

export const getStaticPaths: GetStaticPaths = async () => {
    // id の可能な値のリストを返す
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false, // ?
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // params.id　を使用してブログ投稿に必要なデータを取得
    const postData = await getPostData(params.id as string);
    return {
        props: {
            postData,
        },
    };
}

type Props = {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}

const Post = ({ postData }: Props) => {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className="text-3xl font-extrabold leading-9 my-4 mt-20">{postData.title}</h1>
                <div className="text-gray">
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export default Post