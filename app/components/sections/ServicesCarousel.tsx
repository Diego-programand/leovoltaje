'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '@/app/lib/constants';
import type { Variants } from 'framer-motion';

export default function ServicesCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);

    const DURATION = 3000; // 3 segundos

    // Función para cambiar de slide
    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection);
        setIndex((prevIndex) => (prevIndex + newDirection + SERVICES.length) % SERVICES.length);
        setProgress(0); // Reiniciar barra al cambiar
    }, []);

    // Lógica del Temporizador y Barra de Progreso
    useEffect(() => {
        if (isPaused) return;

        const interval = 30; // Actualización suave cada 30ms
        const step = (interval / DURATION) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    paginate(1);
                    return 0;
                }
                return prev + step;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [index, isPaused, paginate]);

    // Reset total al interactuar manualmente
    const handleManualNav = (dir: number) => {
        setProgress(0);
        paginate(dir);
    };

    const slideVariants: Variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { x: { type: "tween", duration: 0.6, ease: "easeInOut" }, opacity: { duration: 0.4 } }
        },
        exit: (direction: number) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            transition: { x: { type: "tween", duration: 0.6, ease: "easeInOut" }, opacity: { duration: 0.4 } }
        }),
    };

    return (
        <section
            className="relative h-[85vh] w-full overflow-hidden bg-primary-5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={index}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 flex items-center"
                >
                    {/* FONDO CON OVERLAY (Más oscuro en móvil para Bree Serif) */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                        style={{ backgroundImage: `url('/images/carousel/service-${index + 1}.jpg')` }}
                    >
                        <div className="absolute inset-0 bg-black/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-primary-5 lg:via-primary-5/70 lg:to-transparent" />
                    </div>

                    <div className="relative z-10 container mx-auto px-6">
                        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 items-center">

                            {/* TEXTOS */}
                            <div className="text-white text-center lg:text-left space-y-6">
                                <div className="space-y-2">
                                    <span className="text-white text-s font-bold tracking-widest uppercase">Servicio {index + 1}</span>
                                    <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-bree leading-tight">
                                        {SERVICES[index].title}
                                    </h2>
                                </div>
                                <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                    {SERVICES[index].description}
                                </p>
                                <a
                                    href={`/service/${SERVICES[index].slug}`}
                                    className="inline-block bg-primary-1 hover:bg-primary-2 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl active:scale-95"
                                >
                                    VER MÁS INFORMACIÓN
                                </a>
                            </div>

                            {/* IMAGEN ESTÁTICA BORDE 3PX */}
                            <div className="w-full max-w-[300px] sm:max-w-[450px] lg:max-w-full mx-auto">
                                <div className="relative aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-[2px] border-white/30">
                                    <img src={`/images/carousel/service-${index + 1}.jpg`} alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* NAVEGACIÓN FLECHAS (Visibles en todo dispositivo) */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 justify-between items-center z-40 flex lg:inset-x-8">
                <button onClick={() => handleManualNav(-1)} className="p-3 lg:p-5 rounded-full bg-black/40 hover:bg-primary-1 text-white backdrop-blur-md border border-white/10 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={() => handleManualNav(1)} className="p-3 lg:p-5 rounded-full bg-black/40 hover:bg-primary-1 text-white backdrop-blur-md border border-white/10 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            {/* BARRA DE PROGRESO INFERIOR */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10 z-50">
                <motion.div
                    className="h-full bg-primary-1"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                />
            </div>
        </section>
    );
}