import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Zap, ShieldCheck, Image, Heart } from 'lucide-react';

const LabSummary = ({ bgColor }) => {
  const cards = [
    {
      icon: <Scale size={18} className="text-[#D4FF00]" />,
      title: 'SYSTEM TRADE-OFFS',
      desc: 'Every choice has consequences.',
      pos: 'top'
    },
    {
      icon: <Zap size={18} className="text-[#D4FF00]" />,
      title: 'REQUEST SPEED',
      desc: 'Performance is a user experience.',
      pos: 'left'
    },
    {
      icon: <ShieldCheck size={18} className="text-[#D4FF00]" />,
      title: 'SESSION CONTROL',
      desc: 'Control is security. Security is trust.',
      pos: 'right'
    },
    {
      icon: <Image size={18} className="text-[#D4FF00]" />,
      title: 'CLIENT-SIDE THUMBNAILS',
      desc: 'Move the work closer. Save time and cost.',
      pos: 'bottom'
    }
  ];

  return (
    <div 
      className="w-full min-h-full flex items-center justify-center px-4 sm:px-6 md:px-12 relative overflow-hidden py-6 sm:py-12 lg:py-0"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center py-2">
        {/* Header - More compact */}
        <div className="flex flex-col items-center gap-2 mb-6 text-center">
          <div className="flex items-center gap-2 px-2.5 py-1 border-2 border-black rounded-lg w-fit bg-white text-[8px] font-black tracking-widest text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] border border-black" />
            Engineering Lab
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black leading-none uppercase tracking-tighter">
            Lab Journey So Far
          </h2>
          <p className="text-gray-400 font-bold max-w-lg leading-tight text-sm italic">
            Exploring how systems behave, trade-offs exist, and decisions shape outcomes.
          </p>
        </div>

        {/* Central Visualization - Constrained Height */}
        <div className="relative w-full max-w-2xl h-[300px] flex items-center justify-center mb-6">
          {/* Decorative Rings - Smaller */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-[280px] h-[280px] border-2 border-dashed border-black rounded-full" />
            <div className="absolute w-[180px] h-[180px] border-2 border-dashed border-black rounded-full" />
          </div>

          {/* Pulse Animation Rings - CSS Driven for Maximum Smoothness */}
          <style>{`
            @keyframes pulse-ring {
              0% { transform: scale(0.3); opacity: 0; }
              50% { opacity: 0.3; }
              100% { transform: scale(3.5); opacity: 0; }
            }
            .pulse-ring {
              animation: pulse-ring 5s cubic-bezier(0.16, 1, 0.5, 1) infinite;
              will-change: transform, opacity;
              backface-visibility: hidden;
            }
          `}</style>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="pulse-ring absolute w-24 h-24 border-2 border-[#D4FF00] rounded-full z-0"
              style={{ animationDelay: `${i * 2}s` }}
            />
          ))}

          {/* Center Hub - Custom Beaker with Neon Liquid */}
          <div className="z-10 bg-white border-2 border-black/5 rounded-full p-5 shadow-[0_15px_40px_rgba(0,0,0,0.05)] relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4FF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Proper Erlenmeyer Flask SVG */}
            <svg 
              width="36" 
              height="36" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="relative z-10 text-black"
            >
              {/* Liquid - Perfectly fit to the flask base */}
              <motion.path
                d="M7.5 12L4.5 20H19.5L16.5 12C16.5 12 14.5 11 12 11C9.5 11 7.5 12 7.5 12Z"
                fill="#D4FF00"
                stroke="none"
                animate={{ 
                  y: [0, 0.5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Flask Structure */}
              <path d="M4.5 20H19.5" />
              <path d="M9 3H15" />
              <path d="M9 3V8L4.5 20" />
              <path d="M15 3V8L19.5 20" />
            </svg>
          </div>

          {/* Cards - Perfectly balanced positions */}
          {cards.map((card, i) => {
            const positions = {
              top: "-top-3 sm:-top-5 left-[40%] sm:left-[35%]",
              left: "left-[-1rem] sm:left-0 top-1/3",
              right: "right-[-1rem] sm:right-[0] top-1/3",
              bottom: "-bottom-3 sm:-bottom-5 left-[38%] sm:left-[30%]"
            };

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`absolute ${positions[card.pos]} z-20`}
              >
                <div className="bg-white border-2 border-black/5 rounded-xl p-1.5 sm:p-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center text-center gap-1 sm:gap-2 w-[85px] sm:w-auto sm:min-w-[145px] transition-all hover:scale-[1.03] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] group/card cursor-default border-t-2 border-t-transparent hover:border-t-[#D4FF00]">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-50 border border-black/5 flex items-center justify-center mb-0.5 group-hover/card:bg-black group-hover/card:border-black transition-colors duration-300">
                    {React.cloneElement(card.icon, { size: 16, className: "text-black group-hover/card:text-[#D4FF00] transition-colors w-3 h-3 sm:w-4 sm:h-4" })}
                  </div>
                  <h3 className="text-[7px] sm:text-[10px] font-black tracking-wider sm:tracking-widest uppercase text-black leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[6px] sm:text-[9px] font-bold text-gray-400 leading-none uppercase tracking-wide opacity-60 mt-0.5 sm:mt-0">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner - Much more compact */}
        <div className="w-full max-w-3xl bg-white border-2 border-black/5 rounded-[1.5rem] p-4 md:p-3 flex flex-col md:grid md:grid-cols-2 gap-4 items-center shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-4 border-r-0 md:border-r-2 border-black/5 pr-0 md:pr-4 w-full">
            <div className="w-10 h-10 rounded-full border-2 border-black/5 flex items-center justify-center flex-shrink-0 bg-gray-50/50">
              <Heart size={16} className="text-gray-300 group-hover:text-[#D4FF00] transition-colors" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h4 className="text-[13px] font-black text-black leading-none uppercase tracking-tight">This is just the beginning.</h4>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none mt-1">
                More experiments. More insights.
              </p>
            </div>
          </div>
          <div className="pl-0 md:pl-4 w-full">
            <p className="text-[13px] text-gray-700 font-bold leading-[1.3]">
              I build systems by questioning, experimenting, and simplifying. 
              <span className="bg-black text-[#D4FF00] px-2 py-0.5 rounded ml-1 text-[11px] uppercase tracking-tighter inline-block shadow-[2px_2px_0px_0px_rgba(212,255,0,0.3)]">The exploration continues.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabSummary;
