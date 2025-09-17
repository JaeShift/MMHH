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
        { t: "Perimenopause & Menopause", d: "Hot flashes, mood changes, and sleep problems don't have to define this stage of life. I specialize in helping women navigate perimenopause and menopause with treatment designed for relief and balance." },
        { t: "ADHD & Focus Concerns", d: "If concentration and follow-through feel like a daily battle, I provide comprehensive ADHD evaluation and medication management to improve focus, reduce overwhelm, and support your success at work and home." },
        { t: "Sleep & Insomnia", d: "When sleepless nights affect your health, I create tailored treatment plans that address both hormonal and mental health factors, so you can finally rest and restore your energy." },
        { t: "Hormone Therapy (HRT)", d: "Hormonal shifts can feel overwhelming. I provide individualized hormone therapy (HRT) and non-hormonal options to restore energy, stabilize mood, and improve quality of life in mid-life and beyond." },
        { t: "Thyroid & Related Concerns", d: "Thyroid imbalances often affect mood, energy, and sleep. I offer thorough evaluation and treatment that connects thyroid health with your mental and emotional well-being." },
        { t: "Stress Management", d: "Chronic stress takes a toll on both body and mind. I provide personalized medication management and strategies that strengthen resilience, calm, and balance in daily life." },
        { t: "Weight & Metabolism", d: "Weight changes and slowed metabolism are common in mid-life. I offer prescribing support and individualized strategies for long-term, sustainable weight management." },
      ],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-[color:var(--surface)] to-[color:var(--surface-muted)] relative overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[color:var(--accent)]/20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-[color:var(--wheat)]/15 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-[color:var(--pistachio)]/25 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-[color:var(--bisque)]/20 rounded-full blur-lg"></div>
      
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Decorative background element */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[40rem] h-[40rem] bg-[color:var(--accent)]/15 rounded-full opacity-50 -z-10"></div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[color:var(--text-primary)] relative mb-6">Areas of Care</h2>
          <div className="w-24 h-1 bg-[color:var(--mocha)] mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-[color:var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">Conditions that impact mood, focus, and daily well-being.</p>
        </motion.div>

        <motion.div 
          className="mt-10 md:mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto"
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
          {cols.flatMap(({ items }) => items).map(({ t, d }, index) => (
            <motion.article 
              key={`${t}-${index}`}
              className="rounded-2xl border border-[color:var(--neutral-200)] bg-[color:var(--surface-elevated)] p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              variants={fadeUp}
              whileHover={{ 
                scale: 1.02, 
                y: -8
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                duration: 0.08, 
                ease: "easeOut",
                layout: { duration: 0.5, ease: "easeOut" }
              }}
              style={{
                boxShadow: '0 10px 25px -5px rgba(57, 46, 38, 0.08), 0 10px 10px -5px rgba(107, 91, 77, 0.04), 0 0 0 1px rgba(226, 217, 205, 0.3)'
              }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-[color:var(--text-primary)]">{t}</h3>
              {/* Divider line between header and text */}
              <div className="w-16 h-px bg-[color:var(--mocha)] mt-5 mb-5"></div>
              <p className="text-base md:text-lg text-[color:var(--text-secondary)] leading-relaxed">{d}</p>
              <Link 
                href={`/care/${encodeURIComponent(t.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, ''))}`}
                className="mt-6 inline-flex text-base font-medium tracking-wide text-[color:var(--mocha)] hover:text-[color:var(--espresso)] transition-colors duration-300"
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
