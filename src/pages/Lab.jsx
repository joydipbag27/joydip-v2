import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import TradeOffs from "../components/TradeOffs";
import RequestSpeedLab from "../components/RequestSpeedLab";
import SessionControlLab from "../components/SessionControlLab";
import ThumbnailLab from "../components/ThumbnailLab";
import LabSummary from "../components/LabSummary";
import { HanddrawnSparkle, MarkerSweep } from "../components/Hero";

const Lab = () => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);
  const scrollRaf = useRef(null);

  // Total sections: Intro + TradeOffs + RequestSpeedLab + SessionControlLab + ThumbnailLab + Summary
  const TOTAL_SECTIONS = 6;

  const handleScroll = () => {
    if (scrollRaf.current) return;

    scrollRaf.current = requestAnimationFrame(() => {
      if (containerRef.current) {
        const { scrollTop, clientHeight } = containerRef.current;
        const activeIndex = Math.round(scrollTop / clientHeight);
        setActiveCard((prev) => (prev === activeIndex ? prev : activeIndex));
      }
      scrollRaf.current = null;
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (!containerRef.current) return;
      const { scrollTop, clientHeight } = containerRef.current;
      const currentIndex = Math.round(scrollTop / clientHeight);

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        const nextIndex = Math.min(currentIndex + 1, TOTAL_SECTIONS - 1);
        containerRef.current.scrollTo({
          top: nextIndex * clientHeight,
          behavior: "smooth",
        });
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        const prevIndex = Math.max(currentIndex - 1, 0);
        containerRef.current.scrollTo({
          top: prevIndex * clientHeight,
          behavior: "smooth",
        });
      } else if (e.key === " " && !e.shiftKey) {
        e.preventDefault();
        const nextIndex = Math.min(currentIndex + 1, TOTAL_SECTIONS - 1);
        containerRef.current.scrollTo({
          top: nextIndex * clientHeight,
          behavior: "smooth",
        });
      } else if (e.key === " " && e.shiftKey) {
        e.preventDefault();
        const prevIndex = Math.max(currentIndex - 1, 0);
        containerRef.current.scrollTo({
          top: prevIndex * clientHeight,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
    };
  }, [TOTAL_SECTIONS]);

  const getBgColor = (index) => {
    return index % 2 === 0 ? "#ffffff" : "#fcfcfc";
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="w-full h-[calc(100vh-89px)] lg:h-[calc(100vh-89px)] overflow-y-auto scroll-smooth lg:snap-y lg:snap-mandatory relative"
      style={{ backgroundColor: getBgColor(0) }}
    >
      {/* Progress Indicator (Bottom Right) */}
      <div className="fixed bottom-10 right-10 z-50 bg-black text-white px-4 py-2 rounded-full shadow-lg hidden lg:block">
        <span className="text-sm font-bold tracking-widest font-mono uppercase">
          {activeCard === 0
            ? "LAB"
            : activeCard === 1
              ? "01/04"
              : activeCard === 2
                ? "02/04"
                : activeCard === 3
                  ? "03/04"
                  : activeCard === 4
                    ? "04/04"
                    : activeCard === 5
                      ? "END"
                      : ""}
        </span>
      </div>

      {/* Dotted Vertical Bar */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-2">
        {Array.from({ length: TOTAL_SECTIONS }).map((_, index) => (
          <React.Fragment key={`dot-${index}`}>
            <button
              onClick={() => {
                if (containerRef.current) {
                  containerRef.current.scrollTo({
                    top: index * containerRef.current.clientHeight,
                    behavior: "smooth",
                  });
                }
              }}
              className="p-2 -m-2"
              aria-label={`Scroll to section ${index}`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeCard === index
                    ? "bg-black scale-[1.85]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            </button>
            {index < TOTAL_SECTIONS - 1 && (
              <div className="w-[2px] h-6 border-l-2 border-dashed border-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Invisible Snap Track */}
      <div className="absolute top-0 left-0 w-full z-0 pointer-events-none hidden lg:block">
        {Array.from({ length: TOTAL_SECTIONS }).map((_, i) => (
          <div
            key={`snap-${i}`}
            className="w-full h-[calc(100vh-89px)] snap-start"
          ></div>
        ))}
      </div>

      {/* Visible Sticky Cards */}
      <div className="relative z-10 w-full">
        {/* Card 0 - Lab Intro */}
        <section
          className="w-full min-h-[calc(100vh-89px)] lg:h-[calc(100vh-89px)] lg:sticky top-0 z-[1] flex flex-col items-center justify-center overflow-hidden py-12 lg:py-0"
          style={{ backgroundColor: getBgColor(0) }}
        >
          <div className="flex flex-col items-center text-center -mt-16 relative">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2.5 px-3 py-1.5 border-2 border-black rounded-xl bg-white text-[10px] font-black tracking-widest text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase mb-6 relative z-10"
              style={{ contentVisibility: 'auto' }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] border border-black animate-pulse" />
              Engineering Lab
            </motion.div>

            {/* Title with Underline */}
            <div className="relative">
              <h1 className="text-7xl md:text-[11rem] font-black text-black leading-none select-none tracking-tighter uppercase relative z-10">
                LAB
              </h1>
              {/* Scribble Underline */}
              <motion.svg
                viewBox="0 0 300 20"
                className="absolute -bottom-2 left-0 w-full h-8 md:h-12 -z-10 overflow-visible"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M 5,10 Q 50,15 100,10 T 200,12 T 295,10"
                  stroke="#D4FF00"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                />
              </motion.svg>
            </div>

            {/* Description */}
            <p className="text-base md:text-xl text-gray-500 font-bold max-w-xl px-6 mt-6 leading-tight relative">
              Experiments in performance, cost, and{" "}
              <br className="hidden md:block" /> system design.
            </p>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mt-20 flex flex-col items-center gap-3 cursor-pointer group"
              onClick={() => {
                if (containerRef.current) {
                  containerRef.current.scrollTo({
                    top: containerRef.current.clientHeight,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <span className="text-[10px] font-black tracking-[0.4em] text-gray-400 uppercase group-hover:text-black transition-colors">
                Scroll to explore
              </span>
              <div className="w-10 h-10 rounded-full border-2 border-black/5 flex items-center justify-center group-hover:border-black transition-colors">
                <ChevronDown
                  className="text-gray-300 group-hover:text-black transition-colors"
                  size={20}
                  strokeWidth={3}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Card 1 - System Trade-offs Intro */}
        <section className="w-full min-h-[calc(100vh-89px)] lg:h-[calc(100vh-89px)] lg:sticky top-0 z-[2] overflow-hidden shadow-[0_-12px_40px_rgba(0,0,0,0.03)] border-t border-gray-100 py-12 lg:py-0">
          <TradeOffs bgColor={getBgColor(1)} />
        </section>

        {/* Card 2 - Request Speed Lab */}
        <section className="w-full min-h-[calc(100vh-89px)] lg:h-[calc(100vh-89px)] lg:sticky top-0 z-[3] overflow-hidden shadow-[0_-12px_40px_rgba(0,0,0,0.03)] border-t border-gray-100 py-12 lg:py-0">
          <RequestSpeedLab bgColor={getBgColor(2)} />
        </section>

        {/* Card 3 - Session Control Lab */}
        <section className="w-full min-h-[calc(100vh-89px)] lg:h-[calc(100vh-89px)] lg:sticky top-0 z-[4] overflow-hidden shadow-[0_-12px_40px_rgba(0,0,0,0.03)] border-t border-gray-100 py-12 lg:py-0">
          <SessionControlLab bgColor={getBgColor(3)} />
        </section>

        {/* Card 4 - Client-Side Thumbnails */}
        <section className="w-full min-h-[calc(100vh-89px)] lg:h-[calc(100vh-89px)] lg:sticky top-0 z-[5] overflow-hidden shadow-[0_-12px_40px_rgba(0,0,0,0.03)] border-t border-gray-100 py-12 lg:py-0">
          <ThumbnailLab bgColor={getBgColor(4)} />
        </section>

        {/* Card 5 - Lab Summary */}
        <section className="w-full min-h-[calc(100vh-89px)] lg:h-[calc(100vh-89px)] lg:sticky top-0 z-[6] overflow-hidden shadow-[0_-12px_40px_rgba(0,0,0,0.03)] border-t border-gray-100 py-12 lg:py-0">
          <LabSummary bgColor={getBgColor(5)} />
        </section>
      </div>
    </div>
  );
};

export default Lab;
