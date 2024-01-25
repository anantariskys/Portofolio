import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import FeatureTitle from "./FeatureTitle";
import ParticleEffect from "./minor/ParticleEffect";
import { useRef } from "react";
import image from "../assets/project/new_portofolio.jpg";
import image1 from "../assets/project/kedai_mamsuki.jpg";
import image2 from "../assets/project/jalankodeku.jpg";
import image3 from "../assets/project/kbmdsi.jpg";
import image4 from "../assets/project/n_blog.jpg";
import image5 from "../assets/project/old_portofolio.jpg";

const FeatureScroll = () => {
  const data = [
    {
      id: 1,
      title: "MY NEW PORTFOLIO",
      imageUrl: image,
      description: "My newest portfolio website, which you are visiting now, was created with the aim of tidying up and updating your portfolio and learning about new tech stacks.",
      url: "https://ananta-risky-susanto.vercel.app/",
      techStack: ["Vite", "React", "Tailwind CSS", "DaisyUI", "Framer Motion", "SplideJS", "Laravel", "Particle.js"],
    },
    {
      id: 2,
      title: "KEDAI MAMSUKI",
      imageUrl: image1,
      description:
        "Web Based Point Of Sale Application using Laravel, Personal projects in terms of supporting my sister's business and in the form of my service. There are several features such as Basic CRUD, Searching, Login and features that support point of sale applications",
      url: null,
      techStack: ["Laravel", "Bootstrap"],
    },
    {
      id: 3,
      title: "JALAN KODEKU",
      imageUrl: image2,
      description:
        "Jalan Kodeku is a final project assignment for a user interface design course in the form of a programming learning website targeted at all groups, whether they are laypeople or those who have already been involved in programming. This website displays the learning stages for each job role in the IT field, then there is also a blog about news updates in the IT world. Don't forget, there are also questions that users can try. Thank you to my group friends who have worked hard on this final project ❤︎",
      url: "https://jalankodeku.vercel.app/",
      techStack: ["Vite", "React", "Tailwind CSS", "SwiperJS", "SASS"],
    },
    {
      id: 4,
      title: "KBMDSI WEBSITE",
      imageUrl: image3,
      description:
        "The KBMDSI organizational web was developed by the informatics team, in which I participated in the front end aspect. This website introduces KBMDSI itself so that this website becomes KBMDSI's branding to the outside. This website has a blog-like feature. Then there is also a registration feature for intern staff",
      url: "https://kbmdsi.ub.ac.id/",
      techStack: ["Vite", "Tailwind CSS", "Laravel"],
    },
    {
      id: 5,
      title: "N BLOG",
      imageUrl: image4,
      description:
        "This is my personal project in terms of learning Laravel using the concept of project based learning. Where this project is a blog website, where there are login features, and basic crud such as creating a blog, updating blogs, reading blogs and deleting blogs. Then there are searching and pagination features",
      url: "https://github.com/anantariskys/N-Blog",
      techStack: ["Laravel", "Bootstrap"],
    },
    {
      id: 6,
      title: "MY OLD PORTFOLIO",
      imageUrl: image5,
      description: "This is a personal project for study purposes and as a portfolio to register with organizations, but this is where it all starts >_<",
      url: "https://anantariskys.github.io/",
      techStack: ["HTML", "CSS", "JavaScript", "Bootsrap"],
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
              <div className="mockup-browser border border-base-300 bg-neutral-content">
                <div className="mockup-browser-toolbar">
                  <div className="input border border-base-300">{activeTitle.url ? activeTitle.url : "in development"}</div>
                </div>
                <motion.img
                  draggable="false"
                  id="transition-image"
                  src={activeTitle.imageUrl}
                  className="w-full h-auto   object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.5,
                  }}
                  alt=""
                />
              </div>
            </figure>
            <div className="card-body md:px-8 px-2  font-Leckerli-One">
              <motion.p
                className="line-clamp-4 md:text-lg text-sm"
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
                <button onClick={()=>document.getElementById(activeTitle.id).showModal()} className="btn btn-sm" >More...</button>
              </div>
              <dialog id={activeTitle.id} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <img draggable='false' src={activeTitle.imageUrl} alt="" />
                  <h3 className="font-bold text-lg mt-3">Visit : <a target={"_blank"} className="link-neutral underline" href={activeTitle.url}>{activeTitle.url}</a></h3>
                  <p className="py-4">{activeTitle.description}</p>
                  <h3 className="font-bold text-lg mt-3">Tech Stack :</h3>
                  <ul className="list-disc ms-5">
                  {activeTitle.techStack.map((item)=>(
                    <li>{item}</li>
                  ))}
                  </ul>
                  
                  <div className="modal-action">
                    <form method="dialog">
          
                      <button className="btn btn-neutral">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureScroll;
