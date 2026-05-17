"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee, Heart, User } from "lucide-react";
import Image from "next/image";

export default function CultureSection() {
  const ref = useRef<HTMLDivElement>(null);

  // Parallax scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yCardLeft = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const yCardRight = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      id="culture"
      ref={ref}
      className="parallax-section bg-[#0b0704] relative py-20 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="absolute inset-0 desert-grain-overlay opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-sahara-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-mauri-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-[90%] max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

        {/* Left Side: Parallax Cultural Cards Showcase */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 order-2 lg:order-1">

          {/* Card 1: Traditional Clothing (Daraa) */}
          <motion.div
            style={{ y: yCardLeft }}
            className="glass-panel p-5 rounded-3xl relative border border-white/10 shadow-2xl flex flex-col justify-between min-h-[360px]"
          >
            <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#121c2c] to-[#070b12] relative overflow-hidden border border-white/5">
              <Image
                src="/img/WhatsApp Image 2026-05-17 at 10.47.33 (2).jpeg"
                alt="Traditional clothing in Mauritania"
                fill
                className="object-contain"
              />

              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-white/10 z-10">
                <span className="text-[9px] uppercase font-bold text-sahara-gold tracking-wider">Traditional Daraa</span>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-serif font-bold text-lg text-white mb-1.5">Traditional Clothes</h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                A wide, light robe colored in blue or white, designed to keep people cool in the hot Sahara Desert dunes.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Tea Ritual (Ataya) */}
          <motion.div
            style={{ y: yCardRight }}
            className="glass-panel p-5 rounded-3xl relative border border-white/10 shadow-2xl flex flex-col justify-between min-h-[360px] md:mt-6"
          >
            <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#23150d] to-[#0c0805] relative overflow-hidden border border-white/5">
              <Image
                src="/img/WhatsApp Image 2026-05-17 at 10.47.07 (3).jpeg"
                alt="Mauritanian Ataya Mint Tea ritual"
                fill
                className="object-contain"
              />

              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-white/10 z-10">
                <span className="text-[9px] uppercase font-bold text-sahara-gold tracking-wider">Ataya Mint Tea</span>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-serif font-bold text-lg text-white mb-1.5">Ataya Mint Tea</h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                A famous mint tea ritual prepared slowly and poured from high up to create a thick foam on the glass.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Narrative Text */}
        <motion.div
          style={{ y: yText }}
          className="lg:col-span-5 flex flex-col justify-center text-left order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 text-sahara-gold uppercase tracking-[0.25em] text-xs font-semibold mb-4">
            <Heart className="w-4 h-4 text-sahara-gold" />
            HOSPITALITY
          </div>

          <h2 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase text-white mb-8 leading-tight">
            Nomadic <br /><span className="bg-gradient-to-r from-sahara-gold to-mauri-gold bg-clip-text text-transparent">Kindness</span>
          </h2>

          {/* Speech Text Box */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl mb-10">
            <p className="text-white text-lg md:text-2xl lg:text-3xl leading-relaxed font-medium select-text">
              "People are very hospitable, they wear traditional clothes and always offer mint tea."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.05] flex gap-2.5">
              <User className="w-4.5 h-4.5 text-sahara-gold shrink-0 mt-0.5" />
              <div>
                <h5 className="text-white text-xs font-bold uppercase tracking-wider">Hospitable</h5>
                <p className="text-zinc-400 text-[10px] mt-1 leading-relaxed">Welcoming guests warmly is a big part of their traditional desert rules.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.05] flex gap-2.5">
              <Coffee className="w-4.5 h-4.5 text-mauri-gold shrink-0 mt-0.5" />
              <div>
                <h5 className="text-white text-xs font-bold uppercase tracking-wider">Mint Tea</h5>
                <p className="text-zinc-400 text-[10px] mt-1 leading-relaxed">They serve tea in three glasses to represent Life, Love, and Friendship.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
