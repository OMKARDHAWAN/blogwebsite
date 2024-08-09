"use client"
import Authprovider from "../../../../contextApi/Authcontext";

export default function Layout({ children }) {
  return (
      
    <Authprovider>

           {children}
    </Authprovider>
     
       
    );
}