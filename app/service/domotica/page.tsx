import { Metadata } from 'next';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import ServiceHero from '@/app/components/sections/ServiceHero';
import ImageGallery from '@/app/components/ui/ImageGallery';
import { COMPANY_INFO } from '@/app/lib/constants';

export const metadata: Metadata = {
  title: 'Domótica - Hogares Inteligentes | Smart Home Colombia',
  description: 'Convierte tu hogar en una casa inteligente. Control total desde tu smartphone: iluminación, climatización, seguridad, cortinas y más. Instalación profesional de domótica en Colombia.',
};

export default function DomoticaPage() {
  const smartFeatures = [
    {
      category: 'Iluminación Inteligente',
      icon: '💡',
      gradient: 'from-yellow-400/20 to-orange-500/20',
      accentColor: 'bg-yellow-500',
      features: [
        'Encendido/apagado desde tu celular',
        'Programación de horarios automáticos',
        'Control por voz (Alexa, Google Home)',
        'Ajuste de intensidad y temperatura de color',
        'Escenas personalizadas (cine, lectura, fiesta)',
        'Simulación de presencia cuando estás de viaje'
      ]
    },
    {
      category: 'Climatización',
      icon: '❄️',
      gradient: 'from-blue-400/20 to-cyan-500/20',
      accentColor: 'bg-blue-500',
      features: [
        'Control de aires acondicionados remotamente',
        'Ajuste de temperatura por zonas',
        'Programación según rutinas diarias',
        'Optimización de consumo energético',
        'Estadísticas de uso y ahorro',
        'Integración con sensores de temperatura'
      ]
    },
    {
      category: 'Seguridad Inteligente',
      icon: '🔐',
      gradient: 'from-red-400/20 to-pink-500/20',
      accentColor: 'bg-red-500',
      features: [
        'Cerraduras inteligentes con código/huella',
        'Notificaciones de acceso en tiempo real',
        'Integración con cámaras y alarmas',
        'Control de portón eléctrico desde el celular',
        'Acceso temporal para visitas',
        'Registro histórico de accesos'
      ]
    },
    {
      category: 'Cortinas y Persianas',
      icon: '🪟',
      gradient: 'from-purple-400/20 to-indigo-500/20',
      accentColor: 'bg-purple-500',
      features: [
        'Apertura/cierre automático o manual',
        'Programación según horario solar',
        'Control de privacidad instantáneo',
        'Integración con escenas (dormir, despertar)',
        'Ahorro energético térmico',
        'Control individual o grupal'
      ]
    },
    {
      category: 'Electrodomésticos',
      icon: '🏠',
      gradient: 'from-green-400/20 to-emerald-500/20',
      accentColor: 'bg-green-500',
      features: [
        'Control de enchufes inteligentes',
        'Programación de lavadora/secadora',
        'Monitoreo de consumo eléctrico',
        'Apagado automático de seguridad',
        'Activación remota de cafetera/hornos',
        'Gestión eficiente de energía'
      ]
    },
    {
      category: 'Entretenimiento',
      icon: '📺',
      gradient: 'from-pink-400/20 to-rose-500/20',
      accentColor: 'bg-pink-500',
      features: [
        'Control de TV y sistemas de audio',
        'Escenas de cine automatizadas',
        'Integración con streaming',
        'Audio multizona',
        'Control universal de todos los dispositivos',
        'Sincronización con iluminación'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Ahorra Hasta 30% en Energía',
      description: 'La domótica optimiza el consumo eléctrico apagando automáticamente dispositivos en desuso y ajustando la climatización según ocupación real.',
      icon: '💰',
      stats: '30% menos en tu factura'
    },
    {
      title: 'Confort Absoluto',
      description: 'Tu hogar se adapta a ti. Llega a casa con la temperatura perfecta, iluminación ideal y tu música favorita, todo activado automáticamente.',
      icon: '✨',
      stats: 'Automatización 24/7'
    },
    {
      title: 'Seguridad Mejorada',
      description: 'Monitoreo constante, alertas inmediatas y control total de accesos. Siempre sabrás qué pasa en tu hogar, estés donde estés.',
      icon: '🛡️',
      stats: 'Protección inteligente'
    },
    {
      title: 'Aumenta el Valor',
      description: 'Una vivienda inteligente se valoriza hasta un 20% más en el mercado inmobiliario. Es una inversión que se recupera.',
      icon: '📈',
      stats: '+20% valor de propiedad'
    }
  ];

  const integrations = [
    { name: 'Amazon Alexa', icon: '🗣️', color: 'bg-blue-500' },
    { name: 'Google Home', icon: '🏠', color: 'bg-red-500' },
    { name: 'Apple HomeKit', icon: '🍎', color: 'bg-gray-800' },
    { name: 'Control4', icon: '🎛️', color: 'bg-orange-500' },
    { name: 'Sonoff', icon: '⚡', color: 'bg-green-500' },
    { name: 'Tuya Smart', icon: '📱', color: 'bg-indigo-500' }
  ];

  const useCases = [
    {
      scenario: 'Buenos Días',
      time: '7:00 AM',
      actions: [
        'Cortinas se abren gradualmente',
        'Luces se encienden al 40%',
        'Cafetera inicia preparación',
        'Calefacción ajusta temperatura',
        'Música suave de fondo'
      ],
      gradient: 'from-orange-400 to-yellow-500'
    },
    {
      scenario: 'Modo Trabajo',
      time: '9:00 AM',
      actions: [
        'Iluminación en modo productivo',
        'Aire acondicionado en oficina',
        'Resto de casa en modo ahorro',
        'Cámaras en vigilancia activa',
        'Puerta principal bloqueada'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      scenario: 'Llegada a Casa',
      time: '6:00 PM',
      actions: [
        'Portón se abre automáticamente',
        'Luces de bienvenida encendidas',
        'Clima a temperatura ideal',
        'TV y música listas',
        'Alarma desactivada'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      scenario: 'Modo Cine',
      time: 'Por demanda',
      actions: [
        'Luces se atenúan automáticamente',
        'Cortinas se cierran completamente',
        'Proyector/TV se enciende',
        'Sistema de audio activado',
        'Temperatura ajustada a confort'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      scenario: 'Buenas Noches',
      time: '10:00 PM',
      actions: [
        'Todas las luces se apagan gradualmente',
        'Cortinas cerradas completamente',
        'Electrodomésticos no esenciales apagados',
        'Alarma de seguridad activada',
        'Temperatura nocturna óptima'
      ],
      gradient: 'from-indigo-600 to-blue-900'
    },
    {
      scenario: 'Modo Vacaciones',
      time: 'Cuando estás fuera',
      actions: [
        'Simulación de presencia aleatoria',
        'Iluminación en horarios variables',
        'Alertas de seguridad maximizadas',
        'Consumo energético mínimo',
        'Monitoreo remoto activo'
      ],
      gradient: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <ServiceHero
          title="Domótica - Hogares Inteligentes"
          description="Transforma tu vivienda en un espacio del futuro con tecnología que se adapta a tu estilo de vida"
          videoSrc="/videos/domotica-hero-background.mp4"
          icon="🏠"
        />

        {/* Intro con diseño futurista */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-primary-1/5 to-white overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-1 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-3 rounded-full blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Badge futurista */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-1 to-primary-2 text-white px-6 py-2 rounded-full text-sm font-bold">
                  <span className="animate-pulse">⚡</span>
                  <span>TECNOLOGÍA DEL FUTURO, HOY</span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-primary-3 via-primary-2 to-primary-1 bg-clip-text text-transparent mb-8">
                Bienvenido al Futuro de los Hogares
              </h2>

              <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p className="text-center max-w-3xl mx-auto">
                  Imagina controlar cada aspecto de tu hogar con un simple toque en tu smartphone o mediante comandos de voz. 
                  <strong className="text-primary-3"> La domótica no es ciencia ficción</strong>, es realidad disponible ahora en Colombia.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-primary-1">
                    <h3 className="font-bold text-xl text-primary-3 mb-3 flex items-center gap-2">
                      <span>🎯</span> ¿Qué es la Domótica?
                    </h3>
                    <p className="text-gray-600">
                      Es la integración de tecnología en tu vivienda para automatizar y controlar sistemas como 
                      iluminación, climatización, seguridad, entretenimiento y más. Todo desde una sola aplicación 
                      o mediante inteligencia artificial que aprende de tus hábitos.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-primary-2">
                    <h3 className="font-bold text-xl text-primary-3 mb-3 flex items-center gap-2">
                      <span>🚀</span> ¿Cómo Funciona?
                    </h3>
                    <p className="text-gray-600">
                      Instalamos dispositivos inteligentes conectados a una red central que comunica todos 
                      los elementos de tu hogar. Tú decides cómo, cuándo y desde dónde controlarlos: 
                      desde tu celular, tablet, voz o automáticamente según rutinas programadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Features - Diseño hexagonal */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Control Total de Tu Hogar
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cada sistema de tu vivienda trabajando en perfecta armonía
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {smartFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon with accent */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div className={`w-1 h-16 ${feature.accentColor} rounded-full`}></div>
                    </div>

                    <h3 className="text-2xl font-bold text-primary-3 mb-4 group-hover:text-primary-2 transition-colors">
                      {feature.category}
                    </h3>

                    <ul className="space-y-3">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                          <span className={`mt-1 w-1.5 h-1.5 ${feature.accentColor} rounded-full flex-shrink-0`}></span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases - Timeline creativo */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Un Día en Tu Hogar Inteligente
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre cómo la automatización mejora cada momento de tu día
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                >
                  {/* Header con gradiente */}
                  <div className={`bg-gradient-to-r ${useCase.gradient} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{useCase.scenario}</h3>
                      <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        {useCase.time}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {useCase.actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                          <span className="mt-1 text-primary-3">✓</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits con estadísticas */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-5 via-primary-4 to-primary-3 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Beneficios Reales, Resultados Comprobados
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-6xl mb-4">{benefit.icon}</div>
                    <div className="text-3xl font-bold mb-2">{benefit.stats}</div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-sm text-gray-200 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integraciones */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Compatible con Tus Plataformas Favoritas
              </h2>
              <p className="text-lg text-gray-600">
                Integramos con los principales ecosistemas del mercado
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {integrations.map((integration, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 rounded-2xl px-6 py-4 shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                >
                  <div className={`${integration.color} text-white w-12 h-12 rounded-xl flex items-center justify-center text-2xl`}>
                    {integration.icon}
                  </div>
                  <span className="font-bold text-gray-800">{integration.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 text-center mb-12">
              Proyectos de Domótica Realizados
            </h2>
            
            <ImageGallery 
              basePath="/services-images/domotica"
              count={6}
              altPrefix="Proyecto de domótica"
            />
          </div>
        </section>

        {/* CTA con diseño premium */}
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-primary-1 via-primary-2 to-primary-3 text-white relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl mb-6 animate-bounce-slow">🚀</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                ¿Listo Para Vivir en el Futuro?
              </h2>
              <p className="text-lg sm:text-xl text-gray-100 mb-10 leading-relaxed">
                Agenda una visita técnica gratuita y descubre cómo podemos transformar tu hogar 
                en un espacio inteligente adaptado a tus necesidades específicas
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hola, quiero convertir mi hogar en una casa inteligente con domótica')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-primary-3 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
              >
                <svg className="w-7 h-7 text-green-600 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Solicitar Visita Técnica Gratuita</span>
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