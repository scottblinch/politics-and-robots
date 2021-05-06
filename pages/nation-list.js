import Head from 'next/head'
import PageLayout from '../components/page-layout';

export default function NationList() {
  return (
    <>
      <Head>
        <title>Nation List - Politics and Robots</title>
      </Head>

      <PageLayout>
        <h1 className="title">
          Nation List
        </h1>

        <p>Haha I tricked you. This doesn't do anything yet.</p>
      </PageLayout>
    </>
  )
}
