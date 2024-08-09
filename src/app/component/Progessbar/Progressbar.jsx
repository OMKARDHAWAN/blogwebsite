"use client"
import React from "react"
import { motion, useScroll } from "framer-motion";
import "../Progessbar/Progress.css";

export default function Progressbar() {
   const { scrollYProgress } = useScroll();

   return (
      <motion.div 
         className="postionbar" 
         style={{ 
            scaleX: scrollYProgress,
         }}
      />
   )
}