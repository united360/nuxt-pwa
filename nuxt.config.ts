// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      name: "Test manifest",
      short_name: "test",
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
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
