"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useState, useTransition } from "react";
import { enterGiveawayAction } from "@/domains/giveaway/actions/GiveawayActions";

export default function GiveawayEntryForm({ giveawayId, title }: { giveawayId: string; title: string }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setMessage("");

    startTransition(async () => {
      const result = await enterGiveawayAction({ giveawayId, firstName, email });
      if (!result.success) {
        setStatus("error");
        setMessage(result.error || "Unable to enter giveaway.");
        return;
      }

      setStatus("success");
      setMessage(`You're entered in "${title}"!`);
      setFirstName("");
      setEmail("");
    });
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      onSubmit={onSubmit}
      className="relative overflow-hidden rounded-2xl border border-[#E2D9CD] bg-white p-8 shadow-lg"
    >
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#75866D]" />

      <h2 className="font-heading italic font-light text-3xl sm:text-4xl text-black mt-2">Enter Giveaway</h2>
      <p className="mt-3 text-[17px] text-black font-light">Add your first name and email to join this giveaway.</p>

      <div className="mt-6 space-y-4">
        <input
          required
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="First name"
          className="w-full rounded-xl border border-[#E2D9CD] bg-[#FCF8F0] px-4 py-3.5 text-[17px] outline-none transition focus:border-[#75866D] focus:ring-2 focus:ring-[#75866D]/20"
        />
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address"
          className="w-full rounded-xl border border-[#E2D9CD] bg-[#FCF8F0] px-4 py-3.5 text-[17px] outline-none transition focus:border-[#75866D] focus:ring-2 focus:ring-[#75866D]/20"
        />
        <motion.button
          type="submit"
          disabled={isPending}
          className="w-full rounded-xl bg-[#75866D] px-4 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#677560] hover:shadow-xl disabled:opacity-60"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {isPending ? "Submitting..." : "Enter Giveaway"}
        </motion.button>
      </div>

      {message ? (
        <p className={`mt-4 rounded-xl px-4 py-3 text-sm ${status === "success" ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
          {message}
        </p>
      ) : null}

      <div className="mt-5 flex items-start gap-2 text-xs text-[#6B5B4D]">
        <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5 text-[#8B9D7F]" />
        <span>Your information is secure and will only be used for this giveaway.</span>
      </div>
    </motion.form>
  );
}
