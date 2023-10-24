import ModalCreate from "@/components/modal-create";
import ModalDelete from "@/components/modal-delete/[id]";
import ModalEdit from "@/components/modal-edit/[id]";
import ModalNotes from "@/components/modal-notes/[id]";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

const DynamicLayout = dynamic(() => import("@/layout"), {
  loading: () => <p>Loading...</p>,
});

const Notes = ({ data }) => {
  const router = useRouter();

  // const handleDelete = async (id) => {
  //   const response = await fetch(
  //     `http://localhost:3000/api/notes/delete/${id}`,
  //     {
  //       method: "DELETE",
  //     }
  //   );
  //   if (response?.ok) {
  //     router.reload();
  //   }
  // };

  return (
    <>
      <DynamicLayout metaTitle="Notes" metaDescription="All Notes">
        <div className="w-full grid place-content-center mt-24 mb-24">
          <div className="flex justify-between">
            <h2 className="text-3xl font-semibold px-2">Notes: </h2>
            <ModalCreate />
          </div>
          <div className="grid md:grid-cols-2 p-4 font-light text-2xl gap-4 place-content-center">
            {data?.data?.map((item) => (
              <>
                <div className="border-2 border-gray-500 rounded-md p-4 w-96 h-44">
                  <h3 className="font-semibold">{item?.title}</h3>
                  <p className="text-gray-400 text-lg line-clamp-1">
                    {item?.description}
                  </p>
                  <div className="flex pt-6 place-content-end gap-2">
                    <ModalNotes id={item?.id} />
                    <ModalEdit id={item?.id} />
                    <ModalDelete id={item?.id} />
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

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/notes");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
