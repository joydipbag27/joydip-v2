import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import handArrow from "../assets/hand-arrow.png";
import { ArrowRight, Zap, Database, Layers, TrendingUp } from "lucide-react";

export const HanddrawnSparkle = ({
  className = "",
  delay = 1,
  size = 40,
  thickness = 5,
  rotation = 0,
}) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    initial={{ opacity: 0, scale: 0.8, rotate: rotation }}
    animate={{ opacity: 1, scale: 1, rotate: rotation }}
    transition={{ delay, duration: 0.4 }}
    style={{ width: size, height: size }}
  >
    {/* Top line (vertical-ish) */}
    <motion.div
      className="absolute bg-current rounded-full"
      style={{
        width: `${thickness}px`,
        height: "50%",
        left: "10%",
        bottom: "45%",
        rotate: "27deg",
        transformOrigin: "bottom center",
      }}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ delay: delay + 0.2, duration: 0.3 }}
    />
    {/* Middle line (diagonal) */}
    <motion.div
      className="absolute bg-current rounded-full"
      style={{
        width: `${thickness}px`,
        height: "50%",
        left: "33%",
        bottom: "30%",
        rotate: "45deg",
        transformOrigin: "bottom left",
      }}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ delay: delay + 0.3, duration: 0.3 }}
    />
    {/* Bottom line (horizontal-ish) */}
    <motion.div
      className="absolute bg-current rounded-full"
      style={{
        width: "50%",
        height: `${thickness}px`,
        left: "55%",
        bottom: "1%",
        rotate: "-27deg",
        transformOrigin: "left center",
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: delay + 0.4, duration: 0.3 }}
    />
  </motion.div>
);

export const MarkerSweep = ({ delay = 0.5, onHover = false }) => {
  return (
    <motion.svg
      viewBox="0 0 500 100"
      className="absolute -z-10 left-[-5%] top-1/2 -translate-y-1/2 w-[110%] h-[140%] opacity-60 overflow-visible"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M 5,55 C 50,45 150,65 250,55 S 450,45 495,60"
        stroke="#D4FF00"
        strokeWidth="45"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1,
          opacity: 1,
          transition: {
            pathLength: { delay, duration: 0.4, ease: "easeOut" },
            opacity: { delay, duration: 0.1 },
          },
        }}
      />
      {/* Secondary stroke for rough effect */}
      <motion.path
        d="M 15,65 C 60,55 160,75 260,65 S 460,55 485,70"
        stroke="#D4FF00"
        strokeWidth="30"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1,
          opacity: 0.4,
          transition: {
            pathLength: { delay: delay + 0.1, duration: 0.4, ease: "easeOut" },
            opacity: { delay: delay + 0.1, duration: 0.1 },
          },
        }}
      />
    </motion.svg>
  );
};

export const ScribbleUnderline = ({ delay = 1.5, color = "#BDE400" }) => {
  return (
    <motion.svg
      viewBox="0 0 300 20"
      className="absolute -bottom-2 left-0 w-full h-4 overflow-visible"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M 5,10 Q 50,15 100,10 T 200,12 T 295,10"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay, duration: 0.5, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

const ArrowIcon = ({ direction = "down", className = "" }) => {
  const rotation =
    {
      up: "rotate-180",
      down: "rotate-0",
      left: "rotate-90",
      right: "-rotate-90",
    }[direction] || "";

  return (
    <img
      src={handArrow}
      alt="arrow"
      className={`${className} ${rotation} object-contain`}
    />
  );
};

const HandwrittenNote = ({
  text,
  x = "auto",
  y = "auto",
  delay,
  rotation = 0,
  arrow = false,
  suffix = null,
  underline = true,
  underlineColor = "#BDE400",
  thickness = 2,
}) => {
  const isFlowLayout = x === "auto" && y === "auto";
  const isUp = suffix === "↑";
  const isDown = suffix === "↓";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        type: "spring",
        stiffness: 260,
        damping: 20,
        mass: 1,
      }}
      className={`${
        isFlowLayout ? "relative" : "absolute"
      } flex flex-col items-start gap-1`}
      style={
        isFlowLayout
          ? { rotate: rotation }
          : { left: x, top: y, rotate: rotation }
      }
    >
      <div className="flex items-center gap-3">
        <span className="font-handwritten text-xl font-black md:text-3xl text-gray-700 whitespace-nowrap">
          {text}
        </span>
        {isUp || isDown ? (
          <ArrowIcon
            direction={isUp ? "up" : "down"}
            className="w-5 h-5 md:w-7 md:h-7 text-gray-500"
          />
        ) : (
          suffix && (
            <span className="font-handwritten text-base md:text-lg text-gray-700 whitespace-nowrap">
              {suffix}
            </span>
          )
        )}
      </div>
      {underline && (
        <motion.svg
          viewBox="0 0 1412 136"
          className="w-[110%] h-[8px] -ml-[3%] overflow-visible"
          style={{ transform: "scaleY(-1)" }}
          preserveAspectRatio="none"
        >
          <motion.path
            d="M2.9 51.31c1.54 1.59 3.55 2.42 5.67 2.93 9.55 2.69 12.36 4.04 30.44 7.8-3 .3-5.73.44-8.57 3.08a9.83 9.83 0 0 0-2.07 10.92c.83 2.7 3.33 4.22 5.31 6.05 10.97 9.24 37.74 12.54 57.74 16.6 28.32 5.7 56.66 11.52 85.37 14.86 23.26 11.61 80.27 14.32 103.75 15.4 34.52 2.19 69.08 3.36 103.65 3.76 121.04 6.36 242.43.51 363.58.82 271.97-15.76 111.74-7.14 354.24-27.85 46.28-2.18 92.54-4.84 138.71-8.85 12.39-1.12 31.77-2.4 34.68-3.76 3.32-1.16 5.52-4.34 6.02-7.77 123.48-7.79 121.13-7.18 123.45-8.4 4.59-1.61 7.1-7.14 5.79-11.8a10.12 10.12 0 0 0-9.64-7.34c-46.89.01-33.59-2.78-103.06 3.46l10.94-1.87c1.99-.76 4.08-1.67 5.19-3.58 4.19-4.72 2.14-13.98-5.64-15.77-3.38-2.63-6.42-2-14.13-2.11-4.56-.7-9.13-1.34-13.72-1.81 34.64-5.34 46.49-8.03 55.99-12.31 2.43-1.11 4.63-2.64 6.94-3.97 14.45-7.01 3.34-24.98-8.18-18.36-2.71 1.43-5.2 3.25-7.94 4.62-11.02 4.17-22.83 5.68-34.36 7.85-36.51 6.23-65.21 9.47-105.27 13.24-39.97 3.44-79.94 7.17-120.01 9.1-112.89 6.65-225.89 10.72-338.92 13.94-139.42 4.28-72.29 2.74-238.74 3.83-152.12.02-105.22.84-209.3-3.14-24.84-.9-33.26-1.91-65.79-4.63-17.2-1.82-43.29-7.05-66.97-9.27-4.21-.16-8.68-1.39-12.64.37a9.33 9.33 0 0 0-5.97 7.81l-.03.26c-68.56-8.07-86.97-8.7-119.44-11.18a7.6 7.6 0 0 0-3.85.86 9.31 9.31 0 0 0-5.97 7.81c-.59 3.07.64 6.15 2.75 8.4Z"
            fill={underlineColor}
            stroke={underlineColor}
            strokeWidth={thickness}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ delay: delay + 0.3, duration: 0.8, ease: "easeOut" }}
          />
        </motion.svg>
      )}
      {arrow && (
        <motion.svg
          viewBox="0 0 100 50"
          className="w-12 h-6 -ml-8 -mt-2 rotate-[160deg] opacity-40"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
        >
          <path
            d="M 10,10 Q 50,40 90,10"
            stroke="black"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M 80,5 L 90,10 L 80,20"
            stroke="black"
            strokeWidth="4"
            fill="none"
          />
        </motion.svg>
      )}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-0 lg:min-h-[calc(100vh-88px)] w-full flex flex-col bg-inherit overflow-hidden pt-12 lg:pt-20 pb-6 lg:pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 flex-grow items-center">
        {/* Left Column: Core Layout */}
        <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative flex items-center gap-2 px-3 py-2.5 border-2 border-black rounded-xl mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse border border-black" />
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
              Backend Engineer
            </span>
            <HanddrawnSparkle
              className="hidden lg:block -right-5 -top-6 rotate-[5deg]"
              delay={1.2}
              size={30}
              thickness={2.5}
            />
          </motion.div>

          {/* H1 Headline */}
          <div className="relative mb-4 group cursor-default w-fit">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-black select-none"
            >
              OPTIMIZED
            </motion.h1>
            <HanddrawnSparkle
              className="hidden lg:block -right-6 -top-3 rotate-[10deg]"
              delay={0.8}
              size={50}
            />

            <div className="hidden lg:block">
              <AnimatePresence>
                <MarkerSweep delay={0.4} />
              </AnimatePresence>
            </div>
          </div>

          {/* Subline */}
          <div className="relative mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="text-3xl md:text-5xl font-black tracking-tight flex items-center gap-4 text-black"
            >
              <span className="text-xl md:text-2xl font-medium text-gray-500">
                for
              </span>
              <span className="relative">
                COST & SPEED
                <ScribbleUnderline delay={0.8} color="#D4FF00" />
              </span>
            </motion.h2>
          </div>

          {/* Supporting Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-700 font-medium max-w-xl mb-12 leading-relaxed"
          >
            I design and build backend systems focused on{" "}
            <span className="relative inline-block group cursor-help">
              <span className="text-black font-bold">cost efficiency</span>
              <motion.div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4FF00] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </span>{" "}
            and{" "}
            <span className="relative inline-block group cursor-help">
              <span className="text-black font-bold">performance</span>
              <motion.div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4FF00] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </span>
            .
          </motion.div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mb-4 lg:mb-16">
            <Link to="/work/sastadrive">
              <motion.button
                whileHover={{
                  backgroundColor: "#e0ff33",
                }}
                whileTap={{
                  x: 3,
                  y: 3,
                  boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
                }}
                className="group flex items-center gap-3 bg-[#D4FF00] text-black px-10 py-5 rounded-2xl font-black text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                View Case Study
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link to="/lab">
              <motion.button
                whileHover={{ opacity: 0.8 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 transition-all"
              >
                <span className="font-black text-lg text-black uppercase tracking-wider border-b-2 border-black/100 transition-colors pb-0.5">
                  Explore Experiments
                </span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform text-black" />
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Right Column: The Visual Cluster (Diagonal Thought Flow) */}

        <div className="hidden lg:flex lg:col-span-4 relative items-center justify-center lg:justify-end mt-20 lg:mt-0">
          <div className="relative w-full lg:h-[500px] flex flex-col items-center lg:block -mt-16 lg:-mt-20">
            {/* The Notes Group — Hidden on mobile to keep focus clean */}
            <div className="hidden lg:block">
              <HandwrittenNote
                text="cost"
                suffix="↓"
                x="15%"
                y="5%"
                delay={1.8}
                rotation={-12}
              />
              <HandwrittenNote
                text="latency"
                suffix="↓"
                x="18%"
                y="15%"
                delay={1.9}
                rotation={-12}
              />
              <HandwrittenNote
                text="scale"
                suffix="↑"
                x="21%"
                y="25%"
                delay={2.0}
                rotation={-12}
              />
              <HandwrittenNote
                text="complexity"
                x="24%"
                y="35%"
                delay={2.1}
                rotation={-12}
                underline={false}
              />
              <HandwrittenNote
                text="→ manageable"
                x="28%"
                y="42%"
                delay={2.2}
                rotation={-12}
                underlineColor="black"
                thickness={1.5}
              />

              <motion.svg
                viewBox="-20.5 0 287 287"
                className="absolute pointer-events-none"
                style={{
                  left: "-60%",
                  top: "40%",
                  width: "170px",
                  height: "170px",
                  rotate: "-100deg",
                  scaleY: -1,
                }}
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <clipPath id="swirlArrowClip">
                    <motion.circle
                      cx="160"
                      cy="270"
                      initial={{ r: 0 }}
                      animate={{ r: 500 }}
                      transition={{
                        delay: 1.2,
                        duration: 1.2,
                        ease: "ease-in",
                      }}
                    />
                  </clipPath>
                </defs>
                <motion.path
                  d="M156.25 265.656C157.94 265.444 158.573 265.656 159.207 265.444C197.847 242.174 224.029 209.172 233.953 164.747C236.487 153.535 236.065 141.899 233.109 130.476C226.985 105.936 206.504 89.0121 181.377 87.5312C168.286 86.685 155.617 88.1659 144.215 95.3586C143.37 101.493 142.737 107.628 141.47 113.34C139.359 122.648 134.502 130.264 125.845 134.918C119.51 138.515 113.176 138.515 109.798 135.13C105.363 130.687 105.364 124.764 108.108 119.898C111.909 113.129 116.554 106.782 121.411 100.859C124.578 97.051 128.801 93.8777 132.602 90.7045C129.012 66.7994 106.419 56.645 79.3921 66.5878C78.5475 69.9726 77.7029 73.569 76.6472 76.9537C72.4242 89.4352 64.6117 98.9549 51.9427 103.397C47.0863 105.09 41.8075 105.724 37.5845 101.282C34.4173 97.8972 34.4173 91.9738 37.7957 86.0504C43.2856 76.7422 51.5204 70.1842 60.3887 64.4723C63.5559 62.5684 66.7232 60.6644 69.8904 58.972C65.6674 21.9508 32.517 -4.28131 0 10.5272C0.211149 7.77702 -1.29001e-05 5.44997 0.844584 4.18067C1.90033 2.69982 4.22297 1.85363 6.12332 1.43053C24.071 -1.95427 40.7518 0.161227 54.4765 13.2773C64.8228 23.0086 71.7908 34.8554 76.4361 48.3946C77.0695 50.2985 77.703 52.2024 78.5476 54.1064C78.5476 54.3179 78.9698 54.5295 79.8144 55.1641C81.7147 54.9526 84.0374 54.9526 86.36 54.5295C114.654 50.087 129.434 57.7027 142.526 84.1464C145.06 83.3002 148.016 82.454 150.761 81.3963C167.019 75.896 183.278 75.4729 199.747 80.9732C226.563 89.8583 243.877 112.917 245.778 142.111C246.833 157.977 244.089 173.209 238.388 188.017C224.452 223.769 201.648 251.905 167.441 270.31C165.752 271.368 163.852 272.214 162.163 273.272C161.951 273.483 161.74 273.906 161.107 275.176C168.286 276.868 175.043 276.233 181.8 275.81C188.345 275.599 195.102 274.964 202.281 274.541C201.648 280.041 198.691 282.157 195.102 283.426C190.879 284.695 186.656 286.388 182.433 286.599C171.031 287.023 159.418 287.234 147.804 286.599C138.725 285.965 136.191 281.099 140.203 273.695C148.86 258.04 157.728 242.386 166.597 226.731C168.075 224.192 169.975 222.077 172.298 219.115C176.31 223.769 174.62 227.154 173.142 230.327C167.23 241.751 161.951 253.175 156.25 265.656ZM43.919 94.9355C58.4883 93.0315 67.5677 83.7233 68.2012 70.6073C58.4883 76.9537 49.1978 82.6656 43.919 94.9355ZM115.288 127.726C127.745 124.764 133.658 116.302 132.391 103.397C124.367 110.167 117.399 116.514 115.288 127.726Z"
                  fill="black"
                  clipPath="url(#swirlArrowClip)"
                />
              </motion.svg>
            </div>

            {/* The Result Card — Central focus on mobile, anchored on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: -1.5 }}
              transition={{ delay: 1.6, duration: 0.4 }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              className="hidden lg:block lg:absolute bg-white border-2 border-black rounded-2xl p-5 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)] w-[250px] lg:right-[30%] lg:bottom-[10%] mx-auto lg:mx-0"
              style={{}}
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-2 bg-[#D4FF00] rounded-full">
                    <TrendingUp className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-4xl font-black tracking-tighter text-black">
                    ~90%
                  </span>
                </div>

                <span className="text-gray-600 font-bold text-xs mb-4">
                  cost reduction
                </span>

                <div className="mt-2">
                  <div className="text-[10px] md:text-xs text-gray-600 font-medium px-2">
                    using serverless architecture
                  </div>
                </div>
              </div>

              {/* Sparkle effects on card corner */}
              <HanddrawnSparkle
                className="-top-8 -right-7 text-[#D4FF00]"
                delay={1.8}
                size={45}
                thickness={3}
              />
            </motion.div>

            {/* Background Grid Accent */}
            <div className="absolute right-[-60px] top-[10%] w-[400px] h-[400px] opacity-[0.04] pointer-events-none -z-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "radial-gradient(black 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
