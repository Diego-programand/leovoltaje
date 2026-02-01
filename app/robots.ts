type RobotsFile = {
    userAgent: string;
    allow?: string | string[];
    disallow?: string | string[];
    sitemapUrl?: string;
};

export default function robots(): RobotsFile {
    return {
        userAgent: "*",
        allow: "/",
        disallow: [
            "/_next/",
            "/api/",
        ],
        sitemapUrl: "https://grupoleovoltaje.com/sitemap.xml",
    };
}