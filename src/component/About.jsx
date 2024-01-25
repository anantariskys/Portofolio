import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticleEffect from "./minor/ParticleEffect";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import image from "../assets/ananta.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);
  return (
    <div className="hero bg-warning h-screen font-Leckerli-One text-warning-content overflow-hidden">
      <ParticleEffect></ParticleEffect>

      <div className="hero-content flex-col lg:flex-row ">
        {imageLoaded && (
          <motion.img
            src={image}
            className="bg-white aspect-square object-cover w-[70%] lg:w-[40%]   mask mask-squircle"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 1.55,
            }}
          />
        )}
        <div>
          <motion.h1
            className="md:text-5xl text-xl "
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.5
            }}
          >
            About Myself...
          </motion.h1>
          <motion.p
            className="py-6 md:text-xl sm:text-base text-sm w-full"
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.3,
              delay: 1.5
            }}
          >
            I am a student studying Information Technology Education at the Faculty of Computer Science, Brawijaya University. I have an interest in programming, web development and related fields. My academic endeavors have given me a deep understanding of education and computer science. I have translated theoretical knowledge into practical skills through my role as a practicum assistant. Additionally, my involvement in various campus organizations has enriched my skills and knowledge, strengthening my readiness to excel in a variety of IT-related roles.
         
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
              delay: 1.5
            }}
          >
            Contact Me<FontAwesomeIcon icon={faPhone} />
          </motion.button>
        </div>
      </div>
    </div>
 
  );
};

export default About;
