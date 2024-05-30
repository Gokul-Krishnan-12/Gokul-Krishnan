'use client';
import {Lenis as ReactLenis } from '@studio-freight/react-lenis';


const SmoothScroll = ({children,options,...props}) => {
 

  return <ReactLenis root {...props}>
    {children}
  </ReactLenis>;
};

export default SmoothScroll;
