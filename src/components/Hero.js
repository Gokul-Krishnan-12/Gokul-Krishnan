'use client';
import { fadeInOpacity} from "./variants";
import {motion } from 'framer-motion';


const Hero = () => {

  return (
    <div className='bg-backgroundbkLight h-screen flex items-center justify-center relative'>
    
        <div className="flex flex-col justify-center items-center w-full h-full">
        <div>
          <motion.h2 className="nameText--subText"  
              variants={fadeInOpacity('up',0.2)}
                  initial='hidden'
                  animate='show'
                  exit={'hidden'} >I<span className='text-accent nameText--subText'>’</span>am
          </motion.h2>
          
          <motion.h1 className="nameText"  
              variants={fadeInOpacity("up",0.7)}
                  initial='hidden'
                  animate='show'
                  exit={'hidden'} >GOKUL <br/> KRISHNAN<span className='text-accent nameText--subText'>■</span>
          </motion.h1>
          </div>
        </div>
 
 </div>
  )
};

export default Hero;
