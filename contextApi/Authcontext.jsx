"use client"
import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../firebase/firebase.js';
import { signInWithPopAuthProviderup, signOut } from 'firebase/auth'; 
import { useContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
export const AuthContext = createContext();

export default function Authprovider({ children }){
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth,(user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  



         




  const signOutUser = async () => {
   try {
       await auth.signOut();
       setCurrentUser(null);
       router.push('/');
       // Optionally, you can redirect to a different page or update local state upon successful logout
   } catch (error) {
       console.error('Failed to log out');
       // Handle logout error
   }
};
  
  const handleClick=(e)=>{
    //for google login and password 
    signInWithPopup(auth,Provider).then((data)=>{
    setValue(data.user.email)
    // localStorage.setItem("email",data.user.email);
    router.push("/pages/createblog")
   })
}


  

  return (
    <AuthContext.Provider
      value={{
        handleClick,
        currentUser,
        signOutUser
        }}>
      { children }
    </AuthContext.Provider>
  );
;
}

export const  useAuthContext =()=>useContext(AuthContext);


