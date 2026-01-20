import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon; // Antes era string, ahora es el tipo de componente de Lucide
  slug: string;
}
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}