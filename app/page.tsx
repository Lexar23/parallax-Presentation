"use client";

import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/sections/HeroSection";
import LocationSection from "@/components/sections/LocationSection";
import FlagSection from "@/components/sections/FlagSection";
import CultureSection from "@/components/sections/CultureSection";
import FoodCurrencySection from "@/components/sections/FoodCurrencySection";
import ReligionSection from "@/components/sections/ReligionSection";
import IronOreTrainSection from "@/components/sections/IronOreTrainSection";
import EconomyEducationSection from "@/components/sections/EconomyEducationSection";
import FinalSection from "@/components/sections/FinalSection";
import { Keyboard } from "lucide-react";

const SECTIONS = [
  "hero",
  "location",
  "flag",
  "culture",
  "food-currency",
  "religion",
  "iron-train",
  "economy-education",
  "final"
];

export default function Home() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault(); // Prevent standard scroll jump

        // Find which section is currently closest to the top of the viewport
        let currentIdx = 0;
        let minDiff = Infinity;

        SECTIONS.forEach((id, idx) => {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            const diff = Math.abs(rect.top);
            if (diff < minDiff) {
              minDiff = diff;
              currentIdx = idx;
            }
          }
        });

        // Determine next section (wrap around to 0 at the end)
        const nextIdx = (currentIdx + 1) % SECTIONS.length;
        const nextEl = document.getElementById(SECTIONS[nextIdx]);

        if (nextEl) {
          nextEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#0b0704] overflow-x-hidden selection:bg-sahara-gold selection:text-black">
      {/* Immersive Collapsible Sidebar Navigation */}
      <Sidebar />

      {/* Presentation Chapters */}
      <main className="flex-1 w-full flex flex-col lg:pl-[290px] transition-all duration-500">
        {/* Chapter 1: The Sahara Horizon */}
        <HeroSection />

        {/* Chapter 2: Boundary & Gates */}
        <LocationSection />

        {/* Chapter 3: Stars & Stripes */}
        <FlagSection />

        {/* Chapter 4: Desert Hospitality */}
        <CultureSection />

        {/* Chapter 5: Oceans & Ouguiya */}
        <FoodCurrencySection />

        {/* Chapter 6: Oasis Faith */}
        <ReligionSection />

        {/* Chapter 7: Train du Désert */}
        <IronOreTrainSection />

        {/* Chapter 8: UNESCO Libraries & Export Pillars */}
        <EconomyEducationSection />

        {/* Chapter 9: Sunset Epilogue */}
        <FinalSection />
      </main>

      {/* Floating Presentation Control Tip */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-zinc-300 shadow-xl pointer-events-none">
        <Keyboard className="w-4 h-4 text-sahara-gold animate-pulse" />
        <span className="text-[10px] uppercase font-bold tracking-widest">
          Press <span className="bg-sahara-gold text-black px-1.5 py-0.5 rounded font-mono font-black mx-1 shadow-sm">SPACE</span> for next slide
        </span>
      </div>
    </div>
  );
}
