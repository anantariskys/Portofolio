import { useState } from "react";
import "../src/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar from "./component/Navbar";
import Experience from "./pages/Experience";
import Project from "./pages/Project";

import SocialMedia from "./pages/SocialMedia";
import Skill from "./pages/Skill";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<SocialMedia />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
