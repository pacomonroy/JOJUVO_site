import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ScheduleSection } from './components/ScheduleSection'
import { RegistrationSection } from './components/RegistrationSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { DivineParticles } from './components/DivineParticles'
import { FloatingBuyButton } from './components/FloatingBuyButton'

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Global divine particles - subtle sparkles */}
      <DivineParticles />
      
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ScheduleSection />
        <RegistrationSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Floating buy button - 9th button */}
      <FloatingBuyButton />
    </div>
  )
}