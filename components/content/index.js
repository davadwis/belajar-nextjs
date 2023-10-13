import Image from "next/image";

const Content = () => {
  return (
    <>
      <div className="w-full h-screen m-auto grid">
        <div className="grid content-center justify-items-center p-4 font-light text-2xl">
          <div className="grid md:grid-cols-2">
            <div className="text-center">
              <p>Tanpa Next Image</p>
              <img src="../vektor.png" alt="vektor" width={400} height={400}/>
            </div>
            <div className="text-center">
              <p>Next Image</p>
              <Image src="/vektor.png" alt="vektor" width={400} height={400}/>
            </div>
          </div>    
        </div>
      </div>
    </>
  )
}
export default Content;