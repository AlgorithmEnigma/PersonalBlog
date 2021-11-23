import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import style from '../styles/index.module.css';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

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
            <section className={utilStyles.headingMd}>
                <p>
                    Hi there, welcome to my blog. I am an aspiring software
                    engineer with passions for Web Development, UX Design, and
                    Blockchain/Web3! You can contact me on{' '}
                    <a href="https://twitter.com/JordanDLowell">Twitter</a>!{' '}
                </p>
                <p>
                    (This is a sample website - you’ll be building a site like
                    this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>
                    .)
                </p>
            </section>

            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title, author }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <span
                                className={`${utilStyles.lightText} ${utilStyles.subheading} ${style.metadata}`}
                            >
                                <Date dateString={date} />
                                <p>Author: {author}</p>
                            </span>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}
