'use client';

import { useState } from 'react';
import { COMPANY_INFO, SERVICES } from '@/app/lib/constants';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });

    const handleWhatsAppRedirect = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `*Nueva Solicitud - Grupo Leovoltaje*%0A%0A` +
            `*Nombre:* ${formData.name}%0A` +
            `*Correo:* ${formData.email}%0A` +
            `*Servicio:* ${formData.service || 'Consulta General'}%0A` +
            `*Mensaje:* ${formData.message}`;

        const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contacto" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto bg-white rounded-[2rem] border border-primary-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
                    <div className="flex flex-col lg:flex-row">

                        {/* PANEL DE INFORMACIÓN: ALTO CONTRASTE */}
                        <div className="bg-primary-5/90 relative p-10 md:p-14 lg:w-2/5 text-white overflow-hidden">
                            {/* Decoración sutil de fondo para que no sea un bloque plano */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-1/20 rounded-full -mr-16 -mt-16 blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-1/10 rounded-full -ml-16 -mb-16 blur-3xl" />

                            <div className="relative z-10">
                                <h2 className="text-4xl font-bold mb-4 tracking-tight">¡Hablemos!</h2>
                                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                                    Estamos listos para solucionar tus necesidades elétricas con seguridad y eficiencia técnica.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-5">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-1 flex items-center justify-center shadow-[0_0_15px_rgba(56,28,227,0.4)]">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-black uppercase tracking-widest text-xs mb-1">Disponibilidad</p>
                                            <p className="text-xl font-semibold text-white">Lunes a Sábado</p>
                                            <p className="text-sm text-gray-400">Atención técnica inmediata</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-1 flex items-center justify-center border border-white/10 hover:border-primary-1 transition-colors">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-black uppercase tracking-widest text-xs mb-1">Cobertura</p>
                                            <p className="text-xl font-semibold text-white">Antioquia - Medellin</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16 pt-8 border-t border-white/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                                        <p className="text-sm font-medium text-gray-300">Cumplimiento Normativo RETIE</p>
                                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                                        <p className="text-sm font-medium text-gray-300">Profesional certificado</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FORMULARIO: LIMPIO Y MODERNO */}
                        <div className="p-10 md:p-14 lg:w-3/5 bg-white">
                            <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary-5 uppercase tracking-wider ml-1">Tu Nombre</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Ej. Juan Pérez"
                                            className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-primary-1 focus:bg-white outline-none transition-all text-primary-5 placeholder:text-gray-400"
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary-5 uppercase tracking-wider ml-1">Email</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="tu@correo.com"
                                            className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-primary-1 focus:bg-white outline-none transition-all text-primary-5 placeholder:text-gray-400"
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary-5 uppercase tracking-wider ml-1">Servicio Requerido</label>
                                    <div className="relative">
                                        <select
                                            required
                                            className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-primary-1 focus:bg-white outline-none appearance-none text-primary-5 font-medium transition-all"
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        >
                                            <option value="">Selecciona una opción...</option>
                                            {SERVICES.map(s => (
                                                <option key={s.id} value={s.title}>{s.title}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-primary-1">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth={3} /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary-5 uppercase tracking-wider ml-1">Detalles del Proyecto</label>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Cuéntanos brevemente qué necesitas..."
                                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-primary-1 focus:bg-white outline-none transition-all resize-none text-primary-5 placeholder:text-gray-400"
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-2 to-primary-2 hover:from-primary-3 hover:to-primary-3 text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-primary-1/50 transition-ease-in-out"
                                >
                                    {/* WhatsApp Icon */}
                                    <svg
                                        className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    <span>Contáctanos por WhatsApp</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}