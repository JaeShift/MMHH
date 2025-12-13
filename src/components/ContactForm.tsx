"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const REASONS = [
  "Anxiety / Mood",
  "Sleep / Insomnia",
  "Brain Fog/Inattention",
  "PMDD",
  "Medication management",
  "Other",
] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [name, setName] = useState("");            // required
  const [email, setEmail] = useState("");          // required
  const [phone, setPhone] = useState("");          // optional
  const [reason, setReason] = useState<string>(REASONS[0]);
  const [message, setMessage] = useState("");      // required (short OK)
  const [contactPref, setContactPref] = useState("Email");
  const [bestTime, setBestTime] = useState("Anytime");
  const [consent, setConsent] = useState(false);

  // Anti-spam
  const [honey, setHoney] = useState(""); // should stay empty
  const [ts] = useState(() => Date.now()); // timestamp when form rendered

  const canSubmit = consent && name.trim() && email.trim() && status !== "loading";

  // Auto-resize textarea & character counter
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const maxLen = 2000;
  const remaining = useMemo(() => Math.max(0, maxLen - message.length), [message]);

  useEffect(() => {
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = "auto";
      ta.style.height = ta.scrollHeight + "px";
    }
  }, [message]);

  // Save draft in localStorage in case of accidental navigation
  useEffect(() => {
    const draft = { name, email, phone, reason, message, contactPref, bestTime };
    localStorage.setItem("contactDraft", JSON.stringify(draft));
  }, [name, email, phone, reason, message, contactPref, bestTime]);

  useEffect(() => {
    const raw = localStorage.getItem("contactDraft");
    if (raw) {
      try {
        const d = JSON.parse(raw);
        setName(d.name || "");
        setEmail(d.email || "");
        setPhone(d.phone || "");
        setReason(d.reason || REASONS[0]);
        setMessage(d.message || "");
        setContactPref(d.contactPref || "Email");
        setBestTime(d.bestTime || "Anytime");
      } catch {}
    }
  }, []);

  const resetForm = () => {
    setName(""); setEmail(""); setPhone(""); setReason(REASONS[0]); setMessage(""); setContactPref("Email"); setBestTime("Anytime"); setConsent(false);
    localStorage.removeItem("contactDraft");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("loading"); setError(null);

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      reason,
      message: message.slice(0, maxLen).trim(),
      contactPref,
      bestTime,
      // anti-spam
      honey,
      ts,
      now: Date.now(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || "Unable to send");
      }
      setStatus("success");
      resetForm();
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto max-w-2xl relative">
      {/* Decorative background elements */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#8B9D7F]/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#75866D]/10 rounded-full blur-2xl"></div>
      
      <div className="relative bg-gradient-to-br from-white/90 to-[color:var(--surface-elevated)]/80 backdrop-blur-sm border border-[color:var(--neutral-200)] shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 border-l-2 border-t-2 border-[#8B9D7F]/30"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 border-r-2 border-b-2 border-[#8B9D7F]/30"></div>
        
        {/* Nature-inspired decorative elements */}
        <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="50" rx="35" ry="20" transform="rotate(-30 50 50)" fill="#8B9D7F"/>
            <path d="M50 30 Q48 50 50 70" stroke="#75866D" strokeWidth="2.5"/>
          </svg>
        </div>
        <div className="absolute bottom-4 left-4 w-16 h-16 opacity-10 rotate-45">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="50" rx="38" ry="22" transform="rotate(20 50 50)" fill="#8B9D7F"/>
            <path d="M50 28 Q45 50 50 72" stroke="#75866D" strokeWidth="2.5"/>
          </svg>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-[color:var(--text-primary)] mb-2">
              Send Me a Message
            </h3>
            <p className="text-[color:var(--text-muted)] text-sm sm:text-base">
              Share what&apos;s on your mind — I will respond within 24 hours
            </p>
          </div>
        <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
      {/* Essential fields only */}
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-800">Name</label>
          <input
            id="name" name="name" required
            autoComplete="name"
            className="mt-1 w-full border border-slate-300 px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#75866D] focus:border-transparent"
            value={name} onChange={(e)=>setName(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-800">Email</label>
          <input
            id="email" name="email" type="email" required
            autoComplete="email" inputMode="email"
            className="mt-1 w-full border border-slate-300 px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#75866D] focus:border-transparent"
            value={email} onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-800">
            Phone <span className="text-slate-500 font-normal">(optional)</span>
          </label>
          <input
            id="phone" name="phone" type="tel"
            autoComplete="tel" inputMode="tel"
            className="mt-1 w-full border border-slate-300 px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#75866D] focus:border-transparent"
            placeholder="(555) 555-5555"
            value={phone} onChange={(e)=>setPhone(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-800">
            Message <span className="text-slate-500 font-normal">(optional)</span>
          </label>
          <textarea
            id="message" name="message"
            ref={textareaRef}
            rows={4} maxLength={maxLen}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-3 text-base resize-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#75866D] focus:border-transparent"
            placeholder="How can I help?"
            value={message} onChange={(e)=>setMessage(e.target.value)}
          />
          {message.length > 0 && (
            <div className="mt-1 text-xs text-slate-500">{remaining} characters left</div>
          )}
        </div>
      </div>

      {/* Simplified consent */}
      <div className="flex items-start gap-4">
        <input 
          id="consent" 
          type="checkbox" 
          checked={consent} 
          onChange={(e)=>setConsent(e.target.checked)} 
          className="mt-1 h-5 w-5 text-[#75866D] focus:ring-[#75866D] border-slate-300 rounded flex-shrink-0" 
        />
        <label htmlFor="consent" className="text-sm text-slate-700 leading-relaxed">
          I agree to be contacted about my inquiry. I understand this is not for medical emergencies or sensitive health information.
        </label>
      </div>

      {/* Honeypot (hidden) */}
      <div className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" value={honey} onChange={(e)=>setHoney(e.target.value)} />
      </div>

      <button
        type="submit" disabled={!canSubmit}
        className="w-full inline-flex items-center justify-center bg-[#75866D] px-6 py-4 text-white font-medium hover:bg-[#677560] disabled:opacity-60 disabled:cursor-not-allowed transition-colors min-h-[48px] text-base">
        {status === "loading" ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <div className="p-5 bg-white border-2 border-[#8B9D7F] shadow-sm">
          <p className="text-[#75866D] text-base font-medium">✓ Thank you! I received your message and will respond as soon as possible.</p>
        </div>
      )}
      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200">
          <p className="text-red-800 text-sm">{error || "Something went wrong."} You can also email <a className="underline font-medium" href="mailto:stephanie@modernmhh.com">stephanie@modernmhh.com</a>.</p>
        </div>
      )}
        </form>
        </div>
      </div>
    </div>
  );
}
