import { Metadata } from 'next';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import ServiceHero from '@/app/components/sections/ServiceHero';
import ImageGallery from '@/app/components/ui/ImageGallery';
import { COMPANY_INFO } from '@/app/lib/constants';

export const metadata: Metadata = {
  title: 'Sistemas de Videovigilancia CCTV | Cámaras de Seguridad',
  description: 'Instalación profesional de cámaras de seguridad y sistemas CCTV en Colombia. Monitoreo 24/7, acceso remoto desde tu celular y grabación en alta definición.',
};

export default function CCTVPage() {
  const features = [
    {
      title: 'Monitoreo 24/7',
      description: 'Vigilancia continua de tu propiedad las 24 horas del día, los 7 días de la semana, con grabación automática de eventos.',
      icon: '👁️'
    },
    {
      title: 'Acceso Remoto',
      description: 'Visualiza tus cámaras desde cualquier lugar del mundo mediante tu smartphone, tablet o computador con conexión a internet.',
      icon: '📱'
    },
    {
      title: 'Grabación en Alta Definición',
      description: 'Sistemas con resolución Full HD (1080p) y 4K disponibles para capturar cada detalle con claridad excepcional.',
      icon: '🎥'
    },
    {
      title: 'Visión Nocturna',
      description: 'Tecnología infrarroja avanzada que permite monitoreo claro incluso en completa oscuridad hasta 30 metros de distancia.',
      icon: '🌙'
    },
    {
      title: 'Detección Inteligente',
      description: 'Alertas automáticas ante movimiento, reconocimiento facial y detección de intrusión en zonas específicas.',
      icon: '🔔'
    },
    {
      title: 'Almacenamiento Seguro',
      description: 'Grabación local en DVR/NVR con opción de respaldo en la nube para proteger tus videos de cualquier eventualidad.',
      icon: '💾'
    }
  ];

  const solutions = [
    {
      type: 'Residencial',
      icon: '🏠',
      applications: [
        'Casas y apartamentos',
        'Conjunto residenciales',
        'Parqueaderos privados',
        'Zonas comunes',
        'Entradas y salidas'
      ],
      color: 'from-primary-1/10 to-primary-2/10'
    },
    {
      type: 'Comercial',
      icon: '🏢',
      applications: [
        'Tiendas y locales',
        'Oficinas corporativas',
        'Centros comerciales',
        'Restaurantes y bares',
        'Bancos y entidades'
      ],
      color: 'from-primary-2/10 to-primary-3/10'
    },
    {
      type: 'Industrial',
      icon: '🏭',
      applications: [
        'Plantas de producción',
        'Bodegas y almacenes',
        'Zonas de carga',
        'Perímetros industriales',
        'Control de accesos'
      ],
      color: 'from-primary-3/10 to-primary-4/10'
    }
  ];

  const cameraTypes = [
    {
      name: 'Cámaras Domo',
      description: 'Diseño discreto ideal para interiores. Resistente a vandalismo y con ángulo de visión amplio.',
      image: '🎯',
      specs: ['360° rotación', 'Vandal-proof', 'Interior/Exterior']
    },
    {
      name: 'Cámaras Bullet',
      description: 'Perfectas para exteriores con largo alcance. Visión nocturna potente y resistentes al clima.',
      image: '📹',
      specs: ['Largo alcance', 'IP66/IP67', 'IR hasta 40m']
    },
    {
      name: 'Cámaras PTZ',
      description: 'Control total con movimiento panorámico, inclinación y zoom. Ideales para áreas extensas.',
      image: '🎬',
      specs: ['Pan/Tilt/Zoom', 'Tracking automático', 'Zoom óptico']
    },
    {
      name: 'Cámaras IP',
      description: 'Tecnología de red avanzada con instalación simplificada y calidad de imagen superior.',
      image: '🌐',
      specs: ['PoE disponible', 'Hasta 4K', 'Análisis IA']
    }
  ];

  const process = [
    { step: '1', title: 'Análisis del Sitio', description: 'Evaluamos tu propiedad para determinar puntos estratégicos de cobertura' },
    { step: '2', title: 'Diseño Personalizado', description: 'Creamos un diseño adaptado a tus necesidades específicas de seguridad' },
    { step: '3', title: 'Instalación Profesional', description: 'Montaje de equipos, cableado estructurado y configuración completa' },
    { step: '4', title: 'Configuración y Pruebas', description: 'Ajustamos ángulos, calidad de imagen y funciones de detección' },
    { step: '5', title: 'Capacitación', description: 'Te enseñamos a usar el sistema desde tus dispositivos móviles' },
    { step: '6', title: 'Soporte Continuo', description: 'Mantenimiento preventivo y asistencia técnica permanente' }
  ];

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <ServiceHero
          title="Sistemas de Videovigilancia CCTV"
          description="Protege lo que más valoras con tecnología de seguridad de última generación"
          videoSrc="/videos/cctv-hero-background.mp4"
          icon="📹"
        />

        {/* Intro Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-3 mb-6 text-center">
                Vigila Tu Propiedad Desde Cualquier Lugar
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                ¿Deseas tener control total sobre la seguridad de tu hogar, negocio o industria? 
                En <strong>Grupo Leovoltaje</strong> te ofrecemos soluciones completas de videovigilancia 
                CCTV que te permiten monitorear tu propiedad en tiempo real, desde cualquier lugar del mundo.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                Nuestros sistemas incluyen cámaras de alta definición con visión nocturna, grabación continua, 
                detección inteligente de movimiento y acceso remoto desde tu smartphone o tablet. 
                Además, te brindamos capacitación completa para que puedas usar tu sistema de forma intuitiva 
                y aprovechar todas sus funcionalidades desde el primer día.
              </p>

              <div className="bg-gradient-to-br from-primary-1/5 to-primary-3/5 rounded-2xl p-6 sm:p-8 border border-primary-1/20">
                <h3 className="text-xl font-bold text-primary-3 mb-4 flex items-center gap-3">
                  <span className="text-2xl">🛡️</span>
                  Tranquilidad Garantizada
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Con nuestros sistemas CCTV, dormirás tranquilo sabiendo que tu propiedad está protegida 
                  las 24 horas. Recibe alertas instantáneas en tu celular ante cualquier evento sospechoso 
                  y revisa las grabaciones cuando lo necesites. La seguridad de tu familia y tus bienes 
                  no tiene precio, y nosotros te ayudamos a protegerlos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-3 text-center mb-12">
              Características de Nuestros Sistemas
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                >
                  <div className="text-5xl mb-4 text-center">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-primary-3 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions by Type */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-3 text-center mb-12">
              Soluciones Para Cada Necesidad
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${solution.color} rounded-2xl p-6 lg:p-8 border border-primary-1/20`}
                >
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-3">{solution.icon}</div>
                    <h3 className="text-2xl font-bold text-primary-3">{solution.type}</h3>
                  </div>
                  <ul className="space-y-3">
                    {solution.applications.map((app, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <span className="text-primary-3 font-bold">✓</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Camera Types */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-3 text-center mb-12">
              Tipos de Cámaras Disponibles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {cameraTypes.map((camera, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">
                    {camera.image}
                  </div>
                  <h3 className="text-lg font-bold text-primary-3 mb-3 text-center">
                    {camera.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {camera.description}
                  </p>
                  <div className="space-y-2">
                    {camera.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-primary-3 rounded-full"></span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-3 text-center mb-12">
              Proceso de Instalación
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {process.map((item, index) => (
                  <div 
                    key={index}
                    className="flex gap-4 sm:gap-6 items-start bg-gradient-to-r from-primary-1/5 to-transparent rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-primary-3 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-primary-3 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-3 text-center mb-12">
              Instalaciones Realizadas
            </h2>
            
            <ImageGallery 
              basePath="/services-images/cctv"
              count={6}
              altPrefix="Sistema CCTV instalado"
            />
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-5 to-primary-4 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                ¿Por Qué Elegir Nuestros Sistemas CCTV?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: '⚙️', title: 'Equipos Premium', desc: 'Marcas reconocidas con garantía' },
                { icon: '👨‍🔧', title: 'Instaladores Expertos', desc: 'Personal certificado y capacitado' },
                { icon: '📞', title: 'Soporte 24/7', desc: 'Asistencia técnica permanente' },
                { icon: '💰', title: 'Mejor Precio', desc: 'Cotizaciones competitivas sin comprometer calidad' }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                    <div className="text-5xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-3 mb-6">
              Protege Tu Propiedad Hoy Mismo
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Recibe una cotización personalizada y descubre cómo podemos mejorar la seguridad de tu espacio
            </p>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hola, estoy interesado en instalar un sistema de CCTV')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all transform hover:scale-105 shadow-2xl"
            >
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Solicitar Cotización por WhatsApp</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}