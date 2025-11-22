import Header from './components/layout/Header'
import HeroSection from './components/sections/HeroSection'
import NetworkBackground from './components/ui/NetworkBackground'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Fondo animado de nodos */}
      <NetworkBackground />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />
    </div>
  )
}

export default App
