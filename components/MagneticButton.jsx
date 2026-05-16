'use client'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Link from 'next/link'

export default function MagneticButton({ href, children, variant = 'primary', className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const xSpring = useSpring(x, { damping: 15, stiffness: 150 })
  const ySpring = useSpring(y, { damping: 15, stiffness: 150 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const cls = variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-outline-white'

  return (
    <motion.div
      ref={ref}
      style={{ x: xSpring, y: ySpring, display: 'inline-block' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {href ? (
        <Link href={href} className={`${cls} ${className}`}>{children}</Link>
      ) : (
        <button className={`${cls} ${className}`}>{children}</button>
      )}
    </motion.div>
  )
}
