import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Energía Solar Fotovoltaica en Medellín | Grupo Leovoltaje",
    description: "Instalación de paneles solares y sistemas fotovoltaicos en Medellín y Antioquia. Diseño, montaje y mantenimiento de energía solar para hogares y empresas. Ahorro garantizado.",
    keywords: [
        "energía solar Medellín",
        "paneles solares Antioquia",
        "sistemas fotovoltaicos Colombia",
        "instalación paneles solares Medellín",
        "energía solar hogares Medellín",
        "energía solar empresas Antioquia",
        "ahorro energía solar Colombia",
        "empresa solar Medellín",
    ],
    openGraph: {
        title: "Energía Solar Fotovoltaica en Medellín | Grupo Leovoltaje",
        description: "Instalación de paneles solares y sistemas fotovoltaicos en Medellín. Diseño y montaje de energía solar para hogares y empresas.",
        url: "https://grupoleovoltaje.com/servicios/energia-solar",
        type: "website",
    },
    twitter: {
        title: "Energía Solar Fotovoltaica en Medellín | Grupo Leovoltaje",
        description: "Instalación de paneles solares y sistemas fotovoltaicos en Medellín y Antioquia. Ahorro de energía garantizado.",
    },
    alternates: {
        canonical: "https://grupoleovoltaje.com/servicios/energia-solar",
    },
};

export default function EnergiaSolarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}