import Head from 'next/head';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Content from '@/components/content';

const Home = ({ metaTitle, metaDescription })  => {
  return (
    <>
      <Head>
        <title>{`Projek NextJs - ${metaTitle}`}</title>
        <meta
        name="description"
        content={metaDescription || "Generated by create next app"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content />
      <Footer />
    </>
  )
}
export default Home;
