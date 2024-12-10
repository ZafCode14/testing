"use server";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { revalidatePath } from "next/cache";

export async function addNewPost(formData: FormData) {
  const title = formData.get("title");
  const text = formData.get("text");

  if (!title || !text) {
    throw new Error("Both title and text are required.");
  }

  try {
    await addDoc(collection(firestore, "posts"), { title, text });
    revalidatePath('/')
  } catch (error) {
    console.error("Failed to add new post:", error);
    throw error;
  }
}