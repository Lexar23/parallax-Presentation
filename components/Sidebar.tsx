"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Landmark, Globe, Compass, Heart,
  Coffee, Moon, Train, Award, Sparkles,
  ChevronLeft, ChevronRight
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Intro", icon: <Landmark className="w-4 h-4" /> },
  { id: "location", label: "Location", icon: <Globe className="w-4 h-4" /> },
  { id: "flag", label: "Flag", icon: <Compass className="w-4 h-4" /> },
  { id: "culture", label: "Culture", icon: <Heart className="w-4 h-4" /> },
  { id: "food-currency", label: "Gastronomy", icon: <Coffee className="w-4 h-4" /> },
  { id: "religion", label: "Faith", icon: <Moon className="w-4 h-4" /> },
  { id: "iron-train", label: "Desert Train", icon: <Train className="w-4 h-4" /> },
  { id: "economy-education", label: "Info & Economy", icon: <Award className="w-4 h-4" /> },
  { id: "final", label: "End", icon: <Sparkles className="w-4 h-4" /> },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }

      // Detect active section
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. DESKTOP SIDEBAR */}
      <motion.aside
        animate={{ width: isCollapsed ? "80px" : "240px" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed left-6 top-0 bottom-0 my-auto z-50 h-[82vh] max-h-[540px] glass-panel rounded-3xl hidden lg:flex flex-col justify-between py-5 px-3.5 border border-white/10 shadow-2xl overflow-visible"
      >
        {/* Dynamic Vertical Scroll Progress Track */}
        <div className="absolute right-0 top-6 bottom-6 w-[2px] bg-zinc-900/50 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-gradient-to-b from-sahara-gold via-mauri-gold to-mauri-green"
            style={{ height: `${scrollProgress * 100}%`, originY: 0 }}
          />
        </div>

        {/* Sidebar Header */}
        <div className="flex flex-col items-center w-full">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2.5 w-full px-1.5 py-1 focus:outline-none group"
          >
            <div className="w-8 h-8 rounded-xl bg-sahara-gold/15 flex items-center justify-center text-sahara-gold group-hover:text-mauri-gold transition-colors duration-300 shrink-0">
              <Landmark className="w-4.5 h-4.5" />
            </div>

            <AnimatePresence initial={false}>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="font-serif font-black text-[13px] tracking-widest bg-gradient-to-r from-white via-sahara-gold to-mauri-gold bg-clip-text text-transparent uppercase whitespace-nowrap"
                >
                  Mauritania
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <div className="h-[1px] w-full bg-white/5 my-3" />
        </div>

        {/* Navigation Items (Compact gaps and padding to fit all heights) */}
        <nav className="flex-1 flex flex-col gap-1 md:gap-1.5 justify-center w-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex items-center gap-3 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none cursor-pointer group w-full ${isActive
                    ? "text-black font-bold"
                    : "text-zinc-400 hover:text-white"
                  } ${isCollapsed ? "justify-center px-0" : "px-3"}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSidebarGlow"
                    className="absolute inset-0 bg-gradient-to-r from-sahara-gold to-mauri-gold rounded-xl -z-10 shadow-[0_4px_20px_rgba(212,163,115,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                <span className={`shrink-0 transition-transform ${!isActive && "group-hover:scale-110"}`}>
                  {item.icon}
                </span>

                <AnimatePresence initial={false}>
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      className="whitespace-nowrap text-[10px] tracking-widest"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Collapsed Tooltip Hover */}
                {isCollapsed && (
                  <div className="absolute left-[95px] px-3 py-1.5 rounded-xl bg-[#0b0704] border border-white/10 text-white text-[9px] uppercase tracking-widest opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300 z-50 whitespace-nowrap shadow-2xl">
                    {item.label}
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer: Collapse Toggle Trigger */}
        <div className="w-full flex justify-center pt-3 border-t border-white/5">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>
      </motion.aside>


      {/* 2. MOBILE FLOATING TRIGGER BUTTON */}
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-12 h-12 rounded-2xl glass-panel border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white shadow-xl focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation Drawer"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* 3. MOBILE FULL-SCREEN SLIDE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
            className="fixed inset-0 bg-[#070402]/98 backdrop-blur-xl z-40 p-8 flex flex-col justify-between lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-sahara-gold/20 flex items-center justify-center text-sahara-gold">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="font-serif font-black text-lg tracking-widest bg-gradient-to-r from-white to-sahara-gold bg-clip-text text-transparent uppercase">
                Mauritania
              </span>
            </div>

            {/* Menu options */}
            <nav className="flex flex-col gap-3 my-auto">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full py-4 px-5 rounded-2xl text-xs font-bold uppercase tracking-widest text-left flex items-center gap-4 transition-all duration-300 ${isActive
                        ? "bg-gradient-to-r from-sahara-gold to-mauri-gold text-black font-black shadow-[0_4px_20px_rgba(212,163,115,0.4)]"
                        : "text-zinc-300 hover:bg-white/5 hover:text-white border border-white/[0.02]"
                      }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Footer status info */}
            <div className="text-[9px] uppercase tracking-[0.25em] text-zinc-500 font-bold">
              English B1 Presentation Slides
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
