"use client";

import { motion } from "framer-motion";
import { Mail, ShieldCheck } from "lucide-react";
import { useState, useTransition } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { subscribeAction } from "@/domains/newsletter/actions/NewsletterActions";

export default function SpengaNewsletterPage() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isPending, startTransition] = useTransition();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setStatus("idle");

    startTransition(async () => {
      const result = await subscribeAction({
        firstName,
        email,
        source: "SPENGA Easton QR",
      });

      if (!result.success) {
        setStatus("error");
        setMessage(result.error || "Unable to subscribe right now.");
        return;
      }

      setStatus("success");
      setMessage("You are in. Your weekly wellness email will arrive soon.");
      setFirstName("");
      setEmail("");
    });
  }

  return (
    <>
      <Header />

      <main>
        <section className="min-h-[calc(100vh-5rem)] flex items-center bg-gradient-to-b from-[#EBE4D6] to-[#FCF8F0] px-4 pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.2fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] font-semibold flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Weekly Wellness Newsletter
              </p>

              <div className="flex items-center gap-3 mt-4 mb-6">
                <div className="h-px w-12 bg-[#8B9D7F]/40" />
                <div className="w-2 h-2 rounded-full bg-[#8B9D7F]" />
                <div className="h-px w-12 bg-[#8B9D7F]/40" />
              </div>

              <h1 className="font-heading italic font-light text-5xl sm:text-6xl md:text-7xl leading-[1.08] text-black">
                Women&apos;s Wellness Education That Actually Makes Sense
              </h1>

              <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-black font-light">
                PMHNP-led insights on mood, hormones, stress, and sleep. One concise email each week built for women who want clear, practical guidance.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              onSubmit={onSubmit}
              className="relative overflow-hidden rounded-2xl border border-[#E2D9CD] bg-white p-8 shadow-lg"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#75866D]" />

              <h2 className="font-heading italic font-light text-4xl text-black mt-2">Join the Newsletter</h2>
              <p className="mt-3 text-[17px] text-black font-light">Free. Weekly. Unsubscribe anytime.</p>

              <div className="mt-6 space-y-4">
                <input
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="First name"
                  autoComplete="given-name"
                  className="w-full rounded-xl border border-[#E2D9CD] bg-[#FCF8F0] px-4 py-3.5 text-[17px] outline-none transition focus:border-[#75866D] focus:ring-2 focus:ring-[#75866D]/20"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email address"
                  autoComplete="email"
                  className="w-full rounded-xl border border-[#E2D9CD] bg-[#FCF8F0] px-4 py-3.5 text-[17px] outline-none transition focus:border-[#75866D] focus:ring-2 focus:ring-[#75866D]/20"
                />
                <motion.button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-xl bg-[#75866D] px-4 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#677560] hover:shadow-xl disabled:opacity-60"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {isPending ? "Submitting..." : "Get Weekly Wellness Tips"}
                </motion.button>
              </div>

              {message ? (
                <p className={`mt-4 rounded-xl px-4 py-3 text-sm ${status === "success" ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
                  {message}
                </p>
              ) : null}

              <div className="mt-5 flex items-start gap-2 text-xs text-[#6B5B4D]">
                <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5 text-[#8B9D7F]" />
                <span>Educational content only and not individualized medical advice. Unsubscribe anytime.</span>
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
