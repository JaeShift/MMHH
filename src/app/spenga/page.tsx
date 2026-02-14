"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function SpengaLandingWixGrade() {
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
        body: JSON.stringify({
          firstName: cleanName,
          email: cleanEmail,
          source: "SPENGA Easton QR",
        }),
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
    <main className="min-h-screen bg-[#F7F6F3] text-[#121212]">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#0F6B47]/10 ring-1 ring-[#0F6B47]/15" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">Modern Mental Health & Hormones</div>
              <div className="text-xs text-black/55">In partnership with SPENGA Easton</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#learn"
              className="hidden text-sm font-semibold text-black/70 hover:text-black md:inline"
            >
              Learn
            </a>
            <a
              href="#faq"
              className="hidden text-sm font-semibold text-black/70 hover:text-black md:inline"
            >
              FAQ
            </a>
            <a
              href="#signup"
              className="rounded-full bg-[#0F6B47] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0c5a3b]"
            >
              Join Newsletter
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute -left-48 -top-48 h-[520px] w-[520px] rounded-full bg-[#0F6B47]/10 blur-3xl" />
          <div className="absolute -right-40 -bottom-56 h-[640px] w-[640px] rounded-full bg-[#EFD7DE] blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-12 lg:py-20">
          {/* Left copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F7F6F3] px-3 py-1 text-xs font-semibold text-black/70 ring-1 ring-black/5">
              <span className="inline-block h-2 w-2 rounded-full bg-[#0F6B47]" />
              SPENGA Easton Town Center • QR signup page
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Women&apos;s wellness that connects{" "}
              <span className="text-[#0F6B47]">mind + hormones</span> — without the fluff.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/70 sm:text-lg">
              PMHNP-led weekly newsletter covering mood, stress, sleep, cycle shifts, burnout,
              and hormone-related symptoms with practical, evidence-based tools.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded-full bg-[#0F6B47] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0c5a3b]"
              >
                Join the Weekly Newsletter
              </a>
              <div className="text-sm text-black/60">Free • 1x/week • Unsubscribe anytime</div>
            </div>

            {/* Mini "Wix template" feature row */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { title: "5-minute read", desc: "Straight to the point." },
                { title: "Science-backed", desc: "No influencer myths." },
                { title: "Made for women", desc: "Hormone-informed care." },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                  <div className="text-sm font-semibold">{c.title}</div>
                  <div className="mt-1 text-sm text-black/60">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right media */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* image card */}
              <div className="relative overflow-hidden rounded-[28px] bg-black/5 shadow-lg ring-1 ring-black/5">
                <div className="relative h-[420px] w-full">
                  <Image
                    src="/spenga.webp"
                    alt="SPENGA class"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                </div>

                {/* overlay badge */}
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black/70 ring-1 ring-black/5">
                  SPENGA x Modern MHH
                </div>
              </div>

              {/* floating signup preview */}
              <div className="relative -mt-10 ml-auto w-full max-w-md rounded-[28px] bg-white p-6 shadow-xl ring-1 ring-black/5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold">What you&apos;ll get</div>
                    <div className="mt-1 text-sm text-black/60">3 topics • practical takeaways</div>
                  </div>
                  <div className="rounded-full bg-[#0F6B47]/10 px-3 py-1 text-xs font-semibold text-[#0F6B47]">
                    Weekly
                  </div>
                </div>

                <div className="mt-4 grid gap-2 text-sm text-black/70">
                  <div className="rounded-xl bg-[#F7F6F3] px-4 py-3">
                    PMS vs PMDD: what&apos;s normal vs what needs support
                  </div>
                  <div className="rounded-xl bg-[#F7F6F3] px-4 py-3">
                    Anxiety + hormones: why symptoms spike
                  </div>
                  <div className="rounded-xl bg-[#F7F6F3] px-4 py-3">
                    Burnout & sleep: patterns that actually matter
                  </div>
                </div>

                <a
                  href="#signup"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90"
                >
                  Get the next email
                </a>

                <div className="mt-3 text-center text-xs text-black/45">
                  Exclusively for SPENGA Easton QR signups
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="border-y border-black/5 bg-[#F7F6F3]">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-4">
              <div className="text-sm font-semibold text-black/80">Designed for active women</div>
              <div className="mt-2 text-sm text-black/60">
                If you&apos;re doing the workouts but still feeling off — this is for you.
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { k: "Mind", v: "Anxiety, mood, burnout" },
                  { k: "Body", v: "Sleep, energy, stress" },
                  { k: "Cycle", v: "Hormones, PMS/PMDD" },
                ].map((x) => (
                  <div key={x.k} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
                    <div className="text-xs font-semibold text-black/55">{x.k}</div>
                    <div className="mt-1 text-sm font-semibold">{x.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section id="learn" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight">What this newsletter is (and isn&apos;t)</h2>
            <p className="mt-4 text-black/70 leading-relaxed">
              It&apos;s modern women&apos;s wellness education from a psychiatric provider — designed to help you
              understand patterns and take smarter next steps.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="text-sm font-semibold">The goal</div>
              <p className="mt-2 text-sm text-black/60 leading-relaxed">
                Help you feel more steady, informed, and confident — without spiraling into a 2AM
                Google rabbit hole.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Clear explanations",
                  desc: "Understand what's going on without medical word salad.",
                },
                {
                  title: "Practical tools",
                  desc: "Actionable changes you can try immediately.",
                },
                {
                  title: "Hormone-informed",
                  desc: "Mood + cycle + stress are linked — we treat them like it.",
                },
                {
                  title: "No spam energy",
                  desc: "No detoxes, no gimmicks, no guilt-tripping.",
                },
              ].map((b) => (
                <div key={b.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                  <div className="text-sm font-semibold">{b.title}</div>
                  <div className="mt-2 text-sm text-black/60">{b.desc}</div>
                </div>
              ))}
            </div>

            {/* "Template-style" callout */}
            <div className="mt-6 rounded-3xl bg-[#EFD7DE] p-6 ring-1 ring-black/5">
              <div className="text-sm font-semibold">Popular topics</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "PMS vs PMDD",
                  "Anxiety + hormones",
                  "Burnout & irritability",
                  "Sleep & cortisol",
                  "Brain fog",
                  "Cycle shifts",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-black/70 ring-1 ring-black/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
              <p className="mt-4 text-black/70 leading-relaxed">
                Quick answers so you can sign up and get on with your day.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-4">
                <Faq
                  q="How often will I get emails?"
                  a="Once per week. Occasionally a short bonus email if something is time-sensitive or highly requested."
                />
                <Faq
                  q="Is this medical advice?"
                  a="No. It's educational content meant to help you understand patterns and options. For personal medical decisions, you'd need individualized care."
                />
                <Faq
                  q="Can I unsubscribe?"
                  a="Yes — anytime, with one click. No hard feelings. I won't chase you like a gym membership contract."
                />
                <Faq
                  q="Is this only for SPENGA members?"
                  a="This page is built for SPENGA Easton QR signups, but the newsletter content is generally relevant for women who want mind + hormone support."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="bg-[#F7F6F3]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-semibold tracking-tight">Join the weekly newsletter.</h2>
              <p className="mt-4 text-black/70 leading-relaxed">
                One email per week with clear explanations, real tools, and women&apos;s wellness topics that make sense.
              </p>

              <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="text-sm font-semibold">Perfect for you if…</div>
                <ul className="mt-3 space-y-2 text-sm text-black/60">
                  <li>• you&apos;re active but still exhausted</li>
                  <li>• mood shifts / irritability feel &quot;random&quot;</li>
                  <li>• sleep, stress, and cycle changes overlap</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={onSubmit}
                className="rounded-[28px] bg-white p-8 shadow-xl ring-1 ring-black/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold">SPENGA Easton Newsletter Signup</div>
                    <div className="mt-1 text-xs text-black/55">
                      This page is for QR signups from SPENGA Easton Town Center.
                    </div>
                  </div>
                  <div className="rounded-full bg-[#0F6B47]/10 px-3 py-1 text-xs font-semibold text-[#0F6B47]">
                    Free
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-black/70">First name (optional)</label>
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-black/10 bg-[#F7F6F3] px-4 py-3 text-sm outline-none focus:border-[#0F6B47] focus:bg-white"
                      placeholder="First name"
                      autoComplete="given-name"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-black/70">Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-black/10 bg-[#F7F6F3] px-4 py-3 text-sm outline-none focus:border-[#0F6B47] focus:bg-white"
                      placeholder="you@example.com"
                      autoComplete="email"
                      inputMode="email"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#0F6B47] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0c5a3b] disabled:opacity-60"
                >
                  {status === "loading" ? "Submitting…" : "Join Newsletter"}
                </button>

                {message ? (
                  <div
                    className={`mt-4 rounded-2xl px-4 py-3 text-sm ${
                      status === "success" ? "bg-[#0F6B47]/10 text-[#0F6B47]" : "bg-red-50 text-red-700"
                    }`}
                  >
                    {message}
                  </div>
                ) : null}

                <p className="mt-4 text-center text-xs text-black/45">
                  Unsubscribe anytime. Educational content only — not medical advice.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-black/55">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Modern Mental Health & Hormones</div>
            <div>Partnering with SPENGA Easton • Easton Town Center, Ohio</div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl bg-[#F7F6F3] p-5 ring-1 ring-black/5">
      <summary className="cursor-pointer list-none text-sm font-semibold text-black/80">
        <div className="flex items-center justify-between gap-4">
          <span>{q}</span>
          <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-black/50 ring-1 ring-black/5">
            +
          </span>
        </div>
      </summary>
      <div className="mt-3 text-sm text-black/60 leading-relaxed">{a}</div>
    </details>
  );
}
