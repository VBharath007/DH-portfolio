"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ceoProfileData } from "@/data/ceo";
import { companyData } from "@/data/company";
import { ArrowRight, SkipForward } from "lucide-react";

interface IntroAnimationProps {
  onComplete?: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [phase, setPhase] = useState<"logo" | "ceo">("logo");

  const handleComplete = useCallback(() => {
    try {
      sessionStorage.setItem("dhanam_intro_seen", "true");
    } catch {
      // ignore in environments with restricted storage
    }
    setIsVisible(false);
    if (onComplete) onComplete();
  }, [onComplete]);

  useEffect(() => {
    let alreadySeen = false;
    let prefersReducedMotion = false;

    try {
      alreadySeen = sessionStorage.getItem("dhanam_intro_seen") === "true";
      prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      // ignore
    }

    if (alreadySeen || prefersReducedMotion) {
      return;
    }

    // Schedule showing intro asynchronously to avoid synchronous cascading renders
    const startTimer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    // Sequence:
    // Phase 1: Logo display (0s -> 2.6s)
    const timerLogo = setTimeout(() => {
      setPhase("ceo");
    }, 2600);

    // Phase 2: CEO reveal & floating cards (2.6s -> 7.2s)
    const timerFinish = setTimeout(() => {
      handleComplete();
    }, 7200);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(timerLogo);
      clearTimeout(timerFinish);
    };
  }, [handleComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        key="intro-container"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#fafafa] overflow-hidden select-none"
      >
        {/* Subtle Architectural Grid Texture */}
        <div className="absolute inset-0 arch-grid-pattern opacity-60 pointer-events-none" />

        {/* Skip Button Top Right */}
        <button
          onClick={handleComplete}
          className="absolute top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/90 border border-neutral-300 text-xs font-semibold uppercase tracking-widest text-neutral-800 hover:bg-black hover:text-white transition-all cursor-pointer shadow-sm"
          aria-label="Skip cinematic introduction"
        >
          <span>Skip Intro</span>
          <SkipForward className="w-3.5 h-3.5" />
        </button>

        {/* Phase 1: Central Brand Title & Official Emblem */}
        {phase === "logo" && (
          <motion.div
            key="brand-phase"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center px-6 relative z-10 flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6 drop-shadow-xl"
            >
              <Image
                src="/logo-circle.png"
                alt="DANAM HOLDINGS Official Logo"
                fill
                sizes="(max-width: 640px) 112px, 144px"
                className="object-contain"
                priority
              />
            </motion.div>

            <div className="inline-block mb-3 px-3 py-1 border-t border-b border-neutral-300">
              <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-500 font-semibold font-mono">
                CONSTRUCTION &amp; INFRASTRUCTURE CONGLOMERATE
              </span>
            </div>

            <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider text-black">
              DANAM HOLDINGS
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, delay: 0.3 }}
              className="h-[2px] bg-neutral-900 mx-auto mt-4 max-w-xs"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4 text-xs sm:text-sm tracking-[0.25em] uppercase text-neutral-600 font-medium"
            >
              Towards Fortune Unfoldings
            </motion.p>
          </motion.div>
        )}

        {/* Phase 2: CEO Reveal and Floating Stats */}
        {phase === "ceo" && (
          <motion.div
            key="ceo-phase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center px-4"
          >
            {/* Central Isolated Character Presentation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-56 sm:w-64 md:w-72 aspect-[3/4] flex items-end justify-center"
            >
              {/* Ground Pedestal Shadow */}
              <div className="absolute bottom-1 w-44 sm:w-52 h-5 bg-neutral-900/20 blur-md rounded-full pointer-events-none" />

              <div className="relative w-full h-full">
                <Image
                  src={ceoProfileData.image}
                  alt={ceoProfileData.name}
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
                  className="object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.18)]"
                  priority
                />
              </div>
            </motion.div>

            {/* CEO Identity Typography */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-center mt-5 z-10"
            >
              <div className="text-xs uppercase tracking-[0.25em] font-semibold text-neutral-500 mb-1">
                Executive Leadership Reveal
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                {ceoProfileData.name}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto mt-1 tracking-wide font-medium">
                {ceoProfileData.designation} • {companyData.brandName}
              </p>
            </motion.div>

            {/* Floating Information Cards Animated Flanking the Portrait */}
            {/* Left Top Card: 10+ Years Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="hidden lg:block absolute top-[26%] left-[4%] xl:left-[8%] bg-white/95 backdrop-blur-md p-4 border border-neutral-300 shadow-xl w-56"
            >
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold block">
                Total Experience
              </span>
              <div className="font-serif-luxury text-2xl font-bold text-black">10+ Years</div>
              <span className="text-[11px] text-neutral-600 leading-tight block mt-0.5">
                Leadership in PMC, EPC &amp; Delivery
              </span>
            </motion.div>

            {/* Right Top Card: ₹48+ Cr Direct Client Projects */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="hidden lg:block absolute top-[26%] right-[4%] xl:right-[8%] bg-white/95 backdrop-blur-md p-4 border border-neutral-300 shadow-xl w-56"
            >
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold block">
                Direct Client Projects
              </span>
              <div className="font-serif-luxury text-2xl font-bold text-black">₹48+ Cr</div>
              <span className="text-[11px] text-neutral-600 leading-tight block mt-0.5">
                Executed client project capital
              </span>
            </motion.div>

            {/* Left Bottom Card: 12+ Corporate EPC/PMC Projects */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="hidden lg:block absolute top-[52%] left-[4%] xl:left-[8%] bg-white/95 backdrop-blur-md p-4 border border-neutral-300 shadow-xl w-56"
            >
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold block">
                Corporate EPC/PMC
              </span>
              <div className="font-serif-luxury text-2xl font-bold text-black">12+ Projects</div>
              <span className="text-[11px] text-neutral-600 leading-tight block mt-0.5">
                Corporate infrastructure delivery
              </span>
            </motion.div>

            {/* Right Bottom Card: 50+ Team Capacity */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="hidden lg:block absolute top-[52%] right-[4%] xl:right-[8%] bg-white/95 backdrop-blur-md p-4 border border-neutral-300 shadow-xl w-56"
            >
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold block">
                Team Capacity
              </span>
              <div className="font-serif-luxury text-2xl font-bold text-black">50+ Capacity</div>
              <span className="text-[11px] text-neutral-600 leading-tight block mt-0.5">
                Specialists &amp; execution network
              </span>
            </motion.div>

            {/* Enter Portfolio Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-6 z-10"
            >
              <button
                onClick={handleComplete}
                className="bg-black text-white px-7 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-xl"
              >
                <span>Enter Executive Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
