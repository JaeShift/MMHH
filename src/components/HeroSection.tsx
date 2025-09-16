"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <Image 
        src="/hero.jpg" 
        alt="Modern Mental Health & Hormones"
        width={1920}
        height={1080}
        className="h-[60vh] md:h-[72vh] w-full object-cover" 
        priority
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 mx-auto flex max-w-4xl items-end px-6 pb-12">
        <div>
          <h1 className="text-white text-5xl md:text-6xl">Modern mental health, hormone-informed.</h1>
          <p className="mt-4 text-white/90 text-lg max-w-2xl">
            Individualized evaluation and prescribing to help you feel like yourself again.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#services" className="inline-flex rounded-full bg-[#3B4340] px-6 py-3 text-white font-medium hover:bg-[#2a302d] transition-colors">
              Explore Areas of Care
            </a>
            <a href="#contact" className="inline-flex rounded-full bg-white/90 px-6 py-3 text-[#3B4340] font-medium hover:bg-white transition-colors">
              Request an Appointment
            </a>
          </div>
          
          {/* Trust Strip */}
          <div className="mt-8 flex flex-wrap gap-2">
            {["PMHNP-BC & FNP-BC","NAMS Certified","Ohio Telehealth","HIPAA-Compliant"].map(t => (
              <span key={t} className="rounded-full border border-white/30 bg-white/80 px-3 py-1 text-sm text-neutral-700">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}