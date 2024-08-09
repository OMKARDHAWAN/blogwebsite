"use client"
import Head from 'next/head';
import Link from 'next/link';
import { useAuthContext } from '../../../../contextApi/Authcontext';
import  {useRouter } from 'next/navigation';
import { auth } from '../../../../firebase/firebase';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './login.css'
export default function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const router = useRouter();


  
  const handleLogin=(e)=>{
    e.preventDefault();
  
    
    //  if(!username||!password){
    //    toast.error("Please Fill Correct User Details")
    //  }
    //this for normal email and password login
    signInWithEmailAndPassword(auth, username, password)
  .then((userCredential) => {
  // Signed in 
  
  const user = userCredential.user;
  if(user){
     router.push("/pages/createblog")
  }
  
  // ...
  })
  .catch((error) => {
  console.log(error);
  });
  
  }

  return (
    <>
    
      <main className=" h-screen w-screen flex justify-center items-center  bg-zinc-200 main">
    <div className=' relative -top-72 right-96'>
      <ul>
        <Link href="/" className='text-black-400 cursor-pointer hover:text-blue-500 text-xl Link'>Home</Link>
      </ul>
    </div>
        <form  onClick={handleLogin}>
          <div className="form bg-white rounded-3xl shadow-2xl flex justify-start items-center flex-col w-96" style={{ height: '500px'}}>
            <h1 className="text-3xl mt-5">Login</h1>
            <div className="flex flex-col mt-7">
              <label htmlFor="username" className="text-2xl mt-1">
                Username:
              </label>
              <input
                type="email"
                name="username"
                className="w-64  border-1 border-black h-10 rounded-lg shadow-lg my-2 pl-3"
                onChange={(e) => {
                  setUsername( e.target.value)
              }}
              />

              <label htmlFor="password" className="text-2xl mt-1">
                Password:
              </label>
              <input
                type="password"
                name="password"
                className="w-64 h-10 mt-2 rounded-lg shadow-lg  border-1 border-black pl-3"
                onChange={(e) => {
                  setPassword(e.target.value)
              }}

              />
            </div>

            <span className="mt-7  text-center">
              <h2 className="text-sm ">No account? Dont worry....</h2>
              <Link href="/pages/register" className="text-sm hover:text-red-500 hover:underline">
                Please Register
              </Link>
            </span>

            <button type="submit" className="bg-black text-white w-64 h-12 rounded-3xl mt-4" >
              Login
            </button>
           
           <button  className="bg-black text-white w-64 h-12 rounded-3xl mt-4  " >Sign In with Google</button>
     
   
          </div>
        </form>
      </main>
    </>
  );
}
