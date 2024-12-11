"use client";
import { addNewPost } from "@/actions/firebaseActions";
import { addPostR } from "@/store/postsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

function AddPost() {
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState({
    title: "",
    text: ""
  });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value
    }));
  };

  return (
    <form action={addNewPost} className={`
      flex flex-col justify-center
      bg-[#c9c9c9] p-2 rounded-md mt-10
    `}>
      <input
        name="title"
        placeholder="Enter post title"
        className="mb-2 px-2 rounded-md"
        value={newPost.title}
        onChange={handleInputChange}
        required
      />
      <input
        name="text"
        placeholder="Enter post text"
        className="mb-2 px-2 rounded-md"
        value={newPost.text}
        onChange={handleInputChange}
        required
      />
      <button 
        disabled={newPost.title === "" || newPost.text === ""}
        onClick={() => dispatch(addPostR(newPost))}
        type="submit" 
        className={`bg-[#4e4eff] rounded-md`}
      >Add</button>
    </form>
  );
}

export default AddPost;