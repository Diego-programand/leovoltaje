import type { Metadata } from "next";
import { Bree_Serif } from "next/font/google";
import "./globals.css";
import ScrollReset from "./components/utils/ScrollReset";

const breeSerif = Bree_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bree-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grupoleovoltaje.com"),
  title: {
    default: "Grupo Leovoltaje | Soluciones Eléctricas Profesionales en Medellín y Antioquia",
    template: "%s | Grupo Leovoltaje"
  },
  description: "Profesionales expertos en instalaciones eléctricas, legalizaciones RETIE, diseño de planos eléctricos profesionales, energia solar, domótica y seguridad en Medellín y Antioquia. Más de 10 años de experiencia y 500+ proyectos completados. ¡Cotiza tu proyecto hoy!",
  keywords: [
    "instalaciones eléctricas Medellín",
    "legalizaciones RETIE Antioquia",
    "ingeniería eléctrica Colombia",
    "diseño planos eléctricos",
    "electricista Medellín",
    "empresa eléctrica Medellín",
    "legalización eléctrica Colombia",
    "energía solar Medellín",
    "domótica hogares Medellín",
    "instalación cámaras de seguridad Medellín",
    "mantenimiento eléctrico industrial",
    "Grupo Leovoltaje"
  ],
  authors: [{ name: "Grupo Leovoltaje", url: "https://grupoleovoltaje.com" }],
  creator: "Grupo Leovoltaje",
  publisher: "Grupo Leovoltaje",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://grupoleovoltaje.com",
    siteName: "Grupo Leovoltaje",
    title: "Grupo Leovoltaje | Instalaciones Eléctricas y Legalizaciones RETIE en Medellín",
    description: "Profesionales expertos en instalaciones eléctricas, legalizaciones RETIE, diseño de planos eléctricos profesionales, energia solar, domótica y seguridad en Medellín y Antioquia. Más de 10 años de experiencia y 500+ proyectos completados. ¡Cotiza tu proyecto hoy!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grupo Leovoltaje - Instalaciones Eléctricas Profesionales en Medellín",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Leovoltaje | Instalaciones Eléctricas y Legalizaciones RETIE en Medellín",
    description: "Profesionales expertos en instalaciones eléctricas, legalizaciones RETIE, diseño de planos eléctricos profesionales, energia solar, domótica y seguridad en Medellín y Antioquia. Más de 10 años de experiencia y 500+ proyectos completados. ¡Cotiza tu proyecto hoy!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  verification: {
    google: "ufFtqd8FNYmX63kLUYgKUNXvLcUoqbw-42xCcOZ54IM", // Google Search Console
  },
  alternates: {
    canonical: "https://grupoleovoltaje.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${breeSerif.variable} antialiased`}>
        <ScrollReset />

        {/* Schema Markup - Datos estructurados para Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Electrician",
                  "@id": "https://grupoleovoltaje.com/#business",
                  name: "Grupo Leovoltaje",
                  image: "https://grupoleovoltaje.com/og-image.jpg",
                  logo: "https://grupoleovoltaje.com/icon-512x512.png",
                  url: "https://grupoleovoltaje.com",
                  telephone: "+573003847833",
                  email: "grupo.leovoltaje@gmail.com",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Medellín",
                    addressRegion: "Antioquia",
                    addressCountry: "CO",
                  },
                  areaServed: [
                    { "@type": "City", name: "Medellín" },
                    { "@type": "State", name: "Antioquia" },
                  ],
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      opens: "07:00",
                      closes: "18:00",
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Saturday"],
                      opens: "08:00",
                      closes: "13:00",
                    },
                  ],
                  priceRange: "$$",
                  sameAs: [],  // Facebook, Instagram, etc. van aquí como URLs
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Servicios Eléctricos Profesionales",
                    itemOffered: [
                      {
                        "@type": "Service",
                        name: "Instalaciones Eléctricas",
                        description: "Diseños e instalaciones eléctricas profesionales para hogares y empresas en Medellín y Antioquia.",
                        url: "https://grupoleovoltaje.com/servicios/instalaciones-electricas",
                      },
                      {
                        "@type": "Service",
                        name: "Legalizaciones RETIE",
                        description: "Inspecciones y legalizaciones RETIE y RETILAP para hogares y empresas según normativa colombiana.",
                        url: "https://grupoleovoltaje.com/servicios/retie",
                      },
                      {
                        "@type": "Service",
                        name: "Diseño de Planos Eléctricos",
                        description: "Diseño y construcción de planos eléctricos y memorias de cálculo profesionales.",
                        url: "https://grupoleovoltaje.com/servicios/planos-electricos",
                      },
                      {
                        "@type": "Service",
                        name: "Mantenimiento Preventivo",
                        description: "Mantenimiento de subestaciones, transformadores eléctricos y sistemas industriales.",
                        url: "https://grupoleovoltaje.com/servicios/mantenimiento",
                      },
                      {
                        "@type": "Service",
                        name: "Energía Solar",
                        description: "Diseño e instalación de sistemas de energía fotovoltaica para hogares y empresas.",
                        url: "https://grupoleovoltaje.com/servicios/energia-solar",
                      },
                      {
                        "@type": "Service",
                        name: "Domótica",
                        description: "Soluciones de automatización y control inteligente para hogares y oficinas.",
                        url: "https://grupoleovoltaje.com/servicios/domotica",
                      },
                      {
                        "@type": "Service",
                        name: "CCTV",
                        description: "Diseño e instalación de sistemas de vigilancia y seguridad.",
                        url: "https://grupoleovoltaje.com/servicios/cctv",
                      },
                      {
                        "@type": "Service",
                        name: "Voz y Datos",
                        description: "Instalaciones y mantenimiento de redes de voz y datos para empresas.",
                        url: "https://grupoleovoltaje.com/servicios/voz-datos",
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://grupoleovoltaje.com/#website",
                  url: "https://grupoleovoltaje.com",
                  name: "Grupo Leovoltaje",
                  description: "Instalaciones eléctricas, legalizaciones RETIE y diseño de planos eléctricos profesionales en Medellín.",
                  publisher: { "@id": "https://grupoleovoltaje.com/#business" },
                },
              ],
            }),
          }}
        />

        {children}

      </body>
    </html>
  );
}