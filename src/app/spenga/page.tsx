"use client";

import { useMemo, useState } from "react";

export default function SpengaLandingPage() {
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
      setMessage("You're in! Check your inbox soon 💚");
      setFirstName("");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network issue. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#111]">
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-[#0F6B47] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-white/15 ring-1 ring-white/20" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">Modern Mental Health & Hormones</div>
              <div className="text-xs opacity-85">Partnering with SPENGA Easton</div>
            </div>
          </div>
          <a
            href="#signup"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0F6B47] hover:bg-white/90"
          >
            Join Newsletter
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-12 lg:py-20">
          {/* Left: copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0F6B47]/10 px-3 py-1 text-xs font-semibold text-[#0F6B47] ring-1 ring-[#0F6B47]/15">
              SPENGA Easton Town Center (QR sign-up)
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Strong Body. <span className="text-[#0F6B47]">Balanced Mind.</span> Aligned Hormones.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/70 sm:text-lg">
              Women's mental health + hormone-focused care from a PMHNP. Weekly insights on mood, cycle shifts,
              stress, burnout, and practical steps that actually make sense.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded-full bg-[#0F6B47] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0b5a3c]"
              >
                Join the Women&apos;s Wellness Newsletter
              </a>
              <p className="text-sm text-black/60">
                Free. Weekly. Zero spam. Just real education.
              </p>
            </div>

            {/* Little trust chips */}
            <div className="mt-10 flex flex-wrap gap-3 text-xs text-black/70">
              <span className="rounded-full bg-white px-4 py-2 ring-1 ring-black/5">PMHNP-led</span>
              <span className="rounded-full bg-white px-4 py-2 ring-1 ring-black/5">Women&apos;s wellness</span>
              <span className="rounded-full bg-white px-4 py-2 ring-1 ring-black/5">Mind + hormones</span>
              <span className="rounded-full bg-white px-4 py-2 ring-1 ring-black/5">Ohio + virtual</span>
            </div>
          </div>

          {/* Right: faux phone card like the Wix template */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-[#0F6B47]/10 blur-2xl" />
              <div className="relative rounded-[2.25rem] bg-white p-6 shadow-xl ring-1 ring-black/5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Weekly Wellness</div>
                  <div className="text-xs text-black/50">Modern MHH</div>
                </div>

                <div className="mt-5 rounded-2xl bg-[#FAF7F2] p-5 ring-1 ring-black/5">
                  <div className="text-xs font-semibold text-[#0F6B47]">This week&apos;s topics</div>
                  <ul className="mt-3 space-y-2 text-sm text-black/75">
                    <li>• PMS vs PMDD: what&apos;s normal (and what isn&apos;t)</li>
                    <li>• Anxiety + hormones: why it spikes &quot;randomly&quot;</li>
                    <li>• Burnout or imbalance? how to tell</li>
                    <li>• Cycle syncing basics (no woo-woo)</li>
                  </ul>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="rounded-xl bg-white p-3 ring-1 ring-black/5">
                    <div className="font-semibold">5 min</div>
                    <div className="text-black/50">read</div>
                  </div>
                  <div className="rounded-xl bg-white p-3 ring-1 ring-black/5">
                    <div className="font-semibold">1x</div>
                    <div className="text-black/50">weekly</div>
                  </div>
                  <div className="rounded-xl bg-white p-3 ring-1 ring-black/5">
                    <div className="font-semibold">0</div>
                    <div className="text-black/50">spam</div>
                  </div>
                </div>

                <a
                  href="#signup"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#0F6B47] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0b5a3c]"
                >
                  Join from SPENGA
                </a>

                <p className="mt-3 text-center text-xs text-black/50">
                  Created exclusively for SPENGA Easton members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight">If this sounds familiar…</h2>
            <p className="mt-4 text-black/70">
              You&apos;re doing &quot;all the right things,&quot; but your mind and body are not cooperating.
              You&apos;re not broken — you&apos;re just not getting the full picture.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "You crush workouts but still feel exhausted.",
                "Mood shifts feel bigger than they should.",
                "PMS, anxiety, or brain fog feels \"normal.\"",
                "You're tired of being told your labs are \"fine.\"",
                "Burnout is starting to feel like your personality.",
                "You want answers that actually connect the dots.",
              ].map((text) => (
                <div key={text} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                  <div className="text-sm font-semibold">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-semibold tracking-tight">Hi, I&apos;m a PMHNP focused on women&apos;s wellness.</h2>
              <p className="mt-4 text-black/70 leading-relaxed">
                I specialize in women&apos;s mental health and hormone-informed support — including anxiety, mood changes,
                burnout, cycle shifts, postpartum transitions, and the &quot;why do I feel like this?&quot; phase.
              </p>
              <p className="mt-4 text-black/70 leading-relaxed">
                My approach is personalized, evidence-based, and built around the reality that mental health and hormones
                are deeply connected (even when the internet insists it&apos;s &quot;just stress&quot;).
              </p>
              <div className="mt-6 text-sm text-black/60">
                <div className="font-semibold text-black/80">Modern Mental Health & Hormones</div>
                <div>Serving women in Ohio + virtually</div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#FAF7F2] p-6 ring-1 ring-black/5">
                <h3 className="text-lg font-semibold">What you&apos;ll get each week</h3>
                <ul className="mt-4 space-y-3 text-sm text-black/75">
                  <li>• Hormones + anxiety/depression connections</li>
                  <li>• PMS vs PMDD (and what to do)</li>
                  <li>• Burnout vs imbalance signals</li>
                  <li>• Cycle syncing basics (no fluff)</li>
                  <li>• Practical tools you can actually use</li>
                </ul>
                <p className="mt-4 text-xs text-black/50">
                  Think of it as your weekly mental reset — minus the toxic positivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-[#F3E2E6] p-8 ring-1 ring-black/5 sm:p-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="text-3xl font-semibold tracking-tight">Ready to feel more like yourself again?</h2>
              <p className="mt-4 text-black/70">
                Join the Women&apos;s Wellness Newsletter — created for SPENGA Easton members scanning QR codes in-studio.
              </p>
              <p className="mt-4 text-sm text-black/60">
                No spam. No weird chains. No &quot;buy my greens powder&quot; energy.
              </p>
            </div>

            <div className="lg:col-span-6">
              <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <label className="block text-sm font-semibold">First name (optional)</label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#0F6B47]"
                  placeholder="Rylee"
                  autoComplete="given-name"
                />

                <label className="mt-5 block text-sm font-semibold">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#0F6B47]"
                  placeholder="you@example.com"
                  autoComplete="email"
                  inputMode="email"
                  required
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#0F6B47] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0b5a3c] disabled:opacity-60"
                >
                  {status === "loading" ? "Submitting…" : "Send Me Weekly Wellness"}
                </button>

                <p className="mt-3 text-center text-xs text-black/50">
                  By signing up, you agree to receive a weekly email. Unsubscribe anytime.
                </p>

                {message ? (
                  <div
                    className={`mt-4 rounded-xl px-4 py-3 text-sm ${
                      status === "success"
                        ? "bg-[#0F6B47]/10 text-[#0F6B47]"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {message}
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>

        {/* Partnership */}
        <div className="mt-10 text-center text-sm text-black/55">
          In partnership with <span className="font-semibold text-black/70">SPENGA Easton</span> • Easton Town Center, Ohio
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-black/55">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Modern Mental Health & Hormones</div>
            <div className="text-xs">
              This page is intended for newsletter signup only and does not constitute medical advice.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

