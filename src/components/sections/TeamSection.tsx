"use client";

import React from "react";
import { teamData } from "@/data/team";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Users } from "lucide-react";

export const TeamSection: React.FC = () => {
  const hasTeam = teamData && teamData.length > 0;

  return (
    <section id="teams" className="py-24 bg-gradient-to-b from-white via-neutral-50/50 to-white border-b border-neutral-200 relative overflow-hidden">
      {/* Ambient Glassmorphic Refraction Orbs */}
      <div className="absolute top-1/3 right-10 w-80 h-80 ambient-glow-amber rounded-full blur-3xl pointer-events-none" />

      <div className="luxury-container relative z-10">
        {/* Section Heading */}
        <SectionHeading
          number="05"
          tagline="Execution Strength"
          title="Team &amp; Technical Capacity"
          subtitle="A multidisciplinary execution network operating across project engineering, site coordination, and quality supervision."
        />

        {hasTeam ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {teamData.map((member, idx) => (
              <ScrollReveal
                key={member.id}
                direction="bottom"
                delay={0.1 + idx * 0.1}
                className="flex"
              >
                <div className="glass-card-interactive rounded-2xl border border-neutral-300/90 hover:border-black/50 p-6 flex flex-col justify-between w-full shadow-lg">
                  <div>
                    <h4 className="font-serif-luxury text-lg font-bold text-neutral-900 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-xs text-neutral-500 mb-2 font-mono">{member.role}</p>
                    {member.bio && <p className="text-xs text-neutral-600">{member.bio}</p>}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          /* Glassmorphic Empty State */
          <ScrollReveal direction="bottom" delay={0.15}>
            <div className="max-w-2xl mx-auto p-8 sm:p-12 glass-panel rounded-3xl border border-neutral-300/90 shadow-2xl text-center group">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-white flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-105 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 glass-pill mb-2 shadow-xs border border-neutral-300/90">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-700 font-bold">
                  ORGANIZATIONAL DIRECTORY
                </span>
              </div>

              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                Team Profiles Will Be Updated Soon
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed mb-6">
                Individual leadership and key technical personnel profiles will be published here upon completion of our annual corporate directory review.
              </p>

              <div className="p-4 glass-card-interactive rounded-2xl border border-neutral-300/80 inline-flex items-center gap-4 text-xs text-neutral-700 shadow-sm">
                <span className="font-serif-luxury text-lg font-bold text-neutral-950 font-mono">
                  50+ Team Capacity
                </span>
                <span className="w-[1px] h-4 bg-neutral-300" />
                <span>Project Engineers, Supervisors &amp; PMC Consultants</span>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};
