"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[68vh] min-h-[520px] w-full">
        {/* Background gradient fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800" />
        
        {/* Background image */}
        <Image
          src="/hero.jpg"           // put a wide, soft editorial healthcare image here
          alt="Modern Mental Health & Hormones"
          fill
          className="object-cover"
          priority
          quality={95}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/40" />

        {/* Copy */}
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-3xl text-white">
              <h1 className="font-serif text-5xl leading-tight drop-shadow mb-4">
                Modern Mental Health & Hormones
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                Personalized, evidence-based care for women navigating mid-life mood, sleep, stress, and hormone changes—led by Nurse Practitioner Stephanie Nichols.
              </p>
              <div className="flex gap-3">
                <a href="#book" className="btn btn-primary">Join Waitlist</a>
                <a href="#services" className="btn btn-ghost">Explore Services</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
