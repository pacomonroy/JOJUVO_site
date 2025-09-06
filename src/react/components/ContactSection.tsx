import { motion } from "motion/react"
import { Mail, Phone, MapPin, MessageCircle, Instagram } from "lucide-react"

export function ContactSection() {
  const scrollToRegistration = () => {
    const element = document.getElementById('inscripcion')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Correo Electrónico",
      info: "info@jojuvo.com",
      description: "Escríbenos para cualquier consulta"
    },
    {
      icon: Phone,
      title: "Teléfono",
      info: "56 510 49989",
      description: "Llámanos de lunes a viernes"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Expo Santa Fe, CDMX",
      description: "4 de octubre, 9:00 - 18:30hrs"
    },
    {
      icon: MessageCircle, 
      title: "Redes Sociales",
      info: "jojuvo_2do.decanato",
      description: "Síguenos para actualizaciones"
    }
  ]

  return (
    <section id="contacto" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-golden-100 to-golden-200"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            ¿Tienes preguntas sobre JOJUVO 2025? Estamos aquí para ayudarte. 
            Contáctanos por cualquier medio o inscríbete directamente.
          </p>
          
          {/* Primary CTA */}
          <motion.button
            onClick={scrollToRegistration}
            className="bg-golden-500 hover:bg-golden-600 text-white px-10 py-4 rounded-lg text-lg font-medium transition-colors duration-200 shadow-lg divine-glow-soft"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(212, 133, 26, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Inscríbete ahora - $350
          </motion.button>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-golden-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-8 h-8 text-golden-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-golden-600 font-medium mb-2">
                {method.info}
              </p>
              <p className="text-gray-600 text-sm">
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envíanos un mensaje
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-golden-500 hover:bg-golden-600 text-white py-3 rounded-lg font-medium transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar mensaje
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información Adicional
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Horario de Atención</h4>
                  <p className="text-gray-600">
                    Lunes a Viernes: 9:00 - 17:00hrs<br />
                    Sábados: 9:00 - 14:00hrs
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Redes Sociales</h4>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/jojuvo_2do.decanato?igsh=MTJmaGRzNXZwZWlzYg%3D%3D&utm_source=qr" className="text-golden-600 hover:text-golden-700 transition-colors" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    Síguenos para las últimas actualizaciones del evento
                  </p>
                </div>

                <div className="bg-golden-50 rounded-xl p-6 border border-golden-200">
                  <h4 className="font-semibold text-golden-800 mb-3">¿Listo para inscribirte?</h4>
                  <p className="text-golden-700 mb-4">
                    No esperes más, los cupos son limitados y se agotan rápido.
                  </p>
                  <motion.button
                    onClick={scrollToRegistration}
                    className="bg-golden-500 hover:bg-golden-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Inscríbete ahora
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}