"use client"
import   '../Navbar/Navbar.css'
import { motion } from "framer-motion"
import { navbarvariant,logo,Menu,Navbarbtn} from "./navbaranim"
import Link from "next/link"
import { FaBars, FaCross } from "react-icons/fa";
import { useState } from "react"


export default function Navbardesign(){
  const [isOpen, setIsOpen] = useState(false);
  
  


  const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <>
        {/* main div */}
         <motion.div className="Navbar  h-16 flex justify-around " variants={navbarvariant} initial={navbarvariant.hidden} animate={navbarvariant.show}>
            <button  onClick={toggleMenu}
         className="navbtn w-12 h-12 border  ">
            <FaBars size={20} className="mx-3"/>
          
            </button>
           {/* NavDiv */}
            <motion.div className="  w-56 h-16 flex justify-center items-center ml-24" variants={logo} initial={logo.hidden} animate={logo.show}>
               <h1 className=" text-2xl logo">Make<span className="text-3xl font-bold">A</span>Blog</h1>
            </motion.div>

{/* Nav-menu */}


            <motion.div className={isOpen? "Menu" :"SmallMenu w-96  h-16 flex justify-around items-center"} variants={Menu} initial={Menu.hidden} animate={Menu.show}>
           
             
              <div className="menuLink">
              <Link href="pages/blogs" className="NavbarItem" >Blogs</Link>

              </div>
              <div className="menuLink">
              <Link href="pages/about" className="NavbarItem" >About</Link>

              </div >
              <div className="menuLink">
              <Link href="pages/contact" className="NavbarItem" >Contact</Link>

              </div>
            </motion.div>
 

            <motion.div className=" Navbtn w-64 h-16 flex items-center " variants={Navbarbtn} initial={Navbarbtn.hidden} animate={Navbarbtn.show}>
              <Link href="pages/login">
              <button className="w-24 h-10 bg-black rounded-sm hover:bg-blue-500 hover:text-white text-white mx-5 login" >Login</button>
              </Link>

              <Link href="pages/register">
              <button className="w-24 h-10 rounded-sm hover:bg-black hover:text-white text-black bg-white mx-5 signup" >Sign Up</button>
              </Link>
            </motion.div>
            </motion.div>  
         
        </> 
    )
}