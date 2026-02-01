export async function GET() {
    const content = `User-agent: *
Allow: /
Disallow: /_next/
Disallow: /api/
Sitemap: https://grupoleovoltaje.com/sitemap.xml`;

    return new Response(content, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}
