'use client'
import Character from '@/utils/Character';
import styles from './page.module.scss'
import { useState, useEffect } from 'react';

export default function Test() {

  const [windowsWidth, setWindowsWidth] = useState(0);

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, [])

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
      return [...Array(nbOfBlocks).keys()].map((_, index) => {
        return <div onMouseEnter={(e) => {colorize(e.target)}} key={index}></div>
    })
  }

  const colorize = (el) => {
    el.style.backgroundColor = '#eb5939'
    setTimeout( () => {
      el.style.backgroundColor = 'transparent';
    }, 300)
  }
  const paragraph="With over two years of diverse web application experience and collaborations with top talent in the field.";
  
  return (
    <>
    <div className={styles.container}>
      <div className={styles.body}>
      <Character className="nameText--aboutText" paragraph={paragraph} />
      </div>
      <div className={styles.grid}>
        {
          windowsWidth > 0 && [...Array(20).keys()].map( (_, index) => {
            return <div key={index} className={styles.column}>
                {
                  getBlocks()
                }
            </div>
          })
        }
      </div>
      
    </div>

    <div className={styles.experienceContainer}>
      <div className={styles.experienceBody}>
      <Character className="nameText--aboutText" paragraph={paragraph} />
      </div>
      <div className={styles.grid}>
        {
          windowsWidth > 0 && [...Array(20).keys()].map( (_, index) => {
            return <div key={index} className={styles.column}>
                {
                  getBlocks()
                }
            </div>
          })
        }
      </div>
      
    </div>

</>

  )
}