import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Legalizaciones RETIE y RETILAP en Medellín | Grupo Leovoltaje",
    description: "Legalizaciones RETIE y RETILAP profesionales en Medellín y Antioquia. Inspecciones eléctricas, dictámenes y certificaciones para hogares y empresas según normativa colombiana.",
    keywords: [
        "legalización RETIE Medellín",
        "legalización eléctrica Antioquia",
        "inspección RETIE Colombia",
        "RETILAP Medellín",
        "certificación eléctrica hogares",
        "dictamen eléctrico comercial",
        "legalizar instalación eléctrica",
        "empresa RETIE Medellín",
    ],
    openGraph: {
        title: "Legalizaciones RETIE y RETILAP en Medellín | Grupo Leovoltaje",
        description: "Legalizaciones RETIE y RETILAP profesionales en Medellín. Inspecciones eléctricas y certificaciones para hogares y empresas.",
        url: "https://grupoleovoltaje.com/servicios/retie",
        type: "website",
    },
    twitter: {
        title: "Legalizaciones RETIE y RETILAP en Medellín | Grupo Leovoltaje",
        description: "Legalizaciones RETIE y RETILAP profesionales en Medellín. Inspecciones y certificaciones eléctricas según normativa colombiana.",
    },
    alternates: {
        canonical: "https://grupoleovoltaje.com/servicios/retie",
    },
};

export default function RetieLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}