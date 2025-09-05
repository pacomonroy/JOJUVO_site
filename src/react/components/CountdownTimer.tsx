

import { useState, useEffect } from "react"
import { motion } from "motion/react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2025-10-04T10:00:00')
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { value: timeLeft.days, label: 'Días' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Minutos' },
    { value: timeLeft.seconds, label: 'Segundos' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="flex flex-col items-center px-4"
    >
      <p className="text-lg text-gray-300 mb-6">Faltan para JOJUVO 2025</p>
      
      {/* Countdown display */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-6 max-w-sm sm:max-w-lg mx-auto">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex items-center">
            {/* Time unit container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {/* Time container */}
              <div className="bg-gray-700/60 backdrop-blur-sm border border-gray-600/50 rounded-2xl px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-4 min-w-[70px] sm:min-w-[80px] md:min-w-[100px] text-center">
                <motion.div
                  key={unit.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1"
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
                  {unit.label}
                </div>
              </div>
            </motion.div>
            
            {/* Connector line (except for last item) */}
            {index < timeUnits.length - 1 && (
              <div className="hidden md:block w-8 h-0.5 bg-gradient-to-r from-golden-400 to-golden-300 mx-2 opacity-60"></div>
            )}
          </div>
        ))}
      </div>
      
      {/* Additional motivational text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="text-golden-300 mt-6 text-center max-w-md"
      >
        ¡No te pierdas este encuentro único de fe y comunidad!
      </motion.p>
    </motion.div>
  )
}