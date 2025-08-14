import { motion } from "motion/react"
import { CountdownTimer } from './CountdownTimer'
import { DivineBackground } from './DivineBackground'

export function HeroSection() {
  const scrollToRegistration = () => {
    const element = document.getElementById('inscripcion')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gray-800 relative overflow-hidden">
      {/* Divine Background with subtle effects */}
      <DivineBackground />
      
      {/* Background decorative text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-[20rem] font-bold text-white leading-none select-none"
          style={{ fontSize: 'clamp(8rem, 25vw, 20rem)' }}
        >
          4 octubre 2025
        </motion.div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-20">
        {/* Main JOJUVO branding */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight mb-3 drop-shadow-lg">
            JOJUVO 2025
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 px-6 sm:px-4 md:px-2"
          >
            Jornada Juvenil Vocacional, II Zona Pastoral, 2do decanato
          </motion.p>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-6 sm:px-8 md:px-4">
            Un día para conectar con cientos de jóvenes católicos de CDMX que quieren transformar el mundo y llenar el cielo.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <div className="mb-8">
          <CountdownTimer />
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-6"
        >
          <motion.button
            onClick={scrollToRegistration}
            className="bg-golden-500 hover:bg-golden-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 shadow-lg divine-glow-soft mr-4"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(212, 133, 26, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Inscríbete ahora
          </motion.button>
        </motion.div>

        {/* Event Details - Compact Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="space-y-3"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>4 de octubre • 8:00 - 19:00hrs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Expo Santa Fe, CDMX</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Jóvenes católicos de 15-35 años</span>
            </div>
          </div>
          <p className="text-golden-400">Aparta la fecha, inscripciones ya abiertas</p>
          
          {/* Additional CTA button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="pt-4"
          >
            <motion.button
              onClick={scrollToRegistration}
              className="bg-transparent border-2 border-golden-400 text-golden-400 hover:bg-golden-400 hover:text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Vender Salidas
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}