import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'
import NetworkBackground from '../components/ui/NetworkBackground'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fondo animado de nodos */}
      <NetworkBackground />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Transición visual Hero → Servicios (solo línea azul) */}
      <div
        className="relative z-10"
        style={{
          height: '60px',
          marginTop: '-30px'
        }}
      >
        {/* Línea divisora azul sutil */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '50%',
            maxWidth: '500px',
            height: '2px',
            background: 'linear-gradient(to right, transparent, #3B82F6, transparent)',
            opacity: 0.6
          }}
        />
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Footer */}
      <Footer showMarquee={true} />
    </div>
  )
}
