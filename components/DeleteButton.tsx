import { deletePost } from "@/actions/firebaseActions";

function DeleteButton({id}: {id: string}) {
  return (
    <button 
      onClick={() => deletePost(id)} 
      className={`
        bg-[red] rounded px-3 text-white
      `}
    >Delete</button>
  );
}

export default DeleteButton;