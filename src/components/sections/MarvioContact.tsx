"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, ExternalLink, CheckCircle, ArrowLeft } from "lucide-react";
import { companyData } from "@/data/company";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface MarvioContactProps {
  onNavigate?: (section: string) => void;
}

export const MarvioContact: React.FC<MarvioContactProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const primaryContact = companyData.contactNumbers[0];

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
          Contact &bull; Direct Executive Communication
        </span>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full reflective-glass-pill mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-emerald-400">
            CONNECT DIRECTLY
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-serif">
          Initiate Strategic Engagement
        </h2>
        <p className="text-sm text-neutral-400 mt-3 leading-relaxed max-w-xl">
          Connect directly with the Executive Office of DANAM HOLDINGS for project consultations, turnkey development mandates, and EPC collaborations.
        </p>
      </div>

      {/* Corporate Coordinates Cards with Reflective Glass */}
      <div className="space-y-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:bg-[#181a32] hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-300 flex items-start gap-4 group">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="relative z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
              CORPORATE HEADQUARTERS
            </span>
            <p className="text-xs text-white leading-relaxed">
              {companyData.address.fullAddress}
            </p>
            <a
              href={companyData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 font-mono uppercase tracking-wider mt-2 transition-colors"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {primaryContact && (
          <div className="p-4 sm:p-5 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:bg-[#181a32] hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-300 flex items-start gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
              <Phone className="w-5 h-5" />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
                EXECUTIVE TELEPHONY
              </span>
              <a
                href={primaryContact.telLink}
                className="text-sm font-bold text-white hover:text-emerald-400 transition-colors font-mono"
              >
                {primaryContact.display}
              </a>
              <span className="text-[11px] text-neutral-400 block mt-0.5">
                Direct Line &bull; Mon - Sat 9:00 AM - 7:00 PM IST
              </span>
            </div>
          </div>
        )}

        <div className="p-4 sm:p-5 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:bg-[#181a32] hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-300 flex items-start gap-4 group">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
            <Mail className="w-5 h-5" />
          </div>
          <div className="relative z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
              DIGITAL DISPATCH
            </span>
            <a
              href="mailto:contact@danamholdings.com"
              className="text-sm font-bold text-white hover:text-emerald-400 transition-colors font-mono"
            >
              contact@danamholdings.com
            </a>
            <span className="text-[11px] text-neutral-400 block mt-0.5">
              Direct Inquiries &amp; Turnkey Tenders
            </span>
          </div>
        </div>

        {primaryContact?.whatsappLink && (
          <a
            href={primaryContact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-4 rounded-2xl reflective-glass-pill bg-emerald-500/15 hover:bg-emerald-500/25 border-emerald-500/40 text-emerald-400 font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2.5 group cursor-pointer shadow-lg shadow-emerald-950/40"
          >
            <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
            <span>Connect via WhatsApp</span>
          </a>
        )}
      </div>

      {/* Inquiry Form with Reflective Glass */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-2xl shadow-black/60 relative overflow-hidden">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-400 block mb-2">
          TRANSMISSION PORTAL
        </span>
        <h3 className="text-2xl font-bold text-white mb-6 font-serif">
          Send an Executive Inquiry
        </h3>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Transmission Received</h4>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto">
              Thank you. Your inquiry has been forwarded to Mr. Praveen Elangovan&apos;s executive office. We will respond promptly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase text-neutral-400 mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Anand Kumar"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase text-neutral-400 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase text-neutral-400 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="anand@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase text-neutral-400 mb-1.5">
                Project Mandate / Inquiry Details
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please summarize your scope, land area, or consultation requirements..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-400/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Executive Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
