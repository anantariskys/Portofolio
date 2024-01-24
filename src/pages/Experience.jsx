import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import TransitionPage from '../component/minor/TransitionPage'
import ParticleEffect from '../component/minor/ParticleEffect'
import Carousel from '../component/Carousel'
const Experience = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1900);
  }, []);
  return (
    <motion.div
    className="w-screen relative flex justify-center flex-col gap-5 items-center  h-screen bg-warning"
  >

<ParticleEffect></ParticleEffect>
      <TransitionPage></TransitionPage>
      {isLoading ? <></> :  <Carousel/> }

  
  </motion.div>  )
}

export default Experience