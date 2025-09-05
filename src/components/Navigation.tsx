'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Stephanie' },
    { href: '#services', label: 'Services' },
    { href: '#approach', label: 'Our Approach' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-apple shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">MMHH</span>
              <span className="text-xs text-gray-600 -mt-1">Modern Mental Health & Hormones</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden bg-white/95 backdrop-blur-apple border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full font-medium mt-4"
                whileTap={{ scale: 0.95 }}
              >
                Book Consultation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
