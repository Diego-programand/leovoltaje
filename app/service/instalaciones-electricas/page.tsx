'use client';

import { motion } from 'framer-motion';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import ServiceHero from '@/app/components/sections/ServiceHero';
import { COMPANY_INFO } from '@/app/lib/constants';
import CloudinaryGallery from '@/app/components/sections/CloudinaryGallery';
import { getHeroVideoUrl } from '@/app/lib/cloudinary-config';

// Iconos Técnicos Profesionales
import {
    Zap,
    Activity,
    Home,
    Building2,
    Factory,
    Unplug,
    Drill,
    Box,
    GitMerge,
    Lightbulb,
    Sun,
    ShieldCheck,
    Cpu,
    HardHat,
    Award,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';

export default function InstalacionesElectricasPage() {
    const services = [
        {
            title: 'Acometidas Eléctricas',
            description: 'Cálculo e instalación de sistemas de entrada aérea y subterránea con transformadores de alta potencia.',
            icon: Zap,
            types: ['Residencial', 'Comercial', 'Industrial']
        },
        {
            title: 'Medidores de Energía',
            description: 'Instalación de gabinetes de medida y sistemas herméticos bajo normativa RETIE.',
            icon: Activity,
            types: ['Residencial', 'Comercial', 'Industrial']
        },
        {
            title: 'Sistemas de Puesta a Tierra',
            description: 'Protección total contra descargas atmosféricas mediante mallas de tierra y varillas de cobre certificadas.',
            icon: Unplug,
            types: ['Residencial', 'Comercial', 'Industrial']
        },
        {
            title: 'Canalización Técnica',
            description: 'Ducterías en PVC, EMT e IMC con bandejas tipo canastilla para ordenamiento industrial.',
            icon: Drill,
            types: ['Industrial', 'Comercial']
        },
        {
            title: 'Tableros de Control',
            description: 'Montaje de tableros de control, potencia y distribución con breakers previamente seleccionados y peinado de cables.',
            icon: Box,
            types: ['Residencial', 'Comercial', 'Industrial']
        },
        {
            title: 'Circuitos Ramales',
            description: 'Optimización del balanceo de fases y distribución de cargas para suprimir sobrecargas y garantizar la integridad operativa del sistema. ',
            icon: GitMerge,
            types: ['Residencial', 'Comercial', 'Industrial']
        },
        {
            title: 'Iluminación Interior LED',
            description: 'Sistemas inteligentes de iluminación para máximo ahorro y confort visual.',
            icon: Lightbulb,
            types: ['Residencial', 'Comercial']
        },
        {
            title: 'Iluminación de Fachadas',
            description: 'Proyectos eléctricos de iluminación exterior y seguridad perimetral.',
            icon: Sun,
            types: ['Comercial', 'Residencial']
        }
    ];

    const videoCloudinary = getHeroVideoUrl('instalaciones-electricas');

    return (
        <>
            <Header />

            <main className="overflow-hidden">
                <ServiceHero
                    title="Instalaciones Eléctricas Profesionales"
                    description="Energía segura y eficiente respaldada por certificaciones técnicas internacionales."
                    videoSrc={videoCloudinary}
                />

                {/* Sección de Introducción con Stats */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-10 items-center">
                            <div className="lg:w-1/2 space-y-6 lg:ml-20">
                                <span className="text-primary-1 font-bold tracking-widest uppercase text-sm mb-4 block">Especialistas Certificados</span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-4 mb-6 font-bree leading-tight">
                                    Potencia, Seguridad y <br /><span className="text-primary-2">Normativa RETIE</span>
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    En <strong>Grupo Leovoltaje</strong>, no solo conectamos cables; diseñamos la columna vertebral energética de tu proyecto. Cada instalación es sometida a rigurosas pruebas de conductividad y seguridad para garantizar el respaldo de tu inversión.
                                </p>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="text-green-500" />
                                        <span className="font-semibold text-gray-800">Norma RETIE</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="text-green-500" />
                                        <span className="font-semibold text-gray-800">Técnicos Conte</span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 w-full">
                                {[
                                    { t: 'Residencial', d: 'Hogares', i: Home, c: 'from-blue-500/10' },
                                    { t: 'Comercial', d: 'Negocios Imparables', i: Building2, c: 'from-orange-500/10' },
                                    { t: 'Industrial', d: 'Plantas de Producción', i: Factory, c: 'from-primary-1/10' }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ x: 20 }}
                                        className={`bg-gradient-to-r ${item.c} to-transparent p-6 rounded-2xl border-l-4 border-primary-1 flex items-center gap-6`}
                                    >
                                        <div className="bg-white p-3 rounded-xl shadow-sm">
                                            <item.i className="text-primary-3" size={32} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary-3">{item.t}</h4>
                                            <p className="text-sm text-gray-600">{item.d}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grid de Servicios con Efecto Glassmorphism */}
                <section className="py-20 bg-gray-50 relative">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary-3 mb-4 font-bree">Portafolio de Ingeniería</h2>
                            <p className="text-gray-600">Soluciones técnicas ejecutadas con precisión milimétrica y materiales de primera calidad.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <Icon size={120} strokeWidth={1} />
                                        </div>

                                        <div className="bg-primary-1/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary-1 group-hover:bg-primary-1 group-hover:text-white transition-all duration-500">
                                            <Icon size={32} />
                                        </div>

                                        <h3 className="text-xl font-bold text-primary-3 mb-3">{service.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 h-12">
                                            {service.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
                                            {service.types.map((type, i) => (
                                                <span key={i} className="text-[10px] uppercase tracking-widest font-bold bg-gray-100 text-gray-500 px-3 py-1 rounded-md">
                                                    {type}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <CloudinaryGallery
                    serviceSlug="instalaciones-electricas"
                    title="Evidencia de Calidad"
                />

                {/* Beneficios - Estilo Tarjetas de Confianza */}
                <section className="py-20 bg-primary-4 text-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            <div className="lg:col-span-1">
                                <h2 className="text-3xl font-bold font-bree mb-4">¿Por qué confiar en nosotros?</h2>
                                <p className="text-blue-100 mb-6">Nuestra reputación se basa en la seguridad de quienes habitan los espacios que electrificamos.</p>
                                <ArrowRight className="text-white hidden lg:block" size={40} />
                            </div>

                            {[
                                { i: ShieldCheck, t: 'Garantía RETIE', d: 'Proyectos 100% aprobables para dictamen de inspección.' },
                                { i: Cpu, t: 'Tecnología', d: 'Herramientas preparadas para cada tipo de instalación.' },
                                { i: Award, t: 'Certificación', d: 'Personal técnico con matrículas profesionales vigentes.' }
                            ].map((b, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <b.i className="text-white mb-4" size={40} />
                                    <h3 className="text-xl font-bold mb-2">{b.t}</h3>
                                    <p className="text-sm text-blue-100/80 leading-relaxed">{b.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* CTA Final Transformado - Instalaciones Eléctricas */}
                <section className="py-24 bg-white relative">
                    <div className="container mx-auto px-4">
                        <div className="bg-gradient-to-br from-primary-2 to-primary-3 rounded-[3rem] p-10 lg:p-20 text-center text-white shadow-2xl relative overflow-hidden">
                            {/* Elemento Decorativo de fondo */}
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                <Zap size={450} className="absolute -top-20 -left-20" />
                            </div>

                            <div className="relative z-10 max-w-4xl mx-auto">
                                <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-bree leading-tight">
                                    ¿Su instalación es una inversión o un riesgo latente?
                                </h2>

                                <p className="text-xl text-blue-50 mb-10 leading-relaxed">
                                    No deje la seguridad de su patrimonio en manos de la improvisación.
                                    Diseñamos sistemas eléctricos de alto desempeño bajo <strong className=" text-white underline decoration-primary-1">normativa RETIE</strong> que reducen su factura de energía y eliminan riesgos de cortocircuito desde el primer día.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hola, necesito asesoría en instalaciones eléctricas')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-4 bg-white text-primary-3 px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:bg-primary-2 hover:text-white transition-all group"
                                    >
                                        <Zap className="fill-current text-primary-3 group-hover:text-white transition-colors" />
                                        Contactar un Experto
                                    </motion.a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}