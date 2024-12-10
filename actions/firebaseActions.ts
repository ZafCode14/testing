"use server";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

export async function addNewPost(formData: FormData) {
  const title = formData.get("title") as string;
  const text = formData.get("text") as string;

  if (!title || !text) {
    throw new Error("Both title and text are required.");
  }

  try {
    await addDoc(collection(firestore, "posts"), { title, text });
  } catch (error) {
    console.error("Failed to add new post:", error);
    throw error;
  }

}

export async function fetchPostData() {
  try {
    const postsRef = collection(firestore, "posts");
    const querySnapshot = await getDocs(postsRef);

    return querySnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error("Error fetching page data:", error);
    return [];
  }
}