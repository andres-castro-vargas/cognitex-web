import { Calendar } from 'lucide-react';
import RobotLogo from './RobotLogo';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative pt-20">
      {/* Robot Logo */}
      <div className="scale-75 sm:scale-90 md:scale-100 mb-8">
        <RobotLogo />
      </div>

      {/* Contenido principal */}
      <div className="max-w-4xl w-full">
        <h1
          style={{ fontFamily: 'Tomorrow, sans-serif' }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight"
        >
          Automatización Inteligente para tu Empresa
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transformamos procesos complejos en soluciones simples con IA
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Botón principal */}
          <a
            href="#contacto"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-400 text-white px-10 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Comenzar Ahora
          </a>

          {/* Botón secundario */}
          <a
            href="#contacto"
            className="w-full sm:w-auto flex items-center justify-center gap-3 border border-blue-500 text-blue-400 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-500/20 hover:scale-105 transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            Agendar Reunión
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
