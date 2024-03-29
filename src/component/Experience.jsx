import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import image1 from '../assets/skill/pngwing.com.png'
import image2 from '../assets/skill/pngwing.com (1).png'
import image3 from '../assets/skill/pngwing.com (2).png'
import image4 from '../assets/skill/pngwing.com (3).png'
import image5 from '../assets/skill/pngwing.com (4).png'
import image6 from '../assets/skill/pngwing.com (5).png'
import image7 from '../assets/skill/pngwing.com (6).png'
import image8 from '../assets/skill/pngwing.com (7).png'
import image9 from '../assets/skill/pngwing.com (8).png'
import image10 from '../assets/skill/pngwing.com (9).png'
import image11 from '../assets/skill/pngwing.com (10).png'
import image12 from '../assets/skill/pngwing.com (11).png'
import image13 from '../assets/skill/pngwing.com (12).png'
import image14 from '../assets/skill/pngwing.com (13).png'
import image15 from '../assets/skill/pngwing.com (14).png'
import image16 from '../assets/skill/pngwing.com (15).png'
import image17 from '../assets/skill/pngwing.com (16).png'
import image18 from '../assets/skill/pngwing.com (17).png'

const Experience = () => {
  const data = [
    {
      id: 1,
      title: "HTML",
      imageUrl:image1, 
      
      description: "HTML is the standard markup language for creating the structure of web pages. It defines the skeleton of a webpage using elements like headings, paragraphs, and images.",
    },
    {
      id: 2,
      title: "CSS",
      imageUrl: image2,
      description: "Cascading Style Sheets (CSS) is used for styling web pages. It allows you to control the layout, colors, and fonts of your HTML elements.",
    },
    {
      id: 3,
      title: "JavaScript",
      imageUrl: image3,
      description: "JavaScript is a versatile scripting language that enables interactive and dynamic content on websites. It is commonly used for client-side scripting to create responsive and interactive user interfaces.",
    },
    {
      id: 4,
      title: "SASS",
      imageUrl: image4,
      description: "SASS (Syntactically Awesome Stylesheets) is a preprocessor scripting language that is interpreted or compiled into CSS. It adds features like variables, nested rules, and mixins to enhance stylesheet capabilities.",
    },
    {
      id: 5,
      title: "Bootstrap",
      imageUrl: image5,
      description: "Bootstrap is a popular front-end framework that simplifies the process of designing responsive and mobile-first websites. It includes pre-designed components and a grid system.",
    },
    {
      id: 6,
      title: "Tailwind CSS",
      imageUrl: image6,
      description: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build designs directly in your markup. It offers flexibility and customization without writing custom CSS.",
    },
    {
      id: 7,
      title: "DaisyUI",
      imageUrl: image7,
      description: "DaisyUI is a UI library, possibly associated with a specific framework, offering a set of components and utilities for building user interfaces efficiently.",
    },
    {
      id: 8,
      title: "Vue.js",
      imageUrl: image8,
      description: "Vue.js is a progressive JavaScript framework used for building user interfaces. Vue.js is known for its simplicity and flexibility, making it easy to integrate into projects.",
    },
    {
      id: 9,
      title: "Laravel",
      imageUrl: image9,
      description: "Laravel is a PHP web application framework that provides an elegant syntax and tools for tasks such as routing, templating, and database management. It emphasizes clean and readable code.",
    },
    {
      id: 10,
      title: "PHP",
      imageUrl: image10,
      description: "PHP is a server-side scripting language commonly used for web development. It can generate dynamic content and interact with databases.",
    },
    {
      id: 11,
      title: "React.js",
      imageUrl: image11,
      description: "React.js is a JavaScript library for building user interfaces, particularly single-page applications where components update dynamically. React is maintained by Facebook and a community of developers.",
    },
    {
      id: 12,
      title: "Vite",
      imageUrl: image12,
      description: "Vite is a build tool that aims to provide a faster and more efficient development experience for web projects. Vite is often used with modern JavaScript frameworks like Vue and React.",
    },
    {
      id: 13,
      title: "Java",
      imageUrl: image13,
      description: "Java is a widely-used, object-oriented programming language known for its portability and versatility. Java is commonly used for building enterprise-level applications.",
    },
    {
      id: 14,
      title: "Python",
      imageUrl: image14,
      description: "Python is a high-level programming language known for its readability and simplicity. Python is versatile and used for various applications, including web development, data analysis, and artificial intelligence.",
    },
    {
      id: 15,
      title: "Framer Motion",
      imageUrl: image15,
      description: "Framer Motion is a popular animation library for React. It simplifies the creation of smooth and interactive animations in web applications.",
    },
    {
      id: 16,
      title: "Node.js",
      imageUrl: image16,
      description: "Node.js is a server-side JavaScript runtime that allows developers to build scalable and fast network applications. It is commonly used for building web servers.",
    },
    {
      id: 17,
      title: "MariaDB",
      imageUrl: image17,
      description: "MariaDB is an open-source relational database management system that is a fork of MySQL. MariaDB is known for its performance, reliability, and ease of use.",
    },
    {
      id: 18,
      title: "MySQL",
      imageUrl: image18,
      description: "MySQL is a widely-used open-source relational database management system. MySQL is known for its speed, reliability, and ease of integration with various web applications.",
    },
  ];

  return (
    <Splide
      options={{
        type: "loop",
        arrows: false,
        pagination: false,
        perPage: 6,
        gap: "100px",
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 2,
        },
        breakpoints: {
          1024: {
            perPage: 5,
            gap: "50px",
          },
          768: {
            perPage: 4,
            gap: "50px",
          },
          480: {
            perPage: 4,
            gap: "20px",
          },
        },

      }}
      extensions={{ AutoScroll }}
      className="bg-neutral-content bg-opacity-20 backdrop-blur-sm    flex justify-center items-center"
    >
      {data.map((item) => (
        <>
          <SplideSlide key={item.id} className="">
            <button onClick={() => document.getElementById(item.id).showModal()} className="flex  justify-center   items-center h-full w-full">
              <img src={item.imageUrl} className="cursor-pointer" alt="Image " />
            </button>
          </SplideSlide>
          <dialog id={item.id} className="modal font-Leckerli-One modal-bottom sm:modal-middle">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="py-4">{item.description}</p>
              <div className="modal-action"></div>
            </div>
          </dialog>
        </>
      ))}
    </Splide>
  );
};

export default Experience;
