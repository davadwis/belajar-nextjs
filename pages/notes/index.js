import dynamic from 'next/dynamic';
import Link from 'next/link';

const DynamicLayout = dynamic(() => import('@/layout'), {
  loading: () => <p>Loading...</p>,
})

const Notes = ({ notes })  => {

  console.log("Notes data => ", notes)
  return (
    <>
      <DynamicLayout
      metaTitle="Notes"
      metaDescription="All Notes"
      >
        <div className="w-full h-screen grid place-content-center">
          <div className="grid grid-cols-2 p-4 font-light text-2xl gap-4 place-content-center">
            {notes.data.map((item) => (
              <>
                <div className='border-2 border-gray-500 rounded-md p-4 m-3/4'>
                    <h2 className='font-semibold'>{item.title}</h2>
                    <p className='text-gray-400 text-lg'>{item.description}</p>
                    <div className='grid justify-end py-2'>
                      <Link href={`/notes/${item.id}`}>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Open Notes
                          </span>
                        </button>
                      </Link>
                    </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </DynamicLayout>
    </>
  )
}
export default Notes;

export async function getStaticProps() {
  const res = await fetch('https://paace-f178cafcae7b.nevacloud.io/api/notes')
  const notes = await res.json()
  return { props: { notes }, revalidate: 10 }
}
