import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from 'components/layout';
import PostItems from 'components/organisms/PostItems';
import { getSortedPostsDataByTag } from 'lib/posts';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const allPostsDataByTag = getSortedPostsDataByTag(params.tag as string);
  return {
    props: {
      allPostsDataByTag,
    },
  };
}

type Props = {
  allPostsDataByTag: {
    date: string
    title: string
    id: string
    tags: Array<string>
  }[]
}

const Tags = ({ allPostsDataByTag }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-xl leading-6 pt-px">
        <PostItems allPostsData={allPostsDataByTag} />
      </section>
    </Layout>
  );
}

export default Tags