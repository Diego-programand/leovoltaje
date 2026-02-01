export default function robots() {
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