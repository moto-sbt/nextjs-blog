import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';
import PostItems from '@/components/organisms/PostItems';
import { getSortedPostsDataByTag, getAllTags } from '@/lib/posts';

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags();
  return {
    paths: tags.map(tag => ({ params: { tag }})),
    fallback: false // 404ページに飛ばす
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPostsDataByTag = getSortedPostsDataByTag(params.tag as string);

  return {
    props: {
      allPostsDataByTag,
      tag: params.tag
    },
  };
}

type Props = {
  allPostsDataByTag: {
    date: string
    title: string
    id: string
    tags: Array<string>
  }[],
  tag: string
}

const Tags = ({ allPostsDataByTag, tag }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-xl leading-6 pt-px">
        <PostItems title={`#${tag}`} allPostsData={allPostsDataByTag} />
      </section>
    </Layout>
  );
}

export default Tags