type SitemapEntry = {
    url: string;
    lastModified: string;
    changefreq: "yearly" | "monthly" | "weekly" | "daily" | "hourly" | "always" | "never";
    priority: number;
};
const baseUrl = "https://grupoleovoltaje.com";

// Todas las rutas estáticas de servicios (mismo orden que en constants.ts)
const serviceSlugs = [
    "instalaciones-electricas",
    "planos-electricos",
    "retie",
    "mantenimiento",
    "energia-solar",
    "domotica",
    "cctv",
    "voz-datos",
];

export default function sitemap(): SitemapEntry[] {

    const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd

    // Página principal
    const staticPages = [
        {
            url: baseUrl,
            lastModified: today,
            changefreq: "weekly" as const,
            priority: 1.0,
        },
    ];

    // Páginas de cada servicio
    const servicePages = serviceSlugs.map((slug) => ({
        url: `${baseUrl}/servicio/${slug}`,
        lastModified: today,
        changefreq: "monthly" as const,
        priority: slug === "instalaciones-electricas" || slug === "retie" || slug === "planos-electricos"
            ? 0.9  // Los 3 servicios prioritarios tienen más peso
            : 0.7, // El resto tiene peso normal
    }));

    return [...staticPages, ...servicePages];
}