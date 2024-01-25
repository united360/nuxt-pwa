// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt"],

  nitro: {
    prerender: {
      routes: ["/rss.xml", "/sitemap.xml", "/"],
    },
  },

  pwa: {
    manifest: {
      name: "PWA manifest",
      short_name: "test",
      start_url: "/",
      description: "test description",
      icons: [
        {
          src: "icons/64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icons/192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    strategies: "generateSW",
    injectRegister: "auto",
    registerType: "autoUpdate",
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html}"],
      // globIgnores: ['google*.html'],
      navigateFallbackDenylist: [/^\/api/],
      runtimeCaching: [
        {
          urlPattern: ({ url }) => {
            return url.pathname.startsWith("/api");
          },
          handler: "CacheFirst" as const,
          options: {
            cacheName: "api-cache",
            cacheableResponse: { statuses: [0, 200] },
          },
        },
      ],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600, // 360 for testing only
    },
    devOptions: {
      enabled: true,
      navigateFallback: "/",
      navigateFallbackAllowlist: [/^\/$/],
    },
  },

  // pwa: {
  //   registerType: "autoUpdate",
  //   manifest: {
  //     name: "Test manifest",
  //     short_name: "test",
  //     description: "test description",
  //     icons: [
  //       {
  //         src: "icons/64.png",
  //         sizes: "64x64",
  //         type: "image/png",
  //       },
  //       {
  //         src: "icons/144.png",
  //         sizes: "144x144",
  //         type: "image/png",
  //       },
  //       {
  //         src: "icons/192.png",
  //         sizes: "192x192",
  //         type: "image/png",
  //       },
  //       {
  //         src: "icons/512.png",
  //         sizes: "512x512",
  //         type: "image/png",
  //       },
  //     ],
  //   },
  //   workbox: {

  //     navigateFallback: "/",
  //     globPatterns: ["**/*.{js,css,html,json,svg,webp,png}"],
  //     // runtimeCaching: [
  //     //   {
  //     //     urlPattern: "/",
  //     //     handler: "NetworkFirst",
  //     //   },
  //     // ],
  //   },
  //   devOptions: {
  //     enabled: true,
  //     type: "module",
  //   },
  // },
  // }
});
