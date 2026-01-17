'use client';

import { COMPANY_INFO, NAV_LINKS, SERVICES } from '@/app/lib/constants';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-5 text-white border-t border-white/10">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Branding y Propósito */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <div className="relative w-12 h-12">
                  <Image 
                    src="/favicon.svg" 
                    alt="Logo Grupo Leovoltaje" 
                    fill 
                    className="object-contain"
                  />
               </div>
               <span className="text-xl font-semi tracking-tighter leading-none">
                 GRUPO<br/>LEOVOLTAJE
               </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expertos en ingeniería eléctrica y soluciones de energía sostenible. 
              Transformamos espacios con seguridad, innovación y cumplimiento normativo (RETIE).
            </p>
            {/* Redes Sociales Sencillas */}
            <div className="flex gap-4">
               <a href="/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-1 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
               </a>
               <a href="/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-1 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
            </div>
          </div>

          {/* Columna 2: Servicios (Mapa de sitio detallado) */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Nuestros Servicios</h4>
            <ul className="grid grid-cols-1 gap-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a href={`/service/${service.slug}`} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <span className="text-[10px]">▶</span> {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navegación</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto Directo */}
          <div className="space-y-6">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contacto</h4>
            <div className="space-y-4">
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">📧</div>
                {COMPANY_INFO.email}
              </a>
              <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-green-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.52s.149.088.407.232c1.332.743 2.846 1.135 4.394 1.136 4.965 0 9.007-4.041 9.009-9.01 0-2.41-1.006-4.673-2.695-6.363-1.689-1.688-3.953-2.696-6.362-2.696-4.966 0-9.007 4.042-9.01 9.01-.001 1.637.452 3.193 1.31 4.545l.232.368-1.01 3.693 3.725-.976z"/></svg>
                </div>
                Atención por WhatsApp
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">📍</div>
                Servicio en toda Colombia
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>Pagina web: OwlyDev</p>
          <p>&copy; {currentYear} {COMPANY_INFO.name}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}