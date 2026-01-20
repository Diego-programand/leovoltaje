'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, COMPANY_INFO, SERVICES } from '@/app/lib/constants';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
            }`}>
            <nav className="container mx-auto px-4 sm:px-8">
                <div className="flex items-center justify-between">
                    {/* LOGO */}
                    <a href="/" className="flex items-center gap-4 group">
                        <div className="relative w-14 h-14 sm:w-20 sm:h-20">
                            <Image src="/favicon.svg" alt="Logo" fill className="object-contain transition-transform group-hover:scale-110" priority />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className={`font-sm leading-none tracking-tighter text-xl sm:text-2xl ${isScrolled ? 'text-primary-5' : 'text-white'}`}>GRUPO</span>
                            <span className={`font-sm leading-none tracking-tighter text-xl sm:text-2xl ${isScrolled ? 'text-primary-5' : 'text-white'}`}>LEOVOLTAJE</span>
                        </div>
                    </a>

                    {/* DESKTOP NAVIGATION */}
                    <ul className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href} className="relative group/item"
                                onMouseEnter={() => link.label === 'Servicios' && setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}>

                                <a href={link.href} className={`font-sm text-s uppercase tracking-wide transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary-1' : 'text-white hover:text-primary-1'
                                    }`}>
                                    {link.label}
                                </a>

                                {/* DESKTOP DROPDOWN LIST */}
                                {link.label === 'Servicios' && (
                                    <AnimatePresence>
                                        {isServicesOpen && (
                                            <motion.ul
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute left-0 mt-2 w-72 bg-white shadow-2xl rounded-sm overflow-hidden py-2 border border-gray-100 z-50"
                                            >
                                                {SERVICES.map((service, idx) => {
                                                    // Asignamos el componente del icono a una variable con Mayúscula
                                                    const ServiceIcon = service.icon;
                                                    return (
                                                        <li key={idx}>
                                                            <a
                                                                href={`/service/${service.slug}`}
                                                                className="block px-4 py-3 text-sm text-black hover:bg-primary-1 hover:text-white transition-colors group/link"
                                                            >
                                                                <div className="flex items-center gap-3">
                                                                    <ServiceIcon size={18} strokeWidth={2} className="text-primary-1 group-hover/link:text-white transition-colors" />
                                                                    <span className="font-medium">{service.title}</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    );
                                                })}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                )}
                            </li>
                        ))}
                        <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" className="bg-primary-1 text-white px-6 py-2 rounded-xl font-sm hover:bg-primary-2 transition-all shadow-lg active:scale-105 text-sm uppercase">
                            WhatsApp
                        </a>
                    </ul>

                    {/* MOBILE BUTTON */}
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`md:hidden p-2 ${isScrolled ? 'text-primary-5' : 'text-white'}`}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth={2.5} /> : <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2.5} />}
                        </svg>
                    </button>
                </div>

                {/* MOBILE MENU ANIMATED */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl overflow-hidden"
                        >
                            <ul className="p-6 space-y-2">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.href}>
                                        {link.label === 'Servicios' ? (
                                            <div className="space-y-2">
                                                <button
                                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                                    className="w-full flex justify-between items-center text-primary-5 font-bold py-3 text-lg border-b border-gray-50"
                                                >
                                                    {link.label}
                                                    <svg className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth={2} /></svg>
                                                </button>

                                                <AnimatePresence>
                                                    {isServicesOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -10 }}
                                                            className="pl-4 space-y-1 bg-gray-50 rounded-lg py-2"
                                                        >
                                                            {SERVICES.map((s, i) => {
                                                                const MobIcon = s.icon;
                                                                return (
                                                                    // Dentro de SERVICES.map en el menú móvil
                                                                    <motion.a
                                                                        key={i}
                                                                        href={`/service/${s.slug}`}
                                                                        whileTap={{ scale: 0.95, backgroundColor: "rgba(0, 0, 0, 0.05)" }} // Efecto de presión
                                                                        onClick={() => {
                                                                            setIsMobileMenuOpen(false);
                                                                            setIsServicesOpen(false);
                                                                        }}
                                                                        className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-600 font-medium text-sm transition-colors"
                                                                    >
                                                                        <MobIcon size={18} className="text-primary-1" />
                                                                        <span>{s.title}</span>
                                                                    </motion.a>
                                                                );
                                                            })}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <a href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-primary-5 font-bold py-3 text-lg border-b border-gray-50">
                                                {link.label}
                                            </a>
                                        )}
                                    </li>
                                ))}
                                <li className="pt-4">
                                    <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} className="flex items-center justify-center gap-3 bg-primary-1 text-white px-6 py-4 rounded-xl font-bold shadow-md uppercase tracking-widest">
                                        WhatsApp Directo
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}