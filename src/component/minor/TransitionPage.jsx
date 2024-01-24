import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TransitionPage = () => {
  const [isAnimate1, setIsAnimate1] = useState(true);
  const [isAnimate2, setIsAnimate2] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setIsAnimate1(false);
      setIsAnimate2(true);
    }, 2000);

    return () => {
      clearTimeout(timeout1);
    };
  }, []);

//   useEffect(() => {
//     if (!isAnimate1) {
//       const timeout2 = setTimeout(() => {
       
//       }, 0.5); // Adjusted delay for a smoother transition

//       return () => {
//         clearTimeout(timeout2);
//       };
//     }
//   }, [isAnimate1]);

  useEffect(() => {
    if (isAnimate2) {
      const timeout3 = setTimeout(() => {
        setIsAnimate2(false);
      }, 2000);

      return () => {
        clearTimeout(timeout3);
      };
    }
  }, [isAnimate2]);
  return (
    <>
      <div className={`w-full h-screen top-0 left-0 z-10 flex-col fixed ${isAnimate1 ? 'flex' : 'hidden'}`}>
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            style={{ transformOrigin: "left" }}
            className="h-screen w-full grow bg-neutral gap-0 m-0 p-0"
            initial={{ scaleX: 0, scaleY: 1 }}
            animate={{ scaleX: [null, 1], scaleY: 1 }}
            exit={{ scaleX: 1, scaleY: 1 }}
            transition={{ duration: 1, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        ))}
      </div>
      {isAnimate2 && (
        <div className={`w-full h-screen top-0 left-0 z-10 flex-col fixed flex`}>
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              style={{ transformOrigin: "right" }}
              className="h-screen w-full grow bg-neutral gap-0 m-0 p-0"
              initial={{ scaleX: 1, scaleY: 1 }}
              animate={{ scaleX: [null, 0], scaleY: 1 }}
              exit={{ scaleX: 0, scaleY: 1 }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
          ))}
        </div>
      )}
    </>
  );
};

export default TransitionPage;
