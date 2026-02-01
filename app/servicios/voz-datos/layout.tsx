import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Instalación de Redes Voz y Datos en Medellín | Grupo Leovoltaje",
    description: "Instalación y mantenimiento de redes de voz y datos en Medellín y Antioquia. Cableado estructurado, redes empresariales y telecomunicaciones profesionales.",
    keywords: [
        "redes voz y datos Medellín",
        "cableado estructurado Antioquia",
        "instalación red empresarial Medellín",
        "telecomunicaciones profesionales Colombia",
        "red datos comercial Medellín",
        "empresa redes voz datos Antioquia",
        "infraestructura red Medellín",
    ],
    openGraph: {
        title: "Instalación de Redes Voz y Datos en Medellín | Grupo Leovoltaje",
        description: "Instalación de redes de voz y datos en Medellín. Cableado estructurado y redes empresariales profesionales.",
        url: "https://grupoleovoltaje.com/servicios/voz-datos",
        type: "website",
    },
    twitter: {
        title: "Instalación de Redes Voz y Datos en Medellín | Grupo Leovoltaje",
        description: "Redes de voz y datos profesionales en Medellín y Antioquia. Cableado estructurado para empresas.",
    },
    alternates: {
        canonical: "https://grupoleovoltaje.com/servicios/voz-datos",
    },
};

export default function VozDatosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}