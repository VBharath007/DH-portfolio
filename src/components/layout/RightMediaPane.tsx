"use client";

import React from "react";
import Image from "next/image";

interface RightMediaPaneProps {
  activeSection?: string;
  slideDirection?: "forward" | "backward";
  transitionCounter?: number;
}

export const RightMediaPane: React.FC<RightMediaPaneProps> = React.memo(() => {
  return (
    <div className="relative w-full h-full min-h-[460px] bg-[#0b0c16] overflow-hidden select-none">
      {/* Edge-to-edge container: Fills 100% of the right pane with zero empty space */}
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src="/images/ceo/ceo-about-expanded.jpg"
          alt="N.E. Praveen Elangovan — Managing Director"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Ultra subtle top and bottom fade so it blends seamlessly with dark layout */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c16]/30 via-transparent to-black/20 pointer-events-none" />
      </div>
    </div>
  );
});

RightMediaPane.displayName = "RightMediaPane";

