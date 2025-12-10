"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I’ve always had such great personalized care here!! So grateful!",
      author: "Gina",
      condition: "Personalized Care",
      rating: 5,
      color: "medical-blue"
    },
    {
      quote: "Stephanie is a rock star in being able to make an accurate diagnosis. I cannot recommend her enough.",
      author: "Jan",
      condition: "Accurate Diagnosis",
      rating: 5,
      color: "healthcare-teal"
    },
    {
      quote: "My care was prompt, kind, thoughtful and compassionate. Time was given for questions to be asked and advice was given in a concise and constructive manner. Your care is greatly appreciated.",
      author: "Connie",
      condition: "Thoughtful & Compassionate Care",
      rating: 5,
      color: "success-green"
    },
  ];

  return (
    <section className="bg-medical-light pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.01 }}
        >
          <motion.h2 
            className="font-serif-display display-h2 text-deep-navy mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.01 }}
          >
            Patient Experience
          </motion.h2>
          <motion.p 
            className="text-lg text-medical-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ amount: 0.01 }}
          >
            Hear from women who have experienced improved health and wellness through my comprehensive services.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, author, condition, rating, color }, i) => (
            <motion.div 
              key={i} 
              className="bg-clean-white rounded-xl border border-medical-blue/10 shadow-sm hover:shadow-md transition-all duration-300 p-6"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + (i * 0.15),
                ease: "easeOut"
              }}
              viewport={{ amount: 0.2 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(rating)].map((_, starIndex) => (
                  <svg key={starIndex} width="16" height="16" viewBox="0 0 24 24" className={`text-${color}`}>
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" fill="currentColor"/>
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-medical-gray-600 leading-relaxed mb-6">
                &ldquo;{quote}&rdquo;
              </blockquote>
              
              {/* Author info */}
              <div className="border-t border-medical-blue/10 pt-4">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full bg-${color}/10 flex items-center justify-center`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" className={`text-${color}`}>
                      <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-deep-navy text-sm">{author}</p>
                    <p className="text-xs text-medical-gray font-medium">{condition}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Professional credentials */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ amount: 0.01 }}
        >
          <motion.div 
            className="bg-clean-white rounded-xl border border-medical-blue/10 shadow-sm p-8"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-6">
              <h3 className="font-semibold text-deep-navy mb-2">Professional Credentials & Compliance</h3>
              <p className="text-medical-gray-600 text-sm">Your care is backed by professional certifications and industry standards</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-medical-blue">
                    <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-xs font-medium text-deep-navy">Board Certified</p>
                <p className="text-xs text-medical-gray-600">NP-C Certification</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-healthcare-teal/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-healthcare-teal">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C14.8,12.6 13.9,13.5 12.8,13.5H11.2C10.1,13.5 9.2,12.6 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V10.8C10.5,11.1 10.8,11.3 11.1,11.3H12.9C13.2,11.3 13.5,11.1 13.5,10.8V9.5C13.5,8.7 12.8,8.2 12,8.2Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-xs font-medium text-deep-navy">HIPAA Compliant</p>
                <p className="text-xs text-medical-gray-600">Secure Platform</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-success-green/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-success-green">
                    <path d="M12,2C8.13,2 5,5.13 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9C19,5.13 15.87,2 12,2M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-xs font-medium text-deep-navy">Ohio Licensed</p>
                <p className="text-xs text-medical-gray-600">State Approved</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-clinical-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-clinical-accent">
                    <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z" fill="currentColor"/>
                    <path d="M17,12H7V10H17V12M15,16H7V14H15V16M17,8H7V6H17V8Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-xs font-medium text-deep-navy">Evidence-Based</p>
                <p className="text-xs text-medical-gray-600">Clinical Protocols</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

