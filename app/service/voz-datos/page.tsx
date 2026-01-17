import { Metadata } from 'next';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import ServiceHero from '@/app/components/sections/ServiceHero';
import ImageGallery from '@/app/components/ui/ImageGallery';
import { COMPANY_INFO } from '@/app/lib/constants';

export const metadata: Metadata = {
  title: 'Redes de Voz y Datos | Cableado Estructurado Colombia',
  description: 'Instalación y mantenimiento de redes de voz y datos, cableado estructurado, racks y wifi empresarial. Conectividad profesional en Colombia.',
};

export default function VozDatosPage() {
  const services = [
    {
      title: 'Cableado Estructurado',
      description: 'Infraestructura de red certificada con los más altos estándares de calidad para garantizar conectividad confiable y de alta velocidad.',
      icon: '🔌',
      gradient: 'from-blue-500 to-indigo-600',
      features: [
        'Cableado Cat5e, Cat6, Cat6a y Cat7',
        'Certificación con equipos Fluke',
        'Canalización profesional',
        'Puntos de red etiquet ados',
        'Patch panels y keystone',
        'Organización cable manager',
        'Cumplimiento TIA/EIA',
        'Documentación completa'
      ],
      benefits: [
        'Velocidades hasta 10 Gbps',
        'Conexión estable y confiable',
        'Escalabilidad futura',
        'Fácil troubleshooting'
      ]
    },
    {
      title: 'Racks de Datos',
      description: 'Instalación y mantenimiento de racks de telecomunicaciones con organización profesional y óptima ventilación para equipos críticos.',
      icon: '🗄️',
      gradient: 'from-purple-500 to-pink-600',
      features: [
        'Racks de pared y piso',
        'Gabinetes ventilados',
        'PDU de potencia redundante',
        'Sistema de ventilación',
        'Bandejas de fibra óptica',
        'Cable management vertical',
        'Control de acceso',
        'Monitoreo de temperatura'
      ],
      benefits: [
        'Organización profesional',
        'Protección de equipos',
        'Fácil mantenimiento',
        'Apariencia limpia'
      ]
    },
    {
      title: 'WiFi Empresarial',
      description: 'Diseño e instalación de redes inalámbricas empresariales con cobertura total, roaming automático y gestión centralizada.',
      icon: '📡',
      gradient: 'from-green-500 to-teal-600',
      features: [
        'Site survey profesional',
        'Access Points empresariales',
        'Controlador WiFi centralizado',
        'VLANs y seguridad WPA3',
        'Portal cautivo personalizado',
        'QoS y priorización de tráfico',
        'Roaming sin interrupciones',
        'Monitoreo y análisis'
      ],
      benefits: [
        'Cobertura uniforme 100%',
        'Alta densidad de usuarios',
        'Gestión simplificada',
        'Seguridad empresarial'
      ]
    },
    {
      title: 'Fibra Óptica',
      description: 'Instalación de enlaces de fibra óptica monomodo y multimodo para conexiones de alto rendimiento entre edificios o pisos.',
      icon: '💫',
      gradient: 'from-orange-500 to-red-600',
      features: [
        'Fusión de fibra certificada',
        'Conectores SC, LC, ST',
        'Medición con OTDR',
        'Bandejas y cajas de empalme',
        'Protección mecánica',
        'Etiquetado de fibras',
        'Documentación de pérdidas',
        'Pruebas de continuidad'
      ],
      benefits: [
        'Distancias hasta 100 km',
        'Inmune a interferencias',
        'Ancho de banda ilimitado',
        'Seguridad máxima'
      ]
    }
  ];

  const networkTypes = [
    {
      type: 'Red de Datos',
      icon: '💻',
      description: 'Infraestructura para compartir información entre computadores, servidores y dispositivos.',
      applications: [
        'Acceso a internet',
        'Compartir archivos',
        'Impresoras en red',
        'Servidores y bases de datos',
        'Sistemas de gestión',
        'Videoconferencias'
      ],
      color: 'blue'
    },
    {
      type: 'Red de Voz',
      icon: '☎️',
      description: 'Sistema telefónico IP para comunicaciones internas y externas de alta calidad.',
      applications: [
        'VoIP empresarial',
        'Extensiones telefónicas',
        'Conferencias telefónicas',
        'Call center',
        'Grabación de llamadas',
        'IVR y menús automáticos'
      ],
      color: 'green'
    },
    {
      type: 'Red Convergente',
      icon: '🔗',
      description: 'Infraestructura única que maneja datos, voz y video simultáneamente con QoS.',
      applications: [
        'Todo sobre IP',
        'Optimización de recursos',
        'VLANs segmentadas',
        'Priorización de tráfico',
        'Videovigilancia IP',
        'Control de acceso'
      ],
      color: 'purple'
    }
  ];

  const certifications = [
    { standard: 'TIA/EIA-568', description: 'Estándar de cableado comercial' },
    { standard: 'ISO/IEC 11801', description: 'Cableado genérico internacional' },
    { standard: 'ANSI/TIA-569', description: 'Espacios y rutas de telecomunicaciones' },
    { standard: 'IEEE 802.3', description: 'Ethernet y transmisión de datos' }
  ];

  const equipment = [
    { brand: 'Cisco', icon: '🌐', specialty: 'Switches y routers empresariales' },
    { brand: 'Ubiquiti', icon: '📡', specialty: 'WiFi y conectividad' },
    { brand: 'Panduit', icon: '🔌', specialty: 'Infraestructura física' },
    { brand: 'AMP', icon: '⚡', specialty: 'Cableado certificado' },
    { brand: 'Fluke Networks', icon: '📊', specialty: 'Certificación y testing' },
    { brand: 'D-Link', icon: '🔷', specialty: 'Networking profesional' }
  ];

  const maintenanceServices = [
    { service: 'Certificación de puntos', frequency: 'Por demanda' },
    { service: 'Limpieza de conectores', frequency: 'Anual' },
    { service: 'Revisión de racks', frequency: 'Semestral' },
    { service: 'Optimización WiFi', frequency: 'Trimestral' },
    { service: 'Actualización firmware', frequency: 'Según fabricante' },
    { service: 'Documentación actualizada', frequency: 'Continua' }
  ];

  const troubleshooting = [
    { problem: 'Conexión lenta o intermitente', solution: 'Certificación y reemplazo de cables defectuosos' },
    { problem: 'WiFi con baja señal', solution: 'Site survey y reubicación de APs' },
    { problem: 'Desconexiones frecuentes', solution: 'Análisis de interferencias y optimización' },
    { problem: 'Equipos sin comunicación', solution: 'Diagnóstico de capa física y lógica' }
  ];

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <ServiceHero
          title="Redes de Voz y Datos"
          description="Conectividad profesional para tu negocio u hogar con tecnología de punta"
          videoSrc="/videos/voz-datos-hero-background.mp4"
          icon="🌐"
        />

        {/* Intro Tech */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Badge tecnológico */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  <span className="text-xl">🚀</span>
                  <span>TECNOLOGÍA DE ÚLTIMA GENERACIÓN</span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-primary-3 mb-8">
                Conectividad Que Impulsa Tu Productividad
              </h2>

              <div className="text-center mb-12">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                  Nuestro servicio de instalación de redes de voz y datos cuenta con la <strong className="text-primary-3">mejor 
                  tecnología de cableado</strong> y personal altamente calificado para garantizar un correcto funcionamiento 
                  de tu conectividad empresarial o residencial.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Además, ofrecemos instalación y mantenimiento profesional de racks de telecomunicaciones, 
                  asegurando la <strong>máxima eficiencia de tu red</strong> y evitando fallos que afecten tu operación.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: '⚡', title: 'Velocidad', desc: 'Hasta 10 Gbps', color: 'yellow' },
                  { icon: '🛡️', title: 'Confiabilidad', desc: '99.9% uptime', color: 'green' },
                  { icon: '🔧', title: 'Soporte', desc: 'Técnico 24/7', color: 'blue' }
                ].map((item, i) => (
                  <div key={i} className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 rounded-xl p-6 text-center border-2 border-${item.color}-200`}>
                    <div className="text-5xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Nuestros Servicios de Conectividad
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Soluciones integrales de networking para empresas y hogares exigentes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-6xl">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-sm text-white/90 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 gap-6">
                      {/* Features */}
                      <div>
                        <h4 className="font-bold text-lg text-primary-3 mb-4">Incluye:</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="text-blue-600 mt-0.5">•</span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-bold text-lg text-primary-3 mb-3">Beneficios:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.benefits.map((benefit, i) => (
                            <span key={i} className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                              ✓ {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Network Types */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Tipos de Redes Que Instalamos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {networkTypes.map((network, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-${network.color}-500`}
                >
                  <div className="text-center mb-6">
                    <div className="text-7xl mb-4">{network.icon}</div>
                    <h3 className="text-2xl font-bold text-primary-3 mb-2">{network.type}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{network.description}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-gray-700 mb-3">Aplicaciones:</h4>
                    <ul className="space-y-2">
                      {network.applications.map((app, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className={`w-1.5 h-1.5 bg-${network.color}-500 rounded-full`}></span>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Brands */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Trabajamos con las Mejores Marcas
              </h2>
              <p className="text-lg text-gray-600">
                Equipos de calidad empresarial con garantía y soporte
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {equipment.map((brand, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <div className="text-5xl mb-3">{brand.icon}</div>
                  <h3 className="font-bold text-primary-3 mb-2">{brand.brand}</h3>
                  <p className="text-xs text-gray-600">{brand.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Services */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-5 to-primary-4 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Mantenimiento Preventivo de Redes
                </h2>
                <p className="text-xl text-gray-200">
                  Mantén tu infraestructura operando al 100%
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {maintenanceServices.map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <h3 className="font-bold text-lg mb-2">{item.service}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-200">
                      <span>⏱️</span>
                      <span>{item.frequency}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Solución de Problemas Comunes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {troubleshooting.map((item, index) => (
                <div key={index} className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl text-red-600">⚠️</span>
                    <h3 className="font-bold text-gray-800 flex-1">{item.problem}</h3>
                  </div>
                  <div className="flex items-start gap-3 pl-8">
                    <span className="text-green-600 font-bold">✓</span>
                    <p className="text-sm text-gray-700">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Cumplimiento de Estándares
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    ✓
                  </div>
                  <h3 className="font-bold text-lg text-primary-3 mb-2">{cert.standard}</h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 text-center mb-12">
              Instalaciones Realizadas
            </h2>
            
            <ImageGallery 
              basePath="/services-images/voz-datos"
              count={6}
              altPrefix="Instalación de red de voz y datos"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl mb-6">🌐💻</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Mejora la Conectividad de Tu Negocio
              </h2>
              <p className="text-lg sm:text-xl text-blue-50 mb-10 leading-relaxed">
                Contáctanos hoy y recibe una evaluación gratuita de tu infraestructura de red. 
                Te diseñamos la solución perfecta para tus necesidades
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hola, necesito información sobre instalación de redes de voz y datos')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
              >
                <svg className="w-7 h-7 text-green-600 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
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