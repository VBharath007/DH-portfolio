"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { companyData } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import {
  Phone,
  MapPin,
  Send,
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Check,
  ExternalLink,
  X,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface FormState {
  name: string;
  phone: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    projectType: "Residential Building Work",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting">("idle");
  const [alertPopup, setAlertPopup] = useState<{
    isOpen: boolean;
    title: string;
    messages: string[];
  }>({
    isOpen: false,
    title: "",
    messages: [],
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const alertMessages: string[] = [];

    // Full name validation: minimum 3 characters
    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = "Full Name is required (minimum 3 characters).";
      alertMessages.push("Full Name is required (minimum 3 characters).");
    } else if (trimmedName.length < 3) {
      newErrors.name = "Full Name must be at least 3 characters.";
      alertMessages.push("Full Name must have at least 3 characters.");
    }

    // Mobile number validation: numbers only, 10 digits
    const digitsOnly = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required (numbers only).";
      alertMessages.push("Mobile number is required (numbers only).");
    } else if (digitsOnly.length !== 10) {
      newErrors.phone = "Enter a valid 10-digit mobile number.";
      alertMessages.push("Mobile number must be exactly 10 digits (numbers only).");
    }

    // Message validation: minimum 10 characters
    const trimmedMsg = formData.message.trim();
    if (!trimmedMsg) {
      newErrors.message = "Project requirements are required.";
      alertMessages.push("Project requirements field cannot be empty.");
    } else if (trimmedMsg.length < 10) {
      newErrors.message = "Please enter at least 10 characters.";
      alertMessages.push("Project requirements must be at least 10 characters.");
    }

    setErrors(newErrors);

    if (alertMessages.length > 0) {
      setAlertPopup({
        isOpen: true,
        title: "Please Complete Required Fields",
        messages: alertMessages,
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("idle");
      setShowSuccessPopup(true);
    }, 450);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      phone: "",
      projectType: "Residential Building Work",
      message: "",
    });
    setErrors({});
    setShowSuccessPopup(false);
  };

  const handleWhatsAppDispatch = (phoneRaw: string) => {
    const text = `Hello ${companyData.brandName},\nMy name is ${formData.name}.\nContact: ${formData.phone}\nProject Category: ${formData.projectType}\nRequirements: ${formData.message}`;
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${phoneRaw}?text=${encoded}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-neutral-50/50 to-white border-b border-neutral-200 relative overflow-hidden">
      {/* Ambient Glassmorphic Refraction Orbs */}
      <div className="absolute top-1/4 right-10 w-96 h-96 ambient-glow-emerald rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 ambient-glow-blue rounded-full blur-3xl pointer-events-none" />

      <div className="luxury-container relative z-10">
        {/* Section Heading */}
        <SectionHeading
          number="05"
          tagline="Direct Contact & Office Location"
          title={`Connect with ${companyData.brandName}`}
          subtitle="For residential construction, commercial developments, or PMC/EPC project management inquiries."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Direct Corporate Information Column - Animates from LEFT */}
          <ScrollReveal direction="left" delay={0.1} className="lg:col-span-5 space-y-6">
            <div className="p-8 glass-panel rounded-3xl border border-neutral-300/90 space-y-6 shadow-xl">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-500 font-mono block">
                OFFICE LOCATION &amp; CONTACT DETAILS
              </span>

              <div className="space-y-5">
                {/* Office Address */}
                <div className="flex items-start gap-4 text-sm text-neutral-700">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-900 block mb-1">Office Address</span>
                    <div className="text-xs sm:text-sm text-neutral-700 leading-relaxed space-y-0.5">
                      <span className="block">1, Anuppanadi Road, Teppakulam,</span>
                      <span className="block">Madurai – 625009,</span>
                      <span className="block">Tamil Nadu, India.</span>
                    </div>
                    <div className="mt-3">
                      <a
                        href={companyData.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider bg-white text-neutral-800 border border-neutral-300 px-4 py-2 rounded-xl hover:bg-neutral-50 hover:border-neutral-400 hover:text-black transition-all shadow-xs"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Get Directions</span>
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Numbers with tel: and WhatsApp links */}
                <div className="pt-4 border-t border-neutral-200/80">
                  <div className="flex items-start gap-4 text-sm text-neutral-700">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-full">
                      <span className="font-semibold text-neutral-900 block mb-2">
                        Direct Contact Numbers
                      </span>

                      <div className="space-y-3">
                        {companyData.contactNumbers.map((phone, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 glass-card-interactive rounded-2xl border border-neutral-300/90 flex flex-wrap items-center justify-between gap-2 shadow-xs"
                          >
                            <div>
                              <a
                                href={phone.telLink}
                                className="font-mono text-sm font-bold text-neutral-900 hover:text-black tracking-wide block"
                              >
                                {phone.display}
                              </a>
                              <span className="text-[10px] text-neutral-500 uppercase font-mono">
                                Voice Call (tel:)
                              </span>
                            </div>

                            <a
                              href={phone.whatsappLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 text-xs font-semibold hover:bg-emerald-500/25 transition-colors rounded-xl shadow-2xs"
                              aria-label={`Chat on WhatsApp with ${phone.display}`}
                            >
                              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                              <span>WhatsApp</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* GST Compliance Info */}
                <div className="pt-4 border-t border-neutral-200/80 text-xs text-neutral-600">
                  <span className="text-neutral-500 block uppercase tracking-widest text-[10px] font-mono">
                    GST REGISTRATION
                  </span>
                  <span className="font-mono font-bold text-neutral-900 text-sm">
                    {companyData.gstin}
                  </span>
                </div>
              </div>
            </div>

          </ScrollReveal>

          {/* Inquiry Form Column - Animates from RIGHT */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-7">
            <div className="p-8 sm:p-10 glass-panel rounded-3xl border border-neutral-300/90 shadow-2xl">
              <h3 className="font-serif-luxury text-2xl font-bold text-neutral-900 mb-2">
                Project Consultation Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mb-6">
                Submit preliminary project parameters to connect directly with the Managing Director&apos;s office.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-700"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[10px] text-neutral-400">Min 3 characters</span>
                  </div>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. S. Murugesan"
                    className={`w-full px-4 py-3 glass-input text-xs sm:text-sm text-neutral-900 transition-colors focus:outline-none focus:border-black rounded-xl ${errors.name ? "border-red-500 bg-red-50/20" : ""
                      }`}
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1.5 text-[11px] text-red-600 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Phone & Work Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-700"
                      >
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <span className="text-[10px] text-neutral-400 font-mono">
                        {formData.phone.length}/10 digits
                      </span>
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      value={formData.phone}
                      onKeyDown={(e) => {
                        const allowed = [
                          "Backspace",
                          "Delete",
                          "Tab",
                          "ArrowLeft",
                          "ArrowRight",
                          "Home",
                          "End",
                        ];
                        if (
                          !allowed.includes(e.key) &&
                          !/^[0-9]$/.test(e.key) &&
                          !e.ctrlKey &&
                          !e.metaKey
                        ) {
                          e.preventDefault();
                        }
                      }}
                      onChange={(e) => {
                        const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                        setFormData({ ...formData, phone: digits });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="e.g. 9840012345 (Numbers only)"
                      className={`w-full px-4 py-3 glass-input text-xs sm:text-sm text-neutral-900 transition-colors focus:outline-none focus:border-black rounded-xl ${errors.phone ? "border-red-500 bg-red-50/20" : ""
                        }`}
                    />
                    {errors.phone && (
                      <span className="flex items-center gap-1.5 text-[11px] text-red-600 mt-1.5 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
                    >
                      Work Category
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 glass-input text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-black rounded-xl"
                    >
                      <option value="Residential Building Work">Residential Building Work</option>
                      <option value="Commercial Building Work">Commercial Building Work</option>
                      <option value="Project Management Consultancy (PMC)">Project Management Consultancy (PMC)</option>
                      <option value="Engineering, Procurement & Construction (EPC)">Engineering, Procurement &amp; Construction (EPC)</option>
                      <option value="Project Delivery Inquiry">Comprehensive Project Delivery</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-700"
                    >
                      Project Requirements <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[10px] text-neutral-400">Min 10 characters</span>
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Please describe your residential/commercial building requirement or PMC/EPC scope..."
                    className={`w-full px-4 py-3 glass-input text-xs sm:text-sm text-neutral-900 transition-colors focus:outline-none focus:border-black resize-y rounded-xl ${errors.message ? "border-red-500 bg-red-50/20" : ""
                      }`}
                  />
                  {errors.message && (
                    <span className="flex items-center gap-1.5 text-[11px] text-red-600 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    disabled={status === "submitting"}
                    icon={<Send className="w-4 h-4" />}
                  >
                    {status === "submitting" ? "Processing..." : "Submit Consultation Request"}
                  </Button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ALERT POPUP MODAL (When inputs are missing or invalid) */}
      <AnimatePresence>
        {alertPopup.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAlertPopup({ isOpen: false, title: "", messages: [] })}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              role="alertdialog"
              aria-modal="true"
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-red-200 z-10"
            >
              <button
                type="button"
                onClick={() => setAlertPopup({ isOpen: false, title: "", messages: [] })}
                className="absolute top-5 right-5 p-1 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Close alert"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-red-100 border border-red-200 flex items-center justify-center text-red-600 shrink-0 shadow-xs">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-red-600 block">
                    Form Validation Alert
                  </span>
                  <h4 className="text-base font-bold text-neutral-900 mt-0.5">
                    {alertPopup.title}
                  </h4>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {alertPopup.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-red-50/70 border border-red-100 text-xs text-red-800 font-medium"
                  >
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{msg}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setAlertPopup({ isOpen: false, title: "", messages: [] })}
                  className="w-full py-2.5 px-4 bg-neutral-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors shadow-xs"
                >
                  OK, Fix Form Fields
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SUCCESS POPUP MODAL (When form is valid & submitted successfully) */}
      <AnimatePresence>
        {showSuccessPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessPopup(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-200 z-10"
            >
              <button
                type="button"
                onClick={() => setShowSuccessPopup(false)}
                className="absolute top-5 right-5 p-1 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-emerald-600 block">
                    Submission Confirmed
                  </span>
                  <h4 className="text-xl font-serif-luxury font-bold text-neutral-900 mt-0.5">
                    Inquiry Submitted Successfully!
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    Thank you, <strong className="text-neutral-900">{formData.name}</strong>. Your consultation parameters have been registered.
                  </p>
                </div>
              </div>

              {/* Inquiry Summary Box */}
              <div className="mt-5 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs space-y-2">
                <div className="flex justify-between items-center py-1 border-b border-neutral-200/80">
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px] font-semibold">Contact Name</span>
                  <span className="font-semibold text-neutral-900">{formData.name}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-neutral-200/80">
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px] font-semibold">Mobile Number</span>
                  <span className="font-mono font-semibold text-neutral-900">+91 {formData.phone}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-neutral-200/80">
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px] font-semibold">Category</span>
                  <span className="font-semibold text-neutral-900">{formData.projectType}</span>
                </div>
                <div className="pt-1">
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px] font-semibold block mb-1">Requirements</span>
                  <p className="text-neutral-700 italic text-[11px] line-clamp-2">&ldquo;{formData.message}&rdquo;</p>
                </div>
              </div>

              {/* Direct Instant Dispatch to WhatsApp */}
              <div className="mt-5 space-y-2.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 block">
                  Connect Directly with Managing Director via WhatsApp:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppDispatch(companyData.contactNumbers[0].raw)}
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-3.5 py-2.5 text-xs font-semibold rounded-xl hover:bg-emerald-700 transition-colors shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleWhatsAppDispatch(companyData.contactNumbers[1].raw)}
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-3.5 py-2.5 text-xs font-semibold rounded-xl hover:bg-emerald-700 transition-colors shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex items-center justify-between gap-3 pt-4 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  Clear &amp; New Form
                </button>
                <button
                  type="button"
                  onClick={() => setShowSuccessPopup(false)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-neutral-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors shadow-xs"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Done</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
