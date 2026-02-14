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
    <main className="min-h-screen bg-[#0B0F14] text-white">
      {/* Split layout */}
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12">
        {/* LEFT: Sticky signup panel */}
        <aside className="relative lg:col-span-5">
          {/* Image background */}
          <div className="absolute inset-0">
            <Image
              src="/spenga.webp"
              alt="SPENGA class"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/25" />
          </div>

          <div className="relative flex h-full flex-col justify-between px-6 py-10 lg:sticky lg:top-0 lg:h-screen lg:px-10 lg:py-12">
            {/* Brand header */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/12 ring-1 ring-white/15" />
                <div className="leading-tight">
                  <div className="text-sm font-semibold">Modern Mental Health & Hormones</div>
                  <div className="text-xs text-white/70">SPENGA Easton • QR signup</div>
                </div>
              </div>

              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/15">
                Weekly
              </span>
            </div>

            {/* Big statement (not the old hero style) */}
            <div className="mt-10">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight">
                Your workouts are dialed.
                <span className="block text-white/85">Now let&apos;s dial in</span>
                <span className="block text-[#7CFFB2]">your mood, sleep, and hormones.</span>
              </h1>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
                PMHNP-led women&apos;s wellness newsletter. Short, practical, and evidence-based — made for active women who
                want to feel steady and energized.
              </p>

              {/* Form */}
              <form
                onSubmit={onSubmit}
                className="mt-8 rounded-3xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur"
              >
                <div className="text-sm font-semibold">Join the newsletter</div>
                <div className="mt-1 text-xs text-white/70">Free • 1 email/week • unsubscribe anytime</div>

                <div className="mt-5 grid grid-cols-1 gap-3">
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name (optional)"
                    className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/55 focus:border-[#7CFFB2]"
                    autoComplete="given-name"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/55 focus:border-[#7CFFB2]"
                    autoComplete="email"
                    inputMode="email"
                    required
                  />

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-1 inline-flex w-full items-center justify-center rounded-2xl bg-[#7CFFB2] px-4 py-3 text-sm font-semibold text-black hover:bg-[#63f6a2] disabled:opacity-60"
                  >
                    {status === "loading" ? "Submitting…" : "Get weekly wellness"}
                  </button>

                  {message ? (
                    <div
                      className={`rounded-2xl px-4 py-3 text-sm ${
                        status === "success"
                          ? "bg-black/35 text-[#7CFFB2]"
                          : "bg-black/35 text-red-200"
                      }`}
                    >
                      {message}
                    </div>
                  ) : null}

                  <div className="text-center text-[11px] text-white/55">
                    Educational content only — not medical advice.
                  </div>
                </div>
              </form>
            </div>

            {/* Footer microcopy */}
            <div className="mt-10 text-xs text-white/65">
              Partner page for SPENGA Easton Town Center
            </div>
          </div>
        </aside>

        {/* RIGHT: Content scroll */}
        <section className="lg:col-span-7 bg-[#0B0F14]">
          <div className="mx-auto max-w-2xl px-6 py-10 lg:px-10 lg:py-16">
            {/* What you'll get */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/15">
                <span className="inline-block h-2 w-2 rounded-full bg-[#7CFFB2]" />
                What you&apos;ll get
              </div>

              <h2 className="mt-6 text-3xl font-semibold leading-tight">
                Women&apos;s wellness education that actually makes sense.
              </h2>

              <p className="mt-4 text-base leading-relaxed text-white/70">
                One email per week covering mood, stress, sleep, cycle shifts, burnout, and hormone-related symptoms
                — with practical, evidence-based tools you can use immediately.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "PMS vs PMDD",
                    desc: "What's normal vs what needs support — and what to do about it.",
                  },
                  {
                    title: "Anxiety + hormones",
                    desc: "Why symptoms spike at certain times (and what actually helps).",
                  },
                  {
                    title: "Burnout & sleep patterns",
                    desc: "How to tell if it's stress, hormones, or both — and where to start.",
                  },
                  {
                    title: "Cycle syncing basics",
                    desc: "No woo-woo. Just practical info on working with your cycle, not against it.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
                  >
                    <div className="text-sm font-semibold text-white">{item.title}</div>
                    <div className="mt-2 text-sm text-white/65">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who it's for */}
            <div className="mt-16">
              <h2 className="text-2xl font-semibold">This is for you if…</h2>

              <div className="mt-6 grid gap-4">
                {[
                  "You're crushing workouts but still feel exhausted",
                  "Mood swings feel bigger than they should",
                  "Sleep is unpredictable (even when you're tired)",
                  "You've been told your labs are \"fine\" but you don't feel fine",
                  "PMS/anxiety/brain fog feels constant",
                  "You want a plan that connects mind + body + hormones",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                  >
                    <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#7CFFB2]" />
                    <span className="text-sm text-white/80">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why this exists */}
            <div className="mt-16">
              <h2 className="text-2xl font-semibold">Why this newsletter exists</h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                If you&apos;re doing all the "right things" (workouts, eating well, trying to sleep) but still feeling off —
                you&apos;re not broken. You&apos;re just not getting the full picture.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Mental health and hormones are deeply connected. This newsletter helps you understand those patterns
                so you can take smarter next steps — without spiraling into a 2AM Google rabbit hole.
              </p>

              <div className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-white">Quick facts</div>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  <li>• Written by a psychiatric mental health nurse practitioner (PMHNP)</li>
                  <li>• Focus: women&apos;s mental health + hormone-informed care</li>
                  <li>• Once per week, 5-minute read</li>
                  <li>• No spam, no detoxes, no gimmicks</li>
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="text-2xl font-semibold">Quick FAQ</h2>

              <div className="mt-6 space-y-3">
                <details className="group rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-white">
                    How often will I get emails?
                  </summary>
                  <p className="mt-3 text-sm text-white/65">
                    Once per week. Occasionally a short bonus email if something is time-sensitive or highly requested.
                  </p>
                </details>

                <details className="group rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-white">
                    Is this medical advice?
                  </summary>
                  <p className="mt-3 text-sm text-white/65">
                    No. It&apos;s educational content meant to help you understand patterns and options. For personal medical
                    decisions, you&apos;d need individualized care.
                  </p>
                </details>

                <details className="group rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-white">
                    Can I unsubscribe?
                  </summary>
                  <p className="mt-3 text-sm text-white/65">
                    Yes — anytime, with one click. No hard feelings.
                  </p>
                </details>
              </div>
            </div>

            {/* CTA reminder */}
            <div className="mt-16 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-8 ring-1 ring-white/15">
              <h3 className="text-xl font-semibold">Ready to feel more like yourself?</h3>
              <p className="mt-3 text-sm text-white/70">
                Join the weekly newsletter using the form on the left (or scroll up on mobile).
              </p>
              <a
                href="#top"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-[#7CFFB2] px-6 py-3 text-sm font-semibold text-black hover:bg-[#63f6a2]"
              >
                Sign up now
              </a>
            </div>

            {/* Footer */}
            <div className="mt-16 border-t border-white/10 pt-8 text-xs text-white/55">
              <p>© {new Date().getFullYear()} Modern Mental Health & Hormones</p>
              <p className="mt-2">Partnering with SPENGA Easton • Easton Town Center, Ohio</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
