import { Search, Lightbulb, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Analizamos tu proceso',
      description: 'Evaluamos profundamente tus operaciones actuales',
      icon: Search
    },
    {
      number: '02',
      title: 'Diseñamos la solución',
      description: 'Creamos una estrategia personalizada de automatización',
      icon: Lightbulb
    },
    {
      number: '03',
      title: 'Implementamos y optimizamos',
      description: 'Desplegamos la solución y mejoramos continuamente',
      icon: Rocket
    }
  ];

  return (
    <section id="proceso" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2
            style={{ fontFamily: 'Tomorrow, sans-serif' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Cómo{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Funciona
            </span>
          </h2>
        </div>

        {/* Steps - Horizontal en desktop, Vertical en móvil */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Línea conectora (solo desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Número grande con borde */}
                <div className="w-32 h-32 rounded-full border-4 border-blue-500 bg-black flex items-center justify-center mb-6 relative z-10">
                  <span
                    style={{ fontFamily: 'Tomorrow, sans-serif' }}
                    className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
                  >
                    {step.number}
                  </span>
                </div>

                {/* Icono */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center text-white mb-4">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Título y descripción */}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-xs">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
