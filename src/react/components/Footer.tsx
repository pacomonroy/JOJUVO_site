import { motion } from "motion/react"
import { Heart, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  const scrollToRegistration = () => {
    const element = document.getElementById('inscripcion')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-golden-900 via-golden-800 to-golden-900"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="text-3xl font-bold text-golden-400 mb-4">JOJUVO 2025</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Jornada Juvenil Vocacional, II Zona Pastoral, 2do decanato. 
              Un encuentro que transformará tu vida y fortalecerá tu fe católica.
            </p>
            <motion.button
              onClick={scrollToRegistration}
              className="bg-golden-500 hover:bg-golden-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Inscríbete ahora
            </motion.button>
          </motion.div>

          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-golden-300">Información del Evento</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-golden-400" />
                <span className="text-sm">Expo Santa Fe, CDMX</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Heart className="w-4 h-4 text-golden-400" />
                <span className="text-sm">4 de octubre, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Heart className="w-4 h-4 text-golden-400" />
                <span className="text-sm">8:00 - 19:00 hrs</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Heart className="w-4 h-4 text-golden-400" />
                <span className="text-sm">$350 MXN</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-golden-300">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-golden-400" />
                <span className="text-sm">info@jojuvo.mx</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-golden-400" />
                <span className="text-sm">+52 55 1234 5678</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-golden-400 hover:text-golden-300 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-golden-400 hover:text-golden-300 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-lg text-gray-300 mb-4">
            ¿Listo para transformar el mundo y llenar el cielo?
          </p>
          <motion.button
            onClick={scrollToRegistration}
            className="bg-transparent border-2 border-golden-400 text-golden-400 hover:bg-golden-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Inscríbete ahora - $350 MXN
          </motion.button>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
            Organizado con amor para la juventud católica de la Arquidiócesis de México
            <Heart className="w-4 h-4 text-red-500" />
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © 2025 JOJUVO. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}