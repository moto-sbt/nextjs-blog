import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utileStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';

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
      <section className={utileStyles.headingMd}>
        <p className={utileStyles.lightText}>技術的なまとめとか、所感とかを気ままに。</p>
      </section>
      <section className={`${utileStyles.headingMd} ${utileStyles.padding1px}`}>
        <h2 className={utileStyles.headingLg}>Blog</h2>
        <ul className={utileStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utileStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
							<br />
							<small className={utileStyles.lightText}>
								<Date dateString={date} />
							</small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}