'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getGalleryUrls } from '@/app/lib/cloudinary-config';


//app/components/sections/CloudinaryGallery.tsx
interface CloudinaryGalleryProps {
  serviceSlug: string;
  title?: string;
}

export default function CloudinaryGallery({ serviceSlug, title = 'Instalaciones Realizadas' }: CloudinaryGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const galleryAssets = getGalleryUrls(serviceSlug);

  if (!galleryAssets || galleryAssets.length === 0) {
    return null;
  }

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    // Bloquear scroll de múltiples formas para máxima compatibilidad
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.documentElement.style.overflow = 'hidden';
    
    // Ocultar navbar
    const header = document.querySelector('header');
    if (header) {
      (header as HTMLElement).style.display = 'none';
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    // Restaurar scroll
    document.body.style.overflow = '';
    document.body.style.height = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.documentElement.style.overflow = '';
    
    // Restaurar navbar
    const header = document.querySelector('header');
    if (header) {
      (header as HTMLElement).style.display = '';
    }
  };

  const goToPrevious = () => {
    if (selectedImage === null) return;
    const newIndex = selectedImage - 1;
    if (newIndex >= 0) {
      setSelectedImage(newIndex);
    }
  };

  const goToNext = () => {
    if (selectedImage === null) return;
    const newIndex = selectedImage + 1;
    if (newIndex < galleryAssets.length) {
      setSelectedImage(newIndex);
    }
  };

  // Soporte para tecla ESC y flechas del teclado
  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // Cleanup al desmontar componente
  useEffect(() => {
    return () => {
      // Asegurar que el scroll se restaure si el componente se desmonta
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
      
      const header = document.querySelector('header');
      if (header) {
        (header as HTMLElement).style.display = '';
      }
    };
  }, []);

  // Soporte para gestos táctiles (swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNext(); // Swipe left
    } else if (distance < -minSwipeDistance) {
      goToPrevious(); // Swipe right
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-3 text-center mb-12">
          {title}
        </h2>
        
        {/* Grid de galería */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryAssets.map((asset, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {asset.isVideo ? (
                <video
                  src={asset.url}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
              ) : (
                <img
                  src={asset.url}
                  alt={`${serviceSlug} instalación ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              )}
              
              {/* Overlay con efecto hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white font-bold text-sm">
                  {asset.isVideo ? 'Reproducir Video' : 'Ver Imagen Ampliada'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox para imágenes Y videos */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[200] flex items-center justify-center p-4"
              onClick={closeLightbox}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Botón cerrar - MÁS VISIBLE */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white bg-red-600 hover:bg-red-700 transition-colors z-[210] p-3 sm:p-4 rounded-full shadow-2xl group"
                aria-label="Cerrar galería"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Texto ESC para desktop */}
              <div className="hidden sm:block absolute top-6 left-6 text-white/60 text-sm">
                Presiona <kbd className="px-2 py-1 bg-white/10 rounded">ESC</kbd> para cerrar
              </div>

              {/* Navegación izquierda */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-2 sm:left-4 text-white hover:text-primary-1 transition-all z-[210] p-3 sm:p-4 bg-black/50 hover:bg-black/70 rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={selectedImage === 0}
                aria-label="Imagen anterior"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Contenido: Imagen o Video */}
              {galleryAssets[selectedImage].isVideo ? (
                <motion.video
                  key={selectedImage}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  src={galleryAssets[selectedImage].url}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <motion.img
                  key={selectedImage}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  src={galleryAssets[selectedImage].url}
                  alt={`${serviceSlug} instalación ${selectedImage + 1}`}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              )}

              {/* Navegación derecha */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-2 sm:right-4 text-white hover:text-primary-1 transition-all z-[210] p-3 sm:p-4 bg-black/50 hover:bg-black/70 rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={selectedImage === galleryAssets.length - 1}
                aria-label="Siguiente imagen"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Contador mejorado */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm sm:text-base bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full font-bold shadow-xl">
                <span className="text-primary-1">{selectedImage + 1}</span>
                <span className="mx-2">/</span>
                <span>{galleryAssets.length}</span>
                <span className="ml-3 text-xs text-gray-300">
                  {galleryAssets[selectedImage].isVideo ? 'Video' : 'Imagen'}
                </span>
              </div>

              {/* Indicador de swipe en móvil */}
              <div className="sm:hidden absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/50 text-xs">
                Desliza ← → para navegar
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}