import React, { useEffect, useRef } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import TransitionPage from '../component/minor/TransitionPage';
import ParticleEffect from '../component/minor/ParticleEffect';

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
  return (
    <motion.div className="w-screen h-screen bg-warning py-24">
      <TransitionPage></TransitionPage>
      <ParticleEffect></ParticleEffect>
      <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="flex  w-[70%] gap-[2px] aspect-video h-auto mx-auto">
          <div className="bg-1 grow hover:grow-[6] hover:grayscale-0 flex-1 rounded-2xl duration-500 delay-75  transition-all ease-in-out h-full bg-primary grayscale flex items-center"></div>
          <div className="bg-2 grow hover:grow-[6] hover:grayscale-0 flex-1 rounded-2xl duration-500 delay-75  transition-all ease-in-out h-full bg-primary grayscale "></div>
          <div className="bg-3 grow hover:grow-[6] hover:grayscale-0 flex-1 rounded-2xl duration-500 delay-75  transition-all ease-in-out h-full bg-primary grayscale "></div>
          <div className="bg-4 grow hover:grow-[6] hover:grayscale-0 flex-1 rounded-2xl duration-500 delay-75  transition-all ease-in-out h-full bg-primary grayscale "></div>
          <div className="bg-5 grow hover:grow-[6] hover:grayscale-0 flex-1 rounded-2xl duration-500 delay-75  transition-all ease-in-out h-full bg-primary grayscale "></div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="flex  w-[70%] gap-[2px] aspect-video h-auto mx-auto">
          <div className="bg-1 grow hover:grow-[6] hover:grayscale-0 flex-1 rounded-2xl duration-500 delay-75  transition-all ease-in-out h-full bg-primary grayscale flex items-center"></div>
          <div className="bg-2 grow hover:grow-[6] hover:grayscale-0 flex-1 rounded-2xl duration-500 delay-75  transition-all ease-in-out h-full bg-primary grayscale "></div>
          <div className="bg-3 grow hover:grow-[6] hover:grayscale-0 flex-1 rounded-2xl duration-500 delay-75  transition-all ease-in-out h-full bg-primary grayscale "></div>
          <div className="bg-4 grow hover:grow-[6] hover:grayscale-0 flex-1 rounded-2xl duration-500 delay-75  transition-all ease-in-out h-full bg-primary grayscale "></div>
          <div className="bg-5 grow hover:grow-[6] hover:grayscale-0 flex-1 rounded-2xl duration-500 delay-75  transition-all ease-in-out h-full bg-primary grayscale "></div>
          <div className="bg-6 grow hover:grow-[6] hover:grayscale-0 flex-1 rounded-2xl duration-500 delay-75  transition-all ease-in-out h-full bg-primary grayscale "></div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>


      
    </motion.div>
  );
};

export default SocialMedia;
