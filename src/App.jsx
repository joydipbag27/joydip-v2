import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SastaDriveCaseStudy from "./pages/SastaDriveCaseStudy";
import Lab from "./pages/Lab";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen bg-white font-['Inter',_sans-serif]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/sastadrive" element={<SastaDriveCaseStudy />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
