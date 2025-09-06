"use client";

import Image from "next/image";
import { useState } from "react";

const CANDIDATES = [
  "/images/stephanie-headshot.jpg", // New professional headshot
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
    <>
      {/* Development Notice */}
      <div className="text-center py-2 px-4 text-sm font-medium text-forest" style={{ backgroundColor: "var(--khaki)" }}>
        🚧 Please be patient - this website is still in development. Thank you for your understanding!
      </div>

      <section className="relative section-texture bg-cream">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Column */}
            <div className="space-y-6">
              <div>
                <p className="handwritten text-sage text-lg">"Caring for the whole you"</p>
                <h1 className="font-serif-display display-hero text-forest mt-2 leading-tight">
                  Compassionate Care,
                  <br /> Right From Home
                </h1>
              </div>

              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-charcoal font-sans-body">
                  Telehealth services focused on women's mental wellness and mid‑life hormone
                  health across Ohio — led by Stephanie Nichols, NP‑C.
                </p>
                
                <div className="p-4 rounded-lg bg-white/60 border border-sage/20">
                  <p className="text-forest font-medium">Now accepting new patients starting November 2025</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#book"
                  className="btn-pill text-center"
                  aria-label="Book a Telehealth Appointment"
                >
                  Book a Telehealth Appointment
                </a>
                <a
                  href="#services"
                  className="rounded-full px-6 py-3 font-medium text-center"
                  style={{
                    color: "var(--sage-600)",
                    background: "color-mix(in srgb, var(--khaki) 55%, white)",
                  }}
                  aria-label="Explore services"
                >
                  Explore services
                </a>
              </div>

              <div className="text-sm text-charcoal/80 space-y-2">
                <p>
                  <strong>Stephanie Nichols, NP-C</strong> — Board-Certified Nurse Practitioner
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  <span>Telehealth across Ohio</span>
                  <a href="mailto:stephanie@modernmhh.com" className="underline underline-offset-2 text-sage-600 hover:text-sage">
                    stephanie@modernmhh.com
                  </a>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative flex justify-center">
              {/* Background accent */}
              <div
                aria-hidden
                className="absolute inset-0 w-full h-full"
                style={{ 
                  backgroundColor: "var(--sage)", 
                  filter: "blur(30px)", 
                  opacity: 0.15,
                  borderRadius: "50% 40% 60% 30%",
                  transform: "scale(0.8)"
                }}
              />
              
              {/* Portrait */}
              <div className="relative w-72 md:w-80 lg:w-96">
                <div 
                  className="relative overflow-hidden shadow-xl"
                  style={{
                    borderRadius: "25% 75% 55% 45%",
                    transform: "rotate(-1deg)"
                  }}
                >
                  <Image
                    src={portraitSrc}
                    alt="Portrait of Nurse Practitioner Stephanie Nichols"
                    width={640}
                    height={800}
                    priority
                    onError={() => {
                      setSrcIndex((i) => (i + 1 < CANDIDATES.length ? i + 1 : i));
                    }}
                    className="w-full h-auto object-cover object-top"
                    style={{
                      aspectRatio: "3/4",
                      filter: "saturate(0.95) contrast(1.05)"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

