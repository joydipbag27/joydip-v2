import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Zap, Shield, Sparkles } from "lucide-react";
import { MarkerSweep, HanddrawnSparkle } from "./Hero";

const TradeOffs = ({ bgColor = "#fcfcfc" }) => {
  const [values, setValues] = useState({
    cost: 1,
    speed: 1,
    reliability: 1,
  });
  const [activeSlider, setActiveSlider] = useState(null);

  const handleUpdate = (key, newValue) => {
    setActiveSlider(key);
    if (newValue === 2) {
      setValues({
        cost: key === "cost" ? 2 : 0,
        speed: key === "speed" ? 2 : 0,
        reliability: key === "reliability" ? 2 : 0,
      });
    } else if (newValue === 0) {
      setValues({
        cost: key === "cost" ? 0 : 2,
        speed: key === "speed" ? 0 : 2,
        reliability: key === "reliability" ? 0 : 2,
      });
    } else {
      setValues({ cost: 1, speed: 1, reliability: 1 });
    }
  };

  const getStatus = () => {
    const { cost, speed, reliability } = values;
    if (cost === 1 && speed === 1 && reliability === 1)
      return {
        title: "System Balanced",
        state: "Optimal state",
        icon: <Sparkles />,
      };
    if (cost === 2)
      return {
        title: "Cost Optimized",
        state: "Cheap state",
        icon: <Wallet />,
      };
    if (speed === 2)
      return {
        title: "Performance Max",
        state: "Fast state",
        icon: <Zap />,
      };
    if (reliability === 2)
      return {
        title: "Stability Peak",
        state: "Secure state",
        icon: <Shield />,
      };
    return {
      title: "Custom Config",
      state: "Mixed state",
      icon: <Sparkles />,
    };
  };

  const getInsight = () => {
    const status = getStatus().title;
    switch (status) {
      case "System Balanced":
        return {
          main: "This is the sweet spot.",
          sub: "Good balance between cost, speed and reliability. Ideal for most users.",
          icon: <Sparkles size={18} />,
        };
      case "Cost Optimized":
        return {
          main: "Budget-friendly mode.",
          sub: "Infrastructure cost is minimized. Higher latency during peak traffic.",
          icon: <Wallet size={18} />,
        };
      case "Performance Max":
        return {
          main: "Blazing fast delivery.",
          sub: "Performance comes at a premium cost and complex maintenance.",
          icon: <Zap size={18} />,
        };
      case "Stability Peak":
        return {
          main: "Rock solid reliability.",
          sub: "High redundancy increases uptime but costs more to maintain.",
          icon: <Shield size={18} />,
        };
      default:
        return {
          main: "Custom Configuration.",
          sub: "Change one variable, and the other system metrics must react.",
          icon: <Sparkles size={18} />,
        };
    }
  };

  const currentStatus = getStatus();
  const currentInsight = getInsight();

  return (
    <div
      className="w-full min-h-full flex items-center justify-center px-4 sm:px-6 md:px-12 relative overflow-hidden py-6 sm:py-12 lg:py-0"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Content */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 px-3 py-1.5 border-2 border-black rounded-xl w-fit bg-white text-[10px] font-black tracking-widest text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] border border-black" />
              Engineering Lab
            </div>

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black leading-[0.95] select-none uppercase relative z-10">
                System <br />
                <span className="relative inline-block z-10 px-1">
                  Trade-offs
                  <span className="absolute inset-y-0 left-0 right-0 -z-10 block">
                    <AnimatePresence>
                      <MarkerSweep delay={0.6} />
                    </AnimatePresence>
                  </span>
                </span>
              </h2>
            </div>

            <p className="text-[15px] text-gray-700 font-bold max-w-sm leading-tight italic">
              "You can’t optimize everything. <br /> Every system has its
              breaking point."
            </p>
          </div>

          <div className="relative">
            <div className="p-4 bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3.5 max-w-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-12 h-12 border-l border-b border-black/5" />
              <h3 className="text-[10px] font-black text-black flex items-center gap-2 uppercase tracking-wider">
                Control Logic
              </h3>
              <ul className="flex flex-col gap-2.5">
                {[
                  { text: "Pick what matters most" },
                  { text: "The system adjusts the rest" },
                  { text: "Trade-offs become visible" },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-black text-[11px] font-black uppercase tracking-tight"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-md bg-[#D4FF00] border-2 border-black flex items-center justify-center text-[9px] font-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {i + 1}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Card */}
        <div className="lg:col-span-8 flex items-stretch">
          <motion.div
            layout
            className="bg-white p-4 md:p-8 rounded-[1.5rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] border-[3px] border-black relative overflow-hidden w-full flex flex-col justify-between h-auto lg:h-[30rem]"
          >
            <div>
              {/* Status Indicator Header */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center gap-3 bg-white border-2 border-black/5 px-1.5 py-1.5 pr-6 rounded-full shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-gray-100 border border-black/10 flex items-center justify-center">
                    {React.cloneElement(currentStatus.icon, {
                      size: 18,
                      strokeWidth: 2.5,
                      className: "text-black",
                    })}
                  </div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-[13px] font-black text-black uppercase tracking-tight">
                      {currentStatus.title}
                    </h2>
                    <div className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="text-[10px] font-black bg-[#D4FF00] text-black px-2 py-0.5 rounded-md uppercase tracking-wide">
                      {currentStatus.state}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-1">
                <Slider
                  label="Cost"
                  sub="Efficiency"
                  value={values.cost}
                  onChange={(v) => handleUpdate("cost", v)}
                  icon={<Wallet />}
                  isActive={activeSlider === "cost"}
                  isAnyActive={activeSlider !== null}
                />
                <Slider
                  label="Speed"
                  sub="Response time"
                  value={values.speed}
                  onChange={(v) => handleUpdate("speed", v)}
                  icon={<Zap />}
                  isActive={activeSlider === "speed"}
                  isAnyActive={activeSlider !== null}
                />
                <Slider
                  label="Reliability"
                  sub="System stability"
                  value={values.reliability}
                  onChange={(v) => handleUpdate("reliability", v)}
                  icon={<Shield />}
                  isActive={activeSlider === "reliability"}
                  isAnyActive={activeSlider !== null}
                />
              </div>
            </div>

            {/* Insight Text Footer */}
            <div className="mt-4 pt-4 border-t-2 border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4FF00] flex items-center justify-center shrink-0 border-2 border-black">
                  {React.cloneElement(currentInsight.icon, {
                    className: "text-black",
                    strokeWidth: 3,
                    size: 16,
                  })}
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="text-[14px] font-black text-black leading-none flex items-center gap-2 uppercase tracking-tighter">
                    {currentInsight.main}
                    {currentStatus.title === "Balanced" && (
                      <span className="text-[#D4FF00] text-xl">❤</span>
                    )}
                  </h4>
                  <p className="text-[11px] text-gray-500 font-bold mt-1 leading-tight max-w-xs">
                    {currentInsight.sub}
                  </p>
                </div>
              </div>

              {currentStatus.title === "Balanced" && (
                <div className="relative mt-2 sm:mt-0 self-end sm:self-auto">
                  <div className="absolute -top-8 -right-4 rotate-12 hidden sm:block">
                    <HanddrawnSparkle size={20} color="#D4FF00" />
                  </div>
                  <div className="px-4 py-1.5 bg-[#D4FF00] text-black text-[10px] font-black rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase tracking-tight">
                    Recommended
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Slider = ({ label, sub, value, icon, onChange }) => {
  const positions = [0, 50, 100];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-4 sm:mb-2 group/row">
      <div className="flex items-center gap-4 w-full sm:w-36 shrink-0">
        <div className="w-11 h-11 rounded-xl border-2 border-black/10 bg-white flex items-center justify-center shadow-sm">
          {React.cloneElement(icon, {
            size: 18,
            strokeWidth: 2.5,
            fill: "#D4FF00",
            className: "text-black",
          })}
        </div>
        <div className="flex flex-col gap-0">
          <h4 className="text-[16px] font-black text-black leading-none">
            {label}
          </h4>
          <p className="text-[11px] text-gray-400 font-bold">{sub}</p>
        </div>
      </div>

      <div className="flex-grow flex flex-col gap-1 pt-1">
        <div className="relative h-10 flex items-center px-1">
          {/* Main Track */}
          <div className="absolute left-0 right-0 h-1.5 bg-gray-100 border-2 border-black/5 rounded-full" />

          {/* Progress Track */}
          <div className="absolute left-0 right-0 h-1.5 pointer-events-none overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-black"
              animate={{ width: `${positions[value]}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          {/* Snap Points */}
          <div className="absolute left-0 right-0 h-full pointer-events-none">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full absolute top-1/2 -translate-y-1/2 -ml-1.25 border-2 border-black transition-all duration-300 ${value === i ? "bg-[#D4FF00] scale-125" : "bg-white"}`}
                style={{ left: `${positions[i]}%` }}
              />
            ))}
          </div>

          {/* Clickable Zones */}
          <div className="absolute left-0 right-0 inset-0 flex justify-between z-30">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                onClick={() => onChange(i)}
                className="w-16 h-full -ml-8 cursor-pointer flex items-center justify-center group/point"
                style={{ position: "absolute", left: `${positions[i]}%` }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-black/0 group-hover/point:bg-black/10 transition-colors" />
              </div>
            ))}
          </div>

          {/* Interactive Knob */}
          <div className="absolute left-0 right-0 h-full z-40 pointer-events-none">
            <motion.div
              animate={{ left: `${positions[value]}%` }}
              transition={{ type: "spring", stiffness: 500, damping: 40 }}
              className="absolute top-1/2 -translate-y-1/2 -ml-3 w-6 h-6 bg-[#D4FF00] border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center group/knob pointer-events-auto cursor-pointer"
              onClick={() => onChange((value + 1) % 3)}
            >
              <div className="w-1.5 h-1.5 bg-black rounded-full" />
            </motion.div>
          </div>
        </div>

        {/* Labels */}
        <div className="relative h-4 px-1">
          {(label === "Cost" ? ["Max", "Opt", "Min"] : ["Min", "Opt", "Max"]).map((l, i) => (
            <button
              key={l}
              onClick={() => onChange(i)}
              className={`text-[8px] font-black absolute -translate-x-1/2 transition-all uppercase tracking-widest ${value === i ? "text-black" : "text-gray-400"}`}
              style={{ left: `${positions[i]}%` }}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradeOffs;
