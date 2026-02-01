'use client';

import { Metadata } from 'next';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import ServiceHero from '@/app/components/sections/ServiceHero';
import CloudinaryGallery from '@/app/components/sections/CloudinaryGallery';
import { COMPANY_INFO } from '@/app/lib/constants';
import { getHeroVideoUrl } from '@/app/lib/cloudinary-config';
import ServiceCTA from '@/app/components/sections/ServiceCTA';

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
        <ServiceCTA
          title="Protege Tu Propiedad Hoy Mismo"
          description="Recibe una cotización personalizada y descubre cómo podemos mejorar la seguridad de tu espacio."
          ctaText="Solicitar Cotización"
          whatsappMessage="Hola, estoy interesado en instalar un sistema de CCTV"
        />
      </main>

      <Footer />
    </>
  );
}