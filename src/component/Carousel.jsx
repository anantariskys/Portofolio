import React, { useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import image1 from '../assets/logo-kbmpti.png'
import image2 from '../assets/logo-uab.png'
import image3 from '../assets/logo-kbmdsi.png'
import image4 from '../assets/logo_filkom.png'

const Carousel = () => {
  const data = [
    {
      id: 1,
      title: "KBMPTI FILKOM UB",
      year:'September 2022 - Desember 2022',
      as: 'Informatics Intern Staff Division of Puskominfo Departement',
      imageUrl: image1,
      description:
        "As an intern, I learned about the basics of web development, guided and directed by a mentor, apart from that, I also learned about time management and the organization itself.",
    },
    {
      id: 2,
      title: "UAB Universitas Brawijaya",
      year:'Januari 2023 - Desember 2023',
      as:'Staff of Music division',
      imageUrl: image2,
      description:
        " Becomes the person responsible for running the indie band formation work program, then becomes part of the committee for homeband player auditions. As well as being a member of an indie pop punk band based in Malang called Purple Haze",
    },
    {
      id: 3,
      title: "KBMDSI FILKOM UB",
      year:'Januari 2023 - Desember 2023',
      as: "Informatics Staff Division of Medkominfo Departement",
      imageUrl: image3,
      description: "Being part of developing the organization's website, where I was responsible for the front end, and responsible for uploading content on the web in the field of advocacy and then became the interim Head of Informatics and became a Mentor for intern staff in the Informatics Division",
    },
    {
      id: 4,
      title: "Faculty of Computer Science (FILKOM)",
      year:'Agustus 2023 - Desember 2023',
      as: "Practicum Assistant : Basic Programming",
      imageUrl: image4,
      description: "As a practicum assistant I have succeeded in Taught 37 students about basic Java programming,Organize and facilitate practicum sessions to apply basic programming concepts in assignments and projects and Providing an assessment of student practicum reports.",
    },
    {
      id: 5,
      title: "LKMM TD DSI FILKOM 2023",
      year:'September 2023 - November 2023',
      as: "Head of the Field Responsible Division",
      imageUrl: image4,
      description: "My role is to determine the success and smooth implementation of the event. My responsibilities include forming and dividing facility groups with each facilitator and establishing security, then being responsible for leading and supervising each staff and the orderliness and smooth running of OSPEK program events, coordination with team members, effective communication. My main goal is to guide the course of this event by providing a positive and memorable OSPEK experience for all new students in the department.",
    },
    
  ];

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: targetRef,
  });
  

  const scaleX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    console.log("Page scroll: ", scaleX);
  });

  return (
    <>
      <motion.h1 className="font-Leckerli-One text-3xl md:text-6xl font-bold"
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
      >My experience</motion.h1>
      <motion.div className="bg-warning-content rounded-sm w-1   fixed bottom-0 left-0 " style={{ height: scaleX, opacity: scaleX }}></motion.div>
      <motion.div className="bg-warning-content rounded-sm w-1   fixed top-0 right-0 " style={{ height: scaleX, opacity: scaleX }}></motion.div>
      <motion.div className="bg-warning-content rounded-sm h-1   fixed left-0 top-0 " style={{ width: scaleX, opacity: scaleX }}></motion.div>
      <motion.div className="bg-warning-content rounded-sm h-1   fixed bottom-0 right-0 " style={{ width: scaleX, opacity: scaleX }}></motion.div>
      <motion.div ref={targetRef} className="lg:h-[35dvw] h-[75dvh] lg:w-auto w-[80dvw] mx-auto lg:aspect-video   carousel carousel-vertical rounded-box"
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
        {data.map((item) => (
          <div autoFocus key={item.id} className="carousel-item h-full">
            <div className="card lg:card-side card-compact pt-1 lg:pt-0 md:card-normal lg:divide-x-4 divide-neutral bg-neutral-content bg-opacity-20 backdrop-blur-sm">
              <figure className=" w-full  ">
                <img draggable="false" className="aspect-auto lg:w-3/4 w-[50%]" src={item.imageUrl} alt="car!" />
              </figure>
              <div className="card-body w-full font-Leckerli-One">
                <h2 className="card-title text-lg md:text-3xl font-bold">{item.as}</h2>
                <h2 className="card-title text-xs  md:text-xl">{item.title}</h2>
                <p>{item.year}</p>
                <p className="line-clamp-6 md:line-clamp-none">{item.description}</p>
               
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Carousel;
