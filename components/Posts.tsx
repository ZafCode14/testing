import { fetchPostData } from "@/actions/firebaseActions";

async function Posts() {
  let posts = [];

  try {
    posts = await fetchPostData();
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return <p>Error loading posts.</p>;
  }

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