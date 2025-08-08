

import { useEffect, useState } from "react"
import { motion } from "motion/react"

export function DivineCross() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isInNavbar, setIsInNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrollPosition(scrollY)

      // Detect when we reach the second section (que-es)
      const aboutSection = document.getElementById('que-es')
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop - 100 // Account for navbar height
        setIsInNavbar(scrollY >= aboutTop)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate the position for smooth transition
  const getTransformStyles = () => {
    if (isInNavbar) {
      // Position in navbar: center horizontally, vertically centered in navbar
      return {
        position: 'fixed' as const,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 60, // Above navbar z-index
      }
    } else {
      // Position above hero title
      return {
        position: 'absolute' as const,
        top: '35%', // Above the JOJUVO title
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 25, // Above hero content
      }
    }
  }

  return (
    <motion.div
      className="pointer-events-none divine-overlay"
      style={getTransformStyles()}
      animate={{
        scale: isInNavbar ? 0.7 : 1, // Smaller when in navbar
        opacity: isInNavbar ? 0.8 : 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="relative"
      >
        {/* Cross structure - no rays, just the cross */}
        <div className="relative">
          {/* Vertical beam */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-golden-300 via-golden-400 to-golden-300 rounded-full"
            style={{
              width: '4px',
              height: '32px',
              opacity: 0.8,
            }}
            animate={{ 
              opacity: [0.6, 1, 0.6],
              boxShadow: [
                '0 0 8px var(--golden-400)',
                '0 0 16px var(--golden-400)',
                '0 0 8px var(--golden-400)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Horizontal beam */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-golden-300 via-golden-400 to-golden-300 rounded-full"
            style={{
              width: '24px',
              height: '4px',
              opacity: 0.8,
            }}
            animate={{ 
              opacity: [0.6, 1, 0.6],
              boxShadow: [
                '0 0 8px var(--golden-400)',
                '0 0 16px var(--golden-400)',
                '0 0 8px var(--golden-400)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Central glow */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-golden-400"
            style={{
              boxShadow: '0 0 12px var(--golden-400)'
            }}
            animate={{ 
              scale: [0.8, 1.3, 0.8],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}