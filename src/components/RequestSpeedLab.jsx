import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Database, 
  Zap, 
  User, 
  Server, 
  Layers, 
  Cpu, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  TrendingUp,
  Clock,
  Activity,
  AlertCircle
} from "lucide-react";
import { HanddrawnSparkle, MarkerSweep } from "./Hero";

const RequestSpeedLab = ({ bgColor = "#ffffff" }) => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [autoMode, setAutoMode] = useState(false);
  const [results, setResults] = useState({
    db: { status: 'idle', time: 0, pulse: 0 },
    redis: { status: 'idle', time: 0, type: null, pulse: 0 },
    lambda: { status: 'idle', time: 0, type: null, pulse: 0 },
  });
  
  const [lambdaWarm, setLambdaWarm] = useState(false);
  const [lastRequestTime, setLastRequestTime] = useState(null);
  const autoModeTimer = useRef(null);
  const simulationId = useRef(0);

  // Lambda Cold Start Logic: Reset to cold if idle for > 15 seconds
  useEffect(() => {
    if (lastRequestTime && !isSimulating) {
      const timer = setInterval(() => {
        const now = Date.now();
        if (now - lastRequestTime > 15000) {
          setLambdaWarm(false);
        }
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [lastRequestTime, isSimulating]);

  const runSimulation = async () => {
    if (isSimulating) return;
    
    simulationId.current += 1;
    const currentId = simulationId.current;
    
    setIsSimulating(true);
    
    // Reset pulses and states
    setResults({
      db: { status: 'processing', time: 0, pulse: Date.now() },
      redis: { status: 'processing', time: 0, type: null, pulse: Date.now() },
      lambda: { status: 'processing', time: 0, type: null, pulse: Date.now() },
    });

    const checkCancelled = () => currentId !== simulationId.current;

    // 1. Normal DB Simulation
    const normalDbPromise = (async () => {
      const delay = Math.random() * (800 - 400) + 400;
      await new Promise(resolve => setTimeout(resolve, delay));
      if (checkCancelled()) return;
      setResults(prev => ({ 
        ...prev, 
        db: { status: 'completed', time: Math.round(delay), pulse: prev.db.pulse } 
      }));
    })();

    // 2. Redis Simulation
    const redisPromise = (async () => {
      const isHit = Math.random() < 0.6;
      let delay;
      if (isHit) {
        delay = Math.random() * (120 - 50) + 50;
        if (!checkCancelled()) setResults(prev => ({ ...prev, redis: { ...prev.redis, type: 'hit' } }));
      } else {
        const dbDelay = Math.random() * (800 - 400) + 400;
        delay = 100 + dbDelay;
        if (!checkCancelled()) setResults(prev => ({ ...prev, redis: { ...prev.redis, type: 'miss' } }));
      }
      await new Promise(resolve => setTimeout(resolve, delay));
      if (checkCancelled()) return;
      setResults(prev => ({ 
        ...prev, 
        redis: { ...prev.redis, status: 'completed', time: Math.round(delay) } 
      }));
    })();

    // 3. Lambda Simulation
    const lambdaPromise = (async () => {
      const isCold = !lambdaWarm;
      let delay;
      if (isCold) {
        delay = Math.random() * (1500 - 800) + 800;
        if (!checkCancelled()) setResults(prev => ({ ...prev, lambda: { ...prev.lambda, type: 'cold' } }));
      } else {
        delay = Math.random() * (200 - 100) + 100;
        if (!checkCancelled()) setResults(prev => ({ ...prev, lambda: { ...prev.lambda, type: 'warm' } }));
      }
      
      if (!checkCancelled()) {
        setLastRequestTime(Date.now());
        setLambdaWarm(true);
      }
      
      await new Promise(resolve => setTimeout(resolve, delay));
      if (checkCancelled()) return;
      setResults(prev => ({ 
        ...prev, 
        lambda: { ...prev.lambda, status: 'completed', time: Math.round(delay) } 
      }));
    })();

    await Promise.all([normalDbPromise, redisPromise, lambdaPromise]);
    if (!checkCancelled()) setIsSimulating(false);
  };

  useEffect(() => {
    if (autoMode && !isSimulating) {
      autoModeTimer.current = setTimeout(runSimulation, 1500);
    }
    return () => clearTimeout(autoModeTimer.current);
  }, [autoMode, isSimulating]);

  const resetSimulation = () => {
    simulationId.current += 1; // Cancel any ongoing simulations
    setAutoMode(false);
    setIsSimulating(false);
    setLambdaWarm(false);
    setLastRequestTime(null);
    setResults({
      db: { status: 'idle', time: 0, pulse: 0 },
      redis: { status: 'idle', time: 0, type: null, pulse: 0 },
      lambda: { status: 'idle', time: 0, type: null, pulse: 0 },
    });
  };

  const fastestTime = Math.min(
    results.db.time || Infinity,
    results.redis.time || Infinity,
    results.lambda.time || Infinity
  );

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
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black leading-[0.95] select-none uppercase relative z-10">
                Request <span className="relative inline-block z-10 px-1">
                  Speed
                  <span className="absolute inset-y-0 left-0 right-0 -z-10 block">
                    <AnimatePresence>
                      <MarkerSweep delay={0.6} />
                    </AnimatePresence>
                  </span>
                </span> <br /> Trade-Offs
              </h1>
            </div>

            <p className="text-[14px] text-gray-700 font-bold max-w-sm leading-tight italic mt-2">
              "Not all speed is equal. Some is cached. Some is warmed. Some is expensive."
            </p>
          </div>

          <div className="relative mt-2 hidden lg:block">
            <div className="p-4 bg-[#fcfcfc] border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3.5 max-w-sm relative overflow-hidden">
              <h3 className="text-[10px] font-black text-black flex items-center gap-2 uppercase tracking-wider">
                How it works
              </h3>
              <ul className="flex flex-col gap-2.5">
                {[
                  { text: "Trigger a request", sub: "All strategies run simultaneously." },
                  { text: "Observe the flow", sub: "See how each system processes it." },
                  { text: "Compare outcomes", sub: "Every optimization is a trade-off." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-md bg-[#D4FF00] border-2 border-black flex items-center justify-center text-[9px] font-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-0.5">
                      {i + 1}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-black text-[10px] font-black uppercase tracking-tight">{item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Simulation Card */}
        <div className="lg:col-span-8 flex items-stretch">
          <motion.div
            layout
            className="bg-white p-4 md:p-6 rounded-[1.5rem] border-[3px] border-black relative overflow-hidden w-full flex flex-col h-auto lg:h-[30rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]"
          >
            {/* Simulation Header */}
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between mb-6">
              <div className="flex items-center justify-between sm:justify-start gap-3 bg-gray-50 border-2 border-black/5 px-3 py-1.5 rounded-full w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <Activity size={14} className="text-black" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/40">State</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wide transition-colors ${isSimulating ? 'bg-orange-400 text-white' : 'bg-[#D4FF00] text-black'}`}>
                    {isSimulating ? 'Processing...' : 'Ready'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 justify-between sm:justify-start w-full sm:w-auto">
                <button 
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className={`flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${isSimulating ? 'bg-gray-100 opacity-50 cursor-not-allowed' : 'bg-[#D4FF00] hover:bg-[#c4eb00] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none'}`}
                >
                  <Play size={12} fill="black" />
                  Send
                </button>

                <div className="flex items-center gap-2 px-3 py-1.5 border-2 border-black rounded-xl bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-[9px] font-black uppercase tracking-tight">Auto</span>
                  <button 
                    onClick={() => setAutoMode(!autoMode)}
                    className={`w-7 h-3.5 rounded-full relative transition-colors border border-black/10 ${autoMode ? 'bg-[#D4FF00]' : 'bg-gray-200'}`}
                  >
                    <motion.div 
                      animate={{ x: autoMode ? 14 : 2 }}
                      className="absolute top-0.5 left-0 w-2.5 h-2.5 bg-white rounded-full border border-black/10 shadow-sm"
                    />
                  </button>
                </div>

                <button 
                  onClick={resetSimulation}
                  className="p-2 border-2 border-black rounded-xl bg-white hover:bg-gray-50 active:translate-x-[1px] active:translate-y-[1px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  <RotateCcw size={14} className="text-black" />
                </button>
              </div>
            </div>

            {/* System Flows */}
            <div className="flex flex-col gap-6 flex-grow py-2">
              <SystemRow 
                icon={<Database size={20} />}
                title="Normal DB"
                desc="Direct query"
                status={results.db.status}
                time={results.db.time}
                pulse={results.db.pulse}
                isFastest={results.db.time === fastestTime && results.db.time > 0}
              />
              <SystemRow 
                icon={<Zap size={20} />}
                title="Redis + DB"
                desc="Cache fallback"
                status={results.redis.status}
                time={results.redis.time}
                type={results.redis.type}
                pulse={results.redis.pulse}
                isFastest={results.redis.time === fastestTime && results.redis.time > 0}
                middleIcon={<Layers size={18} />}
                middleLabel="Cache"
              />
              <SystemRow 
                icon={<Cpu size={20} />}
                title="Lambda (AWS)"
                desc="Serverless"
                status={results.lambda.status}
                time={results.lambda.time}
                type={results.lambda.type}
                pulse={results.lambda.pulse}
                isFastest={results.lambda.time === fastestTime && results.lambda.time > 0}
                middleIcon={<span className="font-bold text-lg">λ</span>}
                middleLabel="Lambda"
              />
            </div>

            {/* Results Footer */}
            <div className="mt-4 pt-4 border-t-2 border-black/5 flex items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <TrendingUp size={14} className="text-black" />
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-black">Insights</h4>
                </div>
                <div className="flex gap-4">
                  <ResultItem label="DB" value={results.db.time} active={results.db.status === 'completed'} />
                  <ResultItem 
                    label="Redis" 
                    value={results.redis.time} 
                    active={results.redis.status === 'completed'} 
                    color={results.redis.type === 'hit' ? '#D4FF00' : null}
                  />
                  <ResultItem 
                    label="Lambda" 
                    value={results.lambda.time} 
                    active={results.lambda.status === 'completed'} 
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                 <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.3em] italic">Measure. Learn. Optimize.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SystemRow = ({ 
  icon, 
  title, 
  desc, 
  status, 
  time, 
  type, 
  pulse, 
  isFastest,
  middleIcon,
  middleLabel
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 group/row relative py-3 border-b border-black/5 last:border-0">
      {/* Icon & Title */}
      <div className="flex items-center justify-between sm:justify-start gap-4 w-full sm:w-40 shrink-0">
        <div className="flex items-center gap-4">
          <div className={`w-11 h-11 rounded-xl border-2 border-black flex items-center justify-center transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${status === 'processing' ? 'bg-[#D4FF00]' : 'bg-white'}`}>
            {React.cloneElement(icon, { strokeWidth: 2.5, size: 20 })}
          </div>
          <div className="flex flex-col">
            <h4 className="text-[14px] font-black text-black leading-none uppercase tracking-tight">{title}</h4>
            <p className="text-[10px] text-gray-400 font-bold mt-1.5 leading-none">{desc}</p>
          </div>
        </div>
        {/* Mobile Time & Status */}
        <div className="sm:hidden flex flex-col items-end">
          <div className="flex items-baseline gap-1">
            <span className={`text-xl font-black tracking-tighter ${isFastest ? 'text-black' : 'text-gray-300'}`}>
              {status === 'completed' ? (time > 1000 ? (time/1000).toFixed(2) : time) : '---'}
            </span>
            <span className="text-[8px] font-black text-gray-400 uppercase">{status === 'completed' ? (time > 1000 ? 's' : 'ms') : ''}</span>
          </div>
          <div className={`w-1.5 h-1.5 rounded-full ${status === 'completed' ? 'bg-[#D4FF00]' : status === 'processing' ? 'bg-orange-400 animate-pulse' : 'bg-gray-200'}`} />
        </div>
      </div>

      {/* Flow Visualization */}
      <div className="flex-grow flex items-center justify-between px-2 sm:px-10 relative h-16">
        <div className="absolute inset-x-2 sm:inset-x-10 top-1/2 -translate-y-1/2 h-[2px] border-t-2 border-dashed border-gray-100 -z-10" />
        
        <Node icon={<User size={16} />} label="Client" active={status !== 'idle'} />
        
        {middleIcon ? (
           <Node 
            icon={React.cloneElement(middleIcon, { size: 16 })} 
            label={middleLabel} 
            active={status !== 'idle'} 
            highlight={type === 'hit' || type === 'warm' ? '#D4FF00' : type === 'cold' ? '#ff9800' : null}
            tag={type ? (type === 'hit' ? 'hit' : type === 'miss' ? 'miss' : type === 'cold' ? 'cold' : 'hot') : null}
           />
        ) : (
           <Node icon={<Server size={16} />} label="Server" active={status !== 'idle'} />
        )}
        
        <Node icon={<Database size={16} />} label="DB" active={status === 'processing' || status === 'completed'} />

        {/* Pulse Animation */}
        {status === 'processing' && pulse > 0 && (
          <motion.div
            key={pulse}
            initial={{ left: "0%", opacity: 0 }}
            animate={{ left: "100%", opacity: 1 }}
            transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
            className="absolute top-1/2 -translate-y-1/2 -ml-1.5 w-3 h-3 bg-[#D4FF00] rounded-full border-2 border-black z-[5]"
          />
        )}
      </div>

      {/* Desktop Time & Status */}
      <div className="hidden sm:flex w-20 shrink-0 flex-col items-end">
        <div className="flex items-baseline gap-1">
          <span className={`text-xl font-black tracking-tighter ${isFastest ? 'text-black' : 'text-gray-300'}`}>
            {status === 'completed' ? (time > 1000 ? (time/1000).toFixed(2) : time) : '---'}
          </span>
          <span className="text-[8px] font-black text-gray-400 uppercase">{status === 'completed' ? (time > 1000 ? 's' : 'ms') : ''}</span>
        </div>
        <div className={`w-1.5 h-1.5 rounded-full ${status === 'completed' ? 'bg-[#D4FF00]' : status === 'processing' ? 'bg-orange-400 animate-pulse' : 'bg-gray-200'}`} />
      </div>
    </div>
  );
};

const Node = ({ icon, label, active, highlight, tag }) => (
  <div className="flex flex-col items-center gap-2 relative z-10">
    <div 
      className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all duration-300 relative ${active ? 'border-black bg-white scale-110 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' : 'border-black/10 bg-white text-black/30'}`}
      style={highlight ? { backgroundColor: highlight, borderColor: 'rgba(0,0,0,0.1)' } : {}}
    >
      {icon}
      <AnimatePresence>
        {tag && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0 }}
            className="absolute -top-5 whitespace-nowrap z-30"
          >
            <span className="text-[9px] font-black text-black bg-[#D4FF00] px-1.5 py-0.5 rounded border-2 border-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {tag}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    <span className={`text-[9px] font-black uppercase tracking-tight transition-colors ${active ? 'text-black' : 'text-black/20'}`}>{label}</span>
  </div>
);

const ResultItem = ({ label, value, active, color }) => (
  <div className="flex items-center gap-2">
    <div className={`w-1.5 h-1.5 rounded-full ${active ? (color || 'bg-black') : 'bg-gray-100'}`} />
    <span className={`text-[10px] font-bold ${active ? 'text-black' : 'text-gray-300'}`}>{label}:</span>
    <span className={`text-[10px] font-black ${active ? 'text-black' : 'text-gray-200'}`}>
      {active ? (value > 1000 ? (value/1000).toFixed(2) + 's' : value + 'ms') : '--'}
    </span>
  </div>
);

export default RequestSpeedLab;
