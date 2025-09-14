import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { BishopMessageSection } from './components/BishopMessageSection'
import { AboutSection } from './components/AboutSection'
import { ScheduleSection } from './components/ScheduleSection'
import { SpeakersSection } from './components/SpeakersSection'
import { RegistrationSection } from './components/RegistrationSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { DivineParticles } from './components/DivineParticles'

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Global divine particles - subtle sparkles */}
      <DivineParticles />
      
      <Navigation />
      <main>
        <HeroSection />
        <BishopMessageSection />
        <AboutSection />
        <ScheduleSection />
        <SpeakersSection />
        <RegistrationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}