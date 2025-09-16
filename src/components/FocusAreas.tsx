"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FocusAreas() {
  const cols = [
    {
      heading: "Mental Health",
      items: [
        { t: "Anxiety & Depression", d: "I provide personalized evaluation and medication management for anxiety and depression, helping you regain emotional stability, energy, and peace of mind." },
        { t: "PMDD & Cyclical Mood", d: "For women experiencing PMDD or monthly mood shifts, I offer targeted treatment that reduces severe emotional and physical symptoms, helping you feel more in control throughout your cycle." },
        { t: "Sleep & Insomnia", d: "When sleepless nights affect your health, I create tailored treatment plans that address both hormonal and mental health factors, so you can finally rest and restore your energy." },
        { t: "ADHD & Focus Concerns", d: "If concentration and follow-through feel like a daily battle, I provide comprehensive ADHD evaluation and medication management to improve focus, reduce overwhelm, and support your success at work and home." },
        { t: "Perimenopause & Menopause", d: "Hot flashes, mood changes, and sleep problems don't have to define this stage of life. I specialize in helping women navigate perimenopause and menopause with treatment designed for relief and balance." },
        { t: "Hormone Therapy (HRT)", d: "Hormonal shifts can feel overwhelming. I provide individualized hormone therapy (HRT) and non-hormonal options to restore energy, stabilize mood, and improve quality of life in mid-life and beyond." },
        { t: "Thyroid & Related Concerns", d: "Thyroid imbalances often affect mood, energy, and sleep. I offer thorough evaluation and treatment that connects thyroid health with your mental and emotional well-being." },
        { t: "Stress Management", d: "Chronic stress takes a toll on both body and mind. I provide personalized medication management and strategies that strengthen resilience, calm, and balance in daily life." },
        { t: "Weight & Metabolism", d: "Weight changes and slowed metabolism are common in mid-life. I offer prescribing support and individualized strategies for long-term, sustainable weight management." },
      ],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } }
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <motion.div 
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl">Areas of Care</h2>
          <p className="mt-4 text-lg text-neutral-600">Conditions that impact mood, focus, and daily well-being.</p>
        </motion.div>

        <motion.div 
          className="mt-10 md:mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cols.flatMap(({ items }) => items).map(({ t, d }, itemIndex) => (
            <motion.article 
              key={t} 
              className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={fadeUp}
            >
              <h3 className="text-2xl">{t}</h3>
              <p className="mt-3">{d}</p>
              <Link 
                href={`/care/${encodeURIComponent(t.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, ''))}`}
                className="mt-5 inline-flex text-sm uppercase tracking-wide text-[#3B4340] hover:underline"
              >
                Read More &gt;
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
