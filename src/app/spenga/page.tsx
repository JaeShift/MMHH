"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Lock, ShieldCheck, Sparkles } from "lucide-react";
import { useState, useTransition } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { subscribeAction } from "@/domains/newsletter/actions/NewsletterActions";
import Image from "next/image";

export default function SpengaNewsletterPage() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState<"Gahanna" | "Hilliard" | "">("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isPending, startTransition] = useTransition();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setStatus("idle");

    if (!location) {
      setStatus("error");
      setMessage("Please select a location.");
      return;
    }

    startTransition(async () => {
      const result = await subscribeAction({
        firstName,
        email,
        source: `SPENGA ${location} QR`,
      });

      if (!result.success) {
        setStatus("error");
        setMessage(result.error || "Unable to subscribe right now.");
        return;
      }

      setStatus("success");
      setMessage("You're in! Your first email starts this week. Welcome to The Empowered Project.");
      setFirstName("");
      setEmail("");
      setLocation("");
    });
  }

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FAF7F2] via-[#F5F1E9] to-[#EBE4D6]">
        {/* Background texture + glow */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhaW4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhaW4pIi8+PC9zdmc+')] opacity-40" />
        <div className="absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-[#B5BDAC]/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[#E2D9CD]/30 blur-[120px]" />

        <section className="relative py-16 md:py-24 px-4">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* LEFT — Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center"
            >
              {/* Mini header */}
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-[#75866D]">
                SPENGA × Modern MHH
              </p>

              {/* Headline */}
              <h1 className="font-heading text-5xl font-light italic leading-[1.1] tracking-tight text-black md:text-6xl lg:text-7xl">
                The{" "}
                <motion.span
                  className="relative inline-block cursor-pointer"
                  initial={{ y: -100, opacity: 0, rotateX: -90 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1,
                    rotateX: 0
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.8,
                    ease: [0.34, 1.56, 0.64, 1],
                    type: "spring",
                    stiffness: 100
                  }}
                  style={{ perspective: "1000px" }}
                >
                  {/* Main text - black */}
                  <motion.span
                    className="relative z-10 inline-block text-black transition-all duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.4 }}
                  >
                    Empowered
                  </motion.span>
                  
                </motion.span>{" "}
                Project
              </h1>

              {/* Subhead */}
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
                A 4-week wellness program delivered to your inbox — designed for active women who want real guidance on mood, hormones, and mental health.
              </p>

              {/* Benefits */}
              <ul className="mt-8 space-y-3 text-center">
                {[
                  "One powerful email per week for 4 weeks",
                  "PMHNP-led insights on hormones, stress, and sleep",
                  "Practical tools you can use immediately",
                ].map((benefit, idx) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                    className="flex items-center justify-center gap-3 text-[15px] leading-relaxed text-neutral-700"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#75866D]" strokeWidth={2.5} />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Trust row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-4 border-t border-neutral-200 pt-6"
              >
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <ShieldCheck className="h-4 w-4 text-[#75866D]" />
                  <span>100% Free</span>
                </div>
                <div className="h-3 w-px bg-neutral-300" />
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <Lock className="h-4 w-4 text-[#75866D]" />
                  <span>No Spam</span>
                </div>
                <div className="h-3 w-px bg-neutral-300" />
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <Sparkles className="h-4 w-4 text-[#75866D]" />
                  <span>Educational Only</span>
                </div>
              </motion.div>

              {/* Provider credibility */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-8 flex items-center justify-center gap-3"
              >
                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#75866D]/20">
                  <Image
                    src="/stephanie-headshot.jpg"
                    alt="Stephanie Nichols"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-black">Stephanie Nichols, PMHNP-BC</p>
                  <p className="text-sm text-neutral-500">Women&apos;s Mental Health Specialist</p>
                </div>
              </motion.div>

              {/* Partnership badge */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-6 text-center text-xs text-neutral-400"
              >
                In partnership with SPENGA
              </motion.p>
            </motion.div>

            {/* RIGHT — Signup card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto w-full max-w-lg"
            >
              <form
                onSubmit={onSubmit}
                className="relative overflow-hidden rounded-2xl border border-white/60 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-sm"
              >
                {/* Free badge */}
                <div className="absolute right-6 top-6">
                  <span className="inline-block rounded-full bg-[#75866D] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                    Free
                  </span>
                </div>

                <h2 className="font-heading text-3xl font-light italic text-black">
                  Start Your Journey
                </h2>
                <p className="mt-2 text-sm text-neutral-600">
                  4 weeks • 4 emails
                </p>

                <div className="mt-6 space-y-3">
                  <input
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="First name"
                    autoComplete="given-name"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 py-3 text-[15px] outline-none transition-all placeholder:text-neutral-400 focus:border-[#75866D] focus:bg-white focus:ring-2 focus:ring-[#75866D]/20"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email address"
                    autoComplete="email"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 py-3 text-[15px] outline-none transition-all placeholder:text-neutral-400 focus:border-[#75866D] focus:bg-white focus:ring-2 focus:ring-[#75866D]/20"
                  />
                  <select
                    required
                    value={location}
                    onChange={(event) => setLocation(event.target.value as "Gahanna" | "Hilliard")}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 py-3 text-[15px] outline-none transition-all text-black focus:border-[#75866D] focus:bg-white focus:ring-2 focus:ring-[#75866D]/20"
                  >
                    <option value="" className="text-neutral-400">Select location</option>
                    <option value="Gahanna">SPENGA Gahanna</option>
                    <option value="Hilliard">SPENGA Hilliard</option>
                  </select>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full rounded-xl bg-[#75866D] px-4 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#75866D]/20 transition-all duration-300 hover:bg-[#677560] hover:shadow-xl hover:shadow-[#75866D]/30 active:scale-[0.98] disabled:opacity-60"
                  >
                    {isPending ? "Joining..." : "Join The Empowered Project"}
                  </button>
                </div>

                {message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 rounded-xl px-4 py-3 text-sm ${
                      status === "success"
                        ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200"
                        : "bg-red-50 text-red-800 ring-1 ring-red-200"
                    }`}
                  >
                    {message}
                  </motion.p>
                )}

                {/* Privacy line */}
                <div className="mt-5 flex items-start gap-2 text-[11px] leading-relaxed text-neutral-500">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#75866D]" />
                  <span>
                    Educational content only — not medical advice. One email per week for 4 weeks. Unsubscribe anytime.
                  </span>
                </div>
              </form>

              {/* Trust icons row below card */}
              <div className="mt-6 flex items-center justify-center gap-4 text-[11px] text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5" />
                  <span>Secure</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Private</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>No Spam</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
