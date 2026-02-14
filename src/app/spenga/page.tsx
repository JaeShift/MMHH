"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function SpengaLandingClean() {
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
      setMessage("You're in. See you in your inbox.");
      setFirstName("");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network issue. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-[#FBFAF8] text-[#121212]">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[#0F6B47]/10 ring-1 ring-[#0F6B47]/15" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Modern Mental Health & Hormones</div>
              <div className="text-xs text-black/55">Partnering with SPENGA Easton</div>
            </div>
          </div>

          <a
            href="#signup"
            className="rounded-full bg-[#0F6B47] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0c5a3b]"
          >
            Join Newsletter
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* soft background wash */}
        <div className="absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#0F6B47]/10 blur-3xl" />
          <div className="absolute -right-40 -bottom-40 h-[520px] w-[520px] rounded-full bg-[#F3E2E7] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-12 lg:py-20">
          {/* Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black/70 ring-1 ring-black/5">
              <span className="inline-block h-2 w-2 rounded-full bg-[#0F6B47]" />
              SPENGA Easton QR signup
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Feel strong in your body —{" "}
              <span className="text-[#0F6B47]">steady in your mind.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/70 sm:text-lg">
              PMHNP-led women&apos;s wellness education connecting mood, stress, sleep, cycle shifts, and hormones.
              One email a week. Practical, science-backed, and actually readable.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded-full bg-[#0F6B47] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0c5a3b]"
              >
                Join the Weekly Newsletter
              </a>
              <p className="text-sm text-black/60">Free. Weekly. Unsubscribe anytime.</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["PMHNP-led", "Women's wellness", "Hormone-informed", "Ohio + virtual"].map((t) => (
                <div key={t} className="rounded-2xl bg-white px-4 py-3 text-center text-xs font-semibold text-black/70 ring-1 ring-black/5">
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Image + overlay card */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-black/5 ring-1 ring-black/5">
                <div className="relative h-[340px] w-full sm:h-[420px]">
                  <Image
                    src="/spenga.webp"
                    alt="SPENGA class"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                  {/* readability fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                </div>
              </div>

              {/* floating mini card */}
              <div className="absolute -bottom-6 left-6 right-6 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold">Inside the newsletter</div>
                    <div className="mt-1 text-sm text-black/60">3 topics • 5-minute read</div>
                  </div>
                  <div className="rounded-full bg-[#0F6B47]/10 px-3 py-1 text-xs font-semibold text-[#0F6B47]">
                    Weekly
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-black/70">
                  <li>• PMS vs PMDD: what&apos;s normal vs what needs support</li>
                  <li>• Anxiety + hormones: why symptoms spike</li>
                  <li>• Burnout, sleep, and stress patterns that matter</li>
                </ul>

                <a
                  href="#signup"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90"
                >
                  Get the next email
                </a>

                <div className="mt-3 text-center text-xs text-black/45">
                  Created for SPENGA Easton Town Center members
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* spacer because floating card */}
      <div className="h-14" />

      {/* Who it's for */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight">If this is you…</h2>
            <p className="mt-4 text-black/70 leading-relaxed">
              You&apos;re doing the workouts and trying to take care of yourself — but something still feels off.
              This is where mind + hormones need to be in the same conversation.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "You're active but still exhausted.",
                "Mood shifts hit harder than they should.",
                "Sleep feels chaotic (even when you're tired).",
                "PMS/anxiety/brain fog feels constant.",
                "You've been told you're \"fine.\"",
                "You want a plan that connects the dots.",
              ].map((text) => (
                <div key={text} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
                  <div className="text-sm font-semibold">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="border-t border-black/5 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight">Join the weekly newsletter.</h2>
            <p className="mt-4 text-black/70 leading-relaxed">
              One email per week with clear explanations, practical tools, and women&apos;s wellness topics that make sense.
              No spam. No guilt. No &quot;detox tea.&quot;
            </p>

            <div className="mt-6 rounded-2xl bg-[#FBFAF8] p-5 ring-1 ring-black/5">
              <div className="text-sm font-semibold">What you&apos;ll get</div>
              <ul className="mt-3 space-y-2 text-sm text-black/70">
                <li>• Mood + hormone connections</li>
                <li>• Cycle shifts, anxiety, sleep support</li>
                <li>• Burnout patterns and what helps</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="rounded-3xl bg-[#F3E2E7] p-8 ring-1 ring-black/5">
              <div className="text-sm font-semibold">SPENGA Easton Newsletter Signup</div>
              <div className="mt-1 text-xs text-black/60">This page is for QR signups from SPENGA Easton Town Center.</div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-black/70">First name (optional)</label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#0F6B47]"
                    placeholder="Rylee"
                    autoComplete="given-name"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-black/70">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#0F6B47]"
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
                {status === "loading" ? "Submitting..." : "Join Newsletter"}
              </button>

              {message ? (
                <div
                  className={`mt-4 rounded-xl px-4 py-3 text-sm ${
                    status === "success" ? "bg-white/70 text-[#0F6B47]" : "bg-white/70 text-red-700"
                  }`}
                >
                  {message}
                </div>
              ) : null}

              <p className="mt-4 text-center text-xs text-black/50">
                Unsubscribe anytime. Educational content only — not medical advice.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-[#FBFAF8]">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-black/55">
          © {new Date().getFullYear()} Modern Mental Health & Hormones • Partnering with SPENGA Easton
        </div>
      </footer>
    </main>
  );
}
