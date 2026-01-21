import { Metadata } from 'next';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import ServiceHero from '@/app/components/sections/ServiceHero';
import CloudinaryGallery from '@/app/components/sections/CloudinaryGallery';
import { COMPANY_INFO } from '@/app/lib/constants';
import { getHeroVideoUrl } from '@/app/lib/cloudinary-config';
import { 
  Zap, 
  Battery, 
  LayoutGrid, 
  Shield, 
  Wrench, 
  TrendingUp,
  Activity,
  Settings,
  CheckCircle2,
  AlertTriangle,
  Camera,
  Gauge,
  FlaskConical,
  Cable,
  Earth,
  BarChart3,
  ClipboardCheck,
  Award,
  Clock,
  Users,
  Factory,
  Target,
  ArrowRight,
  MessageCircle,
  Sparkles,
  FileCheck,
  HardHat,
  Radio
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mantenimiento Eléctrico Preventivo, Correctivo y Predictivo | Subestaciones y Transformadores',
  description: 'Mantenimiento preventivo y correctivo de subestaciones, transformadores y tableros de distribución. Personal certificado y equipos especializados en Colombia.',
};

export default function MantenimientoPage() {
  const mainServices = [
    {
      title: 'Subestaciones Eléctricas',
      description: 'Mantenimiento integral de subestaciones con equipos especializados y personal altamente calificado para garantizar operación continua y segura.',
      icon: Zap,
      gradient: 'from-primary-4 to-blue-800',
      services: [
        'Inspección termográfica de celdas',
        'Inspección de barrajes y conexiones',
        'Medición de resistencia de aislamiento',
        'Pruebas de rigidez dieléctrica',
        'Ajuste de torque en conexiones',
        'Pruebas de operación de interruptores',
        'Revisión de sistemas de puesta a tierra'
      ],
      benefits: [
        'Prevención de fallas y paros no programados',
        'Extensión de vida útil de equipos',
        'Cumplimiento normativo RETIE',
        'Optimización de eficiencia energética'
      ]
    },
    {
      title: 'Transformadores Eléctricos',
      description: 'Servicio especializado de mantenimiento para transformadores de distribución y potencia, evitando fallas costosas y garantizando su correcto funcionamiento.',
      icon: Battery,
      gradient: 'from-primary-5 to-primary-3',
      services: [
        'Análisis físico-químico de aceite dieléctrico',
        'Termografía de conexiones y devanados',
        'Medición de resistencia de aislamiento',
        'Prueba de relación de transformación',
        'Limpieza de tanque y radiadores',
        'Cambio o filtrado de aceite',
        'Revisión de sistema de refrigeración',
        'Inspección de bujes y bushings'
      ],
      benefits: [
        'Detección temprana de deterioro',
        'Prevención de cortocircuitos internos',
        'Ahorro en costos de reparación mayor',
        'Continuidad del servicio eléctrico'
      ]
    },
    {
      title: 'Tableros de Distribución',
      description: 'Mantenimiento preventivo y correctivo de tableros de distribución para proteger circuitos, máquinas y equipos, evitando daños y paros de producción.',
      icon: LayoutGrid,
      gradient: 'from-primary-3 to-primary-4',
      services: [
        'Inspección de conexiones',
        'Limpieza profunda de componentes',
        'Ajuste de torque en bornes',
        'Medición de corrientes de carga',
        'Verificación de neutros y tierras',
        'Verificación de conductores',
        'Etiquetado y documentación'
      ],
      benefits: [
        'Seguridad para personal y equipos',
        'Reducción de riesgo de incendio',
        'Optimización de distribución de cargas',
        'Cumplimiento de normativas industriales'
      ]
    }
  ];

  const maintenanceTypes = [
    {
      type: 'Preventivo',
      icon: Shield,
      color: 'green',
      bgColor: 'bg-green-600',
      description: 'Programa planificado de inspecciones y actividades para prevenir fallas antes de que ocurran.',
      frequency: 'Programado periódicamente',
      activities: [
        'Inspecciones visuales y térmicas',
        'Limpieza y lubricación',
        'Mediciones eléctricas',
        'Ajustes y calibraciones',
        'Reemplazo de partes por desgaste',
        'Pruebas de funcionamiento'
      ],
      advantages: [
        'Reduce costos de reparación',
        'Aumenta vida útil de equipos',
        'Minimiza paros no programados',
        'Mejora eficiencia operativa'
      ]
    },
    {
      type: 'Correctivo',
      icon: Wrench,
      color: 'red',
      bgColor: 'bg-red-600',
      description: 'Intervención técnica especializada para reparar fallas y restaurar el funcionamiento normal de equipos.',
      frequency: 'Según necesidad',
      activities: [
        'Diagnóstico de fallas',
        'Reemplazo de componentes dañados',
        'Reparación de averías',
        'Pruebas post-reparación',
        'Análisis de causa raíz',
        'Documentación de intervención'
      ],
      advantages: [
        'Respuesta rápida ante emergencias',
        'Solución definitiva de problemas',
        'Restablecimiento del servicio',
        'Prevención de fallas recurrentes'
      ]
    },
    {
      type: 'Predictivo',
      icon: TrendingUp,
      color: 'blue',
      bgColor: 'bg-blue-600',
      description: 'Monitoreo continuo con tecnología avanzada para detectar anomalías antes de que se conviertan en fallas.',
      frequency: 'Monitoreo continuo',
      activities: [
        'Análisis de tendencias',
        'Monitoreo de vibraciones',
        'Análisis termográfico detallado',
        'Reportes de condición'
      ],
      advantages: [
        'Máxima precisión diagnóstica',
        'Planificación óptima de paros',
        'Reducción de costos operativos',
        'Cero fallas inesperadas'
      ]
    }
  ];

  const equipment = [
    { name: 'Cámara Termográfica', icon: Camera, use: 'Detección de puntos calientes', color: 'text-red-600' },
    { name: 'Megóhmetro', icon: Gauge, use: 'Medición de aislamiento', color: 'text-blue-600' },
    { name: 'Analizador de Aceite', icon: FlaskConical, use: 'Calidad dieléctrica', color: 'text-yellow-600' },
    { name: 'Pinza Amperimétrica', icon: Activity, use: 'Medición de corrientes', color: 'text-green-600' },
    { name: 'Telurómetro', icon: Earth, use: 'Resistencia de puesta a tierra', color: 'text-orange-600' },
    { name: 'Analizador de Redes', icon: BarChart3, use: 'Calidad de energía', color: 'text-purple-600' }
  ];

  const certifications = [
    { cert: 'RETIE', description: 'Reglamento técnico de instalaciones eléctricas', icon: FileCheck },
    { cert: 'NTC 2050', description: 'Norma Técnica Colombiana', icon: ClipboardCheck },
    { cert: 'Trabajo en Alturas', description: 'Personal certificado', icon: HardHat },
    { cert: 'Redes Energizadas', description: 'Técnicas especializadas', icon: Radio }
  ];

  const videoCloudinary = getHeroVideoUrl('mantenimiento');

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <ServiceHero
          title="Mantenimiento Eléctrico  Preventivo y Correctivo"
          description="Mantén tus sistemas eléctricos operando con máxima eficiencia y seguridad"
          videoSrc={videoCloudinary}

        />

        {/* Intro Industrial */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
          {/* Patrón de fondo técnico */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, #000 50px, #000 51px)',
            }}></div>
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, #000 50px, #000 51px)',
            }}></div>
          </div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Badge profesional */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-shadow">
                  <Settings className="w-5 h-5" />
                  <span>PERSONAL ALTAMENTE CALIFICADO</span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-primary-3 mb-8">
                Mantenimiento Preventivo y Correctivo de Alta Precisión
              </h2>

              <div className="text-center mb-12">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                  En <strong className="text-primary-3">Grupo Leovoltaje</strong> te brindamos la mejor alternativa 
                  de mantenimiento eléctrico para tu hogar, comercio o industria con equipos especializados y 
                  técnicos certificados con años de experiencia.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Evita fallas costosas, paros de producción y riesgos de seguridad con nuestros programas 
                  de mantenimiento diseñados específicamente para las necesidades de tu industria.
                </p>
              </div>

              {/* Stats mejorados */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Activity, stat: '+60', label: 'Mantenimientos anuales', color: 'text-blue-600', bgColor: 'bg-blue-50' },
                  { icon: Factory, stat: '99.8%', label: 'Uptime garantizado', color: 'text-green-600', bgColor: 'bg-green-50' },
                  { icon: Users, stat: '20+', label: 'Técnicos certificados', color: 'text-orange-600', bgColor: 'bg-orange-50' },
                  { icon: Award, stat: '100%', label: 'Cumplimiento RETIE', color: 'text-purple-600', bgColor: 'bg-purple-50' }
                ].map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={i} className="group text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-3/50 hover:-translate-y-1">
                      <div className={`inline-flex p-3 ${item.bgColor} rounded-xl mb-3 group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`w-8 h-8 ${item.color}`} strokeWidth={2} />
                      </div>
                      <div className="text-3xl font-bold text-primary-3 mb-1">{item.stat}</div>
                      <p className="text-sm text-gray-600 font-medium">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Main Services - Diseño industrial mejorado */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary-1/10 text-primary-3 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Target className="w-4 h-4" />
                <span>SERVICIOS ESPECIALIZADOS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Nuestros Servicios Especializados
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Mantenimiento integral para equipos críticos de su operación
              </p>
            </div>

            <div className="space-y-12 max-w-6xl mx-auto">
              {mainServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200 hover:border-primary-3 transition-all duration-500 hover:shadow-2xl"
                  >
                    {/* Header con gradiente */}
                    <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full -ml-24 -mb-24"></div>
                      
                      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl group-hover:scale-110 transition-transform">
                          <IconComponent className="w-16 h-16" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                          <p className="text-lg text-white/90 leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Services list */}
                        <div>
                          <h4 className="font-bold text-xl text-primary-3 mb-4 flex items-center gap-2">
                            <Settings className="w-5 h-5" />
                            Actividades Incluidas
                          </h4>
                          <ul className="space-y-3">
                            {service.services.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-700 group/item">
                                <CheckCircle2 className="w-5 h-5 text-primary-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" strokeWidth={2} />
                                <span className="text-sm leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="font-bold text-xl text-primary-3 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            Beneficios Clave
                          </h4>
                          <div className="space-y-4">
                            {service.benefits.map((benefit, i) => (
                              <div key={i} className="group/benefit bg-gradient-to-r from-primary-1/10 via-primary-2/10 to-transparent rounded-xl p-4 border-l-4 border-primary-3 hover:shadow-md transition-all">
                                <div className="flex items-start gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0 group-hover/benefit:scale-110 transition-transform" strokeWidth={2.5} />
                                  <p className="text-gray-700 font-medium flex-1">{benefit}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Maintenance Types */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Activity className="w-4 h-4" />
                <span>ESTRATEGIAS DE MANTENIMIENTO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Tipos de Mantenimiento
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Estrategias complementarias para máxima confiabilidad operacional
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {maintenanceTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-primary-3 hover:-translate-y-2"
                  >
                    {/* Header */}
                    <div className={`${type.bgColor} p-6 text-white text-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      <div className="relative">
                        <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-3 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-12 h-12" strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Mantenimiento {type.type}</h3>
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{type.frequency}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                        {type.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-bold text-sm text-gray-700 mb-3 flex items-center gap-2">
                          <ClipboardCheck className="w-4 h-4" />
                          Actividades:
                        </h4>
                        <ul className="space-y-2">
                          {type.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className={`w-1.5 h-1.5 rounded-full ${type.bgColor} mt-1.5 flex-shrink-0`}></div>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-sm text-gray-700 mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Ventajas:
                        </h4>
                        <div className="space-y-2">
                          {type.advantages.map((adv, i) => (
                            <div key={i} className={`text-xs bg-${type.color}-50 text-${type.color}-800 px-3 py-2 rounded-lg flex items-center gap-2 border border-${type.color}-100`}>
                              <CheckCircle2 className="w-3 h-3 flex-shrink-0" strokeWidth={2.5} />
                              <span>{adv}</span>
                            </div>
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

        {/* Equipment & Technology */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Settings className="w-4 h-4" />
                <span>HERRAMIENTA ESPECIALIZADA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Equipos y Tecnología
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Herramientas especializadas para diagnósticos precisos y mantenimiento efectivo
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {equipment.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-primary-5/20 hover:-translate-y-1"
                  >
                    <div className="inline-flex p-4 bg-white rounded-xl shadow-md mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className={`w-10 h-10 ${item.color}`} strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-lg text-primary-3 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.use}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Award className="w-4 h-4" />
                <span>CERTIFICACIONES VIGENTES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/95 mb-4">
                Certificaciones y Cumplimiento
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {certifications.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="group bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-green-500 hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <IconComponent className="w-8 h-8" strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-lg text-primary-3 mb-2">{item.cert}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CloudinaryGallery
          serviceSlug="mantenimiento"
          title="Proyectos de Mantenimiento Realizados"
        />

        {/* CTA */}
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-primary-5 via-primary-4 to-primary-3 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="relative container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center gap-4 mb-6">
                <div className="animate-bounce">
                  <Wrench className="w-16 h-16" strokeWidth={1.5} />
                </div>
                <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>
                  <Zap className="w-16 h-16" strokeWidth={1.5} />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Programa Tu Mantenimiento Hoy
              </h2>
              <p className="text-lg sm:text-xl text-gray-100 mb-10 leading-relaxed">
                No esperes a que ocurra una falla. Contacta a nuestro equipo técnico y 
                agenda una inspección preventiva o solicita una cotización personalizada.
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hola, necesito programar mantenimiento eléctrico')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-primary-3 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
              >
                <MessageCircle className="w-7 h-7 text-green-600 group-hover:rotate-12 transition-transform" strokeWidth={2} />
                <span>Contactar Área Técnica</span>
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