import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

import frontMatter from "front-matter";
import stringifyObject from "stringify-object";
import { createLoader } from "simple-functional-loader";

import * as path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

/** @type {import('rehype-pretty-code').Options} */
const options = {};
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  webpack(config, options) {
    function mdxLoader() {
      return [
        createLoader(function (source) {
          let { attributes: meta, body } = frontMatter(source);

          let codeTop = `import DocsLayout from "@/layouts/docsLayout";`;

          let codeBottom = `export default function Page({ children }) {
            const tableOfContent = [
              { title: "Button component", href: "#button" },
              { title: "Installation", href: "#installation" },
              { title: "Default", href: "#default" },
              { title: "Secondary", href: "#secondary" },
              { title: "Outline", href: "#outline" },
              { title: "Ghost", href: "#ghost" },
              { title: "Link", href: "#link" },
            ];
            return (
              <DocsLayout tableOfContent={tableOfContent} meta={${JSON.stringify(meta)}}>
                {children}
              </DocsLayout>
            );
          }`;

          return [codeTop, body, codeBottom].join("\n\n");
        }),
      ];
    }

    config.module.rules.push({
      test: /\.mdx$/,
      include: [path.join(__dirname, "src/pages/docs/")],
      use: mdxLoader(),
    });

    return config;
  },
};

export default withMDX(nextConfig);
