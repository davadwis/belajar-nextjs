import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const DynamicLayout = dynamic(() => import('@/layout'), {
  loading: () => <p>Loading...</p>,
})

const DetailNotes = ({ notes }) => {

  const router = useRouter()

  let data = notes.data;

  return(
    <>
      <DynamicLayout
      metaTitle={"Notes " + data.title}
      metaDescription={"All Detail From Notes" + data.title}
      >
        <div className="w-full h-screen m-auto grid place-content-center">
          <div className="grid content-center justify-items-center font-light text-2xl">
            <div className='border-2 border-gray-500 rounded-md p-4 w-96'>
              <h3 className='font-semibold'>{data.title}</h3>
              <p className='text-base pt-3'>Description: </p>
              <p className='text-gray-400 text-justify'>{data.description}</p>
              <div className='grid justify-center pt-4' onClick={() => router.back()}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Back
                </span>
              </button>
              </div>
              <div className='grid justify-end pt-2 pb-2'>                
                <p className='text-xs'>Updated at: {data.updated_at}</p>
              </div>
            </div>
          </div>
        </div>
      </DynamicLayout>
    </>
  )
}
export default DetailNotes;

export async function getStaticPaths() {

  const res = await fetch('https://paace-f178cafcae7b.nevacloud.io/api/notes')
  const notes = await res.json();

  const paths = notes.data.map((item) =>({
    params: {
      id: item.id
    }
  }))

  return {
    paths,
    fallback: false,
  }
}
 
export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`)
  const notes = await res.json()
  return { props: { notes }, revalidate: 10 }
}
