import Head from 'next/head';
import Link from 'next/link';
import Date from 'components/date';
import Layout, { siteTitle } from 'components/layout';
import { getSortedPostsData } from 'lib/posts';
import { GetStaticProps } from 'next';

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
}: {
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
        <h2 className="text-2xl leading-loose my-4 font-bold">Blog</h2>
        <ul className="list-none p-0 m-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="my-6" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="leading-7">{title}</a>
              </Link>
							<br />
							<small className="text-gray">
								<Date dateString={date} />
							</small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}