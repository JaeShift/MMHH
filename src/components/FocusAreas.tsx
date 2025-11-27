"use client";
import { motion } from "framer-motion";
import { Brain, Heart, Sparkles, Moon, Focus, Pill } from "lucide-react";

export default function FocusAreas() {
  const serviceCategories = [
    {
      icon: Brain,
      category: "Depression & Anxiety",
      tagline: "Reclaim Your Life",
      description: "If daily worry, overwhelming lack of energy, and that constant \"down\" feeling follow you wherever you go, it's time for a new approach. Let's work together to help you reclaim your energy, calm, and joy through our integrated approach.",
      gradient: "from-[#75866D] to-[#8B9D7F]"
    },
    {
      icon: Heart,
      category: "PMDD & Postpartum",
      tagline: "Restore Your Balance",
      description: "If you experience cyclical or postpartum mood changes—the kind you know are far more severe than \"baby blues\" or typical PMS—it's a clear signal that your hormones need support. Let's work together to address the changes and restore your emotional balance.",
      gradient: "from-[#8B9D7F] to-[#9FAE93]"
    },
    {
      icon: Sparkles,
      category: "Perimenopause & Menopause",
      tagline: "Reclaim Your Stability",
      description: "If the intense anxiety, brain fog, \"down\" feeling or lack of energy are new or suddenly worsened during perimenopause or menopause, it's not just \"getting older\"—it's a significant hormonal shift affecting your brain. Let's work together to reclaim your stability.",
      gradient: "from-[#9FAE93] to-[#75866D]"
    },
    {
      icon: Focus,
      category: "Brain Fog & Focus",
      tagline: "Restore Your Clarity",
      description: "If inattention, mental slowness, and frustrating memory lapses are impacting your performance and confidence, it's time to investigate the underlying biology. Let's work together to restore your clarity.",
      gradient: "from-[#75866D] to-[#677560]"
    },
    {
      icon: Moon,
      category: "Sleep & Insomnia",
      tagline: "Regulate Your Sleep",
      description: "I understand that addressing sleep requires more than just masking the symptoms with sleeping pills. We focus on finding and correcting the underlying mechanism that is disrupting your natural sleep cycle. Let's work together to address your insomnia and achieve deep, restorative rest.",
      gradient: "from-[#677560] to-[#8B9D7F]"
    },
    {
      icon: Pill,
      category: "Medication Management",
      tagline: "Optimize Your Treatment",
      description: "Whether you're looking to start, adjust, or optimize your current medications, I provide comprehensive medication management that considers both your mental health and hormonal health needs for a holistic approach to your wellness.",
      gradient: "from-[#8B9D7F] to-[#75866D]"
    }
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="pt-24 pb-20 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32 bg-[#EBE4D6] relative overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#8B9D7F]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-[600px] h-[600px] bg-[#75866D]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#9FAE93]/5 to-transparent rounded-full"></div>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div
          className="relative max-w-5xl mx-auto mb-16 sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="uppercase tracking-[0.4em] text-xs sm:text-sm text-[#75866D] font-semibold mb-4">
                Comprehensive Services
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black leading-tight mb-6">
                Areas of Care
              </h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#8B9D7F]"></div>
                <div className="w-2 h-2 rounded-full bg-[#8B9D7F]"></div>
                <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#8B9D7F]"></div>
              </div>
            </motion.div>

            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-[color:var(--text-secondary)] leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#telehealth" className="text-[#75866D] hover:text-[#8B9D7F] underline decoration-[#8B9D7F]/30 underline-offset-4 hover:decoration-[#8B9D7F] transition-all duration-300 font-medium">Telehealth</a> and in-person appointments available, servicing all areas across Ohio
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg text-[color:var(--text-muted)] leading-relaxed max-w-2xl mx-auto italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Your plan may include therapy strategies, medication when helpful, and hormone care as needed — all delivered by one provider
            </motion.p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="max-w-[90rem] mx-auto space-y-16 sm:space-y-20 md:space-y-24">
          {/* Core Treatment Pillars - Professional Medical Grade Design */}
          <motion.article
            className="md:col-span-2 lg:col-span-3 rounded-3xl border-2 border-[#8B9D7F]/30 bg-gradient-to-br from-white via-[#F8F9F6] to-white shadow-2xl overflow-hidden"
            variants={fadeUp}
            transition={{ duration: 0.3 }}
          >
            {/* Header Section */}
            <div className="bg-gradient-to-r from-[#75866D] via-[#8B9D7F] to-[#75866D] px-8 sm:px-12 py-8 sm:py-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
              <div className="relative z-10">
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/80 mb-3 font-semibold">
                  Integrated Care Approach
                </p>
                <h3 className="font-caslon text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-4">
                  Core Treatment Pillars
                </h3>
                <div className="w-20 h-0.5 bg-white/60 mx-auto mb-4"></div>
                <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Evidence-based care tailored to your unique needs, combining psychiatric expertise with hormonal optimization and integrative wellness strategies
                </p>
              </div>
            </div>

            {/* Pillars Grid */}
            <div className="p-8 sm:p-10 md:p-12">
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {pillars.map((pillar, index) => (
                  <motion.div 
                    key={pillar.title}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Pillar Card */}
                    <div className="relative h-full rounded-2xl border border-[color:var(--neutral-200)] bg-white p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {/* Number Badge */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#75866D] to-[#8B9D7F] flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>

                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#8B9D7F]/10 to-transparent rounded-bl-2xl"></div>
                      
                      <div className="relative space-y-4 pt-4">
                        <div>
                          <h4 className="text-xl sm:text-2xl font-semibold text-[color:var(--text-primary)] mb-2 leading-tight">
                            {pillar.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#75866D] uppercase tracking-[0.15em] font-semibold">
                            {pillar.focus}
                          </p>
                        </div>
                        
                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#75866D] to-[#8B9D7F] rounded-full"></div>
                        
                        <p className="text-sm sm:text-base text-[color:var(--text-secondary)] leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>

                      {/* Hover effect gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8B9D7F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom note */}
              <motion.div 
                className="mt-8 sm:mt-10 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-sm sm:text-base text-[color:var(--text-secondary)] italic max-w-3xl mx-auto">
                  All treatment plans are developed collaboratively, respecting your goals, preferences, and individual circumstances
                </p>
              </motion.div>
            </div>
          </motion.article>

          {/* Specialty Services Grid - Premium Medical Design */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4">
                Specialty Services
              </h3>
              <p className="text-base sm:text-lg text-[color:var(--text-secondary)] max-w-2xl mx-auto">
                Expert care for the unique challenges women face throughout life&apos;s transitions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {serviceCategories.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.article
                    key={service.category}
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative h-full rounded-2xl border-2 border-[color:var(--neutral-200)] bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                      {/* Gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      {/* Icon */}
                      <div className={`relative mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                      </div>

                      {/* Content */}
                      <div className="relative space-y-3">
                        <h4 className="text-2xl font-semibold text-[color:var(--text-primary)] leading-tight">
                          {service.category}
                        </h4>
                        
                        <p className="text-sm text-[#75866D] uppercase tracking-[0.15em] font-semibold">
                          {service.tagline}
                        </p>
                        
                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#75866D] to-transparent rounded-full"></div>
                        
                        <p className="text-base text-[color:var(--text-secondary)] leading-relaxed pt-2">
                          {service.description}
                        </p>
                      </div>

                      {/* Decorative corner element */}
                      <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
