"use client";

import React from "react";
import Image from "next/image";
import { Building2, Compass, Layers, CheckCircle, ArrowLeft } from "lucide-react";
import { companyData } from "@/data/company";

interface MarvioServicesProps {
  onNavigate?: (section: string) => void;
}

const SERVICES = [
  {
    title: "Turnkey Construction",
    subtitle: "End-to-End Civil Delivery",
    desc: "Comprehensive engineering execution from structural foundations to luxury interior handover with single-point accountability.",
    image: "/images/ventures/venture-01-turnkey.jpg",
    points: ["Structural Integrity", "Procurement Oversight", "Zero-Defect Handover"],
  },
  {
    title: "Project Management Consultancy (PMC)",
    subtitle: "Strategic Project Governance",
    desc: "Rigorous milestone scheduling, budget optimization, technical audits, and quality control for high-capital ventures.",
    image: "/images/ventures/venture-02-pmc.jpg",
    points: ["Contractual Administration", "Budget & Cost Governance", "Risk Mitigation"],
  },
  {
    title: "EPC Engineering & Turnkey Solutions",
    subtitle: "Comprehensive Infrastructure",
    desc: "Integrated Engineering, Procurement, and Construction framework tailored for corporate and institutional facilities.",
    image: "/images/ventures/venture-03-epc.jpg",
    points: ["Engineering Lifecycle", "Vendor Rationalization", "Asset Optimization"],
  },
];

export const MarvioServices: React.FC<MarvioServicesProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex flex-col justify-center py-4 sm:py-8 space-y-8">
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
          Capabilities &bull; Turnkey EPC &amp; PMC
        </span>
      </div>
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full reflective-glass-pill mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-emerald-400">
            CORE CAPABILITIES
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-serif mb-3">
          Industrial Leadership &amp; Engineering Ventures
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 max-w-xl">
          Providing institutional clients, developers, and discerning homeowners with institutional-grade construction management and turnkey delivery.
        </p>
      </div>

        {/* Marvio Feature Grid with Reflective Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((serv, idx) => (
            <div
              key={serv.title}
              className="group p-6 sm:p-7 rounded-3xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:bg-[#181a32] hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Feature Image Banner */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <Image
                    src={serv.image}
                    alt={serv.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                    VENTURE 0{idx + 1}
                  </span>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                  {serv.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {serv.title}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                  {serv.desc}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                {serv.points.map((pt) => (
                  <div key={pt} className="flex items-center gap-2 text-xs text-neutral-400">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};
