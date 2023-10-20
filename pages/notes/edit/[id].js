import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@/hooks/useMutation";

const DynamicLayout = dynamic(() => import("@/layout"), {
  loading: () => <p>Loading...</p>,
});

const EditNotes = () => {
  const { mutate } = useMutation();
  const router = useRouter();
  const { id } = router?.query;
  const [notes, setNotes] = useState({
    title: "",
    description: "",
  });

  const HandleSubmit = async () => {
    const response = await mutate({
      url: `https://paace-f178cafcae7b.nevacloud.io/api/notes/update/${id}`,
      method: "PATCH",
      payload: notes,
    });
    if (response?.success) {
      router.push("/notes");
    }
  };

  return (
    <>
      <DynamicLayout
        metaTitle="Add New Notes"
        metaDescription="Form to Make a New Notes"
      >
        <div className="w-full m-auto grid place-content-center mt-24">
          <h2 className="text-3xl font-semibold py-4 text-center">
            Edit Notes
          </h2>
          <div className="grid content-center justify-items-center font-light text-2xl">
            <div className="border-2 border-gray-500 rounded-md p-4 w-96">
              <div className="mb-6">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={(event) =>
                    setNotes({ ...notes, title: event.target.value })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="large-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  onChange={(event) =>
                    setNotes({ ...notes, description: event.target.value })
                  }
                  className="text-base block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </div>
              <div className="flex place-content-end gap-2">
                <button
                  onClick={() => router.back()}
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={() => HandleSubmit()}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </DynamicLayout>
    </>
  );
};
export default EditNotes;
