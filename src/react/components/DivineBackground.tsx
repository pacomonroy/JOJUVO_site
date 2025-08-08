

import { motion } from "motion/react"

export function DivineBackground() {
  // Reduced number of background rays for more subtlety
  const backgroundRays = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    angle: (i * 360) / 12,
    length: 400 + Math.random() * 200,
    width: 1,
    opacity: Math.random() * 0.05 + 0.02, // Much more subtle
    delay: Math.random() * 6
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle background divine light */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0.05, 0.15, 0.05], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <div 
          className="w-48 h-48 rounded-full bg-gradient-radial from-golden-200 via-golden-300 to-transparent"
          style={{
            opacity: 0.1
          }}
        />
      </motion.div>

      {/* Very subtle background rays */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {backgroundRays.map((ray) => (
          <motion.div
            key={ray.id}
            className="absolute origin-left"
            style={{
              transform: `rotate(${ray.angle}deg)`,
              transformOrigin: '0 0'
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: [0, 0.5, 0.3, 0.6], 
              opacity: [0, ray.opacity, ray.opacity * 0.5, ray.opacity]
            }}
            transition={{
              duration: 12,
              delay: ray.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div
              className="bg-gradient-to-r from-golden-200 to-transparent"
              style={{
                width: `${ray.length}px`,
                height: `${ray.width}px`,
                borderRadius: '50px',
                opacity: 0.3
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating light particles - very subtle */}
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          key={`bg-light-${i}`}
          className="absolute w-1 h-1 bg-golden-300 rounded-full"
          style={{
            left: `${30 + Math.random() * 40}%`,
            top: `${30 + Math.random() * 40}%`,
            opacity: 0.2
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 0.2, 0],
            y: [20, -30, 20],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            delay: Math.random() * 5 + 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}