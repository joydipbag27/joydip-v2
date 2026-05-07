import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  Zap,
  Image as ImageIcon,
  Maximize,
  Download,
  RotateCcw,
  ArrowRight,
  TrendingDown,
  Monitor,
  FileCode,
  CheckCircle2,
  Settings2,
  Box,
} from "lucide-react";
import { MarkerSweep } from "./Hero";

const ThumbnailLab = ({ bgColor = "#ffffff" }) => {
  const [image, setImage] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [step, setStep] = useState(0); // 0: idle, 1: uploaded, 2: processing, 3: completed
  const [metrics, setMetrics] = useState({
    original: 0,
    optimized: 0,
    reduction: 0,
  });
  const [isSimulating, setIsSimulating] = useState(false);

  const fileInputRef = useRef(null);
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setImage({
          url: event.target.result,
          width: img.width,
          height: img.height,
          size: (file.size / 1024 / 1024).toFixed(2) + " MB",
          rawSize: file.size,
          name: file.name,
        });
        setStep(1);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const generateThumbnail = async () => {
    if (!image) return;
    setIsSimulating(true);
    setStep(2);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      const size = 300;
      canvas.width = size;
      canvas.height = size;

      // Center crop and resize
      const aspect = img.width / img.height;
      let sx, sy, sw, sh;
      if (aspect > 1) {
        sh = img.height;
        sw = img.height;
        sx = (img.width - sw) / 2;
        sy = 0;
      } else {
        sw = img.width;
        sh = img.width;
        sx = 0;
        sy = (img.height - sh) / 2;
      }

      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, size, size);

      canvas.toBlob(
        (blob) => {
          const thumbUrl = URL.createObjectURL(blob);
          const thumbSize = blob.size;

          setThumbnail(thumbUrl);
          setMetrics({
            original: image.rawSize,
            optimized: thumbSize,
            reduction: ((1 - thumbSize / image.rawSize) * 100).toFixed(1),
          });
          setStep(3);
          setIsSimulating(false);
        },
        "image/jpeg",
        0.8,
      );
    };
    img.src = image.url;
  };

  const handleDownload = () => {
    if (!thumbnail) return;
    const link = document.createElement("a");
    link.href = thumbnail;
    link.download = "thumbnail.jpg";
    link.click();
  };

  const reset = () => {
    setImage(null);
    setThumbnail(null);
    setStep(0);
    setMetrics({ original: 0, optimized: 0, reduction: 0 });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div
      className="w-full min-h-full flex items-center justify-center px-4 sm:px-6 md:px-12 relative overflow-hidden py-6 sm:py-12 lg:py-0"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 px-3 py-1.5 border-2 border-black rounded-xl w-fit bg-white text-[10px] font-black tracking-widest text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] border border-black" />
              Engineering Lab
            </div>

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black leading-[0.95] select-none uppercase relative z-10">
                Client-Side <br />
                <span className="relative inline-block z-10 px-1">
                  Thumbnails
                  <span className="absolute inset-y-0 left-0 right-0 -z-10 block">
                    <AnimatePresence>
                      <MarkerSweep delay={0.6} />
                    </AnimatePresence>
                  </span>
                </span>
              </h2>
            </div>

            <p className="text-[14px] text-gray-700 font-bold max-w-sm leading-tight italic mt-2">
              "Not all processing needs a server. Sometimes the browser is
              enough."
            </p>
          </div>

          <div className="relative mt-2 hidden lg:block">
            <div className="p-4 bg-[#fcfcfc] border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3.5 max-w-sm relative overflow-hidden">
              <h3 className="text-[10px] font-black text-black flex items-center gap-2 uppercase tracking-wider">
                How it works
              </h3>
              <ul className="flex flex-col gap-2.5">
                {[
                  {
                    text: "Upload Image",
                    sub: "Select an image from device",
                    icon: <Upload size={14} />,
                  },
                  {
                    text: "Process in Browser",
                    sub: "Draw on canvas, resize it",
                    icon: <Settings2 size={14} />,
                  },
                  {
                    text: "Convert to Blob",
                    sub: "Create a Blob from the canvas",
                    icon: <FileCode size={14} />,
                  },
                  {
                    text: "Preview & Download",
                    sub: "Preview result or download",
                    icon: <ImageIcon size={14} />,
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-md border-2 border-black flex items-center justify-center text-[10px] font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-0.5 transition-colors ${step > i ? "bg-[#D4FF00] text-black" : "bg-white text-gray-300"}`}
                    >
                      {i + 1}
                    </span>
                    <div className="flex flex-col">
                      <span
                        className={`text-[10px] font-black uppercase tracking-tight ${step > i ? "text-black" : "text-gray-400"}`}
                      >
                        {item.text}
                      </span>
                      <span className="text-[8px] font-bold text-gray-400 uppercase leading-none mt-0.5">
                        {item.sub}
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
            className="bg-white p-3 md:p-5 rounded-[2.5rem] border-[3px] border-black relative overflow-hidden w-full flex flex-col h-auto lg:h-[32rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)]"
          >
            {/* Simulation Header */}
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between mb-8">
              <div className="flex items-center justify-between sm:justify-start gap-3 bg-gray-50 border-2 border-black/5 px-3 py-1.5 rounded-full w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <Monitor size={14} className="text-black" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/40">
                    State
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
                  <span
                    className={`text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wide transition-colors ${step >= 1 ? "bg-[#D4FF00] text-black" : "bg-gray-200 text-gray-400"}`}
                  >
                    {step === 0
                      ? "Ready"
                      : step === 1
                        ? "Loaded"
                        : step === 2
                          ? "Processing"
                          : "Done"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 justify-between sm:justify-start w-full sm:w-auto overflow-x-auto no-scrollbar py-1">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleUpload}
                  className="hidden"
                  accept="image/*"
                  aria-label="Upload image for client-side thumbnail experiment"
                />
                <ControlButton
                  icon={<Upload size={14} />}
                  label="Upload"
                  onClick={() => fileInputRef.current.click()}
                  active={step === 0}
                  highlight
                />
                <ControlButton
                  icon={<Zap size={14} />}
                  label="Generate"
                  onClick={generateThumbnail}
                  active={step === 1}
                  disabled={step !== 1 || isSimulating}
                />
                <ControlButton
                  icon={<Download size={14} />}
                  label="Download"
                  onClick={handleDownload}
                  active={step === 3}
                  disabled={step !== 3}
                />
                <button
                  onClick={reset}
                  aria-label="Reset thumbnail experiment"
                  className="p-2 border-2 border-black rounded-xl bg-white hover:bg-gray-50 active:translate-x-[1px] active:translate-y-[1px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0"
                >
                  <RotateCcw size={14} className="text-black" />
                </button>
              </div>
            </div>

            {/* Architecture Flow */}
            <div className="flex justify-between px-2 sm:px-12 mb-6 sm:mb-10 relative">
              <div className="absolute inset-x-2 sm:inset-x-12 top-5 h-[2px] border-t-2 border-dashed border-gray-100 -z-10" />
              <FlowStep
                icon={<Monitor size={18} />}
                label="User"
                sub="Selects image"
                active={step >= 0}
              />
              <FlowStep
                icon={<ImageIcon size={18} />}
                label="Browser"
                sub="Reads file locally"
                active={step >= 1}
              />
              <FlowStep
                icon={<Settings2 size={18} />}
                label="Canvas"
                sub="Resize & draw"
                active={step >= 2}
                highlight={step === 2}
              />
              <FlowStep
                icon={<Box size={18} />}
                label="Blob"
                sub="Create object URL"
                active={step >= 3}
                highlight={step === 3}
              />
              <FlowStep
                icon={<Maximize size={18} />}
                label="Preview"
                sub="Show thumbnail"
                active={step >= 3}
              />
            </div>

            {/* Main Visualizer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-grow items-start min-h-0">
              {/* Original Image */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="flex items-center justify-center px-1">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-black/40 text-center">
                    Original Image
                  </h4>
                </div>
                <div className="h-48 bg-gray-50 border-2 border-black/5 rounded-2xl relative overflow-hidden flex items-center justify-center group/img">
                  {image ? (
                    <>
                      <img
                        src={image.url}
                        className="w-full h-full object-cover"
                        alt={`Original uploaded image preview: ${image.name}`}
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                        <div className="text-center text-white">
                          <p className="text-[10px] font-black uppercase tracking-widest">
                            {image.width} x {image.height}
                          </p>
                          <p className="text-[18px] font-black">{image.size}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center gap-2 opacity-20">
                      <Upload size={32} />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        Awaiting Upload
                      </span>
                    </div>
                  )}
                </div>
                <div className="bg-white border-2 border-black/5 rounded-xl px-4 py-2 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase">
                    <ImageIcon size={12} className="text-gray-300" />
                    <span className="text-gray-400">
                      {image
                        ? `${image.width} × ${image.height}`
                        : "4000 × 3000"}
                    </span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-gray-200" />
                  <span className="text-[10px] font-black text-gray-400">
                    {image ? image.size : "2.42 MB"}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-gray-200" />
                  <span className="text-[10px] font-black text-gray-400">
                    JPG
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="lg:col-span-1 hidden lg:flex flex-col pt-7 items-center justify-start h-48">
                <div className="flex-grow flex items-center justify-center">
                  <div
                    className={`w-10 h-10 rounded-full border-2 border-black flex items-center justify-center transition-all ${step >= 3 ? "bg-[#D4FF00] scale-110 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "bg-white opacity-20"}`}
                  >
                    <ArrowRight size={20} className="text-black" />
                  </div>
                </div>
              </div>

              {/* Thumbnail Preview */}
              <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-black/40 text-center">
                    Thumbnail Preview
                  </h4>
                  <div className="h-48 bg-gray-50 border-2 border-black/5 rounded-2xl relative overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {step === 2 ? (
                        <motion.div
                          key="processing"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col items-center gap-2"
                        >
                          <div className="w-8 h-8 border-4 border-black/5 border-t-[#D4FF00] rounded-full animate-spin" />
                          <span className="text-[8px] font-black uppercase tracking-widest text-black/40">
                            Processing...
                          </span>
                        </motion.div>
                      ) : thumbnail ? (
                        <motion.img
                          key="thumbnail"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          src={thumbnail}
                          className="w-[80%] h-[80%] object-cover rounded-lg shadow-xl"
                          alt="Generated square thumbnail preview"
                          decoding="async"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-2 opacity-10">
                          <Monitor size={32} />
                          <span className="text-[10px] font-black uppercase tracking-widest">
                            Waiting
                          </span>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="bg-white border-2 border-black/5 rounded-xl px-4 py-2 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase">
                      <ImageIcon size={12} className="text-gray-300" />
                      <span className="text-gray-400">
                        {thumbnail ? "300 × 300" : "--- × ---"}
                      </span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-200" />
                    <span className="text-[10px] font-black text-gray-400">
                      {thumbnail
                        ? (metrics.optimized / 1024).toFixed(0) + " KB"
                        : "--- KB"}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-gray-200" />
                    <span className="text-[10px] font-black text-gray-400">
                      JPG
                    </span>
                  </div>
                </div>

                {/* Results/Metrics */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-black/40 text-center">
                    Result
                  </h4>
                  <div className="bg-[#fcfcfc] border-2 border-black rounded-xl p-2.5 flex flex-col gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black text-black/40 uppercase tracking-widest leading-none">
                        Reduction
                      </span>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="text-2xl font-black text-black tracking-tighter">
                          {step === 3 ? metrics.reduction : "0.0"}%
                        </span>
                        <TrendingDown
                          size={13}
                          className="text-[#D4FF00] rounded-full bg-black h-5 w-5 p-1 "
                          strokeWidth={3}
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <MetricRow
                        label="Original"
                        value={step >= 1 ? image.size : "2.42 MB"}
                      />
                      <MetricRow
                        label="Thumbnail"
                        value={
                          step === 3
                            ? (metrics.optimized / 1024).toFixed(0) + " KB"
                            : "--- KB"
                        }
                      />
                      <MetricRow
                        label="Saved"
                        value={
                          step === 3
                            ? (
                                (metrics.original - metrics.optimized) /
                                1024 /
                                1024
                              ).toFixed(2) + " MB"
                            : "--- MB"
                        }
                        highlight
                      />
                    </div>

                    <div className="mt-auto pt-1.5 border-t border-black/5">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#D4FF00] flex items-center justify-center shrink-0">
                          <CheckCircle2
                            size={9}
                            className="text-black"
                            strokeWidth={3}
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[8px] font-black uppercase text-black leading-none">
                            In-browser
                          </span>
                          <span className="text-[7px] font-bold text-gray-400 uppercase leading-none mt-0.5">
                            No server. No cost.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FlowStep = ({ icon, label, sub, active, highlight }) => (
  <div className="flex flex-col items-center gap-2 relative z-10">
    <div
      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-300 relative ${active ? "border-black bg-white scale-110 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "border-black/5 bg-white text-black/10"} ${highlight ? "bg-[#D4FF00] !border-black" : ""}`}
    >
      {React.cloneElement(icon, { size: 16 })}
      {active && !highlight && (
        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#D4FF00] border-2 border-black flex items-center justify-center">
          <CheckCircle2 size={10} className="text-black" strokeWidth={3} />
        </div>
      )}
    </div>
    <div className="flex flex-col items-center">
      <span
        className={`text-[8px] sm:text-[10px] font-black uppercase tracking-tight transition-colors ${active ? "text-black" : "text-black/20"}`}
      >
        {label}
      </span>
      <span className="text-[7px] sm:text-[8px] font-bold text-gray-400 uppercase leading-none mt-0.5 hidden sm:block">
        {sub}
      </span>
    </div>
  </div>
);

const ControlButton = ({
  icon,
  label,
  onClick,
  active,
  disabled,
  highlight,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest border-2 border-black transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none disabled:opacity-30 disabled:grayscale disabled:shadow-none disabled:scale-95 ${highlight && active ? "bg-[#D4FF00] text-black" : "bg-white text-black hover:bg-gray-50"}`}
  >
    {icon}
    {label}
  </button>
);

const MetricRow = ({ label, value, highlight }) => (
  <div className="flex items-center justify-between">
    <span className="text-[9px] font-black uppercase text-gray-400 tracking-tight">
      {label}
    </span>
    <span
      className={`text-[11px] font-black uppercase ${highlight ? "text-[#D4FF00] brightness-90" : "text-black"}`}
    >
      {value}
    </span>
  </div>
);

export default ThumbnailLab;
