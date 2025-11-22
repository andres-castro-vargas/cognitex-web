import { Brain, Cpu, Network, MonitorDot } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Cpu,
      title: 'Automatización con IA',
      description: 'Optimiza procesos complejos con inteligencia artificial de vanguardia'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Modelos predictivos que aprenden y mejoran continuamente'
    },
    {
      icon: Network,
      title: 'Integración de Sistemas',
      description: 'Conectamos todas tus herramientas en un ecosistema unificado'
    },
    {
      icon: MonitorDot,
      title: 'Monitoreo 24/7',
      description: 'Supervisión constante y alertas inteligentes en tiempo real'
    }
  ];

  return (
    <section id="servicios" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2
            style={{ fontFamily: 'Tomorrow, sans-serif' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Nuestros{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
        </div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
