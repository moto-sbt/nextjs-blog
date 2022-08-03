import Layout from 'components/layout';
import Date from 'components/date';
import { getAllPostIds, getPostData } from 'lib/posts'
import Head from 'next/head';
import utilStyles from 'styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next';
import 'prismjs/themes/prism-tomorrow.css';

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
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

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