'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/app/lib/constants';

interface ServiceCTAProps {
  title: React.ReactNode;
  description: string;
  ctaText: string;
  whatsappMessage: string;
  icons?: React.ReactNode;
  variant?: 'default' | 'eco' | 'modern' | 'danger';
}

export default function ServiceCTA({
  title,
  description,
  ctaText,
  whatsappMessage,
  icons,
  variant = 'default'
}: ServiceCTAProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Efecto Parallax: Mueve el fondo de -10% a 10% de su altura
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-black text-white"
    >
      {/* FONDO CON PARALLAX */}
      <motion.div 
        style={{ 
          y,
          backgroundImage: "url('/images/cta-background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className="absolute inset-0 scale-125 opacity-40" // Opacidad para oscurecer
      />

      {/* OVERLAY EXTRA (Opcional según variante para dar color al fondo) */}
      <div className={`absolute inset-0 pointer-events-none opacity-20 ${
        variant === 'eco' ? 'bg-green-900' : 
        variant === 'modern' ? 'bg-blue-900' : 
        variant === 'danger' ? 'bg-red-900' : 'bg-black'
      }`} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* ICONOS */}
          {icons && (
            <div className="flex justify-center gap-4 mb-8 opacity-90">
              {icons}
            </div>
          )}

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tighter">
            {title}
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            {description}
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              inline-flex items-center gap-4 px-10 py-5 rounded-full font-bold text-lg shadow-2xl transition-all
              ${variant === 'eco' ? 'bg-green-600 hover:bg-green-500 text-white' : 
                variant === 'modern' ? 'bg-white text-blue-700 hover:bg-gray-100' : 
                'bg-primary-3 hover:bg-primary-2 text-white'}
            `}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="uppercase tracking-wider">{ctaText}</span>
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}