import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { useLayoutEffect, useRef } from "react";
import Character from "@/utils/Character";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';

const AboutMore = () => {
  const aboutRef = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 2 * window.innerHeight,
        end: 3 * window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <div className='bg-backgroundBkLight min-h-screen  relative   flex  justify-center rounded-t-3xl rounded-b-3xl ' id="about" ref={aboutRef}>
        <div className="overflow:hidden flex flex-col justify-center  w-full h-full my-20">
          <SectionHeading heading="More About Me"/>
          <Image src="/goku_cropped.png" width={600} height={150} quality={100} className="xl:absolute xl:bottom-0 xl:right-0 opacity-30 xl:opacity-100 xl:brightness-50 displayImage"/>
          <div className="sliderContainer hidden xl:block">
            <div ref={slider} className="slider">
              <p ref={firstText}>Full Stack Developer -</p>
              <p ref={secondText}>Full Stack Developer -</p>
            </div>
          </div>
          <div className="w-full h-full p-l-r">  
            <Character  paragraph="I'm a full-stack developer with a passion for creating captivating user experiences. My expertise lies in crafting clean, responsive code that breathes life into websites and applications. Beyond coding, I'm constantly exploring new design trends and emerging technologies to stay at the forefront of the industry."/>
          </div> 
         
          
        </div>
 
 </div>
  )
};

export default AboutMore;
