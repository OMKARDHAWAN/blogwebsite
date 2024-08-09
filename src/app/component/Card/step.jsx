"use client"
import { Card,CardFooter,CardBody,CardHeader } from "@nextui-org/react"
import { Button } from "@nextui-org/react"
import { useRef } from "react"
import {motion} from "framer-motion";
import Link from "next/link"
import { useScroll,useTransform } from "framer-motion"
import { box ,box1,box2 ,sequentialVariants,box3} from "./stepanim"
import './step.css'


export default function Step(){
    const MainRef=useRef();
const{scrollYProgress} =useScroll({
    target:MainRef,
    offset:["start 0.70","start 0.25"]
});

const x = useTransform(scrollYProgress, [0, 1], ['-30%', '0%']);
const opacity = useTransform(scrollYProgress,[0,1],['0%','100%'])
const delay = useTransform(scrollYProgress, [0, 1], ['0s', '50s']);


    return(
        <>
 <motion.main            
    ref={MainRef}
    className="w-[1390px] h-[600px] flex justify-around items-center mx-16 step">
            <motion.div
                
                style={{ x: x ,opacity:opacity}}
                className="w-72  h-96 rounded-2xl flex justify-center items-center step1"
            >
                <div className="flex flex-col justify-center items-center stepcard1">
                    <h1 className="flex justify-center items-center my-3">Step 1</h1>
                    <div className="my-1 w-64 border border-green-500"></div>
                    <p className="my-3 text-center">Just Login<br /> or create account if not registered!!</p>
                    <Link href="/pages/login">
                        <button className="w-24 h-12 text-color mt-5 bg-green-500 text-white">Login</button>
                    </Link>
                </div>
            </motion.div>

            <motion.div 
                style={{ x: x ,opacity:opacity}}
                className="w-72 h-96 rounded-2xl flex justify-center items-center step2"
            >
                <div className="flex flex-col justify-center items-center">
                    <h1 className="flex justify-center items-center my-3">Step 2</h1>
                    <div className="my-1 w-64 border border-green-500"></div>
                    <p className="my-3 text-center">Write your project info as blog<br /> and edit as per requirement<br /> and post it!!!</p>
                    <Link href="/pages/login">
                        <button className="w-24 h-12 text-color bg-green-500 mt-5 text-white">Post</button>
                    </Link>
                </div>
            </motion.div>

            <motion.div 
                style={{ x: x ,opacity:opacity,transition:{delay:delay}}}
                className="w-72 h-96 rounded-2xl flex justify-center items-center step3"
            >
                <div className="flex flex-col justify-center items-center">
                    <h1 className="flex justify-center items-center my-3">Step 3</h1>
                    <div className="my-1 w-64 border border-green-500"></div>
                    <p className="my-3 text-center">Your blog will be SEO optimized!!!<br /> So, share your work with other developers and help our community</p>
                    <Link href="/pages/login">
                        <button className="w-24 h-12 text-color bg-green-500 text-white">Share</button>
                    </Link>
                </div>
            </motion.div>
        </motion.main>
        </>
    )
}