import { Metadata } from 'next';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import ServiceHero from '@/app/components/sections/ServiceHero';
import ImageGallery from '@/app/components/ui/ImageGallery';
import { COMPANY_INFO } from '@/app/lib/constants';

export const metadata: Metadata = {
  title: 'Mantenimiento Eléctrico Industrial | Subestaciones y Transformadores',
  description: 'Mantenimiento preventivo y correctivo de subestaciones, transformadores y tableros industriales. Personal certificado y equipos especializados en Colombia.',
};

export default function MantenimientoPage() {
  const mainServices = [
    {
      title: 'Subestaciones Eléctricas',
      description: 'Mantenimiento integral de subestaciones con equipos especializados y personal altamente calificado para garantizar operación continua y segura.',
      icon: '⚡',
      gradient: 'from-blue-600 to-cyan-600',
      services: [
        'Inspección termográfica de celdas',
        'Limpieza de barrajes y conexiones',
        'Medición de resistencia de aislamiento',
        'Pruebas de rigidez dieléctrica',
        'Ajuste de torque en conexiones',
        'Calibración de relés de protección',
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
      icon: '🔋',
      gradient: 'from-orange-600 to-red-600',
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
      title: 'Tableros de Distribución Industrial',
      description: 'Mantenimiento preventivo y correctivo de tableros industriales para proteger circuitos, máquinas y equipos, evitando daños y paros de producción.',
      icon: '📊',
      gradient: 'from-purple-600 to-pink-600',
      services: [
        'Inspección termográfica de conexiones',
        'Limpieza profunda de componentes',
        'Ajuste de torque en bornes',
        'Pruebas de disparo de protecciones',
        'Medición de corrientes de carga',
        'Verificación de neutros y tierras',
        'Reapriete de conductores',
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
      icon: '🛡️',
      color: 'green',
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
      icon: '🔧',
      color: 'red',
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
      icon: '📈',
      color: 'blue',
      description: 'Monitoreo continuo con tecnología avanzada para detectar anomalías antes de que se conviertan en fallas.',
      frequency: 'Monitoreo continuo',
      activities: [
        'Análisis de tendencias',
        'Monitoreo de vibraciones',
        'Termografía infrarroja',
        'Análisis de aceites',
        'Ultrasonido industrial',
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
    { name: 'Cámara Termográfica', icon: '📸', use: 'Detección de puntos calientes' },
    { name: 'Megóhmetro', icon: '⚡', use: 'Medición de aislamiento' },
    { name: 'Analizador de Aceite', icon: '🧪', use: 'Calidad dieléctrica' },
    { name: 'Probador de Relés', icon: '🔌', use: 'Calibración de protecciones' },
    { name: 'Medidor de Tierra', icon: '🌍', use: 'Resistencia de puesta a tierra' },
    { name: 'Analizador de Redes', icon: '📊', use: 'Calidad de energía' }
  ];

  const certifications = [
    { cert: 'RETIE', description: 'Cumplimiento normativo colombiano' },
    { cert: 'ISO 9001', description: 'Gestión de calidad certificada' },
    { cert: 'Trabajo en Alturas', description: 'Personal certificado' },
    { cert: 'Trabajo Energizado', description: 'Técnicas especializadas' }
  ];

  const emergencyResponse = [
    { time: '< 2 horas', service: 'Respuesta en Bogotá y área metropolitana' },
    { time: '24/7', service: 'Línea de emergencias activa' },
    { time: '< 24 horas', service: 'Diagnóstico inicial completado' },
    { time: '< 48 horas', service: 'Solución implementada (mayoría de casos)' }
  ];

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <ServiceHero
          title="Mantenimiento Eléctrico Industrial"
          description="Mantén tus sistemas eléctricos operando con máxima eficiencia y seguridad"
          videoSrc="/videos/mantenimiento-hero-background.mp4"
          icon="🔧"
        />

        {/* Intro Industrial */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Badge profesional */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  <span className="text-xl">⚙️</span>
                  <span>PERSONAL ALTAMENTE CALIFICADO</span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-primary-3 mb-8">
                Mantenimiento Preventivo y Correctivo de Alta Precisión
              </h2>

              <div className="text-center mb-12">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                  En <strong className="text-primary-3">Grupo Leovoltaje</strong> te brindamos la mejor alternativa 
                  de mantenimiento eléctrico industrial con equipos especializados de última generación y 
                  técnicos certificados con años de experiencia.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Evita fallas costosas, paros de producción y riesgos de seguridad con nuestros programas 
                  de mantenimiento diseñados específicamente para las necesidades de tu industria.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: '⚡', stat: '+500', label: 'Mantenimientos anuales' },
                  { icon: '🏭', stat: '99.8%', label: 'Uptime garantizado' },
                  { icon: '👨‍🔧', stat: '20+', label: 'Técnicos certificados' },
                  { icon: '📋', stat: '100%', label: 'Cumplimiento RETIE' }
                ].map((item, i) => (
                  <div key={i} className="text-center bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <div className="text-3xl font-bold text-primary-3 mb-1">{item.stat}</div>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Services - Diseño industrial */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Nuestros Servicios Especializados
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Mantenimiento integral para equipos críticos de su operación
              </p>
            </div>

            <div className="space-y-12 max-w-7xl mx-auto">
              {mainServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200 hover:border-primary-3 transition-all"
                >
                  {/* Header con gradiente */}
                  <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white`}>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className="text-7xl">{service.icon}</div>
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
                          <span className="text-2xl">🔧</span>
                          Actividades Incluidas
                        </h4>
                        <ul className="space-y-3">
                          {service.services.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                              <span className="text-primary-3 mt-1 flex-shrink-0">▸</span>
                              <span className="text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-bold text-xl text-primary-3 mb-4 flex items-center gap-2">
                          <span className="text-2xl">✓</span>
                          Beneficios Clave
                        </h4>
                        <div className="space-y-4">
                          {service.benefits.map((benefit, i) => (
                            <div key={i} className="bg-gradient-to-r from-primary-1/10 to-transparent rounded-lg p-4 border-l-4 border-primary-3">
                              <p className="text-gray-700 font-medium">{benefit}</p>
                            </div>
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

        {/* Maintenance Types */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Tipos de Mantenimiento
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Estrategias complementarias para máxima confiabilidad operacional
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {maintenanceTypes.map((type, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  {/* Header */}
                  <div className={`bg-${type.color}-600 p-6 text-white text-center`}>
                    <div className="text-6xl mb-3">{type.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">Mantenimiento {type.type}</h3>
                    <p className="text-sm opacity-90">{type.frequency}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                      {type.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-bold text-sm text-gray-700 mb-3">Actividades:</h4>
                      <ul className="space-y-2">
                        {type.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className={`text-${type.color}-600 mt-0.5`}>•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm text-gray-700 mb-3">Ventajas:</h4>
                      <div className="space-y-2">
                        {type.advantages.map((adv, i) => (
                          <div key={i} className={`text-xs bg-${type.color}-50 text-${type.color}-800 px-3 py-2 rounded-lg flex items-center gap-2`}>
                            <span>✓</span>
                            <span>{adv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment & Technology */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Equipos y Tecnología
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Herramientas especializadas de última generación
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {equipment.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-primary-1/5 to-primary-3/5 rounded-xl p-6 text-center hover:shadow-lg transition-all"
                >
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-lg text-primary-3 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.use}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Response */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">🚨</div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Servicio de Emergencia 24/7
                </h2>
                <p className="text-xl text-red-100">
                  Respuesta rápida cuando más lo necesitas
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {emergencyResponse.map((item, index) => (
                  <div key={index} className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6">
                    <div className="text-4xl font-bold mb-2">{item.time}</div>
                    <p className="text-sm text-red-100">{item.service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Certificaciones y Cumplimiento
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {certifications.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-primary-3 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    ✓
                  </div>
                  <h3 className="font-bold text-lg text-primary-3 mb-2">{item.cert}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 text-center mb-12">
              Trabajos Realizados
            </h2>
            
            <ImageGallery 
              basePath="/services-images/mantenimiento"
              count={6}
              altPrefix="Mantenimiento eléctrico realizado"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-primary-5 via-primary-3 to-primary-1 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl mb-6">🔧⚡</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Programa Tu Mantenimiento Hoy
              </h2>
              <p className="text-lg sm:text-xl text-gray-100 mb-10 leading-relaxed">
                No esperes a que ocurra una falla. Contacta a nuestro equipo técnico y 
                agenda una inspección preventiva o solicita atención de emergencia
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hola, necesito programar mantenimiento eléctrico industrial')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-primary-3 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
              >
                <svg className="w-7 h-7 text-green-600 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Contactar Área Técnica</span>
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