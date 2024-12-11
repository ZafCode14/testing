import AddPost from "@/app/crud/components/AddPost";
import Posts from "@/app/crud/components/Posts";
import { fetchPostData } from "@/fetching/getData";
import Link from "next/link";

export default async function Home() {
  const posts = await fetchPostData();

  return (
    <main className={`w-full flex flex-col items-center justify-center`}>
      <Link href={'/'}>Home</Link>
      <AddPost/>
      <Posts posts={posts}/>
    </main>
  );
}