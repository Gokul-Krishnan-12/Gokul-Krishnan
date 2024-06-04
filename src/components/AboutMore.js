
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Character from "@/utils/Character";

const AboutMore = () => {
  const aboutRef = useRef(null);

  useLayoutEffect( () => {
    const rect =aboutRef.current.getBoundingClientRect();
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(aboutRef.current, {
        scrollTrigger: {
            trigger: document.documentElement,
            start:  2.5 * window.innerHeight,
            end: 3 * window.innerHeight,
            onLeave: () => {gsap.to(aboutRef.current, {position:"relative"})},
            onEnterBack: () => {gsap.to(aboutRef.current, {position:"sticky",top:0})},
        }
    })
}, [])
  return (
    <div className='bg-backgroundBkLight min-h-screen  relative sticky top-0  flex  justify-center rounded-t-3xl rounded-b-3xl' id="about" ref={aboutRef}>
        <div className="flex flex-col justify-center  w-full h-full my-20">
        <SectionHeading heading="More About Me"/>
        <div className="w-full h-full p-l-8">
       
        <Character  paragraph="I'm a passionate front-end developer with a knack for turning ideas into beautiful and functional user experiences. I thrive on the challenge of crafting clean, responsive code that brings websites and applications to life. When I'm not coding, I'm likely tinkering with new design trends, exploring the latest web technologies, or getting inspired by other creative minds ... ..."/>
        </div> 
         <Image src="/goku_cropped.png" width={600} height={150} quality={100} className="absolute bottom-0 right-0 opacity-100 brightness-50"/>
       
          </div>
 
 </div>
  )
};

export default AboutMore;
