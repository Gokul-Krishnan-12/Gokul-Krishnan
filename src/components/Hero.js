'use client';
import { useLayoutEffect, useRef } from "react";
import { fadeInOpacity} from "./variants";
import {motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(heroRef.current, {
        scrollTrigger: {
            trigger: document.documentElement,
            start: "100px",
            end: window.innerHeight,
            onLeave: () => {gsap.to(heroRef.current, {position:"relative"})},
            onEnterBack: () => {gsap.to(heroRef.current, {position:"sticky",top:0})},
        }
    })
}, [])

  return (
    <div className='bg-backgroundbkLight h-screen flex items-center justify-center sticky top-0' ref={heroRef}>
    
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div>
        <div className="overflow-hidden">
          <motion.h2 className="nameText--subText"  
              variants={fadeInOpacity('up',0.2)}
                  initial='hidden'
                  animate='show'
                  exit={'hidden'} >I<span className='text-accent nameText--subText'>’</span>am
          </motion.h2>
          </div>
        <div className="overflow-hidden">

          <motion.h1 className="nameText"  
              variants={fadeInOpacity("up",0.2)}
                  initial='hidden'
                  animate='show'
                  exit={'hidden'} >GOKUL <br/> KRISHNAN<span className='text-accent nameText--iconText'>■</span>
          </motion.h1>
          </div>
          </div>
        </div>
 
 </div>
  )
};

export default Hero;
