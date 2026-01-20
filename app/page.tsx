import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import ServicesCarousel from './components/sections/ServicesCarousel';
import ContactSection from './components/sections/ContactSection';
import { getHeroVideoUrl } from './lib/cloudinary-config';


export default function Home() {
  const stats = [
    { val: "+10", label: "Años de Experiencia", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { val: "100%", label: "Calidad Garantizada", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { val: "RETIE", label: "Normativa Legal", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
    { val: "Premium", label: "Materiales Certificados", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" }, // NUEVA
    { val: "Expertos", label: "Personal Calificado", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }, // NUEVA
    { val: "Cobertura", label: "Medellin/Antioquía", icon: "M12 2a8 8 0 00-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 001.3 0C13 21.5 20 15.4 20 10a8 8 0 00-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" },
    { val: "+500", label: "Proyectos Listos", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
    { val: "Rápido", label: "Cotización Inmediata", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];

  // Duplicamos las stats para que el scroll sea infinito
  const infiniteStats = [...stats, ...stats];

  const videoCloudinary = getHeroVideoUrl('home');
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="inicio" className="relative h-[85vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              key={videoCloudinary} // Ayuda a React a recargar si la URL cambia
              className="absolute inset-0 w-full h-full object-cover object-bottom"
            >
              {/* Usamos la variable de Cloudinary en lugar de rutas locales */}
              <source src={videoCloudinary} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-5/90 via-primary-4/30 to-primary-3/20" />
          </div>
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sm mb-4 sm:mb-6 text-white animate-fade-in">
              GRUPO LEOVOLTAJE
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-sm text-gray-100 max-w-3xl mx-auto">
              Soluciones Eléctricas Profesionales para tu Hogar y Empresa
            </h2>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-2 to-primary-3 hover:from-primary-2 hover:to-primary-3 text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-primary-1/50 transition-ease-in-out"
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
              {/* Animated arrow */}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
            <a href="#servicios" className="flex flex-col items-center text-white/80 hover:text-white transition-colors animate-bounce">
              <span className="text-xs sm:text-sm mb-2 font-medium">Desliza para ver más</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>

        <section id="servicios" className="relative py-24 bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #381ce3 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>

          <div className="relative container mx-auto px-6 mb-15 text-center">
            {/* Badge Animado */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-1/10 border border-primary-1/20 text-primary-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-1 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-1"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-[0.2em]">Excelencia RETIE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary-4 mb-6 tracking-tight font-bree">Nuestros Servicios</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Ingeniería eléctrica de alto nivel respaldada por años de experiencia y un compromiso inquebrantable con la seguridad.
            </p>
          </div>

          {/* CINTA INFINITA REFORZADA */}
          <div className="relative overflow-hidden cursor-default">
            {/* Sombras laterales más profundas para mayor enfoque central */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee py-8">
              {infiniteStats.map((stat, i) => (
                <div
                  key={i}
                  className="mx-4 w-[280px] md:w-[320px] flex-shrink-0 bg-white p-8 rounded-[2.5rem] 
                             border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] 
                             hover:shadow-primary-1/10 hover:border-primary-1/20 
                             transition-all duration-700 relative group"
                >
                  {/* Borde sutil de profundidad (Ring) */}
                  <div className="absolute inset-0 rounded-[2.5rem] border border-primary-3/20 pointer-events-none" />

                  <div className="flex flex-col items-center text-center relative z-20">
                    <div className="w-16 h-16 mb-6 rounded-2xl bg-gray-50 flex items-center justify-center text-primary-1 
                                    group-hover:bg-primary-1 group-hover:text-white transition-all duration-500">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                      </svg>
                    </div>
                    <h3 className="text-4xl font-black text-primary-4 mb-2 tracking-tighter group-hover:scale-105 transition-transform duration-500">
                      {stat.val}
                    </h3>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.15em] leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesCarousel />

        {/* Contact Section Placeholder */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}