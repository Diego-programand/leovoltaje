import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Domótica y Hogares Inteligentes en Medellín | Grupo Leovoltaje",
    description: "Instalación de sistemas de domótica y automatización de hogares en Medellín y Antioquia. Control inteligente de iluminación, seguridad y clima desde tu móvil.",
    keywords: [
        "domótica Medellín",
        "hogares inteligentes Antioquia",
        "automatización hogar Colombia",
        "instalación domótica profesional",
        "sistema inteligente hogar Medellín",
        "control automático iluminación Medellín",
        "empresa domótica Antioquia",
    ],
    openGraph: {
        title: "Domótica y Hogares Inteligentes en Medellín | Grupo Leovoltaje",
        description: "Instalación de sistemas de domótica y hogares inteligentes en Medellín. Control automático de iluminación, seguridad y clima.",
        url: "https://grupoleovoltaje.com/service/domotica",
        type: "website",
    },
    twitter: {
        title: "Domótica y Hogares Inteligentes en Medellín | Grupo Leovoltaje",
        description: "Sistemas de domótica y hogares inteligentes en Medellín. Automatización profesional desde tu móvil.",
    },
    alternates: {
        canonical: "https://grupoleovoltaje.com/service/domotica",
    },
};

export default function DomoticaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}