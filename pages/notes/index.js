import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DynamicLayout = dynamic(() => import("@/layout"), {
  loading: () => <p>Loading...</p>,
});

const Notes = () => {
  const router = useRouter();
  const [notes, setNotes] = useState();

  useEffect(() => {
    async function fetchingData() {
      const res = await fetch(
        "https://paace-f178cafcae7b.nevacloud.io/api/notes"
      );
      const listNotes = await res.json();
      setNotes(listNotes);
    }
    fetchingData();
  }, []);

  return (
    <>
      <DynamicLayout metaTitle="Notes" metaDescription="All Notes">
        <div className="w-full grid place-content-center mt-24">
          <div className="flex justify-between">
            <h2 className="text-3xl font-semibold">Notes: </h2>
            <Link href={`/notes/add`}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  + New Notes
                </span>
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 p-4 font-light text-2xl gap-4 place-content-center">
            {notes?.data?.map((item) => (
              <>
                <div className="border-2 border-gray-500 rounded-md p-4">
                  <h3 className="font-semibold">{item?.title}</h3>
                  <p className="text-gray-400 text-lg">{item.description}</p>
                  <div className="flex pt-6 place-content-end">
                    {/* <Link href={`/notes/${item?.id}`}>
                      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Open
                        </span>
                      </button>
                    </Link> */}
                    <Link href="#">
                      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Edit
                        </span>
                      </button>
                    </Link>
                    <Link href="#">
                      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Delete
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
  );
};
export default Notes;

// export async function getStaticProps() {
//   const res = await fetch('https://paace-f178cafcae7b.nevacloud.io/api/notes')
//   const notes = await res.json()
//   return { props: { notes }, revalidate: 10 }
// }
