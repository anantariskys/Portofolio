import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticleEffect from "../component/minor/ParticleEffect";
import TypeWriter from "./minor/TypeWriter";

import { faFile } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = "/src/assets/IMG_9923.JPG";
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className="hero  h-screen font-Leckerli-One text-warning-content">
 

      <div className="hero-content flex-col lg:flex-row-reverse ">
        {imageLoaded && (
          <motion.img
            src="/src/assets/IMG_9923.JPG"
            className="bg-white aspect-square object-cover w-[70%] lg:w-[40%]   mask mask-squircle"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 1.5,
            }}
          />
        )}
        <div>
          <motion.p
            className="py-6 text-lg   w-full"
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
              
            }}
            transition={{
              duration: 1.3,
              delay: 1.5,
            }}
          >
          Fortis Fortuna Adiuvat
          </motion.p>
          <motion.h1
            className="md:text-5xl text-4xl "
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.5,
            }}
          >
            Hello, my name is <b>Ananta.</b>
          </motion.h1>
          <motion.p
            className="py-6 w-full"
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.3,
              delay: 1.5,
            }}
          >
            <TypeWriter></TypeWriter>
          </motion.p>
          <motion.button
            className="btn  text-lg   px-8"
            initial={{
              opacity: 0,
              scale: 0,

            }}
            animate={{
              opacity: 1,
              scale: [null, 1.1, 1],

            }}
            transition={{
              duration: 1,
              delay: 1.5,
            }}
          >
            Download CV<FontAwesomeIcon icon={faFile} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
