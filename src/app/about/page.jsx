"use client";
import {motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

  

const AboutPage=()=>{
    const containerRef=useRef();
    const skillRef =useRef();
    const isSkillRefInView = useInView(skillRef);

    const {scrollYProgress} = useScroll({container:containerRef});
    const rotateForward =useTransform(scrollYProgress,[0,1],[0,180]);
    const rotateForwardSlow =useTransform(scrollYProgress,[0,1],[0,45]);
    const rotateBackward =useTransform(scrollYProgress,[0,1],[0,-180]);
    const rotateBackwardSlow =useTransform(scrollYProgress,[0,1],[0,-45]);

  

    return(<>
        <motion.div
        className="h-full"
        initial={{y:"-200vh"}}
        animate={{y:"0%"}}
        transition={{duration:1}}
        >
        {/* Container */}
        <div className="h-full overflow-auto lg:flex" ref={containerRef}>
            {/* Text container  */}
            <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:ps-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3  xl:w-1/2">
                <div className="flex flex-col gap-12 justify-center">
                    <h1 className="font-bold text-2xl">BIO</h1>
                    <p className="text-lg">Koree Loreumipsum Koree Loreumipsum Koree Loreumipsum Koree Loreumipsum Koree Loreumipsum Koree Loreumipsum Koree Loreumipsum Koree Loreumipsum</p>
                    <div className="self-end">
                        <svg  height="100" viewBox="0 0 401 327" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M121.08 133.935C122.568 135.424 126.266 143.376 126.659 138.261C126.982 134.068 126.719 129.752 126.158 125.597C125.846 123.291 123.948 116.993 125.594 118.638C127.219 120.264 128.128 123.948 128.979 126.036C130.617 130.056 133.854 132.193 137.38 134.437C141.835 137.272 135.328 115.588 134.747 112.682C133.721 107.556 142.315 117.219 143.649 117.886C145.016 118.57 143.121 115.994 143.774 115.504C144.12 115.244 149.484 118.945 150.169 119.516C153.885 122.613 151.184 116.873 151.611 115.378C155.086 103.215 155.268 89.4775 154.056 76.8854C151.618 51.5577 138.968 -3.26618 103.401 2.53276C85.6456 5.42762 70.9919 19.1717 59.391 31.8726C40.9043 52.112 25.0101 75.6808 14.3155 100.959C-0.565902 136.133 -3.40893 179.944 11.6198 215.56C19.117 233.327 34.1461 256.53 53.9995 262.203C69.6701 266.68 79.8692 258.781 88.3547 246.404C97.6737 232.812 105.636 219.149 110.046 203.272C110.221 202.642 111.116 197.627 112.742 197.818C116.498 198.26 124.54 215.899 125.406 217.378C142.439 246.463 158.697 276.21 177.503 304.206C179.569 307.282 182.157 312.246 184.9 314.989C196.297 326.386 167.291 287.978 159.071 274.114C151.802 261.854 144.907 249.353 138.759 236.499C137.459 233.782 102.48 274.38 98.8869 279.255C94.698 284.938 84.4243 303.314 86.8501 296.683C88.74 291.517 92.2166 286.794 95.5015 282.515C111.945 261.096 130.685 241.368 148.539 221.139C162.209 205.651 175.521 189.781 190.292 175.312C193.835 171.841 189.774 172.249 186.029 170.547C183.192 169.258 173.62 159.689 175.496 161.018C176.516 161.74 177.469 164.331 178.631 164.403C182.977 164.675 186.984 164.94 191.671 166.096C197.529 167.541 202.693 168.68 207.908 171.613C210.817 173.249 210.39 170.318 209.475 168.416C208.747 166.899 202.839 158.776 207.595 161.77C210.782 163.777 213.548 166.446 216.748 168.416C219.57 170.152 216.716 161.235 216.497 160.642C215.256 157.285 211.356 153.973 211.356 150.298C211.356 148.946 216.412 154.987 217.876 156.003C220.4 157.752 224.436 158.736 226.026 161.519C227.297 163.743 223.848 154.995 223.769 154.247C223.375 150.499 223.554 151.75 226.904 154.498C230.492 157.442 235.541 163.3 240.445 164.153C241.589 164.352 233.569 152.066 232.922 151.238C229.466 146.814 226.137 142.256 222.641 137.885C221.624 136.614 230.069 140.643 230.916 141.082C238.097 144.805 246.76 146.4 254.802 146.16C259.592 146.017 269.267 145.444 271.854 140.392C281.654 121.258 274.594 96.8977 263.892 79.8946C257.097 69.0988 234.051 39.3798 218.064 48.1725C202.336 56.8228 198.915 79.0937 202.203 95.066C207.106 118.881 236.387 127.072 256.996 130.55C297.084 137.314 341.402 130.426 380.06 119.014C385.835 117.31 403.27 112.837 397.3 113.623C393.008 114.188 388.694 115.799 384.762 117.447C361.613 127.149 340.085 141.749 318.998 155.125C255.166 195.615 196.192 242.62 135.875 288.032C120.245 299.799 103.427 310.921 88.6054 323.766C87.1045 325.067 91.044 325.171 91.74 322.387" stroke="black" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>


                {/* Skills Container  */}
                <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                    <motion.h2 className="font-bold text-2xl" initial={{x:"-300px"}} animate={isSkillRefInView?{x:0}:{}} transition={{delay:0.2}}>SKILLS</motion.h2>
                    <div className="flex gap-4 flex-wrap">
                        <span className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</span>
                        <span className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</span>
                        <span className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</span>
                        <span className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</span>
                        <span className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</span>

                    </div>
                </div>
                
                {/* Experience Container */}
                <div className="flex flex-col gap-12 justify-center">
                    <h2 className="font-bold text-2xl">EXPERIENCE</h2>
                    <div className="">
                        <div className="flex justify-between h-48">
                            <div className="w-1/3">
                                <div className="bg-white p-3 font-semibold rounded rounded-tr-none ">Dev</div>
                                <div className="p-3 text-sm italic">desxription</div>
                                <div className="p-3 text-red-500 text-sm font-semibold">2024-present</div>
                                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">company</div>
                            </div>
                        
                            <div className="w-1/6">
                                <div className="w-1 h-full bg-gray-500 relative rounded">
                                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                </div>
                            </div>

                            <div className="w-1/3"></div>
                        </div>

                        <div className="flex justify-between h-48 mb-12">
                            <div className="w-1/3">
                               
                            </div>
                        
                            <div className="w-1/6">
                                <div className="w-1 h-full bg-gray-500 relative rounded">
                                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                </div>
                            </div>

                            <div className="w-1/3">
                            <div className="bg-white p-3 font-semibold rounded rounded-tl-none ">Dev</div>
                                <div className="p-3 text-sm italic">desxription</div>
                                <div className="p-3 text-red-500 text-sm font-semibold">2024-present</div>
                                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">company</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="hidden lg:flex w-1/3  sticky top-0 overflow-hidden xl:w-1/2  justify-center">
            <svg className="machine"xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 645 526">
              <defs/>
              <g>
                <motion.path x="-100,136" y="-100,136" className="small"  d="M200 236v-21l-29-4c-2-10-6-18-11-26l18-23 -15-15 -23 18c-8-5-17-9-26-11l-4-29H90l-4 29c-10 2-18 6-26 11l-23-18 -15 15 18 23c-5 8-9 17-11 26L0 215v21l29 4c2 10 6 18 11 26l-18 23 15 15 23-18c8 5 17 9 26 11l4 29h21l4-29c10-2 18-6 26-11l23 18 15-15 -18-23c5-8 9-17 11-26L200 236zM100 262c-20 0-37-17-37-37s17-37 37-37c20 0 37 17 37 37S121 262 100 262z" style={{rotate:rotateForwardSlow}}/>
              </g>
               <g>
                <motion.path x="-173,694" y="-173,694" className="large"  d="M635 184v-21l-29-4c-1-10-3-19-6-28l25-14 -8-19 -28 7c-5-8-10-16-16-24L592 58l-15-15 -23 17c-7-6-15-11-24-16l7-28 -19-8 -14 25c-9-3-18-5-28-6L472 0h-21l-4 29c-10 1-19 3-28 6L405 9l-19 8 7 28c-8 5-16 10-24 16l-23-17L331 58l17 23c-6 7-11 15-16 24l-28-7 -8 19 25 14c-3 9-5 18-6 28l-29 4v21l29 4c1 10 3 19 6 28l-25 14 8 19 28-7c5 8 10 16 16 24l-17 23 15 15 23-17c7 6 15 11 24 16l-7 28 19 8 14-25c9 3 18 5 28 6l4 29h21l4-29c10-1 19-3 28-6l14 25 19-8 -7-28c8-5 16-10 24-16l23 17 15-15 -17-23c6-7 11-15 16-24l28 7 8-19 -25-14c3-9 5-18 6-28L635 184zM461 284c-61 0-110-49-110-110S401 64 461 64s110 49 110 110S522 284 461 284z"  style={{rotate:rotateForwardSlow}}/>
              </g>
              <g>
               <motion.path x="-136,996" y="-136,996" className="medium" d="M392 390v-21l-28-4c-1-10-4-19-7-28l23-17 -11-18L342 313c-6-8-13-14-20-20l11-26 -18-11 -17 23c-9-4-18-6-28-7l-4-28h-21l-4 28c-10 1-19 4-28 7l-17-23 -18 11 11 26c-8 6-14 13-20 20l-26-11 -11 18 23 17c-4 9-6 18-7 28l-28 4v21l28 4c1 10 4 19 7 28l-23 17 11 18 26-11c6 8 13 14 20 20l-11 26 18 11 17-23c9 4 18 6 28 7l4 28h21l4-28c10-1 19-4 28-7l17 23 18-11 -11-26c8-6 14-13 20-20l26 11 11-18 -23-17c4-9 6-18 7-28L392 390zM255 453c-41 0-74-33-74-74 0-41 33-74 74-74 41 0 74 33 74 74C328 420 295 453 255 453z"  style={{rotate:rotateBackwardSlow}} />
              </g>
              <g transform="translate(350, 250)">
               <motion.path className="small" d="M200 236v-21l-29-4c-2-10-6-18-11-26l18-23 -15-15 -23 18c-8-5-17-9-26-11l-4-29H90l-4 29c-10 2-18 6-26 11l-23-18 -15 15 18 23c-5 8-9 17-11 26L0 215v21l29 4c2 10 6 18 11 26l-18 23 15 15 23-18c8 5 17 9 26 11l4 29h21l4-29c10-2 18-6 26-11l23 18 15-15 -18-23c5-8 9-17 11-26L200 236zM100 262c-20 0-37-17-37-37s17-37 37-37c20 0 37 17 37 37S121 262 100 262z"   style={{rotate:rotateForwardSlow}}/>
              </g>
             <g transform="translate(310,55)">
               <motion.path className="small" d="M200 236v-21l-29-4c-2-10-6-18-11-26l18-23 -15-15 -23 18c-8-5-17-9-26-11l-4-29H90l-4 29c-10 2-18 6-26 11l-23-18 -15 15 18 23c-5 8-9 17-11 26L0 215v21l29 4c2 10 6 18 11 26l-18 23 15 15 23-18c8 5 17 9 26 11l4 29h21l4-29c10-2 18-6 26-11l23 18 15-15 -18-23c5-8 9-17 11-26L200 236zM100 262c-20 0-37-17-37-37s17-37 37-37c20 0 37 17 37 37S121 262 100 262z" fill="gray" style={{rotate:rotateForward}}/>
              </g>
              <g transform="translate(155, 153)">
               <motion.path className="small" d="M200 236v-21l-29-4c-2-10-6-18-11-26l18-23 -15-15 -23 18c-8-5-17-9-26-11l-4-29H90l-4 29c-10 2-18 6-26 11l-23-18 -15 15 18 23c-5 8-9 17-11 26L0 215v21l29 4c2 10 6 18 11 26l-18 23 15 15 23-18c8 5 17 9 26 11l4 29h21l4-29c10-2 18-6 26-11l23 18 15-15 -18-23c5-8 9-17 11-26L200 236zM100 262c-20 0-37-17-37-37s17-37 37-37c20 0 37 17 37 37S121 262 100 262z" fill="gray" style={{rotate:rotateBackward}}/>
              </g>
            </svg>
          </div>
        
        </div>
        
        </motion.div>

        <motion.div
        className="h-full"
        initial={{y:"-200vh"}}
        animate={{y:"0%"}}
        transition={{duration:1}}
        >
        {/* Container */}
        <div className="h-full overflow-auto lg:flex" ref={containerRef}>
            {/* Text container  */}
            <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:ps-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3  xl:w-1/2">
                <div className="flex flex-col gap-12 justify-center">
                    <h1 className="font-bold text-2xl">BIO</h1>
                    <p className="text-lg">Koree Loreumipsum Koree Loreumipsum Koree Loreumipsum Koree Loreumipsum Koree Loreumipsum Koree Loreumipsum Koree Loreumipsum Koree Loreumipsum</p>
                    <div className="self-end">
                        <svg  height="100" viewBox="0 0 401 327" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M121.08 133.935C122.568 135.424 126.266 143.376 126.659 138.261C126.982 134.068 126.719 129.752 126.158 125.597C125.846 123.291 123.948 116.993 125.594 118.638C127.219 120.264 128.128 123.948 128.979 126.036C130.617 130.056 133.854 132.193 137.38 134.437C141.835 137.272 135.328 115.588 134.747 112.682C133.721 107.556 142.315 117.219 143.649 117.886C145.016 118.57 143.121 115.994 143.774 115.504C144.12 115.244 149.484 118.945 150.169 119.516C153.885 122.613 151.184 116.873 151.611 115.378C155.086 103.215 155.268 89.4775 154.056 76.8854C151.618 51.5577 138.968 -3.26618 103.401 2.53276C85.6456 5.42762 70.9919 19.1717 59.391 31.8726C40.9043 52.112 25.0101 75.6808 14.3155 100.959C-0.565902 136.133 -3.40893 179.944 11.6198 215.56C19.117 233.327 34.1461 256.53 53.9995 262.203C69.6701 266.68 79.8692 258.781 88.3547 246.404C97.6737 232.812 105.636 219.149 110.046 203.272C110.221 202.642 111.116 197.627 112.742 197.818C116.498 198.26 124.54 215.899 125.406 217.378C142.439 246.463 158.697 276.21 177.503 304.206C179.569 307.282 182.157 312.246 184.9 314.989C196.297 326.386 167.291 287.978 159.071 274.114C151.802 261.854 144.907 249.353 138.759 236.499C137.459 233.782 102.48 274.38 98.8869 279.255C94.698 284.938 84.4243 303.314 86.8501 296.683C88.74 291.517 92.2166 286.794 95.5015 282.515C111.945 261.096 130.685 241.368 148.539 221.139C162.209 205.651 175.521 189.781 190.292 175.312C193.835 171.841 189.774 172.249 186.029 170.547C183.192 169.258 173.62 159.689 175.496 161.018C176.516 161.74 177.469 164.331 178.631 164.403C182.977 164.675 186.984 164.94 191.671 166.096C197.529 167.541 202.693 168.68 207.908 171.613C210.817 173.249 210.39 170.318 209.475 168.416C208.747 166.899 202.839 158.776 207.595 161.77C210.782 163.777 213.548 166.446 216.748 168.416C219.57 170.152 216.716 161.235 216.497 160.642C215.256 157.285 211.356 153.973 211.356 150.298C211.356 148.946 216.412 154.987 217.876 156.003C220.4 157.752 224.436 158.736 226.026 161.519C227.297 163.743 223.848 154.995 223.769 154.247C223.375 150.499 223.554 151.75 226.904 154.498C230.492 157.442 235.541 163.3 240.445 164.153C241.589 164.352 233.569 152.066 232.922 151.238C229.466 146.814 226.137 142.256 222.641 137.885C221.624 136.614 230.069 140.643 230.916 141.082C238.097 144.805 246.76 146.4 254.802 146.16C259.592 146.017 269.267 145.444 271.854 140.392C281.654 121.258 274.594 96.8977 263.892 79.8946C257.097 69.0988 234.051 39.3798 218.064 48.1725C202.336 56.8228 198.915 79.0937 202.203 95.066C207.106 118.881 236.387 127.072 256.996 130.55C297.084 137.314 341.402 130.426 380.06 119.014C385.835 117.31 403.27 112.837 397.3 113.623C393.008 114.188 388.694 115.799 384.762 117.447C361.613 127.149 340.085 141.749 318.998 155.125C255.166 195.615 196.192 242.62 135.875 288.032C120.245 299.799 103.427 310.921 88.6054 323.766C87.1045 325.067 91.044 325.171 91.74 322.387" stroke="black" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>


                {/* Skills Container  */}
                <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                    <motion.h2 className="font-bold text-2xl" initial={{x:"-300px"}} animate={isSkillRefInView?{x:0}:{}} transition={{delay:0.2}}>SKILLS</motion.h2>
                    <div className="flex gap-4 flex-wrap">
                        <span className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</span>
                        <span className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</span>
                        <span className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</span>
                        <span className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</span>
                        <span className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</span>

                    </div>
                </div>
                
                {/* Experience Container */}
                <div className="flex flex-col gap-12 justify-center">
                    <h2 className="font-bold text-2xl">EXPERIENCE</h2>
                    <div className="">
                        <div className="flex justify-between h-48">
                            <div className="w-1/3">
                                <div className="bg-white p-3 font-semibold rounded rounded-tr-none ">Dev</div>
                                <div className="p-3 text-sm italic">desxription</div>
                                <div className="p-3 text-red-500 text-sm font-semibold">2024-present</div>
                                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">company</div>
                            </div>
                        
                            <div className="w-1/6">
                                <div className="w-1 h-full bg-gray-500 relative rounded">
                                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                </div>
                            </div>

                            <div className="w-1/3"></div>
                        </div>

                        <div className="flex justify-between h-48 mb-12">
                            <div className="w-1/3">
                               
                            </div>
                        
                            <div className="w-1/6">
                                <div className="w-1 h-full bg-gray-500 relative rounded">
                                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                </div>
                            </div>

                            <div className="w-1/3">
                            <div className="bg-white p-3 font-semibold rounded rounded-tl-none ">Dev</div>
                                <div className="p-3 text-sm italic">desxription</div>
                                <div className="p-3 text-red-500 text-sm font-semibold">2024-present</div>
                                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">company</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="hidden lg:flex w-1/3  sticky top-0 overflow-hidden xl:w-1/2  justify-center">
            <svg className="machine"xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 645 526">
              <defs/>
              <g>
                <motion.path x="-100,136" y="-100,136" className="small"  d="M200 236v-21l-29-4c-2-10-6-18-11-26l18-23 -15-15 -23 18c-8-5-17-9-26-11l-4-29H90l-4 29c-10 2-18 6-26 11l-23-18 -15 15 18 23c-5 8-9 17-11 26L0 215v21l29 4c2 10 6 18 11 26l-18 23 15 15 23-18c8 5 17 9 26 11l4 29h21l4-29c10-2 18-6 26-11l23 18 15-15 -18-23c5-8 9-17 11-26L200 236zM100 262c-20 0-37-17-37-37s17-37 37-37c20 0 37 17 37 37S121 262 100 262z" style={{rotate:rotateForwardSlow}}/>
              </g>
               <g>
                <motion.path x="-173,694" y="-173,694" className="large"  d="M635 184v-21l-29-4c-1-10-3-19-6-28l25-14 -8-19 -28 7c-5-8-10-16-16-24L592 58l-15-15 -23 17c-7-6-15-11-24-16l7-28 -19-8 -14 25c-9-3-18-5-28-6L472 0h-21l-4 29c-10 1-19 3-28 6L405 9l-19 8 7 28c-8 5-16 10-24 16l-23-17L331 58l17 23c-6 7-11 15-16 24l-28-7 -8 19 25 14c-3 9-5 18-6 28l-29 4v21l29 4c1 10 3 19 6 28l-25 14 8 19 28-7c5 8 10 16 16 24l-17 23 15 15 23-17c7 6 15 11 24 16l-7 28 19 8 14-25c9 3 18 5 28 6l4 29h21l4-29c10-1 19-3 28-6l14 25 19-8 -7-28c8-5 16-10 24-16l23 17 15-15 -17-23c6-7 11-15 16-24l28 7 8-19 -25-14c3-9 5-18 6-28L635 184zM461 284c-61 0-110-49-110-110S401 64 461 64s110 49 110 110S522 284 461 284z"  style={{rotate:rotateForwardSlow}}/>
              </g>
              <g>
               <motion.path x="-136,996" y="-136,996" className="medium" d="M392 390v-21l-28-4c-1-10-4-19-7-28l23-17 -11-18L342 313c-6-8-13-14-20-20l11-26 -18-11 -17 23c-9-4-18-6-28-7l-4-28h-21l-4 28c-10 1-19 4-28 7l-17-23 -18 11 11 26c-8 6-14 13-20 20l-26-11 -11 18 23 17c-4 9-6 18-7 28l-28 4v21l28 4c1 10 4 19 7 28l-23 17 11 18 26-11c6 8 13 14 20 20l-11 26 18 11 17-23c9 4 18 6 28 7l4 28h21l4-28c10-1 19-4 28-7l17 23 18-11 -11-26c8-6 14-13 20-20l26 11 11-18 -23-17c4-9 6-18 7-28L392 390zM255 453c-41 0-74-33-74-74 0-41 33-74 74-74 41 0 74 33 74 74C328 420 295 453 255 453z"  style={{rotate:rotateBackwardSlow}} />
              </g>
              <g transform="translate(350, 250)">
               <motion.path className="small" d="M200 236v-21l-29-4c-2-10-6-18-11-26l18-23 -15-15 -23 18c-8-5-17-9-26-11l-4-29H90l-4 29c-10 2-18 6-26 11l-23-18 -15 15 18 23c-5 8-9 17-11 26L0 215v21l29 4c2 10 6 18 11 26l-18 23 15 15 23-18c8 5 17 9 26 11l4 29h21l4-29c10-2 18-6 26-11l23 18 15-15 -18-23c5-8 9-17 11-26L200 236zM100 262c-20 0-37-17-37-37s17-37 37-37c20 0 37 17 37 37S121 262 100 262z"   style={{rotate:rotateForwardSlow}}/>
              </g>
             <g transform="translate(310,55)">
               <motion.path className="small" d="M200 236v-21l-29-4c-2-10-6-18-11-26l18-23 -15-15 -23 18c-8-5-17-9-26-11l-4-29H90l-4 29c-10 2-18 6-26 11l-23-18 -15 15 18 23c-5 8-9 17-11 26L0 215v21l29 4c2 10 6 18 11 26l-18 23 15 15 23-18c8 5 17 9 26 11l4 29h21l4-29c10-2 18-6 26-11l23 18 15-15 -18-23c5-8 9-17 11-26L200 236zM100 262c-20 0-37-17-37-37s17-37 37-37c20 0 37 17 37 37S121 262 100 262z" fill="gray" style={{rotate:rotateForward}}/>
              </g>
              <g transform="translate(155, 153)">
               <motion.path className="small" d="M200 236v-21l-29-4c-2-10-6-18-11-26l18-23 -15-15 -23 18c-8-5-17-9-26-11l-4-29H90l-4 29c-10 2-18 6-26 11l-23-18 -15 15 18 23c-5 8-9 17-11 26L0 215v21l29 4c2 10 6 18 11 26l-18 23 15 15 23-18c8 5 17 9 26 11l4 29h21l4-29c10-2 18-6 26-11l23 18 15-15 -18-23c5-8 9-17 11-26L200 236zM100 262c-20 0-37-17-37-37s17-37 37-37c20 0 37 17 37 37S121 262 100 262z" fill="gray" style={{rotate:rotateBackward}}/>
              </g>
            </svg>
          </div>
        
        </div>
        
        </motion.div>
        </>
    )
}

export default AboutPage;