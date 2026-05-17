"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

interface Particle {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  randomXOffset: number;
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll inside this specific section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yDuneBack = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yDuneMid = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const yDuneFront = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Floating sand grains - Client-side safe initialization
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 8 + 8,
      randomXOffset: Math.random() * 40 - 20,
    }));
    setParticles(generated);
  }, []);

  const scrollNext = () => {
    const el = document.getElementById("location");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="parallax-section bg-gradient-to-b from-[#1c0f08] via-[#0b0704] to-[#070402] relative py-20 flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background Image Overlay (First Provided Image) */}
      <div className="absolute inset-0 z-0 opacity-10 overflow-hidden">
        <Image
          src="/img/WhatsApp Image 2026-05-17 at 10.47.06.jpeg"
          alt="Sahara Desert Backdrop"
          fill
          priority
          className="object-cover object-top filter grayscale contrast-125"
        />
      </div>

      {/* Floating Sand Grains */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-sahara-gold/40 shadow-[0_0_6px_rgba(212,163,115,0.8)]"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [-10, -120, -10],
              x: [0, p.randomXOffset, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 desert-grain-overlay opacity-25 pointer-events-none z-10" />

      {/* Main Grid: split layout for visual presentation */}
      <div className="w-[90%] max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-20 mt-[-4vh]">

        {/* Left Side: Speech & Start Button */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <span className="text-sahara-gold font-bold uppercase tracking-[0.35em] text-sm md:text-base mb-4 block text-shadow-cinematic">
            WELCOME TO MY PRESENTATION
          </span>

          <h1 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl tracking-[0.06em] uppercase text-shadow-cinematic bg-gradient-to-b from-white via-sahara-sand to-sahara-gold bg-clip-text text-transparent mb-8 select-none leading-none">
            Mauritania
          </h1>

          {/* Speech Text Box */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl max-w-3xl bg-black/50 backdrop-blur-md mb-10 text-left">
            <p className="text-lg md:text-1xl lg:text-2xl leading-relaxed text-white font-medium tracking-wide select-text">
              "Today I have to talk about Mauritania. It is an interesting country in West Africa, and 90% of its territory is the Sahara Desert."
            </p>
          </div>

          <button
            onClick={scrollNext}
            className="cursor-pointer group flex items-center gap-2 border border-sahara-gold/20 hover:border-sahara-gold bg-black/40 hover:bg-sahara-gold/10 text-sahara-gold hover:text-white px-6 py-3 rounded-full transition-all duration-300 focus:outline-none"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">Start Slides</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Right Side: Hero Visual Card (Second Provided Image, Fully Visible) */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="w-full max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden glass-panel p-2 border border-white/10 shadow-2xl relative">
            <div className="w-full h-full relative rounded-2xl overflow-hidden">
              <Image
                src="/img/WhatsApp Image 2026-05-17 at 10.47.07.jpeg"
                alt="Mauritania Sahara Landscape Visual"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* PARALLAX DUNES LAYERS */}

      {/* 1. Dune Back */}
      <motion.div
        style={{ y: yDuneBack }}
        className="absolute bottom-0 left-0 right-0 z-10 w-full pointer-events-none"
      >
        <svg viewBox="0 0 1440 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1200px] translate-y-[2px]">
          <path d="M0 160 C320 220 720 80 1080 180 C1240 220 1360 210 1440 190 V280 H0 Z" fill="#2d170a" />
        </svg>
      </motion.div>

      {/* 2. Dune Mid */}
      <motion.div
        style={{ y: yDuneMid }}
        className="absolute bottom-0 left-0 right-0 z-20 w-full pointer-events-none"
      >
        <svg viewBox="0 0 1440 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1200px] translate-y-[2px]">
          <path d="M0 100 C360 30 680 150 1020 70 C1200 30 1340 70 1440 90 V220 H0 Z" fill="#1c0f08" />
        </svg>
      </motion.div>

      {/* 3. Dune Front */}
      <motion.div
        style={{ y: yDuneFront }}
        className="absolute bottom-0 left-0 right-0 z-30 w-full pointer-events-none"
      >
        <svg viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1200px] translate-y-[2px]">
          <path d="M0 60 C400 130 840 20 1440 110 V160 H0 Z" fill="#0b0704" />
        </svg>
      </motion.div>
    </section>
  );
}
