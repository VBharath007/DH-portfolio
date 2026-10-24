"use client";

import React from "react";
import { companyData } from "@/data/company";
import { testimonialsData } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Video, Quote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const hasTestimonials = testimonialsData && testimonialsData.length > 0;

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-neutral-50/50 via-white to-neutral-50/50 border-b border-neutral-200 relative overflow-hidden">
      {/* Ambient Glassmorphic Refraction Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 ambient-glow-blue rounded-full blur-3xl pointer-events-none" />

      <div className="luxury-container relative z-10">
        {/* Section Heading */}
        <SectionHeading
          number="06"
          tagline="Client Feedback"
          title="Client Testimonials &amp; Reviews"
          subtitle={`Direct feedback from clients and institutional partners who have partnered with ${companyData.brandName}.`}
        />

        {hasTestimonials ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {testimonialsData.map((t, idx) => (
              <ScrollReveal
                key={t.id}
                direction="bottom"
                delay={0.1 + idx * 0.1}
                className="flex"
              >
                <div className="p-8 glass-card-interactive rounded-2xl border border-neutral-300/90 hover:border-black/50 flex flex-col justify-between w-full shadow-lg relative overflow-hidden group">
                  <div className="absolute right-4 -bottom-4 text-neutral-400/20 pointer-events-none select-none">
                    <Quote className="w-24 h-24" />
                  </div>
                  <p className="text-sm text-neutral-800 italic mb-6 font-serif leading-relaxed relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="relative z-10 pt-4 border-t border-neutral-200/80">
                    <h4 className="font-serif-luxury font-bold text-neutral-900">{t.author}</h4>
                    <p className="text-xs text-neutral-500 font-mono mt-0.5">{t.role}, {t.company}</p>
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
                <Video className="w-6 h-6 text-white" />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 glass-pill mb-2 shadow-xs border border-neutral-300/90">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-700 font-bold">
                  CLIENT ASSURANCE
                </span>
              </div>

              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                Client Testimonials Will Be Added Soon
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Official client testimonial recordings and verified project appraisals are currently being processed for digital release. Direct client references are available to prospective partners upon executive request.
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};
