"use server";
import { collection, deleteDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { revalidatePath } from "next/cache";

/** POST (add a new post to the firstore post collection) */
export async function addNewPost(post: {title: string, text: string}) {
  const title = post.title;
  const text = post.text;

  if (!title || !text) {
    throw new Error("Both title and text are required.");
  }

  try {
    const docRef = doc(collection(firestore, "posts"));
    const id = docRef.id;
    const createdAt = Timestamp.now()

    await setDoc(docRef, {id, title, text, createdAt})

    revalidatePath('/crud')
  } catch (error) {
    console.error("Failed to add new post:", error);
    throw error;
  }
}

/** PUT (Edit a post in the Firestore by Id) */
export async function editPost(post: { title: string; text: string, id: string }) {
  if (!post.id || !post.title || !post.text) {
    throw new Error("ID, title, and text are required.");
  }

  try {
    const postRef = doc(firestore, "posts", post.id);

    await setDoc(postRef, { ...post }, { merge: true });

    revalidatePath('/crud');
  } catch (error) {
    console.error("Failed to edit the post:", error);
    throw error;
  }
}

/** DELETE (delete a post from the firestore post collection by Id) */
export async function deletePost(id: string) {
  try {
    const postRef = doc(firestore, "posts", id);
    await deleteDoc(postRef);

    revalidatePath('/crud')
  } catch (error) {
    console.error("Failded to delete the post", error);
    throw error;
  }
}