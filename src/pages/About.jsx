import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Cloud,
  Database,
  Zap,
  Boxes,
  Terminal,
  TrendingUp,
  MapPin,
  Clock,
  Coffee,
  Rocket,
  Quote,
} from "lucide-react";
import { HanddrawnSparkle } from "../components/Hero";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const About = () => {
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.main
      id="main-content"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full min-h-screen lg:h-[calc(100vh-88px)] lg:min-h-0 py-8 lg:py-2 px-6 md:px-12 lg:px-24 flex flex-col justify-between overflow-y-auto lg:overflow-hidden relative selection:bg-[#D4FF00] bg-[#f9f9f9]"
    >
      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-grow w-full">
        {/* LEFT COLUMN: Profile Visual Cluster */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 flex flex-col items-center justify-center relative py-8 lg:py-0 px-8 sm:px-12 lg:px-4 shrink-0"
        >
          {/* Profile Card Container with Dual-Frame Depth */}
          <div className="relative w-72 h-80 sm:w-80 sm:h-[340px] lg:w-[500px] lg:h-[390px] scale-[0.88] xs:scale-[0.94] sm:scale-100 lg:scale-100 origin-center group">
            {/* Handdrawn Annotation: "builder at heart" */}
            <div className="absolute top-[-4rem] left-[-3rem] lg:-left-[4rem] rotate-[-12deg] z-10 flex flex-col items-center select-none pointer-events-none">
              <span className="font-handwritten text-zinc-500 text-2xl font-bold tracking-tight relative">
                builder at heart
                <span className="absolute left-0 bottom-0.5 w-full h-[3px] bg-[#D4FF00]/60 -z-10 rounded-full" />
              </span>
              <img
                src="/aboutMe-arrow-1.svg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="w-12 h-8 rotate-[70deg] mt-1"
              />
            </div>
            {/* Backing Frame - Shifted bottom-right with soft shadow */}
            <div className="absolute inset-0 bg-gray-200 rotate-[-1deg]  rounded-[2rem] translate-x-2 translate-y-2 shadow-[4px_4px_20px_rgba(0,0,0,0.03)]" />

            {/* Main Picture Frame - Polaroid/Frame Style with Padding */}
            <div className="absolute rotate-[-1deg] inset-0 bg-white border-2 border-black/10 rounded-[2rem] p-3 shadow-md flex flex-col items-center justify-center overflow-hidden z-10">
              <img
                src="/pf-profile.png"
                alt="Portrait of Joydip Bag"
                width="512"
                height="512"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover rounded-[1.5rem] select-none pointer-events-none filter saturate-[1.05]"
              />
            </div>

            {/* Float Badge 1: React (Top Left) */}
            <motion.div
              whileHover={{ y: -4, scale: 1.05 }}
              className="absolute left-[-2.8rem] sm:-left-16 top-[28%] scale-[0.85] sm:scale-100 origin-right bg-white border-2 border-black rounded-xl px-3 py-1.5 sm:px-3.5 sm:py-2 flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-default z-20"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-[#00D8FF] animate-spin-slow shrink-0"
                fill="currentColor"
              >
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
              <span className="text-[11px] font-black uppercase tracking-wider text-black">
                React
              </span>
            </motion.div>

            {/* Float Badge 2: Node.js (Mid Left) */}
            <motion.div
              whileHover={{ y: -4, scale: 1.05 }}
              className="absolute left-[-2.8rem] sm:-left-16 top-[42%] scale-[0.85] sm:scale-100 origin-right bg-white border-2 border-black rounded-xl px-3 py-1.5 sm:px-3.5 sm:py-2 flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-default z-20"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-[#339933] shrink-0"
                fill="currentColor"
              >
                <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
              </svg>
              <span className="text-[11px] font-black uppercase tracking-wider text-black">
                Node.js
              </span>
            </motion.div>

            {/* Float Badge 3: aws (Bottom Left) */}
            <motion.div
              whileHover={{ y: -4, scale: 1.05 }}
              className="absolute left-[-2.8rem] sm:-left-16 top-[56%] scale-[0.85] sm:scale-100 origin-right bg-white border-2 border-black rounded-xl px-3 py-1.5 sm:px-3.5 sm:py-2 flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-default z-20"
            >
              <div className="flex flex-col items-center justify-center shrink-0">
                <span className="text-[10px] font-black tracking-tight text-black leading-none">
                  aws
                </span>
                <svg
                  viewBox="0 0 20 6"
                  className="w-4 h-1.5 text-[#FF9900]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M2 1 Q10 6 18 1" />
                </svg>
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-black">
                aws
              </span>
            </motion.div>

            {/* Float Code Tag (Inside Image, Top Right) */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 12 }}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 scale-[0.85] sm:scale-100 bg-[#D4FF00] border-2 border-black rounded-2xl p-2 sm:p-2.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-default z-20"
            >
              <Code size={16} className="text-black" strokeWidth={3} />
            </motion.div>

            {/* Float Card: Terminal Loop (Right Side) */}
            <motion.div
              whileHover={{ y: -4 }}
              className="absolute right-[-2.6rem] sm:-right-12 top-[28%] scale-[0.85] sm:scale-100 origin-left bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-20 sm:w-24 flex flex-col overflow-hidden cursor-default z-20"
            >
              {/* Window Header Bar */}
              <div className="bg-black py-1.5 px-2 flex gap-1 items-center shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]/70" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]/30" />
              </div>
              {/* Terminal Content */}
              <div className="p-2 py-4 flex flex-col gap-1 text-left bg-white">
                <ul className="flex flex-col gap-1 font-mono font-black text-[9px] sm:text-[10px] text-zinc-500 leading-none">
                  <li className="flex items-center gap-1.5">
                    <span className="text-black font-black">$</span> focus
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-black font-black">$</span> build
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-black font-black">$</span> optimize
                  </li>
                  <li className="flex items-center gap-1.5 text-zinc-300">
                    <span className="text-zinc-300 font-black">$</span> repeat
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Handdrawn Sparkles (Top Right Handdrawn Accent) */}
            <div className="absolute -top-6 sm:-top-8 -right-2 sm:-right-4 scale-[0.85] sm:scale-100 origin-bottom-left z-20 select-none pointer-events-none flex gap-1 items-end">
              {/* Primary Sparkle */}
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 text-[#D4FF00] shrink-0"
                fill="currentColor"
              >
                <path d="M12,2 Q12,12 2,12 Q12,12 12,22 Q12,12 22,12 Q12,12 12,2 Z" />
              </svg>
              {/* Secondary Sparkle */}
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-[#D4FF00] shrink-0 opacity-80"
                fill="currentColor"
              >
                <path d="M12,2 Q12,12 2,12 Q12,12 12,22 Q12,12 22,12 Q12,12 12,2 Z" />
              </svg>
            </div>

            {/* Curved Arrow pointing from the right to the image */}
            <div className="absolute rotate-[90deg] right-[-3.8rem] sm:-right-[4rem] bottom-[18%] scale-[0.85] sm:scale-100 origin-left select-none pointer-events-none z-1">
              <img
                src="/aboutMe-arrow-2.svg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="w-12 h-12"
              />
            </div>

            {/* Bottom Overlapping Card: Focus Core */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ x: isMobile ? "-50%" : "0%" }}
              className={`absolute bottom-[-1.9rem] ${isMobile ? "left-1/3 scale-[0.85]" : "left-[5.5rem]"} origin-bottom bg-white border-2 border-black rounded-2xl px-4 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 z-20 cursor-default`}
            >
              <div className="w-8 h-8 rounded-full bg-[#D4FF00] flex items-center justify-center border border-black shrink-0 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                <Rocket size={14} className="text-black" strokeWidth={2.5} />
              </div>
              <p className="text-[10px] sm:text-[11px] font-black text-black leading-snug text-left">
                I love turning complex problems into <br />
                <span className="relative inline-block px-0.5 z-10">
                  simple, scalable systems.
                </span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Copy and Bio */}
        <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-3 lg:gap-2 justify-center max-w-2xl px-2 sm:px-4 lg:px-0">
          {/* Header & Title */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-1 text-left relative"
          >
            <span className="text-zinc-400 font-bold text-[11px] uppercase tracking-wider leading-none">
              Hi, I'm
            </span>
            <div className="relative inline-block w-fit">
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-black select-none mt-1 pr-6 relative leading-none z-10">
                <span className="relative inline-block z-10 px-1">
                  Joydip Bag
                  <span className="absolute left-[-2px] bottom-1 w-[102%] h-[16px] sm:h-[18px] bg-[#D4FF00]/80 -z-10 rounded-sm skew-x-[-12deg] rotate-[-0.5deg]" />
                </span>
              </h1>
              {/* Sparkle on Name */}
              <HanddrawnSparkle
                className="-right-0 -top-1 rotate-[15deg] text-black"
                size={30}
                delay={0.8}
              />
            </div>

            <p className="text-[12px] sm:text-[13px] text-zinc-600 leading-relaxed mt-4">
              Backend-focused engineer who builds scalable, <br />{" "}
              cost-efficient systems that perform under pressure.
              <br />I care about <strong>clean architecture</strong>,{" "}
              <strong>performance</strong>, and{" "}
              <strong>reducing complexity</strong>.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full h-[1px] bg-black/5 rounded-full my-0.5"
          />

          {/* Section: Tech Stack */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-1.5 text-left"
          >
            <h2 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] border border-black/10" />
              Tech Stack
            </h2>

            <div className="flex flex-col gap-2">
              {[
                {
                  label: "Frontend",
                  icon: <Code size={12} className="text-white" />,
                  tags: ["React", "Tailwind", "GSAP", "Framer Motion", "Redux"],
                },
                {
                  label: "Backend",
                  icon: <Server size={12} className="text-white" />,
                  tags: [
                    "Node.js",
                    "Express.js",
                    "Razorpay",
                    "Stripe",
                    "Cashfree",
                  ],
                },
                {
                  label: "Infra & Cloud",
                  icon: <Cloud size={12} className="text-white" />,
                  tags: ["Github", "AWS", "NGINX", "Cloudflare"],
                },
                {
                  label: "Databases",
                  icon: <Database size={12} className="text-white" />,
                  tags: ["MongoDB", "Redis"],
                },
              ].map((row, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-2 border-black/5 rounded-xl p-3 sm:p-1.5 pr-4 bg-white shadow-sm hover:border-black/10 transition-colors"
                >
                  <div className="flex items-center gap-2 w-full sm:w-28 shrink-0 font-black text-[10px] uppercase tracking-tight text-black">
                    <div className="w-6 h-6 rounded-md bg-black flex items-center justify-center shadow-sm shrink-0">
                      {row.icon}
                    </div>
                    {row.label}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {row.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-zinc-50 hover:bg-[#D4FF00]/10 border border-black/5 hover:border-[#D4FF00]/40 rounded-md text-[10px] font-bold text-zinc-600 hover:text-black transition-all cursor-default hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section: Currently Exploring */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-1.5 text-left mt-1 lg:mt-0"
          >
            <h2 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] border border-black/10" />
              Currently Exploring
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {
                  title: "Serverless",
                  desc: "Architecture",
                  icon: <Zap size={12} strokeWidth={3} />,
                },
                {
                  title: "Distributed",
                  desc: "Systems",
                  icon: <Boxes size={12} strokeWidth={3} />,
                },
                {
                  title: "Developer",
                  desc: "Tooling",
                  icon: <Terminal size={12} strokeWidth={3} />,
                },
                {
                  title: "Performance",
                  desc: "Engineering",
                  icon: <TrendingUp size={12} strokeWidth={3} />,
                },
              ].map((explore, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -3,
                    borderColor: "rgba(0,0,0,0.12)",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.02)",
                  }}
                  className="flex flex-col gap-1.5 p-3.5 sm:p-2.5 border-2 border-black/5 rounded-xl bg-white shadow-sm transition-all group cursor-default"
                >
                  <div className="w-6 h-6 rounded-md bg-zinc-50 border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors duration-300">
                    {React.cloneElement(explore.icon, {
                      className:
                        "text-black group-hover:text-[#D4FF00] transition-colors",
                    })}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black uppercase tracking-tight text-black leading-tight">
                      {explore.title}
                    </span>
                    <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5 leading-none">
                      {explore.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM WIDE PANEL: Quick Highlights */}
      <motion.div
        variants={itemVariants}
        className="max-w-7xl mx-auto mt-6 lg:mt-1 shrink-0 w-full"
      >
        <div className="bg-white border-2 border-black/5 rounded-[1.5rem] p-4 lg:py-2.5 shadow-[0_5px_25px_rgba(0,0,0,0.02)] grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Column 1: Core Quote */}
          <div className="md:col-span-1.5 flex items-center gap-3 border-b md:border-b-0 md:border-r border-black/5 pb-3 md:pb-0 pr-0 md:pr-4">
            <div className="w-8 h-8 rounded-full bg-[#D4FF00] flex items-center justify-center border border-black shrink-0 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
              <Quote size={12} className="text-black" strokeWidth={2.5} />
            </div>
            <p className="text-[10px] sm:text-[11px] font-black text-black leading-tight text-left">
              I believe good engineering is invisible, but its impact is{" "}
              <span className="relative inline-block px-0.5 z-10">
                everywhere.
                <span className="absolute inset-x-0 bottom-[-1px] h-[2px] bg-[#D4FF00] -z-10" />
              </span>
            </p>
          </div>

          {/* Column 2: Location */}
          <div className="flex items-center gap-2.5 pl-0 md:pl-2 border-b md:border-b-0 md:border-r border-black/5 pb-3 md:pb-0 pr-0 md:pr-2">
            <div className="w-6 h-6 rounded-full bg-zinc-50 border border-black/5 flex items-center justify-center shrink-0">
              <MapPin size={10} className="text-zinc-400" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">
                Based in
              </span>
              <span className="text-[10px] font-black text-black uppercase tracking-tight mt-0.5">
                India
              </span>
            </div>
          </div>

          {/* Column 3: Timezone */}
          <div className="flex items-center gap-2.5 pl-0 md:pl-2 border-b md:border-b-0 md:border-r border-black/5 pb-3 md:pb-0 pr-0 md:pr-2">
            <div className="w-6 h-6 rounded-full bg-zinc-50 border border-black/5 flex items-center justify-center shrink-0">
              <Clock size={10} className="text-zinc-400" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">
                Time Zone
              </span>
              <span className="text-[10px] font-black text-black uppercase tracking-tight mt-0.5">
                IST (UTC +5:30)
              </span>
            </div>
          </div>

          {/* Column 4: Coffee */}
          <div className="flex items-center gap-2.5 pl-0 md:pl-2">
            <div className="w-6 h-6 rounded-full bg-zinc-50 border border-black/5 flex items-center justify-center shrink-0">
              <Coffee size={10} className="text-zinc-400" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">
                Fuel
              </span>
              <span className="text-[10px] font-black text-black uppercase tracking-tight mt-0.5">
                Tea + Curiosity
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default About;
