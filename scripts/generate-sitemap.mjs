import { writeFile } from "node:fs/promises";

const siteUrl = (
  process.env.SITE_URL 
).replace(/\/$/, "");

const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/work/sastadrive", priority: "0.9", changefreq: "monthly" },
  { path: "/lab", priority: "0.8", changefreq: "monthly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
];

const lastmod = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

await writeFile("public/sitemap.xml", sitemap);
await writeFile("public/robots.txt", robots);
