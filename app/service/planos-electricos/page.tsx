import { Metadata } from 'next';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import ServiceHero from '@/app/components/sections/ServiceHero';
import ImageGallery from '@/app/components/ui/ImageGallery';
import { COMPANY_INFO } from '@/app/lib/constants';

export const metadata: Metadata = {
  title: 'Diseño de Planos Eléctricos y Memorias de Cálculo | Colombia',
  description: 'Diseño profesional de planos eléctricos y memorias de cálculo certificadas. Cumplimiento RETIE para proyectos residenciales, comerciales e industriales en Colombia.',
};

export default function PlanosElectricosPage() {
  const services = [
    {
      title: 'Planos Eléctricos Completos',
      description: 'Diseño detallado de instalaciones eléctricas con representación gráfica de todos los elementos, circuitos, tableros y conexiones.',
      icon: '📐',
      includes: [
        'Planta arquitectónica con puntos eléctricos',
        'Diagramas unifilares de tableros',
        'Cuadro de cargas completo',
        'Detalles de instalación',
        'Especificaciones técnicas',
        'Planos de iluminación',
        'Planos de tomacorrientes',
        'Sistema de puesta a tierra'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Memorias de Cálculo',
      description: 'Cálculos eléctricos detallados que justifican y sustentan el diseño de la instalación, cumpliendo normativa RETIE.',
      icon: '🧮',
      includes: [
        'Cálculo de demanda eléctrica',
        'Dimensionamiento de conductores',
        'Caída de tensión en circuitos',
        'Selección de protecciones',
        'Cálculo de cortocircuito',
        'Factor de potencia',
        'Puesta a tierra (resistividad)',
        'Justificación técnica normativa'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Actualización de Planos',
      description: 'Modificación y actualización de planos existentes para adecuaciones, ampliaciones o cambios en la instalación.',
      icon: '🔄',
      includes: [
        'Levantamiento de instalación actual',
        'Rediseño según necesidades',
        'Cumplimiento normativa vigente',
        'Integración con sistemas existentes',
        'Planos AS-BUILT',
        'Documentación de cambios',
        'Aprobación de entidades',
        'Archivo digital actualizado'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const projectTypes = [
    {
      type: 'Residencial',
      icon: '🏠',
      description: 'Viviendas unifamiliares y multifamiliares',
      details: [
        'Casas y apartamentos',
        'Conjuntos residenciales',
        'Torres de apartamentos',
        'Urbanizaciones completas'
      ],
      gradient: 'from-orange-400/20 to-red-400/20',
      accentColor: 'border-orange-500'
    },
    {
      type: 'Comercial',
      icon: '🏢',
      description: 'Establecimientos de comercio y oficinas',
      details: [
        'Locales comerciales',
        'Centros comerciales',
        'Oficinas corporativas',
        'Restaurantes y hoteles'
      ],
      gradient: 'from-blue-400/20 to-indigo-400/20',
      accentColor: 'border-blue-500'
    },
    {
      type: 'Industrial',
      icon: '🏭',
      description: 'Instalaciones industriales y productivas',
      details: [
        'Plantas de producción',
        'Bodegas industriales',
        'Talleres especializados',
        'Sistemas de alta potencia'
      ],
      gradient: 'from-gray-400/20 to-slate-500/20',
      accentColor: 'border-gray-600'
    }
  ];

  const normCompliance = [
    {
      norm: 'RETIE',
      title: 'Reglamento Técnico de Instalaciones Eléctricas',
      description: 'Cumplimiento total de las disposiciones del RETIE vigente para garantizar seguridad en las instalaciones.',
      requirements: [
        'Diseño según Resolución 90708',
        'Distancias de seguridad',
        'Calibre de conductores',
        'Sistemas de protección',
        'Puesta a tierra certificada'
      ]
    },
    {
      norm: 'NTC 2050',
      title: 'Código Eléctrico Colombiano',
      description: 'Aplicación de la Norma Técnica Colombiana para instalaciones eléctricas basada en el NEC.',
      requirements: [
        'Métodos de alambrado',
        'Equipos y materiales',
        'Cargas de diseño',
        'Protecciones requeridas',
        'Marcaciones y señalización'
      ]
    }
  ];

  const deliverables = [
    { item: 'Planos en formato CAD (DWG)', icon: '💾' },
    { item: 'Planos en PDF de alta calidad', icon: '📄' },
    { item: 'Memoria de cálculo detallada', icon: '📊' },
    { item: 'Cuadro de cargas certificado', icon: '⚡' },
    { item: 'Especificaciones técnicas', icon: '📋' },
    { item: 'Listado de materiales', icon: '🛠️' },
    { item: 'Certificado de diseño firmado', icon: '✍️' },
    { item: 'Asesoría técnica incluida', icon: '💬' }
  ];

  const whyChooseUs = [
    {
      title: 'Ingenieros Certificados',
      description: 'Diseños elaborados y firmados por ingenieros eléctricos con matrícula profesional vigente.',
      icon: '👨‍🎓',
      stat: 'Certificación profesional'
    },
    {
      title: 'Software Especializado',
      description: 'Utilizamos AutoCAD Electrical, ETAP y DIALux para diseños precisos y profesionales.',
      icon: '💻',
      stat: 'Tecnología de punta'
    },
    {
      title: 'Cumplimiento Garantizado',
      description: 'Todos nuestros diseños cumplen 100% con RETIE, NTC 2050 y normativas locales.',
      icon: '✅',
      stat: '100% normativo'
    },
    {
      title: 'Rapidez en Entrega',
      description: 'Plazos de entrega competitivos sin sacrificar la calidad del diseño técnico.',
      icon: '⚡',
      stat: 'Entregas puntuales'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description: 'Reunión para entender las necesidades del proyecto, alcance y requerimientos específicos.',
      icon: '📞'
    },
    {
      step: '02',
      title: 'Levantamiento de Información',
      description: 'Visita técnica al sitio, mediciones, fotografías y recolección de datos arquitectónicos.',
      icon: '📏'
    },
    {
      step: '03',
      title: 'Cálculos y Diseño',
      description: 'Elaboración de memorias de cálculo y diseño de planos según normativa vigente.',
      icon: '🧮'
    },
    {
      step: '04',
      title: 'Revisión Técnica',
      description: 'Verificación interna de cálculos, cumplimiento normativo y calidad del diseño.',
      icon: '🔍'
    },
    {
      step: '05',
      title: 'Presentación',
      description: 'Entrega de planos digitales, memorias y certificados con explicación detallada.',
      icon: '📊'
    },
    {
      step: '06',
      title: 'Ajustes y Aprobación',
      description: 'Modificaciones según observaciones y tramitación ante entidades competentes.',
      icon: '✍️'
    }
  ];

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <ServiceHero
        title="Diseño de Planos Eléctricos"
        description="Ingeniería de precisión para proyectos eléctricos seguros y eficientes"
        imageSrc="/images/planos-electricos-hero-background.webp"
        icon="📐"
        />

        {/* Intro técnica */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Badge profesional */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 bg-primary-3 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  <span>🎓</span>
                  <span>DISEÑOS CERTIFICADOS POR INGENIEROS</span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 text-center mb-8">
                Planos Eléctricos de Alta Precisión
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-primary-1/10 to-primary-2/10 rounded-2xl p-8 border-l-4 border-primary-3">
                  <h3 className="text-2xl font-bold text-primary-3 mb-4 flex items-center gap-3">
                    <span className="text-3xl">📐</span>
                    Planos Técnicos Profesionales
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Diseñamos planos eléctricos completos con el más alto nivel de detalle técnico para 
                    viviendas, comercios e industrias. Cada proyecto es elaborado por ingenieros eléctricos 
                    certificados utilizando software especializado de última generación.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Nuestros planos incluyen toda la información necesaria para una instalación correcta: 
                    ubicación exacta de puntos, recorrido de circuitos, especificaciones de materiales, 
                    diagramas unifilares y detalles constructivos.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary-2/10 to-primary-3/10 rounded-2xl p-8 border-l-4 border-primary-2">
                  <h3 className="text-2xl font-bold text-primary-3 mb-4 flex items-center gap-3">
                    <span className="text-3xl">🧮</span>
                    Memorias de Cálculo Certificadas
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Complementamos cada diseño con memorias de cálculo detalladas que justifican técnicamente 
                    cada decisión: dimensionamiento de conductores, selección de protecciones, cálculo de 
                    caídas de tensión y análisis de cortocircuito.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Cumplimos estrictamente con el RETIE y NTC 2050, garantizando que tu proyecto sea 
                    aprobado por las entidades de control sin observaciones ni rechazos.
                  </p>
                </div>
              </div>

              <div className="bg-primary-5 text-white rounded-2xl p-8 text-center">
                <p className="text-lg sm:text-xl leading-relaxed">
                  <strong>¿Por qué son importantes los planos eléctricos?</strong> Son el lenguaje técnico que 
                  garantiza una instalación segura, eficiente y conforme a la ley. Sin planos certificados, 
                  no podrás obtener certificaciones RETIE ni conectar legalmente tu servicio eléctrico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Cards - Diseño técnico */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 text-center mb-16">
              Nuestros Servicios de Diseño
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Header con gradiente */}
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white text-center`}>
                    <div className="text-6xl mb-3">{service.icon}</div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <h4 className="font-bold text-primary-3 mb-4">Incluye:</h4>
                    <ul className="space-y-2">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-primary-3 mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Types */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 text-center mb-4">
              Proyectos Que Atendemos
            </h2>
            <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
              Experiencia en diseño para todo tipo de instalaciones eléctricas
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projectTypes.map((project, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${project.gradient} rounded-2xl p-8 border-t-4 ${project.accentColor} hover:shadow-xl transition-all`}
                >
                  <div className="text-center mb-6">
                    <div className="text-7xl mb-4">{project.icon}</div>
                    <h3 className="text-2xl font-bold text-primary-3 mb-2">{project.type}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-primary-3 rounded-full"></span>
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Normative Compliance */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-5 to-primary-4 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Cumplimiento Normativo Total
                </h2>
                <p className="text-xl text-gray-200">
                  Diseños que cumplen estrictamente con la legislación colombiana
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {normCompliance.map((norm, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
                  >
                    <div className="mb-6">
                      <div className="inline-block bg-white text-primary-3 px-4 py-2 rounded-full font-bold text-lg mb-4">
                        {norm.norm}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{norm.title}</h3>
                      <p className="text-gray-200 leading-relaxed">{norm.description}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-lg">Aspectos Clave:</h4>
                      {norm.requirements.map((req, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-green-400 text-xl">✓</span>
                          <span className="text-gray-100">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 text-center mb-16">
              Proceso de Diseño
            </h2>

            <div className="max-w-4xl mx-auto">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  {/* Connector line */}
                  {index < process.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-full bg-primary-1/30 -z-10"></div>
                  )}

                  <div className="flex gap-6 mb-12">
                    {/* Step number circle */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-1 to-primary-3 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                        {item.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl">{item.icon}</span>
                          <h3 className="text-xl font-bold text-primary-3">{item.title}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 text-center mb-4">
              Qué Recibirás
            </h2>
            <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
              Paquete completo de documentación técnica profesional
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {deliverables.map((deliverable, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="text-5xl mb-4">{deliverable.icon}</div>
                  <p className="font-semibold text-gray-800">{deliverable.item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 text-center mb-16">
              ¿Por Qué Elegirnos?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {whyChooseUs.map((reason, index) => (
                <div 
                  key={index}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-primary-1/10 to-primary-3/10 rounded-2xl p-8 mb-4 hover:shadow-lg transition-all">
                    <div className="text-6xl mb-4">{reason.icon}</div>
                    <div className="text-sm font-bold text-primary-1 mb-2 uppercase tracking-wide">
                      {reason.stat}
                    </div>
                    <h3 className="text-xl font-bold text-primary-3 mb-3">{reason.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 text-center mb-12">
              Ejemplos de Nuestros Planos
            </h2>
            
            <ImageGallery 
              basePath="/services-images/planos-electricos"
              count={6}
              altPrefix="Plano eléctrico diseñado"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-primary-3 via-primary-2 to-primary-1 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl mb-6">📐</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                ¿Necesitas Planos Eléctricos Certificados?
              </h2>
              <p className="text-lg sm:text-xl text-gray-100 mb-10 leading-relaxed">
                Cotiza tu proyecto hoy y recibe una propuesta técnica detallada con tiempos de entrega y costos
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hola, necesito cotizar el diseño de planos eléctricos y memorias de cálculo')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-primary-3 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
              >
                <svg className="w-7 h-7 text-green-600 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Solicitar Cotización Ahora</span>
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