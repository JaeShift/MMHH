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
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#EBE4D6]">
      {/* Organic decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute -top-20 -left-20 w-96 h-96 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#75866D" d="M43.3,-76.7C54.9,-68.3,62.4,-54.1,69.8,-39.6C77.2,-25.1,84.5,-10.3,85.3,5.1C86.1,20.5,80.4,36.5,71.1,49.8C61.8,63.1,48.9,73.7,34.4,78.9C19.9,84.1,3.8,83.9,-12.1,80.9C-28,77.9,-43.7,72.1,-56.8,61.8C-69.9,51.5,-80.4,36.7,-84.3,20.1C-88.2,3.5,-85.5,-14.9,-77.8,-29.8C-70.1,-44.7,-57.4,-56.1,-43.3,-63.2C-29.2,-70.3,-13.6,-73.1,1.4,-75.6C16.4,-78.1,31.7,-85.1,43.3,-76.7Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute -bottom-32 -right-32 w-[600px] h-[600px] opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#8B9D7F" d="M39.7,-65.9C50.6,-58.1,57.9,-45.4,64.4,-32.1C70.9,-18.8,76.6,-4.9,76.1,9.2C75.6,23.3,68.9,37.6,58.8,48.3C48.7,59,35.2,66.1,20.8,70.1C6.4,74.1,-8.9,75,-23.3,71.3C-37.7,67.6,-51.2,59.3,-61.5,47.8C-71.8,36.3,-78.9,21.6,-80.3,6.3C-81.7,-9,-77.4,-24.9,-68.8,-37.7C-60.2,-50.5,-47.3,-60.2,-33.5,-66.8C-19.7,-73.4,-5,-76.9,8.3,-88.2C21.6,-99.5,28.8,-73.7,39.7,-65.9Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.4em] text-xs sm:text-sm text-[#75866D] font-semibold mb-4">
            Hear from Patients
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6">
            Patient Experience
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
              <div className="relative bg-white shadow-2xl transition-all duration-500 p-8 h-full hover:-translate-y-2 overflow-hidden border-l-4" style={{ borderLeftColor: i === 0 ? '#75866D' : i === 1 ? '#8B9D7F' : '#9FAE93' }}>
                {/* Decorative gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}></div>

                {/* Quote text */}
                <blockquote className="relative text-base sm:text-lg text-[color:var(--text-primary)] leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                
                {/* Author */}
                <div className="relative border-t-2 border-[#8B9D7F]/20 pt-4">
                  <p className="font-semibold text-lg text-black">{testimonial.author}</p>
                  <p className="text-sm text-[#75866D] font-medium mt-1">{testimonial.condition}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Professional Credentials - Subtle Version */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Credentials - Clean integrated style */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#75866D] mb-2 font-semibold">
                Professional Standards
              </p>
              <h3 className="text-2xl sm:text-3xl font-semibold text-black">
                Excellence in Care
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {credentials.map((cred, index) => {
                const IconComponent = cred.icon;
                return (
                  <motion.div
                    key={cred.title}
                    className="text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="inline-flex p-3 bg-white shadow-lg mb-3 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-[#75866D]" strokeWidth={2} />
                    </div>
                    <p className="font-semibold text-sm text-black mb-1">
                      {cred.title}
                    </p>
                    <p className="text-xs text-[color:var(--text-secondary)]">
                      {cred.subtitle}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
