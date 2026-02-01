import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Instalaciones Eléctricas Profesionales en Medellín | Grupo Leovoltaje",
    description: "Instalaciones eléctricas residenciales, comerciales e industriales en Medellín y Antioquia. Acometidas, tableros, puesta a tierra y circuitos ramales bajo normativa RETIE. Más de 10 años de experiencia.",
    keywords: [
        "instalaciones eléctricas Medellín",
        "electricista profesional Medellín",
        "instalaciones eléctricas residenciales",
        "instalaciones eléctricas comerciales",
        "instalaciones eléctricas industriales",
        "acometidas eléctricas Antioquia",
        "tableros de control eléctricos",
        "puesta a tierra Medellín",
    ],
    openGraph: {
        title: "Instalaciones Eléctricas Profesionales en Medellín | Grupo Leovoltaje",
        description: "Instalaciones eléctricas residenciales, comerciales e industriales en Medellín. Acometidas, tableros, puesta a tierra bajo normativa RETIE.",
        url: "https://grupoleovoltaje.com/service/instalaciones-electricas",
        type: "website",
    },
    twitter: {
        title: "Instalaciones Eléctricas Profesionales en Medellín | Grupo Leovoltaje",
        description: "Instalaciones eléctricas residenciales, comerciales e industriales en Medellín. Acometidas, tableros y puesta a tierra bajo normativa RETIE.",
    },
    alternates: {
        canonical: "https://grupoleovoltaje.com/service/instalaciones-electricas",
    },
};

export default function InstalacionesElectricasLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}