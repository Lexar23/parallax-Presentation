"use client";

import { motion } from "framer-motion";
import { HelpCircle, Sparkles } from "lucide-react";
import Image from "next/image";

export default function FinalSection() {
  return (
    <section
      id="final"
      className="relative min-h-screen bg-gradient-to-b from-[#0b0704] via-[#3a1a09] to-[#070402] py-20 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Immersive Background Image (Eleventh Provided Image) */}
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden pointer-events-none">
        <Image
          src="/img/WhatsApp Image 2026-05-17 at 10.47.33 (2).jpeg"
          alt="Sahara Sunset Caravan Backdrop"
          fill
          className="object-cover object-bottom"
        />
      </div>

      {/* Sunset Glow overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,163,115,0.15)_0%,transparent_75%)] pointer-events-none z-0" />

      {/* Silhouette Dune & Camel Caravan Vector */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full pointer-events-none opacity-40">
        <svg viewBox="0 0 1440 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1200px] translate-y-3">
          {/* Camel caravan silhouette */}
          <g fill="#070402" transform="translate(100, 45) scale(0.65)">
            <path d="M50,45 L50,60" stroke="#000" strokeWidth="2" />
            <path d="M50,50 Q75,55 90,40" stroke="#000" strokeWidth="0.75" fill="none" />

            {/* Camel 1 */}
            <g transform="translate(90, 15)">
              <ellipse cx="25" cy="20" rx="14" ry="8" />
              <path d="M25,12 C28,5 20,4 20,4" stroke="#070402" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M38,20 Q48,15 48,5 C48,2 45,2 45,5" fill="none" stroke="#070402" strokeWidth="4" strokeLinecap="round" />
              <line x1="15" y1="26" x2="13" y2="40" stroke="#070402" strokeWidth="2.5" />
              <line x1="22" y1="26" x2="20" y2="40" stroke="#070402" strokeWidth="2.5" />
              <line x1="28" y1="26" x2="27" y2="40" stroke="#070402" strokeWidth="2.5" />
              <line x1="33" y1="26" x2="35" y2="40" stroke="#070402" strokeWidth="2.5" />
            </g>

            <path d="M125,35 Q150,42 165,30" stroke="#000" strokeWidth="0.75" fill="none" />

            {/* Camel 2 */}
            <g transform="translate(165, 5)">
              <ellipse cx="25" cy="20" rx="14" ry="8" />
              <path d="M25,12 C28,5 20,4 20,4" stroke="#070402" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M38,20 Q48,15 48,5 C48,2 45,2 45,5" fill="none" stroke="#070402" strokeWidth="4" strokeLinecap="round" />
              <line x1="15" y1="26" x2="14" y2="40" stroke="#070402" strokeWidth="2.5" />
              <line x1="21" y1="26" x2="19" y2="40" stroke="#070402" strokeWidth="2.5" />
              <line x1="28" y1="26" x2="26" y2="40" stroke="#070402" strokeWidth="2.5" />
              <line x1="34" y1="26" x2="36" y2="40" stroke="#070402" strokeWidth="2.5" />
            </g>
          </g>

          <path d="M0 100 C480 180 960 50 1440 140 V220 H0 Z" fill="#070402" />
        </svg>
      </div>

      <div className="absolute inset-0 desert-grain-overlay opacity-20 pointer-events-none z-10" />

      {/* Content */}
      <div className="w-[90%] max-w-4xl flex flex-col items-center justify-center z-20 text-center">

        {/* Gratitude Message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-sahara-gold font-bold uppercase tracking-[0.35em] text-sm md:text-base block mb-6">
            END OF PRESENTATION
          </span>

          <h2 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase text-white mb-8 leading-tight text-shadow-cinematic">
            Thank you <br />for your <span className="bg-gradient-to-r from-sahara-gold via-mauri-gold to-mauri-green bg-clip-text text-transparent">attention!</span>
          </h2>

          <div className="h-[2.5px] w-28 bg-gradient-to-r from-transparent via-sahara-gold to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Q&A Callout Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl glass-panel p-10 rounded-3xl border border-white/10 shadow-2xl flex flex-col items-center gap-6 bg-black/50 backdrop-blur-md"
        >
          <div className="w-16 h-16 rounded-2xl bg-sahara-gold/15 flex items-center justify-center text-sahara-gold">
            <HelpCircle className="w-8 h-8 animate-pulse" />
          </div>

          <h3 className="font-serif font-bold text-3xl md:text-4xl text-white uppercase tracking-wider text-center">
            Do you have any questions?
          </h3>

          <p className="text-zinc-200 text-base md:text-xl font-normal leading-relaxed text-center">
            I would be happy to answer any questions you have about Mauritania. Thank you again!
          </p>

          <div className="flex gap-2 text-[9px] font-bold uppercase tracking-widest text-zinc-500 mt-2">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-sahara-gold" /> English B1 Presentation
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
