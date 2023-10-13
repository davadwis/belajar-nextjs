import Content from '@/components/content';
import dynamic from 'next/dynamic';

const DynamicLayout = dynamic(() => import('@/layout'), {
  loading: () => <p>Loading...</p>,
})

const Home = ({ children })  => {
  return (
    <>
      <DynamicLayout
      metaTitle="Home"
      >
        <Content />
      </DynamicLayout>
    </>
  )
}
export default Home;
