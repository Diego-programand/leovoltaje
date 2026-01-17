import { Metadata } from 'next';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import ServiceHero from '@/app/components/sections/ServiceHero';
import ImageGallery from '@/app/components/ui/ImageGallery';
import { COMPANY_INFO } from '@/app/lib/constants';
import CertificationLogo from '@/app/components/ui/CertificationLogo';

export const metadata: Metadata = {
    title: 'Certificaciones RETIE y RETILAP | Inspecciones Eléctricas Colombia',
    description: 'Trámites de certificaciones RETIE y RETILAP en Colombia. Asesoría completa, inspecciones y documentación para legalización de instalaciones eléctricas.',
};

export default function RETIEPage() {
    const certificationTypes = [
        {
            name: 'RETIE',
            fullName: 'Reglamento Técnico de Instalaciones Eléctricas',
            icon: '⚡',
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
            icon: '💡',
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
            icon: '📋',
            duration: '1 día'
        },
        {
            step: '02',
            title: 'Revisión Técnica',
            description: 'Inspeccionamos la instalación eléctrica para identificar aspectos a corregir antes de la inspección oficial.',
            icon: '🔍',
            duration: '1-2 días'
        },
        {
            step: '03',
            title: 'Preparación de Documentación',
            description: 'Elaboramos todos los documentos requeridos: planos, memorias, protocolos y certificados.',
            icon: '📄',
            duration: '3-5 días'
        },
        {
            step: '04',
            title: 'Correcciones Necesarias',
            description: 'Realizamos los ajustes técnicos identificados para garantizar cumplimiento normativo total.',
            icon: '🔧',
            duration: '2-7 días'
        },
        {
            step: '05',
            title: 'Solicitud de Inspección',
            description: 'Presentamos la solicitud ante el organismo de inspección certificado y agendamos la visita.',
            icon: '📅',
            duration: '1-2 semanas'
        },
        {
            step: '06',
            title: 'Inspección Oficial',
            description: 'Acompañamos la inspección del organismo certificador, garantizando que todo esté en orden.',
            icon: '✅',
            duration: '1 día'
        },
        {
            step: '07',
            title: 'Entrega de Certificado',
            description: 'Recibimos y entregamos el certificado oficial que permite la conexión legal del servicio eléctrico.',
            icon: '🎓',
            duration: '1-2 semanas'
        }
    ];

    const whyNeedCertification = [
        {
            reason: 'Requisito Legal Obligatorio',
            description: 'Sin certificación RETIE no puedes conectar legalmente el servicio eléctrico. Las empresas de energía lo exigen.',
            icon: '⚖️',
            impact: 'Evita multas y sanciones'
        },
        {
            reason: 'Seguridad de Personas',
            description: 'Garantiza que la instalación no representa riesgos de electrocución, incendios o accidentes eléctricos.',
            icon: '🛡️',
            impact: 'Protege vidas humanas'
        },
        {
            reason: 'Protección de Bienes',
            description: 'Previene daños en equipos, electrodomésticos y la estructura por fallas en la instalación eléctrica.',
            icon: '🏢',
            impact: 'Evita pérdidas económicas'
        },
        {
            reason: 'Valor de la Propiedad',
            description: 'Una propiedad con certificación vigente tiene mayor valor comercial y es más atractiva para compradores.',
            icon: '📈',
            impact: 'Aumenta plusvalía'
        }
    ];

    const commonIssues = [
        { issue: 'Conductor inadecuado', solution: 'Cambio por calibre correcto' },
        { issue: 'Puesta a tierra deficiente', solution: 'Mejoramiento del sistema' },
        { issue: 'Protecciones incorrectas', solution: 'Reemplazo de breakers' },
        { issue: 'Falta de planos certificados', solution: 'Elaboración profesional' },
        { issue: 'Conexiones mal ejecutadas', solution: 'Corrección técnica' },
        { issue: 'Tableros sin identificar', solution: 'Etiquetado normalizado' }
    ];

    const includedServices = [
        'Asesoría técnica completa',
        'Revisión pre-inspección',
        'Elaboración de documentos',
        'Correcciones incluidas',
        'Acompañamiento en inspección',
        'Gestión ante organismos',
        'Garantía de aprobación',
        'Soporte post-certificación'
    ];

    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <ServiceHero
                    title="Certificaciones RETIE y RETILAP"
                    description="Legaliza tu instalación eléctrica con acompañamiento profesional integral"
                    videoSrc="/videos/retie-hero-background.mp4"
                    icon="📋"
                />

                {/* Intro Legal */}
                <section className="py-16 sm:py-20 lg:py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            {/* Badge oficial */}
                            <div className="flex justify-center mb-8">
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                                    <span className="text-xl">✓</span>
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

                            <div className="bg-gradient-to-br from-primary-1/10 to-primary-3/10 rounded-2xl p-8 border-l-4 border-primary-3">
                                <h3 className="text-xl font-bold text-primary-3 mb-4 flex items-center gap-3">
                                    <span className="text-3xl">⚠️</span>
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
                </section>

                {/* Certification Types - Con logos */}
                <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                                Tipos de Certificaciones
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Entendemos las normativas y te guiamos en todo el proceso
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                            {certificationTypes.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                                >
                                    {/* Header con logo */}
                                    <div className={`bg-gradient-to-r ${cert.color === 'blue' ? 'from-blue-600 to-cyan-600' : 'from-yellow-500 to-orange-500'} p-8 text-white`}>
                                        <div className="flex items-center justify-between mb-6">
                                            <div>
                                                <div className="text-6xl mb-2">{cert.icon}</div>
                                                <h3 className="text-4xl font-bold mb-2">{cert.name}</h3>
                                                <p className="text-sm opacity-90">{cert.fullName}</p>
                                            </div>
                                            {/* Espacio para logo oficial */}
                                            {/* Espacio para logo oficial */}
                                            <CertificationLogo
                                                name={cert.name}
                                                altText={`Logo ${cert.name}`}
                                            />
                                        </div>
                                        <p className="text-white/90 leading-relaxed">{cert.description}</p>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <div className="grid grid-cols-1 gap-6">
                                            {/* Aplica para */}
                                            <div>
                                                <h4 className="font-bold text-lg text-primary-3 mb-4">Aplica Para:</h4>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {cert.applies.map((item, i) => (
                                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                                            <span className={`w-2 h-2 ${cert.color === 'blue' ? 'bg-blue-500' : 'bg-yellow-500'} rounded-full`}></span>
                                                            <span>{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Documentos requeridos */}
                                            <div>
                                                <h4 className="font-bold text-lg text-primary-3 mb-4">Documentos Requeridos:</h4>
                                                <ul className="space-y-2">
                                                    {cert.requirements.map((req, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                            <span className="text-green-600 mt-0.5">✓</span>
                                                            <span>{req}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Need Certification */}
                <section className="py-16 sm:py-20 lg:py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                                ¿Por Qué Necesitas la Certificación?
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {whyNeedCertification.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border-l-4 border-primary-3 hover:shadow-xl transition-all"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="text-5xl">{item.icon}</div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-primary-3 mb-2">{item.reason}</h3>
                                            <p className="text-gray-700 text-sm leading-relaxed mb-3">{item.description}</p>
                                            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                                                {item.impact}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Timeline */}
                <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-5 to-primary-4 text-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                                Proceso de Certificación
                            </h2>
                            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                                Te acompañamos en cada paso hasta obtener tu certificado
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            {processSteps.map((step, index) => (
                                <div key={index} className="relative mb-8 last:mb-0">
                                    {/* Connector line */}
                                    {index < processSteps.length - 1 && (
                                        <div className="absolute left-8 top-20 w-0.5 h-full bg-white/20"></div>
                                    )}

                                    <div className="flex gap-6">
                                        {/* Step indicator */}
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 bg-white text-primary-3 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                                                {step.step}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-3xl">{step.icon}</span>
                                                    <h3 className="text-2xl font-bold">{step.title}</h3>
                                                </div>
                                                <span className="text-sm bg-white/20 px-4 py-2 rounded-full w-fit">
                                                    ⏱️ {step.duration}
                                                </span>
                                            </div>
                                            <p className="text-gray-200 leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <div className="inline-block bg-white/20 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/30">
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
                                    className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500 hover:shadow-lg transition-all"
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="text-2xl text-red-600">❌</span>
                                        <h3 className="font-bold text-gray-800">{item.issue}</h3>
                                    </div>
                                    <div className="flex items-start gap-3 pl-8">
                                        <span className="text-green-600">→</span>
                                        <p className="text-sm text-gray-700">{item.solution}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Included Services */}
                <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 mb-4">
                                Qué Incluye Nuestro Servicio
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {includedServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                                        ✓
                                    </div>
                                    <p className="font-semibold text-gray-800">{service}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-lg">
                                <p className="text-lg font-bold">
                                    🎯 Garantía de Aprobación o Te Devolvemos Tu Dinero
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                <section className="py-16 sm:py-20 lg:py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-3 text-center mb-12">
                            Certificaciones Exitosas
                        </h2>

                        <ImageGallery
                            basePath="/services-images/retie"
                            count={6}
                            altPrefix="Certificación RETIE/RETILAP"
                        />
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-6xl mb-6">📋✅</div>
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
                                <svg className="w-7 h-7 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <span>Solicitar Asesoría Gratuita</span>
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