import { motion } from "motion/react"
import { Clock, MapPin, Users, Music, Coffee, BookOpen, Mic, Heart } from "lucide-react"

export function ScheduleSection() {
  const scrollToRegistration = () => {
    const element = document.getElementById('inscripcion')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const scheduleItems = [
    {
      time: "8:00",
      title: "Llegada, registro, visita de stands",
      description: "Recepción de participantes y exploración de stands",
      icon: Users,
      color: "bg-blue-100 text-blue-600"
    },
    {
      time: "9:00",
      title: "Adoración Eucarística",
      description: "Momento de oración y encuentro con Jesús Sacramentado",
      icon: Heart,
      color: "bg-purple-100 text-purple-600"
    },
    {
      time: "10:00",
      title: "Misa con Mons. Francisco Javier Acero",
      description: "Celebración Eucarística con el obispo auxiliar de la Arquidiócesis de México",
      icon: Heart,
      color: "bg-golden-100 text-golden-600"
    },
    {
      time: "11:30",
      title: "Inicio de actividades",
      description: "Bienvenida oficial al evento",
      icon: Users,
      color: "bg-green-100 text-green-600"
    },
    {
      time: "11:45",
      title: "Conferencia inicial",
      description: "Charla magistral de apertura",
      icon: Mic,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      time: "12:05",
      title: "Break",
      description: "Tiempo libre y networking",
      icon: Coffee,
      color: "bg-orange-100 text-orange-600"
    },
    {
      time: "12:30",
      title: "Talleres simultáneos",
      description: "Sesiones formativas especializadas",
      icon: BookOpen,
      color: "bg-teal-100 text-teal-600"
    },
    {
      time: "13:30",
      title: "Comida, visitar la capilla y los stands",
      description: "Tiempo para alimentarse y explorar",
      icon: Users,
      color: "bg-red-100 text-red-600"
    },
    {
      time: "15:00",
      title: "Activación y conferencias",
      description: "Dinámicas y charlas de formación",
      icon: Mic,
      color: "bg-pink-100 text-pink-600"
    },
    {
      time: "15:30",
      title: "Keynote Speaker",
      description: "Conferencia magistral principal",
      icon: Mic,
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      time: "16:00",
      title: "Concierto de Hakuna",
      description: "Música y alabanza en vivo",
      icon: Music,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      time: "18:00",
      title: "Despedida",
      description: "Clausura del evento y bendición final",
      icon: Heart,
      color: "bg-violet-100 text-violet-600"
    }
  ]

  return (
    <section id="horario" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-golden-100 to-golden-200"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Programa del Evento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Un día completo de formación, oración, música y comunidad. Desde las 8:00 hasta las 19:00 horas.
          </p>
          
          {/* CTA Button */}
          <motion.button
            onClick={scrollToRegistration}
            className="bg-golden-500 hover:bg-golden-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 shadow-lg divine-glow-soft"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(212, 133, 26, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Reserva tu lugar
          </motion.button>
        </motion.div>

        {/* Schedule List - Minimalist Design */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-golden-300 via-golden-400 to-golden-300"></div>

          <div className="space-y-6">
            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start gap-6"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-3 h-3 bg-golden-400 rounded-full border-2 border-white shadow-sm"></div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <span className="inline-block bg-golden-100 text-golden-700 px-3 py-1 rounded-full text-sm font-medium">
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            ¡No te pierdas ningún momento de este día especial!
          </p>
          <motion.button
            onClick={scrollToRegistration}
            className="bg-transparent border-2 border-golden-500 text-golden-600 hover:bg-golden-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Inscríbete ahora
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}