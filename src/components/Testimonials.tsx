"use client";
import { motion } from "framer-motion";
import { Award, Shield, MapPin, FileCheck } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "My care was prompt, kind, thoughtful and compassionate. Time was given for questions to be asked and advice was given in a concise and constructive manner. Your care is greatly appreciated.",
      author: "Connie",
      condition: "Thoughtful & Compassionate Care",
      gradient: "from-[#75866D] to-[#8B9D7F]"
    },
    {
      quote: "Stephanie is a rock star in being able to make an accurate diagnosis. I cannot recommend her enough.",
      author: "Jan",
      condition: "Accurate Diagnosis",
      gradient: "from-[#8B9D7F] to-[#9FAE93]"
    },
    {
      quote: "I've always had such great personalized care here!! So grateful!",
      author: "Gina",
      condition: "Personalized Care",
      gradient: "from-[#9FAE93] to-[#75866D]"
    },
  ];

  const credentials = [
    {
      icon: Award,
      title: "Board Certified",
      subtitle: "PMHNP-BC & FNP-BC"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      subtitle: "Secure & Private"
    },
    {
      icon: MapPin,
      title: "Ohio Licensed",
      subtitle: "Statewide Care"
    },
    {
      icon: FileCheck,
      title: "Evidence-Based",
      subtitle: "Clinical Excellence"
    }
  ];

  return (
    <section className="bg-[#EBE4D6] py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded-[48px] overflow-hidden shadow-2xl">
          {/* Subtle background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#75866D]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B9D7F]/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.4em] text-xs sm:text-sm text-[#75866D] font-semibold mb-4">
            Patient Stories
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6">
            Hear from Patients
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#8B9D7F]"></div>
            <div className="w-2 h-2 rounded-full bg-[#8B9D7F]"></div>
            <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#8B9D7F]"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-[color:var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Real experiences from women who have transformed their health and wellness
          </p>
        </motion.div>
        
        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20 sm:mb-24">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i} 
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white rounded-3xl border-2 border-[color:var(--neutral-200)] shadow-xl hover:shadow-2xl transition-all duration-500 p-8 h-full hover:-translate-y-2 overflow-hidden">
                {/* Decorative gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Quote text */}
                <blockquote className="relative text-base sm:text-lg text-[color:var(--text-primary)] leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="relative border-t-2 border-[color:var(--neutral-200)] pt-4">
                  <p className="font-semibold text-lg text-black">{testimonial.author}</p>
                  <p className="text-sm text-[#75866D] font-medium mt-1">{testimonial.condition}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Professional Credentials - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl border-2 border-[color:var(--neutral-200)] shadow-2xl overflow-hidden">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-[#75866D] via-[#8B9D7F] to-[#75866D] px-8 py-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
                  Professional Excellence
                </h3>
                <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
                  Your care is backed by the highest standards in medical practice
                </p>
              </div>
            </div>
            
            {/* Credentials Grid */}
            <div className="p-8 sm:p-10 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                {credentials.map((cred, index) => {
                  const IconComponent = cred.icon;
                  return (
                    <motion.div
                      key={cred.title}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#75866D] to-[#8B9D7F] shadow-lg mb-4 hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                      </div>
                      <p className="font-semibold text-lg text-black mb-1">
                        {cred.title}
                      </p>
                      <p className="text-sm text-[color:var(--text-secondary)]">
                        {cred.subtitle}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
