import { motion } from "motion/react"
import { CheckCircle, Users, Clock, MapPin, DollarSign } from "lucide-react"

export function RegistrationSection() {
  const registrationFeatures = [
    {
      icon: Users,
      title: "Acceso completo",
      description: "Participación en todas las actividades del evento"
    },
    {
      icon: Clock,
      title: "9.5 horas de contenido",
      description: "Desde las 9:00 hasta las 18:30 horas"
    },
    {
      icon: MapPin,
      title: "Ubicación privilegiada",
      description: "Expo Santa Fe, fácil acceso y estacionamiento"
    }
  ]

  return (
    <section id="inscripcion" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-golden-900 via-golden-800 to-golden-900"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Inscripción
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Asegura tu lugar en esta experiencia única de fe, formación y comunidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Registration Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-golden-500 rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">$350 MXN</h3>
                  <p className="text-golden-300">Por persona</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {registrationFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 bg-golden-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="w-5 h-5 text-golden-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                  El costo incluye acceso a todas las actividades: conferencias, talleres, adoración eucarística, 
                  misa, concierto y actividades de formación.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Formulario de Inscripción
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Edad *
                    </label>
                    <input
                      type="number"
                      required
                      min="15"
                      max="35"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                      placeholder="Tu edad"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                    placeholder="55 123 45678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parroquia o comunidad
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                    placeholder="Nombre de tu parroquia o comunidad"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-golden-500 hover:bg-golden-600 text-white py-4 rounded-lg font-medium transition-colors duration-200 shadow-lg divine-glow-soft"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Proceder al pago - $350 MXN
                </motion.button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Al inscribirte, aceptas participar en todas las actividades del evento según el programa establecido.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Los cupos son limitados. ¡Asegura tu lugar hoy mismo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="bg-golden-500 hover:bg-golden-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Inscríbete ahora
            </motion.button>
            <span className="text-golden-300 text-sm">
              ¡Solo $350 MXN por una experiencia inolvidable!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )  
}