import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  TrendingDown,
  Cloud,
  Zap,
  Laptop,
  Key,
  Database,
  Globe,
  Users,
  Lock,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  CloudUpload,
  Cpu,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { MarkerSweep, HanddrawnSparkle } from "../components/Hero";

const SastaDriveCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      id="main-content"
      className="w-full min-h-screen bg-[#fafafa] text-gray-900 pb-32 font-sans selection:bg-[#d4ff00] selection:text-black"
    >
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-4 flex justify-between items-center">
        <Link
          to="/"
          aria-label="Back to home"
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black/10 hover:border-black transition-colors bg-white group"
        >
          <ChevronLeft
            size={20}
            className="text-gray-400 group-hover:text-black transition-colors"
          />
        </Link>
      </div>

      <article className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12 mt-4">
        {/* 1. HERO SECTION */}
        <section className="flex flex-col lg:flex-row gap-16 justify-between items-start">
          {/* Left: Text & Stats */}
          <div className="flex flex-col gap-8 lg:max-w-xl">
            {/* Engineering Lab Pill */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-xl w-max bg-white">
              <div className="w-2.5 h-2.5 rounded-full bg-[#D4FF00] border border-black animate-pulse" />
              <span className="text-[10px] font-black tracking-widest text-black uppercase">
                CASE STUDY
              </span>
            </div>

            {/* Title & Description */}
            <div className="flex flex-col gap-6">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-none relative w-max">
                <HanddrawnSparkle
                  className="-left-6 -top-3 rotate-[35deg] text-black/80 hidden lg:block"
                  delay={0.8}
                  size={32}
                  rotation={270}
                />
                SastaDrive
                <HanddrawnSparkle
                  className="-right-8 -top-3 text-black/80 hidden lg:block"
                  delay={1}
                  size={32}
                  rotation={0}
                />
                {/* Decorative underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-4 text-[#D4FF00] -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 5 Q 50 10 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-tight z-10">
                Serverless file storage optimized{" "}
                <br className="hidden md:block" />
                for scale and{" "}
                <span className="relative inline-block font-black text-black z-10 px-1">
                  operational efficiency.
                  <span className="absolute inset-y-0 left-5 right-0 -z-10 block">
                    <AnimatePresence>
                      <MarkerSweep delay={0.2} />
                    </AnimatePresence>
                  </span>
                </span>
              </p>
            </div>

            {/* Cost Reduction Callout */}
            <div className="flex items-center gap-4 mt-2">
              <div className="w-1.5 h-12 bg-[#D4FF00] border border-black rounded-full" />
              <p className="text-lg md:text-xl font-bold text-gray-800">
                ~90% lower infrastructure cost{" "}
                <span className="font-medium text-gray-500">
                  through direct-to-bucket uploads.
                </span>
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {/* Stat 1 */}
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4FF00] flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group hover:-translate-y-1 transition-transform">
                  <TrendingDown
                    className="text-black group-hover:scale-110 transition-transform"
                    size={24}
                    strokeWidth={2.5}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-black tracking-tighter">
                    ~90%
                  </span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                    Infra Cost Reduction
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    vs app server bandwidth
                  </span>
                </div>
              </div>
              {/* Stat 2 */}
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4FF00] flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group hover:-translate-y-1 transition-transform">
                  <Cloud
                    className="text-black group-hover:scale-110 transition-transform"
                    size={24}
                    strokeWidth={2.5}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-black tracking-tighter">
                    100%
                  </span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                    Direct Upload Flow
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    bypassing app servers
                  </span>
                </div>
              </div>
              {/* Stat 3 */}
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4FF00] flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group hover:-translate-y-1 transition-transform">
                  <Zap
                    className="text-black group-hover:scale-110 transition-transform"
                    size={24}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-black tracking-tighter">
                    CDN
                  </span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                    Edge Cached Delivery
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    global asset caching
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Mockup Placeholder */}
          <div className="flex-1 w-full relative flex flex-col items-center lg:items-end justify-center pt-10">
            <div className="relative w-full max-w-[600px] flex flex-col items-center">
              {/* Glow Effect Behind Browser */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#D4FF00] opacity-20 blur-[100px] pointer-events-none" />

              {/* Live Product Preview Pill & Arrow */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-start pointer-events-none z-20 ml-8">
                <div className="bg-[#D4FF00] text-black text-[10px] font-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] tracking-widest uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                  Live Product Preview
                </div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 100 100"
                  className="opacity-70 mt-1 -ml-0 shrink-0"
                >
                  <path
                    d="M 10 15 Q 70 15 70 80"
                    fill="transparent"
                    stroke="black"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 55 65 L 70 85 L 85 65"
                    fill="transparent"
                    stroke="black"
                  strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* The Browser Window Container */}
              <a 
                href="https://sastadrive.in"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 w-full h-[400px] bg-white rounded-xl border border-gray-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden rotate-[-2deg] hover:rotate-0 transition-transform duration-500 group cursor-pointer"
              >
                {/* Browser Header */}
                <div className="h-10 w-full bg-white border-b border-gray-100 flex items-center px-4 shrink-0 relative">
                  {/* Mac Dots */}
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  {/* URL Bar */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5 bg-gray-100/80 rounded-md px-4 py-1">
                    <Lock size={10} className="text-gray-500" />
                    <span className="text-[10px] font-medium text-gray-600">sastadrive.in</span>
                  </div>
                </div>
                {/* Browser Body (Screenshot) */}
                <div className="w-full flex-1 relative bg-[#131415]">
                  <img
                    src="/sastadriveSS.png"
                    alt="SastaDrive dashboard showing the serverless file storage interface"
                    width="1200"
                    height="675"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* 2. ARCHITECTURE OVERVIEW */}
        <section className="bg-white rounded-3xl p-8 lg:p-10 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] flex flex-col gap-10 overflow-hidden relative">
          {/* Decorative Corner Tab */}
          <div className="absolute top-0 right-0 bg-[#D4FF00] border-l-2 border-b-2 border-black px-4 py-1 rounded-bl-xl font-black text-[10px] tracking-widest uppercase">
            System Flow
          </div>

          <h2 className="text-sm font-black tracking-[0.2em] text-black uppercase relative w-max">
            Architecture Overview
            <HanddrawnSparkle
              className="absolute -right-6 -top-2 text-black/60 hidden sm:block"
              delay={0.5}
              size={16}
              rotation={45}
            />
          </h2>

          <div className="w-full overflow-x-auto pb-8 -mb-8">
            <div className="min-w-[900px] flex justify-between items-start relative px-4 mt-2">
              {/* Node 1: Client */}
              <div className="flex flex-col items-center w-32 z-10 group cursor-default">
                <div className="w-16 h-16 rounded-[14px] border-2 border-black bg-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:translate-x-[4px] transition-all duration-200 relative overflow-hidden group/icon cursor-pointer">
                  <div className="absolute inset-0 bg-[#D4FF00] origin-bottom scale-y-0 group-hover/icon:scale-y-100 transition-transform duration-300 ease-out" />
                  <Laptop
                    className="text-black relative z-10 transition-transform duration-300 group-hover/icon:-rotate-12 group-hover/icon:scale-110"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-center flex flex-col mt-4 transition-transform duration-300 group-hover:translate-y-0.5">
                  <span className="text-[11px] font-black text-black uppercase tracking-wider mb-0.5">
                    Client
                  </span>
                  <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-tight">
                    Initiates
                    <br />
                    upload
                  </span>
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="flex-1 h-20 flex items-center justify-center relative px-2 z-0 group/arrow cursor-default">
                <div className="w-full h-[1.5px] bg-black absolute left-0 right-0 top-1/2 -translate-y-1/2" />
                <span className="text-[10px] font-black text-black bg-white px-2 py-0.5 z-10 border border-gray-100 shadow-sm rounded-md transition-all duration-300 group-hover/arrow:scale-110 group-hover/arrow:border-black group-hover/arrow:bg-[#D4FF00]">
                  ~120ms
                </span>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-black rotate-45 -ml-1 bg-transparent transition-transform duration-300 group-hover/arrow:translate-x-1" />
              </div>

              {/* Node 2: Signed URL */}
              <div className="flex flex-col items-center w-32 z-10 group cursor-default">
                <div className="w-16 h-16 rounded-[14px] border-2 border-black bg-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:translate-x-[4px] transition-all duration-200 relative overflow-hidden group/icon cursor-pointer">
                  <div className="absolute inset-0 bg-[#D4FF00] origin-bottom scale-y-0 group-hover/icon:scale-y-100 transition-transform duration-300 ease-out" />
                  <Key
                    className="text-black relative z-10 transition-transform duration-300 group-hover/icon:-rotate-12 group-hover/icon:scale-110"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-center flex flex-col mt-4 transition-transform duration-300 group-hover:translate-y-0.5">
                  <span className="text-[11px] font-black text-black uppercase tracking-wider mb-0.5">
                    Signed URL
                  </span>
                  <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-tight">
                    Generated via
                    <br />
                    Lambda
                  </span>
                </div>
              </div>

              {/* Arrow 2 */}
              <div className="flex-1 h-20 flex items-center justify-center relative px-2 z-0 group/arrow cursor-default">
                <div className="w-full h-[1.5px] bg-black absolute left-0 right-0 top-1/2 -translate-y-1/2" />
                <span className="text-[10px] font-black text-black bg-white px-2 py-0.5 z-10 border border-gray-100 shadow-sm rounded-md transition-all duration-300 group-hover/arrow:scale-110 group-hover/arrow:border-black group-hover/arrow:bg-[#D4FF00]">
                  ~150ms
                </span>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-black rotate-45 -ml-1 bg-transparent transition-transform duration-300 group-hover/arrow:translate-x-1" />
              </div>

              {/* Node 3: S3 Bucket */}
              <div className="flex flex-col items-center w-32 z-10 group cursor-default">
                <div className="w-16 h-16 rounded-[14px] border-2 border-black bg-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:translate-x-[4px] transition-all duration-200 relative overflow-hidden group/icon cursor-pointer">
                  <div className="absolute inset-0 bg-[#D4FF00] origin-bottom scale-y-0 group-hover/icon:scale-y-100 transition-transform duration-300 ease-out" />
                  <Database
                    className="text-black relative z-10 transition-transform duration-300 group-hover/icon:-rotate-12 group-hover/icon:scale-110"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-center flex flex-col mt-4 transition-transform duration-300 group-hover:translate-y-0.5">
                  <span className="text-[11px] font-black text-black uppercase tracking-wider mb-0.5">
                    S3 Bucket
                  </span>
                  <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-tight">
                    Direct object
                    <br />
                    upload
                  </span>
                </div>
              </div>

              {/* Arrow 3 */}
              <div className="flex-1 h-20 flex items-center justify-center relative px-2 z-0 group/arrow cursor-default">
                <div className="w-full h-[1.5px] bg-black absolute left-0 right-0 top-1/2 -translate-y-1/2" />
                <span className="text-[10px] font-black text-black bg-white px-2 py-0.5 z-10 border border-gray-100 shadow-sm rounded-md transition-all duration-300 group-hover/arrow:scale-110 group-hover/arrow:border-black group-hover/arrow:bg-[#D4FF00]">
                  ~200ms
                </span>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-black rotate-45 -ml-1 bg-transparent transition-transform duration-300 group-hover/arrow:translate-x-1" />
              </div>

              {/* Node 4: CloudFront CDN */}
              <div className="flex flex-col items-center w-32 z-10 group cursor-default">
                <div className="w-16 h-16 rounded-[14px] border-2 border-black bg-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:translate-x-[4px] transition-all duration-200 relative overflow-hidden group/icon cursor-pointer">
                  <div className="absolute inset-0 bg-[#D4FF00] origin-bottom scale-y-0 group-hover/icon:scale-y-100 transition-transform duration-300 ease-out" />
                  <Globe
                    className="text-black relative z-10 transition-transform duration-300 group-hover/icon:-rotate-12 group-hover/icon:scale-110"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-center flex flex-col mt-4 transition-transform duration-300 group-hover:translate-y-0.5">
                  <span className="text-[11px] font-black text-black uppercase tracking-wider mb-0.5">
                    CDN
                  </span>
                  <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-tight">
                    Edge cached
                    <br />
                    delivery
                  </span>
                </div>
              </div>

              {/* Arrow 4 */}
              <div className="flex-1 h-20 flex items-center justify-center relative px-2 z-0 group/arrow cursor-default">
                <div className="w-full h-[1.5px] bg-black absolute left-0 right-0 top-1/2 -translate-y-1/2" />
                <span className="text-[10px] font-black text-black bg-white px-2 py-0.5 z-10 border border-gray-100 shadow-sm rounded-md transition-all duration-300 group-hover/arrow:scale-110 group-hover/arrow:border-black group-hover/arrow:bg-[#D4FF00]">
                  ~50ms
                </span>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-black rotate-45 -ml-1 bg-transparent transition-transform duration-300 group-hover/arrow:translate-x-1" />
              </div>

              {/* Node 5: Global Users */}
              <div className="flex flex-col items-center w-32 z-10 group cursor-default">
                <div className="w-16 h-16 rounded-[14px] border-2 border-black bg-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:translate-x-[4px] transition-all duration-200 relative overflow-hidden group/icon cursor-pointer">
                  <div className="absolute inset-0 bg-[#D4FF00] origin-bottom scale-y-0 group-hover/icon:scale-y-100 transition-transform duration-300 ease-out" />
                  <Users
                    className="text-black relative z-10 transition-transform duration-300 group-hover/icon:-rotate-12 group-hover/icon:scale-110"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-center flex flex-col mt-4 transition-transform duration-300 group-hover:translate-y-0.5">
                  <span className="text-[11px] font-black text-black uppercase tracking-wider mb-0.5">
                    Users
                  </span>
                  <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-tight">
                    Low latency
                    <br />
                    access
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROBLEM / SOLUTION / DECISIONS */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_1.5fr] gap-6 items-stretch">
          {/* PROBLEM CARD */}
          <div className="bg-white rounded-3xl p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-red-500" />
            <div className="flex items-center justify-between mt-2">
              <h3 className="text-sm font-black text-red-500 uppercase tracking-widest">
                Problem
              </h3>
              <AlertTriangle className="text-red-500" size={24} />
            </div>
            <p className="text-gray-800 font-medium leading-relaxed">
              Traditional uploads route through application servers, creating severe bandwidth bottlenecks, expensive scaling constraints, and high latency during spikes.
            </p>
            <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <XCircle size={16} className="text-red-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-600">
                  High bandwidth usage
                </span>
              </div>
              <div className="flex items-center gap-3">
                <XCircle size={16} className="text-red-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-600">
                  Expensive scaling
                </span>
              </div>
              <div className="flex items-center gap-3">
                <XCircle size={16} className="text-red-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-600">
                  Server bottlenecks
                </span>
              </div>
              <div className="flex items-center gap-3">
                <XCircle size={16} className="text-red-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-600">
                  Slower delivery
                </span>
              </div>
            </div>
          </div>

          {/* ARROW Divider */}
          <div className="hidden lg:flex flex-col justify-center items-center">
            <div className="w-8 h-8 rounded-full bg-[#D4FF00] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center z-10 -mx-5 relative">
              <ArrowRight size={18} className="text-black" />
            </div>
          </div>

          {/* SOLUTION CARD */}
          <div className="bg-white rounded-3xl p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#D4FF00]" />
            <div className="flex items-center justify-between mt-2">
              <h3 className="text-sm font-black text-black uppercase tracking-widest">
                Solution
              </h3>
              <div className="bg-[#D4FF00] rounded-full p-1 border border-black">
                <CheckCircle2 className="text-black" size={20} />
              </div>
            </div>
            <p className="text-gray-800 font-medium leading-relaxed">
              SastaDrive implements direct-to-S3 uploads via pre-signed URLs, leveraging pay-per-request infra and CDN optimized delivery.
            </p>
            <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#D4FF00] border border-black flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={12} className="text-black" />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  Direct-to-S3 uploads
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#D4FF00] border border-black flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={12} className="text-black" />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  Auto-scaling infrastructure
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#D4FF00] border border-black flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={12} className="text-black" />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  Pay-per-request pricing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#D4FF00] border border-black flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={12} className="text-black" />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  CDN optimized delivery
                </span>
              </div>
            </div>
          </div>

          {/* KEY ENGINEERING DECISIONS */}
          <div className="bg-white rounded-3xl p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] flex flex-col gap-6 lg:ml-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#D4FF00] border-l-2 border-b-2 border-black px-3 py-1 rounded-bl-xl font-black text-[10px] tracking-widest uppercase">
              Decisions
            </div>

            <h3 className="text-sm font-black text-black uppercase tracking-widest mb-2 mt-2">
              Key Engineering Decisions
            </h3>

            <div className="flex flex-col gap-6">
              {/* Decision 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl border-2 border-black bg-[#D4FF00] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0">
                  <CloudUpload className="text-black" size={20} />
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <span className="font-bold text-gray-900">
                    Direct Object Uploads
                  </span>
                  <span className="text-sm font-medium text-gray-500 leading-snug">
                    Clients upload directly to S3 via temporary pre-signed URLs, bypassing application servers entirely.
                  </span>
                </div>
              </div>

              {/* Decision 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl border-2 border-black bg-[#D4FF00] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0">
                  <Cpu className="text-black" size={20} />
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <span className="font-bold text-gray-900">
                    Event-Driven Processing
                  </span>
                  <span className="text-sm font-medium text-gray-500 leading-snug">
                    Lambda functions handle auth, validation, and metadata asynchronously without idling.
                  </span>
                </div>
              </div>

              {/* Decision 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl border-2 border-black bg-[#D4FF00] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0">
                  <Globe className="text-black" size={20} />
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <span className="font-bold text-gray-900">Edge-Cached Delivery</span>
                  <span className="text-sm font-medium text-gray-500 leading-snug">
                    CloudFront caches assets globally, ensuring low latency access and minimizing S3 egress costs.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TECH STACK BOTTOM BAR */}
        <section className=" rounded-2xl p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <span className="text-xs font-black text-black uppercase tracking-[0.2em] whitespace-nowrap bg-[#D4FF00] px-3 py-1 rounded-full border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
            Core Infrastructure
          </span>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-8">
            <div className="flex items-center gap-2">
              <Cpu className="text-black" size={20} />
              <span className="text-sm font-bold text-black">AWS Lambda</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="text-black" size={20} />
              <span className="text-sm font-bold text-black">Blackblaze</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="text-black" size={20} />
              <span className="text-sm font-bold text-black">CloudFront</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="text-black" size={20} />
              <span className="text-sm font-bold text-black">Redis</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-black" size={20} />
              <span className="text-sm font-bold text-black">API Gateway</span>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default SastaDriveCaseStudy;
