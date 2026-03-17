import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';
import PostItems from '@/components/organisms/PostItems';
import { getSortedPostsData } from '@/lib/posts';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

type Props = {
  allPostsData: {
    date: string
    title: string
    id: string
    tags: Array<string>
  }[]
}

const Posts = ({ allPostsData }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <PostItems allPostsData={allPostsData} />
    </Layout>
  );
}

export default Posts