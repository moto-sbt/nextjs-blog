import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '@/components/layout';
import { getAllTags } from '@/lib/posts';

export const getStaticProps: GetStaticProps = async () => {
  const tags = getAllTags();
  return {
    props: {
      tags,
    },
  };
}

type Props = {
  tags: string[]
}

const TagsIndex = ({ tags }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-xl leading-6 pt-px">
        <h2 className="text-2xl font-bold mb-6">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/tags/${tag}`}>
              <a className="tag-pill">#{tag}</a>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default TagsIndex
