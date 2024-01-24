import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero from "../component/Hero";
import TransitionPage from "../component/minor/TransitionPage";
import ParticleEffect from "../component/minor/ParticleEffect";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1900);
  }, []);
  return (
    <motion.div className="w-screen relative bg-warning h-screen">
      <ParticleEffect></ParticleEffect>
      <TransitionPage></TransitionPage>
      {isLoading ? <></> : <Hero />}
    </motion.div>
  );
};

export default Home;
