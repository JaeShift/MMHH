export default function AboutStephanie() {
  return (
    <section className="bg-cream section-texture">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Journal card */}
        <article className="md:col-span-2 card p-8 bg-white">
          <h2 className="font-serif-display display-h2 text-forest">About Stephanie</h2>
          <p className="mt-4 text-charcoal leading-8">
            Provider: <strong>Stephanie Nichols, NP-C</strong>
          </p>
          <p className="mt-2 text-charcoal leading-8">
            Credentials: Board-Certified Nurse Practitioner (AANP); Master of Science in Nursing (MSN)
          </p>
          <p className="mt-4 text-charcoal leading-8">
            Focus Areas: Women’s mental wellness (anxiety, depression, stress, sleep, brain fog) and mid‑life hormone health (perimenopause, menopause support, thyroid balance, metabolism shifts).
          </p>
          <blockquote className="mt-6 border-l-4 pl-4" style={{ borderColor: 'var(--sage)' }}>
            <p className="font-serif-display text-2xl text-forest">
              “My goal is to help women feel balanced, confident, and supported at every stage of life.”
            </p>
          </blockquote>
        </article>

        {/* Side column cards */}
        <div className="space-y-6">
          <div className="card p-6 bg-white">
            <h3 className="font-serif-display text-xl text-forest">Telehealth Benefits</h3>
            <ul className="leaf-bullets mt-3 space-y-3 text-charcoal">
              <li>Private, secure appointments</li>
              <li>Flexible scheduling</li>
              <li>Care from the comfort of home</li>
            </ul>
          </div>
          <div className="card p-6 bg-white">
            <h3 className="font-serif-display text-xl text-forest">Care Philosophy</h3>
            <p className="mt-3 text-charcoal leading-7">
              Whole-person care, personalized plans, and continuity via telehealth — boutique and human.
            </p>
            <p className="mt-3 text-charcoal/80">Service Model: Telehealth across Ohio.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

