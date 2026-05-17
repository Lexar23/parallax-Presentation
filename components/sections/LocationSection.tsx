"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, MapPin } from "lucide-react";
import Image from "next/image";

export default function LocationSection() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax layers
  const yImage = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section 
      id="location" 
      ref={ref}
      className="parallax-section bg-[#0b0704] relative py-20 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="absolute inset-0 desert-grain-overlay opacity-15 pointer-events-none" />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-mauri-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-sahara-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-[90%] max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Side: Parallax Text Content */}
        <motion.div 
          style={{ y: yText }}
          className="lg:col-span-5 flex flex-col justify-center text-left"
        >
          <div className="inline-flex items-center gap-2 text-sahara-gold uppercase tracking-[0.25em] text-xs font-semibold mb-4">
            <Globe className="w-4 h-4" />
            GEOGRAPHY
          </div>

          <h2 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase text-white mb-8 leading-tight">
            Where is <br /><span className="bg-gradient-to-r from-sahara-gold to-mauri-gold bg-clip-text text-transparent">Mauritania?</span>
          </h2>

          {/* Core Speech Box */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl mb-8">
            <p className="text-white text-lg md:text-2xl lg:text-3xl leading-relaxed font-medium select-text">
              "Mauritania is located in West Africa and borders the Atlantic Ocean, Western Sahara, Algeria, Mali and Senegal."
            </p>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.01] border border-white/[0.05]">
            <MapPin className="w-5 h-5 text-sahara-gold shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">Five Main Borders</h4>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed">It borders the ocean on the west, Western Sahara and Algeria to the north, Mali to the east/south, and Senegal to the south.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Beautiful, Large Photographic Presentation (Instead of the map) */}
        <div className="lg:col-span-7 relative flex justify-center items-center min-h-[380px] md:min-h-[460px]">
          
          {/* Main Large Parallax Photograph Card */}
          <motion.div 
            style={{ y: yImage }}
            className="w-full max-w-[500px] aspect-[4/3] md:aspect-[1.4] rounded-3xl overflow-hidden glass-panel p-2 border border-white/10 shadow-2xl relative"
          >
            <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-inner">
              <Image 
                src="/img/WhatsApp Image 2026-05-17 at 10.47.06.jpeg"
                alt="Mauritanian Map Landscape"
                fill
                priority
                className="object-contain"
              />
              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
              
              {/* Dynamic Bottom Label */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sahara-gold animate-pulse" />
                <span className="text-[10px] uppercase font-bold text-white tracking-widest">Sahara Territory</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
