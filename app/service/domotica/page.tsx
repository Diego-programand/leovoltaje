'use client';

import { Metadata } from 'next';
import { motion } from 'framer-motion';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import ServiceHero from '@/app/components/sections/ServiceHero';
import CloudinaryGallery from '@/app/components/sections/CloudinaryGallery';
import { COMPANY_INFO } from '@/app/lib/constants';
import { getHeroVideoUrl } from '@/app/lib/cloudinary-config';
import {
  Smartphone,
  Mic,
  ShieldCheck,
  Zap,
  Clock,
  Home,
  Lock,
  Thermometer,
  Tv,
  ChevronRight,
  Maximize2,
  Settings
} from 'lucide-react';

export default function DomoticaPage() {
  const smartFeatures = [
    {
      category: 'Iluminación Inteligente',
      icon: Zap,
      accent: 'border-yellow-500',
      bg: 'bg-yellow-500/5',
      features: ['Control de intensidad (Dimmable)', 'Escenas por voz', 'Simulación de presencia']
    },
    {
      category: 'Seguridad Avanzada',
      icon: Lock,
      accent: 'border-red-600',
      bg: 'bg-red-600/5',
      features: ['Cerraduras biométricas', 'Cercado perimetral digital', 'Alertas al smartphone']
    },
    {
      category: 'Climatización & Confort',
      icon: Thermometer,
      accent: 'border-blue-500',
      bg: 'bg-blue-500/5',
      features: ['Termostatos inteligentes', 'Control de zonas AC', 'Ahorro energético']
    },
    {
      category: 'Entretenimiento Pro',
      icon: Tv,
      accent: 'border-purple-600',
      bg: 'bg-purple-600/5',
      features: ['Audio multizona', 'Home Cinema One-Touch', 'Streaming centralizado']
    }
  ];

  const useCases = [
    {
      scenario: 'Escena: Buenos Días',
      time: '07:00 AM',
      description: 'Su hogar lo despierta con luz natural y café recién hecho.',
      actions: ['Apertura de persianas 30%', 'Luces blanco cálido', 'Desactivación de alarma'],
      gradient: 'from-orange-500 to-amber-400'
    },
    {
      scenario: 'Escena: Modo Cine',
      time: '08:00 PM',
      description: 'La sala se transforma en una sala de cine profesional.',
      actions: ['Luces al 5%', 'Cierre total de cortinas', 'Encendido de proyector'],
      gradient: 'from-blue-900 to-indigo-800'
    },
    {
      scenario: 'Escena: Seguridad Activa',
      time: 'Cuando estás fuera',
      description: 'Protección proactiva que simula vida dentro de su hogar mientras usted descansa.',
      actions: [
        'Simulación de presencia (luces aleatorias)',
        'Bloqueo de accesos de alta seguridad',
        'Notificación de intrusos vía IA',
      ],
      gradient: 'from-slate-800 to-gray-900'
    },
    {
      scenario: 'Escena: Recepción Social',
      time: 'Bajo demanda',
      description: 'Impresione a sus invitados con una atmósfera diseñada para el entretenimiento.',
      actions: [
        'Iluminación arquitectónica de acento',
        'Audio multizona en áreas sociales',
        'Climatización a temperatura de confort',
      ],
      gradient: 'from-emerald-600 to-teal-700'
    }
  ];

  const videoCloudinary = getHeroVideoUrl('domotica');

  return (
    <>
      <Header />

      <main className="bg-white">
        <ServiceHero
          title="Inteligencia que Anticipa sus Deseos"
          description="Diseñamos ecosistemas domóticos que fusionan lujo, seguridad y eficiencia energética."
          videoSrc={videoCloudinary}
        />

        {/* Sección 1: El Cerebro del Hogar */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 lg:ml-12">
                <div className="inline-flex items-center gap-2 bg-transparent text-primary-1 px-4 py-1 text-xs font-black tracking-tighter mb-2 uppercase">
                  <span className="w-2 h-2 bg-primary-3 animate-ping rounded-full"></span>
                  Hogar Inteligente
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 font-bree leading-tight">
                  No es una casa <br />
                  <span className="text-primary-2 italic tracking-tight">es un organismo vivo.</span>
                </h2>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  Implementamos sistemas que centralizan el control de su infraestructura. Desde una sola interfaz robusta, usted gestiona la seguridad, el clima y la energía, permitiendo que su hogar aprenda de sus rutinas y optimice recursos de forma autónoma.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-gray-100 rounded-lg text-primary-3"><Smartphone size={24} /></div>
                    <div><h4 className="font-bold">Control Central</h4><p className="text-sm text-gray-500">App única para todo.</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-gray-100 rounded-lg text-primary-3"><Mic size={24} /></div>
                    <div><h4 className="font-bold">Comando de Voz</h4><p className="text-sm text-gray-500">Integración con IA.</p></div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <div className="relative z-10 bg-white/20 border border-gray-100 p-1 shadow-2xl rounded-2xl">
                  {/* Aquí iría una imagen de una tablet controlando el hogar */}
                  <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center overflow-hidden group">
                    <img
                      src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800"
                      alt="Smart Home Control"
                      className="opacity-70 group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-1/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 2: Matriz de Capacidades */}
        <section className="py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-3 mb-6">Capacidades del Sistema</h2>
              <div className="h-1.5 w-24 bg-primary-1 mx-auto mb-6"></div>
              <p className="text-gray-600">Tecnología de grado industrial aplicada al confort residencial y comercial.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {smartFeatures.map((f, i) => (
                <div key={i} className={`p-8 bg-white rounded border-t-4 ${f.accent} shadow-sm hover:shadow-xl transition-all group`}>
                  <f.icon className="text-gray-400 group-hover:text-primary-3 transition-colors mb-6" size={40} strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-4">{f.category}</h3>
                  <ul className="space-y-3">
                    {f.features.map((item, idx) => (
                      <li key={idx} className="text-xs text-gray-500 flex items-center gap-2">
                        <div className={`w-1 h-1 ${f.accent.replace('border-', 'bg-')}`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Sección 3: Escenarios (User Experience) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-3 mb-6">Adaptabilidad del Sistema</h2>
              <div className="h-1.5 w-24 bg-primary-1 mx-auto mb-6"></div>
              <p className="text-gray-600">Sistema adaptable a cualquier tipo de entorno, desde residencial hasta comercial. La comodidad es la base de nuestra solución.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {useCases.map((uc, i) => (
                <div key={i} className="group overflow-hidden rounded-xl border border-gray-100 flex flex-col md:flex-row shadow-lg">
                  <div className={`md:w-1/3 bg-gradient-to-br ${uc.gradient} p-8 text-white flex flex-col justify-between`}>
                    <Clock size={32} strokeWidth={1} />
                    <div>
                      <span className="text-xs font-mono opacity-80">{uc.time}</span>
                      <h3 className="text-xl font-bold leading-tight">{uc.scenario}</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 bg-white">
                    <p className="text-sm text-gray-600 mb-6 italic">"{uc.description}"</p>
                    <ul className="space-y-4">
                      {uc.actions.map((act, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                          <ChevronRight size={16} className="text-primary-1" />
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección 4: ROI e Inversión */}
        <section className="py-24 bg-primary-4 text-white overflow-hidden relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:ml-12">
                <h2 className="text-3xl font-bold mb-6 italic">La Inteligencia que se paga sola.</h2>
                <p className="text-gray-300">Invertir en domótica no es solo confort, es optimización de activos y valorización inmobiliaria inmediata.</p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 border-l border-white/10">
                  <span className="text-5xl font-bold text-primary-1 mb-2 block">30%</span>
                  <h4 className="text-xl font-bold mb-2">Ahorro Energético</h4>
                  <p className="text-sm text-gray-400">Gestión inteligente de iluminación y HVAC.</p>
                </div>
                <div className="p-8 border-l border-white/10">
                  <span className="text-5xl font-bold text-primary-1 mb-2 block">+20%</span>
                  <h4 className="text-xl font-bold mb-2">Plusvalía</h4>
                  <p className="text-sm text-gray-400">Aumento del valor comercial de la propiedad.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 opacity-5">
            <Settings size={500} className="animate-spin-slow" />
          </div>
        </section>

        <CloudinaryGallery serviceSlug="domotica" title="Proyectos Smart Home" />

        {/* CTA Premium */}
        <section className="py-32 bg-white text-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-10 tracking-tighter">
                ¿Preparado para el siguiente <br />
                <span className="text-primary-2 underline decoration-primary-3/10 underline-offset-8">nivel de libertad?</span>
              </h2>
              <p className="text-xl text-gray-500 mb-12">Agende una consultoría privada con nuestros especialistas en automatización.</p>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Deseo una consultoría para un proyecto de automatización.`}
                className="inline-flex items-center gap-6 bg-primary-3 text-white px-12 py-6 rounded-lg font-bold text-xl shadow-2xl hover:bg-black transition-all"
              >
                Contactar Ahora
                <ChevronRight />
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}