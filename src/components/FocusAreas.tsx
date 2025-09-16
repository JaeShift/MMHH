"use client";
import { motion } from "framer-motion";

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

  return (
    <section id="services" className="pt-16 pb-32 md:pt-20 md:pb-40">
      <div className="container">
        <div className="rounded-full pt-24 pb-56 -mx-20 md:-mx-40 lg:-mx-56 xl:-mx-64 2xl:-mx-72 px-24 md:px-48 lg:px-56 xl:px-64 2xl:px-72 shadow-lg border border-stone-200/50" style={{backgroundColor: 'var(--surface-muted)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.03), 0 8px 24px rgba(0,0,0,0.08)'}}>
          <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.01 }}
        >
          <motion.h2 
            className="italic text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-8"
            style={{fontFamily: 'var(--font-serif)', textShadow: '0 2px 4px rgba(0,0,0,0.1)'}}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ amount: 0.01 }}
          >
            Areas of Care
          </motion.h2>
          <motion.p 
            className="font-body text-lg md:text-xl text-neutral-600 max-w-4xl mx-auto leading-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ amount: 0.01 }}
          >
            Conditions that commonly affect mood, focus, & overall balance.
          </motion.p>
        </motion.div>

        {/* Service grid with proper spacing */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-7xl mx-auto">
          {cols.flatMap(({ items }) => items).map(({ t, d }, itemIndex) => (
            <motion.div 
              key={t} 
              className="group h-72 flex flex-col justify-between p-6 rounded-lg"
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
                y: -12, 
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              transition={{ 
                duration: 0.3, 
                ease: "easeOut"
              }}
            >
              <div>
                <div>
                  <h3 className="italic text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4 pb-2 border-b-2 border-[#3b4340] group-hover:border-[#6b8c4a] transition-colors duration-300 whitespace-nowrap inline-block"
                      style={{fontFamily: 'var(--font-serif)', textShadow: '0 2px 4px rgba(0,0,0,0.1)'}}
                  >
                    {t}
                  </h3>
                  <p className="font-body text-lg md:text-xl text-neutral-600 leading-6">
                    {d}
                  </p>
                </div>
              </div>
              <motion.a 
                href={`/care/${encodeURIComponent(t.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, ''))}`}
                className="inline-flex items-center text-[#2a302d] hover:text-[#6b8c4a] font-medium mt-4 transition-colors duration-150"
                whileHover={{ scale: 1.05, x: 4, transition: { duration: 0.15 } }}
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
