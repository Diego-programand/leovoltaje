import { Metadata } from 'next';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import ServiceHero from '@/app/components/sections/ServiceHero';
import CloudinaryGallery from '@/app/components/sections/CloudinaryGallery';
import { COMPANY_INFO } from '@/app/lib/constants';
import { getHeroVideoUrl } from '@/app/lib/cloudinary-config';
import {
  Ruler,
  Calculator,
  RefreshCw,
  Home,
  Building2,
  Factory,
  FileCheck,
  ClipboardCheck,
  GraduationCap,
  Monitor,
  CheckCircle2,
  Shield,
  Clock,
  Save,
  FileText,
  Zap,
  FileSpreadsheet,
  Stamp,
  MessageSquare,
  Phone,
  FileSearch,
  Pencil,
  Search,
  PenTool,
  Send,
  Edit3,
  ArrowRight,
  MessageCircle,
  Award,
  Target,
  Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diseño de Planos Eléctricos y Memorias de Cálculo | Colombia',
  description: 'Diseño profesional de planos eléctricos y memorias de cálculo certificadas. Cumplimiento RETIE para proyectos residenciales, comerciales e industriales en Colombia.',
};

export default function PlanosElectricosPage() {
  const services = [
    {
      title: 'Planos Eléctricos Completos',
      description: 'Diseño detallado de instalaciones eléctricas con representación gráfica de todos los elementos, circuitos, tableros y conexiones.',
      icon: Ruler,
      includes: [
        'Planta arquitectónica con puntos eléctricos',
        'Diagramas unifilares',
        'Cuadro de cargas completo',
        'Detalles de instalación',
        'Especificaciones técnicas',
        'Planos de iluminación',
        'Planos de tomacorrientes',
        'Sistema de puesta a tierra'
      ],
      color: 'from-primary-2 to-blue-900'
    },
    {
      title: 'Memorias de Cálculo',
      description: 'Cálculos eléctricos detallados que justifican y sustentan el diseño de la instalación, cumpliendo normativa RETIE.',
      icon: Calculator,
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
      color: 'from-primary-2 to-blue-900'
    },
    {
      title: 'Actualización de Planos',
      description: 'Modificación y actualización de planos existentes para adecuaciones, ampliaciones o cambios en la instalación.',
      icon: RefreshCw,
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
      color: 'from-primary-2 to-blue-900'
    }
  ];

  const projectTypes = [
    {
      type: 'Residencial',
      icon: Home,
      description: 'Viviendas unifamiliares y multifamiliares',
      details: [
        'Casas y apartamentos',
        'Conjuntos residenciales',
        'Torres de apartamentos',
        'Urbanizaciones completas'
      ],
      gradient: 'from-orange-50 to-red-50',
      accentColor: 'border-orange-500',
      iconColor: 'text-orange-600'
    },
    {
      type: 'Comercial',
      icon: Building2,
      description: 'Establecimientos de comercio y oficinas',
      details: [
        'Locales comerciales',
        'Centros comerciales',
        'Oficinas corporativas',
        'Restaurantes y hoteles'
      ],
      gradient: 'from-blue-50 to-indigo-50',
      accentColor: 'border-blue-500',
      iconColor: 'text-blue-600'
    },
    {
      type: 'Industrial',
      icon: Factory,
      description: 'Instalaciones industriales y productivas',
      details: [
        'Plantas de producción',
        'Bodegas industriales',
        'Talleres especializados',
        'Zonas de manufactura'
      ],
      gradient: 'from-gray-50 to-slate-50',
      accentColor: 'border-gray-600',
      iconColor: 'text-gray-700'
    }
  ];

  const normCompliance = [
    {
      norm: 'RETIE',
      title: 'Reglamento Técnico de Instalaciones Eléctricas',
      description: 'Cumplimiento total de las disposiciones del RETIE vigente para garantizar la vida y seguridad de las personas y las instalaciones eléctricas.',
      requirements: [
        'Distancias de seguridad',
        'Calibre de conductores',
        'Sistemas de protección',
        'Sistema de puesta a tierra certificada'
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
    { item: 'Planos en formato CAD (DWG)', icon: Save },
    { item: 'Planos en PDF de alta calidad', icon: FileText },
    { item: 'Memoria de cálculo detallada', icon: Calculator },
    { item: 'Cuadro de cargas certificado', icon: Zap },
    { item: 'Especificaciones técnicas', icon: FileSpreadsheet },
    { item: 'Certificado de diseño firmado', icon: Stamp },
    { item: 'Asesoría técnica incluida', icon: MessageSquare },
    { item: 'Trabajo hecho por Profesionales', icon: ClipboardCheck }
  ];

  const whyChooseUs = [
    {
      title: 'Ingenieros Certificados',
      description: 'Diseños elaborados y firmados por ingenieros eléctricos con matrícula profesional vigente.',
      icon: GraduationCap,
      stat: 'Certificación profesional'
    },
    {
      title: 'Software Especializado',
      description: 'Utilizamos AutoCAD Electrical, ETAP y DIALux para diseños precisos y profesionales.',
      icon: Monitor,
      stat: 'Tecnología de punta'
    },
    {
      title: 'Cumplimiento Garantizado',
      description: 'Todos nuestros diseños cumplen 100% con RETIE y NTC 2050.',
      icon: Shield,
      stat: '100% normativo'
    },
    {
      title: 'Rapidez en Entrega',
      description: 'Plazos de entrega competitivos sin sacrificar la calidad del diseño técnico.',
      icon: Clock,
      stat: 'Entregas puntuales'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description: 'Reunión para entender las necesidades del proyecto, alcance y requerimientos específicos.',
      icon: Phone
    },
    {
      step: '02',
      title: 'Levantamiento de Información',
      description: 'Visita técnica al sitio, mediciones, fotografías y recolección de datos arquitectónicos.',
      icon: FileSearch
    },
    {
      step: '03',
      title: 'Cálculos y Diseño',
      description: 'Elaboración de memorias de cálculo y diseño de planos según normativa vigente.',
      icon: Pencil
    },
    {
      step: '04',
      title: 'Revisión Técnica',
      description: 'Verificación interna de cálculos, cumplimiento normativo y calidad del diseño.',
      icon: Search
    },
    {
      step: '05',
      title: 'Presentación',
      description: 'Entrega de planos digitales, memorias y certificados con explicación detallada.',
      icon: PenTool
    },
    {
      step: '06',
      title: 'Ajustes y Aprobación',
      description: 'Modificaciones según observaciones y tramitación ante entidades competentes.',
      icon: Edit3
    }
  ];

  const videoCloudinary = getHeroVideoUrl('planos-electricos');
  

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <ServiceHero
          title="Diseño de Planos Eléctricos"
          description="Ingeniería de precisión para proyectos eléctricos seguros y eficientes"
          imageSrc="/images/planos-electricos-hero-background.webp"

        />

        {/* Intro técnica */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Badge profesional */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-3 bg-primary-3 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  <GraduationCap className="w-5 h-5" />
                  <span>DISEÑOS CERTIFICADOS POR INGENIEROS</span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 text-center mb-8">
                Planos Eléctricos de Alta Precisión
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="group bg-gradient-to-br from-primary-1/5 to-primary-2/5 rounded-2xl p-8 border-l-4 border-primary-3 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary-3 text-white rounded-xl">
                      <Ruler className="w-8 h-8" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-3 flex-1">
                      Planos Técnicos Profesionales
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Diseñamos planos eléctricos completos con el más alto nivel de detalle técnico para
                    viviendas, comercios e industrias. Cada proyecto es elaborado por ingenieros eléctricistas
                    certificados utilizando software especializado de última generación.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Nuestros planos incluyen toda la información necesaria para una instalación correcta:
                    ubicación exacta de puntos, recorrido de circuitos, especificaciones de materiales,
                    diagramas unifilares y detalles constructivos.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-primary-2/5 to-primary-3/5 rounded-2xl p-8 border-l-4 border-primary-2 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary-2 text-white rounded-xl">
                      <Calculator className="w-8 h-8" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-3 flex-1">
                      Memorias de Cálculo Certificadas
                    </h3>
                  </div>
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

              <div className="bg-primary-5 text-white rounded-2xl p-8 text-center border-2 border-primary-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    <FileCheck className="w-8 h-8" strokeWidth={2} />
                  </div>
                </div>
                <p className="text-lg sm:text-xl leading-relaxed">
                  <strong>¿Por qué son importantes los planos eléctricos?</strong> Son el lenguaje técnico que
                  garantiza una instalación segura, eficiente y conforme a la ley. Sin planos certificados,
                  no podrás obtener certificaciones RETIE ni conectar legalmente tu servicio de energía.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Cards - Diseño técnico */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Briefcase className="w-4 h-4" />
                <span>SERVICIOS PROFESIONALES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Nuestros Servicios de Diseño
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-primary-3"
                  >
                    {/* Header con gradiente */}
                    <div className={`bg-gradient-to-br ${service.color} p-6 text-white text-center relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                      <div className="relative">
                        <div className="inline-flex p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-3 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-12 h-12" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                        {service.description}
                      </p>

                      <h4 className="font-bold text-primary-3 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Incluye:
                      </h4>
                      <ul className="space-y-2">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-primary-3 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Project Types */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Target className="w-4 h-4" />
                <span>EXPERIENCIA MULTISECTORIAL</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Proyectos Que Atendemos
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Experiencia en diseño para todo tipo de instalaciones eléctricas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projectTypes.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <div
                    key={index}
                    className={`group bg-gradient-to-br ${project.gradient} rounded-2xl p-8 border-2 ${project.accentColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="text-center mb-6">
                      <div className="inline-flex p-5 bg-white rounded-2xl shadow-md mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className={`w-14 h-14 ${project.iconColor}`} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl font-bold text-primary-3 mb-2">{project.type}</h3>
                      <p className="text-gray-600 text-sm font-medium">{project.description}</p>
                    </div>

                    <ul className="space-y-3">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700">
                          <CheckCircle2 className={`w-4 h-4 ${project.iconColor} flex-shrink-0`} strokeWidth={2.5} />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Normative Compliance */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-5 to-primary-4 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Shield className="w-4 h-4" />
                  <span>CUMPLIMIENTO NORMATIVO</span>
                </div>
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
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:bg-white/15 transition-all"
                  >
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 bg-white text-primary-3 px-4 py-2 rounded-full font-bold text-lg mb-4 shadow-lg">
                        <FileCheck className="w-5 h-5" />
                        {norm.norm}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{norm.title}</h3>
                      <p className="text-gray-200 leading-relaxed">{norm.description}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-lg flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        Aspectos Clave:
                      </h4>
                      {norm.requirements.map((req, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
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
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Clock className="w-4 h-4" />
                <span>METODOLOGÍA PROBADA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3">
                Proceso de Diseño
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              {process.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="relative">
                    {/* Connector line */}
                    {index < process.length - 1 && (
                      <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary-3 to-primary-1/20"></div>
                    )}

                    <div className="flex gap-6 mb-12">
                      {/* Step number circle */}
                      <div className="flex-shrink-0 relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-1 to-primary-3 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg relative z-10">
                          {item.step}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-2">
                        <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all border-2 border-gray-100 hover:border-primary-3">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-primary-1/10 rounded-lg">
                              <IconComponent className="w-6 h-6 text-primary-3" strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-bold text-primary-3">{item.title}</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Send className="w-4 h-4" />
                <span>ENTREGABLES PROFESIONALES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                Qué Recibirás
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Paquete completo de documentación técnica profesional
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {deliverables.map((deliverable, index) => {
                const IconComponent = deliverable.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-primary-3 hover:-translate-y-1"
                  >
                    <div className="inline-flex p-4 bg-gradient-to-br from-primary-1/10 to-primary-3/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-primary-3" strokeWidth={2} />
                    </div>
                    <p className="font-semibold text-gray-800 text-sm">{deliverable.item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-20 lg:py-24 bg-primary-2/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 text-center mb-16">
              ¿Por Qué Elegirnos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {whyChooseUs.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div
                    key={index}
                    className="group text-center h-full" // 1. h-full aquí
                  >
                    {/* 2. flex flex-col y h-full aquí */}
                    <div className="flex flex-col h-full bg-gradient-to-br from-primary-1/5 to-primary-3/10 rounded-2xl p-8 hover:shadow-xl transition-all border-2 hover:border-primary-5/30 transition-all duration-300">
                      <div className="inline-flex p-4 bg-white rounded-2xl shadow-md mb-4 group-hover:scale-110 transition-transform mx-auto w-fit">
                        <IconComponent className="w-10 h-10 text-primary-3" strokeWidth={2} />
                      </div>

                      <div className="inline-flex items-center gap-2 text-xs font-bold text-primary-1 mb-3 uppercase tracking-wide bg-primary-1/10 px-3 py-1 rounded-full mx-auto w-fit">
                        <Award className="w-3 h-3" />
                        {reason.stat}
                      </div>

                      <h3 className="text-xl font-bold text-primary-3 mb-3">{reason.title}</h3>

                      {/* 3. flex-grow aquí para igualar el espacio visual */}
                      <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CloudinaryGallery
          serviceSlug="planos-electricos"
          title="Proyectos de Planos Eléctricos Realizados"
        />

        {/* CTA */}
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-primary-4 via-primary-3 to-primary-5 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="relative container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <Ruler className="w-16 h-16" strokeWidth={1.5} />
                </div>
              </div>
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
                <MessageCircle className="w-7 h-7 text-green-600 group-hover:rotate-12 transition-transform" strokeWidth={2} />
                <span>Solicitar Cotización Ahora</span>
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