"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, ExternalLink, CheckCircle, ArrowLeft, X, AlertCircle } from "lucide-react";
import { companyData } from "@/data/company";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface MarvioContactProps {
  onNavigate?: (section: string) => void;
}

const PRIMARY_WHATSAPP_RAW = "919566320944";
const PRIMARY_WHATSAPP_DISPLAY = "+91 95663 20944";

export const MarvioContact: React.FC<MarvioContactProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
  }>({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    phone: string;
    message: string;
    whatsappUrl: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const phoneDigits = formData.phone.replace(/\D/g, "");
    const newErrors: { name?: string; phone?: string } = {};

    if (!trimmedName || trimmedName.length < 3) {
      newErrors.name = "Full Name must be at least 3 characters.";
    } else if (/\d/.test(trimmedName)) {
      newErrors.name = "Numbers are not allowed in the name field.";
    }

    if (!phoneDigits) {
      newErrors.phone = "Phone number is required (10 digits).";
    } else if (phoneDigits.length !== 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Format professional WhatsApp message with all form fields
    const formattedMessage =
      `*New Executive Inquiry - DANAM HOLDINGS*
----------------------------------------
*Name:* ${formData.name.trim()}
*Phone:* ${formData.phone.trim()}
*Email:* ${formData.email.trim()}
*Inquiry / Requirements:*
${formData.message.trim()}
----------------------------------------
Sent via Danam Holdings Portfolio`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${PRIMARY_WHATSAPP_RAW}?text=${encodedText}`;

    // Directly navigate / open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Save submitted data for popup review & show modal
    setSubmittedData({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      whatsappUrl,
    });
    setShowSuccessModal(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="w-full flex flex-col justify-center py-4 sm:py-8 space-y-8 relative">
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
        {/* Headquarters Address */}
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

        {/* Executive Telephony: Both phone numbers (+91 81100 06913 & +91 95663 20944) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:bg-[#181a32] hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-300 flex items-start gap-4 group">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
            <Phone className="w-5 h-5" />
          </div>
          <div className="relative z-10 flex-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold block mb-1.5">
              EXECUTIVE TELEPHONY
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <a
                href="tel:+918110006913"
                className="text-sm font-bold text-white hover:text-emerald-400 transition-colors font-mono inline-flex items-center gap-1.5"
              >
                <span>+91 81100 06913</span>
              </a>
              <span className="text-neutral-600 hidden sm:inline">&bull;</span>
              <a
                href="tel:+919566320944"
                className="text-sm font-bold text-white hover:text-emerald-400 transition-colors font-mono inline-flex items-center gap-1.5"
              >
                <span>+91 95663 20944</span>
              </a>
            </div>
          </div>
        </div>

        {/* Digital Dispatch (Email) */}
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

        {/* Dedicated WhatsApp Button (Connected to +91 95663 20944) */}
        <a
          href={`https://wa.me/${PRIMARY_WHATSAPP_RAW}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full p-4 rounded-2xl reflective-glass-pill bg-emerald-500/15 hover:bg-emerald-500/25 border-emerald-500/40 text-emerald-400 font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2.5 group cursor-pointer shadow-lg shadow-emerald-950/40"
        >
          <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
          <span>Connect via WhatsApp</span>
        </a>
      </div>

      {/* Inquiry Form with Reflective Glass */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-2xl shadow-black/60 relative overflow-hidden">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-400 block mb-2">
          TRANSMISSION PORTAL
        </span>
        <h3 className="text-2xl font-bold text-white mb-2 font-serif">
          Send an Executive Inquiry
        </h3>
        <p className="text-xs text-neutral-400 mb-6">
          Submit your requirements below. Submitting will forward your details directly to our official WhatsApp ({PRIMARY_WHATSAPP_DISPLAY}).
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-[10px] font-mono uppercase text-neutral-400">
                  Your Full Name *
                </label>
                <span className="text-[10px] text-neutral-400 font-mono">Min 3 chars &bull; No numbers</span>
              </div>
              <input
                type="text"
                required
                minLength={3}
                value={formData.name}
                onKeyDown={(e) => {
                  // Block numeric characters 0-9
                  if (/^[0-9]$/.test(e.key) && !e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                  }
                }}
                onChange={(e) => {
                  // Strictly remove any numbers even if pasted
                  const sanitizedName = e.target.value.replace(/[0-9]/g, "");
                  setFormData({ ...formData, name: sanitizedName });
                  if (errors.name && sanitizedName.trim().length >= 3) {
                    setErrors((prev) => ({ ...prev, name: undefined }));
                  }
                }}
                placeholder="e.g. Anand Kumar"
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.name ? "border-red-500/80 focus:border-red-500" : "border-white/10 focus:border-emerald-400"
                  } text-white placeholder-neutral-500 text-xs focus:outline-none transition-colors`}
              />
              {errors.name && (
                <span className="flex items-center gap-1.5 text-[11px] text-red-400 mt-1.5 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.name}
                </span>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-[10px] font-mono uppercase text-neutral-400">
                  Phone Number *
                </label>
                {/* <span className="text-[10px] text-neutral-400 font-mono">Numbers only</span> */}
              </div>
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]{10}"
                maxLength={10}
                required
                value={formData.phone}
                onKeyDown={(e) => {
                  // Allow navigation and editing control keys
                  const allowedControlKeys = [
                    "Backspace",
                    "Delete",
                    "Tab",
                    "ArrowLeft",
                    "ArrowRight",
                    "Home",
                    "End",
                    "Enter",
                  ];
                  // Block any character that is not 0-9
                  if (
                    !allowedControlKeys.includes(e.key) &&
                    !/^[0-9]$/.test(e.key) &&
                    !e.ctrlKey &&
                    !e.metaKey
                  ) {
                    e.preventDefault();
                    return;
                  }
                  // Strictly block typing more than 10 digits
                  const input = e.currentTarget;
                  const isSelecting = input.selectionStart !== input.selectionEnd;
                  if (/^[0-9]$/.test(e.key) && formData.phone.length >= 10 && !isSelecting) {
                    e.preventDefault();
                  }
                }}
                onChange={(e) => {
                  // Strictly allow only numbers (0-9) and cap at exactly 10 digits even on paste
                  const numbersOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setFormData({ ...formData, phone: numbersOnly });
                  if (errors.phone && numbersOnly.length === 10) {
                    setErrors((prev) => ({ ...prev, phone: undefined }));
                  }
                }}
                placeholder="9876543210"
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.phone ? "border-red-500/80 focus:border-red-500" : "border-white/10 focus:border-emerald-400"
                  } text-white placeholder-neutral-500 text-xs focus:outline-none transition-colors`}
              />
              {errors.phone && (
                <span className="flex items-center gap-1.5 text-[11px] text-red-400 mt-1.5 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.phone}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-mono uppercase text-neutral-400 mb-1.5">
              Email Address *
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
              Project Mandate / Inquiry Details *
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
            className="w-full py-3.5 px-6 rounded-xl bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-white hover:shadow-lg hover:shadow-emerald-400/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit &amp; Send to WhatsApp</span>
          </button>
        </form>
      </div>

      {/* Success Popup Modal */}
      {showSuccessModal && submittedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
          {/* Backdrop Click */}
          <div
            className="absolute inset-0"
            onClick={() => setShowSuccessModal(false)}
          />

          <div className="relative w-full max-w-lg rounded-3xl bg-[#0e101f] border border-white/20 border-t-emerald-400/60 shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(16,185,129,0.25)] p-6 sm:p-8 text-center overflow-hidden z-10">
            {/* Ambient emerald orb */}
            <div className="absolute -top-20 -left-20 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Glowing Success Icon */}
            <div className="relative w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(52,211,153,0.5)]">
              <CheckCircle className="w-8 h-8" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping" />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              TRANSMISSION SUCCESSFUL
            </div>

            {/* Title & Desc */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-serif mb-2">
              Inquiry Sent Successfully!
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
              Your inquiry has been formulated and redirected to our official WhatsApp (<span className="text-emerald-400 font-mono font-bold">{PRIMARY_WHATSAPP_DISPLAY}</span>).
            </p>

            {/* Summary Card */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-left space-y-2 mb-6">
              <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 border-b border-white/5 pb-1 flex justify-between items-center">
                <span>Inquiry Summary</span>
                <span className="text-emerald-400 flex items-center gap-1 font-mono">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400 inline shrink-0" />
                  {PRIMARY_WHATSAPP_DISPLAY}
                </span>
              </div>
              <div className="text-xs space-y-1 pt-1">
                <p className="text-neutral-300">
                  <span className="text-neutral-400">Name:</span> <strong className="text-white ml-1">{submittedData.name}</strong>
                </p>
                <p className="text-neutral-300">
                  <span className="text-neutral-400">Phone:</span> <span className="text-white font-mono ml-1">{submittedData.phone}</span>
                </p>
                {submittedData.email && (
                  <p className="text-neutral-300">
                    <span className="text-neutral-400">Email:</span> <span className="text-white font-mono ml-1">{submittedData.email}</span>
                  </p>
                )}
                <div className="pt-1.5 text-neutral-300">
                  <span className="text-neutral-400 text-[11px] block mb-1">Message Preview:</span>
                  <p className="text-[11px] text-neutral-200 bg-black/40 p-2.5 rounded-xl italic border border-white/5 leading-relaxed line-clamp-3">
                    &ldquo;{submittedData.message}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={submittedData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-400/20"
              >
                <WhatsAppIcon className="w-4 h-4 text-black shrink-0" />
                <span>Open WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/15 cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
