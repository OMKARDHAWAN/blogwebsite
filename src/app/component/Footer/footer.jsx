"use client"
import Link from "next/link"
import { FaInstagram ,FaFacebook, FaLinkedin} from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import './footer.css'
export default function Footer(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o6cf0st', 'template_8o21keh', form.current, {
        publicKey: 'QW-lR7MYwM4BP4eoa',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



    return(
        <>
        {/* footer class */}
       <footer class=" bottom-0 left-0 w-full bg-gray-800  text-white py-4 h-[600px] footer">   
  <div class="container mx-auto text-center mt-5   ">
    {/* footercontent */}
    <div className=" mx-24 flex justify-start p-10 items-center footercontent ">
{/* contact */}
<div className="bg-white h-[450px] w-[700px] p-10 flex justify-start  flex-col contact ">
  <h1 className="text-red-500 flex justify-start text-bold underline text-xl">Contact Me</h1>
   <form className=" flex flex-col"  ref={form} onSubmit={sendEmail}>
   <label htmlFor="user_name" className="text-black  flex justify-start text-xl my-1 font-bold " >Name</label>
    <input className=" w-[500px] border p-1 pl-3 text-black username" placeholder="Write name..." name="user_name"/>

    <label htmlFor="user_email" className="text-black  flex justify-start text-xl my-1 font-bold">Email:</label>
    <input className=" w-[500px] border p-1 pl-3  text-black useremail"  placeholder="Write email..." name="user_email" />
   
   <label htmlFor="message" className="text-black  flex justify-start text-xl my-1 font-bold">Message</label>
   <textarea className="border resize-none p-3 w-[500px]  text-black message" name="message" placeholder="Write message..."/>
   
    <button className="bg-green-500 text-white h-10 my-3 w-[500px] contactbtn" >Sent Message</button>
   </form>



</div>
{/* horizontalline */}
<div className="border border-white h-96 mx-10 horizontalline"></div>
{/* footerblog */}
<div className="  h-[450px] w-[550px] flex justify-evenly footerblog ">
    <div className=" flex flex-col  w-32 h-32 mt-10 footermenu">
      <Link href="/pages/blogs" className="text-xl" >Blogs</Link>
      <Link href="/pages/about" className="text-xl" >About</Link>
    </div>
    <div className=" w-64  h-56 mt-10 info">
<h1 className="text-white text-2xl">Website by</h1>
 <h2 className="my-3">Omkar Dhawan</h2>

 <h2 className="my-3">
 dhawanomkar355@gmail.com
 </h2>

 <div className="flex justify-center items-center mt-5">
  <Link href="https://www.instagram.com/dhawan_omkar/?hl=en" className="">
 <FaInstagram className=" mx-2 hover:text-blue-500 cursor-pointer"  size={30}/>
  </Link>
  <Link href="https://www.facebook.com/om.dhawan.545">
 <FaFacebook  className="hover:text-blue-500 cursor-pointer mx-2" size={30}/>
  </Link>

  <Link href="">
  
 <FaLinkedin  className="hover:text-blue-500 cursor-pointer mx-2" size={30}/>
  </Link>
 </div>
    </div>
    </div>    
    </div>
    <p class="text-sm ">&copy; 2024 Your Company. All rights reserved.</p>
  </div>
</footer>
        </>
    )
}