import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Instalación de CCTV y Seguridad en Medellín | Grupo Leovoltaje",
    description: "Diseño e instalación de sistemas CCTV y seguridad en Medellín y Antioquia. Cámaras de vigilancia, DVR y sistemas de monitoreo profesionales para hogares y empresas.",
    keywords: [
        "instalación CCTV Medellín",
        "cámaras seguridad Antioquia",
        "sistemas vigilancia Medellín",
        "CCTV comercial Colombia",
        "seguridad electrónica hogares Medellín",
        "empresa CCTV Antioquia",
        "monitoreo seguridad Medellín",
    ],
    openGraph: {
        title: "Instalación de CCTV y Seguridad en Medellín | Grupo Leovoltaje",
        description: "Diseño e instalación de sistemas CCTV en Medellín. Cámaras de vigilancia y monitoreo profesional para hogares y empresas.",
        url: "https://grupoleovoltaje.com/servicios/cctv",
        type: "website",
    },
    twitter: {
        title: "Instalación de CCTV y Seguridad en Medellín | Grupo Leovoltaje",
        description: "Sistemas CCTV y seguridad profesionales en Medellín y Antioquia para hogares y empresas.",
    },
    alternates: {
        canonical: "https://grupoleovoltaje.com/servicios/cctv",
    },
};

export default function CctvLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}