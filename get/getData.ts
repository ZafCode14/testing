import { firestore } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export async function fetchPostData() {
  try {
    const postsRef = collection(firestore, "posts");
    const postsQuery = query(postsRef, orderBy("createdAt", "desc"));

    const querySnapshot = await getDocs(postsQuery);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      text: doc.data().text
    }));
  } catch (error) {
    console.error("Error fetching page data:", error);
    return [];
  }
}