

import { useEffect, useState } from "react"
import { motion } from "motion/react"

interface Particle {
  id: number
  x: number
  y: number
  length: number
  rotation: number
  opacity: number
  delay: number
  duration: number
  type: 'sparkle'
}

export function DivineParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      
      // Generate only very subtle sparkles, reduced quantity
      for (let i = 0; i < 4; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          length: Math.random() * 8 + 4,
          rotation: Math.random() * 360,
          opacity: Math.random() * 0.08 + 0.02, // Even more subtle
          delay: Math.random() * 10,
          duration: Math.random() * 8 + 12,
          type: 'sparkle'
        })
      }

      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  const SparkleParticle = ({ particle }: { particle: Particle }) => (
    <motion.div
      key={particle.id}
      className="absolute pointer-events-none"
      style={{
        left: `${particle.x}%`,
        top: `${particle.y}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, particle.opacity, particle.opacity * 0.3, 0],
        scale: [0, 0.8, 0.4, 0],
        y: [0, -10, 0],
        rotate: [0, 90, 180]
      }}
      transition={{
        duration: particle.duration,
        delay: particle.delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Very minimal sparkle - just a tiny golden dot */}
      <div className="relative">
        <div
          className="absolute bg-golden-300 rounded-full"
          style={{
            width: '2px',
            height: '2px',
            left: '-1px',
            top: '-1px',
            opacity: 0.4,
            boxShadow: '0 0 2px var(--golden-300)'
          }}
        />
      </div>
    </motion.div>
  )

  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
      {particles.map((particle) => (
        <SparkleParticle key={particle.id} particle={particle} />
      ))}
    </div>
  )
}