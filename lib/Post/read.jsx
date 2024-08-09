"use client"

import { db } from '../../firebase/firebase'
import { collection, doc, getDoc, getDocs, onSnapshot ,query,where} from 'firebase/firestore'
import useSWRSubscription from 'swr/subscription'

//this is to fetch the post collection 
export function usePosts() {
    
  
    const { data, error } = useSWRSubscription(['Post'], ([path], { next }) => {
        const ref = collection(db, path);
        const unsub = onSnapshot(ref, (snaps) => {
            const posts = snaps.docs.map((doc) => doc.data());
            next(null, posts);
        }, (error) => {
            next(error?.message);
        });
        return () => unsub();
    })
    return {
        data,
        error,
        isLoading: data === undefined ? true : false,
    }
}

export const getPost = async (id) => {
    return await getDoc(doc(db, `Post/${id}`));
}