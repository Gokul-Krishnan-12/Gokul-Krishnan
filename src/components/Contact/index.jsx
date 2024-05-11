import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '@/components/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '@/components/Magnetic';

export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 300])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    
                    <h2>Dreams to <span className='text-accent'>reality</span>? </h2>
                    
                    <h2>Let's talk!</h2>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded  className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                </div>
                <div className={styles.nav}>
                       
                            <p>info@dennissnellenberg.com</p>
                       
                            <p>+31 6 27 84 74 30</p>
                       
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                          
                            <p>2024 © Gokul Krishnan</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            <p>Instagram</p>                         
                        </span>
                       
                          
                       
                       
                            <p>Dribbble</p>
                       
                       
                            <p>Linkedin</p>
                       
                    </div>
                </div>
            </div>
        </motion.div>
    )
}