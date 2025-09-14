

import { useState, useEffect } from "react"
import { motion } from "motion/react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'que-es', 'horario', 'conferencistas', 'boletos', 'contacto']
      const scrollPosition = window.scrollY + 100

      setIsScrolled(window.scrollY > 50)

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'que-es', label: '¿Qué es JOJUVO?' },
    { id: 'horario', label: 'Horario' },
    { id: 'conferencistas', label: 'Conferencistas' },
    { id: 'boletos', label: 'Boletos' },
    { id: 'contacto', label: 'Contacto' }
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-2xl font-bold text-golden-400"
            whileHover={{ scale: 1.05 }}
          >
            JOJUVO
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-200 ${
                  activeSection === item.id
                    ? isScrolled ? 'text-golden-600 font-medium' : 'text-golden-300 font-medium'
                    : isScrolled ? 'text-gray-700 hover:text-golden-600' : 'text-white hover:text-golden-300'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="md:hidden">
            <button className={isScrolled ? "text-gray-700" : "text-white"}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}