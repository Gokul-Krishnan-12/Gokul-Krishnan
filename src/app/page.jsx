'use client';

import {motion} from 'framer-motion';
import {fadeIn} from '../components/variants';
import Hero from '@/components/Hero';
import AboutBanner from '@/components/AboutBanner';
import WhatIDo from '@/components/WhatIDo';
import Experience from '@/components/Experience';


const Home = () => {
  return (<>
 <Hero />
 <AboutBanner/>
<WhatIDo/>
<Experience/>
</>
  );
};

export default Home;
