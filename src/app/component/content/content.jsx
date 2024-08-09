"use client"
import Image from "next/image"
import img from "../../../../public/img/download.jpeg";
import landing1 from "../../../../public/img/landing1.png";
import mean from "../../../../public/img/mean.png";
import Link from "next/link";
import {motion} from "framer-motion"
import './content.css';
import { contentvariant, word1,word2,word3,para,logo,btn} from "./contentanim";
export default function Content(){
    return(
        <>
    <motion.div className="h-[965px]  bg-black flex justify-center items-center flex-col contentbg"  variants={contentvariant} initial={contentvariant.hidden} animate={contentvariant.show}>
        <div className="  h-[500px] w-[1100px] flex justify-start items-center flex-col contentmain" >
      <motion.div className="flex -mt-28 contentword">
      <motion.h1 variants={word1} initial={word1.hidden} animate={word1.show} className="text-white text-8xl font-bold mx-5 writeword" >Write</motion.h1>
      <motion.h1  className="text-white text-8xl font-bold mx-5 editword" variants={word2} initial={word2.hidden} animate={word2.show} >Edit</motion.h1> 
      </motion.div>
       <motion.h1 className="text-white text-8xl font-bold mx-5 my-3 postword" variants={word3} initial={word3.hidden} animate={word3.show}>Post it!!</motion.h1>

<div className="paraword">
       <motion.h2 variants={para} initial={para.hidden} animate={para.show} className="text-white text-xl mt-12 " >Share yours project info as blog. Simply create and post it on </motion.h2>
  </div>

      
       <motion.h3 className="text-blue-500 text-xl my-2 font-bold " variants={logo} initial={logo.hidden} animate={logo.show} >Make<span className="text-white">A</span>blog</motion.h3>
       
       <Link href="/pages/login" >
         <motion.button className="w-56 h-12 text-black mt-6 bg-white  hover:bg-blue-500 hover:text-white" variants={btn} initial={btn.hidden} animate={btn.show} >Start Blogging</motion.button>
       </Link>
       
       </div>
    
     

                </motion.div>
        </>
    )
}