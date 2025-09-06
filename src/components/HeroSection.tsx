"use client";

// Calming, editorial hero aligned to the provided reference
export default function HeroSection() {
  return (
    <section id="home" className="relative bg-cream section-texture">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left copy */}
        <div>
          {/* Brand */}
          <div className="mb-8 flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg"
              style={{
                background:
                  "linear-gradient(135deg, rgba(110,139,116,.18), rgba(201,149,58,.18))",
              }}
            >
              {/* simple cross/leaf mark */}
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                <path d="M11 3h2v18h-2z" fill="currentColor" opacity=".8" />
                <path d="M3 11h18v2H3z" fill="currentColor" opacity=".8" />
                <path d="M17 7c1.5 0 3 1.2 3 3-1.5 0-3-1.2-3-3Z" fill="#6e8b74" />
                <path d="M7 17c-1.5 0-3-1.2-3-3 1.5 0 3 1.2 3 3Z" fill="#6e8b74" />
              </svg>
            </span>
            <p className="font-sans-body text-sm text-sage-600">
              Modern Mental Health and Hormones
            </p>
          </div>

          <h1 className="font-serif-display display-hero text-forest">
            Compassionate Care,
            <br className="hidden sm:block" /> Right From Home
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-charcoal">
            Modern Mental Health and Hormones provides telehealth services focused on
            women’s mental wellness and mid‑life hormone health, led by Nurse
            Practitioner Stephanie Nichols.
          </p>

          <div className="mt-8">
            <a href="#contact" className="btn-pill">
              Book a Telehealth Appointment
            </a>
          </div>
        </div>

        {/* Right-side portrait placeholder with soft shapes */}
        <div className="relative">
          <div
            className="absolute -top-8 -left-8 w-40 h-40 rounded-full"
            style={{
              background: "radial-gradient(closest-side, rgba(201,149,58,.18), transparent)",
            }}
          />
          <div
            className="absolute -bottom-10 -right-6 w-52 h-52 rounded-full"
            style={{
              background: "radial-gradient(closest-side, rgba(110,139,116,.18), transparent)",
            }}
          />
          <div className="relative rounded-3xl overflow-hidden ring-1 ring-sage-200 bg-white/70">
            <div className="aspect-[4/5] w-full flex items-center justify-center bg-[linear-gradient(135deg,_#f3eee4,_#efe7d8)]">
              <span className="text-sage-600 font-medium">Your Portrait Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

