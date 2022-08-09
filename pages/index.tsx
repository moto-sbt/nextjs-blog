import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from 'components/layout';
import PostItems from 'components/organisms/PostItems';
import { getSortedPostsData } from 'lib/posts';

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
      <section className="text-xl leading-6 pt-px">
        <PostItems allPostsData={allPostsData} />
      </section>
    </Layout>
  );
}

export default Home