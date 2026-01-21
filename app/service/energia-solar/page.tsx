import { Metadata } from 'next';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import ServiceHero from '@/app/components/sections/ServiceHero';
import CloudinaryGallery from '@/app/components/sections/CloudinaryGallery';
import { COMPANY_INFO } from '@/app/lib/constants';
import { getHeroVideoUrl } from '@/app/lib/cloudinary-config';
import { 
  DollarSign, 
  Leaf, 
  Zap, 
  TrendingUp, 
  Sun, 
  RefreshCw, 
  Wrench, 
  Battery, 
  CheckCircle2,
  Plug,
  Home,
  TreePine,
  Globe,
  Recycle,
  ClipboardCheck,
  Palette,
  FileText,
  Hammer,
  HelpCircle,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Award,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Energía Solar Fotovoltaica | Paneles Solares Colombia',
  description: 'Instalación de sistemas de energía solar fotovoltaica en Colombia. Reduce tu factura de luz hasta 95% con paneles solares de última generación. Energía limpia y renovable.',
};

export default function EnergiaSolarPage() {
  const benefits = [
    {
      title: 'Ahorro del 60-95%',
      description: 'Reduce drásticamente tu factura eléctrica. La inversión se recupera en 3-6 años y disfrutas de energía prácticamente gratuita por más de 25 años.',
      icon: DollarSign,
      stat: 'Hasta 95% de ahorro',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Energía Limpia',
      description: 'Contribuye al planeta reduciendo tu huella de carbono. Cada panel solar evita toneladas de CO₂ al año.',
      icon: Leaf,
      stat: 'Cero emisiones',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Independencia Energética',
      description: 'Libérate de los aumentos constantes en las tarifas eléctricas. Genera tu propia energía y protege tu economía.',
      icon: Zap,
      stat: 'Autosuficiencia',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Valoriza tu Propiedad',
      description: 'Una vivienda o negocio con sistema solar aumenta su valor comercial hasta un 20% en el mercado.',
      icon: TrendingUp,
      stat: '+20% valor',
      gradient: 'from-blue-400 to-cyan-500'
    }
  ];

  const systemComponents = [
    {
      name: 'Paneles Solares',
      description: 'Módulos fotovoltaicos de alta eficiencia que convierten la luz solar en electricidad. Utilizamos marcas premium con garantía de 25 años.',
      icon: Sun,
      specs: [
        'Eficiencia: 18-22%',
        'Potencia: 450-550W por panel',
        'Tecnología monocristalina',
        'Resistentes a granizo y viento',
        'Garantía de producción 25 años'
      ],
      color: 'border-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      name: 'Inversor Solar',
      description: 'Convierte la corriente continua (DC) de los paneles en corriente alterna (AC) utilizable en tu hogar o negocio.',
      icon: RefreshCw,
      specs: [
        'Eficiencia: 97-99%',
        'Monitoreo WiFi en tiempo real',
        'Protecciones integradas',
        'Compatible con baterías',
        'Garantía de 10 años'
      ],
      color: 'border-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Sistema de Montaje',
      description: 'Estructura robusta en aluminio y acero inoxidable diseñada para soportar condiciones climáticas extremas durante décadas.',
      icon: Wrench,
      specs: [
        'Material anticorrosivo',
        'Diseño aerodinámico',
        'Instalación en techo o suelo',
        'Ángulo optimizado',
        'Garantía estructural 15 años'
      ],
      color: 'border-gray-500',
      bgColor: 'bg-gray-50'
    },
    {
      name: 'Baterías',
      description: 'Almacenamiento de energía para uso nocturno o respaldo durante cortes de luz. Sistema híbrido on-grid/off-grid.',
      icon: Battery,
      specs: [
        'Tecnología litio LiFePO4',
        'Capacidad escalable',
        'Ciclos de vida: +6000',
        'Descarga profunda segura',
        'Garantía de 10 años'
      ],
      color: 'border-green-500',
      bgColor: 'bg-green-50'
    }
  ];

  const solarTypes = [
    {
      type: 'Sistema On-Grid',
      subtitle: 'Conectado a la red',
      description: 'El sistema más común y económico. Se conecta a la red eléctrica convencional, vendiendo excedentes y usando la red como respaldo.',
      icon: Plug,
      advantages: [
        'Menor inversión inicial',
        'No requiere baterías',
        'Venta de excedentes a la red',
        'ROI más rápido (3-5 años)',
        'Mantenimiento mínimo'
      ],
      idealFor: 'Viviendas y negocios con servicio eléctrico estable',
      gradient: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500'
    },
    {
      type: 'Sistema Off-Grid',
      subtitle: 'Autónomo aislado',
      description: 'Sistema completamente independiente con baterías. Ideal para zonas rurales sin acceso a la red eléctrica.',
      icon: Home,
      advantages: [
        'Total independencia energética',
        'Funciona sin red eléctrica',
        'Respaldo 24/7',
        'Ideal para zonas remotas',
        'No depende de apagones'
      ],
      idealFor: 'Fincas, zonas rurales, cabañas',
      gradient: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500'
    },
    {
      type: 'Sistema Híbrido',
      subtitle: 'Lo mejor de ambos',
      description: 'Combina conexión a red con respaldo de baterías. Máxima flexibilidad y seguridad energética.',
      icon: Sparkles,
      advantages: [
        'Energía continua garantizada',
        'Respaldo en apagones',
        'Optimización inteligente',
        'Venta de excedentes',
        'Máxima eficiencia'
      ],
      idealFor: 'Negocios críticos, clínicas, data centers',
      gradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500'
    }
  ];

  const installationProcess = [
    {
      phase: 'Evaluación Inicial',
      description: 'Análisis de consumo eléctrico, visita técnica al sitio, medición de radiación solar y evaluación estructural del techo.',
      duration: '1-2 días',
      icon: ClipboardCheck,
      deliverables: ['Reporte de viabilidad', 'Consumo histórico', 'Análisis de sombreado']
    },
    {
      phase: 'Diseño del Sistema',
      description: 'Dimensionamiento óptimo del sistema, selección de componentes, diseño eléctrico y simulación de producción anual.',
      duration: '3-5 días',
      icon: Palette,
      deliverables: ['Planos eléctricos', 'Memoria de cálculo', 'Propuesta económica']
    },
    {
      phase: 'Trámites y Permisos',
      description: 'Gestión de permisos ante la empresa de energía, certificaciones RETIE y documentación legal requerida.',
      duration: '2-4 semanas',
      icon: FileText,
      deliverables: ['Permisos aprobados', 'Contrato de conexión', 'Certificaciones']
    },
    {
      phase: 'Instalación',
      description: 'Montaje de estructura, instalación de paneles, cableado, conexión del inversor y puesta en marcha del sistema.',
      duration: '2-5 días',
      icon: Hammer,
      deliverables: ['Sistema instalado', 'Pruebas de funcionamiento', 'Capacitación']
    },
    {
      phase: 'Conexión y Activación',
      description: 'Inspección final de la empresa eléctrica, instalación de medidor bidireccional y activación oficial del sistema.',
      duration: '1-2 semanas',
      icon: CheckCircle2,
      deliverables: ['Sistema operativo', 'Medidor bidireccional', 'Certificados finales']
    }
  ];

  const environmentalImpact = [
    { metric: '4 toneladas', description: 'CO₂ evitado por año', icon: Globe },
    { metric: '100 árboles', description: 'Equivalente plantado', icon: TreePine },
    { metric: '25+ años', description: 'De energía limpia', icon: Clock },
    { metric: '95%', description: 'Reciclable al final de vida', icon: Recycle }
  ];

  const faqs = [
    {
      q: '¿Cuánto cuesta un sistema solar?',
      a: 'Depende del consumo y tamaño del sistema. Sistemas residenciales típicos (3-5 kW) varían según las necesidades y características del proyecto. La inversión se recupera en 3-6 años.'
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

  const videoCloudinary = getHeroVideoUrl('energia-solar');

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <ServiceHero
          title="Energía Solar Fotovoltaica"
          description="Genera tu propia energía limpia y ahorra hasta 95% en tu factura de luz"
          videoSrc={videoCloudinary}
        />

        {/* Intro section con mensaje ecológico */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-green-50 to-white overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Badge ecológico */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-shadow">
                  <Leaf className="w-5 h-5" />
                  <span>ENERGÍA 100% RENOVABLE Y SOSTENIBLE</span>
                </div>
              </div>

              <h2 className="z-10 text-3xl sm:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent mb-8">
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
                {environmentalImpact.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="group text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl group-hover:scale-110 transition-transform">
                          <IconComponent className="w-8 h-8 text-green-600" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-green-600 mb-2">{item.metric}</div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits - Diseño impactante */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Award className="w-4 h-4" />
                <span>BENEFICIOS COMPROBADOS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Beneficios de la Energía Solar
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Inversión inteligente con retornos inmediatos y duraderos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  >
                    {/* Header con gradiente */}
                    <div className={`bg-gradient-to-br ${benefit.gradient} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                      
                      <div className="relative flex items-center justify-between mb-4">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl group-hover:scale-110 transition-transform">
                          <IconComponent className="w-10 h-10" strokeWidth={2} />
                        </div>
                        <div className="text-right">
                          <div className="text-sm opacity-90 font-medium">Beneficio</div>
                          <div className="text-2xl font-bold">{benefit.stat}</div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold relative">{benefit.title}</h3>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* System Components */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Shield className="w-4 h-4" />
                <span>TECNOLOGÍA PREMIUM</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Componentes del Sistema Solar
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tecnología de última generación para máxima eficiencia y durabilidad
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {systemComponents.map((component, index) => {
                const IconComponent = component.icon;
                return (
                  <div 
                    key={index}
                    className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 ${component.color} hover:-translate-y-1`}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-4 ${component.bgColor} rounded-xl group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`w-8 h-8 ${component.color.replace('border-', 'text-')}`} strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-primary-3 mb-2">{component.name}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{component.description}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-bold text-sm text-gray-700 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Especificaciones:
                      </h4>
                      {component.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700 pl-6">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Types of Systems */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Zap className="w-4 h-4" />
                <span>SOLUCIONES PERSONALIZADAS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Tipos de Sistemas Solares
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Encuentra la solución perfecta para tus necesidades energéticas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {solarTypes.map((system, index) => {
                const IconComponent = system.icon;
                return (
                  <div 
                    key={index}
                    className={`group bg-gradient-to-br ${system.gradient} rounded-3xl p-8 border-2 ${system.borderColor} hover:border-opacity-100 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-500`}
                  >
                    <div className="text-center mb-6">
                      <div className="inline-flex p-5 bg-white rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className={`w-12 h-12 ${system.borderColor.replace('border-', 'text-')}`} strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-bold text-primary-3 mb-1">{system.type}</h3>
                      <p className="text-sm text-gray-600 italic font-medium">{system.subtitle}</p>
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed mb-6">{system.description}</p>

                    <div className="mb-6">
                      <h4 className="font-bold text-sm text-green-700 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Ventajas:
                      </h4>
                      <ul className="space-y-2">
                        {system.advantages.map((adv, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-300">
                      <p className="text-xs text-gray-600 flex items-start gap-2">
                        <Home className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span><strong>Ideal para:</strong> {system.idealFor}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-5 to-primary-4 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Clock className="w-4 h-4" />
                <span>PROCESO PROFESIONAL</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Proceso de Instalación
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                De la consulta inicial a la generación de energía limpia
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {installationProcess.map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all hover:scale-[1.02] duration-300"
                  >
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="relative w-16 h-16 bg-white text-primary-3 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <IconComponent className="w-8 h-8" strokeWidth={2} />
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold">{phase.phase}</h3>
                          <span className="inline-flex items-center gap-1 text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                            <Clock className="w-3 h-3" />
                            {phase.duration}
                          </span>
                        </div>

                        <p className="text-gray-200 mb-4 leading-relaxed">{phase.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {phase.deliverables.map((deliverable, i) => (
                            <span key={i} className="inline-flex items-center gap-1 text-xs bg-green-500/20 text-green-200 px-3 py-1 rounded-full border border-green-400/30">
                              <CheckCircle2 className="w-3 h-3" />
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <HelpCircle className="w-4 h-4" />
                <span>DUDAS FRECUENTES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Preguntas Frecuentes
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-green-300"
                >
                  <h3 className="text-xl font-bold text-primary-3 mb-3 flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg group-hover:scale-110 transition-transform">
                      <HelpCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="flex-1">{faq.q}</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-14">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CloudinaryGallery
          serviceSlug="energia-solar"
          title="Instalaciones de Energía Solar Realizadas"
        />

        {/* CTA Ecológico */}
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-green-600 via-emerald-600 to-cyan-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="relative container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="flex gap-4 animate-bounce">
                  <Globe className="w-16 h-16" strokeWidth={1.5} />
                  <Sun className="w-16 h-16" strokeWidth={1.5} />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ayuda al planeta con la Energía Limpia
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
                <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" strokeWidth={2} />
                <span>Solicitar Evaluación Gratuita</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}