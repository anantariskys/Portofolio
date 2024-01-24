import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TransitionPage from "../component/minor/TransitionPage";
import ParticleEffect from "../component/minor/ParticleEffect";
import FeatureScroll from "../component/FeatureScroll";
const Project = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1900);
  }, []);
  return (
    <motion.div className={`w-full ${isLoading?'h-screen':''} bg-warning`}>
              <ParticleEffect></ParticleEffect>

      <TransitionPage></TransitionPage>
      {isLoading ? <></> :(
         <FeatureScroll></FeatureScroll>
         )}
    </motion.div>
  );
};

export default Project;
