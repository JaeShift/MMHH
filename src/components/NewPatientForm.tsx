"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const APPOINTMENT_REASONS = [
  "Mental health services",
  "Hormone therapy consultation",
  "Medication management",
  "Not sure / General questions",
] as const;

const CONTACT_PREFERENCES = [
  "Email",
  "Phone call",
  "Text message",
] as const;

const BEST_TIMES = [
  "Morning (8am-12pm)",
  "Afternoon (12pm-5pm)",
  "Evening (5pm-8pm)",
  "Anytime",
] as const;

export default function NewPatientForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  // Personal Information
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  // Appointment Preference
  const [appointmentReason, setAppointmentReason] = useState<string>(APPOINTMENT_REASONS[0]);
  const [contactPreference, setContactPreference] = useState<string>(CONTACT_PREFERENCES[0]);
  const [bestTime, setBestTime] = useState<string>(BEST_TIMES[3]);
  
  // Additional Info (non-PHI)
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [consent, setConsent] = useState(false);
  const [practiceBetterConsent, setPracticeBetterConsent] = useState(false);

  // Anti-spam
  const [honey, setHoney] = useState("");
  const [ts] = useState(() => Date.now());

  const canSubmit = 
    consent && 
    practiceBetterConsent &&
    firstName.trim() && 
    lastName.trim() && 
    dateOfBirth.trim() && 
    email.trim() && 
    phone.trim() && 
    status !== "loading";

  // Auto-resize textarea
  const additionalInfoRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const ta = additionalInfoRef.current;
    if (ta) {
      ta.style.height = "auto";
      ta.style.height = ta.scrollHeight + "px";
    }
  }, [additionalInfo]);

  // Save draft in localStorage
  useEffect(() => {
    const draft = {
      firstName, lastName, dateOfBirth, email, phone,
      appointmentReason, contactPreference, bestTime, additionalInfo
    };
    localStorage.setItem("newPatientDraft", JSON.stringify(draft));
  }, [firstName, lastName, dateOfBirth, email, phone, 
      appointmentReason, contactPreference, bestTime, additionalInfo]);

  useEffect(() => {
    const raw = localStorage.getItem("newPatientDraft");
    if (raw) {
      try {
        const d = JSON.parse(raw);
        setFirstName(d.firstName || "");
        setLastName(d.lastName || "");
        setDateOfBirth(d.dateOfBirth || "");
        setEmail(d.email || "");
        setPhone(d.phone || "");
        setAppointmentReason(d.appointmentReason || APPOINTMENT_REASONS[0]);
        setContactPreference(d.contactPreference || CONTACT_PREFERENCES[0]);
        setBestTime(d.bestTime || BEST_TIMES[3]);
        setAdditionalInfo(d.additionalInfo || "");
      } catch {}
    }
  }, []);

  const resetForm = () => {
    setFirstName(""); setLastName(""); setDateOfBirth(""); setEmail(""); setPhone("");
    setAppointmentReason(APPOINTMENT_REASONS[0]); 
    setContactPreference(CONTACT_PREFERENCES[0]); setBestTime(BEST_TIMES[3]);
    setAdditionalInfo("");
    setConsent(false);
    setPracticeBetterConsent(false);
    localStorage.removeItem("newPatientDraft");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("loading"); setError(null);

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      dateOfBirth: dateOfBirth.trim(),
      email: email.trim(),
      phone: phone.trim(),
      appointmentReason,
      contactPreference,
      bestTime,
      additionalInfo: additionalInfo.trim(),
      honey,
      ts,
      now: Date.now(),
    };

    try {
      const res = await fetch("/api/new-patient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || "Unable to submit form");
      }
      setStatus("success");
      resetForm();
      // Redirect to thank you page after 2 seconds
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 2000);
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10">
        <form onSubmit={handleSubmit} className="space-y-8" aria-label="New Patient Intake Form">
          
          {/* Personal Information */}
          <section>
            <h3 className="text-xl font-semibold text-[color:var(--text-primary)] mb-4 pb-2 border-b-2 border-[#75866D]">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-800 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName" name="firstName" required
                  autoComplete="given-name"
                  className="w-full rounded-md border border-slate-300 px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#75866D] focus:border-transparent"
                  value={firstName} onChange={(e)=>setFirstName(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-800 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName" name="lastName" required
                  autoComplete="family-name"
                  className="w-full rounded-md border border-slate-300 px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#75866D] focus:border-transparent"
                  value={lastName} onChange={(e)=>setLastName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-slate-800 mb-1">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  id="dateOfBirth" name="dateOfBirth" type="text" required
                  autoComplete="bday"
                  placeholder="MM/DD/YYYY"
                  className="w-full rounded-md border border-slate-300 px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#75866D] focus:border-transparent"
                  value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-800 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email" name="email" type="email" required
                  autoComplete="email" inputMode="email"
                  className="w-full rounded-md border border-slate-300 px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#75866D] focus:border-transparent"
                  value={email} onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-800 mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone" name="phone" type="tel" required
                  autoComplete="tel" inputMode="tel"
                  placeholder="(555) 555-5555"
                  className="w-full rounded-md border border-slate-300 px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#75866D] focus:border-transparent"
                  value={phone} onChange={(e)=>setPhone(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Appointment Preference */}
          <section>
            <h3 className="text-xl font-semibold text-[color:var(--text-primary)] mb-4 pb-2 border-b-2 border-[#75866D]">
              Appointment Preferences
            </h3>
            
            <div className="space-y-4">
              {/* What service are they interested in */}
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-3">
                  What type of service are you interested in? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {APPOINTMENT_REASONS.map((reason) => (
                    <label 
                      key={reason}
                      className="relative flex items-center cursor-pointer bg-white border-2 border-slate-200 rounded-lg px-4 py-3 hover:border-[#75866D]/50 hover:bg-slate-50 transition-all has-[:checked]:border-[#75866D] has-[:checked]:bg-[#75866D]/5 has-[:checked]:shadow-sm"
                    >
                      <input
                        type="radio"
                        name="appointmentReason"
                        value={reason}
                        checked={appointmentReason === reason}
                        onChange={(e) => setAppointmentReason(e.target.value)}
                        className="h-4 w-4 text-[#75866D] focus:ring-[#75866D] border-slate-300 flex-shrink-0"
                        required
                      />
                      <span className="ml-3 text-sm font-medium text-slate-900">
                        {reason}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact & Scheduling Preferences */}
          <section>
            <h3 className="text-xl font-semibold text-[color:var(--text-primary)] mb-4 pb-2 border-b-2 border-[#75866D]">
              Contact Preferences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contactPreference" className="block text-sm font-medium text-slate-800 mb-2">
                  Preferred Contact Method <span className="text-red-500">*</span>
                </label>
                <select
                  id="contactPreference" name="contactPreference" required
                  className="w-full rounded-lg border-2 border-slate-300 px-4 py-3 text-base font-medium text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#75866D] focus:border-[#75866D] transition-colors appearance-none cursor-pointer hover:border-slate-400"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1.25rem',
                    paddingRight: '2.5rem'
                  }}
                  value={contactPreference} 
                  onChange={(e)=>setContactPreference(e.target.value)}
                >
                  {CONTACT_PREFERENCES.map(cp => <option key={cp} value={cp}>{cp}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="bestTime" className="block text-sm font-medium text-slate-800 mb-2">
                  Best Time to Contact <span className="text-red-500">*</span>
                </label>
                <select
                  id="bestTime" name="bestTime" required
                  className="w-full rounded-lg border-2 border-slate-300 px-4 py-3 text-base font-medium text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#75866D] focus:border-[#75866D] transition-colors appearance-none cursor-pointer hover:border-slate-400"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1.25rem',
                    paddingRight: '2.5rem'
                  }}
                  value={bestTime} 
                  onChange={(e)=>setBestTime(e.target.value)}
                >
                  {BEST_TIMES.map(bt => <option key={bt} value={bt}>{bt}</option>)}
                </select>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section>
            <h3 className="text-xl font-semibold text-[color:var(--text-primary)] mb-4 pb-2 border-b-2 border-[#75866D]">
              Additional Information
            </h3>
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-slate-800 mb-1">
                Questions or comments? <span className="text-slate-500 font-normal">(optional)</span>
              </label>
              <textarea
                id="additionalInfo" name="additionalInfo"
                ref={additionalInfoRef}
                rows={4}
                className="w-full rounded-md border border-slate-300 px-3 py-3 text-base resize-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#75866D] focus:border-transparent"
                placeholder="Any scheduling preferences or general questions (please do not include health information)"
                value={additionalInfo} onChange={(e)=>setAdditionalInfo(e.target.value)}
              />
              <p className="mt-2 text-sm text-slate-600 italic">
                Note: Detailed health information will be collected securely during your appointment.
              </p>
            </div>
          </section>

          {/* Consent */}
          <div className="space-y-3">
            <div className="flex items-start gap-4 bg-slate-50 p-4 rounded-lg">
              <input 
                id="consent" 
                type="checkbox" 
                checked={consent} 
                onChange={(e)=>setConsent(e.target.checked)} 
                className="mt-1 h-5 w-5 text-[#75866D] focus:ring-[#75866D] border-slate-300 rounded flex-shrink-0" 
              />
              <label htmlFor="consent" className="text-sm text-slate-700 leading-relaxed">
                <span className="font-medium">I agree</span> to be contacted by Modern Mental Health & Hormones regarding appointment scheduling. I understand this is not for medical emergencies. For emergencies, I should call 911 or go to the nearest emergency room.
              </label>
            </div>

            <div className="flex items-start gap-4 bg-slate-50 p-4 rounded-lg">
              <input 
                id="practiceBetterConsent" 
                type="checkbox" 
                checked={practiceBetterConsent} 
                onChange={(e)=>setPracticeBetterConsent(e.target.checked)} 
                className="mt-1 h-5 w-5 text-[#75866D] focus:ring-[#75866D] border-slate-300 rounded flex-shrink-0" 
              />
              <label htmlFor="practiceBetterConsent" className="text-sm text-slate-700 leading-relaxed">
                <span className="font-medium">I agree</span> for this information to be shared with Practice Better, our secure practice management platform used for appointment scheduling and patient care coordination.
              </label>
            </div>
          </div>

          {/* Honeypot (hidden) */}
          <div className="hidden">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" value={honey} onChange={(e)=>setHoney(e.target.value)} />
          </div>

          <button
            type="submit" disabled={!canSubmit}
            className="w-full inline-flex items-center justify-center gap-3 rounded-md bg-[#75866D] px-6 py-4 text-white font-medium hover:bg-[#677560] disabled:opacity-60 disabled:cursor-not-allowed transition-colors min-h-[48px] text-base">
            {status === "loading" && (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            {status === "loading" ? "Submitting…" : "Request Appointment"}
          </button>
          {status === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-800 text-sm">{error || "Something went wrong."} You can also email <a className="underline font-medium" href="mailto:stephanie@modernmhh.com">stephanie@modernmhh.com</a>.</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

