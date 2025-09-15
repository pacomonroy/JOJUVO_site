import { motion } from "motion/react"
import { User, BookOpen } from "lucide-react"

interface Speaker {
  id: string
  name: string
  bio: string
  conferenceTitle: string
  imageUrl?: string
  placeholder: string
}

export function SpeakersSection() {
  const buyTickets = () => {
    window.open('https://boletos.jojuvo.com/', '_blank')
  }

  const speakers: Speaker[] = [
    {
      id: "ines-rodriguez",
      name: "Inés Rodríguez",
      conferenceTitle: "El rol de la mujer en la Iglesia",
      bio: "Abogada por la Universidad Anáhuac México, maestra en Derecho de las Empresas igualmente en la Universidad Anáhuac. Cuenta con un diplomado en Políticas Públicas con Perspectiva de Familia por el Instituto Pontificio Juan Pablo II. Directora de la Asociación Civil JUVI A.C. en la Ciudad de México. Coordinadora Nacional de la Secretaría de la Juventud del Movimiento Viva México. Conferencista en temas de feminidad, legislación mexicana, afectividad, noviazgo y matrimonio. Vocera de la Marcha a Favor de la Mujer y la Vida. Creadora de contenido en redes sociales.",
      imageUrl: "https://drive.google.com/uc?export=view&id=1AMEmFitLi0l0RzZpiNQs5qJ-KeIAuSge",
      placeholder: "IR"
    },
    {
      id: "alejandro-sada",
      name: "Alejandro Sada",
      conferenceTitle: "¿Somos realmente libres? Ratzinger vs Sartre",
      bio: "Maestría en Filosofía en la UNAM (con mención honorífica). Doctorado en Filosofía por la Universidad de Navarra (summa cum laude). Se dedica a investigar la relación entre la fe y la razón (entre filosofía y teología). Es especialista en el pensamiento de John Henry Newman y de Joseph Ratzinger (Benedicto XVI). Ha participado en múltiples congresos nacionales e internacionales. Sus publicaciones han sido traducidas al inglés, al portugués, al alemán y al polaco. Entre sus últimas publicaciones destacan los libros: \"Asentimiento y certeza en el pensamiento de John Henry Newman\" y \"Sentido y verdad. Hacia una nueva comprensión de la filosofía desde el pensamiento de Joseph Ratzinger\". Actualmente dirige un proyecto internacional de investigación sobre la colaboración entre la filosofía y la teología en el pensamiento de Joseph Ratzinger. Es profesor investigador de tiempo completo de la Universidad Panamericana, en donde además imparte diversas asignaturas de grado y posgrado.",
      imageUrl: "https://drive.google.com/uc?export=view&id=16QgBZJpmuxXEdZ3JOYbt9YEg1HvHTzkn",
      placeholder: "AS"
    },
    {
      id: "bernardo-urzua",
      name: "Bernardo Patricio Urzúa Cornejo",
      conferenceTitle: "El joven católico ante la política actual",
      bio: "Chileno de nacimiento, naturalizado mexicano, con estudios en Humanidades Clásicas, Filosofía, Teología y Pedagogía en España, Italia y México. Se ha especializado en Dirección de Centros Educativos, en Orientación Familiar, en Coaching y negociación política, en branding Personal y Mercadotecnia política. Su experiencia laboral la ha desarrollado en cinco países; Chile, Brasil, España, Italia y México donde ha sido Director y Orientador en diversos Centros de Formación. Asesor del Consorcio Educativo Anáhuac, Director de los Colegios: Cumbres, Mckinley y Alpes. Director de Desarrollo Familiar y Humano y Director de Formación en el Proyecto Político \"Solidaridad\". Desde hace 16 años, se dedica a la asesoría y cabildeo político. Ha sido Delegado de México ante la Comisión de Población y Desarrollo de Naciones Unidas. Socio fundador de tres empresas de asesoría y cabildeo. Actualmente es Director General de la Red de Acción Ética Política, RAEP donde acompaña en su vocación de defensa de la Vida y la Familia a más de 500 políticos de todos los partidos y en todo el país.",
      imageUrl: "https://drive.google.com/uc?export=view&id=1atmQuGYsfHB_Z1pfXuCyvfzqsJpPEGRa",
      placeholder: "BU"
    },
    {
      id: "juan-carlos-arias",
      name: "Juan Carlos Arias LC",
      conferenceTitle: "Tú puedes lograr un cambio en tu vida",
      bio: "El P. Juan Carlos Arias, LC, se formó en Dublín, Nueva York y Roma, y hoy sirve como sacerdote en Aguascalientes. Autor del libro Siempre Adelante y con más de 100,000 seguidores en Instagram, comparte la fe con un lenguaje cercano y actual. Colabora en el apostolado Reach, llevando esperanza y consuelo a los internos de la pastoral penitenciaria. Felizmente sacerdote, vive con alegría su vocación y su lema: \"Con Cristo, siempre adelante.\"",
      imageUrl: "https://drive.google.com/uc?export=view&id=1dnStmjixU-xCTMCg-ow1daNc69Tw6Hs1",
      placeholder: "JC"
    },
    {
      id: "gilberto-macias",
      name: "Gilberto Macías",
      conferenceTitle: "Masculinidad y Machismo",
      bio: "Gilberto Macías, es egresado de la Universidad Anáhuac, México de la licenciatura de negocios internacionales, y de la Maestría en sustentabilidad. Tiene Diplomados en la Universidad Panamericana, tecnológico de Monterrey Campus Santa Fe, Dale Carnegie información de líderes, coaching y oratoria, entre otros. Tiene 15 años de experiencia en el ramo profesional, 10 de ellos, ocupando puestos de liderazgo enfocado en desarrollo de equipos de alto potencial y transformación organizacional. Habiendo trabajado en posiciones de liderazgo en empresas top como Dow Chemical, BASF, Yara y Netafim. Es docente de la universidad, Anáhuac, en la facultad de economía y negocios en programas de liderazgo, trabajó también en la red de colegios Semper Altius. Es miembro del segundo grado del movimiento, Regnum Christi, desde el año 2007, fue delegado para la revisión de las constituciones, representando a México en el año 2017. Desde 2020 participa en el Bootcamp de masculinidad Braveheart en donde más de 300 personas han comenzado un plan de trabajo. En 2023, es investido como Caballero de la Orden Ecuestre del Santo Sepulcro y en 2025 es ascendido a Director de Sección Nueva Galicia (Guadalajara).",
      imageUrl: "https://drive.google.com/uc?export=view&id=1SkdTSfBAj_HH3jkUTto52jPIwFWMQ7t2",
      placeholder: "GM"
    },
    {
      id: "jose-villela",
      name: "José Villela",
      conferenceTitle: "Las decisiones marcan caminos",
      bio: "Médico por la Universidad Panamericana (UP). Psiquiatra por el Instituto Nacional de Psiquiatría. Miembro de la Asociación Psiquiátrica Mexicana y la American Psychiatric Association. Médico adscrito en el Centro Médico ABC. Profesor titular de la asignatura: \"Habilidades de comunicación\" en la Escuela de Medicina de la UP. Profesor invitado en el Instituto Panamericano de Alta Dirección de Empresas (IPADE). Ha impartido más de 400 conferencias sobre motivación, Resiliencia, bienestar, gratitud e inclusión de personas con discapacidad. Atleta en el Comité Paralímpico Mexicano en la disciplina de lanzamiento de clava, Clasificación F51. Subcampeón Nacional.",
      imageUrl: "https://drive.google.com/uc?export=view&id=16tuA98ElCG_yo0VV1MRTOHnrzxkp52xP",
      placeholder: "JV"
    }
  ]

  return (
    <section id="conferencistas" className="py-20 bg-white relative overflow-hidden">
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
            Conferencistas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conoce a los extraordinarios ponentes que compartirán su testimonio y experiencia para inspirar y formar a los jóvenes católicos.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
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

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Photo placeholder */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-golden-100 to-golden-200 flex items-center justify-center text-golden-600 text-2xl font-bold shadow-md group-hover:shadow-lg transition-shadow duration-300">
                {speaker.imageUrl ? (
                  <img 
                    src={speaker.imageUrl} 
                    alt={speaker.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : (
                  <span className="flex items-center justify-center">
                    {speaker.placeholder}
                  </span>
                )}
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {speaker.name}
              </h3>

              {/* Conference Title - Make it prominent */}
              <div className="mb-4 text-center">
                <h4 className="text-lg font-bold text-golden-600 bg-golden-50 rounded-lg px-4 py-2 border border-golden-200">
                  {speaker.conferenceTitle}
                </h4>
              </div>

              {/* Bio */}
              <div className="text-gray-600 leading-relaxed text-sm">
                <p className="line-clamp-6">
                  {speaker.bio}
                </p>
              </div>

              {/* Icon decoration */}
              <div className="flex justify-center mt-6">
                <div className="w-8 h-8 bg-golden-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-golden-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            No te pierdas la oportunidad de escuchar a estos extraordinarios conferencistas que inspirarán tu fe y vocación.
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