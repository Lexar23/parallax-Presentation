"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Moon, Sparkles } from "lucide-react";
import Image from "next/image";

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
}

export default function ReligionSection() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Scroll mapping
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yStars = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const yMoon = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  // Stars - Client-side safe initialization
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 2,
    }));
    setStars(generated);
  }, []);

  return (
    <section 
      id="religion" 
      ref={ref}
      className="parallax-section bg-gradient-to-b from-[#0b0704] via-[#04060e] to-[#010103] relative py-20 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Stars layer */}
      <motion.div 
        style={{ y: yStars }}
        className="absolute inset-0 w-full h-[120%] pointer-events-none z-0"
      >
        {stars.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </motion.div>

      <div className="absolute inset-0 desert-grain-overlay opacity-10 pointer-events-none z-10" />

      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[50vh] bg-mauri-green/5 blur-[120px] rounded-full pointer-events-none z-10" />
      <div className="absolute top-1/3 left-1/3 w-[250px] h-[250px] bg-mauri-gold/5 blur-[90px] rounded-full pointer-events-none z-10" />

      <div className="w-[90%] max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-20">
        
        {/* Left Column: Visual Showcase (Crescent & Image) */}
        <div className="lg:col-span-5 relative flex flex-col justify-center items-center min-h-[300px] md:min-h-[360px] order-2 lg:order-1">
          {/* Glowing crescent */}
          <motion.div 
            style={{ y: yMoon }}
            className="mb-4 relative flex justify-center items-center z-20"
          >
            <div className="absolute w-20 h-20 bg-mauri-gold/15 blur-[25px] rounded-full animate-pulse-slow" />
            <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 filter drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              <g className="origin-center transform scale-[0.88] translate-x-[6px] translate-y-[6px]">
                <path d="M 33,35 C 38,55 58,55 64,35 C 59,45 38,45 33,35 Z" fill="#ffd700" />
                <polygon points="48,12 50,18 56,18 51,21 53,27 48,23 43,27 45,21 40,18 46,18" fill="#ffd700" />
              </g>
            </svg>
          </motion.div>

          {/* Real Religion/Culture Image Frame (Eighth Provided Image) */}
          <motion.div 
            style={{ y: yImage }}
            className="w-[70%] max-w-[240px] aspect-[4/3] rounded-2xl overflow-hidden glass-panel p-1 border border-white/10 shadow-2xl z-10 pointer-events-none"
          >
            <div className="w-full h-full relative rounded-xl overflow-hidden">
              <Image 
                src="/img/WhatsApp Image 2026-05-17 at 10.47.07 (6).jpeg"
                alt="Mauritanian culture and religion showcase"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Narrative Content */}
        <motion.div 
          style={{ y: yContent }}
          className="lg:col-span-7 flex flex-col justify-center text-left order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 text-mauri-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-mauri-gold" />
            RELIGION
          </div>

          <h2 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl uppercase text-white mb-8 leading-tight">
            Faith & <span className="bg-gradient-to-r from-white via-sahara-sand to-mauri-gold bg-clip-text text-transparent">Daily Life</span>
          </h2>

          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-serif font-black text-7xl md:text-9xl tracking-tight text-white block bg-gradient-to-b from-white via-sahara-sand to-mauri-gold bg-clip-text text-transparent leading-none">
              99%
            </span>
            <span className="text-zinc-400 text-sm uppercase tracking-wider font-bold">of the population is Muslim</span>
          </div>

          {/* Speech Box */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl mb-8 text-left">
            <p className="text-white text-lg md:text-2xl lg:text-3xl leading-relaxed font-medium select-text">
              "99% of the population is Muslim. Islam is very important in daily life."
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-[9px] font-bold uppercase tracking-widest text-zinc-400">
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/5 bg-white/[0.01]">
              <Moon className="w-3 h-3 text-mauri-gold" /> Islamic Republic
            </span>
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/5 bg-white/[0.01]">
              <Moon className="w-3 h-3 text-mauri-gold" /> Values & Respect
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
