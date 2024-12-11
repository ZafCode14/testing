import { deletePost, editPost } from "@/actions/firebaseActions";
import { deletePostR, editPostR } from "@/store/postsSlice";
import { RootState } from "@/store/store";
import { PostType } from "@/types/types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type PostProp = {
  index: number;
}
function Post({ index }: PostProp) {
  const clientPosts = useSelector((state: RootState) => state.posts.value);
  const post = clientPosts[index];

  const [isEdit, setIsEdit] = useState(false);
  const [editedPost, setEditedPost] = useState<PostType>({
    title: post.title,
    text: post.text,
    id: post.id
  })

  useEffect(() => {
    setIsEdit(false);
    setEditedPost({
      title: post.title,
      text: post.text,
      id: post.id
    })
  }, [post]);

  const dispatch = useDispatch();

  return (
    <li className={`
      bg-[#a5a5ff] my-2 p-2 rounded-md
    `}>
      <div className={`flex w-full justify-between`}>
        {
          isEdit
          ? <div className={`flex flex-col`}>
              <input
                  placeholder="Enter the title"
                  className={`rounded-md mb-2`}
                  value={editedPost.title}
                  onChange={(e) => 
                    setEditedPost((prev) => ({ ...prev, title: e.target.value }))
                  }
                />
              <input
                  placeholder="Enter the text"
                  className={`rounded-md`}
                  value={editedPost.text}
                  onChange={(e) => 
                    setEditedPost((prev) => ({ ...prev, text: e.target.value }))
                  }
                />
            </div>
          : <div className={`flex flex-col`}>
              <h2 className={`font-bold mb-2`}>{post.title}</h2>
              <p>{post.text}</p>
            </div>
        }

        <div>
          {/** Save Button */
            isEdit &&
            <button 
              onClick={() => {
                dispatch(editPostR({ index, post: editedPost }));
                setIsEdit(false)
                editPost(editedPost)
              }} 
              className={`
                bg-[green] rounded px-3 text-white mr-3
              `}
            >Save</button>
          }
          {/** Edit / Cancel Button */}
          <button 
            onClick={() => setIsEdit(!isEdit)} 
            className={`
            ${isEdit ? "bg-[#ff5b5b]" : "bg-[blue]"}
              rounded px-3 text-white mr-3
            `}
          >{isEdit ? "Cancel" : "Edit"}</button>
          {/** Delete button */}
          <button 
            onClick={() => {
              dispatch(deletePostR(index))
              deletePost(post.id)
            }} 
            className={`
              bg-[red] rounded px-3 text-white
            `}
          >Delete</button>
        </div>
      </div>
    </li>
  );
}

export default Post;