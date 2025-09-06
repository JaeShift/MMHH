'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'

type ButtonProps = Omit<React.ComponentProps<typeof motion.button>, 'ref'> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  full?: boolean
}

export default function Button({
  className,
  children,
  variant = 'primary',
  full,
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  const sizes = 'px-5 py-3 text-sm'
  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary:
      'bg-mystic-600 text-white hover:bg-mystic-700 focus:ring-mystic-500',
    secondary:
      'bg-sage-600 text-white hover:bg-sage-700 focus:ring-sage-500',
    outline:
      'border-2 border-midnight-300 text-midnight-800 hover:border-mystic-500 hover:text-mystic-700 focus:ring-mystic-500 bg-white',
    ghost:
      'text-midnight-700 hover:bg-midnight-50 focus:ring-midnight-300',
  }

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(base, sizes, variants[variant], full && 'w-full', className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}



