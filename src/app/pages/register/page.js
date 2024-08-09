"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import addimg from "../../../../public/img/upload.jpg"
import { useRouter } from 'next/navigation';
import { auth } from '../../../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import upload from '../../../../firebase/upload';
import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../../../../firebase/firebase';
import "./reg.css"
export default function Register() {




  const [avatar, setAvatar] = useState({
    file: null,
    url: ''
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      });
    } else {
      toast.error('File not uploaded!');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !username || !password || !avatar.file) {
      toast.error('Please fill all details correctly');
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Upload avatar image to Firebase Storage
      const imgUrl = await upload(avatar.file);

      // Save user details to Firestore
      await setDoc(doc(db, 'users', name), {
        Name: name,
        Email: email,
        Username: username,
        Password: password,
        imgUrl: imgUrl,
      });

      

      

      // Reset form fields and avatar after successful registration
      setName('');
      setEmail('');
      setUsername('');
      setPassword('');
      setAvatar({ file: null, url: '' });

      // Redirect to login page after successful registration
      router.push('/pages/login');

      // Display success message
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };




  return (
    <>

      <main className="h-screen w-screen flex justify-center items-center bg-zinc-200">
      <div className=' relative -top-72 right-96'>
      <ul>
        <Link href="/" className=' text-black-400 cursor-pointer hover:text-blue-500 text-xl '>Home</Link>
      </ul>
    </div>
        <div className="bg-white form rounded-3xl shadow-2xl flex justify-start items-center flex-col" style={{ height: '650px', width: '400px' }}>
          <h1 className="text-3xl mt-8">Register</h1>

          <form className='flex flex-col'  onSubmit={handleRegister}>
            <div className=" flex flex-col mt-6">
              <label htmlFor="name" className="text-xl mt-1">Name:</label>
              <input
                type="text"
                name="name"
                className="w-64 border h-10 rounded-lg  my-2 pl-3"
                onChange={(e) => {
                  setName(e.target.value)
              }}
              />

              <label htmlFor="email" className="text-xl mt-1">Email:</label>
              <input
                type="text"
                name="email"
                className="w-64  border h-10 rounded-lg  my-2 pl-3"
                onChange={(e) => {
                  setEmail( e.target.value)
              }}
              />

              <label htmlFor="username" className="text-xl mt-1">Username:</label>
              <input
                type="text"
                name="username"
                className="w-64 border h-10 rounded-lg  my-2 pl-3"
                onChange={(e) => {
                  setUsername( e.target.value)
              }}
              />

              <label htmlFor="password" className="text-xl mt-1">Password:</label>
              <input
                type="password"
                name="password"
                className="w-64 h-10 mt-2 rounded-lg  border pl-3"
                onChange={(e) => {
                  setPassword(e.target.value)
              }}
              />
            </div>

            <label htmlFor="file" className='flex justify-center items-center cursor-pointer my-3 '>
              <Image
                src={avatar.url || addimg}
                width={80}
                height={80}
                className='w-16 h-16 rounded-md'
                alt="User Avatar"
              />
              <h3 className='pl-3'>Upload an Avatar</h3>
            </label>
            <input type="file" id='file' className='my-10' name='file' style={{ display: "none" }} onChange={handleImg} />

            <span className="ml-12 mt-1">
              <h2 className="text-sm">Already have an account?</h2>
              <Link href="/pages/login" className="text-sm hover:text-red-500 hover:underline ml-8">Please Login</Link>
            </span>
            <button type="submit" className="bg-black text-white w-64 h-12 rounded-3xl mt-3 active:bg-white active:text-black">Submit</button>
          </form>
        </div>
      </main>
    </>
  );
}
