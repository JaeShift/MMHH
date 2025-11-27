"use client";
import { motion } from "framer-motion";

export default function FocusAreas() {
  const cols = [
    {
      heading: "Mental Health",
      items: [
        { 
          t: "Depression & Anxiety: Reclaim Your Life", 
          d: "Is persistent anxiety and depression impacting your life?\n\nIf daily worry, overwhelming lack of energy, and that constant \"down\" feeling follow you wherever you go, it's time for a new approach.\n\nLet's work together to help you reclaim your energy, calm, and joy through our integrated approach." 
        },
        { 
          t: "PMDD/Post-Partum: Restore Your Balance", 
          d: "Is your emotional well-being dictated by your menstrual cycle or other major hormonal shifts?\n\nIf you experience cyclical or postpartum mood changes—the kind you know are far more severe than \"baby blues\" or typical PMS—it's a clear signal that your hormones need support.\n\nLet's work together to address the changes and restore your emotional balance." 
        },
        { 
          t: "Perimenopause & Menopause: Reclaim Your Stability", 
          d: "Is the transition into midlife impacting your emotional well-being?\n\nIf the intense anxiety, brain fog, \"down\" feeling or lack of energy are new or suddenly worsened during perimenopause or menopause, it's not just \"getting older\"—it's a significant hormonal shift affecting your brain.\n\nLet's work together to reclaim your stability." 
        },
        { 
          t: "Brain Fog & Decreased Focus: Restore Your Clarity", 
          d: "Is chronic brain fog making it impossible to think clearly, focus, or feel sharp?\n\nIf inattention, mental slowness, and frustrating memory lapses are impacting your performance and confidence, it's time to investigate the underlying biology.\n\nLet's work together to restore your clarity." 
        },
        { 
          t: "Sleep and Insomnia: Regulate your sleep", 
          d: "Is chronic insomnia or poor sleep quality undermining your health and draining your mental energy?\n\nI understand that addressing sleep requires more than just masking the symptoms with sleeping pills. We focus on finding and correcting the underlying mechanism that is disrupting your natural sleep cycle.\n\nLet's work together to address your insomnia and achieve deep, restorative rest." 
        },
        { t: "Medication Management", d: "Whether you're looking to start, adjust, or optimize your current medications, I provide comprehensive medication management that considers both your mental health and hormonal health needs for a holistic approach to your wellness." },
      ],
    },
  ];

  const pillars = [
    {
      title: "Psychiatric Interventions",
      focus: "Targeting brain chemistry and behavior",
      description: "I utilize expert psychopharmacology (including SSRIs, SNRIs, and mood stabilizers) alongside evidence-based psychotherapy such as CBT, supportive counseling, and trauma-informed approaches."
    },
    {
      title: "Hormonal Therapies",
      focus: "Stabilizing biological foundations",
      description: "I offer bioidentical hormone treatments (estrogen, progesterone, testosterone) to precisely address imbalances and smooth the fluctuations that can severely impact mood and quality of life."
    },
    {
      title: "Integrative Interventions",
      focus: "Optimizing body systems",
      description: "I layer in targeted nutritional and supplement protocols, support the gut–brain axis, and implement individualized lifestyle shifts and stress-reduction techniques that help your body heal."
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="pt-24 pb-20 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-[color:var(--surface)] to-[color:var(--surface-muted)] relative overflow-hidden">
      {/* Large background circle for entire section */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[100rem] h-[100rem] bg-stone-200 rounded-full opacity-40"></div>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.15, once: false }}
          transition={{ duration: 0.4 }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="relative rounded-[32px] border border-[color:var(--neutral-200)] bg-white/90 shadow-[0_35px_80px_-30px_rgba(57,46,38,0.35)] px-6 sm:px-10 py-8 sm:py-10 text-center space-y-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-[color:var(--surface-muted)]/40 to-white opacity-60 pointer-events-none"></div>
              <div className="relative space-y-4">
                <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-[color:var(--text-muted)]">Services</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[color:var(--text-primary)] leading-tight">
                  Areas of Care
                </h2>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-[color:var(--mocha)] mx-auto rounded-full"></div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[color:var(--text-secondary)] leading-relaxed">
                  <a href="#telehealth" className="underline decoration-1 underline-offset-4 transition-all duration-300 hover:decoration-2 hover:underline-offset-2 hover:scale-105 inline-block" style={{ color: '#8B9D7F' }}>Telehealth</a> and in-person appointments available, servicing all areas across Ohio.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-[color:var(--text-muted)] leading-relaxed italic">
                  Your plan may include therapy strategies, medication when helpful, and hormone care as needed — all delivered by one provider for women across Ohio.
                </p>
              </div>
            </div>
            <div className="w-28 h-1.5 bg-[color:var(--mocha)]/70 mx-auto mt-8 rounded-full shadow-[0_10px_25px_-10px_rgba(57,46,38,0.4)]"></div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-8 sm:mt-10 md:mt-12 grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:gap-16 max-w-[90rem] mx-auto"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.05, once: false }}
        >
          <motion.article
            className="md:col-span-2 lg:col-span-3 rounded-[32px] border border-[color:var(--neutral-200)] bg-gradient-to-r from-white/95 via-[color:var(--surface-elevated)]/90 to-white/95 shadow-2xl p-6 sm:p-10 md:p-12 space-y-6"
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-center space-y-2">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[color:var(--text-primary)]">
                Core Treatment Pillars
              </p>
              <p className="text-sm sm:text-base md:text-lg text-[color:var(--text-secondary)] max-w-4xl mx-auto">
                I provide highly personalized care across Ohio by weaving together these complementary modalities:
              </p>
            </div>
            <div className="grid gap-4 sm:gap-5 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <motion.div 
                  key={pillar.title} 
                  className="rounded-2xl border border-[color:var(--neutral-200)] bg-white/90 px-4 sm:px-5 py-5 sm:py-6 text-center sm:text-left shadow-md"
                  whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 35px -15px rgba(57, 46, 38, 0.25)" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <p className="text-base sm:text-lg font-semibold text-[color:var(--text-primary)]">{pillar.title}</p>
                  <p className="text-xs sm:text-sm text-[color:var(--text-secondary)] uppercase tracking-wide mt-1">{pillar.focus}</p>
                  <div className="w-12 h-0.5 bg-[color:var(--mocha)] mx-auto sm:mx-0 my-3"></div>
                  <p className="text-sm sm:text-base text-[color:var(--text-secondary)] leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.article>
          {cols.flatMap(({ items }) => items).map(({ t, d }, index) => {
            const copyBlocks = Array.isArray(d)
              ? d
              : typeof d === "string"
                ? d.split("\n\n")
                : [];

            return (
            <motion.article 
              key={`${t}-${index}`}
              className="rounded-2xl border border-[color:var(--neutral-200)] bg-[color:var(--surface-elevated)] p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
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
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[color:var(--text-primary)] mb-4 md:mb-6 leading-tight">{t}</h3>
              {/* Divider line between header and text */}
              <div className="w-12 sm:w-16 h-px bg-[color:var(--mocha)] mb-4 md:mb-6"></div>
              {copyBlocks.map((paragraph, paragraphIndex) => (
                <p 
                  key={paragraphIndex} 
                  className="text-base md:text-lg text-[color:var(--text-secondary)] leading-relaxed mb-3 last:mb-0"
                >
                  {paragraph.trim()}
                </p>
              ))}
            </motion.article>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
