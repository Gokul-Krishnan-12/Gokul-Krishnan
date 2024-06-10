'use client';

import { useEffect, useState ,useRef } from 'react'
import { AnimatePresence ,motion } from 'framer-motion';
import Hero from '@/components/Hero';
import AboutBanner from '@/components/AboutBanner';
import WhatIDo from '@/components/WhatIDo';
import Experience from '@/components/Experience';
import Testimonial from '@/components/Testimonial';
import Contact from '@/components/Contact';
import Preloader from '@/components/Preloader';
import VerticalPixelTransition from '@/components/verticalPixelTransition';
import { slideUp, opacityIn,fadeInOpacity } from '@/components/variants';
import AboutMore from '@/components/AboutMore';



const Home = () => {
  const contactRef=useRef(null);
  
  const [isLoading, setIsLoading] = useState(true);
  const [dimension, setDimension] = useState({width: 0, height:0});

  useEffect( () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
  }, []);
 
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])


  return (<>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
            
       
 <Hero />
  <AboutBanner/>
  <AboutMore/>
<WhatIDo/>
 <Experience/> 
<Testimonial/>
<Contact ref={contactRef} />  
</>

  );
};

export default Home;
