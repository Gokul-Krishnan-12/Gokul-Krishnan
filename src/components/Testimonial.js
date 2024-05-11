'use client';
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Opinion from "./Opinion";

const Testimonial = () => {
  const [opinionVisibility, setOpinionVisibility] = useState([true, false, false]);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const testimonialSection = testimonialRef.current;
      const opinions = testimonialSection.querySelectorAll('.opinionSection');
      
      let visibleIndex = -1;
      opinions.forEach((opinion, index) => {
        const rect = opinion.getBoundingClientRect();
        if (rect.top + 200 >= 0 && rect.bottom - 200 <= window.innerHeight) {
          visibleIndex = index;
        }
      });
      
      if (visibleIndex !== -1) {
        const newVisibility = opinionVisibility.map((_, index) => index === visibleIndex);
        setOpinionVisibility(newVisibility);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [opinionVisibility]);

  return (
    <div ref={testimonialRef} className='bg-background min-h-screen relative flex items-start justify-center testimonialSection'>
       <div>
        <Opinion />
        <Opinion />
        <Opinion />
       </div>
       <div className="stickySection">
        <motion.div
          className="testimonialImage"
          style={{ filter: opinionVisibility[0] ? "brightness(100%)" : "brightness(30%)" }}
          transition={{ duration: 2 }}
        >
          <Image
            src="/peter-smart.jpg"
            width={90}
            height={90}
            alt=""
          />
            {opinionVisibility[0] && <span className="arrow"/>}
        </motion.div>
        <motion.div
          className="testimonialImage"
          style={{ filter: opinionVisibility[1] ? "brightness(100%)" : "brightness(30%)" }}
          transition={{ duration: 2 }}
        >
          <Image
            src="/peter-smart.jpg"
            width={90}
            height={90}
            alt=""
          />
               {opinionVisibility[1] && <span className="arrow"/>}
        </motion.div>
        <motion.div
          className="testimonialImage"
          style={{ filter: opinionVisibility[2] ? "brightness(100%)" : "brightness(30%)" }}
          transition={{ duration: 2 }}
        >
          <Image
            src="/peter-smart.jpg"
            width={90}
            height={90}
            alt=""
          />
             {opinionVisibility[2] && <span className="arrow"/>}
        </motion.div>
       </div>
    </div>
  );
};

export default Testimonial;
