'use client';
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Opinion from "./Opinion";
import SectionHeading from "./SectionHeading";

const Testimonial = () => {

  const opinions = [
    {
      testimonial: "Gokul's innovative approach and commitment to excellence have made a significant impact on our projects. He is a reliable and talented professional who always goes above and beyond.",

      author: "Neo",
      position: "Director",
      company: "ReverTech"
    },
    {
      testimonial: "During his tenure at Revertech, Gokul Krishnan demonstrated exceptional dedication and initiative, consistently delivering high-quality work with a positive attitude. His contributions greatly enriched our marketing efforts, and I wholeheartedly endorse Gokul for his future endeavors.",

      author: "Kallu Sudarshan",
      position: "CMO",
      company: "ReverTech"
    },

    {
      testimonial: "As my student, I was amazed to see Gokul’s commendable technical, intellectual and analytic strengths. His attitude, initiatives, dedication and endurance shows his ambitiousness. I can vouch for his ability to think creatively and to explore.",
      author: "Shinoj Sukumaran",
      position: "Asst. Professor",
      company: "RIT"
    }    // Add more opinions as needed
  ];

  const [opinionVisibility, setOpinionVisibility] = useState([true, false, false]);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const testimonialSection = testimonialRef.current;
      const opinions = testimonialSection.querySelectorAll('.opinionSection');
      
      let visibleIndex = -1;
      opinions.forEach((opinion, index) => {
        const rect = opinion.getBoundingClientRect();
        if (rect.top >= -100 && rect.bottom  <= window.innerHeight +100) {
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

  return (<div id="testimonials">
         <SectionHeading heading="What they said" />
    <div ref={testimonialRef} className='bg-background min-h-screen relative flex items-start justify-center testimonialSection rounded-t-3xl rounded-b-3xl'>
       <div>
         {opinions.map((opinion, index) => (
          <Opinion
            key={index}
            testimonial={opinion.testimonial}
            author={opinion.author}
            position={opinion.position}
            company={opinion.company}
         />
      ))}
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
            src="/kallu.png"
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
            src="/shinoj.png"
            width={90}
            height={90}
            alt=""
          />
             {opinionVisibility[2] && <span className="arrow"/>}
        </motion.div>
       </div>
    </div>
    </div>
  );
};

export default Testimonial;
