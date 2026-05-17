"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Coins, Flame, Info } from "lucide-react";
import Image from "next/image";

export default function FoodCurrencySection() {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll mapping
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yFood = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const yCoin = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      id="food-currency"
      ref={ref}
      className="parallax-section bg-[#070402] relative py-20 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="absolute inset-0 desert-grain-overlay opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-mauri-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-sahara-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-[90%] max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

        {/* Left Side: Content Column */}
        <motion.div
          style={{ y: yText }}
          className="lg:col-span-5 flex flex-col justify-center text-left"
        >
          <div className="inline-flex items-center gap-2 text-mauri-gold uppercase tracking-[0.25em] text-xs font-semibold mb-4">
            <Coins className="w-4 h-4 text-mauri-gold" />
            FOOD & MONEY
          </div>

          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl tracking-wide uppercase text-white mb-8 leading-tight">
            Flavors & <br /><span className="bg-gradient-to-r from-sahara-gold to-mauri-gold bg-clip-text text-transparent">Currency</span>
          </h2>

          {/* Speech Text Box */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl mb-8">
            <p className="text-white text-lg md:text-1xl lg:text-2xl leading-relaxed font-medium select-text">
              "The official currency is the Mauritanian Ouguiya. The national dish is Thieboudienne, it is rice with fish, vegetables and tomato sauce."
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.05] flex gap-3">
            <Info className="w-4.5 h-4.5 text-mauri-gold shrink-0 mt-0.5" />
            <div>
              <h5 className="text-white text-xs font-bold uppercase tracking-wider">A Special Currency</h5>
              <p className="text-zinc-400 text-[10px] mt-1 leading-relaxed">The Ouguiya is one of the only currencies in the world that does not divide into 100 cents (it uses 5 Khoums!).</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Double Parallax Cards (Food & Coin) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Card 1: Thieboudienne Plate */}
          <motion.div
            style={{ y: yFood }}
            className="glass-panel p-5 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between min-h-[350px]"
          >
            <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1c120a] to-[#0a0704] relative overflow-hidden border border-white/5">
              <Image
                src="/img/WhatsApp Image 2026-05-17 at 10.47.07 (4).jpeg"
                alt="Mauritanian Thieboudienne National Dish"
                fill
                className="object-contain"
              />

              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-white/10 z-10">
                <span className="text-[9px] uppercase font-bold text-sahara-gold tracking-wider flex items-center gap-1">
                  <Flame className="w-2.5 h-2.5 text-red-500" /> Thieboudienne Dish
                </span>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-serif font-bold text-lg text-white mb-1.5">Thieboudienne</h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                The national dish made with fish, spiced rice, carrots, cassava, and tomato sauce.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Currency Ouguiya */}
          <motion.div
            style={{ y: yCoin }}
            className="glass-panel p-5 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between min-h-[350px] md:mt-6"
          >
            <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#121c17] to-[#060a08] relative overflow-hidden border border-white/5">
              <Image
                src="/img/WhatsApp Image 2026-05-17 at 10.47.07 (5).jpeg"
                alt="Mauritanian Ouguiya Banknotes and Coins"
                fill
                className="object-contain"
              />

              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-white/10 z-10">
                <span className="text-[9px] uppercase font-bold text-mauri-gold tracking-wider">Ouguiya Currency</span>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-serif font-bold text-lg text-white mb-1.5">Mauritanian Ouguiya</h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                The national money (MRU), designed with gorgeous colors, Arabic scriptures, and French text.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
