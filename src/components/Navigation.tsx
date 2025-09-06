'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md ring-1 ring-black/5'
          : 'bg-cream/80 backdrop-blur'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
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
            <div className="relative">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg, rgba(110,139,116,.18), rgba(201,149,58,.18))'}}>
                <div className="w-6 h-6 relative">
                  <span className="absolute inset-0 bg-[color:var(--sage)] opacity-90 rounded-sm" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-forest">MMHH</span>
              <span className="text-xs text-sage-600 font-semibold -mt-1 tracking-wider">Modern Mental Health & Hormones</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-forest/90 hover:text-sage-600 font-medium transition-all duration-200 relative group text-sm"
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-sage-600/30 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </motion.a>
            ))}
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
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
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
                  className="block text-forest/90 hover:text-sage-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
