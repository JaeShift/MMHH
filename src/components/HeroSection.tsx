'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Heart, Brain } from 'lucide-react'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50" aria-label="Welcome to Modern Mental Health and Hormones">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-200/30 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-sage-200/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-2 text-sm font-medium text-primary-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Professional Healthcare Excellence</span>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block">Modern Mental Health</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                & Hormones
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive women's healthcare focused on mental wellness and hormonal balance.
              <span className="block mt-2 text-lg text-gray-500">
                Expert care by Stephanie Nichols, MSN, APRN-CNP, FNP-BC, PMHNP-BC
              </span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Features */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <motion.div
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-primary-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mental Wellness</h3>
              <p className="text-gray-600 text-sm">Comprehensive mental health support tailored for women</p>
            </motion.div>

            <motion.div
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-secondary-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hormone Balance</h3>
              <p className="text-gray-600 text-sm">Expert hormone therapy and optimization</p>
            </motion.div>

            <motion.div
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-sage-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-sage-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Holistic Care</h3>
              <p className="text-gray-600 text-sm">Integrative approach to women's health and wellness</p>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <motion.div
              className="inline-flex flex-col items-center space-y-2 cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-sm text-gray-500">Scroll to learn more</span>
              <ArrowDown className="w-5 h-5 text-gray-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
