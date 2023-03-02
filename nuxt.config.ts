// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-icon"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Mój Wybór",
      htmlAttrs: {
        lang: "pl",
        class: "scroll-smooth scrollbar-hide",
      },
    },
  },
});
