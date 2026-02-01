import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mantenimiento Eléctrico Industrial en Medellín | Grupo Leovoltaje",
    description: "Mantenimiento preventivo de subestaciones y transformadores eléctricos en Medellín y Antioquia. Servicio industrial profesional para garantizar operación continua y seguridad.",
    keywords: [
        "mantenimiento eléctrico industrial Medellín",
        "mantenimiento subestaciones Antioquia",
        "mantenimiento transformadores eléctricos",
        "mantenimiento preventivo eléctrico Colombia",
        "empresa mantenimiento eléctrico Medellín",
        "servicio mantenimiento industrial Antioquia",
    ],
    openGraph: {
        title: "Mantenimiento Eléctrico Industrial en Medellín | Grupo Leovoltaje",
        description: "Mantenimiento preventivo de subestaciones y transformadores en Medellín. Servicio industrial profesional para operación continua.",
        url: "https://grupoleovoltaje.com/service/mantenimiento",
        type: "website",
    },
    twitter: {
        title: "Mantenimiento Eléctrico Industrial en Medellín | Grupo Leovoltaje",
        description: "Mantenimiento preventivo de subestaciones y transformadores eléctricos en Medellín y Antioquia.",
    },
    alternates: {
        canonical: "https://grupoleovoltaje.com/service/mantenimiento",
    },
};

export default function MantenimientoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}