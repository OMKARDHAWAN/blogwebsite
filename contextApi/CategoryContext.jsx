"use client"

import { createNewPost,deletePost,updatePost } from "../lib/Post/write";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";
import { setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { doc } from "firebase/firestore";
const CategoryContext = createContext();
import { getCategory } from "../lib/category/read";

export default function CategoryContextProvider({ children }) {
    const router = useRouter();

    const [category, setCategory] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [image,setImage]=useState("");
    const [isDone, setIsDone] = useState(false);


      const fetchData = async (id) => {
        setError(null)
        setIsLoading(true)
        setIsDone(false)
        try {
            const res = await getCategory(id);
            if (res.exists()) {
                setCategory(res.data());
            } else {
                throw new Error(`No Post found from id ${id}`)
            }
      
        } catch (error) {
            setError(error?.message)
        }
        setIsLoading(false)
      }

      console.log(category)
    return <CategoryContext.Provider
        value={{
            category,
            isLoading,
            error,
            isDone,
            setImage,
            image,
            fetchData
        }}
    >{children}</CategoryContext.Provider>
}

export const useCategory = () => useContext(CategoryContext);