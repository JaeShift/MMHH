"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { signIn } from "next-auth/react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [callbackUrl, setCallbackUrl] = useState("/admin/subscribers");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nextPath = params.get("callbackUrl");
    const authError = params.get("error");
    if (nextPath) {
      setCallbackUrl(nextPath);
    }
    if (authError === "CredentialsSignin") {
      setError("Invalid login credentials.");
    }
  }, []);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    startTransition(async () => {
      await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl,
      });
    });
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#EBE4D6] to-[#FCF8F0] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] font-semibold">Modern Mental Health &amp; Hormones</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[#E2D9CD] bg-white p-10 shadow-lg">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#75866D]" />

          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[#6B5B4D] mt-1">Admin Portal</p>
          <h1 className="font-heading italic font-light text-5xl text-black mt-3">Welcome Back</h1>
          <p className="mt-3 text-[17px] text-black font-light">Sign in to manage subscribers, broadcasts, and giveaways.</p>

          <form className="mt-8 space-y-4" onSubmit={onSubmit}>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Admin email"
              className="w-full rounded-xl border border-[#E2D9CD] bg-[#FCF8F0] px-4 py-3.5 text-[17px] text-black outline-none transition focus:border-[#75866D] focus:ring-2 focus:ring-[#75866D]/20"
            />
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="w-full rounded-xl border border-[#E2D9CD] bg-[#FCF8F0] px-4 py-3.5 text-[17px] text-black outline-none transition focus:border-[#75866D] focus:ring-2 focus:ring-[#75866D]/20"
            />
            <motion.button
              type="submit"
              disabled={isPending}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#75866D] px-4 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#677560] hover:shadow-xl disabled:opacity-60"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Lock className="h-4 w-4" />
              {isPending ? "Signing in..." : "Sign In"}
            </motion.button>
          </form>

          {error ? (
            <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>
          ) : null}
        </div>
      </motion.div>
    </main>
  );
}
