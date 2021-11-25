import Head from 'next/head';
import Link from 'next/link';

//Import components
import Header from '../components/header';
import Hero from '../components/hero';
import Date, { siteTitle } from '../components/date';
import Layout from '../components/layout';

// Import css
import styles from '../styles/index.module.css';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';

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
        <div>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Read blog posts from Jordan Lowell"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <section className={styles.heroContainer}>
                <Header></Header>
                <Hero></Hero>
            </section>
        </div>
        // <Layout home>
        //     <Head>
        //         <title>{siteTitle}</title>
        //     </Head>
        //     <section className={utilStyles.headingMd}>
        //         <p>
        //             Hi there, welcome to my blog. I am an aspiring software
        //             engineer with passions for Web Development, UX Design, and
        //             Blockchain/Web3! You can contact me on{' '}
        //             <a href="https://twitter.com/JordanDLowell">Twitter</a>!{' '}
        //         </p>
        //         <p>
        //             (This is a sample website - you’ll be building a site like
        //             this on{' '}
        //             <a href="https://nextjs.org/learn">our Next.js tutorial</a>
        //             .)
        //         </p>
        //     </section>

        //     <section
        //         className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
        //     >
        //         <h2 className={utilStyles.headingLg}>Blog</h2>
        //         <ul className={utilStyles.list}>
        //             {allPostsData.map(({ id, date, title, author }) => (
        //                 <li className={utilStyles.listItem} key={id}>
        //                     <Link href={`/posts/${id}`}>
        //                         <a>{title}</a>
        //                     </Link>
        //                     <span
        //                         className={`${utilStyles.lightText} ${utilStyles.subheading} ${style.metadata}`}
        //                     >
        //                         <Date dateString={date} />
        //                         <p>Author: {author}</p>
        //                     </span>
        //                 </li>
        //             ))}
        //         </ul>
        //     </section>
        // </Layout>
    );
}
