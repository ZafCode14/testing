import { fetchPostData } from "@/get/getData";

async function Posts() {
  const posts = await fetchPostData();

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}

export default Posts;