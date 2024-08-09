"use client"
import { useState, useEffect } from 'react';
import { auth } from '../../../../firebase/firebase';
import { useRouter } from 'next/navigation';
import { FaBars, FaPlus } from 'react-icons/fa';
import { PiNotebookDuotone } from 'react-icons/pi';
import { IoIosSettings } from 'react-icons/io';
import Postform from '@/app/component/Postform/postform';
import { useAuthContext } from '../../../../contextApi/Authcontext';
import Link from 'next/link';
import './createblog.css'
export default function Sidebar() {
    const [showForm, setShowForm] = useState(false);
    const [showList, setShowList] = useState(false);
    
    const [isOpen, setIsOpen] = useState(false);
      const {currentUser,signOutUser}=useAuthContext();
      const router = useRouter();
    
      useEffect(() => {
        if (currentUser) {
            router.push("/pages/createblog");
        } else {
            router.push("/pages/login");
        }
    }, [currentUser,router]);


    const toggleMenu = () => setIsOpen(!isOpen);
   

    


    const toggleForm = () => {
        setShowForm(!showForm);
        setShowList(false); // Hide list when showing form
    };

    

    // console.log(currentUser);

   
    return (
<>



<div className="flex bg-blue-50 createblog">
{/* <div className='btn'>
    <button  onClick={toggleMenu}
         className="navbtn w-12 h-12 border  ">
            <FaBars size={20} className="mx-3"/>
          
            </button>
    </div>    */}
          <main className='h-auto w-72 bg-white p-2 shadow-xl sidebar '>
             <ul className="  h-screen  mt-10 ">
             <li className="h-8 my-2 cursor-pointer mx-1 flex justify-center items-center hover:text-white hover:bg-black active:bg-white active:text-black text-black rounded-3xl">
                        <button onClick={toggleForm} className="w-52 flex justify-center items-center">
                          <Link href="/" className='text-black-400 cursor-pointer   '>Home</Link>
                        </button>
        </li>
                    <li className="h-8 my-2 cursor-pointer mx-1 flex justify-center items-center hover:text-white hover:bg-black active:bg-white active:text-black text-black rounded-3xl">
                        <button onClick={toggleForm} className="w-52 flex justify-center items-center">
                            <FaPlus size={20} className="mx-1"/>
                            New Post
                        </button>
                    </li>
                    
                   
                    <li className="h-8 my-2 cursor-pointer mx-1 flex justify-center items-center hover:text-white hover:bg-black active:bg-white active:text-black text-black rounded-3xl">
                        <button  className="w-52 flex justify-center items-center" onClick={signOutUser}>
                            logout
                        </button>
                    </li>
                </ul>
     </main>
 {/* Blog Creation form */}
 <div className="flex-1 p-4 form">
        {showForm && <Postform />}
        
        </div>
        </div>


</>        
    );
}

