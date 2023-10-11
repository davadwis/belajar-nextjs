import Layout from "@/layout";
import { useRouter } from "next/router";

const UsersByName = () => {
  const router = useRouter();
  const { id } = router?.query;

  return (
    <>
      <Layout
      metaTitle={ id }
      metaDescription={ "All Information About " + id }
      >
        <div className="w-full h-screen m-auto grid">
        <div className="grid content-center justify-items-center p-4 font-light text-2xl">
          Halo, { id }
        </div>
      </div>
      </Layout>
    </>
  )
}
export default UsersByName;