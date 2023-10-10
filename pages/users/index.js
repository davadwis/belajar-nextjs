import Layout from "@/layout";
import Link from "next/link";

const Users = () => {
  return(
    <>
      <Layout
      metaTitle="Users"
      metaDescription="All Information About Users"
      >
        <div className="w-full h-screen m-auto grid">
          <div className="grid content-center justify-items-center p-4 font-light text-2xl gap-4">
            <p>
              Ini adalah Users
            </p>
            <Link href="/users/details">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Details
                </span>
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default Users;