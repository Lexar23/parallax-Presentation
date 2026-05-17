"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AlertCircle, Train } from "lucide-react";
import Image from "next/image";

export default function IronOreTrainSection() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track scroll for active parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Vertical parallax transforms
  const ySky = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yDunesBack = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const yTrackAndTrain = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const yDunesFront = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);

  // Horizontal train movement
  const xTrain = useTransform(
    scrollYProgress, 
    [0.1, 0.9], 
    ["100vw", "-1200px"]
  );

  return (
    <section 
      id="iron-train" 
      ref={ref}
      className="parallax-section bg-[#070402] relative py-20 flex flex-col justify-between items-center overflow-hidden animate-dune"
      style={{ minHeight: "105vh" }}
    >
      {/* Sky & backdunes */}
      <motion.div 
        style={{ y: ySky }} 
        className="absolute inset-0 bg-gradient-to-b from-[#010103] via-[#1c0f08] to-[#2f1b0c] z-0 pointer-events-none"
      />
      
      <div className="absolute inset-0 desert-grain-overlay opacity-25 pointer-events-none z-10" />

      {/* Back Dunes */}
      <motion.div 
        style={{ y: yDunesBack }}
        className="absolute bottom-[35%] left-0 right-0 z-10 w-full pointer-events-none"
      >
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1200px] translate-y-2">
          <path d="M0 120 C400 60 800 160 1200 90 C1320 69 1380 90 1440 100 V200 H0 Z" fill="#201108" />
        </svg>
      </motion.div>

      {/* Main Grid: Text & Real Photo Card */}
      <div className="w-[90%] max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start z-30 pt-16">
        
        {/* Left Side: Text and speech */}
        <motion.div 
          style={{ y: yText }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <div className="inline-flex items-center gap-2 text-sahara-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            <Train className="w-3.5 h-3.5 text-sahara-gold animate-bounce" />
            THE IRON ORE TRAIN
          </div>

          <h2 className="font-serif font-black text-5xl md:text-7xl tracking-wide uppercase text-white mb-8 leading-tight text-shadow-cinematic">
            The Giant <span className="bg-gradient-to-r from-sahara-gold via-mauri-gold to-[#d2143a] bg-clip-text text-transparent">Desert Train</span>
          </h2>

          {/* Speech Box */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 bg-black/50 backdrop-blur-md shadow-2xl mb-8 text-left max-w-3xl">
            <p className="text-white text-lg md:text-2xl lg:text-3xl leading-relaxed font-medium select-text">
              "This is the longest and heaviest train in the world! It crosses the desert transporting iron ore."
            </p>
          </div>

          <div className="flex gap-3 text-[9px] font-bold uppercase tracking-widest text-zinc-400">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/5 bg-black/40 backdrop-blur-sm">
              <AlertCircle className="w-3 h-3 text-sahara-gold" /> Zouérat to Nouadhibou
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/5 bg-black/40 backdrop-blur-sm">
              <AlertCircle className="w-3 h-3 text-sahara-gold" /> 2.5 Kilometers Long
            </span>
          </div>
        </motion.div>

        {/* Right Side: Floating Real Train Card (Ninth Provided Image) */}
        <motion.div 
          style={{ y: yImage }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-[340px] aspect-[4/3] rounded-3xl overflow-hidden glass-panel p-1.5 border border-white/10 shadow-2xl rotate-3">
            <div className="w-full h-full relative rounded-2xl overflow-hidden">
              <Image 
                src="/img/WhatsApp Image 2026-05-17 at 10.47.33.jpeg"
                alt="Sahara Desert Iron Ore Train"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Train & Track System */}
      <motion.div 
        style={{ y: yTrackAndTrain }}
        className="absolute bottom-[10%] left-0 right-0 w-full z-20 pointer-events-none flex flex-col justify-end"
      >
        {/* Horizontal Moving Train Container */}
        <motion.div 
          style={{ x: xTrain }}
          className="w-fit flex items-end translate-y-3 relative z-30"
        >
          {/* THE SVG TRAIN */}
          <svg 
            viewBox="0 0 1600 80" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-[1600px] drop-shadow-[0_8px_8px_rgba(0,0,0,0.7)]"
          >
            {/* LOCOMOTIVE */}
            <g transform="translate(0, 20)">
              <rect x="5" y="10" width="80" height="35" rx="3" fill="#3a3a3c" />
              <rect x="10" y="5" width="45" height="10" fill="#3a3a3c" />
              <rect x="65" y="15" width="23" height="30" fill="#1c1c1e" />
              <rect x="70" y="20" width="8" height="8" fill="#ffd700" opacity="0.8" />
              <polygon points="88,22 180,10 180,45 88,27" fill="url(#light-beam-b1-img)" opacity="0.25" />
              <circle cx="20" cy="48" r="6" fill="#1c1c1e" stroke="#8e8e93" strokeWidth="1.5" />
              <circle cx="38" cy="48" r="6" fill="#1c1c1e" stroke="#8e8e93" strokeWidth="1.5" />
              <circle cx="68" cy="48" r="6" fill="#1c1c1e" stroke="#8e8e93" strokeWidth="1.5" />
              <circle cx="82" cy="48" r="6" fill="#1c1c1e" stroke="#8e8e93" strokeWidth="1.5" />
              <rect x="85" y="40" width="10" height="4" fill="#555" />
            </g>

            {/* ORE CARS */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((idx) => {
              const startX = 95 + idx * 90;
              return (
                <g key={idx} transform={`translate(${startX}, 30)`}>
                  <rect x="-8" y="25" width="10" height="3" fill="#555" />
                  <polygon points="0,5 5,30 75,30 80,5" fill="#4a2c11" stroke="#2b1a0a" strokeWidth="1" />
                  <path d="M5,5 Q20,-12 40,-5 Q60,-15 75,5 Z" fill="#2c3539" />
                  <circle cx="18" cy="38" r="5" fill="#1c1c1e" stroke="#555" strokeWidth="1" />
                  <circle cx="28" cy="38" r="5" fill="#1c1c1e" stroke="#555" strokeWidth="1" />
                  <circle cx="52" cy="38" r="5" fill="#1c1c1e" stroke="#555" strokeWidth="1" />
                  <circle cx="62" cy="38" r="5" fill="#1c1c1e" stroke="#555" strokeWidth="1" />
                </g>
              );
            })}

            {/* Gradient definition for headlights */}
            <defs>
              <linearGradient id="light-beam-b1-img" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#ffd700" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Railway Track */}
        <div className="w-full h-[5px] bg-gradient-to-r from-[#222] via-[#555] to-[#222] relative z-20">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0px,transparent_6px,#111_6px,#111_9px)] bg-[size:16px_100%]" />
        </div>
      </motion.div>

      {/* Foreground Dunes */}
      <motion.div 
        style={{ y: yDunesFront }}
        className="absolute bottom-0 left-0 right-0 z-30 w-full pointer-events-none"
      >
        <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1200px] translate-y-4">
          <path d="M0 80 C480 180 960 30 1440 120 V180 H0 Z" fill="#070402" />
        </svg>
      </motion.div>
    </section>
  );
}
