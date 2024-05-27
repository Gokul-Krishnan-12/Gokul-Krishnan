
import SectionHeading from "./SectionHeading";
import Words from "@/utils/Words";
import { useState } from "react";
const WhatIDo = () => {
  const skillsData = [
    {
      skill: "Frontend",
      description: "I craft custom websites that reflect your brand and prioritize scalability, performance, and accessibility, with engaging animations for a memorable user experience."
    },
    {
      skill: "Backend",
      description: "Committed to leveraging cutting-edge technologies and industry best practices, I focus on delivering reliable, scalable, and high-performance backend solutions to power your projects."
    },
    {
      skill: "CMS",
      description: "Dedicated to crafting seamless CMS solutions, I prioritize user-friendly interfaces, robust functionality, and scalable architecture to elevate your content management experience."
    },
    {
      skill: "Design",
      description: "I design stunning user interfaces and interactive experiences using Figma's versatile platform, ensuring seamless collaboration and pixel-perfect results."
    },
    {
      skill: "Trading",
      description: "I regularly monitor the stock market to stay informed and make informed investment decisions."
    }
  ];

  return (
    
    <div className='bg-black relative min-h-screen flex items-center justify-center rounded-b-3xl'>
        <div className="relative flex flex-col  w-full h-full my-20">
          <SectionHeading heading="What i do"/>
          <div className="relative">
            
            <div>
              
              {/* Map over the paragraphs array and render the Character component for each paragraph */}
            
                  {skillsData.map((skill, index) => (
                    <Words key={index}  skills={skill.skill} skillsDescription={skill.description} />
                  ))
              }
            </div>             
        </div>
        </div>
 </div>
  )
};

export default WhatIDo;
