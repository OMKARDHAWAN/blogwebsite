"use client"
import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import PostFormContextProvider from "../../../../contextApi/Postcategory";
export default function Layout({ children }) {
  return (
       
         <PostFormContextProvider>
           {children}
         </PostFormContextProvider>
      
       
    );
}