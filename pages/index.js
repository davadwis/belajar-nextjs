import Content from '@/components/content';
import Layout from '@/layout';

const Home = ({ children })  => {
  return (
    <>
      <Layout
      metaTitle="Home"
      >
        <Content />
      </Layout>
    </>
  )
}
export default Home;
