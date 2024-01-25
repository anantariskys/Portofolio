import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div className={`navbar text-warning-content font-Leckerli-One fixed bg-transparent top-0 z-10 transition-all duration-150 ease-in-out ${scrolling ? 'backdrop-blur-sm' : ''}`}
    
    initial={{
      opacity:0
    }}
    animate={{
      opacity:1
    }}
    transition={{
      duration:0.5,
      delay:2
    }}
    
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-transparent backdrop-blur-md text-neutral rounded-box w-52">
            <li><NavLink to='/' >Home</NavLink></li>
            <li><NavLink to='/about' >About</NavLink></li>
            <li><NavLink to='/experience' >Experience</NavLink></li>
            <li><NavLink to='/project' >Project</NavLink></li>
            <li><NavLink to='/skill' >Skills</NavLink></li>
            <li><NavLink to='/contact' >Contact</NavLink></li>
          </ul>
        </div>
        <button className="btn btn-ghost text-xl" >Ananta Risky Susanto</button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 text-lg px-1">
          <li className=''><NavLink to='/' >Home</NavLink></li>
          <li><NavLink to='/about' >About</NavLink></li>
          <li><NavLink to='/experience' >Experience</NavLink></li>
          <li><NavLink to='/project' >Project</NavLink></li>
          <li><NavLink to='/skill' >Skills</NavLink></li>
          <li><NavLink to='/contact' >Contact</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </motion.div>
  )
}

export default Navbar;
