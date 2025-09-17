"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700">Name</label>
        <input
          type="text"
          name="name"
          required
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-1)]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-1)]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Message</label>
        <textarea
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-1)]"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn px-6 py-2 text-white font-medium rounded-md transition-colors bg-[#75866D] hover:bg-[#677560]"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600 mt-2">Thank you! I&apos;ll be in touch soon.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-2">
          Something went wrong. Please email me at{" "}
          <a href="mailto:info@modernmhh.com" className="underline">
            info@modernmhh.com
          </a>
        </p>
      )}
    </form>
  );
}
