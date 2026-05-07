import { MotionConfig } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SEO from "./components/SEO";
import Home from "./pages/Home";
import SastaDriveCaseStudy from "./pages/SastaDriveCaseStudy";
import Lab from "./pages/Lab";
import About from "./pages/About";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white font-['Inter',_sans-serif]">
        <SEO />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-lg focus:border-2 focus:border-black focus:bg-[#D4FF00] focus:px-4 focus:py-2 focus:font-black focus:text-black"
        >
          Skip to content
        </a>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/sastadrive" element={<SastaDriveCaseStudy />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </MotionConfig>
  );
}

export default App;
