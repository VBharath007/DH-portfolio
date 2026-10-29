"use client";

import React, { useState, useMemo } from "react";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Sparkles, Layers, ArrowLeft, ArrowRight, Mail, Building2 } from "lucide-react";

interface ProjectsSectionProps {
  onNavigateTab?: (tab: string) => void;
}

const BRAND_CLIENTS = [
  { name: "MSD", logo: "/Brand Clients/MSD.png" },
  { name: "OYO", logo: "/Brand Clients/OYO.png" },
  { name: "Rajmahal", logo: "/Brand Clients/Rajmahal.png" },
  { name: "SACS", logo: "/Brand Clients/SACS.png" },
  { name: "Seetharam Jewellers", logo: "/Brand Clients/Seetharam.png" },
  { name: "Thangamayil", logo: "/Brand Clients/Thangamayil.png" },
  { name: "Theni Anantham", logo: "/Brand Clients/TheniAnantham.png" },
];

const FILTER_CATEGORIES = [
  "All Projects",
  "Residential",
  "Commercial",
] as const;

type FilterCat = typeof FILTER_CATEGORIES[number];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onNavigateTab }) => {
  const [activeCategory, setActiveCategory] = useState<FilterCat>("All Projects");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") return projectsData;
    return projectsData.filter((p) => {
      const cat = p.category?.toLowerCase() || "";
      const filter = activeCategory.toLowerCase();
      if (activeCategory === "Residential") return cat.includes("residential") || cat.includes("villa") || cat.includes("house");
      if (activeCategory === "Commercial") return cat.includes("commercial") || cat.includes("office") || cat.includes("retail");
      return cat.includes(filter);
    });
  }, [activeCategory]);

  // Display 8 project cards per user request (4 initial + 4 additional)
  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, 8);
  }, [filteredProjects]);

  return (
    <div className="w-full flex flex-col justify-center py-4 sm:py-8 space-y-8">
      {/* Top Back/Breadcrumb Navigation */}
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <button
          onClick={() => onNavigateTab?.("home")}
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
          Selected Works &bull; 4 Featured Projects
        </span>
      </div>

      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full reflective-glass-pill mb-3 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em]">
            FEATURED PORTFOLIO
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 font-serif">
          Spaces. Structures. Stories.
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 max-w-xl">
          Explore our collection of architectural, interior, exterior, and turnkey construction projects across South India.
        </p>
      </div>

      {/* Filter Pills with Reflective Glass */}
      <div className="flex flex-wrap items-center gap-2">
        {FILTER_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
              activeCategory === cat
                ? "bg-white text-black shadow-xl shadow-white/20 scale-105 border border-white"
                : "reflective-glass-pill text-neutral-300 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid: Display 8 Project Cards */}
      <div
        key={activeCategory}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-2 animate-slide-from-right"
      >
        {displayedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onNavigateTab?.("contact")}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-neutral-400 text-sm font-mono">
          No projects found in this category.
        </div>
      )}

      {/* "Contact for more details" Interactive Executive Card */}
      <div
        id="projects-contact-cta"
        onClick={() => onNavigateTab?.("contact")}
        className="group relative w-full p-6 sm:p-8 rounded-3xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-2xl shadow-black/60 hover:bg-[#181a32] hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(52,211,153,0.35)] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        {/* Subtle Ambient Emerald Flow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/[0.08] via-transparent to-emerald-500/[0.04] opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute -right-20 -bottom-20 w-56 h-56 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-emerald-300">
             DISCOVER FULL DETAILS
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition-colors font-serif">
            Contact for more details
          </h3>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Interested in architectural blueprints, comprehensive engineering specifications, or discussing your turnkey project with our Managing Director? Get in touch today.
          </p>
        </div>

        {/* Action Button Pill */}
        <div className="relative z-10 shrink-0 self-stretch sm:self-auto flex items-center justify-end">
          <div
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3 rounded-full bg-emerald-400 text-black font-bold text-xs tracking-wider uppercase shadow-lg shadow-emerald-400/20 group-hover:bg-white group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.5)] transition-all duration-300 pointer-events-none"
          >
            <span>Contact Now</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* "Our Branded Clients" Infinite Auto-Scroll Showcase (Left to Right) */}
      <div className="w-full pt-8 sm:pt-12 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full reflective-glass-pill mb-3 text-emerald-400">
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em]">
                TRUSTED PARTNERSHIPS
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-serif">
              Our Branded Clients
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mt-1.5 leading-relaxed">
              Proud to deliver exceptional architectural, construction, and turnkey engineering solutions for iconic corporate and retail leaders.
            </p>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-neutral-400 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Auto-Scrolling Showcase</span>
          </div>
        </div>

        {/* Seamless Infinite Marquee Track (Left to Right) - Zero Borders, Native Website Background */}
        <div className="relative w-full overflow-hidden py-4 sm:py-6">
          {/* Auto Scrolling Content Moving Left to Right */}
          <div className="flex items-center gap-8 sm:gap-12 animate-marquee-ltr hover:[animation-play-state:paused] cursor-pointer">
            {[...BRAND_CLIENTS, ...BRAND_CLIENTS, ...BRAND_CLIENTS, ...BRAND_CLIENTS].map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="shrink-0 group/client relative h-16 sm:h-20 px-4 sm:px-6 flex items-center justify-center transition-all duration-300 hover:scale-110 select-none"
                title={client.name}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-h-12 sm:max-h-14 w-auto max-w-[140px] sm:max-w-[170px] object-contain transition-transform duration-300 group-hover/client:scale-105"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
