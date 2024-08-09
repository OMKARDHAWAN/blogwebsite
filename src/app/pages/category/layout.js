"use client"
import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import CategoryContextProvider from "../../../../contextApi/CategoryContext";
export default function Layout({ children }) {
  return (
       
        <CategoryContextProvider>
           {children}
        </CategoryContextProvider>
        
       
    );
}