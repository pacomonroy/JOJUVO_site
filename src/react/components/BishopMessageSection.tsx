import { motion } from "motion/react"
import { Quote } from "lucide-react"

export function BishopMessageSection() {
  const bishopMessage = `Queridos jóvenes de la Ciudad de México:
Los quiero invitar al próximo Jojuvo que se celebrará el 4 de octubre del 2025 en la Expo Santa Fe. Este congreso no es un evento más. Es la oportunidad para que jóvenes de todas las parroquias, grupos y Movimientos se encuentren como una gran familia: la Iglesia católica. Será un momento especial para reafirmar que, cuando unimos nuestras fuerzas en Cristo, no hay quien nos detenga en nuestro anhelo de transformar la sociedad desde el Evangelio.

En estos momentos tan difíciles de la historia, México necesita jóvenes valientes que no se queden cruzados de brazos. Jóvenes que elijan ser constructores de paz, que lleven esperanza a donde hay violencia y división. Es Jesús mismo quien nos invita a aceptar este reto: "Bienaventurados los que trabajan por la paz, porque serán llamados hijos de Dios" (Mt 5,9).

Este Jojuvo es para ti, para que salgas con fuego en el corazón y un compromiso real con tu fe y con tu país.

¡Espero encontrarlos a todos ahí! ¡No falten!`

  return (
    <section id="mensaje-obispo" className="py-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-gradient-to-br from-golden-50 to-golden-100"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            {/* Bishop Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-1 text-center"
            >
              <div className="relative mb-4 mx-auto w-32 h-32 md:w-40 md:h-40">
                <img
                  src="/images/bishop-francisco-javier-acero.jpg"
                  alt="Mons. Francisco Javier Acero, Obispo Auxiliar de la Arquidiócesis de México"
                  className="w-full h-full object-cover object-top rounded-full shadow-lg border-4 border-golden-200"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/images/placeholder-1.jpg"; }}
                />
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-golden-500 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-900 mb-1">+Mons. Francisco Javier Acero</p>
                <p className="text-xs text-gray-600">Obispo Auxiliar de la Arquidiócesis de México</p>
              </div>
            </motion.div>

            {/* Message Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-3"
            >
              <div className="relative">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-golden-400 mb-4" />
                
                {/* Message text */}
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {bishopMessage.split('\n\n').map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="text-sm md:text-base"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Signature */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="mt-6 pt-4 border-t border-gray-200"
                >
                  <p className="text-sm font-semibold text-golden-700 text-right">
                    +Mons. Francisco Javier Acero<br />
                    <span className="text-xs text-gray-600 font-normal">
                      Obispo Auxiliar de la Arquidiócesis de México
                    </span>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}