"use client"
import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import PostFormContextProvider from "../../../../contextApi/Postcategory";
import Authprovider from "../../../../contextApi/Authcontext";

export default function Layout({ children }) {
  return (
      
    <Authprovider>

         <PostFormContextProvider>
           {children}
         </PostFormContextProvider>
    </Authprovider>
     
       
    );
}