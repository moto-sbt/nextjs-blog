import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { ReactNode } from "react";
import Layout from '@/components/layout';
import Date from '@/components/atoms/Date';
import CodeBlock from '@/components/atoms/CodeBlock';
import LinkCard from '@/components/atoms/LinkCard';
import ProgressBar from '@/components/atoms/ProgressBar';
import ReadingTime from '@/components/atoms/ReadingTime';
import { getAllPostIds, getPostData } from '@/lib/posts'
import 'prismjs/themes/prism-tomorrow.css';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

export const getStaticPaths: GetStaticPaths = async () => {
    // id の可能な値のリストを返す
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
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
        readingTime: number
        contentHtml: MDXRemoteSerializeResult
    }
}

const components = {
    Date,
    LinkCard,
    code: (props: JSX.IntrinsicAttributes & { children?: ReactNode }) => (
        <CodeBlock {...props} />
    ),
}

const Post = ({ postData }: Props) => {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <ProgressBar />
            <article>
                {/* 記事ヘッダー */}
                <div className="mb-10">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {/* タグは postData に含まれる場合 */}
                    </div>
                    <h1
                        className="text-3xl font-black leading-tight tracking-tight mb-4"
                        style={{ color: '#0f172a' }}
                    >
                        {postData.title}
                    </h1>
                    <div
                        className="flex items-center gap-3 text-xs font-mono pb-6"
                        style={{
                            color: '#64748b',
                            borderBottom: '1px solid #e2e8f0',
                        }}
                    >
                        <Date dateString={postData.date} />
                        <span style={{ color: '#cbd5e1' }}>·</span>
                        <ReadingTime minutes={postData.readingTime} />
                    </div>
                </div>
                <div className="post-body">
                    <MDXRemote {...postData.contentHtml} components={components} />
                </div>
            </article>
        </Layout>
    );
}

export default Post
