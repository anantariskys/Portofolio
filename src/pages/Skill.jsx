import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import TransitionPage from '../component/minor/TransitionPage';
import ParticleEffect from '../component/minor/ParticleEffect';
import Experience from '../component/Experience';
const TechStack = () => {

  const targetRef = useRef(null);


  const { scrollYProgress } = useScroll({
    target: targetRef,

  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1900);
  }, []);

  const scaleX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
    console.log("Page scroll: ", scaleX)
  })
  return (
    <motion.div className="w-screen h-screen bg-warning flex flex-col justify-center gap-5">
    <TransitionPage></TransitionPage>
    <ParticleEffect></ParticleEffect>
    {isLoading ? <></> :(
      <>
        <motion.h1 className='md:text-6xl text-4xl font-Leckerli-One font-bold text-center '
          initial={{
            opacity: 0,
            y:-300
          }}
          animate={{
            opacity: 1,
            y:0
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >TECH STACK</motion.h1>
         <Experience></Experience>
         </> )}


   

  
  </motion.div>
  )
}

export default TechStack