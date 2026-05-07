import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  TrendingUp,
  Zap,
  Infinity,
  ArrowRight,
  Layers,
  Database,
  User,
  Code,
  ShieldCheck,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";
import { HanddrawnSparkle, MarkerSweep, ScribbleUnderline } from "./Hero";

const WavyDivider = () => (
  <div className="relative w-full py-24 flex justify-center overflow-visible">
    {/* Organic Hand-drawn Divider Path */}
    <svg
      viewBox="0 0 1440 100"
      className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 text-[#D4FF00]"
      preserveAspectRatio="none"
    >
      <defs>
        <mask id="divider-mask">
          <motion.path
            d="M0 50 Q 180 20, 360 50 T 720 50 T 1080 50 T 1440 50"
            stroke="white"
            strokeWidth="60"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </mask>
      </defs>
      <path
        d="M0 50 Q 180 20, 360 50 T 720 50 T 1080 50 T 1440 50"
        stroke="currentColor"
        strokeWidth="10"
        strokeDasharray="4 30"
        strokeLinecap="round"
        fill="none"
        mask="url(#divider-mask)"
      />
    </svg>

    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className="relative z-10"
    >
      <motion.button
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-14 h-14 bg-[#D4FF00] rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(212,255,0,0.4)] cursor-pointer group hover:scale-110 transition-all border-2 border-white"
      >
        <ChevronDown className="w-7 h-7 text-black group-hover:translate-y-0.5 transition-transform" />
      </motion.button>
    </motion.div>
  </div>
);

const MetricCard = ({ icon: Icon, value, label, sublabel, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
    className="flex flex-col gap-4"
  >
    <div className="w-12 h-12 rounded-xl bg-[#D4FF00] flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black mb-2">
      <Icon className="w-6 h-6 text-black" strokeWidth={3} />
    </div>
    <div className="flex flex-col">
      <span className="text-4xl font-black text-black tracking-tighter mb-1">
        {value}
      </span>
      <span className="text-black font-extrabold text-[11px] uppercase tracking-wider mb-0.5">
        {label}
      </span>
      <span className="text-gray-400 text-[11px] font-semibold leading-tight">
        {sublabel}
      </span>
    </div>
  </motion.div>
);

const FeaturePoint = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center gap-8 group cursor-default p-8 rounded-[32px] transition-all border border-transparent hover:border-black/5"
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="p-6 border-[3px] border-black rounded-2xl bg-white group-hover:bg-[#D4FF00] transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-[3px] group-hover:translate-y-[3px] shrink-0"
    >
      <Icon className="w-10 h-10 text-black" strokeWidth={2.5} />
    </motion.div>
    <div className="flex flex-col gap-1.5">
      <h3 className="font-black text-2xl tracking-tighter text-black leading-none">
        {title}
      </h3>
      <p className="text-gray-500 text-sm font-bold leading-tight max-w-[220px]">
        {desc}
      </p>
    </div>
  </motion.div>
);

const SystemDiagram = () => {
  const Node = ({
    icon: Icon,
    label,
    size = "w-12 h-12 md:w-16 md:h-16",
    labelPos = "bottom",
  }) => (
    <div
      className={`flex ${labelPos === "right" ? "flex-row items-center gap-3" : "flex-col items-center gap-2"}`}
    >
      <div
        className={`${size} rounded-xl border-2 border-black bg-white flex items-center justify-center transition-transform hover:scale-105`}
      >
        <Icon className="w-6 h-6 md:w-8 md:h-8 text-black" strokeWidth={1.2} />
      </div>
      <span
        className={`text-[9px] font-black uppercase tracking-widest text-black ${labelPos === "bottom" ? "text-center" : ""} px-1`}
      >
        {label}
      </span>
    </div>
  );

  return (
    <div className="relative w-full max-w-3xl p-4 md:p-8">
      {/* Main Horizontal Flow */}
      <div className="flex items-start justify-between w-full relative z-10">
        <Node icon={User} label="Client" />

        <div className="mt-[14px] md:mt-[22px]">
          <ArrowRight className="w-5 h-5 text-zinc-300" strokeWidth={2} />
        </div>

        <Node icon={Code} label="API Gateway" />

        <div className="mt-[14px] md:mt-[22px]">
          <ArrowRight className="w-5 h-5 text-zinc-300" strokeWidth={2} />
        </div>

        {/* Central Vertical Stack */}
        <div className="relative flex flex-col items-center">
          {/* Vertical Dashed Line */}
          <div className="absolute top-[-60px] bottom-[-60px] left-1/2 -translate-x-1/2 w-[2px] border-l-2 border-dashed border-black/10 -z-10" />

          {/* Auth Node - Positioned Above */}
          <div className="absolute bottom-[calc(100%+24px)] left-1/2 -translate-x-[20px] md:-translate-x-[24px] whitespace-nowrap">
            <Node
              icon={ShieldCheck}
              label="Auth"
              size="w-10 h-10 md:w-12 md:h-12"
              labelPos="right"
            />
          </div>

          <Node icon={Zap} label="Function" size="w-12 h-12 md:w-16 md:h-16" />

          {/* Monitoring Node - Positioned Below */}
          <div className="absolute top-[calc(100%+24px)] left-1/2 -translate-x-[20px] md:-translate-x-[24px] whitespace-nowrap">
            <Node
              icon={Activity}
              label="Monitoring"
              size="w-10 h-10 md:w-12 md:h-12"
              labelPos="right"
            />
          </div>
        </div>

        <div className="mt-[14px] md:mt-[22px]">
          <ArrowRight className="w-5 h-5 text-zinc-300" strokeWidth={2} />
        </div>

        <Node icon={Database} label="Storage" />
      </div>
    </div>
  );
};

const CaseStudy = () => {
  React.useEffect(() => {
    if (window.location.hash === "#work") {
      setTimeout(() => {
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <section id="work" className="w-full bg-inherit md:pb-40">
      <WavyDivider />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header Block */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative inline-block mb-10">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-bold uppercase text-black tracking-[0.2em]"
            >
              Case Study
            </motion.div>
            <div className="absolute -bottom-0.5 left-0 w-full h-1">
              <ScribbleUnderline delay={0.6} color="#D4FF00" />
            </div>
          </div>

          <div className="relative inline-block mb-2.5">
            <HanddrawnSparkle
              className="-left-5 -top-1 rotate-[35deg] text-black/80 hidden lg:block"
              delay={0.8}
              size={32}
              rotation={270}
            />
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-[#0066FF] leading-none"
            >
              SastaDrive
            </motion.h3>
            <HanddrawnSparkle
              className="-right-6 -top-1 text-black/80 hidden lg:block"
              delay={1}
              size={32}
              rotation={0}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-md md:text-2xl font-semibold text-gray-400/90 tracking-tight mb-3"
          >
            Scalable file storage built for cost efficiency.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative inline-block"
          >
            <span className="font-handwritten tracking-[0.01em] text-lg md:text-3xl text-zinc-700/70 font-bold">
              Built to prove performance doesn't have to be expensive.
            </span>
            <div className="absolute -bottom-0.5 left-0 w-full h-1.5">
              <ScribbleUnderline delay={0.6} color="#D4FF00" />
            </div>
          </motion.div>
        </div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white border-2 border-black rounded-3xl md:rounded-[40px] shadow-[30px_30px_0px_0px_rgba(0,0,0,0.02)] flex flex-col overflow-hidden"
        >
          {/* Top Section: Main Content and Diagram */}
          <div className="flex flex-col lg:flex-row gap-8 p-5 md:p-12 border-b-2 border-black/5 relative">
            {/* CTA Button Top Right */}
            <div className="absolute top-8 right-8 z-20 hidden lg:block">
              <Link to="/work/sastadrive">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-8 py-4 rounded-full font-black flex items-center gap-3 text-sm uppercase tracking-widest shadow-xl group/btn"
                >
                  View Case Study
                  <ArrowRight className="w-5 h-5 text-[#D4FF00] group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>

            {/* Left Side: Text and Metrics */}
            <div className="flex-[1.1] z-10">
              <div className="mb-4 md:mb-8 flex flex-col items-start">
                <h4 className="text-4xl md:text-5xl font-black tracking-tighter text-black leading-tight">
                  Scalable storage.
                </h4>
                <div className="relative inline-block mt-1">
                  <h4 className="text-4xl md:text-5xl font-black tracking-tighter text-black leading-tight relative z-10 px-2">
                    Minimal cost.
                  </h4>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 bg-[#D4FF00] rounded-full -z-10 origin-left"
                  />
                </div>
              </div>

              <div className="text-gray-500 font-bold text-lg leading-snug mb-6 md:mb-10 max-w-2xl">
                A serverless file storage system optimized for{" "}
                <span className="text-black font-black">high scalability</span>{" "}
                and{" "}
                <span className="text-black font-black">
                  low operational cost
                </span>
                .
              </div>

              <div className="grid grid-cols-3 gap-6 md:gap-8 pt-4 md:pt-8 border-t border-gray-100">
                <MetricCard
                  icon={TrendingUp}
                  value="~90%"
                  label="lower cost"
                  sublabel="vs traditional setup"
                  delay={0.2}
                />
                <MetricCard
                  icon={Zap}
                  value="High"
                  label="performance"
                  sublabel="at any scale"
                  delay={0.3}
                />
                <MetricCard
                  icon={Infinity}
                  value="Auto"
                  label="scaling"
                  sublabel="on demand"
                  delay={0.4}
                />
              </div>

              {/* Mobile-only CTA Button */}
              <div className="mt-6 lg:hidden">
                <Link to="/work/sastadrive">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-black text-white py-4 rounded-full font-black flex items-center justify-center gap-3 text-sm uppercase tracking-widest shadow-lg"
                  >
                    View Case Study
                    <ArrowRight className="w-5 h-5 text-[#D4FF00]" />
                  </motion.button>
                </Link>
              </div>
            </div>
            {/* Vertical Separator */}
            <div className="hidden lg:block w-[3px] bg-black/20 self-stretch my-10 rounded-full" />

            {/* Right Side: Interactive System Diagram */}
            <div className="flex-1 flex flex-col items-center justify-center min-h-[250px] lg:min-h-[300px] py-2 lg:py-4">
              <SystemDiagram />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
