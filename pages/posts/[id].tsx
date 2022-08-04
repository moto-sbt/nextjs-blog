import Layout from 'components/layout';
import Date from 'components/date';
import { getAllPostIds, getPostData } from 'lib/posts'
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import 'prismjs/themes/prism-tomorrow.css';

export const getStaticPaths : GetStaticPaths = async () => {
    // id の可能な値のリストを返す
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false, // ?
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // params.id　を使用してブログ投稿に必要なデータを取得
    const postData =  await getPostData(params.id as string);
    return {
        props: {
            postData,
        },
    };
}

export default function Post({
    postData
}: {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className="text-3xl font-extrabold leading-9 my-4">{postData.title}</h1>
                <div className="text-gray">
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}