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
        { t: "Perimenopause & Menopause", d: "Treatment for hot flashes, mood changes, sleep issues, and more." },
        { t: "Hormone Therapy (HRT)", d: "Individualized hormonal and non-hormonal options with ongoing monitoring." },
        { t: "Thyroid & Related Concerns", d: "Evaluation of thyroid contributions to mood, energy, and sleep." },
        { t: "Stress Management", d: "Comprehensive approaches to managing work, family, and life stressors." },
        { t: "Weight & Metabolism", d: "Support for metabolic health and sustainable weight management strategies." },
      ],
    },
  ];

  return (
    <section id="services" className="pt-8 pb-20 md:pt-12 md:pb-28">
      <div className="container">
        <div className="bg-stone-100 rounded-full pt-20 pb-48 -mx-20 md:-mx-40 lg:-mx-56 xl:-mx-64 2xl:-mx-72 px-24 md:px-48 lg:px-56 xl:px-64 2xl:px-72">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.01 }}
        >
          <motion.h2 
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ amount: 0.01 }}
          >
            Care Provided
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-neutral-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ amount: 0.01 }}
          >
            Focused care for women in mid-life—integrating mental health and hormone expertise with safe, evidence-based prescribing.
          </motion.p>
        </motion.div>

        {/* 3x3 grid with square-constrained text */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {cols.flatMap(({ items }) => items).map(({ t, d }, itemIndex) => (
            <motion.div 
              key={t} 
              className="group h-56 flex flex-col justify-between"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + (itemIndex * 0.1),
                ease: "easeOut"
              }}
              viewport={{ amount: 0.2 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-neutral-900 mb-4 pb-2 inline-block border-b-2 border-slate-300 group-hover:border-[#849468] transition-colors duration-300">
                  {t}
                </h3>
                <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                  {d}
                </p>
              </div>
              <motion.a 
                href={`/care/${encodeURIComponent(t.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, ''))}`}
                className="inline-flex items-center text-[#849468] font-medium hover:text-[#596163] transition-colors duration-300 mt-4"
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + (itemIndex * 0.1) }}
                viewport={{ amount: 0.2 }}
              >
                Read More 
                <motion.svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.a>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
      
      {/* Divider line */}
      <div className="w-full h-px bg-slate-300 mt-16 mb-8"></div>
    </section>
  );
}
