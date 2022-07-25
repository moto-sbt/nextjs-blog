import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utileStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utileStyles.headingMd}>
        <p>Hello, I'm <b>motosbt</b></p>
        <p>You can contact me on <a href="https://twitter.com/moto_sbt">Twitter</a></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utileStyles.headingMd} ${utileStyles.padding1px}`}>
        <h2 className={utileStyles.headingLg}>Blog</h2>
        <ul className={utileStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utileStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
