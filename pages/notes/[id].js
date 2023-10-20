import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "@/hooks/useMutation";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";

const DynamicLayout = dynamic(() => import("@/layout"), {
  loading: () => <p>Loading...</p>,
});

const DetailNotes = () => {
  const router = useRouter();

  const { id } = router?.query;

  const { mutate } = useMutation();

  const { data, isLoading } = useSWR(
    `https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`,
    fetcher
  );

  const handleDelete = async (id) => {
    const response = await mutate({
      url: `https://paace-f178cafcae7b.nevacloud.io/api/notes/delete/${id}`,
      method: "DELETE",
    });
    if (response?.success) {
      router.push("/notes");
    }
  };

  return (
    <>
      <DynamicLayout
        metaTitle={"Notes " + data?.data?.title}
        metaDescription={"All Detail From Notes" + data?.data?.title}
      >
        <div className="w-full m-auto grid place-content-center mt-24">
          <h2 className="text-3xl font-semibold py-4">Notes: </h2>
          {isLoading ? (
            <div className="grid p-4 font-light text-2xl gap-4 place-content-center">
              <div className="border-2 border-gray-500 rounded-md p-4 w-96 h-64">
                <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
                  <div class="flex items-center w-full space-x-2">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  </div>
                  <div class="flex items-center w-full space-x-2">
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                  </div>
                  <div class="flex items-center w-full space-x-2 max-w-[480px]">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                  </div>
                  <div className="flex pt-6 place-content-center gap-2">
                    <div class="bg-gray-200 rounded-md dark:bg-gray-600 w-20 h-8"></div>
                    <div class="bg-gray-300 rounded-md dark:bg-gray-600 w-20 h-8"></div>
                    <div class="bg-gray-400 rounded-md dark:bg-gray-600 w-20 h-8"></div>
                  </div>
                  <div className="flex pt-6 place-content-end gap-2">
                    <div class="bg-gray-400 rounded-md dark:bg-gray-600 w-20 h-2"></div>
                  </div>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid content-center justify-items-center font-light text-2xl">
              <div className="border-2 border-gray-500 rounded-md p-4 w-96">
                <h3 className="font-semibold">{data?.data?.title}</h3>
                <p className="text-base pt-3">Description: </p>
                <p className="text-gray-400 text-justify">
                  {data?.data?.description}
                </p>
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
                    <Link href={`/notes/edit/${data?.data?.id}`}>
                      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Edit
                        </span>
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(data?.data?.id)}
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Delete
                      </span>
                    </button>
                  </div>
                </div>
                <div className="grid justify-end pt-2 pb-2">
                  <p className="text-xs">
                    Updated at: {data?.data?.updated_at}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </DynamicLayout>
    </>
  );
};
export default DetailNotes;
