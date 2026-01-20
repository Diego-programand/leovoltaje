'use client';

import { Metadata } from 'next';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import ServiceHero from '@/app/components/sections/ServiceHero';
import CloudinaryGallery from '@/app/components/sections/CloudinaryGallery';
import { COMPANY_INFO } from '@/app/lib/constants';
import { getHeroVideoUrl } from '@/app/lib/cloudinary-config';

// 1. IMPORTACIÓN DE ICONOS PROFESIONALES
import { 
  Eye, 
  Smartphone, 
  Video, 
  Moon, 
  Bell, 
  HardDrive, 
  Home, 
  Building2, 
  Factory, 
  Target, 
  Camera, 
  Maximize, 
  Globe, 
  ShieldCheck, 
  Wrench, 
  CircleDollarSign,
  Shield
} from 'lucide-react';

export default function CCTVPage() {
  // 2. ACTUALIZACIÓN DE DATOS CON COMPONENTES DE ICONO
  const features = [
    {
      title: 'Monitoreo 24/7',
      description: 'Vigilancia continua de tu propiedad las 24 horas del día, los 7 días de la semana, con grabación automática de eventos.',
      icon: Eye
    },
    {
      title: 'Acceso Remoto',
      description: 'Visualiza tus cámaras desde cualquier lugar del mundo mediante tu smartphone, tablet o computador con conexión a internet.',
      icon: Smartphone
    },
    {
      title: 'Grabación en Alta Definición',
      description: 'Sistemas con resolución Full HD (1080p) y 4K disponibles para capturar cada detalle con claridad excepcional.',
      icon: Video
    },
    {
      title: 'Visión Nocturna',
      description: 'Tecnología infrarroja avanzada que permite monitoreo claro incluso en completa oscuridad hasta 30 metros de distancia.',
      icon: Moon
    },
    {
      title: 'Detección Inteligente',
      description: 'Alertas automáticas ante movimiento, reconocimiento facial y detección de intrusión en zonas específicas.',
      icon: Bell
    },
    {
      title: 'Almacenamiento Seguro',
      description: 'Grabación local en DVR/NVR con opción de respaldo en la nube para proteger tus videos de cualquier eventualidad.',
      icon: HardDrive
    }
  ];

  const solutions = [
    {
      type: 'Residencial',
      icon: Home,
      applications: [
        'Casas y apartamentos',
        'Conjunto residenciales',
        'Parqueaderos privados',
        'Zonas comunes',
        'Entradas y salidas'
      ],
      color: 'from-primary-1/10 to-primary-2/10'
    },
    {
      type: 'Comercial',
      icon: Building2,
      applications: [
        'Tiendas y locales',
        'Oficinas corporativas',
        'Centros comerciales',
        'Restaurantes y bares',
        'Bancos y entidades'
      ],
      color: 'from-primary-2/10 to-primary-3/10'
    },
    {
      type: 'Industrial',
      icon: Factory,
      applications: [
        'Plantas de producción',
        'Bodegas y almacenes',
        'Zonas de carga',
        'Perímetros industriales',
        'Control de accesos'
      ],
      color: 'from-primary-3/10 to-primary-4/10'
    }
  ];

  const cameraTypes = [
    {
      name: 'Cámaras Domo',
      description: 'Diseño discreto ideal para interiores. Resistente a vandalismo y con ángulo de visión amplio.',
      icon: Target,
      specs: ['360° rotación', 'Vandal-proof', 'Interior/Exterior']
    },
    {
      name: 'Cámaras Bullet',
      description: 'Perfectas para exteriores con largo alcance. Visión nocturna potente y resistentes al clima.',
      icon: Camera,
      specs: ['Largo alcance', 'IP66/IP67', 'IR hasta 40m']
    },
    {
      name: 'Cámaras PTZ',
      description: 'Control total con movimiento panorámico, inclinación y zoom. Ideales para áreas extensas.',
      icon: Maximize,
      specs: ['Pan/Tilt/Zoom', 'Tracking automático', 'Zoom óptico']
    },
    {
      name: 'Cámaras IP',
      description: 'Tecnología de red avanzada con instalación simplificada y calidad de imagen superior.',
      icon: Globe,
      specs: ['PoE disponible', 'Hasta 4K', 'Análisis IA']
    }
  ];

  const processSteps = [
    { step: '1', title: 'Análisis del Sitio', description: 'Evaluamos tu propiedad para determinar puntos estratégicos de cobertura' },
    { step: '2', title: 'Diseño Personalizado', description: 'Creamos un diseño adaptado a tus necesidades específicas de seguridad' },
    { step: '3', title: 'Instalación Profesional', description: 'Montaje de equipos, cableado estructurado y configuración completa' },
    { step: '4', title: 'Configuración y Pruebas', description: 'Ajustamos ángulos, calidad de imagen y funciones de detección' },
    { step: '5', title: 'Capacitación', description: 'Te enseñamos a usar el sistema desde tus dispositivos móviles' },
    { step: '6', title: 'Soporte Continuo', description: 'Mantenimiento preventivo y asistencia técnica permanente' }
  ];

  const videoCloudinary = getHeroVideoUrl('cctv');

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <ServiceHero
          title="Sistemas de Videovigilancia CCTV"
          description="Protege lo que más valoras con tecnología de seguridad de última generación"
          videoSrc={videoCloudinary}
           
        />

        {/* Intro Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-3 mb-6 text-center font-bree">
                Vigila Tu Propiedad Desde Cualquier Lugar
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                ¿Deseas tener control total sobre la seguridad de tu hogar, negocio o industria?
                En <strong>Grupo Leovoltaje</strong> te ofrecemos soluciones completas de videovigilancia
                CCTV que te permiten monitorear tu propiedad en tiempo real, desde cualquier lugar del mundo.
              </p>

              <div className="bg-gradient-to-br from-primary-1/5 to-primary-3/5 rounded-2xl p-6 sm:p-8 border border-primary-1/20">
                <h3 className="text-xl font-bold text-primary-3 mb-4 flex items-center gap-3">
                  <Shield className="text-primary-1" size={28} />
                  Tranquilidad Garantizada
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Con nuestros sistemas CCTV, dormirás tranquilo sabiendo que tu propiedad está protegida
                  las 24 horas. Recibe alertas instantáneas en tu celular ante cualquier evento sospechoso
                  y revisa las grabaciones cuando lo necesites.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-3 text-center mb-12 font-bree">
              Características de Nuestros Sistemas
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon; // Extraemos el componente
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                  >
                    <div className="flex justify-center mb-6 text-primary-1">
                        <Icon size={48} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-primary-3 mb-3 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed text-center">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions by Type */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-3 text-center mb-12 font-bree">
              Soluciones Para Cada Necesidad
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {solutions.map((solution, index) => {
                const SolIcon = solution.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${solution.color} rounded-2xl p-6 lg:p-8 border border-primary-1/20 transition-transform hover:scale-[1.02]`}
                  >
                    <div className="text-center mb-6">
                      <div className="flex justify-center mb-4 text-primary-3">
                        <SolIcon size={56} strokeWidth={1.2} />
                      </div>
                      <h3 className="text-2xl font-bold text-primary-3">{solution.type}</h3>
                    </div>
                    <ul className="space-y-3">
                      {solution.applications.map((app, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700">
                          <span className="text-primary-3 font-bold">✓</span>
                          <span className="text-sm font-medium">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Camera Types */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-3 text-center mb-12 font-bree">
              Tipos de Cámaras Disponibles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {cameraTypes.map((camera, index) => {
                const CamIcon = camera.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 group"
                  >
                    <div className="flex justify-center mb-6 text-primary-1 group-hover:scale-110 transition-transform duration-500">
                      <CamIcon size={60} strokeWidth={1} />
                    </div>
                    <h3 className="text-lg font-bold text-primary-3 mb-3 text-center">
                      {camera.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {camera.description}
                    </p>
                    <div className="space-y-2">
                      {camera.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                          <span className="w-1.5 h-1.5 bg-primary-3 rounded-full"></span>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CloudinaryGallery
          serviceSlug="cctv"
          title="Instalaciones de CCTV Realizadas" 
        />

        {/* Benefits */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-5 to-primary-4 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 text-center font-bree">
              ¿Por Qué Elegir Nuestros Sistemas CCTV?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: ShieldCheck, title: 'Equipos Premium', desc: 'Marcas reconocidas con garantía oficial' },
                { icon: Wrench, title: 'Instaladores Expertos', desc: 'Personal certificado y capacitado' },
                { icon: CircleDollarSign, title: 'Mejor Precio', desc: 'Cotizaciones competitivas sin comprometer calidad' }
              ].map((item, i) => {
                const BenefitIcon = item.icon;
                return (
                  <div key={i} className="text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-4 border border-white/10 group-hover:bg-white/20 transition-colors">
                      <div className="flex justify-center mb-4">
                        <BenefitIcon size={48} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-3 mb-6 font-bree">
              Protege Tu Propiedad Hoy Mismo
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Recibe una cotización personalizada y descubre cómo podemos mejorar la seguridad de tu espacio
            </p>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hola, estoy interesado en instalar un sistema de CCTV')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all transform hover:scale-105 shadow-2xl"
            >
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Solicitar Cotización por WhatsApp</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}