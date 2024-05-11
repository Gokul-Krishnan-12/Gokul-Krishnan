"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items=[
    {
        id:1,
        title:"Project 1",
        desc:"loreummmmmmmmmmmmmmmmmmmmmmmm koreeee loreummmm ipsummmmmmmmmmmmmmmmmm",
        img: "/",
        link:""
    },
    {
        id:2,
        title:"Project 2",
        desc:"loreummmmmmmmmmmmmmmmmmmmmmmm koreeee loreummmm ipsummmmmmmmmmmmmmmmmm",
        img: "/",
        link:""
    },
    {
        id:3,
        title:"Project 3",
        desc:"loreummmmmmmmmmmmmmmmmmmmmmmm koreeee loreummmm ipsummmmmmmmmmmmmmmmmm",
        img: "/",
        link:""
    },
    {
        id:4,
        title:"Project 4",
        desc:"loreummmmmmmmmmmmmmmmmmmmmmmm koreeee loreummmm ipsummmmmmmmmmmmmmmmmm",
        img: "/",
        link:""
    }
    
]

const Portfolio=()=>{
    const ref=useRef();

    const {scrollYProgress}=useScroll({target:ref});
    const x =useTransform(scrollYProgress,[0,1],["0%","-80%"]);
    return(
        <motion.div
        className="h-full"
        initial={{y:"-200vh"}}
        animate={{y:"0%"}}
        transition={{duration:1}}
        >
            <div className="h-[600vh] relative " ref={ref}>
                <div className="w-full h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">My Works</div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                
                    <motion.div style={{x}} className="flex">
                    <div className="h-screen w-screen flex items-center justify-center bg-gray-500"/>
                    {items.map((item)=>(
                        <div className="h-screen w-screen flex items-center justify-center bg-gray-500" key={item.id}>
                            <div className="flex flex-col gap-8 text-white">
                                <h1>{item.title}</h1>
                                <Image src="/goku.png" alt="" width={200} height={200} quality={100} />
                                <p>{item.desc}</p>
                                <Link href={item.link}>See Demo</Link>
                            </div>
                        </div>
                    ))}
                   </motion.div>
                  
                </div>
            </div>
                <div className="h-screen w-screen flex flex-col gap-16 items-center justify-center text-center">
                        <h1 className="text-8xl">Do You have a Project?</h1>
                        <div className="relative">
                            <motion.svg animate={{rotate:360}} transition={{duration:8,ease:"linear", repeat:Infinity}} viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]">
                                <defs>
                                    <path 
                                        id="circlePath"
                                        d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                                        />
                                </defs>
                                <text fill="black">
                                    <textPath xlinkHref="#circlePath" className="text-xl">Developer and developer </textPath>
                                </text>
                               
                            </motion.svg>
                            <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28 absolute top-0 right-0 bottom-0 left-0 m-auto bg-black text-white rounded-full flex items-center justify-center cursor-pointer z-50">Hire Me</Link>
                        </div>
                   </div>
        </motion.div>
    )
}

export default Portfolio;   