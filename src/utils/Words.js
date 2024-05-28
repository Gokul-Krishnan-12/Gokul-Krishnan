import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import styles from './style.module.scss';

export default function Words({skills ,skillsDescription}) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.5"]
  })

  const words = skills.split(",");

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
     <div className={styles.border}>

    <p 
      ref={container}         
      className={`${styles.paragraph} ${styles['paragraph--words']}`}   onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    {
      words.map( (word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
      })
    }
     {
      words.map( (word ,i
      ) => {
       
        return <React.Fragment key={i}>
        <span className={`${styles.word} ${styles['word--mask']}`} style={{ display: isHovered ? 'block' : 'none' }}>{word}</span>
        <span className={`${styles.wordDescription}`} style={{ display: isHovered ? 'flex' : 'none' }}>{skillsDescription}</span>
        </React.Fragment>
      })
    }
    </p>
    </div> 
    </>
  )
}

const Word = ({children, progress, range}) => {
  const amount = range[1] - range[0]
  const step = amount / children.length
  return (
    <span className={styles.word}>
      {
        children.split("").map((char, i) => {
          const start = range[0] + (i * step);
          const end = range[0] + ((i + 1) * step)
          return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
        })
      }
    </span>
  )
}

const Char = ({children, progress, range}) => {
  const opacity = useTransform(progress, range, [0,1])
  return (
    <span>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{opacity: opacity}}>{children}</motion.span>
    </span>
  )
}