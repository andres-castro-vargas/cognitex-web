import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'
import NetworkBackground from '../components/ui/NetworkBackground'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Fondo animado de nodos */}
      <NetworkBackground />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
