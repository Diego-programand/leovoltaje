import { Service, NavLink } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Instalaciones Eléctricas',
    description: 'Diseños e instalaciones eléctricas profesionales para hogares y empresas.',
    icon: '⚡',
    slug: 'instalaciones-electricas'
  },
  {
    id: '2',
    title: 'Instalación de Domótica',
    description: 'Convierte tu hogar en un espacio inteligente con nuestras soluciones domóticas.',
    icon: '🏠',
    slug: 'domotica'
  },
  {
    id: '3',
    title: 'Diseño de Planos Eléctricos',
    description: 'Diseño y construcción de planos eléctricos y memorias de cálculo.',
    icon: '📐',
    slug: 'planos-electricos'
  },
  {
    id: '4',
    title: 'Energía Solar',
    description: 'Diseño e instalación de sistemas de energía fotovoltaica.',
    icon: '☀️',
    slug: 'energia-solar'
  },
  {
    id: '5',
    title: 'Mantenimiento Preventivo y Correctivo',
    description: 'Mantenimiento de subestaciones, transformadores eléctricos y más.',
    icon: '🔧',
    slug: 'mantenimiento'
  },
  {
    id: '6',
    title: 'Legalizaciones y Expediciones RETIE',
    description: 'Inspecciones y legalizaciones RETIE y RETILAP.',
    icon: '📋',
    slug: 'retie'
  },
  {
    id: '7',
    title: 'Diseño e Instalación de CCTV',
    description: 'Sistemas de vigilancia y seguridad para tu propiedad.',
    icon: '📹',
    slug: 'cctv'
  },
  {
    id: '8',
    title: 'Instalación de Voz y Datos',
    description: 'Instalaciones y mantenimiento de redes de voz y datos.',
    icon: '🌐',
    slug: 'voz-datos'
  }
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Contacto', href: '/#contacto' }
];

export const COMPANY_INFO = {
  name: 'Grupo Leovoltaje',
  email: 'leovoltajegrupo@gmail.com', // Coloca el email real
  whatsapp: '573003847833', // Coloca el número de WhatsApp (con código de país, sin +)
};