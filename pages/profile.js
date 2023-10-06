import Layout from "@/layout";

const Profile = ({ children }) => {
  return(
    <>
     <Layout>
     <div className="w-full h-screen m-auto grid">
        <div className="grid content-center justify-items-center p-4 font-light text-2xl">
          Ini adalah Profile
        </div>
      </div>
     </Layout>
    </>
  )
}
export default Profile;