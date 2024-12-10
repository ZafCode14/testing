import { addNewPost } from "@/actions/firebaseActions";

function AddPost() {
  return (
    <form action={addNewPost} className={`
      flex flex-col justify-center items-center
      bg-[#c9c9c9]
    `}>
      <input
        name="title"
        placeholder="Enter post title"
        required
      />
      <input
        name="text"
        placeholder="Enter post text"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddPost;