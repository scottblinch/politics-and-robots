import Head from 'next/head'
import Link from 'next/link'
import PageLayout from '../components/page-layout';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Politics and Robots</title>
        <meta name="description" content="A web app to mess around with the Politics and War API." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <h1 className={styles.title}>
          Politics and Robots
        </h1>

        <p className={styles.description}>
          A web app to mess around with the Politics and War API.
        </p>

        <div className={styles.grid}>
          <Link href="nation-list">
            <div className={styles.card}>
              <h2>Nation List &rarr;</h2>
              <p>A basic listing of nations. To start with.</p>
            </div>
          </Link>
        </div>
      </PageLayout>
    </>
  )
}
