"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, Eye, ShieldAlert } from "lucide-react";
import Image from "next/image";

export default function FlagSection() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Scroll tracking for parallax depth
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yFlag = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const yPhoto = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section 
      id="flag" 
      ref={ref}
      className="parallax-section bg-[#070402] relative py-20 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="absolute inset-0 desert-grain-overlay opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-mauri-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] bg-mauri-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-[90%] max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Side: Parallax Graphic Showcase */}
        <div className="lg:col-span-6 relative flex justify-center items-center min-h-[300px] md:min-h-[400px] order-2 lg:order-1">
          {/* Vector Flag */}
          <motion.div 
            style={{ y: yFlag }}
            className="w-[75%] max-w-[320px] aspect-[3/2] relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 p-0.5 bg-gradient-to-br from-white/10 via-transparent to-white/5 animate-float z-10"
          >
            <svg 
              viewBox="0 0 900 600" 
              className="w-full h-full rounded-[14px] object-cover filter brightness-[1.08] contrast-[1.01]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Red Top Stripe */}
              <rect width="900" height="100" fill="#d2143a" />
              
              {/* Green Middle Field */}
              <rect y="100" width="900" height="400" fill="#006b3c" />
              
              {/* Red Bottom Stripe */}
              <rect y="500" width="900" height="100" fill="#d2143a" />

              {/* Golden Crescent and Star */}
              <g className="origin-center transform scale-[0.88] translate-x-[50px] translate-y-[35px]">
                <polygon 
                  points="450,195 464,237 508,237 473,263 486,305 450,279 414,305 427,263 392,237 436,237" 
                  fill="#ffd700" 
                  filter="url(#glow-filter-simple-flag)"
                />
                <path 
                  d="M 330,300 C 375,410 525,410 570,300 C 530,355 370,355 330,300 Z" 
                  fill="#ffd700" 
                  filter="url(#glow-filter-simple-flag)"
                />
              </g>

              {/* Glow filter */}
              <defs>
                <filter id="glow-filter-simple-flag" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
          </motion.div>

          {/* Real Photo Flag Frame (Third Provided Image) */}
          <motion.div 
            style={{ y: yPhoto }}
            className="absolute bottom-[-15px] right-[5%] w-[130px] md:w-[180px] aspect-[4/3] rounded-2xl overflow-hidden glass-panel p-1 border border-white/10 shadow-2xl z-20 -rotate-6 pointer-events-none"
          >
            <div className="w-full h-full relative rounded-xl overflow-hidden">
              <Image 
                src="/img/WhatsApp Image 2026-05-17 at 10.47.07 (1).jpeg"
                alt="Mauritanian landscape representation"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Symbolism Text Content */}
        <motion.div 
          style={{ y: yText }}
          className="lg:col-span-6 flex flex-col justify-center text-left order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 text-mauri-gold uppercase tracking-[0.25em] text-xs font-semibold mb-4">
            <Compass className="w-4 h-4 text-mauri-gold" />
            THE FLAG
          </div>

          <h2 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase text-white mb-8 leading-tight">
            Colors & <span className="bg-gradient-to-r from-mauri-green via-mauri-gold to-[#d2143a] bg-clip-text text-transparent">Symbolism</span>
          </h2>

          {/* Speech Text Box */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl mb-10">
            <p className="text-white text-lg md:text-2xl lg:text-3xl leading-relaxed font-medium select-text">
              "The flag is green, with a yellow crescent and star. Green represents Islam and nature."
            </p>
          </div>

          {/* Symbolism Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Green */}
            <div className="p-4 rounded-xl bg-white/[0.02] border-l-4 border-l-mauri-green">
              <div className="w-7 h-7 rounded-lg bg-mauri-green/20 flex items-center justify-center text-mauri-green mb-2.5">
                <Eye className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-white font-bold text-[11px] uppercase tracking-wider">Green</h4>
              <p className="text-zinc-400 text-[10px] mt-1.5 leading-relaxed font-light">
                Represents Islam, nature, oasis life, and prosperity.
              </p>
            </div>

            {/* Gold */}
            <div className="p-4 rounded-xl bg-white/[0.02] border-l-4 border-l-mauri-gold">
              <div className="w-7 h-7 rounded-lg bg-mauri-gold/20 flex items-center justify-center text-mauri-gold mb-2.5">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-white font-bold text-[11px] uppercase tracking-wider">Yellow</h4>
              <p className="text-zinc-400 text-[10px] mt-1.5 leading-relaxed font-light">
                Represents Sahara sand, guiding starlight, and faith.
              </p>
            </div>

            {/* Red */}
            <div className="p-4 rounded-xl bg-white/[0.02] border-l-4 border-l-[#d2143a]">
              <div className="w-7 h-7 rounded-lg bg-[#d2143a]/20 flex items-center justify-center text-[#d2143a] mb-2.5">
                <ShieldAlert className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-white font-bold text-[11px] uppercase tracking-wider">Red Stripes</h4>
              <p className="text-zinc-400 text-[10px] mt-1.5 leading-relaxed font-light">
                Honors national heroes and independence efforts.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
