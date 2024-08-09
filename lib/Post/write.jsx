import { db ,storage} from "../../firebase/firebase";
import { ref } from "firebase/storage";
import { uploadBytes,getDownloadURL } from "firebase/storage";
import { Timestamp , doc, setDoc, getDoc,updateDoc,deleteDoc, arrayUnion } from "firebase/firestore";



export const createNewPost = async ({ data, image }) => {
  try {
    // Upload image
    const imageRef = ref(storage, `Blogs/${data?.title}.png`);
    await uploadBytes(imageRef, image);
    const imageURL = await getDownloadURL(imageRef);

    // Reference to Firestore documents
    const firestoreRef = doc(db, `Post/${data?.title}`);

    // Set or update the blog post document
    await setDoc(firestoreRef, {
      ...data,
      id: data?.title,
      author: data?.author,
      category: data?.category,
      image: imageURL,
      content: data?.content,
      timestamp: Timestamp.now(),
    });




//Category
           // Upload image
         
       


    console.log("Blog successfully added");
  } catch (error) {
    console.error("Error adding blog: ", error);
  }
};




export const updatePost = async ({ data }) => {
  if (!data?.title) {
      throw new Error("Name is undefined");
  }
  if (!data?.author) {
      throw new Error("Slug is undefined");
  }
  if (!data?.category) {
    throw new Error("Slug is undefined");
}
if (!data?.content) {
  throw new Error("Slug is undefined");
}
  

  const firestoreRef = doc(db, `posts/${data?.id}`);

  await updateDoc(firestoreRef, {
    ...data,
    id: data?.title,
    author: data?.author,
    category: data?.category,
    content: data?.content,
    timestamp: Timestamp.now(),

  });
}
export const deletePost = async (id) => {
  if (!id) {
      throw new Error("Id is required");
  }
  await deleteDoc(doc(db, `posts/${id}`));
}