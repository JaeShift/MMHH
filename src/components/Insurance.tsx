"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type FAQ = {
  question: string;
  answer: React.ReactNode;
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
      answer: "Yes, I offer secure, HIPAA-compliant virtual visits for women across [state(s) where I'm licensed]. You can receive care from home or anywhere you feel comfortable."
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
    <section id="faq" className="py-16 md:py-20 bg-[color:var(--surface-muted)]">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.01 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-black mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.2, once: false }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-black max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.2, once: false }}
          >
            Everything you need to know about Modern Mental Health & Hormones
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((item, index) => (
            <motion.div 
              key={index} 
              className="mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ amount: 0.1, once: false }}
            >
              <motion.button
                onClick={() => toggleItem(index)}
                className={`w-full text-left p-4 sm:p-5 md:p-6 bg-[color:var(--surface)] border border-[color:var(--neutral-200)] ${
                  openItem === index ? 'rounded-t-lg border-b-0' : 'rounded-lg'
                } shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:ring-opacity-50`}
                whileHover={{ y: openItem === index ? 0 : -2 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-black pr-4">{item.question}</h3>
                  <div className="flex-shrink-0">
                    <motion.svg
                      className="w-5 h-5 text-[color:var(--text-muted)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: openItem === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </div>
                </div>
              </motion.button>
              
              <AnimatePresence initial={false}>
                {openItem === index && (
                  <motion.div 
                    className="overflow-hidden bg-[color:var(--surface)] border-l border-r border-b border-[color:var(--neutral-200)] rounded-b-lg"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3, ease: "easeInOut" },
                        opacity: { duration: 0.2, ease: "easeIn" }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3, ease: "easeInOut" },
                        opacity: { duration: 0.2, ease: "easeOut" }
                      }
                    }}
                  >
                    <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-3 sm:pt-4">
                      <p className="text-black leading-relaxed text-sm sm:text-base md:text-lg" style={{ lineHeight: '1.6' }}>
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
  