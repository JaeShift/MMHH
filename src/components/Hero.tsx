"use client";

import Image from "next/image";
import { useState } from "react";

const CANDIDATES = [
  "/stephanie.jpg",
  "/portrait.jpg",
  "/images/stephanie.jpg",
  "/images/portrait.jpg",
  "/portrait-placeholder.svg", // fallback included in repo
];

export default function Hero() {
  const [srcIndex, setSrcIndex] = useState(0);
  const portraitSrc = CANDIDATES[srcIndex] ?? CANDIDATES[CANDIDATES.length - 1];

  return (
    <section className="relative section-texture bg-cream">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="relative flex flex-col-reverse md:flex-row md:items-center gap-12">
          {/* Copy */}
          <div className="flex-1">
            <p className="handwritten text-sage">“Caring for the whole you”</p>
            <h1 className="font-serif-display display-hero text-forest mt-3">
              Compassionate Care,
              <br /> Right From Home
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-charcoal font-sans-body">
              Telehealth services focused on women’s mental wellness and mid‑life hormone
              health across Ohio — led by Stephanie Nichols, NP‑C.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#book"
                className="rounded-full px-6 py-3 text-white font-medium"
                style={{ backgroundColor: "var(--terracotta)" }}
                aria-label="Book a Telehealth Appointment"
              >
                Book a Telehealth Appointment
              </a>
              <a
                href="#services"
                className="rounded-full px-6 py-3 font-medium"
                style={{
                  color: "var(--sage-600)",
                  background: "color-mix(in srgb, var(--khaki) 55%, white)",
                }}
                aria-label="Explore services"
              >
                Explore services
              </a>
            </div>

            <div className="mt-8 text-sm text-charcoal/80">
              <p>
                Provider: <strong>Stephanie Nichols, NP-C</strong> — Board-Certified Nurse Practitioner (AANP); Master of Science in Nursing (MSN)
              </p>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex-1 relative">
            <div
              aria-hidden
              className="absolute -top-8 -right-6 w-64 h-64 md:w-80 md:h-80 rounded-full"
              style={{ backgroundColor: "var(--khaki)", filter: "blur(12px)", opacity: 0.7 }}
            />
            <div className="relative rounded-xl overflow-hidden ring-1 ring-black/5 bg-white">
              <Image
                src={portraitSrc}
                alt="Portrait of Nurse Practitioner Stephanie Nichols"
                width={640}
                height={800}
                priority
                onError={() => {
                  setSrcIndex((i) => (i + 1 < CANDIDATES.length ? i + 1 : i));
                }}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Contact row */}
        <div className="mt-10 text-sm text-charcoal/80 flex flex-wrap gap-x-6 gap-y-2">
          <span>Telehealth across Ohio</span>
          <a href="tel:+16145550126" className="underline underline-offset-2 text-sage-600">
            (614) 555-0126
          </a>
          <a href="mailto:stephanie@modernmentalhealthandhormones.com" className="underline underline-offset-2 text-sage-600">
            stephanie@modernmentalhealthandhormones.com
          </a>
        </div>
      </div>
    </section>
  );
}

