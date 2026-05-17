"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, Anchor, Gem, Globe, Trees, Award } from "lucide-react";
import Image from "next/image";

export default function EconomyEducationSection() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Scroll mapping
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  // Economy products
  const products = [
    { name: "Fish", icon: <Anchor className="w-4 h-4 text-cyan-400" />, desc: "Rich waters on the Atlantic Ocean coast." },
    { name: "Iron", icon: <Award className="w-4 h-4 text-amber-500" />, desc: "Transported by the heavy desert train." },
    { name: "Gold", icon: <Gem className="w-4 h-4 text-yellow-300" />, desc: "Mined from the huge Tasiast gold mine." },
    { name: "Livestock", icon: <Globe className="w-4 h-4 text-emerald-400" />, desc: "Camels and goats in rural desert life." },
    { name: "Dates", icon: <Trees className="w-4 h-4 text-orange-400" />, desc: "Delicious fruits grown in sand oases." }
  ];

  return (
    <section 
      id="economy-education" 
      ref={ref}
      className="parallax-section bg-[#0b0704] relative py-20 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="absolute inset-0 desert-grain-overlay opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-mauri-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-sahara-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-[90%] max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start z-10">
        
        {/* Left Column: Economy Products */}
        <motion.div 
          style={{ y: yLeft }}
          className="lg:col-span-6 flex flex-col gap-6"
        >
          <div className="text-left mb-2">
            <span className="text-sahara-gold uppercase tracking-[0.25em] text-xs font-semibold block mb-2">
              ECONOMY
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl uppercase text-white">
              The Main <span className="bg-gradient-to-r from-sahara-gold to-mauri-gold bg-clip-text text-transparent">Products</span>
            </h2>
          </div>

          <div className="space-y-3">
            {products.map((item, idx) => (
              <div 
                key={idx}
                className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-4 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide">{item.name}</h4>
                  <p className="text-zinc-400 text-xs mt-0.5 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Education & Languages */}
        <motion.div 
          style={{ y: yRight }}
          className="lg:col-span-6 flex flex-col gap-6 lg:mt-2"
        >
          <div className="text-left mb-4">
            <span className="text-mauri-gold uppercase tracking-[0.25em] text-xs font-semibold block mb-2">
              LEARNING & LANGUAGES
            </span>
            <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-tight">
              Education & <span className="bg-gradient-to-r from-mauri-gold to-mauri-green bg-clip-text text-transparent">Tongues</span>
            </h2>
          </div>

          {/* Core Speech Text Box */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl mb-4 text-left">
            <p className="text-white text-lg md:text-2xl lg:text-3xl leading-relaxed font-medium select-text">
              "Education is free and compulsory. The main languages are Arabic and French. The main products are fish, iron, gold, livestock and dates."
            </p>
          </div>

          {/* Real Photo container (Tenth Provided Image) */}
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden glass-panel p-1 border border-white/10 shadow-xl relative min-h-[160px]">
            <div className="w-full h-full relative rounded-xl overflow-hidden">
              <Image 
                src="/img/WhatsApp Image 2026-05-17 at 10.47.33 (1).jpeg"
                alt="Education and products landscape in Mauritania"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Languages card */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-2.5">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider flex items-center gap-2">
              <Globe className="w-4 h-4 text-mauri-gold" /> Main Languages
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-black/30 border border-white/5">
                <span className="font-bold text-white block">Arabic</span>
                <span className="text-[10px] text-zinc-500 block mt-0.5">Official & cultural tongue</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/30 border border-white/5">
                <span className="font-bold text-white block">French</span>
                <span className="text-[10px] text-zinc-500 block mt-0.5">Used in commerce & schools</span>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
