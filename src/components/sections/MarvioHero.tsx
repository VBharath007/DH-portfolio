"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, GraduationCap, ExternalLink } from "lucide-react";
import { ceoProfileData } from "@/data/ceo";
import { SplitText } from "@/components/ui/split-text";
import CountUp from "@/components/ui/CountUp";

const TARGET_TEXT = "Managing Director";

interface MarvioHeroProps {
  onNavigate?: (section: string) => void;
}

export const MarvioHero: React.FC<MarvioHeroProps> = ({ onNavigate }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect that types "Managing Director", pauses, backspaces, and repeats
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === TARGET_TEXT) {
      // Pause at full text
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText === "") {
      // Brief pause before typing again
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    } else {
      const speed = isDeleting ? 70 : 120;
      timer = setTimeout(() => {
        setDisplayText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return TARGET_TEXT.slice(0, prev.length + 1);
          }
        });
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <div className="w-full flex flex-col justify-center pt-2 sm:pt-4 pb-8 max-w-4xl">
      {/* Eyebrow Pill */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full reflective-glass-pill self-start mb-6">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-emerald-400">
          TOWARDS FORTUNE UNFOLDINGS
        </span>
      </div>

      {/* Headline with Dynamic Typewriter for CEO & Founder */}
      <div className="space-y-3 mb-6 sm:mb-8">
        <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-neutral-400">
          EXECUTIVE PROFILE &bull; DANAM HOLDINGS
        </h2>
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.1] font-serif overflow-hidden">
          <SplitText splitBy="chars" staggerDelay={0.025} duration={0.65} yOffset={32}>
            {`I'm ${ceoProfileData.name}`}
          </SplitText>
        </h1>
        <div className="h-9 sm:h-12 flex items-center">
          <span className="text-lg sm:text-2xl lg:text-3xl font-light text-emerald-400 font-sans tracking-wide">
            &mdash; {displayText}
            <span className="inline-block w-[2px] h-5 sm:h-7 bg-emerald-400 ml-1.5 animate-pulse align-middle" />
          </span>
        </div>
        <p className="text-xs sm:text-base text-neutral-300 leading-relaxed max-w-3xl pt-1 sm:pt-2">
          A visionary leader at DANAM HOLDINGS with over 9 years of dedicated experience in Turnkey Construction, Project Management Consultancy (PMC), and EPC Governance across South India.
        </p>
      </div>

      {/* Mobile-Only Executive Profile Card with Full Portrait */}
      <div className="block md:hidden mb-8 rounded-3xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-2xl shadow-2xl shadow-black/60 overflow-hidden">
        {/* Full Portrait Container: Complete visibility without cropping */}
        <div className="relative w-full aspect-[3/4] max-h-[380px] overflow-hidden bg-[#070810]">
          <Image
            src="/images/ceo/ceo-executive-portrait.jpg"
            alt={ceoProfileData.name}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121426] via-[#121426]/10 to-transparent pointer-events-none" />

          <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-400/20 border border-emerald-400/40 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-emerald-300">
                Managing Director
              </span>
            </div>
            <h3 className="text-xl font-bold text-white font-serif drop-shadow-md">
              {ceoProfileData.name}
            </h3>
            <p className="text-xs text-neutral-300 font-medium drop-shadow">
              DANAM HOLDINGS &bull; Towards Fortune Unfoldings
            </p>
          </div>
        </div>

        {/* Executive Highlights Bar */}
        <div className="px-4 py-3 flex items-center justify-between text-[11px] text-neutral-400 font-mono border-t border-white/10">
          <span className="text-emerald-400 font-semibold">10+ Yrs Infrastructure</span>
          <span>EPC &bull; PMC Governance</span>
        </div>
      </div>

      {/* Marvio Signature Rounded Stat Blocks with Visible Reflective Glass */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 w-full max-w-3xl">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:bg-[#181a32] hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-300 relative group">
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono relative z-10">
            <CountUp
              to={10}
              suffix="+"
              mode="roll"
              easing="spring"
              duration={1.6}
              delay={0.2}
            />
          </div>
          <div className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1 leading-tight relative z-10">
            Years of Rich<br />Experience
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:bg-[#181a32] hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-300 relative group">
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono relative z-10">
            <CountUp
              to={48}
              prefix="₹"
              suffix="+ Cr"
              mode="roll"
              easing="spring"
              duration={1.8}
              delay={0.3}
            />
          </div>
          <div className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1 leading-tight relative z-10">
            Direct Client<br />Projects
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1 p-4 sm:p-5 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:bg-[#181a32] hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-300 relative group">
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono relative z-10">
            <CountUp
              to={12}
              suffix="+"
              mode="roll"
              easing="spring"
              duration={1.7}
              delay={0.4}
            />
          </div>
          <div className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1 leading-tight relative z-10">
            Corporate Projects<br />EPC / PMC
          </div>
        </div>
      </div>

      {/* Academic Excellence Badge (Visible Reflective Glass Card) */}
      <div className="p-4 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:border-white/30 transition-all w-full max-w-3xl mb-10 flex items-center gap-3 relative">
        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div className="relative z-10">
          <span className="text-[9px] uppercase font-mono tracking-widest text-emerald-400 font-semibold block">
            QUALIFICATIONS
          </span>
          <span className="text-xs font-semibold text-neutral-200 block">
            Master&apos;s degree, Advanced Construction Management &bull; MBA Project Management
          </span>
        </div>
      </div>

      {/* Marvio Signature Bottom Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Primary Action Button with Circular Arrow */}
        <a
          href="#projects"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate("projects");
            }
          }}
          className="group inline-flex items-center justify-center gap-3 h-[50px] px-6 sm:px-7 rounded-full bg-emerald-400 text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-emerald-400/20 hover:scale-105 cursor-pointer"
        >
          <span>Explore Portfolio</span>
          <span className="w-6 h-6 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-3.5 h-3.5 text-black" />
          </span>
        </a>

        {/* Direct Contact Button */}
        <a
          href="#contact"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate("contact");
            }
          }}
          className="inline-flex items-center justify-center h-[50px] px-6 sm:px-7 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 hover:border-emerald-400/60 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer"
        >
          <span>Get in Touch</span>
        </a>
      </div>
    </div>
  );
};
