import { firestore } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

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
