"use client";

import React from "react";
import { servicesData } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Home,
  Building2,
  Layers,
  HardHat,
  ShieldCheck,
  Compass,
} from "lucide-react";

export const ServicesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Home: <Home className="w-5 h-5 text-neutral-800 group-hover:text-white transition-colors" />,
    Building2: <Building2 className="w-5 h-5 text-neutral-800 group-hover:text-white transition-colors" />,
    Layers: <Layers className="w-5 h-5 text-neutral-800 group-hover:text-white transition-colors" />,
    HardHat: <HardHat className="w-5 h-5 text-neutral-800 group-hover:text-white transition-colors" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-neutral-800 group-hover:text-white transition-colors" />,
  };

  const constructionWork = servicesData.filter((s) => s.type === "Construction Work");
  const professionalCapabilities = servicesData.filter((s) => s.type === "Professional Capability");

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-neutral-50/60 to-white border-b border-neutral-200 relative overflow-hidden">
      {/* Ambient Glassmorphic Refraction Orbs */}
      <div className="absolute top-1/4 right-5 w-96 h-96 ambient-glow-blue rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-5 w-96 h-96 ambient-glow-amber rounded-full blur-3xl pointer-events-none" />

      <div className="luxury-container relative z-10">
        {/* Section Heading */}
        <SectionHeading
          number="03"
          tagline="Core Scope & Capabilities"
          title="Construction & Project Management Services"
          subtitle="Specialized building execution and professional project delivery services governed by disciplined engineering oversight."
        />

        {/* Part 1: Confirmed Construction Work Categories */}
        <div className="mb-20">
          <ScrollReveal direction="left" className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 items-start">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block mb-1">
                CATEGORY 01
              </span>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-neutral-900">
                Confirmed Construction Work
              </h3>
            </div>
            <span className="px-3 py-1 bg-black text-white text-[10px] font-semibold uppercase tracking-wider shadow-xs shrink-0 self-start sm:self-auto">
              On-Site Execution
            </span>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {constructionWork.map((svc, idx) => (
              <ScrollReveal
                key={svc.id}
                direction="bottom"
                delay={0.1 + idx * 0.1}
                className="flex"
              >
                <div className="p-5 sm:p-8 glass-card-interactive rounded-2xl border border-neutral-300/90 hover:!border-black group-hover:!border-black flex flex-col justify-between w-full group shadow-lg cursor-pointer transition-all duration-300">
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/95 border border-neutral-300/80 shadow-xs flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-black group-hover:border-black group-hover:text-white [&_svg]:group-hover:text-white transition-all duration-300">
                      {iconMap[svc.iconName] || <Building2 className="w-5 h-5 text-neutral-800 group-hover:text-white transition-colors" />}
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1.5">
                      {svc.type}
                    </span>

                    <h4 className="font-serif-luxury text-xl font-bold text-neutral-900 mb-3 group-hover:text-black transition-colors">
                      {svc.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {svc.shortDescription}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-200/80 flex items-center justify-between text-xs">
                    <span className="font-mono text-neutral-400 text-[10px] uppercase tracking-wider">
                      SPECIFICATION GRADE
                    </span>
                    <span className="font-semibold text-neutral-900 uppercase tracking-wider text-[11px] px-2 py-0.5 glass-pill border border-neutral-300/80">
                      Verified Service
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Part 2: Confirmed Professional Capabilities (PMC, EPC, Project Delivery) */}
        <div>
          <ScrollReveal direction="left" className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 items-start">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block mb-1">
                CATEGORY 02
              </span>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-neutral-900">
                Professional Engineering &amp; Delivery Capabilities
              </h3>
            </div>
            <span className="px-3.5 py-1 glass-pill text-neutral-800 text-[10px] font-semibold uppercase tracking-wider border border-neutral-300/90 shadow-xs shrink-0 self-start sm:self-auto">
              Strategic Governance
            </span>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {professionalCapabilities.map((svc, idx) => (
              <ScrollReveal
                key={svc.id}
                direction="bottom"
                delay={0.15 + idx * 0.1}
                className="flex"
              >
                <div className="p-5 sm:p-8 glass-card-interactive rounded-2xl border border-neutral-300/90 hover:!border-black group-hover:!border-black flex flex-col justify-between w-full group shadow-lg cursor-pointer transition-all duration-300">
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/95 border border-neutral-300/80 shadow-xs flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-black group-hover:border-black group-hover:text-white [&_svg]:group-hover:text-white transition-all duration-300">
                      {iconMap[svc.iconName] || <Layers className="w-5 h-5 text-neutral-800 group-hover:text-white transition-colors" />}
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1.5">
                      {svc.type}
                    </span>

                    <h4 className="font-serif-luxury text-lg font-bold text-neutral-900 mb-3 group-hover:text-black transition-colors">
                      {svc.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {svc.shortDescription}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-200/70 flex items-center justify-between text-xs">
                    <span className="font-mono text-neutral-400 text-[10px] uppercase tracking-wider">
                      CAPABILITY
                    </span>
                    <span className="font-semibold text-neutral-900 uppercase tracking-wider text-[11px] px-2 py-0.5 glass-pill">
                      PMC / EPC
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
