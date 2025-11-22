import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Columna 1 - Logo y descripción */}
          <div>
            <h3
              style={{ fontFamily: 'Tomorrow, sans-serif' }}
              className="text-2xl font-bold text-white mb-4"
            >
              COGNITEX
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Soluciones de automatización inteligente para empresas modernas
            </p>
          </div>

          {/* Columna 2 - Servicios */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Automatización con IA
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Machine Learning
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Integración de Sistemas
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Monitoreo 24/7
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Empresa */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Contacto y Redes */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <a href="mailto:contacto@cognitex.com" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  contacto@cognitex.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  +123 456 7890
                </a>
              </li>
            </ul>

            <h4 className="text-white font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">&copy; 2025 COGNITEX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
