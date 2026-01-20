import { Metadata } from 'next';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import ServiceHero from '@/app/components/sections/ServiceHero';
import { COMPANY_INFO } from '@/app/lib/constants';
import CertificationLogo from '@/app/components/ui/CertificationLogo';
import { getHeroVideoUrl } from '@/app/lib/cloudinary-config';
import { 
  Shield,
  FileCheck,
  Scale,
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Search,
  Wrench,
  Calendar,
  CheckSquare,
  Award,
  Home,
  Building2,
  Factory,
  Zap,
  Lightbulb,
  Clock,
  ArrowRight,
  MessageCircle,
  Phone,
  Users,
  TrendingUp,
  Target,
  ShieldCheck,
  FileBadge,
  Stamp,
  BadgeCheck,
  CircleCheck
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Certificaciones RETIE y RETILAP | Inspecciones Eléctricas Colombia',
    description: 'Trámites de certificaciones RETIE y RETILAP en Colombia. Asesoría completa, inspecciones y documentación para legalización de instalaciones eléctricas.',
};

export default function RETIEPage() {
    const certificationTypes = [
        {
            name: 'RETIE',
            fullName: 'Reglamento Técnico de Instalaciones Eléctricas',
            icon: Zap,
            color: 'blue',
            description: 'Certificación obligatoria que garantiza la seguridad de las instalaciones eléctricas en Colombia, protegiendo vidas y bienes.',
            applies: [
                'Viviendas nuevas',
                'Locales comerciales',
                'Industrias',
                'Ampliaciones mayores al 50%',
                'Cambios de uso (residencial a comercial)',
                'Instalaciones temporales'
            ],
            requirements: [
                'Planos eléctricos certificados',
                'Memoria de cálculo',
                'Cuadro de cargas',
                'Certificado del diseñador',
                'Certificado del constructor',
                'Protocolo de puesta a tierra',
                'Mediciones de resistencia',
                'Declaración de conformidad'
            ]
        },
        {
            name: 'RETILAP',
            fullName: 'Reglamento Técnico de Iluminación y Alumbrado Público',
            icon: Lightbulb,
            color: 'yellow',
            description: 'Certificación que verifica el cumplimiento de estándares de iluminación interior y exterior para eficiencia energética y confort visual.',
            applies: [
                'Iluminación interior comercial',
                'Iluminación industrial',
                'Alumbrado público',
                'Iluminación arquitectónica',
                'Proyectos con más de 3 kW en iluminación',
                'Edificaciones públicas'
            ],
            requirements: [
                'Diseño de iluminación',
                'Cálculos luminotécnicos',
                'Especificaciones de luminarias',
                'Niveles de iluminancia',
                'Índice de deslumbramiento',
                'Eficiencia energética',
                'Mediciones fotométricas',
                'Certificado de conformidad'
            ]
        }
    ];

    const processSteps = [
        {
            step: '01',
            title: 'Consulta Inicial',
            description: 'Evaluamos tu proyecto y determinamos qué tipo de certificación necesitas según normativa vigente.',
            icon: Phone,
            duration: '1 día'
        },
        {
            step: '02',
            title: 'Revisión Técnica',
            description: 'Inspeccionamos la instalación eléctrica para identificar aspectos a corregir antes de la inspección oficial.',
            icon: Search,
            duration: '1-2 días'
        },
        {
            step: '03',
            title: 'Preparación de Documentación',
            description: 'Elaboramos todos los documentos requeridos: planos, memorias, protocolos y certificados.',
            icon: FileText,
            duration: '3-5 días'
        },
        {
            step: '04',
            title: 'Correcciones Necesarias',
            description: 'Realizamos los ajustes técnicos identificados para garantizar cumplimiento normativo total.',
            icon: Wrench,
            duration: '2-7 días'
        },
        {
            step: '05',
            title: 'Solicitud de Inspección',
            description: 'Presentamos la solicitud ante el organismo de inspección certificado y agendamos la visita.',
            icon: Calendar,
            duration: '1-2 semanas'
        },
        {
            step: '06',
            title: 'Inspección Oficial',
            description: 'Acompañamos en la inspección, garantizando que todo esté en orden.',
            icon: CheckSquare,
            duration: '1 día'
        },
        {
            step: '07',
            title: 'Entrega de Certificado',
            description: 'Recibimos y entregamos el certificado de conformidad que permite la conexión legal del servicio eléctrico.',
            icon: Award,
            duration: '1-2 semanas'
        }
    ];

    const whyNeedCertification = [
        {
            reason: 'Requisito Legal Obligatorio',
            description: 'Sin certificación RETIE no puedes conectar legalmente el servicio eléctrico. Las empresas de energía lo exigen.',
            icon: Scale,
            impact: 'Evita multas y sanciones'
        },
        {
            reason: 'Seguridad de Personas',
            description: 'Garantiza que la instalación no representa riesgos de electrocución, incendios o accidentes eléctricos.',
            icon: Shield,
            impact: 'Protege vidas humanas'
        },
        {
            reason: 'Protección de Bienes',
            description: 'Previene daños en equipos, electrodomésticos y la estructura por fallas en la instalación eléctrica.',
            icon: Home,
            impact: 'Evita pérdidas económicas'
        },
        {
            reason: 'Valor de la Propiedad',
            description: 'Una propiedad con certificación vigente tiene mayor valor comercial y es más atractiva para compradores.',
            icon: TrendingUp,
            impact: 'Aumenta plusvalía'
        }
    ];

    const commonIssues = [
        { issue: 'Conductor inadecuado', solution: 'Cambio por calibre correcto', icon: AlertTriangle },
        { issue: 'Puesta a tierra deficiente', solution: 'Mejoramiento del sistema', icon: AlertTriangle },
        { issue: 'Protecciones incorrectas', solution: 'Reemplazo de breakers', icon: AlertTriangle },
        { issue: 'Falta de planos certificados', solution: 'Elaboración profesional', icon: AlertTriangle },
        { issue: 'Conexiones mal ejecutadas', solution: 'Corrección técnica', icon: AlertTriangle },
        { issue: 'Tableros sin identificar', solution: 'Etiquetado normalizado', icon: AlertTriangle }
    ];

    const includedServices = [
        { service: 'Asesoría técnica completa', icon: Users },
        { service: 'Revisión pre-inspección', icon: Search },
        { service: 'Elaboración de documentos', icon: FileText },
        { service: 'Correcciones incluidas', icon: Wrench },
        { service: 'Acompañamiento en inspección', icon: ShieldCheck },
        { service: 'Gestión ante organismos', icon: FileBadge },
        { service: 'Garantía de aprobación', icon: BadgeCheck },
        { service: 'Soporte post-certificación', icon: MessageCircle }
    ];

    const videoCloudinary = getHeroVideoUrl('retie');

    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <ServiceHero
                    title="Certificaciones RETIE y RETILAP"
                    description="Legaliza tu instalación eléctrica con acompañamiento profesional integral"
                    videoSrc={videoCloudinary}
                />

                {/* Intro Legal */}
                <section className="py-16 sm:py-20 lg:py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            {/* Badge oficial */}
                            <div className="flex justify-center mb-8">
                                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-4 to-primary-2 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-shadow">
                                    <ShieldCheck className="w-5 h-5" />
                                    <span>TRÁMITES 100% LEGALES Y CERTIFICADOS</span>
                                </div>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-primary-3 mb-8">
                                Obtén Tu Certificación Eléctrica Sin Complicaciones
                            </h2>

                            <div className="text-center mb-12">
                                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                                    En <strong className="text-primary-3">Grupo Leovoltaje</strong> te brindamos asesoría completa
                                    para todo tipo de legalizaciones e inspecciones RETIE y RETILAP, gestionando toda la documentación
                                    requerida por la empresa prestadora del servicio de energía.
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                    Cumplimos con todos los requisitos del ente regulador para que obtengas acceso al servicio
                                    de energía de forma legal y con total cumplimiento normativo. <strong>Sin rechazos, sin estrés</strong>.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-l-4 border-orange-500">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-orange-100 rounded-xl">
                                        <AlertTriangle className="w-8 h-8 text-orange-600" strokeWidth={2} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                                            ¿Por Qué es Obligatorio?
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            El RETIE es un reglamento de obligatorio cumplimiento en Colombia establecido por el
                                            Ministerio de Minas y Energía. Cualquier instalación eléctrica nueva o que sufra modificaciones
                                            sustanciales debe contar con certificación vigente para poder conectarse a la red de energía.
                                            <strong> No es opcional, es ley</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certification Types - Con logos */}
                <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                <FileCheck className="w-4 h-4" />
                                <span>CERTIFICACIONES OFICIALES</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                                Tipos de Certificaciones
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Entendemos las normativas y te guiamos en todo el proceso
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                            {certificationTypes.map((cert, index) => {
                                const IconComponent = cert.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-black/20"
                                    >
                                        {/* Header con logo */}
                                        <div className={`bg-gradient-to-br ${cert.color === 'blue' ? 'from-blue-600 to-cyan-600' : 'from-yellow-500 to-orange-500'} p-8 text-white relative overflow-hidden`}>
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                                            
                                            <div className="relative flex items-center justify-between mb-6">
                                                <div>
                                                    <div className="inline-flex p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-3 group-hover:scale-110 transition-transform">
                                                        <IconComponent className="w-12 h-12" strokeWidth={1.5} />
                                                    </div>
                                                    <h3 className="text-4xl font-bold mb-2">{cert.name}</h3>
                                                    <p className="text-sm opacity-90 font-medium">{cert.fullName}</p>
                                                </div>
                                                {/* Logo oficial */}
                                                <CertificationLogo
                                                    name={cert.name}
                                                    altText={`Logo ${cert.name}`}
                                                />
                                            </div>
                                            <p className="relative text-white/90 leading-relaxed">{cert.description}</p>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8">
                                            <div className="grid grid-cols-1 gap-6">
                                                {/* Aplica para */}
                                                <div>
                                                    <h4 className="font-bold text-lg text-primary-3 mb-4 flex items-center gap-2">
                                                        <Target className="w-5 h-5" />
                                                        Aplica Para:
                                                    </h4>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        {cert.applies.map((item, i) => (
                                                            <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                                                <CircleCheck className={`w-4 h-4 ${cert.color === 'blue' ? 'text-blue-500' : 'text-yellow-500'} flex-shrink-0`} strokeWidth={2.5} />
                                                                <span>{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Documentos requeridos */}
                                                <div>
                                                    <h4 className="font-bold text-lg text-primary-3 mb-4 flex items-center gap-2">
                                                        <ClipboardCheck className="w-5 h-5" />
                                                        Documentos Requeridos:
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {cert.requirements.map((req, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                                                                <span>{req}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Why Need Certification */}
                <section className="py-16 sm:py-20 lg:py-24 bg-black/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                <Shield className="w-4 h-4" />
                                <span>IMPORTANCIA LEGAL</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                                ¿Por Qué Necesitas la Certificación?
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {whyNeedCertification.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-3 hover:shadow-xl transition-all"
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="p-3 bg-primary-1/10 rounded-xl group-hover:scale-110 transition-transform">
                                                <IconComponent className="w-8 h-8 text-primary-3" strokeWidth={2} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-primary-3 mb-2">{item.reason}</h3>
                                                <p className="text-gray-700 text-sm leading-relaxed mb-3">{item.description}</p>
                                                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                                                    <CheckCircle2 className="w-3 h-3" />
                                                    {item.impact}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Process Timeline */}
                <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-5 to-primary-4 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                    </div>

                    <div className="relative container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                <Clock className="w-4 h-4" />
                                <span>PROCESO PASO A PASO</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                                Proceso de Certificación
                            </h2>
                            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                                Te acompañamos en cada paso hasta obtener tu certificado
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            {processSteps.map((step, index) => {
                                const IconComponent = step.icon;
                                return (
                                    <div key={index} className="relative mb-8 last:mb-0">
                                        {/* Connector line */}
                                        {index < processSteps.length - 1 && (
                                            <div className="absolute left-8 top-20 w-0.5 h-full bg-white/20"></div>
                                        )}

                                        <div className="flex gap-6">
                                            {/* Step indicator */}
                                            <div className="flex-shrink-0 relative z-10">
                                                <div className="w-16 h-16 bg-white text-primary-3 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                                                    {step.step}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:bg-white/15 transition-all">
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-white/10 rounded-lg">
                                                            <IconComponent className="w-6 h-6" strokeWidth={2} />
                                                        </div>
                                                        <h3 className="text-2xl font-bold">{step.title}</h3>
                                                    </div>
                                                    <span className="inline-flex items-center gap-2 text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
                                                        <Clock className="w-3 h-3" />
                                                        {step.duration}
                                                    </span>
                                                </div>
                                                <p className="text-gray-200 leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="text-center mt-12">
                            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-2xl px-8 py-4 border-2 border-white/30">
                                <Clock className="w-6 h-6" />
                                <p className="text-lg">
                                    <strong>Tiempo total estimado:</strong> 3-6 semanas dependiendo del organismo certificador
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common Issues */}
                <section className="py-16 sm:py-20 lg:py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                <Wrench className="w-4 h-4" />
                                <span>SOLUCIONES TÉCNICAS</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                                Problemas Comunes Que Solucionamos
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Identificamos y corregimos los aspectos más frecuentes antes de la inspección
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {commonIssues.map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-500 hover:shadow-lg transition-all"
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="p-2 bg-red-100 rounded-lg group-hover:scale-110 transition-transform">
                                            <AlertTriangle className="w-5 h-5 text-red-600" strokeWidth={2} />
                                        </div>
                                        <h3 className="font-bold text-gray-800 flex-1">{item.issue}</h3>
                                    </div>
                                    <div className="flex items-start gap-3 pl-11">
                                        <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" strokeWidth={2.5} />
                                        <p className="text-sm text-gray-700 font-medium">{item.solution}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Included Services */}
                <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                <BadgeCheck className="w-4 h-4" />
                                <span>SERVICIO INTEGRAL</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                                Qué Incluye Nuestro Servicio
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {includedServices.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-green-500 hover:-translate-y-1"
                                    >
                                        <div className="inline-flex p-4 bg-green-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                                            <IconComponent className="w-8 h-8 text-green-600" strokeWidth={2} />
                                        </div>
                                        <p className="font-semibold text-gray-800">{item.service}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="text-center mt-12">
                            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-lg">
                                <Stamp className="w-6 h-6" />
                                <p className="text-lg font-bold">
                                    ¡Todo lo que necesitas para una certificación exitosa!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 sm:py-22 lg:py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                    </div>

                    <div className="relative container mx-auto px-4 text-center">
                        <div className="max-w-3xl mx-auto">
                            <div className="flex justify-center gap-4 mb-6">
                                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                                    <FileCheck className="w-16 h-16" strokeWidth={1.5} />
                                </div>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                                Inicia Tu Proceso de Certificación Hoy
                            </h2>
                            <p className="text-lg sm:text-xl text-green-50 mb-10 leading-relaxed">
                                No dejes que trámites complicados retrasen tu proyecto. Contáctanos y te guiaremos
                                paso a paso hasta obtener tu certificación RETIE o RETILAP sin rechazos
                            </p>
                            <a
                                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hola, necesito asesoría para certificación RETIE/RETILAP')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 bg-white text-green-600 hover:bg-green-50 px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
                            >
                                <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" strokeWidth={2} />
                                <span>Solicitar Asesoría Gratuita</span>
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