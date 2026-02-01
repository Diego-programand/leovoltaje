import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Diseño de Planos Eléctricos en Medellín | Grupo Leovoltaje",
    description: "Diseño profesional de planos eléctricos y memorias de cálculo en Medellín y Antioquia. Proyectos residenciales, comerciales e industriales bajo normativa RETIE y NTC.",
    keywords: [
        "diseño planos eléctricos Medellín",
        "planos eléctricos residenciales",
        "memorias de cálculo eléctricas",
        "proyecto eléctrico comercial Medellín",
        "diseño eléctrico industrial Antioquia",
        "ingeniero eléctrico planos Medellín",
        "planos eléctricos RETIE",
        "empresa planos eléctricos Colombia",
    ],
    openGraph: {
        title: "Diseño de Planos Eléctricos en Medellín | Grupo Leovoltaje",
        description: "Diseño de planos eléctricos y memorias de cálculo profesionales en Medellín. Proyectos residenciales, comerciales e industriales bajo normativa RETIE.",
        url: "https://grupoleovoltaje.com/servicios/planos-electricos",
        type: "website",
    },
    twitter: {
        title: "Diseño de Planos Eléctricos en Medellín | Grupo Leovoltaje",
        description: "Diseño profesional de planos eléctricos y memorias de cálculo en Medellín bajo normativa RETIE y NTC.",
    },
    alternates: {
        canonical: "https://grupoleovoltaje.com/servicios/planos-electricos",
    },
};

export default function PlanosElectricosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}