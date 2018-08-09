const fs = require('fs')
module.exports = {
  locales: {
    "/": {
      lang: "en-US",
      title: "Blaze",
      description: "Component Library created by Ample Organics"
    }
  },
  serviceWorker: true,
  themeConfig: {
    repo: "AmpleOrganics/Blaze.vue",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    sidebarDepth: 3,
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        lastUpdated: "Last Updated",
        editLinkText: "Edit this page on GitHub",
        nav: [
          {
            text: "Components",
            link: "/components/"
          }
        ],
        sidebar: {
          "/components/": [
            "/components/",
            {
              title: "Components",
              collapsable: false,
              children: [
                "/components/Alert",
                "/components/Badge",
                "/components/Button",
                "/components/Checkbox",
                "/components/InfoPair",
                "/components/Input",
                "/components/Modal"
              ]
            }
          ]
        }
      }
    },
    css: {
      loaderOptions: {
        scss: {
          data: fs.readFileSync("./docs/.vuepress/_variables.scss", "utf-8")
        }
      }
    }
  }
};
