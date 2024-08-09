"use client"

import { createNewPost,deletePost,updatePost } from "../lib/Post/write";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";
import { ref } from "firebase/storage";
import { setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { doc } from "firebase/firestore";
const PostFormContext = createContext();
import { getPost } from "../lib/Post/read";
import { createNewCategory } from "../lib/category/write";

export default function PostFormContextProvider({ children }) {
    const router = useRouter();

    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [image,setImage]=useState("");
    const [isDone, setIsDone] = useState(false);


    const handleData = (key, value) => {
        setIsDone(false)
        setData({
            ...data,
            [key]: value,
        })
    }
    const handleCreate = async () => {
        setError(null);
        setIsLoading(true);
        setIsDone(false);
        await setDoc(doc(db, 'Post', data?.title), {
            Post: []
          });
        
          await setDoc(doc(db, 'Category', data?.category), {
            posts:[]
          });

          
          const Post = await createNewPost({data:data,image:image} );
          if (Post){
            setIsDone(true);
            setData({}); // Reset form data after successful submission
            setImage(null); // Reset image state
            // Optionally navigate to another page or show success message
          }

          

          const Category = await createNewCategory({data:data,image:image} );
          if (Category){
            setIsDone(true);
            setData({}); // Reset form data after successful submission
            setImage(null); // Reset image state
            // Optionally navigate to another page or show success message
          }

      
        setIsLoading(false);
      };





      const handleUpdate = async () => {
        setError(null)
        setIsLoading(true)
        setIsDone(false)
        try {
            await updatePost({ data: data });
            setIsDone(true)
        } catch (error) {
            setError(error?.message)
        }
        setIsLoading(false)
      }
      
      const handleDelete = async (id) => {
        setError(null)
        setIsLoading(true)
        setIsDone(false)
        try {
            await deletePost(id);
            setIsDone(true);
            
        } catch (error) {
            setError(error?.message)
        }
        setIsLoading(false)
      }
      

      const fetchData = async (id) => {
        setError(null)
        setIsLoading(true)
        setIsDone(false)
        try {
            const res = await getPost(id);
            if (res.exists()) {
                setData(res.data());
            } else {
                throw new Error(`No Post found from id ${id}`)
            }
      
        } catch (error) {
            setError(error?.message)
        }
        setIsLoading(false)
      }
    return <PostFormContext.Provider
        value={{
            data,
            isLoading,
            error,
            isDone,
            setImage,
            image,
            handleData,
            handleCreate,
            handleUpdate,
            handleDelete,
            fetchData
        }}
    >{children}</PostFormContext.Provider>
}

export const usePostForm = () => useContext(PostFormContext);