import React from "react";
import github from '../assets/sosmed/github.png'
import ig from '../assets/sosmed/ig.png'
import wa from '../assets/sosmed/wa.png'
import tiktok from '../assets/sosmed/tiktok.png'
import linkedln from '../assets/sosmed/linkedln.png'

import { motion } from "framer-motion";

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Contact = () => {
    const data = [
        {   
            id:1,                     
            nama:"Github",
            urlImage:github,
            url:'https://github.com/anantariskys',
        },
        {
            id:2,
            nama:"Instagram",
            urlImage:ig,
            url:'https://www.instagram.com/riskykun_/',
        },
        {
            id:3,
            nama:"Whatsapp",
            urlImage:wa,
            url:'https://wa.me/+62895631605747',
        },
        {
            id:4,
            nama:"Tiktok",
            urlImage:tiktok,
            url:'https://www.tiktok.com/@nantakun666?lang=en',
        },
        {
            id:5,
            nama:"Linkedin",
            urlImage:linkedln,
            url:'https://www.linkedin.com/in/anantariskys',
        },
    ]
  return (
    <motion.div className="flex lg:flex-row flex-col w-[70%] lg:h-auto h-[80%]  lg:w-[70%] gap-[2px] aspect-video  mx-auto"
    initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.3,
        delay: 1.5,
      }}
    >
     {
        data.map((item)=>(
            <div className={`bg-${item.id} py-1 group grow hover:grow-[6] hover:grayscale-0 flex-1 rounded-2xl duration-500 delay-75  transition-all ease-in-out h-full bg-primary group grayscale flex justify-center items-cente `}>
            <a target={"_blank"} className='flex flex-col justify-center items-center gap-1 md:gap-3' href={item.url}>
            <img draggable src={item.urlImage} className='lg:w-2/4 w-1/4' alt="" />
            <h2 className="hidden font-xl bg-warning-content bg-opacity-40 px-1 rounded font-Leckerli-One text-neutral-content group-hover:block">{item.nama} <FontAwesomeIcon icon={faLink} /></h2>
            </a>
      
          </div>
        ))
     }
     
    </motion.div>
  );
};

export default Contact;
