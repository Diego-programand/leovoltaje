export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
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