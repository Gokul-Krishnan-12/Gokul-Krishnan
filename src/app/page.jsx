'use client';

import { useEffect, useState } from 'react'
import { AnimatePresence ,motion } from 'framer-motion';
import Hero from '@/components/Hero';
import AboutBanner from '@/components/AboutBanner';
import WhatIDo from '@/components/WhatIDo';
import Experience from '@/components/Experience';
import Testimonial from '@/components/Testimonial';
import Contact from '@/components/Contact';
import VerticalPixelTransition from '@/components/verticalPixelTransition';
import { slideUp, opacityIn,fadeInOpacity } from '@/components/variants';



const Home = () => {
  
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
          }, 3000)
      }
    )()
  }, []);

  return (<>
     <AnimatePresence mode='wait'>
            {isLoading && 
             (
                <motion.div 
                    variants={slideUp} 
                    initial="initial" 
                    exit="exit" 
                    className="loaderWrapper"
                >
                        <>
                            <VerticalPixelTransition />
                            <motion.h2
                                variants={opacityIn(0.75)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                            >
                                Welcome&nbsp;
                                <motion.span
                                    variants={fadeInOpacity("right", 1.75)}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                >
                                    to the reality
                                </motion.span>
                            </motion.h2>
                           
                        </>
                </motion.div>
                    ) 
                   } 
 </AnimatePresence> 
            
       
 <Hero />
  <AboutBanner/>
<WhatIDo/>
 <Experience/> 
<Testimonial/>
<Contact/>  
</>

  );
};

export default Home;
