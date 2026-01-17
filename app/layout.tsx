import type { Metadata } from "next";
import { Bree_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/sections/SmoothScroll";

const breeSerif = Bree_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bree-serif",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://grupoleovoltaje.com"), // Cambiar a dominio real
  title: {
    default: "Grupo Leovoltaje - Soluciones Eléctricas Profesionales en Colombia",
    template: "%s | Grupo Leovoltaje"
  },
  description: "Servicios profesionales de instalaciones eléctricas, domótica, energía solar, CCTV y más. Soluciones integrales para hogares y empresas en Colombia con certificación RETIE.",
  keywords: [
    "instalaciones eléctricas",
    "domótica",
    "energía solar",
    "paneles solares",
    "CCTV",
    "certificación RETIE",
    "planos eléctricos",
    "mantenimiento eléctrico",
    "subestaciones eléctricas",
    "redes de voz y datos",
    "hogares inteligentes",
    "Colombia"
  ],
  authors: [{ name: "Grupo Leovoltaje" }],
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
    title: "Grupo Leovoltaje - Soluciones Eléctricas Profesionales",
    description: "Servicios profesionales de instalaciones eléctricas, domótica, energía solar y más para hogares y empresas en Colombia.",
    images: [
      {
        url: "/og-image.jpg", // Crearemos esta imagen después
        width: 1200,
        height: 630,
        alt: "Grupo Leovoltaje - Soluciones Eléctricas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Leovoltaje - Soluciones Eléctricas Profesionales",
    description: "Servicios profesionales de instalaciones eléctricas, domótica, energía solar y más.",
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
    google: "tu-codigo-de-verificacion-aqui", // Agregar después de crear Google Search Console
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
        <SmoothScroll>
        {children}
        </SmoothScroll>
      </body>
    </html>
  );
}