import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const DynamicLayout = dynamic(() => import("@/layout"), {
  loading: () => <p>Loading...</p>,
});

const DetailNotes = () => {
  const router = useRouter();

  const { id } = router?.query;

  const [notes, setNotes] = useState();

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://paace-f178cafcae7b.nevacloud.io/api/notes/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      if (result?.success) {
        router.push("/notes");
      }
    } catch (error) {}
  };

  useEffect(() => {
    async function fetchingData() {
      const res = await fetch(
        `https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`
      );
      const listNotes = await res.json();
      setNotes(listNotes?.data);
    }
    fetchingData();
  }, [id]);

  return (
    <>
      <DynamicLayout
        metaTitle={"Notes " + notes?.title}
        metaDescription={"All Detail From Notes" + notes?.title}
      >
        <div className="w-full m-auto grid place-content-center mt-24">
          <h2 className="text-3xl font-semibold py-4">Notes: </h2>
          <div className="grid content-center justify-items-center font-light text-2xl">
            <div className="border-2 border-gray-500 rounded-md p-4 w-96">
              <h3 className="font-semibold">{notes?.title}</h3>
              <p className="text-base pt-3">Description: </p>
              <p className="text-gray-400 text-justify">{notes?.description}</p>
              <div className="grid justify-center pt-4">
                <div className="flex pt-6">
                  <button
                    onClick={() => router.back()}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                  >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Back
                    </span>
                  </button>
                  <Link href={`/notes/edit/${notes?.id}`}>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Edit
                      </span>
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(notes?.id)}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                  >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Delete
                    </span>
                  </button>
                </div>
              </div>
              <div className="grid justify-end pt-2 pb-2">
                <p className="text-xs">Updated at: {notes?.updated_at}</p>
              </div>
            </div>
          </div>
        </div>
      </DynamicLayout>
    </>
  );
};
export default DetailNotes;

// export async function getStaticPaths() {
//   const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
//   const notes = await res.json();

//   const paths = notes.data.map((item) => ({
//     params: {
//       id: item.id,
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const { id } = context.params;
//   const res = await fetch(
//     `https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`
//   );
//   const notes = await res.json();
//   return { props: { notes }, revalidate: 10 };
// }
