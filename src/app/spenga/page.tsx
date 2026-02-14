"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function SpengaLandingSplitScreen() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const isValidEmail = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()), [email]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = firstName.trim();

    if (!cleanEmail || !isValidEmail) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/spenga-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: cleanName, email: cleanEmail, source: "SPENGA Easton QR" }),
      });

      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(data?.error ?? "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      setMessage("You're in. See you in your inbox.");
      setFirstName("");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network issue. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0A0D12] via-[#0B0F14] to-[#0D1219] text-white">
      {/* Split layout */}
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12">
        {/* LEFT: Sticky signup panel */}
        <aside className="relative lg:col-span-5 border-r border-white/5">
          {/* Image background with enhanced overlays */}
          <div className="absolute inset-0">
            <Image
              src="/spenga.webp"
              alt="SPENGA class"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Multi-layer overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-[#7CFFB2]/5" />
            {/* Subtle vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.6)]" />
          </div>

          <div className="relative flex h-full flex-col justify-between px-6 py-10 lg:sticky lg:top-0 lg:h-screen lg:px-12 lg:py-14">
            {/* Brand header with glow */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#7CFFB2]/20 to-white/10 ring-1 ring-white/20 shadow-lg shadow-[#7CFFB2]/10" />
                <div className="leading-tight">
                  <div className="text-sm font-semibold tracking-tight">Modern Mental Health & Hormones</div>
                  <div className="text-xs text-white/60">SPENGA Easton • QR signup</div>
                </div>
              </div>

              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 ring-1 ring-white/20 backdrop-blur-sm">
                Weekly
              </span>
            </div>

            {/* Big statement with better typography */}
            <div className="mt-12 lg:mt-0">
              <h1 className="text-[2.75rem] font-bold leading-[1.1] tracking-tight lg:text-5xl">
                Your workouts
                <span className="block text-white/90">are dialed.</span>
                <span className="block bg-gradient-to-r from-[#7CFFB2] via-[#6ef5a7] to-[#5ff09d] bg-clip-text text-transparent">
                  Now let&apos;s dial in
                </span>
                <span className="block text-[2.5rem] lg:text-[2.75rem]">your mind + hormones.</span>
              </h1>

              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/75">
                PMHNP-led women&apos;s wellness newsletter. Short, practical, and evidence-based — made for active women who
                want to feel steady and energized.
              </p>

              {/* Enhanced form */}
              <form
                onSubmit={onSubmit}
                className="mt-10 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl transition-all hover:ring-white/20"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[15px] font-semibold">Join the newsletter</div>
                    <div className="mt-1 text-xs text-white/60">Free • Weekly • Real education</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/70">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7CFFB2]" />
                    <span className="text-xs">Live</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name (optional)"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-[15px] outline-none ring-0 placeholder:text-white/40 transition-all focus:border-[#7CFFB2]/50 focus:bg-white/10 focus:ring-2 focus:ring-[#7CFFB2]/20"
                    autoComplete="given-name"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-[15px] outline-none ring-0 placeholder:text-white/40 transition-all focus:border-[#7CFFB2]/50 focus:bg-white/10 focus:ring-2 focus:ring-[#7CFFB2]/20"
                    autoComplete="email"
                    inputMode="email"
                    required
                  />

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group relative mt-2 inline-flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#7CFFB2] to-[#5ff09d] px-5 py-3.5 text-[15px] font-semibold text-black shadow-lg shadow-[#7CFFB2]/25 transition-all hover:shadow-xl hover:shadow-[#7CFFB2]/40 disabled:opacity-60"
                  >
                    <span className="relative z-10">
                      {status === "loading" ? "Submitting…" : "Get weekly wellness"}
                    </span>
                    <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#6ef5a7] to-[#4ee88f] opacity-0 transition-opacity group-hover:opacity-100" />
                  </button>

                  {message ? (
                    <div
                      className={`animate-in fade-in slide-in-from-top-2 rounded-2xl px-4 py-3.5 text-sm duration-300 ${
                        status === "success"
                          ? "bg-[#7CFFB2]/10 text-[#7CFFB2] ring-1 ring-[#7CFFB2]/20"
                          : "bg-red-500/10 text-red-200 ring-1 ring-red-500/20"
                      }`}
                    >
                      {message}
                    </div>
                  ) : null}

                  <p className="text-center text-[11px] leading-relaxed text-white/50">
                    Educational content only — not medical advice.<br />
                    Unsubscribe anytime.
                  </p>
                </div>
              </form>
            </div>

            {/* Footer with subtle glow */}
            <div className="mt-12 flex items-center gap-2 text-xs text-white/50 lg:mt-0">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
              <span>Partner page for SPENGA Easton Town Center</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </div>
          </div>
        </aside>

        {/* RIGHT: Content scroll with enhanced styling */}
        <section className="lg:col-span-7">
          <div className="mx-auto max-w-2xl px-6 py-12 lg:px-12 lg:py-20">
            {/* What you'll get - enhanced */}
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 px-4 py-2 text-xs font-semibold text-white/90 ring-1 ring-white/10 backdrop-blur-sm">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#7CFFB2] shadow-lg shadow-[#7CFFB2]/50" />
                What you&apos;ll get every week
              </div>

              <h2 className="mt-8 text-4xl font-bold leading-tight tracking-tight">
                Women&apos;s wellness education
                <span className="block text-white/80">that actually makes sense.</span>
              </h2>

              <p className="mt-5 text-[16px] leading-relaxed text-white/65">
                One email per week covering mood, stress, sleep, cycle shifts, burnout, and hormone-related symptoms
                — with practical, evidence-based tools you can use immediately.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  {
                    title: "PMS vs PMDD",
                    desc: "What's normal vs what needs support — and what to do about it.",
                    icon: "🌙",
                  },
                  {
                    title: "Anxiety + hormones",
                    desc: "Why symptoms spike at certain times (and what actually helps).",
                    icon: "🧠",
                  },
                  {
                    title: "Burnout & sleep patterns",
                    desc: "How to tell if it's stress, hormones, or both — and where to start.",
                    icon: "💤",
                  },
                  {
                    title: "Cycle syncing basics",
                    desc: "No woo-woo. Just practical info on working with your cycle, not against it.",
                    icon: "📊",
                  },
                ].map((item, idx) => (
                  <div
                    key={item.title}
                    className="group rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-6 ring-1 ring-white/10 transition-all hover:scale-[1.02] hover:bg-gradient-to-br hover:from-white/[0.10] hover:to-white/[0.05] hover:ring-white/20 hover:shadow-xl hover:shadow-[#7CFFB2]/5"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7CFFB2]/20 to-white/5 text-2xl ring-1 ring-white/10 transition-transform group-hover:scale-110">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-[15px] font-semibold text-white">{item.title}</div>
                        <div className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who it's for - enhanced */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold leading-tight">This is for you if…</h2>

              <div className="mt-8 grid gap-3">
                {[
                  "You're crushing workouts but still feel exhausted",
                  "Mood swings feel bigger than they should",
                  "Sleep is unpredictable (even when you're tired)",
                  "You've been told your labs are \"fine\" but you don't feel fine",
                  "PMS/anxiety/brain fog feels constant",
                  "You want a plan that connects mind + body + hormones",
                ].map((text, idx) => (
                  <div
                    key={text}
                    className="group flex items-start gap-4 rounded-2xl bg-gradient-to-r from-white/5 to-transparent p-5 ring-1 ring-white/10 transition-all hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:ring-white/20"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#7CFFB2] to-[#5ff09d] shadow-lg shadow-[#7CFFB2]/30" />
                    <span className="text-[15px] leading-relaxed text-white/75">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why this exists - enhanced */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold leading-tight">Why this newsletter exists</h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/65">
                <p>
                  If you&apos;re doing all the "right things" (workouts, eating well, trying to sleep) but still feeling off —
                  you&apos;re not broken. You&apos;re just not getting the full picture.
                </p>
                <p>
                  Mental health and hormones are deeply connected. This newsletter helps you understand those patterns
                  so you can take smarter next steps — without spiraling into a 2AM Google rabbit hole.
                </p>
              </div>

              <div className="mt-8 rounded-3xl bg-gradient-to-br from-[#7CFFB2]/10 via-white/5 to-transparent p-8 ring-1 ring-[#7CFFB2]/20 shadow-xl shadow-[#7CFFB2]/5">
                <div className="text-sm font-semibold text-[#7CFFB2]">Quick facts</div>
                <ul className="mt-5 space-y-3 text-[15px] text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 text-[#7CFFB2]">✓</span>
                    <span>Written by a psychiatric mental health nurse practitioner (PMHNP)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 text-[#7CFFB2]">✓</span>
                    <span>Focus: women&apos;s mental health + hormone-informed care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 text-[#7CFFB2]">✓</span>
                    <span>Once per week, 5-minute read</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 text-[#7CFFB2]">✓</span>
                    <span>No spam, no detoxes, no gimmicks</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ - enhanced */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold leading-tight">Quick FAQ</h2>

              <div className="mt-8 space-y-3">
                {[
                  {
                    q: "How often will I get emails?",
                    a: "Once per week. Occasionally a short bonus email if something is time-sensitive or highly requested.",
                  },
                  {
                    q: "Is this medical advice?",
                    a: "No. It's educational content meant to help you understand patterns and options. For personal medical decisions, you'd need individualized care.",
                  },
                  {
                    q: "Can I unsubscribe?",
                    a: "Yes — anytime, with one click. No hard feelings.",
                  },
                ].map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 ring-1 ring-white/10 transition-all hover:ring-white/20"
                  >
                    <summary className="cursor-pointer list-none text-[15px] font-semibold text-white transition-colors group-hover:text-[#7CFFB2]">
                      <div className="flex items-center justify-between gap-4">
                        <span>{faq.q}</span>
                        <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-white/60 ring-1 ring-white/10 transition-transform group-open:rotate-45">
                          +
                        </span>
                      </div>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-white/60">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA reminder - enhanced */}
            <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-br from-[#7CFFB2]/20 via-white/10 to-transparent p-10 ring-1 ring-[#7CFFB2]/30 shadow-2xl shadow-[#7CFFB2]/10">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold">Ready to feel more like yourself?</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                  Join the weekly newsletter using the form on the left (or scroll up on mobile).
                </p>
                <a
                  href="#top"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7CFFB2] to-[#5ff09d] px-8 py-4 text-[15px] font-semibold text-black shadow-lg shadow-[#7CFFB2]/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#7CFFB2]/50"
                >
                  Sign up now
                </a>
              </div>

              {/* Decorative gradient blob */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#7CFFB2]/20 blur-3xl" />
            </div>

            {/* Footer - enhanced */}
            <div className="mt-20 border-t border-white/10 pt-10 text-xs text-white/45">
              <p className="font-medium">© {new Date().getFullYear()} Modern Mental Health & Hormones</p>
              <p className="mt-2">Partnering with SPENGA Easton • Easton Town Center, Ohio</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
