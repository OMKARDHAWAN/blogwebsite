"use client"

import { delay } from "framer-motion"

export  const navbarvariant={
    hidden:{
      opacity:0,
    },
    show:{
        opacity:1,
        transition: { staggerChildren: 5,duration:1 },
        
    }
}

export const logo={
  hidden:{
    opacity:0,
    x:"-50px"
  },
  show:{
    opacity:1,
    x:"0px",
    transition:{
      delay:1
    }   
  }
}



export const Navbarbtn={
  hidden:{
    opacity:0,
    x:"-50px"
  },
  show:{
    opacity:1,
    x:"0px",
    transition:{
      staggerChildren: 4,
      delay:2
    }   
  }
}

export const Menu={
  hidden:{
    opacity:0,
    x:"-50px"
  },
  show:{
    opacity:1,
    x:"0px" ,
    transition:{
      staggerChildren: 4,
      delay:1.5
    }  
  }
}