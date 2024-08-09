"use client"
import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import { Suspense } from 'react';
import PostFormContextProvider from "../../../../contextApi/Postcategory";
export default function Layout({ children }) {
  return (
       
         <PostFormContextProvider>
          <Suspense>
           {children}
          </Suspense>
         </PostFormContextProvider>
      
       
    );
}