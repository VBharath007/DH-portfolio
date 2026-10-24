"use client";

import React from "react";
import Image from "next/image";
import { companyData } from "@/data/company";
import { ceoProfileData } from "@/data/ceo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Check, FileText, Sparkles } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-neutral-50/50 to-white border-b border-neutral-200 relative overflow-hidden">
      {/* Ambient Glassmorphic Refraction Orbs */}
      <div className="absolute top-20 right-10 w-80 h-80 ambient-glow-blue rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 ambient-glow-emerald rounded-full blur-3xl pointer-events-none" />

      <div className="luxury-container relative z-10">
        {/* Section Heading - Auto-aligns & Animates */}
        <SectionHeading
          number="01"
          tagline="Company Profile & Statistics"
          title="Creating Value Since 2014"
          subtitle="A dedicated construction, PMC, and EPC enterprise committed to creating measurable value across residential and corporate developments."
        />

        {/* Two-Column Company Foundation & Visual Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: CEO Executive Portrait & Dossier - Animates from LEFT */}
          <ScrollReveal direction="left" delay={0.1} className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] w-full glass-panel rounded-2xl border border-neutral-300/90 overflow-hidden shadow-xl flex items-end justify-center group">
              <Image
                src={ceoProfileData.image}
                alt={`${ceoProfileData.name} — ${ceoProfileData.designation}`}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                {/* <span className="text-[10px] uppercase tracking-widest text-neutral-300 block font-mono">
                  EXECUTIVE DOSSIER
                </span> */}
                <span className="font-serif-luxury text-xl font-bold tracking-wide">
                  {ceoProfileData.name}
                </span>
                <p className="text-xs text-neutral-300 mt-1">
                  {ceoProfileData.designation} • {companyData.brandName}
                </p>
              </div>
            </div>

            {/* Statutory Compliance Glass Box */}
            <div className="p-6 glass-card-interactive rounded-2xl border border-neutral-300/90 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-neutral-900">
                  Statutory &amp; Corporate Compliance
                </h4>
              </div>
              <div className="space-y-2.5 text-xs text-neutral-700">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-200/80">
                  <span className="text-neutral-500">Legal Entity</span>
                  <span className="font-semibold text-neutral-900">{companyData.legalName}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-neutral-200/80">
                  <span className="text-neutral-500">GST Registration</span>
                  <span className="font-mono font-bold text-neutral-900">{companyData.gstin}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Incorporation Year</span>
                  <span className="font-semibold text-neutral-900">{companyData.establishedYear}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Company Narrative & Vision - Animates from RIGHT */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-7 space-y-6">
            <div className="border-l-4 border-black pl-5 mb-6 glass-panel rounded-2xl border border-neutral-300/90 p-6 shadow-sm">
              <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 block mb-1">
                CORPORATE VISION &amp; COMMITMENT
              </span>
              <p className="text-xl font-serif-luxury font-bold text-neutral-900 leading-snug">
                &ldquo;{companyData.visionStatement}&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Established in {companyData.establishedYear} in Madurai, Tamil Nadu, <strong>{companyData.brandName}</strong> ({companyData.legalName}) operates as a trusted enterprise in building construction, Project Management Consultancy (PMC), Engineering, Procurement and Construction (EPC), and comprehensive Project Delivery.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Under the Responsible Ownership of Managing Director <strong>{ceoProfileData.name}</strong>, the company has structured an integrated operational model focused on rigorous project governance, cost transparency, and disciplined execution across both residential building works and commercial facilities.
            </p>

            {/* Scope Deliverables Glass Box */}
            <div className="p-6 glass-card-interactive rounded-2xl border border-neutral-300/90 space-y-3 shadow-md">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-black" />
                <h4 className="text-xs uppercase tracking-widest font-semibold text-neutral-900">
                  Core Industry Domains
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-700 pt-1">
                <div className="flex items-center gap-2.5 p-3 bg-white/80 rounded-xl border border-neutral-300/80 shadow-2xs">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Residential Building Work</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 bg-white/80 rounded-xl border border-neutral-300/80 shadow-2xs">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Commercial Building Work</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 bg-white/80 rounded-xl border border-neutral-300/80 shadow-2xs">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Project Management (PMC)</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 bg-white/80 rounded-xl border border-neutral-300/80 shadow-2xs">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">EPC Project Delivery</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
