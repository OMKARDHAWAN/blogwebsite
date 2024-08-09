"use client"
import Link from "next/link"
import Profile from "../../../../public/img/Omkardhawan.png"
import Image from "next/image"
import { motion } from "framer-motion"
import { Blob ,ProfileImg,info} from "./aboutanim"
import './about.css'
import Head from "next/head"
export default function About(){

    return(
        <>
        <Head>
                <title>About Omkar Dhawan - Full-Stack Developer & Blog Creator</title>
                <meta name="description" content="Learn more about Omkar Dhawan, a Full-Stack Web Developer who has created a platform for developers to share and explore project-related content. Discover Omkar's journey, contributions, and how you can collaborate on web development projects and join a growing community." />
            </Head>
        <main className="bg-black h-screen flex justify-center items-center about ">
         
        <Link href="/" className="text-white hover:text-red-500  -mt-[600px] text-xl Link" >Home</Link>
         
          <div className="flex aboutimg">
           
           <motion.div variants={Blob} initial={Blob.hidden} animate={Blob.show} className=" mx-5 relative blob">
            <motion.div variants={ProfileImg} initial={ProfileImg.hidden} animate={ProfileImg.show}>
            <Image src={Profile}  alt="Profile image...." width={400} height={400} className=" photo  h-[500px] w-[500px] -mt-20 ml-3  "/>
            </motion.div>
           </motion.div>

           <motion.div variants={info} initial={info.hidden} animate={info.show} className= "aboutinfo w-[700px] h-[500px] text-white text-justify -mt-16 p-5">
            <h1 className="border-b-3 border-white text-2xl pl-3">Hello Viewers!!!!</h1>
            <div className=" p-3 text-xl "><h2>Hello,</h2>

    <h2 >
    <span className="pl-32">
      My name is Omkar Dhawan, and I have recently completed a comprehensive Full-Stack Web Development course. Utilizing the skills and technologies I acquired, I have developed a blog website where developers can share and explore project-related content.
      </span>
      </h2>
<h2 >
<span className="pl-32">
  I invite you to contribute your web development or app development projects to this platform.
  </span>
   By doing so, you can assist other developers in advancing their own projects. If you appreciate my work and are interested in collaborating on future projects, please feel free to reach out to me. I am available 24/7, and you can find my contact details below.
</h2>

<h2>
<span className="pl-32">
Additionally, I am in the process of establishing a Web Development Community, and I would be thrilled to have your support in building this space. Together, we can share ideas, collaborate, and drive innovation.
</span>
</h2>

<h2 className="mt-5">
Thank you for your consideration.

</h2>

<h3>
Best regards,
</h3>
<h4>
Omkar Dhawan
</h4>
          </div>
 </motion.div>
           
          </div>
           
        </main>
        </>
    )
}