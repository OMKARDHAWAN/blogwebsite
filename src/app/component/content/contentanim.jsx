import { delay } from "framer-motion";

export  const contentvariant={
    hidden:{
      opacity:0,
    },
    show:{
        opacity:1,
        transition: { staggerChildren: 5,duration:1 },       
    }
}





export const word1={
    hidden:{
        opacity:0,
        y:"-50px",
    },
    show:{
        opacity:1,
        y:"0px",
        transition:{
            delay:3,
            duration:0.5
        }
    }
}

export const word2={
    hidden:{
        opacity:0,
        y:"-50px",
    },
    show:{
        opacity:1,
        y:"0px",
        transition:{
            delay:3.5,
            duration:0.5
        }
    }
}

export const word3={
    hidden:{
        opacity:0,
        y:"-50px",
    },
    show:{
        opacity:1,
        y:"0px",
        transition:{
            delay:4,
            duration:0.5
        }
    }
}

export const para={
    hidden:{
        opacity:0,
        
    },
    show:{
        opacity:1, 
        transition:{
            delay:4.5,
            duration:0.5
        }
    }
}


export const logo={
    hidden:{
        opacity:0,
        scale:2,
        rotate:"10deg"
    },
    show:{
        opacity:1,
        scale:1, 
        rotate:"0deg",
        transition:{
            delay:4.5,
            duration:0.5
        }
    }
}


export const btn={
    hidden:{
        opacity:0,
    },
    show:{
        opacity:1, 
        transition:{
            delay:5,
            duration:0.5
        }
    }
}