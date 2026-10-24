"use client";

import React from "react";
import Image from "next/image";
import { ceoProfileData } from "@/data/ceo";
import { companyData } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  GraduationCap,
  ExternalLink,
  Briefcase,
  CheckCircle2,
  FileText,
  UserCheck,
  Building,
  ShieldCheck,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";

interface PersonalSectionProps {
  onNavigateTab?: (tab: string) => void;
}

export const PersonalSection: React.FC<PersonalSectionProps> = ({ onNavigateTab }) => {
  return (
    <section
      id="personal"
      className="py-16 sm:py-20 bg-gradient-to-b from-[#f8f9fa] via-white to-[#f8f9fa] border-b border-neutral-200 relative overflow-hidden"
    >
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 ambient-glow-amber rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 ambient-glow-blue rounded-full blur-3xl pointer-events-none" />

      <div className="luxury-container relative z-10">
        {/* Section Heading */}
        <SectionHeading
          number="01"
          tagline="Executive Profile & Personal Data"
          title="Managing Director N.E.Praveen Elangovan"
          subtitle="Visionary leadership, premier academic engineering and management qualifications, and statutory corporate stewardship across DANAM HOLDINGS."
        />

        {/* 1. Main Executive Dossier: Portrait + Executive Profile & Statutory Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          
          {/* Left Column: Official CEO Portrait Card */}
          <ScrollReveal direction="left" delay={0.1} className="lg:col-span-5 flex">
            <div className="p-6 sm:p-7 glass-card-interactive rounded-3xl border border-neutral-300/90 shadow-xl flex flex-col justify-between w-full group">
              <div>
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-md border border-neutral-200 mb-5">
                  <Image
                    src={ceoProfileData.image}
                    alt={`${ceoProfileData.name} — ${ceoProfileData.designation}`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 450px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-300 block mb-0.5">
                      EXECUTIVE LEADERSHIP
                    </span>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold">
                      {ceoProfileData.name}
                    </h3>
                    <p className="text-xs text-neutral-300">
                      {ceoProfileData.designation} • {companyData.brandName}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-neutral-800">
                      Responsible Ownership
                    </span>
                  </div>
                  <a
                    href={ceoProfileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white hover:bg-neutral-800 rounded-xl text-[11px] font-semibold tracking-wider uppercase transition-all shadow-xs cursor-pointer"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-white" />
                  </a>
                </div>
              </div>

              {/* Statutory Legal Box */}
              <div className="mt-6 pt-5 border-t border-neutral-200/80 space-y-2 text-xs">
                <div className="flex items-center justify-between text-neutral-600">
                  <span>Legal Entity:</span>
                  <span className="font-bold text-neutral-900">{companyData.legalName}</span>
                </div>
                <div className="flex items-center justify-between text-neutral-600">
                  <span>GSTIN Registration:</span>
                  <span className="font-mono font-bold text-neutral-900">{companyData.gstin}</span>
                </div>
                <div className="flex items-center justify-between text-neutral-600">
                  <span>Established:</span>
                  <span className="font-semibold text-neutral-900">{companyData.establishedYear} (10+ Years)</span>
                </div>
                <div className="flex items-center justify-between text-neutral-600">
                  <span>Headquarters:</span>
                  <span className="font-semibold text-neutral-900">Madurai, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Executive Narrative & Leadership Pillars */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-7 flex">
            <div className="p-6 sm:p-8 glass-card-interactive rounded-3xl border border-neutral-300/90 shadow-xl flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center justify-between gap-3 pb-5 mb-5 border-b border-neutral-200/80">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0">
                      <UserCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block">
                        EXECUTIVE DOSSIER
                      </span>
                      <h4 className="font-serif-luxury text-xl font-bold text-neutral-900">
                        Biography &amp; Leadership Profile
                      </h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-300">
                    MD Profile
                  </span>
                </div>

                {/* Biography Narrative */}
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-6">
                  {ceoProfileData.bioSummary}
                </p>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  Established in {companyData.establishedYear} in Madurai, Tamil Nadu, <strong>{companyData.brandName}</strong> has built an exemplary reputation across bespoke residences, turnkey commercial projects, and high-stakes infrastructure consultancy under Mr. Praveen Elangovan&apos;s direct governance.
                </p>

                {/* Leadership Pillars */}
                <div className="space-y-3 mb-6">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 font-semibold block">
                    CORE LEADERSHIP PILLARS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ceoProfileData.shortBioBullets.map((bullet, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3.5 bg-white/90 border border-neutral-300/80 rounded-2xl shadow-2xs hover:border-black transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-semibold text-xs text-neutral-950 leading-snug">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fast Track Overview Strip */}
              <div className="pt-4 border-t border-neutral-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-white/80 rounded-xl border border-neutral-200/80">
                  <span className="text-[9px] uppercase font-mono text-neutral-500 block">Total Experience</span>
                  <span className="font-serif-luxury text-lg font-bold text-neutral-950">10+ Years</span>
                </div>
                <div className="p-3 bg-white/80 rounded-xl border border-neutral-200/80">
                  <span className="text-[9px] uppercase font-mono text-neutral-500 block">Leadership</span>
                  <span className="font-serif-luxury text-lg font-bold text-neutral-950">8+ Years</span>
                </div>
                <div className="col-span-2 sm:col-span-1 p-3 bg-white/80 rounded-xl border border-neutral-200/80">
                  <span className="text-[9px] uppercase font-mono text-neutral-500 block">Specialization</span>
                  <span className="font-serif-luxury text-lg font-bold text-neutral-950">PMC &amp; EPC</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 2. Academic Excellence & Postgraduate Qualifications */}
        <ScrollReveal direction="bottom" delay={0.2} className="mb-10">
          <div className="p-6 sm:p-8 glass-card-interactive rounded-3xl border border-neutral-300/90 shadow-xl">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-neutral-200/80">
              <div className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block">
                  ACADEMIC FOUNDATION
                </span>
                <h4 className="font-serif-luxury text-xl font-bold text-neutral-900">
                  Higher Education &amp; Academic Qualifications
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Degree 1 */}
              <div className="p-6 bg-white/95 border border-neutral-300/80 rounded-2xl shadow-sm hover:border-black transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-500 block mb-1.5 font-bold">
                    POSTGRADUATE MASTERS DEGREE • TECHNICAL MASTERY
                  </span>
                  <h5 className="font-serif-luxury text-base sm:text-lg font-bold text-neutral-900 mb-2 leading-snug">
                    Master&apos;s Degree, Advanced Construction Management
                  </h5>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    Specialized advanced curriculum covering infrastructure lifecycle planning, construction economics, seismic &amp; structural engineering, and corporate project governance.
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-100 flex items-center gap-2 text-xs font-medium text-neutral-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Advanced Construction &amp; Infrastructure Governance</span>
                </div>
              </div>

              {/* Degree 2 with External Link */}
              <div className="p-6 bg-white/95 border border-neutral-300/80 rounded-2xl shadow-sm hover:border-black transition-all flex flex-col justify-between group">
                <div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-500 block mb-1.5 font-bold">
                    POSTGRADUATE MASTERS DEGREE • EXECUTIVE GOVERNANCE
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h5 className="font-serif-luxury text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                      Master of Business Administration (MBA), Project Management
                    </h5>
                    <a
                      href="https://www.linkedin.com/school/15105486/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white hover:bg-neutral-800 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-colors shrink-0 self-start sm:self-auto cursor-pointer shadow-2xs"
                      title="View MBA Project Management Academic Profile"
                    >
                      <span>Institution Profile</span>
                      <ExternalLink className="w-3 h-3 text-white" />
                    </a>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    Strategic enterprise management, capital expenditure financing, procurement engineering, and disciplined EPC project delivery governance.
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-100 flex items-center gap-2 text-xs font-medium text-neutral-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Strategic Project Governance &amp; Execution</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3. Leadership Manifesto Quote */}
        <ScrollReveal direction="bottom" delay={0.25}>
          <div className="p-8 sm:p-10 glass-panel rounded-3xl border border-neutral-300/90 shadow-md text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 glass-pill text-neutral-700 mb-3 shadow-xs border border-neutral-300/90">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span className="text-[10px] uppercase font-mono tracking-widest font-bold">
                LEADERSHIP MANIFESTO
              </span>
            </div>
            <blockquote className="font-serif-luxury text-xl sm:text-3xl font-bold text-neutral-950 leading-snug mb-3">
              &ldquo;{ceoProfileData.quote}&rdquo;
            </blockquote>
            <span className="text-xs sm:text-sm text-neutral-600 font-medium">
              — {ceoProfileData.quoteAuthor}
            </span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
