export default function Testimonials() {
  const quotes = [
    {
      q: "I finally feel like someone sees the whole picture. Telehealth made it easy to start.",
    },
    {
      q: "Stephanie helped me balance my hormones and my mood. I have my energy back.",
    },
    {
      q: "Kind, thorough, and practical. The plan felt personal, not one‑size‑fits‑all.",
    },
  ];

  return (
    <section className="bg-khaki/40">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <h2 className="font-serif-display display-h2 text-forest mb-10">What Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map(({ q }, i) => (
            <figure key={i} className="relative p-6 card bg-white/90">
              <div className="absolute -top-3 left-6 w-6 h-6 rounded-full" style={{ backgroundColor: 'var(--khaki)', filter: 'blur(2px)' }} />
              <blockquote className="text-charcoal leading-7">“{q}”</blockquote>
              <div className="mt-3 h-3 w-3 rotate-45 bg-white border-l border-t border-black/5 absolute -bottom-1 left-10" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

