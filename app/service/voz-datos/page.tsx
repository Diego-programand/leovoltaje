import { Metadata } from 'next';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import ServiceHero from '@/app/components/sections/ServiceHero';
import CloudinaryGallery from '@/app/components/sections/CloudinaryGallery';
import { COMPANY_INFO } from '@/app/lib/constants';
import { getHeroVideoUrl } from '@/app/lib/cloudinary-config';
import { 
  Network, 
  Server, 
  Wifi, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  AlertTriangle,
  Cpu
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Redes de Voz y Datos | Cableado Estructurado Colombia',
  description: 'Instalación y mantenimiento de redes de voz y datos, cableado estructurado, racks y wifi empresarial. Conectividad profesional en Colombia.',
};

export default function VozDatosPage() {
  const videoCloudinary = getHeroVideoUrl('voz-datos');

  const services = [
    {
      title: 'Cableado Estructurado',
      description: 'Infraestructura de red certificada con los más altos estándares para garantizar alta velocidad.',
      icon: <Network className="w-10 h-10" />,
      gradient: 'from-primary-4 to-indigo-900',
      features: ['Cat5e, Cat6, Cat6a, Cat7', 'Certificación Fluke', 'Normatividad TIA/EIA', 'Organización Profesional'],
      benefits: ['Velocidad 10 Gbps', 'Escalabilidad', ' troubleshooting rápido']
    },
    {
      title: 'Racks de Datos',
      description: 'Organización profesional de centros de cableado con gestión térmica y eléctrica óptima.',
      icon: <Server className="w-10 h-10" />,
      gradient: 'from-slate-700 to-slate-900',
      features: ['Gabinetes de Piso/Pared', 'PDU Redundantes', 'Gestión de Temperatura', 'Rotulación Profesional'],
      benefits: ['Fácil Mantenimiento', 'Vida útil prolongada', 'Seguridad Física']
    },
    {
      title: 'WiFi Empresarial',
      description: 'Redes inalámbricas de alta densidad con roaming automático y cobertura total garantizada.',
      icon: <Wifi className="w-10 h-10" />,
      gradient: 'from-cyan-800 to-cyan-700',
      features: ['Site Survey previo', 'Roaming sin cortes', 'Portal Cautivo', 'Segmentación VLAN'],
      benefits: ['Cero zonas muertas', 'Seguridad WPA3', 'Gestión Centralizada']
    },
    {
      title: 'Fibra Óptica',
      description: 'Enlaces de alta velocidad para interconexión de edificios o troncales de alto rendimiento.',
      icon: <Zap className="w-10 h-10" />,
      gradient: 'from-blue-700 to-blue-900',
      features: ['Fusión por Arco', 'Monomodo / Multimodo', 'Pruebas OTDR', 'Cajas de Empalme'],
      benefits: ['Inmune a Interferencia', 'Ancho de Banda Máximo', 'Larga Distancia']
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-white">
        <ServiceHero
          title="Redes de Voz y Datos"
          description="Diseñamos el sistema nervioso digital de tu empresa con ingeniería de precisión."
          videoSrc={videoCloudinary}
        />

        {/* Intro Tech - Refactorizado */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                <Cpu className="w-4 h-4" /> Certificación Nivel Tier III
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
                Conectividad Sin Límites
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                En un mundo hiperconectado, la infraestructura de red no es un gasto, es la columna vertebral de tu productividad. 
                Implementamos soluciones de cableado y networking que eliminan cuellos de botella y garantizan la continuidad de tu negocio.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { label: 'Uptime', value: '99.9%', desc: 'Garantizado' },
                  { label: 'Velocidad', value: '10 Gbps', desc: 'Soporte Cat7' },
                  { label: 'Soporte', value: '24/7', desc: 'Monitoreo' },
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-sm font-bold text-slate-900 uppercase tracking-tighter">{stat.label}</div>
                    <div className="text-xs text-slate-400">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Services - Cards Altura Uniforme */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="group h-full">
                  <div className="flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className={`bg-gradient-to-br ${service.gradient} p-10 text-white relative`}>
                      <div className="absolute top-6 right-8 opacity-20 group-hover:scale-110 transition-transform duration-500">
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                      <p className="text-white/80 leading-relaxed text-sm max-w-sm">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="p-10 flex flex-col flex-grow bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {service.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="flex flex-wrap gap-2">
                          {service.benefits.map((b, i) => (
                            <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 px-3 py-1 rounded-md">
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance & Troubleshooting - Diseño Compacto */}
        <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Diagnóstico y Salud de Red</h2>
                <div className="space-y-4">
                  {[
                    { p: 'Conexión lenta', s: 'Certificación de puntos y análisis de ruido.' },
                    { p: 'Caídas de WiFi', s: 'Ajuste de canales y potencia de Access Points.' },
                    { p: 'Desorden en Rack', s: 'Peinado de cables y re-etiquetado total.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10 flex gap-4">
                      <AlertTriangle className="text-yellow-500 w-6 h-6 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-sm text-white">{item.p}</div>
                        <div className="text-sm text-slate-400">{item.s}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-3 to-primary-4 rounded-[2.5rem] p-10 shadow-3xl shadow-blue-500/20">
                <Activity className="w-12 h-12 mb-6 text-blue-200" />
                <h3 className="text-2xl font-bold mb-4">Mantenimiento Preventivo</h3>
                <p className="text-blue-100 mb-8 text-sm leading-relaxed">
                  No esperes a que tu red falle. Nuestro plan preventivo incluye limpieza de conectores, 
                  actualización de firmware en equipos activos y auditoría de tráfico.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Limpieza de Racks', 'Pruebas de Continuidad', 'Reporte de Tráfico'].map((l, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-300 rounded-full" /> {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CloudinaryGallery serviceSlug="voz-datos" title="Galería de Redes y Datos" />

        {/* CTA - Ultra Moderno */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tighter">¿Tu red está preparada para el futuro?</h2>
                <p className="text-blue-100 mb-10 text-lg opacity-90">
                  Realizamos auditorías técnicas para empresas y proyectos de cableado desde cero. Conectividad 100% garantizada.
                </p>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hola, necesito una evaluación técnica de mi red de voz y datos.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-full font-black text-lg hover:bg-blue-50 transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                  SOLICITAR EVALUACIÓN TÉCNICA
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}