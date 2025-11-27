"use client";

import { useState } from "react";
import Link from "next/link";
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
      answer: "Yes, I offer secure, HIPAA-compliant virtual visits for women across [state(s) where I&apos;m licensed]. You can receive care from home or anywhere you feel comfortable."
    },
    {
      question: "Do you take insurance?",
      answer: (
        <div className="space-y-4">
          <p>
            Modern MHH accepts insurance and private pay. If you&apos;re out-of-network, I can
            provide a superbill to help you request reimbursement from your insurance
            provider. You can also review our{" "}
            <Link
              href="/financial-disclosure"
              className="underline underline-offset-4 text-[#8B9D7F] hover:text-[#6c8260]"
            >
              Financial Disclosure
            </Link>
            .
          </p>
          <div>
            <p className="font-semibold">Appointment investment:</p>
            <ul className="mt-2 space-y-2 text-sm sm:text-base">
              <li>
                <span className="font-semibold">Initial Evaluation: Being Seen</span> — 1 hour @ US$350.00
              </li>
              <li>
                <span className="font-semibold">Second Visit: Your Path</span> — 40 minutes @ US$200.00
              </li>
              <li>
                <span className="font-semibold">Routine Visits: Optimization</span> — 30 minutes @ US$110.00
              </li>
              <li>
                <span className="font-semibold">MMHH Express Visit</span> — 15 minutes @ US$50.00
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      question: "How can I start care?",
      answer: "You can schedule your first appointment through the Book Now button. During your first visit, I'll discuss your concerns, review your history, and create a treatment plan tailored to your mental health and hormonal balance."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-24 lg:py-32 bg-[#EBE4D6]">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded-[48px] overflow-hidden shadow-2xl">
          <div className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
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
                  <div className={`group relative bg-[#E8E1D3] rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    openItem === index 
                      ? 'border-[#75866D] shadow-xl' 
                      : 'border-[#DDD6C9] shadow-md hover:shadow-lg hover:border-[#8B9D7F]/50'
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
                          className={`flex-shrink-0 p-2 rounded-full transition-colors duration-300 ${
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

            {/* CTA Section */}
            <motion.div
              className="mt-16 sm:mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#75866D] to-[#8B9D7F] rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl max-w-3xl mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
                <div className="relative">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
                    Still Have Questions?
                  </h3>
                  <p className="text-base sm:text-lg text-white/90 mb-6 max-w-xl mx-auto">
                    I&apos;m here to help you understand your care options and answer any questions you may have
                  </p>
                  <Link
                    href="/book"
                    className="inline-block bg-white text-[#75866D] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#F5F1E8] transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
