import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, GraduationCap, Users, Star } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const stats = [
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '500+', label: 'Patients Helped', icon: Users },
    { number: '98%', label: 'Satisfaction Rate', icon: Star },
    { number: 'Board', label: 'Certified', icon: GraduationCap },
  ]

  const specializations = [
    'Family Practice (FNP-BC)',
    'Psychiatric-Mental Health (PMHNP-BC)',
    'Anxiety & Depression',
    'Maternal Mental Health / Postpartum Support',
    'ADHD & Mood Disorders',
    'Trauma & Stress Management',
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Meet Stephanie Nichols
              </h2>
              <p className="text-lg text-primary-600 font-semibold mb-4">
                MSN, APRN-CNP, FNP-BC, PMHNP-BC
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Dual board-certified nurse practitioner in Family Practice and Psychiatric-Mental Health, 
                specializing in the unique intersection of mental health and hormone health for women.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Stephanie Nichols is a dual board-certified nurse practitioner with advanced training in women's health and hormonal care. 
                She is dedicated to supporting women through every stage of life—from young adulthood to postpartum transitions, 
                perimenopause, and menopause.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Her unique approach combines medical management with therapeutic techniques such as 
                Cognitive Behavioral Therapy (CBT) and Motivational Interviewing, 
                ensuring care that addresses both body and mind.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Specializations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specializations.map((specialty, index) => (
                  <motion.div
                    key={specialty}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700">{specialty}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Your Consultation
              </motion.button>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">SN</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Stephanie Nichols</h3>
                  <p className="text-gray-600 text-sm">MSN, APRN-CNP, FNP-BC, PMHNP-BC</p>
                  <p className="text-gray-600 text-sm">Dual Board-Certified Nurse Practitioner</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-gray-50 rounded-2xl p-6 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="bg-primary-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}