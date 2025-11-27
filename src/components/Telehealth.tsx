"use client";
import { motion } from "framer-motion";
import { Calendar, Mail, CheckCircle2, Video, MapPin } from "lucide-react";

export default function Telehealth() {
  const steps = [
    { 
      icon: Calendar,
      title: "Request an Appointment", 
      text: "Fill out the appointment request form with your contact information and preferences.",
      accent: "from-[#75866D] to-[#8B9D7F]"
    },
    { 
      icon: Mail,
      title: "Check Your Email", 
      text: "You'll receive an email with instructions to log in to the secure patient portal.",
      accent: "from-[#8B9D7F] to-[#9FAE93]"
    },
    { 
      icon: CheckCircle2,
      title: "Book Your Time", 
      text: "Select an available appointment time in the portal. Your appointment request will be reviewed and confirmed.",
      accent: "from-[#9FAE93] to-[#75866D]"
    },
  ];

  const appointmentTypes = [
    {
      icon: Video,
      type: "Telehealth Visits",
      description: "Secure, HIPAA-compliant virtual appointments from anywhere in Ohio",
      features: ["Same quality of care", "Convenient scheduling", "Private & secure"]
    },
    {
      icon: MapPin,
      type: "In-Person Visits",
      description: "Face-to-face consultations at our welcoming office location",
      features: ["Comprehensive evaluation", "Personalized attention", "Comfortable environment"]
    }
  ];

  return (
    <section id="telehealth" className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-[#EBE4D6]">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded-[48px] overflow-hidden shadow-2xl">
          {/* Sophisticated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#8B9D7F]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#75866D]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.4em] text-xs sm:text-sm text-[#75866D] font-semibold mb-4">
            Your Visit
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6">
            How Appointments Work
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#8B9D7F]"></div>
            <div className="w-2 h-2 rounded-full bg-[#8B9D7F]"></div>
            <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#8B9D7F]"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-[color:var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re in Columbus, Ohio or anywhere in the state, every visit follows this simple path
          </p>
        </motion.div>
        
        {/* Steps - Timeline Style */}
        <div className="relative mb-20 sm:mb-24">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#75866D] via-[#8B9D7F] to-[#9FAE93]"></div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div 
                  key={step.title}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Icon with pulse effect */}
                    <motion.div 
                      className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-xl mb-6 z-10`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent className="w-10 h-10 text-white" strokeWidth={2} />
                      {/* Pulse ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.accent} opacity-30`}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>

                    {/* Step number badge */}
                    <div className="absolute top-16 right-1/2 translate-x-8 -translate-y-8 w-8 h-8 rounded-full bg-white border-2 border-[#75866D] flex items-center justify-center font-bold text-[#75866D] text-sm shadow-md z-20">
                      {index + 1}
                    </div>

                    {/* Content card */}
                    <div className="bg-white rounded-2xl border-2 border-[color:var(--neutral-200)] p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <h3 className="font-semibold text-xl md:text-2xl text-[color:var(--text-primary)] mb-3 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-[color:var(--text-secondary)] text-base leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Appointment Types */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4">
              Flexible Care Options
            </h3>
            <p className="text-base sm:text-lg text-[color:var(--text-secondary)] max-w-2xl mx-auto">
              Choose the appointment style that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {appointmentTypes.map((type, index) => {
              return (
                <motion.div
                  key={type.type}
                  className="group relative bg-white rounded-3xl border-2 border-[color:var(--neutral-200)] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#75866D]/5 to-[#8B9D7F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    <h4 className="text-2xl font-semibold text-[color:var(--text-primary)] mb-3">
                      {type.type}
                    </h4>
                    <p className="text-base text-[color:var(--text-secondary)] mb-6 leading-relaxed">
                      {type.description}
                    </p>

                    <ul className="space-y-3">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#75866D]"></div>
                          <span className="text-[color:var(--text-secondary)]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
