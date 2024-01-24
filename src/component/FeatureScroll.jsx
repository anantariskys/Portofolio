import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import FeatureTitle from "./FeatureTitle";
import ParticleEffect from "./minor/ParticleEffect";
import { useRef } from "react";
import image1 from '../assets/logo-kbmpti.png'
import image2 from '../assets/logo-uab.png'
import image3 from '../assets/logo-kbmdsi.png'
import image4 from '../assets/logo_filkom.png'
const FeatureScroll = () => {
  const data = [
    {
      id: 1,
      title: "KBMDSI WEBSITE",
      imageUrl: image1,
      description:
        "nesciunt tempore officiis temporibus facere quasi obcaecati possimus? Cumque officiis natus vero accusantium laudantium consequuntur necessitatibus nihil ex explicabo. Delectus magni unde quod modi, consequuntur tempora libero quibusdam earum ",
    },
    {
      id: 2,
      title: "JALAN KODEKU",
      imageUrl: image2,
      description:
        " Optio odio non totam molestiae vitae fuga voluptas sint asperiores officiis excepturi sed, ut dignissimos illo unde, similique ducimus? Reiciendis, dicta ad natus nisi totam eveniet itaque at molestias deserunt repudiandae saepe mollitia! Corrupti expedita quisquam omnis nulla, et asperiores. Necessitatibus obcaecati iusto ducimus?",
    },
    {
      id: 3,
      title: "N BLOG",
      imageUrl: image3,
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi perspiciatis error. Doloribus, aliquam hic ex,  ",
    },
  ];

  const [activeTitle, setActiveTitle] = useState(data[0]);

  const handleTitleInView = (inViewTitle) => {
    const title = data.find((item) => item.title === inViewTitle);
    if (title) {
      setActiveTitle(title);
    }
  };

  const handleTransitionEnd = () => {
    console.log("Transisi selesai!");
  };

  useEffect(() => {
    const imgElement = document.getElementById("transition-image");

    if (imgElement) {
      imgElement.addEventListener("transitionend", handleTransitionEnd);
      return () => {
        imgElement.removeEventListener("transitionend", handleTransitionEnd);
      };
    }
  }, [activeTitle]);

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    console.log("Page scroll: ", scaleX);
  });

  return (
    <div className="w-full pt-20 ">
      <motion.div className="bg-warning-content h-1  fixed bottom-0 left-0 " style={{ width: scaleX, opacity: scaleX }}></motion.div>
      <h1 className="text-center font-Leckerli-One text-7xl font-black text-warning-content">MY PROJECT</h1>

      <div className="flex flex-col-reverse lg:flex-row items-start">
        <div ref={targetRef} className="w-full py-[50vh] flex justify-center font-black ">
          <motion.ul
            className="flex flex-col gap-[25vh]"
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
            {data.map((item) => (
              <li key={item.id}>
                <FeatureTitle content={item.title} onInView={handleTitleInView} />
              </li>
            ))}
          </motion.ul>
        </div>
        <div className="sticky top-0 overflow-hidden flex w-full px-5 h-screen  lg:py-0 py-16 items-center justify-center">
          <div className="card md:w-3/5 w-[90%] bg-neutral-content backdrop-blur-sm  bg-opacity-20">
            <figure>
              <motion.img
               draggable='false'
               id="transition-image"
        
               src={activeTitle.imageUrl}
               className="w-full h-auto aspect-video  object-cover"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{
                duration: 0.5,
                delay: 1.5,
              }}
               alt=""
              />
            </figure>
            <div className="card-body md:px-8 px-2  font-Leckerli-One">
           
              <motion.h2
                className="card-title md:text-xl text-base"
                
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
                  delay: 1.5,
                }}

              >
                Tech Stack <span className="md:-ml-10">:</span><span className="text-xs md:text-sm">{"React,Taiwind,Daisy UI,Framer Motion"}</span>
              </motion.h2>
           
              <motion.p
                className="line-clamp-2 md:text-lg text-sm"
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1.2,
                  delay: 1.5,
                }}
              >
                {activeTitle.description}
              </motion.p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm">More...</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureScroll;
