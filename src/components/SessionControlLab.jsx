import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Server,
  Layers,
  RotateCcw,
  Clock,
  Activity,
  LogIn,
  Send,
  LogOut,
  ShieldCheck,
  Key,
  Check,
  Database as RedisIcon,
} from "lucide-react";
import { MarkerSweep } from "./Hero";

const SessionControlLab = ({ bgColor = "#ffffff" }) => {
  const [step, setStep] = useState(0); // 0: idle, 1: logged_in, 2: request_sent, 3: force_logout, 4: post_logout_request
  const [isSimulating, setIsSimulating] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  const [results, setResults] = useState({
    jwt: { status: "idle", code: null, message: null },
    redis: { status: "idle", code: null, message: null },
  });

  const runStep = async (nextStep) => {
    if (isSimulating) return;

    setIsSimulating(true);
    setPulseKey(Date.now());

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    setStep(nextStep);

    if (nextStep === 1) {
      // Login
      setResults({
        jwt: { status: "success", code: "200", message: "Token Issued" },
        redis: { status: "success", code: "200", message: "Session Created" },
      });
    } else if (nextStep === 2) {
      // Send Request
      setResults({
        jwt: { status: "success", code: "200 OK", message: "Valid Signature" },
        redis: { status: "success", code: "200 OK", message: "Session Valid" },
      });
    } else if (nextStep === 3) {
      // Force Logout
      setResults({
        jwt: { status: "warning", code: "---", message: "No change on client" },
        redis: {
          status: "danger",
          code: "REVOKED",
          message: "Session Deleted",
        },
      });
    } else if (nextStep === 4) {
      // Post Logout Request
      setResults({
        jwt: { status: "success", code: "200 OK", message: "Still Valid" },
        redis: { status: "danger", code: "401", message: "Unauthorized" },
      });
    }

    setIsSimulating(false);
  };

  const resetSimulation = () => {
    setStep(0);
    setIsSimulating(false);
    setResults({
      jwt: { status: "idle", code: null, message: null },
      redis: { status: "idle", code: null, message: null },
    });
  };

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
                Session <br />
                <span className="relative inline-block z-10 px-1">
                  Control
                  <span className="absolute inset-y-0 left-0 right-0 -z-10 block">
                    <AnimatePresence>
                      <MarkerSweep delay={0.6} />
                    </AnimatePresence>
                  </span>
                </span>
              </h2>
            </div>

            <p className="text-[14px] text-gray-700 font-bold max-w-sm leading-tight italic mt-2">
              "Some systems trust the client. Others keep control centralized."
            </p>
          </div>

          <div className="relative mt-2 hidden lg:block">
            <div className="p-4 bg-[#fcfcfc] border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3.5 max-w-sm relative overflow-hidden">
              <h3 className="text-[10px] font-black text-black flex items-center gap-2 uppercase tracking-wider">
                How it works
              </h3>
              <ul className="flex flex-col gap-2.5">
                {[
                  { text: "Login user", sub: "System creates a session" },
                  {
                    text: "Send request",
                    sub: "User makes an authenticated request",
                  },
                  {
                    text: "Admin force logout",
                    sub: "Owner revokes the session",
                  },
                  {
                    text: "Send request again",
                    sub: "See how each system behaves",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-md border-2 border-black flex items-center justify-center text-[9px] font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-0.5 transition-colors ${step > i ? "bg-[#D4FF00] text-black" : "bg-white text-gray-300"}`}
                    >
                      {i + 1}
                    </span>
                    <div className="flex flex-col">
                      <span
                        className={`text-[10px] font-black uppercase tracking-tight ${step > i ? "text-black" : "text-gray-400"}`}
                      >
                        {item.text}
                      </span>
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
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/40">
                    State
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
                  <span
                    className={`text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wide transition-colors ${step >= 1 && step < 3 ? "bg-[#D4FF00] text-black" : step >= 3 ? "bg-orange-400 text-white" : "bg-gray-200 text-gray-400"}`}
                  >
                    {step === 0
                      ? "Idle"
                      : step < 3
                        ? "Active Session"
                        : "Session Revoked"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 justify-between sm:justify-start w-full sm:w-auto overflow-x-auto no-scrollbar py-1">
                <ControlButton
                  icon={<LogIn size={12} />}
                  label="Login"
                  onClick={() => runStep(1)}
                  active={step === 0}
                  disabled={step !== 0 || isSimulating}
                  highlight
                />
                <ControlButton
                  icon={<Send size={12} />}
                  label="Send"
                  onClick={() => runStep(step < 3 ? 2 : 4)}
                  active={step === 1 || step === 2 || step === 3 || step === 4}
                  disabled={step === 0 || isSimulating}
                />
                <ControlButton
                  icon={<LogOut size={12} />}
                  label="Logout"
                  onClick={() => runStep(3)}
                  active={step === 1 || step === 2}
                  disabled={step === 0 || step >= 3 || isSimulating}
                />
                <button
                  onClick={resetSimulation}
                  aria-label="Reset session control simulation"
                  className="p-2 border-2 border-black rounded-xl bg-white hover:bg-gray-50 active:translate-x-[1px] active:translate-y-[1px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0"
                >
                  <RotateCcw size={14} className="text-black" />
                </button>
              </div>
            </div>

            {/* System Flows */}
            <div className="flex flex-col gap-8 flex-grow py-2">
              <SessionRow
                icon={<Key size={20} />}
                title="JWT (Stateless)"
                desc="No central session store"
                results={results.jwt}
                step={step}
                pulse={pulseKey}
                middleIcon={<ShieldCheck size={18} />}
                middleLabel="Token"
                middleSub="(in client)"
              />
              <SessionRow
                icon={<RedisIcon size={20} />}
                title="Redis Session"
                desc="Centralized session store"
                results={results.redis}
                step={step}
                pulse={pulseKey}
                middleIcon={<Layers size={18} />}
                middleLabel="Redis"
                middleSub="Session stored"
                highlightMiddle={step >= 1 && step < 3}
              />
            </div>

            {/* Session Timeline */}
            <div className="mt-6 pt-6 border-t-2 border-black/5">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={14} className="text-black" />
                <h4 className="text-[10px] font-black uppercase tracking-widest text-black">
                  Session Timeline
                </h4>
              </div>

              <div className="flex justify-between relative px-2">
                <div className="absolute top-4 inset-x-4 h-[1px] border-t-2 border-dashed border-gray-100 -z-10" />
                {[
                  { label: "Login User", sub: "Session created" },
                  { label: "Send Request", sub: "User makes request" },
                  { label: "Admin: Logout", sub: "Session revoked" },
                  { label: "Send Again", sub: "Try same session" },
                ].map((t, i) => (
                  <TimelineItem
                    key={i}
                    num={i + 1}
                    label={t.label}
                    sub={t.sub}
                    active={step > i}
                    isCurrent={step === i + 1}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SessionRow = ({
  icon,
  title,
  desc,
  results,
  step,
  pulse,
  middleIcon,
  middleLabel,
  middleSub,
  highlightMiddle,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 group/row relative py-4 border-b border-black/5 last:border-0">
      {/* Icon & Title */}
      <div className="flex items-center justify-between sm:justify-start gap-4 w-full sm:w-40 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl border-2 border-black bg-white flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            {React.cloneElement(icon, { size: 20, strokeWidth: 2.5 })}
          </div>
          <div className="flex flex-col">
            <h4 className="text-[12px] font-black text-black leading-none uppercase tracking-tight">
              {title}
            </h4>
            <p className="text-[9px] text-gray-400 font-bold mt-1.5 leading-none">
              {desc}
            </p>
          </div>
        </div>
        {/* Mobile Status */}
        <div className="sm:hidden flex flex-col items-end">
          <div className="flex items-center gap-1.5">
            <div
              className={`w-1.5 h-1.5 rounded-full ${results.status === "success" ? "bg-[#D4FF00]" : results.status === "danger" ? "bg-red-500" : results.status === "warning" ? "bg-orange-400" : "bg-gray-200"}`}
            />
            <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">
              Status
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span
              className={`text-[10px] font-black uppercase tracking-tighter ${results.status === "danger" ? "text-red-500" : results.status === "success" ? "text-[#D4FF00] brightness-90" : "text-black"}`}
            >
              {results.code || "---"}
            </span>
          </div>
        </div>
      </div>

      {/* Flow Visualization */}
      <div className="flex-grow flex items-center justify-between px-2 sm:px-10 relative h-16">
        <div className="absolute inset-x-2 sm:inset-x-10 top-1/2 -translate-y-1/2 h-[2px] border-t-2 border-dashed border-gray-100 -z-10" />

        <Node icon={<User size={16} />} label="Client" active={step >= 1} />
        <Node
          icon={React.cloneElement(middleIcon, { size: 16 })}
          label={middleLabel}
          sub={middleSub}
          active={step >= 1}
          highlight={highlightMiddle ? "#D4FF00" : null}
          showCheck={step >= 1 && step < 3}
          isRevoked={title.includes("Redis") && step >= 3}
        />
        <Node
          icon={<Server size={16} />}
          label="Server"
          active={step >= 1}
          sub="Verify only"
        />

        {/* Pulse Animation Container */}
        <div className="absolute inset-x-2 sm:inset-x-10 inset-y-0 pointer-events-none overflow-hidden">
          <AnimatePresence>
            {pulse > 0 && (step === 2 || step === 4) && (
              <motion.div
                key={pulse}
                initial={{ left: "0%", opacity: 0 }}
                animate={{ left: "100%", opacity: 1 }}
                transition={{ duration: 0.8, ease: "linear" }}
                className="absolute top-1/2 -translate-y-1/2 -ml-1.5 w-3 h-3 bg-[#D4FF00] rounded-full border-2 border-black z-[5]"
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Desktop Status */}
      <div className="hidden sm:flex w-28 shrink-0 flex-col items-start gap-1 pl-4 border-l border-black/5">
        <div className="flex items-center gap-1.5">
          <div
            className={`w-1.5 h-1.5 rounded-full ${results.status === "success" ? "bg-[#D4FF00]" : results.status === "danger" ? "bg-red-500" : results.status === "warning" ? "bg-orange-400" : "bg-gray-200"}`}
          />
          <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">
            Status
          </span>
        </div>
        <div className="flex flex-col">
          <span
            className={`text-[10px] font-black uppercase tracking-tighter ${results.status === "danger" ? "text-red-500" : results.status === "success" ? "text-[#D4FF00] brightness-90" : "text-black"}`}
          >
            {results.code || "---"}
          </span>
          <span className="text-[8px] font-bold text-gray-400 uppercase leading-none">
            {results.message || "Waiting..."}
          </span>
        </div>
      </div>
    </div>
  );
};

const Node = ({
  icon,
  label,
  sub,
  active,
  highlight,
  showCheck,
  isRevoked,
}) => (
  <div className="flex flex-col items-center gap-2 relative z-10">
    <div
      className={`w-11 h-11 rounded-xl border-2 flex items-center justify-center transition-all duration-300 relative ${active ? "border-black bg-white scale-105 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" : "border-black/10 bg-white text-black/30"} ${isRevoked ? "opacity-30 grayscale" : ""}`}
      style={highlight ? { backgroundColor: highlight } : {}}
    >
      {React.cloneElement(icon, { size: 20 })}
      {showCheck && (
        <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#D4FF00] border-2 border-black flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
          <Check size={10} className="text-black" strokeWidth={4} />
        </div>
      )}
    </div>
    <div className="flex flex-col items-center">
      <span
        className={`text-[9px] font-black uppercase tracking-tight transition-colors ${active ? "text-black" : "text-black/20"}`}
      >
        {label}
      </span>
      {sub && (
        <span className="text-[7px] font-bold text-gray-400 uppercase leading-none">
          {sub}
        </span>
      )}
    </div>
  </div>
);

const TimelineItem = ({ num, label, sub, active }) => (
  <div className="flex flex-col items-center gap-1.5 w-1/4">
    <div
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-[9px] font-black transition-all ${active ? "bg-black text-[#D4FF00] border-black scale-110 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" : "bg-white text-black/20 border-black/20"}`}
    >
      {num}
    </div>
    <div className="flex flex-col items-center text-center px-1">
      <span
        className={`text-[8px] font-black uppercase leading-tight ${active ? "text-black" : "text-black/50"}`}
      >
        {label}
      </span>
      <span
        className={`text-[6px] font-bold uppercase leading-none mt-0.5 ${active ? "text-black/40" : "text-black/20"}`}
      >
        {sub}
      </span>
    </div>
  </div>
);

const ControlButton = ({
  icon,
  label,
  onClick,
  disabled,
  highlight,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-black text-[9px] uppercase tracking-widest border-2 border-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none ${disabled ? "bg-gray-100 border-gray-200 text-gray-300 shadow-none scale-95 opacity-50" : highlight ? "bg-[#D4FF00] hover:bg-[#c4eb00] text-black" : "bg-white hover:bg-gray-50 text-black"}`}
  >
    {icon}
    {label}
  </button>
);

export default SessionControlLab;
