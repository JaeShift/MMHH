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
    <main className="flex min-h-screen items-center justify-center bg-[#1a1a1a] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <p className="uppercase tracking-[0.2em] text-xs font-bold text-white">Modern Mental Health &amp; Hormones</p>
        </div>

        <div className="relative bg-white p-10 shadow-2xl border-t-4 border-[#0066cc]">
          <p className="uppercase tracking-[0.15em] text-[10px] font-bold text-[#666] mb-2">Admin Portal</p>

          <form className="mt-8 space-y-4" onSubmit={onSubmit}>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Admin email"
              className="w-full border-2 border-[#d1d5db] bg-white px-4 py-3.5 text-[15px] text-black outline-none transition focus:border-[#0066cc] focus:ring-0"
            />
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="w-full border-2 border-[#d1d5db] bg-white px-4 py-3.5 text-[15px] text-black outline-none transition focus:border-[#0066cc] focus:ring-0"
            />
            <button
              type="submit"
              disabled={isPending}
              className="flex w-full items-center justify-center gap-2 bg-[#0066cc] px-4 py-3.5 text-[15px] font-semibold text-white transition-all duration-150 hover:bg-[#0052a3] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Lock className="h-4 w-4" />
              {isPending ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {error ? (
            <p className="mt-4 border-l-4 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>
          ) : null}
        </div>
      </motion.div>
    </main>
  );
}
