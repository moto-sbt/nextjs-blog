import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';
import TopPostItems from '@/components/organisms/TopPostItems';
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

const Home = ({ allPostsData }: Props) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <TopPostItems allPostsData={allPostsData} />
    </Layout>
  );
}

export default Home