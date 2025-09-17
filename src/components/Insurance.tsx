"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Insurance() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const insuranceQAs = [
    {
      question: "Do you accept insurance?",
      answer: "I provide superbills for out-of-network reimbursement and accept HSA/FSA. I'm actively onboarding insurance plans and will update this page as contracts are finalized."
    },
    {
      question: "What if you're out-of-network for my plan?",
      answer: "If I'm out-of-network for your plan, I can provide a detailed superbill so you can request reimbursement from your insurer. Many patients find this process straightforward."
    },
    {
      question: "Do you accept HSA/FSA payments?",
      answer: "Yes! Health Savings and Flexible Spending Accounts are typically accepted for qualified medical expenses including visit fees and some lab work."
    },
    {
      question: "How do prior authorizations work?",
      answer: "When prior authorization is required for medications or testing, I&apos;ll submit requests and coordinate with your insurer and lab to ensure smooth processing."
    },
    {
      question: "Can I get a cost estimate before my visit?",
      answer: "Yes! Upon request, I provide Good Faith Estimates consistent with the No Surprises Act for patients who are not using insurance. I&apos;ll also verify benefits and confirm any out-of-pocket costs before your appointment."
    },
    {
      question: "How can I verify my coverage?",
      answer: "Email info@modernmhh.com with your insurer and member ID. I&apos;ll verify benefits and confirm any out-of-pocket costs before your appointment."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="insurance" className="py-16 md:py-20 bg-[color:var(--surface-muted)]">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.01 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.01 }}
          >
            Insurance & Billing
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ amount: 0.01 }}
          >
            I aim to make care accessible and transparent. Coverage varies by plan; I&apos;ll help you understand your options before you&apos;re seen.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {insuranceQAs.map((item, index) => (
            <motion.div 
              key={index} 
              className="mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
              viewport={{ amount: 0.01 }}
            >
              <motion.button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 bg-[color:var(--surface)] border border-[color:var(--neutral-200)] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:ring-opacity-50"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-xl md:text-2xl text-black pr-4">{item.question}</h3>
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
              
              <AnimatePresence>
                {openItem === index && (
                  <motion.div 
                    className="px-6 pb-6 bg-[color:var(--surface)] border-l border-r border-b border-[color:var(--neutral-200)] rounded-b-lg"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p 
                      className="text-black leading-relaxed pt-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {item.answer}
                    </motion.p>
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
  