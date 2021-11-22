import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
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
        </Layout>
    );
}
