import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] px-6">
      <div className="max-w-md w-full text-center p-8 bg-white border border-neutral-200 shadow-sm">
        <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
          404 ERROR • RESOURCE NOT LOCATED
        </span>
        <h1 className="font-serif-luxury text-3xl font-bold text-neutral-900 mb-4">
          Architectural Landmark Not Found
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600 mb-8 leading-relaxed">
          The requested coordinate or project specification does not exist in the current portfolio index.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Executive Portfolio</span>
        </Link>
      </div>
    </div>
  );
}
