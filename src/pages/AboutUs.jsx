import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ParticleEffect from '../component/minor/ParticleEffect';
import TransitionPage from '../component/minor/TransitionPage';
import About from '../component/About';
const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1900);
  
    
  }, [])
  
  
  return (
    <motion.div
      className='w-screen relative h-screen bg-warning'
    >
      <TransitionPage></TransitionPage>
      <ParticleEffect />

      {
        isLoading?(
      <></>
        ):(
     
      <About></About>
     
        )
      }
    </motion.div>
  );
}

export default AboutUs;