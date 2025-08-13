import { motion } from "motion/react"
import { ShoppingCart, Ticket } from "lucide-react"
import { useState, useEffect } from "react"

export function FloatingBuyButton() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToRegistration = () => {
    const element = document.getElementById('inscripcion')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling past the hero section
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight * 0.8 // Show after 80% of viewport height
      setIsVisible(scrollPosition > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={scrollToRegistration}
        className="bg-golden-500 hover:bg-golden-600 text-white px-4 py-3 rounded-full shadow-lg transition-colors duration-200 flex items-center gap-2 divine-glow-soft"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(212, 133, 26, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <Ticket className="w-5 h-5" />
        <span className="font-medium hidden sm:inline">Comprar entradas</span>
        <span className="font-medium text-sm">$350</span>
      </motion.button>
    </motion.div>
  )
}