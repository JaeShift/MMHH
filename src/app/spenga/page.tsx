"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function SpengaLandingPageV2() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const isValidEmail = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }, [email]);

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
      setMessage("You're in. See you in your inbox 💪");
      setFirstName("");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network issue. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-[#070A0E] text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070A0E]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/15" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">Modern Mental Health & Hormones</div>
              <div className="text-xs text-white/60">SPENGA Easton QR signup</div>
            </div>
          </div>

          <a
            href="#signup"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#070A0E] hover:bg-white/90"
          >
            Join Newsletter
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/spenga.webp"
            alt="SPENGA class"
            fill
            priority
            className="object-cover object-center opacity-90"
          />
          {/* Overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070A0E]/95 via-[#070A0E]/65 to-[#070A0E]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070A0E]/85 via-transparent to-[#070A0E]/40" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            {/* Left content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/15">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Exclusively for SPENGA Easton members
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Train your body.
                <span className="block text-white/90">Support your mind.</span>
                <span className="block text-emerald-300">Balance your hormones.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                PMHNP-led women&apos;s wellness education—connecting mood, stress, cycle shifts, burnout,
                and hormone-related symptoms with practical steps you can actually use.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#signup"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-[#070A0E] hover:bg-emerald-300"
                >
                  Join the Weekly Newsletter
                </a>
                <p className="text-sm text-white/65">
                  Quick reads. Once a week. No spam. No chaos.
                </p>
              </div>

              {/* Social proof chips */}
              <div className="mt-10 flex flex-wrap gap-3 text-xs text-white/70">
                <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">PMHNP-led</span>
                <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">Women&apos;s mental health</span>
                <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">Hormone-informed</span>
                <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">Ohio + virtual</span>
              </div>
            </div>

            {/* Right CTA card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#0B1018]/85 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-semibold">This week&apos;s focus</div>
                    <div className="mt-1 text-xs text-white/60">Performance wellness, not fluff</div>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                    5 min read
                  </div>
                </div>

                <ul className="mt-5 space-y-3 text-sm text-white/80">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                    PMS vs PMDD: what&apos;s normal vs what needs support
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                    Anxiety + hormones: why it spikes &quot;randomly&quot;
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                    Burnout vs imbalance: how to tell the difference
                  </li>
                </ul>

                <a
                  href="#signup"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#070A0E] hover:bg-white/90"
                >
                  Get the next email
                </a>

                <p className="mt-3 text-center text-xs text-white/55">
                  Created for SPENGA Easton Town Center • QR signups only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid section: tight + punchy */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight">You shouldn&apos;t have to guess.</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              If you&apos;re doing the workouts and still feeling off—low energy, mood swings,
              brain fog, irritability, sleep issues—there&apos;s usually more going on than &quot;just stress.&quot;
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "You're active but still exhausted.",
                "Mood shifts hit harder than they should.",
                "PMS/anxiety/brain fog feels constant.",
                "Sleep is chaotic (even when you're tired).",
                "You've been told you're \"fine.\"",
                "You want a plan that connects the dots.",
              ].map((text) => (
                <div key={text} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <div className="text-sm font-semibold text-white">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="border-t border-white/10 bg-[#06080C]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight">Join the weekly drop.</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Simple, science-backed women&apos;s wellness guidance—written by a PMHNP.
              One email per week. Unsubscribe anytime.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold">What you&apos;ll get</div>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>• Mood + hormones connections (without doom)</li>
                <li>• Cycle shifts, burnout, anxiety, sleep support</li>
                <li>• Practical tools you can use immediately</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-white p-7 text-[#070A0E] shadow-2xl ring-1 ring-black/5"
            >
              <div className="text-sm font-semibold">SPENGA Easton Newsletter Signup</div>
              <div className="mt-1 text-xs text-black/60">
                This page is for QR signups from SPENGA Easton Town Center.
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-black/70">First name (optional)</label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
                    placeholder="Rylee"
                    autoComplete="given-name"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="text-xs font-semibold text-black/70">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
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
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-[#070A0E] hover:bg-emerald-300 disabled:opacity-60"
              >
                {status === "loading" ? "Submitting…" : "Join Newsletter"}
              </button>

              {message ? (
                <div
                  className={`mt-4 rounded-xl px-4 py-3 text-sm ${
                    status === "success" ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-700"
                  }`}
                >
                  {message}
                </div>
              ) : null}

              <p className="mt-4 text-center text-xs text-black/50">
                Unsubscribe anytime. This is educational content and not medical advice.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#070A0E]">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/55">
          © {new Date().getFullYear()} Modern Mental Health & Hormones • Partnering with SPENGA Easton
        </div>
      </footer>
    </main>
  );
}
