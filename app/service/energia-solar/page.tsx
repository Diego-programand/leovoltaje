import { Metadata } from 'next';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import ServiceHero from '@/app/components/sections/ServiceHero';
import ImageGallery from '@/app/components/ui/ImageGallery';
import { COMPANY_INFO } from '@/app/lib/constants';

export const metadata: Metadata = {
  title: 'Energía Solar Fotovoltaica | Paneles Solares Colombia',
  description: 'Instalación de sistemas de energía solar fotovoltaica en Colombia. Reduce tu factura de luz hasta 95% con paneles solares de última generación. Energía limpia y renovable.',
};

export default function EnergiaSolarPage() {
  const benefits = [
    {
      title: 'Ahorro del 60-95%',
      description: 'Reduce drásticamente tu factura eléctrica. La inversión se recupera en 3-6 años y disfrutas de energía prácticamente gratuita por más de 25 años.',
      icon: '💰',
      stat: 'Hasta 95% de ahorro',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Energía Limpia',
      description: 'Contribuye al planeta reduciendo tu huella de carbono. Cada panel solar evita toneladas de CO₂ al año.',
      icon: '🌱',
      stat: 'Cero emisiones',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Independencia Energética',
      description: 'Libérate de los aumentos constantes en las tarifas eléctricas. Genera tu propia energía y protege tu economía.',
      icon: '⚡',
      stat: 'Autosuficiencia',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Valoriza tu Propiedad',
      description: 'Una vivienda o negocio con sistema solar aumenta su valor comercial hasta un 20% en el mercado.',
      icon: '📈',
      stat: '+20% valor',
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  const systemComponents = [
    {
      name: 'Paneles Solares',
      description: 'Módulos fotovoltaicos de alta eficiencia que convierten la luz solar en electricidad. Utilizamos marcas premium con garantía de 25 años.',
      icon: '☀️',
      specs: [
        'Eficiencia: 18-22%',
        'Potencia: 450-550W por panel',
        'Tecnología monocristalina',
        'Resistentes a granizo y viento',
        'Garantía de producción 25 años'
      ],
      color: 'border-yellow-500'
    },
    {
      name: 'Inversor Solar',
      description: 'Convierte la corriente continua (DC) de los paneles en corriente alterna (AC) utilizable en tu hogar o negocio.',
      icon: '🔄',
      specs: [
        'Eficiencia: 97-99%',
        'Monitoreo WiFi en tiempo real',
        'Protecciones integradas',
        'Compatible con baterías',
        'Garantía de 10 años'
      ],
      color: 'border-blue-500'
    },
    {
      name: 'Sistema de Montaje',
      description: 'Estructura robusta en aluminio y acero inoxidable diseñada para soportar condiciones climáticas extremas durante décadas.',
      icon: '🔧',
      specs: [
        'Material anticorrosivo',
        'Diseño aerodinámico',
        'Instalación en techo o suelo',
        'Ángulo optimizado',
        'Garantía estructural 15 años'
      ],
      color: 'border-gray-500'
    },
    {
      name: 'Baterías (Opcional)',
      description: 'Almacenamiento de energía para uso nocturno o respaldo durante cortes de luz. Sistema híbrido on-grid/off-grid.',
      icon: '🔋',
      specs: [
        'Tecnología litio LiFePO4',
        'Capacidad escalable',
        'Ciclos de vida: +6000',
        'Descarga profunda segura',
        'Garantía de 10 años'
      ],
      color: 'border-green-500'
    }
  ];

  const solarTypes = [
    {
      type: 'Sistema On-Grid',
      subtitle: 'Conectado a la red',
      description: 'El sistema más común y económico. Se conecta a la red eléctrica convencional, vendiendo excedentes y usando la red como respaldo.',
      icon: '🔌',
      advantages: [
        'Menor inversión inicial',
        'No requiere baterías',
        'Venta de excedentes a la red',
        'ROI más rápido (3-5 años)',
        'Mantenimiento mínimo'
      ],
      idealFor: 'Viviendas y negocios con servicio eléctrico estable',
      gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      type: 'Sistema Off-Grid',
      subtitle: 'Autónomo aislado',
      description: 'Sistema completamente independiente con baterías. Ideal para zonas rurales sin acceso a la red eléctrica.',
      icon: '🏝️',
      advantages: [
        'Total independencia energética',
        'Funciona sin red eléctrica',
        'Respaldo 24/7',
        'Ideal para zonas remotas',
        'No depende de apagones'
      ],
      idealFor: 'Fincas, zonas rurales, cabañas',
      gradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      type: 'Sistema Híbrido',
      subtitle: 'Lo mejor de ambos',
      description: 'Combina conexión a red con respaldo de baterías. Máxima flexibilidad y seguridad energética.',
      icon: '⚡',
      advantages: [
        'Energía continua garantizada',
        'Respaldo en apagones',
        'Optimización inteligente',
        'Venta de excedentes',
        'Máxima eficiencia'
      ],
      idealFor: 'Negocios críticos, clínicas, data centers',
      gradient: 'from-purple-500/10 to-pink-500/10'
    }
  ];

  const installationProcess = [
    {
      phase: 'Evaluación Inicial',
      description: 'Análisis de consumo eléctrico, visita técnica al sitio, medición de radiación solar y evaluación estructural del techo.',
      duration: '1-2 días',
      icon: '📋',
      deliverables: ['Reporte de viabilidad', 'Consumo histórico', 'Análisis de sombreado']
    },
    {
      phase: 'Diseño del Sistema',
      description: 'Dimensionamiento óptimo del sistema, selección de componentes, diseño eléctrico y simulación de producción anual.',
      duration: '3-5 días',
      icon: '🎨',
      deliverables: ['Planos eléctricos', 'Memoria de cálculo', 'Propuesta económica']
    },
    {
      phase: 'Trámites y Permisos',
      description: 'Gestión de permisos ante la empresa de energía, certificaciones RETIE y documentación legal requerida.',
      duration: '2-4 semanas',
      icon: '📄',
      deliverables: ['Permisos aprobados', 'Contrato de conexión', 'Certificaciones']
    },
    {
      phase: 'Instalación',
      description: 'Montaje de estructura, instalación de paneles, cableado, conexión del inversor y puesta en marcha del sistema.',
      duration: '2-5 días',
      icon: '🔨',
      deliverables: ['Sistema instalado', 'Pruebas de funcionamiento', 'Capacitación']
    },
    {
      phase: 'Conexión y Activación',
      description: 'Inspección final de la empresa eléctrica, instalación de medidor bidireccional y activación oficial del sistema.',
      duration: '1-2 semanas',
      icon: '✅',
      deliverables: ['Sistema operativo', 'Medidor bidireccional', 'Certificados finales']
    }
  ];

  const environmentalImpact = [
    { metric: '4 toneladas', description: 'CO₂ evitado por año', icon: '🌍' },
    { metric: '100 árboles', description: 'Equivalente plantado', icon: '🌳' },
    { metric: '25+ años', description: 'De energía limpia', icon: '♻️' },
    { metric: '95%', description: 'Reciclable al final de vida', icon: '🔄' }
  ];

  const faqs = [
    {
      q: '¿Cuánto cuesta un sistema solar?',
      a: 'Depende del consumo y tamaño del sistema. Sistemas residenciales típicos (3-5 kW) van desde $15-25 millones COP. La inversión se recupera en 3-6 años.'
    },
    {
      q: '¿Funcionan en días nublados?',
      a: 'Sí, los paneles generan energía incluso con nubes, aunque a menor capacidad (15-25%). Por eso el sistema se dimensiona considerando esto.'
    },
    {
      q: '¿Necesito baterías?',
      a: 'No es obligatorio. Los sistemas On-Grid usan la red como "batería virtual", siendo más económicos. Las baterías son opcionales para respaldo.'
    },
    {
      q: '¿Cuánto mantenimiento requiere?',
      a: 'Muy poco. Limpieza de paneles 2-3 veces al año e inspección visual anual. Los sistemas modernos son prácticamente libres de mantenimiento.'
    }
  ];

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <ServiceHero
          title="Energía Solar Fotovoltaica"
          description="Genera tu propia energía limpia y ahorra hasta 95% en tu factura de luz"
          videoSrc="/videos/energia-solar-hero-background.mp4"
          icon="☀️"
        />

        {/* Intro section con mensaje ecológico */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-green-50 to-white overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Badge ecológico */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  <span className="text-xl">🌱</span>
                  <span>ENERGÍA 100% RENOVABLE Y SOSTENIBLE</span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent mb-8">
                El Futuro Energético es Solar
              </h2>

              <div className="text-center mb-12">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                  Somos conscientes del impacto ambiental del uso de energía tradicional. Por eso, 
                  <strong className="text-green-600"> contribuimos activamente con nuestro planeta</strong> ofreciendo 
                  soluciones de energía solar fotovoltaica de última generación.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Transforma la luz del sol en electricidad limpia, reduce tu huella de carbono y únete 
                  a la revolución energética. <strong>Evoluciona tu forma de obtener energía</strong> y sé 
                  parte del cambio positivo que nuestro planeta necesita.
                </p>
              </div>

              {/* Stats de impacto ambiental */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {environmentalImpact.map((item, index) => (
                  <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-5xl mb-3">{item.icon}</div>
                    <div className="text-3xl font-bold text-green-600 mb-2">{item.metric}</div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits - Diseño impactante */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Beneficios de la Energía Solar
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Inversión inteligente con retornos inmediatos y duraderos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Header con gradiente */}
                  <div className={`bg-gradient-to-r ${benefit.gradient} p-8 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-6xl">{benefit.icon}</div>
                      <div className="text-right">
                        <div className="text-sm opacity-90">Beneficio</div>
                        <div className="text-2xl font-bold">{benefit.stat}</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">{benefit.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Components */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Componentes del Sistema Solar
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tecnología de última generación para máxima eficiencia y durabilidad
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {systemComponents.map((component, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-l-4 ${component.color}`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-6xl">{component.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary-3 mb-2">{component.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{component.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-sm text-gray-700 mb-3">Especificaciones:</h4>
                    {component.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Systems */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Tipos de Sistemas Solares
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Encuentra la solución perfecta para tus necesidades energéticas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {solarTypes.map((system, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${system.gradient} rounded-3xl p-8 border-2 border-gray-200 hover:border-green-500 transition-all shadow-lg hover:shadow-xl`}
                >
                  <div className="text-center mb-6">
                    <div className="text-7xl mb-4">{system.icon}</div>
                    <h3 className="text-2xl font-bold text-primary-3 mb-1">{system.type}</h3>
                    <p className="text-sm text-gray-600 italic">{system.subtitle}</p>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-6">{system.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-sm text-green-700 mb-3">Ventajas:</h4>
                    <ul className="space-y-2">
                      {system.advantages.map((adv, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-300">
                    <p className="text-xs text-gray-600">
                      <strong>Ideal para:</strong> {system.idealFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-5 to-primary-4 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Proceso de Instalación
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                De la consulta inicial a la generación de energía limpia
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {installationProcess.map((phase, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-white text-primary-3 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                        {phase.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold">{phase.phase}</h3>
                        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{phase.duration}</span>
                      </div>

                      <p className="text-gray-200 mb-4 leading-relaxed">{phase.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((deliverable, i) => (
                          <span key={i} className="text-xs bg-green-500/20 text-green-200 px-3 py-1 rounded-full">
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Preguntas Frecuentes
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-primary-3 mb-3 flex items-start gap-3">
                    <span className="text-green-500 flex-shrink-0">❓</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-8">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 text-center mb-12">
              Proyectos Solares Instalados
            </h2>
            
            <ImageGallery 
              basePath="/services-images/energia-solar"
              count={6}
              altPrefix="Instalación de energía solar"
            />
          </div>
        </section>

        {/* CTA Ecológico */}
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-green-600 via-emerald-600 to-cyan-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-7xl mb-6 animate-bounce-slow">🌍☀️</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Únete a la Revolución Solar
              </h2>
              <p className="text-lg sm:text-xl text-green-50 mb-10 leading-relaxed">
                Agenda tu evaluación gratuita hoy y descubre cuánto puedes ahorrar mientras 
                proteges el medio ambiente. ¡El planeta y tu bolsillo te lo agradecerán!
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hola, quiero información sobre instalación de paneles solares y energía fotovoltaica')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-green-600 hover:bg-green-50 px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
              >
                <svg className="w-7 h-7 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Solicitar Evaluación Gratuita</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}