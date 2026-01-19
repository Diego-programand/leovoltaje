'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getGalleryUrls } from '@/app/lib/cloudinary-config';

interface CloudinaryGalleryProps {
  serviceSlug: string;
  title?: string;
}

export default function CloudinaryGallery({ serviceSlug, title = 'Instalaciones Realizadas' }: CloudinaryGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const galleryAssets = getGalleryUrls(serviceSlug);

  if (!galleryAssets || galleryAssets.length === 0) {
    return null;
  }

  const openLightbox = (index: number) => {
    if (!galleryAssets[index].isVideo) {
      setSelectedImage(index);
    }
  };

  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage === null) return;
    let newIndex = selectedImage - 1;
    // Saltar videos
    while (newIndex >= 0 && galleryAssets[newIndex].isVideo) {
      newIndex--;
    }
    if (newIndex >= 0) {
      setSelectedImage(newIndex);
    }
  };

  const goToNext = () => {
    if (selectedImage === null) return;
    let newIndex = selectedImage + 1;
    // Saltar videos
    while (newIndex < galleryAssets.length && galleryAssets[newIndex].isVideo) {
      newIndex++;
    }
    if (newIndex < galleryAssets.length) {
      setSelectedImage(newIndex);
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
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
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
                  {asset.isVideo ? '▶ Video' : '🔍 Ver imagen'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox para imágenes */}
        <AnimatePresence>
          {selectedImage !== null && !galleryAssets[selectedImage].isVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Botón cerrar */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-primary-1 transition-colors z-50"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navegación izquierda */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 text-white hover:text-primary-1 transition-colors z-50 p-2"
                disabled={selectedImage === 0}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Imagen */}
              <motion.img
                key={selectedImage}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={galleryAssets[selectedImage].url}
                alt={`${serviceSlug} instalación ${selectedImage + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Navegación derecha */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 text-white hover:text-primary-1 transition-colors z-50 p-2"
                disabled={selectedImage === galleryAssets.length - 1}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Contador */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
                {selectedImage + 1} / {galleryAssets.filter(a => !a.isVideo).length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}