"use client";

import React from "react";
import { CheckCircle2, Award, Briefcase, GraduationCap, ExternalLink, ShieldCheck, ArrowLeft, FileText } from "lucide-react";
import { ceoProfileData } from "@/data/ceo";
import { companyData } from "@/data/company";
import { SplitText } from "@/components/ui/split-text";
import CountUp from "@/components/ui/CountUp";

interface MarvioAboutProps {
  onNavigate?: (section: string) => void;
}

export const MarvioAbout: React.FC<MarvioAboutProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex flex-col justify-center py-4 sm:py-8 w-full max-w-4xl space-y-8">
      {/* Top Back/Breadcrumb Navigation */}
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <button
          onClick={() => onNavigate?.("home")}
          className="relative group overflow-hidden inline-flex items-center gap-2 px-4 py-1.5 rounded-full reflective-glass-pill text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-wider border border-white/15 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.5),inset_0_0_10px_rgba(52,211,153,0.3)] transition-all duration-500 cursor-pointer"
        >
          {/* Vivid Flowing Green Smoke / Fog Mist Layers */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-full">
            <span className="absolute -inset-4 bg-emerald-500/15" />
            <span className="absolute -inset-6 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.85)_0%,rgba(16,185,129,0.5)_35%,transparent_70%)] blur-md animate-fog-1" />
            <span className="absolute -inset-6 bg-[radial-gradient(circle_at_center,rgba(110,231,183,0.75)_0%,rgba(5,150,105,0.4)_40%,transparent_70%)] blur-lg animate-fog-2" />
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-emerald-300/35 to-emerald-500/20 mix-blend-screen" />
          </span>

          <ArrowLeft className="w-3.5 h-3.5 text-emerald-400 relative z-10 transition-transform group-hover:-translate-x-0.5" />
          <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Back to Home</span>
        </button>
        <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-widest text-neutral-400 text-right">
          Executive Dossier &bull; Managing Director
        </span>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full reflective-glass-pill mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-emerald-400">
            EXECUTIVE GOVERNANCE
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-serif overflow-hidden">
          <SplitText splitBy="words" staggerDelay={0.045} duration={0.6} yOffset={24}>
            A Vision to Create Value, A Commitment to Transform Assets.
          </SplitText>
        </h2>
      </div>

      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
        {ceoProfileData.bioSummary}
      </p>

      {/* 5 Key Executive Statistics & Proven Track Record with Visible Reflective Glass Cards */}
      <div className="space-y-3 pt-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block font-semibold">
          TRACK RECORD &bull; MILESTONES
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-2.5 w-full">
          <div className="p-2.5 sm:p-3 xl:p-3.5 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:bg-[#181a32] hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-300 relative group flex flex-col justify-between">
            <div className="text-xl sm:text-2xl font-extrabold text-white font-mono relative z-10">
              <CountUp
                to={9}
                suffix="+"
                mode="roll"
                easing="spring"
                duration={1.6}
                delay={0.15}
              />
            </div>
            <div className="text-[9.5px] sm:text-[10.5px] xl:text-[11px] text-neutral-400 uppercase tracking-normal sm:tracking-wider mt-1.5 leading-tight relative z-10">
              <span className="whitespace-nowrap block">Years of Rich</span>
              <span className="whitespace-nowrap block">Experience</span>
            </div>
          </div>
          <div className="p-2.5 sm:p-3 xl:p-3.5 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:bg-[#181a32] hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-300 relative group flex flex-col justify-between">
            <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono relative z-10">
              <CountUp
                to={46}
                prefix="₹"
                suffix="+ Cr"
                mode="roll"
                easing="spring"
                duration={1.8}
                delay={0.25}
              />
            </div>
            <div className="text-[9.5px] sm:text-[10.5px] xl:text-[11px] text-neutral-400 uppercase tracking-normal sm:tracking-wider mt-1.5 leading-tight relative z-10">
              <span className="whitespace-nowrap block">Direct Client</span>
              <span className="whitespace-nowrap block">Projects</span>
            </div>
          </div>
          <div className="p-2.5 sm:p-3 xl:p-3.5 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:bg-[#181a32] hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-300 relative group flex flex-col justify-between">
            <div className="text-xl sm:text-2xl font-extrabold text-white font-mono relative z-10">
              <CountUp
                to={12}
                suffix="+"
                mode="roll"
                easing="spring"
                duration={1.7}
                delay={0.35}
              />
            </div>
            <div className="text-[9.5px] sm:text-[10.5px] xl:text-[11px] text-neutral-400 uppercase tracking-normal sm:tracking-wider mt-1.5 leading-tight relative z-10">
              <span className="whitespace-nowrap block font-semibold text-neutral-300">Corporate Projects</span>
              <span className="whitespace-nowrap block text-[8.5px] sm:text-[9.5px] text-neutral-400">EPC / PMC</span>
            </div>
          </div>
          <div className="p-2.5 sm:p-3 xl:p-3.5 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:bg-[#181a32] hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-300 relative group flex flex-col justify-between">
            <div className="text-xl sm:text-2xl font-extrabold text-white font-mono relative z-10">
              <CountUp
                to={50}
                suffix="+"
                mode="roll"
                easing="spring"
                duration={1.8}
                delay={0.45}
              />
            </div>
            <div className="text-[9.5px] sm:text-[10.5px] xl:text-[11px] text-neutral-400 uppercase tracking-normal sm:tracking-wider mt-1.5 leading-tight relative z-10">
              <span className="whitespace-nowrap block">Team</span>
              <span className="whitespace-nowrap block">Capacity</span>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-1 p-2.5 sm:p-3 xl:p-3.5 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:bg-[#181a32] hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-300 relative group flex flex-col justify-between">
            <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono relative z-10">
              <CountUp
                to={112}
                suffix="+"
                mode="roll"
                easing="spring"
                duration={2.0}
                delay={0.5}
              />
            </div>
            <div className="text-[9.5px] sm:text-[10.5px] xl:text-[11px] text-neutral-400 uppercase tracking-normal sm:tracking-wider mt-1.5 leading-tight relative z-10">
              <span className="whitespace-nowrap block">Consultant</span>
              <span className="whitespace-nowrap block">Advisory</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Leadership Pillars (Visible Frosted Glass) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="p-5 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:bg-[#181a32] hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-300 relative group">
          <div className="flex items-center gap-2.5 mb-2.5 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-400" />
            </div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wide">
              Turnkey EPC Precision
            </h4>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed relative z-10">
            End-to-end execution combining architectural integrity, engineering rigor, and timeline discipline.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:bg-[#181a32] hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-300 relative group">
          <div className="flex items-center gap-2.5 mb-2.5 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Briefcase className="w-4.5 h-4.5 text-emerald-400" />
            </div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wide">
              PMC Governance
            </h4>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed relative z-10">
            Strategic auditing, vendor optimization, and cost stewardship ensuring capital efficiency.
          </p>
        </div>
      </div>

      {/* Academic Foundation (Visible Frosted Glass) */}
      <div className="p-6 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:border-white/25 transition-all relative space-y-4">
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <GraduationCap className="w-4.5 h-4.5" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold">
              ACADEMIC FOUNDATION
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider reflective-glass-pill px-3 py-1 rounded-full">
            Postgraduate Rigor
          </span>
        </div>

        <div className="pt-2 relative z-10">
          <div className="p-4 sm:p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors space-y-3.5">
            <div>
              <h5 className="text-sm font-semibold text-white">
                Master&apos;s degree, Advanced Construction Management
              </h5>
              <p className="text-xs text-neutral-400 mt-1">
                National Institute of Construction Management and Research (NICMAR)
              </p>
            </div>

            <div className="pt-3.5 border-t border-white/10">
              <h5 className="text-sm font-semibold text-white">
                Master of Business Administration (MBA), Project Management
              </h5>
              <p className="text-xs text-neutral-400 mt-1">
                Strategic Project Governance &amp; Turnkey Lifecycle Stewardship
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statutory & Corporate Compliance (Visible Frosted Glass) */}
      <div className="p-5 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:border-white/25 transition-all relative flex items-center justify-between">
        <div className="flex items-center gap-3.5 relative z-10">
          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-neutral-300 shrink-0">
            <FileText className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <span className="text-xs font-semibold text-white block">
              Registered Corporate Entity &bull; {companyData.brandName}
            </span>
            <span className="text-[11px] font-mono text-neutral-400 block mt-0.5">
              GSTIN: {companyData.gstin} &bull; Established {companyData.establishedYear}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
