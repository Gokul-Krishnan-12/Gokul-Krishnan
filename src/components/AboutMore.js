
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutMore = () => {
  const aboutRef = useRef(null);

  useLayoutEffect( () => {
    const rect =aboutRef.current.getBoundingClientRect();
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(aboutRef.current, {
        scrollTrigger: {
            trigger: document.documentElement,
            start:  2 * window.innerHeight,
            end: 3 * window.innerHeight,
            onLeave: () => {gsap.to(aboutRef.current, {position:"relative"})},
            onEnterBack: () => {gsap.to(aboutRef.current, {position:"sticky",top:0})},
        }
    })
}, [])
  return (
    <div className='bg-backgroundBkLight min-h-screen  relative sticky top-0  flex items-center justify-center rounded-t-3xl rounded-b-3xl' id="about" ref={aboutRef}>
        <div className="flex flex-col justify-center items-center w-full h-full my-20">
        <SectionHeading heading="More About Me"/>
         <Image src="/goku.png" width={800} height={100} quality={100} className="absolute bottom-0 right-0 opacity-100"/>
          </div>
 
 </div>
  )
};

export default AboutMore;
