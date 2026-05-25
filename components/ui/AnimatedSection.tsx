'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const shouldReduce = useReducedMotion()

  const variants = {
    hidden: shouldReduce
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: direction === 'up' ? 24 : 0,
          x: direction === 'left' ? -24 : direction === 'right' ? 24 : 0,
        },
    visible: { opacity: 1, y: 0, x: 0 },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
