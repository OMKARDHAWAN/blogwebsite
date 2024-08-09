"use client";
import Blogs from "@/app/component/blog/blogs";
import Category from "@/app/component/category/category";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
export default function Viewblog() {
    const [active,setActive]=useState(false);
    const [active1,setActive1]=useState(false);
    
    const handleBlog=()=>{
        setActive(!active);
        setActive1(false)
    }

    const handleCategory=()=>{
        setActive1(!active1);
        setActive(false);
    }

    return (
        
        <>
 <Head>
                <title>View Blogs and Categories</title>
                <meta name="description" content="Explore our blog posts and categories. Discover a range of topics and find insights on various subjects. Click to view the latest blogs or browse through our categories to find content that interests you." />
            </Head>
       <div className="h-20 flex justify-center items-center cursor-pointer bg-white w-full ">
        
     
        <ul className="flex justify-center items-center">
       <li className={"hover:text-blue-500 mx-3   text-2xl "}>
       <Link href="/">Home</Link>      
       </li>

        <li className={active?"text-blue-500 mx-3  underline text-2xl ":"text-black-500 mx-3 text-2xl"} onClick={handleBlog}>
            Blogs
        </li>
        <li className={active1?"text-blue-500 mx-3  underline  text-2xl":"text-black-500 mx-3 text-2xl"} onClick={handleCategory}>
            Category
        </li>
       </ul>
       </div>

<div className=" h-auto ">
  {active && <Blogs/>}
  {active1 && <Category/>}
</div>


        </>
    );
}