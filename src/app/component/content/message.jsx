"use client"
import {motion, useTransform} from "framer-motion"
import { useScroll } from "framer-motion"
import { useRef } from "react";
import { message,Paragraph } from "./messageanim";
import './message.css'
export default function Message(){
  const BoxRef = useRef();
const {scrollYProgress}=useScroll(
  {
    target:BoxRef,
    offset:["start 0.70", "end center"]
  }
);

const opacity = useTransform(scrollYProgress,[0,1],['0%','100%'])

  return(
        <>
    <motion.div  className="intro-para  border border-white flex-col flex justify-center items-center  bg-white mx-16 h-80 -mt-36 "  style={{boxShadow:"0px 0px 10px 0px black",opacity}} ref={BoxRef} >
            <h1 variants={message} initial={message.hidden} animate={message.show} style={{opacity:scrollYProgress}}  className="text-black  text-4xl mx-10 " >Welcome, Developers!</h1>
                    <div className=" border border-black w-[900px]" id="blackborder"></div>
                

                  <p variants={Paragraph} initial={Paragraph.hidden} animate={Paragraph.show} style={{opacity:scrollYProgress}} className=" text-black mx-24 text-justify my-10 text-xl " id="message"> Are you seeking new project ideas? Rest assured, this platform hosts a wealth of insights and project details shared by developers like yourself. Engage with our vibrant web development 
                 community, where you can explore these informative blog posts to ignite your creativity.
                  Have you recently completed a web development project? Share your experience here to inspire and assist fellow developers on their journeys.
                  Join us in fostering collaboration and continuous learning in the realm of web development.</p>
                 
        </motion.div>
        </>
    )
}