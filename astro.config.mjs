// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";
import starlight from "@astrojs/starlight";

import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightVideos from "starlight-videos";

import rehypeMathJax from "rehype-mathjax";
import remarkMath from "remark-math";
import remarkMermaid from "remark-mermaidjs";

// load .env for local development
const env = loadEnv(process.env.NODE_ENV || "development", process.cwd(), "");
// support both runtime environment (deployed env) variables and local .env
const GTM_ID = process.env.PUBLIC_GTM_ID || env.PUBLIC_GTM_ID;

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath, remarkMermaid],
    rehypePlugins: [rehypeMathJax],
  },

  vite: {
    resolve: {
      alias: {
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
    },
  },

  integrations: [
    starlight({
      plugins: [
        starlightSidebarTopics([
          {
            label: "∑ Mathematics",
            link: "math/readme",
            // icon: 'open-book',
            items: [
              {
                label: "Algebra",
                items: [{ autogenerate: { directory: "01--math/algebra" } }],
              },
              {
                label: "Category Theory",
                items: [
                  { autogenerate: { directory: "01--math/category theory" } },
                ],
              },
              {
                label: "Calculus",
                items: [{ autogenerate: { directory: "01--math/calculus" } }],
              },
              {
                label: "Linear Algebra",
                items: [
                  { autogenerate: { directory: "01--math/linear algebra" } },
                ],
              },
              {
                label: "Statistics",
                items: [{ autogenerate: { directory: "01--math/statistics" } }],
              },
            ],
          },
          {
            label: "🧮 CSE",
            link: "computer-science-engineering/readme",
            // icon: 'laptop',
            items: [
              {
                label: "general",
                items: [{ autogenerate: { directory: "02--CSE/_general" } }],
              },
              {
                label: "DSA",
                items: [{ autogenerate: { directory: "02--CSE/DSA" } }],
              },
              {
                label: "Computer Network",
                items: [{ autogenerate: { directory: "02--CSE/network" } }],
              },
              {
                label: "Operating System",
                items: [{ autogenerate: { directory: "02--CSE/OS" } }],
              },
              {
                label: "Programming Language",
                items: [{ autogenerate: { directory: "02--CSE/prog lang" } }],
              },
              {
                label: "RegEx",
                items: [{ autogenerate: { directory: "02--CSE/RegEx" } }],
              },
              {
                label: "Web",
                items: [{ autogenerate: { directory: "02--CSE/web" } }],
              },
            ],
          },
          {
            label: "🧠 AI/ML",
            link: "artificial-intelligence/readme",
            // icon: 'puzzle',
            items: [
              {
                label: "// Story //",
                items: [{ autogenerate: { directory: "03--AI/__story__" } }],
              },
              {
                label: "Fundamentals",
                items: [{ autogenerate: { directory: "03--AI/fundamentals" } }],
              },
              {
                label: "Models Architecture",
                items: [{ autogenerate: { directory: "03--AI/model arch" } }],
              },
              {
                label: "CV",
                items: [{ autogenerate: { directory: "03--AI/CV" } }],
              },
              {
                label: "NLP",
                items: [{ autogenerate: { directory: "03--AI/NLP" } }],
              },
              {
                label: "Reinforcement Learning",
                items: [{ autogenerate: { directory: "03--AI/RL" } }],
              },
            ],
          },
          {
            label: "⚙️ DX & Setup",
            link: "developer-experience/readme",
            // icon: 'setting',
            items: [
              {
                label: "Cheatsheet",
                items: [{ autogenerate: { directory: "04--DX/cheatsheet" } }],
              },
              {
                label: "Git",
                items: [{ autogenerate: { directory: "04--DX/git" } }],
              },
              {
                label: "Setup",
                items: [{ autogenerate: { directory: "04--DX/env setup" } }],
              },
            ],
          },
          {
            label: "Guides",
            link: "guides/example",
            items: [
              // Each item here is one entry in the navigation menu.
              { label: "Example Guide", slug: "guides/example" },
              {
                label: "Notation",
                items: [
                  {
                    autogenerate: {
                      directory: "guides/z--notation_throughout_the_docs",
                    },
                  },
                ],
              },
            ],
          },
        ]),
        starlightVideos(),
      ],
      title: "CoMB",
      /*
      // Advance Tip : Auto-import components globally
      components: {
        HoverNote: './src/components/HoverNote.astro'
      },
      */
      head: [
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css",
          },
        },
        {
          tag: "script",
          attrs: {
            src: "https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js",
            type: "text/javascript",
          },
        },
        {
          // [ GTM script tag in the `head` ]
          // This script initializes Google Tag Manager
          // and should be placed as high in the head as possible.
          // It loads the GTM library asynchronously.
          tag: "script",
          content: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        },
      ],
      customCss: ["./src/styles/global.css", "./src/styles/mathjax.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/keytech42",
        },
        { icon: "linkedin", label: "LinkedIn", href: "" },
      ],
    }),
  ],
});
