"use client";
import { motion } from "framer-motion";

export default function Telehealth() {
  const steps = [
    { title: "Request an appointment", text: "Fill out the appointment request form with your contact information and preferences." },
    { title: "Check your email", text: "You'll receive an email with instructions to log in to the secure patient portal." },
    { title: "Book your time", text: "Select an available appointment time in the portal. Your appointment request will be reviewed and confirmed." },
  ];

  return (
    <section id="telehealth" className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-white">
      <div className="absolute inset-x-0 top-8 mx-auto w-[90%] max-w-5xl h-[80%] bg-white/70 blur-3xl opacity-80"></div>
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[90rem] h-[90rem] bg-stone-200 rounded-full opacity-30"></div>
      </div>
      <div className="absolute inset-8 border border-[color:var(--neutral-200)]/70 rounded-[32px] pointer-events-none"></div>
      <div className="relative mx-auto max-w-5xl px-4 md:px-6">
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ amount: 0.1 }}
        >
          <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-[color:var(--text-muted)]">Your Visit</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-2 mb-4 text-[color:var(--text-primary)] leading-tight">
            How Appointments Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[color:var(--text-secondary)] max-w-3xl mx-auto">
            Whether you&apos;re in Columbus, Ohio or anywhere in the state, every visit follows this simple path.
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-[color:var(--mocha)] mx-auto mt-6 rounded-full"></div>
        </motion.div>
        
        <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-3">
          {steps.map((s, index) => (
            <motion.div 
              key={s.title} 
              className="rounded-3xl border border-white/30 bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-[0_25px_45px_-20px_rgba(57,46,38,0.4)] hover:shadow-[0_35px_60px_-20px_rgba(57,46,38,0.5)] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
              viewport={{ amount: 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#75866D] to-[#8B9D7F] text-white flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0 shadow-lg">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-xl md:text-2xl text-[color:var(--text-primary)] leading-tight">{s.title}</h3>
              </div>
              <p className="text-[color:var(--text-secondary)] text-base md:text-lg leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
