'use client';
import { useState } from "react";
import { fadeIn } from "./variants";
import {motion } from 'framer-motion';
import useMousePosition from "@/utils/useMousePosition";
const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 40;
  return (
    <div className='bg-primary/60 h-screen flex items-center justify-center relative'>
     
         <motion.div 
         className="flex flex-col justify-center items-center w-full h-full mask"
         animate={{

          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,

          WebkitMaskSize: `${size}px`,

        }}

        transition={{ type: "tween", ease: "backOut", duration:0.4}}

      >
        <div>
          <motion.h2 className="nameText--subText"  
              variants={fadeIn('down',0.3)}
                  initial='hidden'
                  animate='show'
                  exit={'hidden'} >I<span className='nameText--subText'>’</span>am
          </motion.h2>
          
          <motion.h1 className="nameText"  
              variants={fadeIn('down',0.3)}
                  initial='hidden'
                  animate='show'
                  exit={'hidden'} onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>GOKUL <br/> KRISHNAN<span className='nameText--subText'>■</span>
          </motion.h1>
          </div>
        </motion.div>
        <div className="flex flex-col justify-center items-center w-full h-full">
        <div>
          <h2 className="nameText--subText"  
              variants={fadeIn('down',0.3)}
                  initial='hidden'
                  animate='show'
                  exit={'hidden'} >I<span className='text-accent nameText--subText'>’</span>am
          </h2>
          
          <h1 className="nameText"  
              variants={fadeIn('down',0.3)}
                  initial='hidden'
                  animate='show'
                  exit={'hidden'} >GOKUL <br/> KRISHNAN<span className='text-accent nameText--subText'>■</span>
          </h1>
          </div>
        </div>
 
 </div>
  )
};

export default Hero;
