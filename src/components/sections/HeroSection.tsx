"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ceoProfileData } from "@/data/ceo";
import { companyData } from "@/data/company";
import { scrollToSection, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  GraduationCap,
  ExternalLink,
  ShieldCheck,
  MapPin,
  Sparkles,
  Building,
} from "lucide-react";

interface HeroSectionProps {
  onNavigateTab?: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateTab }) => {
  const containerRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const [parallax, setParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isCharHovered, setIsCharHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursor({ x, y });
    setIsHovering(true);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / (centerX || 1);
    const deltaY = (y - centerY) / (centerY || 1);
    setParallax({
      x: Math.max(-10, Math.min(10, deltaX * -8)),
      y: Math.max(-6, Math.min(6, deltaY * -5)),
    });
  }, []);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsCharHovered(false);
    setCursor({ x: -1000, y: -1000 });
    setParallax({ x: 0, y: 0 });
  };

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    setCursor({ x, y });
    setIsHovering(true);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    setCursor({ x, y });
    setIsHovering(true);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setTimeout(() => {
      if (!isCharHovered) {
        setIsHovering(false);
        setCursor({ x: -1000, y: -1000 });
      }
    }, 800);
  }, [isCharHovered]);

  const handleCharClick = () => {
    setIsCharHovered((prev) => !prev);
    setIsHovering(true);
  };

  const handleCharMouseEnter = () => {
    setIsCharHovered(true);
  };

  const handleCharMouseLeave = () => {
    setIsCharHovered(false);
  };

  const maskX = cursor.x !== -1000 ? `${cursor.x}px` : "65%";
  const maskY = cursor.y !== -1000 ? `${cursor.y}px` : "45%";

  return (
    <section
      ref={containerRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className="relative pt-28 sm:pt-36 lg:pt-36 pb-12 sm:pb-16 bg-[#fafafa] overflow-hidden border-b border-neutral-200 select-none min-h-[90vh] flex items-center"
    >
      {/* Preload hover pose so switching is immediate */}
      <div className="hidden" aria-hidden="true">
        <Image src="/images/ceo/ceo-character-hover-v2.png" alt="" width={1} height={1} priority />
        <Image src="/images/ceo/ceo-character.png" alt="" width={1} height={1} priority />
      </div>

      {/* 1. Base Subtle Architectural Pattern */}
      <div
        className={cn(
          "absolute inset-0 arch-grid-pattern pointer-events-none transition-opacity duration-500",
          isHovering || isCharHovered ? "opacity-0" : "opacity-30"
        )}
      />

      {/* Ambient Glassmorphism Refraction Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 ambient-glow-blue rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 ambient-glow-amber rounded-full blur-3xl pointer-events-none" />

      {/* 2. Architectural Reveal Layer on Hover / Touch */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
        style={{
          opacity: isHovering || isCharHovered ? 1 : 0,
          WebkitMaskImage: `radial-gradient(circle 460px at ${maskX} ${maskY}, black 50%, rgba(0,0,0,0.6) 80%, transparent 100%)`,
          maskImage: `radial-gradient(circle 460px at ${maskX} ${maskY}, black 50%, rgba(0,0,0,0.6) 80%, transparent 100%)`,
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/company/interior-reveal-bg.jpg"
            alt="DANAM HOLDINGS Luxury Architecture"
            fill
            sizes="100vw"
            quality={95}
            className="object-cover object-center animate-kenburns"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-white/50" />
      </div>

      {/* Technical Scale Markers */}
      <div className="hidden lg:block absolute left-5 top-32 text-[10px] font-mono text-neutral-400 tracking-widest uppercase [writing-mode:vertical-lr] rotate-180 z-10 pointer-events-none">
        ESTABLISHED 2014 • MADURAI, TAMIL NADU • GSTIN: {companyData.gstin}
      </div>

      <div className="luxury-container relative z-10 w-full py-4">
        {/* Main 2-Column Asymmetric Grid: Left Info & Education | Right Animated Character */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Name, Role, Subtitle, Education & Action CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6 text-left"
          >
            {/* Executive Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white rounded-full text-[10px] font-mono uppercase tracking-widest shadow-xs">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Executive Leadership
              </span>
              <span className="px-3 py-1 bg-neutral-100 text-neutral-800 border border-neutral-300 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
                Responsible Ownership
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-500">
                • Estd. {companyData.establishedYear}
              </span>
            </div>

            {/* CEO Name */}
            <div>
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-500 font-mono font-semibold block mb-1">
                MANAGING DIRECTOR
              </span>
              <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.1] mb-2">
                {ceoProfileData.name}
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 font-serif italic max-w-xl">
                &ldquo;{ceoProfileData.quote}&rdquo;
              </p>
            </div>

            {/* Education & Qualifications Panel */}
            <div className="p-5 sm:p-6 glass-card-interactive rounded-3xl border border-neutral-300/90 shadow-lg space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-neutral-200/80">
                <div className="w-8 h-8 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block">
                    ACADEMIC EXCELLENCE
                  </span>
                  <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-neutral-900">
                    Higher Education &amp; Qualifications
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {/* Degree 1 */}
                <div className="p-3.5 bg-white/95 rounded-2xl border border-neutral-200/90 shadow-2xs">
                  <span className="text-[8.5px] uppercase font-mono tracking-wider font-bold text-neutral-500 block mb-0.5">
                    POSTGRADUATE MASTERS DEGREE • TECHNICAL
                  </span>
                  <h4 className="font-serif-luxury text-sm sm:text-base font-bold text-neutral-900">
                    Master&apos;s Degree, Advanced Construction Management
                  </h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Advanced Construction &amp; Infrastructure Lifecycle Management
                  </p>
                </div>

                {/* Degree 2 with Official Institution Link */}
                <div className="p-3.5 bg-white/95 rounded-2xl border border-neutral-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 group/edu">
                  <div>
                    <span className="text-[8.5px] uppercase font-mono tracking-wider font-bold text-neutral-500 block mb-0.5">
                      POSTGRADUATE MASTERS DEGREE • MANAGEMENT
                    </span>
                    <h4 className="font-serif-luxury text-sm sm:text-base font-bold text-neutral-900">
                      Master of Business Administration (MBA), Project Management
                    </h4>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Strategic Project Governance &amp; Turnkey Execution
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/school/15105486/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white hover:bg-neutral-800 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-colors shrink-0 self-start sm:self-auto cursor-pointer shadow-2xs"
                    title="View MBA Project Management Academic Profile"
                  >
                    <span>Institution</span>
                    <ExternalLink className="w-3 h-3 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick-Jump Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-1">
              <Button
                size="sm"
                className="text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl cursor-pointer"
                onClick={() => {
                  if (onNavigateTab) onNavigateTab("work");
                  else scrollToSection("work");
                }}
                icon={<ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              >
                Explore Work
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl cursor-pointer"
                onClick={() => {
                  if (onNavigateTab) onNavigateTab("projects");
                  else scrollToSection("projects");
                }}
              >
                12 Projects
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl cursor-pointer"
                onClick={() => {
                  if (onNavigateTab) onNavigateTab("achievements");
                  else scrollToSection("achievements");
                }}
              >
                Achievements
              </Button>

              <Button
                size="sm"
                variant="primary"
                className="text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl cursor-pointer"
                onClick={() => {
                  if (onNavigateTab) onNavigateTab("contact");
                  else scrollToSection("contact");
                }}
              >
                Contact
              </Button>

              <a
                href={companyData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 btn-luxury-secondary cursor-pointer text-xs sm:text-sm px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Animated CEO Character (No Clutter, Clean Placement) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-end relative select-none"
          >
            {/* Interactive Character Container - Clean, without any surrounding floating cards */}
            <div
              className="relative w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px] h-[440px] sm:h-[500px] md:h-[560px] lg:h-[630px] flex items-end justify-center transition-transform duration-200 ease-out cursor-pointer group"
              style={{
                transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
              }}
              onClick={handleCharClick}
              onMouseEnter={handleCharMouseEnter}
              onMouseLeave={handleCharMouseLeave}
              title="Click or tap to toggle pose & reveal project background"
            >
              {/* Grounding Shadow */}
              <div className="absolute bottom-2 w-56 sm:w-64 md:w-72 lg:w-80 h-6 sm:h-7 bg-neutral-950/25 blur-lg rounded-full pointer-events-none transition-all duration-300 group-hover:scale-110 group-hover:bg-neutral-950/30" />

              {/* Dynamic Pose Switching: Default (Blueprint) <-> Hover/Tap (Tablet & Welcoming) */}
              <div className="relative w-full h-full">
                <Image
                  key={isCharHovered ? "hover-pose" : "default-pose"}
                  src={isCharHovered ? "/images/ceo/ceo-character-hover-v2.png" : "/images/ceo/ceo-character.png"}
                  alt={`${ceoProfileData.name} — ${ceoProfileData.designation}`}
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] transition-transform duration-200 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 460px"
                />
              </div>
            </div>

            {/* Subtle Hint Pill below character */}
            <div className="mt-2 text-[10px] font-mono uppercase tracking-widest text-neutral-400 text-center">
              Tap / Hover Character to Interact
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
