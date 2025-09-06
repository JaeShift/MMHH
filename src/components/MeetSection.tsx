export default function MeetSection() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-3">
          <h2 className="font-serif-display display-h2 text-forest">Meet Stephanie Nichols, NP‑C</h2>
          <p className="mt-4 text-charcoal text-lg leading-8">
            Stephanie is a Board‑Certified Nurse Practitioner with a passion for helping
            patients feel their best. She specializes in women’s mental health and
            mid‑life hormone balance, offering care that’s both compassionate and
            evidence‑based.
          </p>
          <p className="mt-4 text-charcoal leading-7">
            Her approach integrates medication management, lifestyle guidance, and
            supportive therapy. Care is delivered via private, secure telehealth so you
            can get help from the comfort of home.
          </p>
          <div className="mt-8">
            <a href="#contact" className="btn-pill">Schedule a Consultation</a>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-2xl overflow-hidden ring-1 ring-sage-200 bg-[#f6f2ea]">
            <div className="aspect-[4/5] w-full flex items-center justify-center">
              <span className="text-sage-600">Headshot Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

