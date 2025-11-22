import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span
              style={{ fontFamily: 'Tomorrow, sans-serif' }}
              className="text-xl sm:text-2xl font-bold text-white tracking-wide"
            >
              COGNITEX
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105"
            >
              Iniciar Sesión
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800/50">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Iniciar Sesión
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
