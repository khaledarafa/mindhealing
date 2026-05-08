const fs = require("fs");
const path = require("path");

const BASE_URL = "https://mindhealing.fyi";

const pagesDir = path.join(process.cwd(), "src", "pages");

function getPages(dir) {

    let results = [];

    const files = fs.readdirSync(dir);

    files.forEach(file => {

        const filePath = path.join(dir, file);

        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {

            results = results.concat(getPages(filePath));

        } else if (
            file.endsWith(".astro") ||
            file.endsWith(".md") ||
            file.endsWith(".mdx")
        ) {

            let route = filePath
                .replace(pagesDir, "")
                .replace(/\\/g, "/")
                .replace(".astro", "")
                .replace(".mdx", "")
                .replace(".md", "");

            route = route.replace("/index", "");

            if (route === "") {
                route = "/";
            }

            results.push(BASE_URL + route);
        }

    });

    return results;
}

const pages = getPages(pagesDir);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${pages.map(url => `
  <url>
    <loc>${url}</loc>
  </url>
`).join("")}

</urlset>
`;

fs.writeFileSync(
    path.join(process.cwd(), "public", "sitemap.xml"),
    sitemap
);

console.log("✅ Sitemap generated!");
console.log("Pages:", pages.length);