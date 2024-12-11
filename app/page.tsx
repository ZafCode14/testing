import AddPost from "@/components/AddPost";
import Posts from "@/components/Posts";
import { fetchPostData } from "@/get/getData";

export default async function Home() {
  const posts = await fetchPostData();

  return (
    <main className={`w-full flex flex-col items-center justify-center`}>
      <AddPost/>
      <Posts posts={posts}/>
    </main>
  );
}