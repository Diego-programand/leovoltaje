'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SERVICES } from '@/app/lib/constants';
import { getCarouselImageUrl } from '@/app/lib/cloudinary-config';

export default function ServicesCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [showHint, setShowHint] = useState(true);

    const AUTO_TIME = 10000;

    // Función segura para calcular el siguiente índice
    const wrap = (nextIndex: number) => {
        const len = SERVICES.length;
        return ((nextIndex % len) + len) % len;
    };

    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection);
        // Usamos la versión funcional de setState para evitar saltos por asincronía
        setIndex((prev) => wrap(prev + newDirection));
        setShowHint(false);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            paginate(1);
        }, AUTO_TIME);
        return () => clearInterval(timer);
    }, [isPaused, paginate]);

    const handleManualNav = (dir: number) => {
        setIsPaused(true);
        paginate(dir);
    };

    const textVariants: Variants = {
        enter: { y: 30, opacity: 0 },
        center: { 
            y: 0, 
            opacity: 1, 
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
        },
        exit: { 
            y: -20, 
            opacity: 0, 
            transition: { duration: 0.3 } 
        }
    };

    return (
        <section
            className="relative h-[85vh] lg:h-[80vh] w-full overflow-hidden bg-black"
            onTouchStart={(e) => {
                setTouchStart(e.targetTouches[0].clientX);
                setShowHint(false);
            }}
            onTouchEnd={(e) => {
                const touchEnd = e.changedTouches[0].clientX;
                const distance = touchStart - touchEnd;
                if (distance > 50) handleManualNav(1);
                if (distance < -50) handleManualNav(-1);
            }}
        >
            {/* HINT TÁCTIL */}
            <AnimatePresence>
                {showHint && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lg:hidden absolute inset-0 z-[60] flex items-center justify-center pointer-events-none"
                    >
                        <motion.div 
                            animate={{ x: [-20, 20, -20] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="bg-black/30 backdrop-blur-md p-5 rounded-full border border-white/20"
                        >
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={index} // Al cambiar el index, AnimatePresence sabe exactamente qué slide entra
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* IMAGEN DE FONDO */}
                    <motion.div
                        initial={{ scale: 1.15 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, ease: "linear" }} // Zoom ultra lento y fluido
                        className="absolute inset-0 w-full h-full bg-cover"
                        style={{ 
                            backgroundImage: `url('${getCarouselImageUrl(index)}')`, 
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50 lg:bg-transparent lg:bg-gradient-to-r lg:from-black lg:via-black/60 lg:to-transparent" />
                    </motion.div>

                    {/* TEXTO */}
                    <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
                        <div className="max-w-4xl">
                            <motion.div
                                variants={textVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-[2px] w-12 bg-primary-1 hidden lg:block" />
                                    <span className="text-white font-bold tracking-[0.3em] text-[10px] lg:text-sm uppercase opacity-80">
                                        Grupo Leovoltaje
                                    </span>
                                </div>

                                <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold font-bree text-white leading-[1.1]">
                                    {SERVICES[index]?.title}
                                </h2>

                                <p className="text-lg lg:text-2xl text-gray-200 max-w-2xl leading-relaxed font-light">
                                    {SERVICES[index]?.description}
                                </p>

                                <div className="pt-4">
                                    <a
                                        href={`/service/${SERVICES[index]?.slug}`}
                                        className="inline-block px-8 py-4 bg-primary-3 text-white font-bold rounded-sm hover:bg-primary-4 hover:scale-105 transition-transform active:scale-95 shadow-xl uppercase tracking-widest text-sm"
                                    >
                                        Ver detalles
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* BOTONES */}
            <div className="absolute bottom-8 right-6 lg:bottom-12 lg:right-16 flex items-center z-50">
                <button 
                    onClick={() => handleManualNav(-1)}
                    className="p-4 lg:p-6 text-white/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/10 rounded-l-md"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button 
                    onClick={() => handleManualNav(1)}
                    className="p-4 lg:p-6 text-white/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/10 border-l-0 rounded-r-md"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            {/* INDICADORES (PIPS) */}
            <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">
                {SERVICES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > index ? 1 : -1);
                            setIndex(idx);
                            setIsPaused(true);
                        }}
                        className={`transition-all duration-500 ${
                            idx === index ? 'h-10 w-[3px] bg-primary-1' : 'h-4 w-[2px] bg-white/20 hover:bg-white/40'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}