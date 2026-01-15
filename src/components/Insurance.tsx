"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

type FAQ = {
  question: string;
  answer: React.ReactNode;
  category?: string;
};

export default function Insurance() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Do you take insurance?",
      answer: (
        <div className="space-y-4">
          <p>
            I am passionately committed to providing high-quality, specialized care that fully integrates Modern Mental Health and Hormones to your needs.
          </p>
          <p>
            <strong>Great news!</strong> I am now in-network with the following insurance providers:
          </p>
          
          {/* Insurance Logos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6 items-center justify-items-center">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative w-full h-20 flex items-center justify-center">
                <Image
                  src="/cigna-logo-wallpaper-e1474921230453.webp"
                  alt="Cigna - Evernorth"
                  width={160}
                  height={60}
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-black">Cigna - Evernorth</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative w-full h-20 flex items-center justify-center">
                <Image
                  src="/unitedhealthcare.webp"
                  alt="United Healthcare / Optum"
                  width={160}
                  height={60}
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-black">United Healthcare / Optum</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative w-full h-20 flex items-center justify-center">
                <Image
                  src="/MedicalMutual.webp"
                  alt="Medical Mutual - Supermed"
                  width={160}
                  height={60}
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-black">Medical Mutual - Supermed</p>
            </div>
          </div>
          
          <p>
            I provide superbills for reimbursement if you have a different insurance provider, and I also accept HSA/FSA payments.
          </p>
          
          <div>
            <p className="font-semibold mb-2">For out-of-network or self-pay patients:</p>
            <ul className="mt-2 space-y-2 text-sm sm:text-base">
              <li>
                <span className="font-semibold">Initial Evaluation: Being Seen</span> — 1 hour @ <span className="font-bold text-black">$300.00</span>
              </li>
              <li>
                <span className="font-semibold">Routine or Follow-up Visits</span> — 30 minutes @ <span className="font-bold text-black">$150.00</span>
              </li>
            </ul>
            <p className="text-xs text-gray-600 mt-3 italic">All amounts in USD.</p>
          </div>
          <p>
            For complete financial information, please review my{" "}
            <Link
              href="/financial-disclosure"
              className="underline underline-offset-4 text-[#8B9D7F] hover:text-[#6c8260]"
            >
              Financial Disclosure
            </Link>
            .
          </p>
        </div>
      )
    },
    {
      question: "How can I start care?",
      answer: "You can schedule your first appointment through the Book Now button. During your first visit, I'll discuss your concerns, review your history, and create a treatment plan tailored to your mental health and hormonal balance."
    },
    {
      question: "What is Modern MHH?",
      answer: "Modern MHH is a women's mental health and hormone practice that provides thoughtful, evidence-based care for women navigating anxiety, depression, PMDD, postpartum mood changes, perimenopause, and menopause. The focus is on helping you feel balanced, clear, and like yourself again."
    },
    {
      question: "Who do you see?",
      answer: "I work with adult women (18+) experiencing emotional or physical symptoms related to hormonal shifts — including anxiety, irritability, mood swings, brain fog, low motivation, or fatigue. Many of my patients are navigating life transitions such as postpartum recovery, perimenopause, or menopause."
    },
    {
      question: "What services do you provide?",
      answer: "I offer comprehensive psychiatric evaluations, medication management, and hormone-informed care. Treatment plans may include lifestyle support, lab testing when appropriate, and coordination with your other healthcare providers for a fully integrated approach."
    },
    {
      question: "Do you prescribe medications or hormones?",
      answer: "Yes. As a Psychiatric Mental Health Nurse Practitioner (PMHNP) and Family Nurse Practitioner (FNP), I can prescribe psychiatric medications and select hormonal therapies. My goal is always to use the safest, most effective, and lowest necessary doses — customized to your body and your goals."
    },
    {
      question: "How do hormones impact mental health?",
      answer: "Hormones play a major role in mood regulation, energy, and focus. Shifts in estrogen, progesterone, and other hormones can affect neurotransmitters like serotonin and dopamine, leading to mood changes. Understanding your hormone patterns allows for more targeted, effective treatment."
    },
    {
      question: "Do you offer telehealth?",
      answer: "Yes, I offer secure, HIPAA-compliant virtual visits for women across Ohio. You can receive care from home or anywhere you feel comfortable when receiving treatment via telehealth."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-24 lg:py-32 bg-[#EBE4D6]">
      {/* Organic decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-20 right-10 w-80 h-80 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#8B9D7F" d="M41.3,-71.5C51.8,-64.2,57.4,-50.2,62.8,-36.5C68.2,-22.8,73.4,-9.4,73.1,4.2C72.8,17.8,67,31.6,58.4,42.8C49.8,54,38.4,62.6,25.3,67.8C12.2,73,-2.6,74.8,-17.1,72.3C-31.6,69.8,-45.8,63,-56.8,52.4C-67.8,41.8,-75.6,27.4,-78.3,12.1C-81,-3.2,-78.6,-19.4,-71.8,-32.8C-65,-46.2,-53.8,-56.8,-41.3,-63.5C-28.8,-70.2,-14.4,-73,0.4,-73.7C15.2,-74.4,30.8,-78.8,41.3,-71.5Z" transform="translate(100 100)" />
        </svg>
        {/* Logo PNG Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03]">
          <Image 
            src="/LOGO PNG.png" 
            alt="" 
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div 
              className="text-center mb-16 sm:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="uppercase tracking-[0.4em] text-xs sm:text-sm text-[#75866D] font-semibold mb-4">
                Common Questions
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6">
                Frequently Asked Questions
              </h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#8B9D7F]"></div>
                <div className="w-2 h-2 rounded-full bg-[#8B9D7F]"></div>
                <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#8B9D7F]"></div>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-[color:var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about Modern Mental Health & Hormones
              </p>
            </motion.div>

            {/* FAQ Items */}
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className={`group relative bg-white transition-all duration-300 overflow-hidden ${
                    openItem === index 
                      ? 'shadow-2xl border-l-4 border-l-[#75866D]' 
                      : 'shadow-lg hover:shadow-xl border-l-4 border-l-transparent hover:border-l-[#8B9D7F]/50'
                  }`}>
                    {/* Side accent bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                      openItem === index 
                        ? 'bg-gradient-to-b from-[#75866D] to-[#8B9D7F]' 
                        : 'bg-transparent group-hover:bg-[#8B9D7F]/30'
                    }`}></div>

                    <button
                      onClick={() => toggleItem(index)}
                      className="relative w-full text-left p-6 sm:p-8 focus:outline-none"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-[color:var(--text-primary)] leading-tight pr-4">
                            {item.question}
                          </h3>
                        </div>
                        
                        <motion.div 
                          className={`flex-shrink-0 p-2 transition-colors duration-300 ${
                            openItem === index 
                              ? 'bg-[#75866D]' 
                              : 'bg-[color:var(--neutral-200)] group-hover:bg-[#8B9D7F]/20'
                          }`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {openItem === index ? (
                            <Minus className="w-5 h-5 text-white" strokeWidth={2.5} />
                          ) : (
                            <Plus className="w-5 h-5 text-[#75866D]" strokeWidth={2.5} />
                          )}
                        </motion.div>
                      </div>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {openItem === index && (
                        <motion.div 
                          className="overflow-hidden"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: "auto", 
                            opacity: 1,
                            transition: {
                              height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                              opacity: { duration: 0.3, delay: 0.1 }
                            }
                          }}
                          exit={{ 
                            height: 0, 
                            opacity: 0,
                            transition: {
                              height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                              opacity: { duration: 0.2 }
                            }
                          }}
                        >
                          <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                            <div className="pt-4 border-t-2 border-[#8B9D7F]/20">
                              <div className="text-base sm:text-lg text-[color:var(--text-secondary)] leading-relaxed">
                                {item.answer}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section - Integrated style */}
            <motion.div
              className="mt-16 sm:mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-3">
                Still Have Questions?
              </h3>
              <p className="text-base sm:text-lg text-[color:var(--text-secondary)] mb-6 max-w-xl mx-auto">
                I&apos;m here to help you understand your care options and answer any questions you may have
              </p>
              <Link
                href="/book"
                className="inline-block bg-[#75866D] text-white px-8 py-4 font-semibold text-lg hover:bg-[#677560] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
