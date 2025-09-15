"use client";
import { motion } from "framer-motion";

export default function FocusAreas() {
  const cols = [
    {
      heading: "Mental Health",
      items: [
        { t: "Anxiety & Depression", d: "Diagnosis and medication management with structured follow-up." },
        { t: "PMDD & Cyclical Mood", d: "Targeted evaluation and treatment for severe premenstrual symptoms." },
        { t: "Sleep & Insomnia", d: "Assessment and treatment for mid-life sleep disruption." },
        { t: "ADHD & Focus Concerns", d: "Evaluation, prescribing when appropriate, and monitoring." },
      ],
    },
    {
      heading: "Hormone Health",
      items: [
        { t: "Perimenopause & Menopause", d: "Treatment for hot flashes, mood changes, sleep issues, and more." },
        { t: "Hormone Therapy (HRT)", d: "Individualized hormonal and non-hormonal options with ongoing monitoring." },
        { t: "Thyroid & Related Concerns", d: "Evaluation of thyroid contributions to mood, energy, and sleep." },
      ],
    },
  ];

  return (
    <section id="services" className="section-muted">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.01 }}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ amount: 0.01 }}
          >
            Care Provided
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ amount: 0.01 }}
          >
            Focused care for women in mid-life—integrating mental health and hormone expertise with safe, evidence-based prescribing.
          </motion.p>
        </motion.div>

        {/* Unified list without section headers */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-6xl mx-auto">
          {cols.flatMap(({ items }) => items).map(({ t, d }, itemIndex) => (
            <motion.div 
              key={t} 
              className=""
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, delay: 0.1 + (itemIndex * 0.05) }}
              viewport={{ amount: 0.01 }}
            >
              <div className="mb-6">
                <div className="font-semibold text-lg text-neutral-900 mb-3">• {t}</div>
                <p className="text-neutral-600 leading-relaxed pl-4">{d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
