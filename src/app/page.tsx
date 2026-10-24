"use client";

import React, { useState, useEffect, useRef } from "react";
import { MarvioHeader } from "@/components/layout/MarvioHeader";
import { MarvioDrawer } from "@/components/layout/MarvioDrawer";
import { FloatingSocialSidebar } from "@/components/layout/FloatingSocialSidebar";
import { RightMediaPane } from "@/components/layout/RightMediaPane";
import { MarvioHero } from "@/components/sections/MarvioHero";
import { MarvioAbout } from "@/components/sections/MarvioAbout";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { MarvioServices } from "@/components/sections/MarvioServices";
import { MarvioContact } from "@/components/sections/MarvioContact";

type SectionKey = "home" | "about" | "projects" | "ventures" | "contact";

const SECTION_ORDER: SectionKey[] = ["home", "about", "projects", "ventures", "contact"];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionKey>("home");
  const [transitionCounter, setTransitionCounter] = useState(0);
  const mainPaneRef = useRef<HTMLDivElement | null>(null);
  const isClickNavigatingRef = useRef(false);

  // Exact Button-Order Scroll Spy:
  // As user scrolls down/up, activeSection highlights in the exact sequence:
  // 1. Home -> 2. About -> 3. Portfolio (projects) -> 4. Ventures -> 5. Contact
  const handleScroll = () => {
    if (isClickNavigatingRef.current) return;
    const pane = mainPaneRef.current;
    if (!pane) return;

    const scrollTop = pane.scrollTop;
    const paneHeight = pane.clientHeight;
    const scrollBottom = scrollTop + paneHeight;

    let current: SectionKey = "home";

    // If near the very bottom of the page, activate the last button (Contact)
    if (scrollBottom >= pane.scrollHeight - 80) {
      current = "contact";
    } else {
      // Midpoint trigger: 35% from the top of the container
      const triggerY = scrollTop + paneHeight * 0.35;

      for (const secId of SECTION_ORDER) {
        const el = document.getElementById(secId);
        if (el && el.offsetTop <= triggerY) {
          current = secId;
        }
      }
    }

    if (current !== activeSection) {
      setActiveSection(current);
    }
  };

  // Safely sync URL hash without causing setState-in-render or router update conflicts
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && window.location.hash !== `#${activeSection}`) {
        window.history.replaceState(null, "", `#${activeSection}`);
      }
    }, 60);
    return () => clearTimeout(timer);
  }, [activeSection]);

  // Handle URL hash on initial load
  useEffect(() => {
    const rawHash = window.location.hash.replace("#", "") as SectionKey;
    if (SECTION_ORDER.includes(rawHash)) {
      setActiveSection(rawHash);
      setTimeout(() => {
        const targetEl = document.getElementById(rawHash);
        const pane = mainPaneRef.current;
        if (targetEl && pane) {
          pane.scrollTo({ top: targetEl.offsetTop, behavior: "smooth" });
        }
      }, 200);
    }
  }, []);

  // Navigate with bottom-to-top slide and smooth scroll
  const handleNavigate = (section: string, fromMenu: boolean = false) => {
    const valid: SectionKey = SECTION_ORDER.includes(section as SectionKey)
      ? (section as SectionKey)
      : "home";

    setActiveSection(valid);
    setTransitionCounter((c) => c + 1);

    isClickNavigatingRef.current = true;

    const pane = mainPaneRef.current;
    const targetEl = document.getElementById(valid);

    if (pane && targetEl) {
      pane.scrollTo({
        top: targetEl.offsetTop,
        behavior: "smooth",
      });

      // Trigger bottom-to-top slide animation on the inner content of the target section
      const contentWrapper = targetEl.querySelector(".section-anim-target") || targetEl;
      contentWrapper.classList.remove("animate-slide-from-bottom");
      void (contentWrapper as HTMLElement).offsetWidth; // trigger reflow
      contentWrapper.classList.add("animate-slide-from-bottom");
    }

    setTimeout(() => {
      isClickNavigatingRef.current = false;
    }, 700);
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-[#0b0c16] text-white selection:bg-emerald-400 selection:text-black relative">
      {/* Dynamic Ambient Glow Orbs for Glassmorphism Reflections */}
      <div className="absolute -top-36 left-1/4 w-[540px] h-[540px] bg-emerald-500/[0.08] blur-[140px] rounded-full pointer-events-none -z-0" />
      <div className="absolute top-1/3 -left-20 w-[480px] h-[480px] bg-indigo-600/[0.07] blur-[150px] rounded-full pointer-events-none -z-0" />
      <div className="absolute -bottom-24 left-1/3 w-[500px] h-[500px] bg-emerald-600/[0.06] blur-[160px] rounded-full pointer-events-none -z-0" />

      {/* 1. Fixed Executive Header */}
      <MarvioHeader
        onOpenMenu={() => setIsMenuOpen(true)}
        onNavigate={(sec) => handleNavigate(sec, false)}
        activeSection={activeSection}
      />

      {/* Floating Vertical Navigation Sidebar (Right Side Center for Desktop, Social Media on Mobile) */}
      <FloatingSocialSidebar
        activeSection={activeSection}
        onNavigate={(sec) => handleNavigate(sec, false)}
      />

      {/* 2. Fullscreen Side Menu Drawer (Triggered by mobile hamburger menu) */}
      <MarvioDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={(sec, fromMenu) => handleNavigate(sec, fromMenu ?? true)}
      />

      {/* 3. Signature Split Screen: Left Scrollable Single Page Content + Right Fixed Media Pane */}
      <div className="flex-1 flex flex-col md:flex-row pt-20 sm:pt-24 md:pt-28 overflow-hidden relative z-10">
        {/* Left Scrollable Content Pane (Continuous Single Page Scroll with Instant Scroll Spy) */}
        <main
          id="main-scroll-pane"
          ref={mainPaneRef}
          onScroll={handleScroll}
          className="w-full md:w-[58%] lg:w-[60%] xl:w-[62%] h-full overflow-y-auto px-4 sm:px-6 md:pl-10 md:pr-6 lg:pl-12 lg:pr-8 pb-24 relative space-y-16 sm:space-y-24 scroll-smooth"
        >
          {/* Section 1: Home */}
          <section id="home" className="min-h-[calc(100vh-140px)] scroll-mt-24 pt-2">
            <div className="section-anim-target">
              <MarvioHero onNavigate={(sec) => handleNavigate(sec, false)} />
            </div>
          </section>

          {/* Section 2: About */}
          <section id="about" className="min-h-[calc(100vh-140px)] scroll-mt-24 pt-8 border-t border-white/[0.06]">
            <div className="section-anim-target">
              <MarvioAbout onNavigate={(sec) => handleNavigate(sec, false)} />
            </div>
          </section>

          {/* Section 3: Portfolio / Projects */}
          <section id="projects" className="min-h-[calc(100vh-140px)] scroll-mt-24 pt-8 border-t border-white/[0.06]">
            <div className="section-anim-target">
              <ProjectsSection onNavigateTab={(sec) => handleNavigate(sec, false)} />
            </div>
          </section>

          {/* Section 4: Ventures */}
          <section id="ventures" className="min-h-[calc(100vh-140px)] scroll-mt-24 pt-8 border-t border-white/[0.06]">
            <div className="section-anim-target">
              <MarvioServices onNavigate={(sec) => handleNavigate(sec, false)} />
            </div>
          </section>

          {/* Section 5: Contact */}
          <section id="contact" className="min-h-[calc(100vh-140px)] scroll-mt-24 pt-8 border-t border-white/[0.06]">
            <div className="section-anim-target">
              <MarvioContact onNavigate={(sec) => handleNavigate(sec, false)} />
            </div>
          </section>
        </main>

        {/* Right Fixed Media Pane (Expanded to fill space elegantly without empty canyon) */}
        <aside className="hidden md:block w-full md:w-[42%] lg:w-[40%] xl:w-[38%] h-full relative overflow-hidden bg-[#111224] border-l border-white/10 shrink-0">
          <RightMediaPane
            activeSection={activeSection}
            transitionCounter={transitionCounter}
          />
        </aside>
      </div>
    </div>
  );
}
