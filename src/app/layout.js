import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";


import { NextUIProvider } from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "MakeAblog - Your Ultimate Blog Website Resource",
  description: "Discover a rich resource of web development and software development insights on our tech blog. Dive into programming tutorials, web design tips, and coding projects while exploring software projects and technology trends. Join our developer community for valuable tips, project ideas, and updates on web development news. Whether you’re interested in programming news, tech tutorials, or building your developer portfolio, our platform offers expert advice and the latest in web development and software innovation."
};

export default function RootLayout({ children }) {
  return (
   
    <html lang="en">
      <body className={`${inter.className}`}>
                {children}
      </body>
    </html>
  
  );
}