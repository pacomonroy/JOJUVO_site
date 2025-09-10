import { motion } from "motion/react"
import { Heart, Users, Target, Cross } from "lucide-react"
const image1 = "/images/placeholder-1.jpg"
const image2 = "/images/placeholder-2.jpg"

export function AboutSection() {  
  const buyTickets = () => {
    window.open('https://boletos.jojuvo.com/', '_blank')
  }

  const features = [
    {
      icon: Heart,
      title: "Comunidad",
      description: "Espacio para que los jóvenes fortalezcan su fe católica y se formen como apóstoles y líderes católicos dentro de una comunidad más grande: la Arquidiócesis Primada de México."
    },
    {
      icon: Target,
      title: "Liderazgo",
      description: "Talleres y conferencias que ayudarán a despertar el compromiso de los laicos para transformar las realidades temporales con el Evangelio."
    },
    {
      icon: Cross,
      title: "Discernimiento",
      description: "Momentos de oración e intercambio para que los jóvenes disciernan sobre su futuro estado de vida, profesión y misión apostólica."
    }
  ]

  return (
    <section id="que-es" className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-golden-100 to-golden-200"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Qué es JOJUVO?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Una experiencia única que busca unir, formar y fortalecer a los jóvenes como líderes y apóstoles católicos.
          </p>
        </motion.div>

        {/* Photos from last year */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img 
              src={image1} 
              alt="JOJUVO 2024 - Momento de adoración con música" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/images/placeholder-1.png"; }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-medium">Adoración Eucarística con música en vivo</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img 
              src={image2} 
              alt="JOJUVO 2024 - Jóvenes participando en conferencias" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/images/placeholder-1.png"; }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-medium">Conferencias y talleres de formación</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <motion.button
            onClick={buyTickets}
            className="bg-golden-500 hover:bg-golden-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 shadow-lg divine-glow-soft"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(212, 133, 26, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            ¡Comprar boletos!
          </motion.button>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-golden-100 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-golden-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Únete a cientos de jóvenes católicos que están transformando el mundo con el Evangelio.
          </p>
          <motion.button
            onClick={buyTickets}
            className="bg-transparent border-2 border-golden-500 text-golden-600 hover:bg-golden-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comprar boletos
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}