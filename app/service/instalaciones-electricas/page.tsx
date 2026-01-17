import { Metadata } from 'next';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import ServiceHero from '@/app/components/sections/ServiceHero';
import { COMPANY_INFO } from '@/app/lib/constants';
import ImageGallery from '@/app/components/ui/ImageGallery';

export const metadata: Metadata = {
    title: 'Instalaciones Eléctricas Profesionales',
    description: 'Servicios especializados en instalaciones eléctricas residenciales, comerciales e industriales en Colombia. Acometidas, tableros, iluminación y más.',
};

export default function InstalacionesElectricasPage() {
    const services = [
        {
            title: 'Acometidas Eléctricas',
            description: 'Cálculo, diseño e instalación de acometidas eléctricas aéreas y subterráneas. Incluye instalación en caja bornera, trenza y transformadores de energía.',
            icon: '⚡',
            types: ['Residencial', 'Comercial', 'Industrial']
        },
        {
            title: 'Medidores de Energía',
            description: 'Instalación profesional de medidores de energía eléctrica en cajas herméticas y gabinetes de medida, cumpliendo todas las normativas vigentes.',
            icon: '📊',
            types: ['Residencial', 'Comercial', 'Industrial']
        },
        {
            title: 'Sistemas de Puesta a Tierra',
            description: 'Instalación de gabinetes y sistemas de puesta a tierra para garantizar la seguridad eléctrica de tu instalación.',
            icon: '🔌',
            types: ['Residencial', 'Comercial', 'Industrial']
        },
        {
            title: 'Canalización Eléctrica',
            description: 'Instalación de tubería PVC, EMT, IMC y canastilla cablofil. Ducto cerrado, canastilla tipo escalera y canaleta con troqueles.',
            icon: '🔧',
            types: ['Residencial', 'Comercial', 'Industrial']
        },
        {
            title: 'Tableros de Distribución',
            description: 'Montaje profesional de tableros de distribución de circuitos eléctricos con protecciones adecuadas y organización óptima.',
            icon: '📦',
            types: ['Residencial', 'Comercial', 'Industrial']
        },
        {
            title: 'Circuitos Ramales',
            description: 'Construcción, diseño y cálculo de circuitos ramales con dimensionamiento correcto de conductores y protecciones.',
            icon: '🔀',
            types: ['Residencial', 'Comercial', 'Industrial']
        },
        {
            title: 'Iluminación Interior',
            description: 'Diseño e instalación de sistemas de iluminación interior eficientes, considerando confort visual y ahorro energético.',
            icon: '💡',
            types: ['Residencial', 'Comercial', 'Industrial']
        },
        {
            title: 'Iluminación Exterior',
            description: 'Diseño e instalación de iluminación exterior decorativa y funcional para jardines, fachadas y áreas comunes.',
            icon: '🌟',
            types: ['Residencial']
        }
    ];

    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <ServiceHero
                    title="Instalaciones Eléctricas"
                    description="Soluciones integrales para proyectos residenciales, comerciales e industriales en Colombia"
                    videoSrc="/videos/instalaciones-electricas-hero-background.mp4"
                    icon=""
                />

                {/* Intro Section */}
                <section className="py-12 sm:py-16 lg:py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-3 mb-6">
                                Expertos en Instalaciones Eléctricas
                            </h2>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                                Ofrecemos servicios especializados en diseño, cálculo e instalación de sistemas eléctricos
                                que cumplen con todas las normativas colombianas. Nuestro equipo de profesionales certificados
                                garantiza instalaciones seguras, eficientes y duraderas.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="bg-gradient-to-br from-primary-1/10 to-primary-2/10 rounded-xl p-6">
                                    <div className="text-3xl mb-2">🏠</div>
                                    <h3 className="font-bold text-primary-3 mb-1">Residencial</h3>
                                    <p className="text-sm text-gray-600">Hogares y apartamentos</p>
                                </div>
                                <div className="bg-gradient-to-br from-primary-2/10 to-primary-3/10 rounded-xl p-6">
                                    <div className="text-3xl mb-2">🏢</div>
                                    <h3 className="font-bold text-primary-3 mb-1">Comercial</h3>
                                    <p className="text-sm text-gray-600">Oficinas y locales</p>
                                </div>
                                <div className="bg-gradient-to-br from-primary-3/10 to-primary-4/10 rounded-xl p-6">
                                    <div className="text-3xl mb-2">🏭</div>
                                    <h3 className="font-bold text-primary-3 mb-1">Industrial</h3>
                                    <p className="text-sm text-gray-600">Plantas y bodegas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-3 text-center mb-12">
                            Nuestros Servicios Especializados
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="text-4xl lg:text-5xl transform group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg lg:text-xl font-bold text-primary-3 mb-2 group-hover:text-primary-2 transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-sm lg:text-base text-gray-600 mb-4 leading-relaxed">
                                                {service.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {service.types.map((type, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-xs font-medium bg-primary-1/10 text-primary-3 px-3 py-1 rounded-full"
                                                    >
                                                        {type}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Image Gallery */}
                <section className="py-12 sm:py-16 lg:py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-3 text-center mb-12">
                            Proyectos Realizados
                        </h2>

                        <ImageGallery
                            basePath="/services-images/instalaciones-electricas"
                            count={6}
                            altPrefix="Proyecto de instalación eléctrica"
                        />
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-5 to-primary-4 text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                                ¿Por Qué Elegirnos?
                            </h2>
                            <p className="text-base sm:text-lg text-gray-200">
                                Somos tu mejor opción para instalaciones eléctricas en Colombia
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            <div className="text-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                                    <div className="text-4xl mb-3">✓</div>
                                    <h3 className="font-bold text-lg mb-2">Certificados RETIE</h3>
                                    <p className="text-sm text-gray-200">Cumplimiento total de normativas</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                                    <div className="text-4xl mb-3">⚡</div>
                                    <h3 className="font-bold text-lg mb-2">Equipos Modernos</h3>
                                    <p className="text-sm text-gray-200">Tecnología de última generación</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                                    <div className="text-4xl mb-3">👷</div>
                                    <h3 className="font-bold text-lg mb-2">Personal Calificado</h3>
                                    <p className="text-sm text-gray-200">Técnicos certificados</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                                    <div className="text-4xl mb-3">🛡️</div>
                                    <h3 className="font-bold text-lg mb-2">Garantía Total</h3>
                                    <p className="text-sm text-gray-200">Respaldo en cada proyecto</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-20 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-3 mb-6">
                            ¿Listo para tu Proyecto Eléctrico?
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Contáctanos hoy y recibe una cotización personalizada sin compromiso
                        </p>
                        <a
                            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hola, estoy interesado en servicios de Instalaciones Eléctricas')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all transform hover:scale-105 shadow-2xl"
                        >
                            <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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