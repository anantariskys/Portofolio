import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import TransitionPage from '../component/minor/TransitionPage';
import ParticleEffect from '../component/minor/ParticleEffect';
import Contact from '../component/Contact';

const SocialMedia = () => {
  const targetRef = useRef(null);


  const { scrollYProgress } = useScroll({
    target: targetRef,

  });

  const scaleX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
    console.log("Page scroll: ", scaleX)
  })

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1900);
  }, []);

  return (
    <motion.div className="w-screen h-screen bg-warning py-24">
      <TransitionPage></TransitionPage>
      <ParticleEffect></ParticleEffect>
      {isLoading ? <></> :(
      <>
      <Contact></Contact>
         </> )}

   
      
    </motion.div>
  );
};

export default SocialMedia;
