"use client"
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Link from "next/link";
import {motion} from "framer-motion"
import './contact.css'
export default function Contact(){
  const form = useRef();
  
  const opacity ={
    hidden:{
        opacity:0
    },
    show:{
        opacity:1
    }

  }

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
    <motion.div variants={opacity} initial={opacity.hidden} animate={opacity.show} className=" contactbg  h-screen w-screen flex  justify-center items-center bg-black">
    <div className=' relative -top-72 right-96'>
      <ul>
        <Link href="/" className='text-white cursor-pointer hover:text-blue-500 text-xl '>Home</Link>
      </ul>
    </div>
        <div className="bg-white h-[500px] w-[600px] flex flex-col justify-center items-center contact">
        <h1 className="mt-5 text-xl getintouch">Get in touch</h1>
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
     
    </motion.div>
    </>
)
}