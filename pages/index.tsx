import Head from 'next/head';
import Layout, { siteTitle } from 'components/layout';
import { getSortedPostsData } from 'lib/posts';
import { GetStaticProps } from 'next';
import { PostItems } from 'components/organisms/PostItems'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({
  allPostsData
} : {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
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