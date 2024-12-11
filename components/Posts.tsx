"use client";
import { PostType } from "@/types/types";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { setPostsR } from "@/store/postsSlice"
import { RootState } from "@/store/store";
import { useEffect } from "react";

type PostProps = {
  posts: PostType[]
}
function Posts({ posts }: PostProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPostsR(posts));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  const clientPosts = useSelector((state: RootState) => state.posts.value);
  return (
    <ul className={`w-[600px] max-w-full my-10 px-5`}>
      {
        clientPosts.map((post, index) => (
          <Post 
            key={index} 
            index={index} 
          />
        ))
      }
    </ul>
  );
}

export default Posts;