import type { GetServerSideProps } from "next";
import { docsPages } from "@/config/docs";

const allDocsPages = docsPages.map((category) => category.items).flat();
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${SITE_URL}</loc>
     </url>
     ${allDocsPages
       .map(({ label, href }) => {
         return `
       <url>
           <loc>${SITE_URL}${href}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
