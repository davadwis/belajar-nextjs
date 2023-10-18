import dynamic from "next/dynamic";

const DynamicLayout = dynamic(() => import("@/layout"), {
  loading: () => <p>Loading...</p>,
});

const Posts = ({ posts }) => {
  return (
    <>
      <DynamicLayout metaTitle="Posts" metaDescription="All Posts">
        <div className="w-full grid place-content-center py-20">
          <div className="grid p-4 font-light text-2xl gap-4 place-content-center">
            {posts.map((item) => (
              <>
                <div className="border-b-2 border-gray-600 p-4 w-1/2 m-auto">
                  <h3 className="font-semibold">
                    <span className="font-light border-2 border-gray-600 px-2 rounded-full">
                      {item.id}
                    </span>
                    <span> </span>
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-justify">{item.body}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </DynamicLayout>
    </>
  );
};
export default Posts;

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return { props: { posts } };
}
