// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules: ["@nuxt/eslint", "@nuxt/ui"],
  devtools: {
    enabled: process.env.NODE_ENV !== "production",
  },
  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "light",
    fallback: "light",
    storage: "cookie",
  },
  routeRules: {
    "/": { prerender: true },
  },
  runtimeConfig: {
    environment: process.env.NODE_ENV || "development",
    public: {
      appVersion: "0.0.0",
      apiBase: "http://localhost:8000/api",
    },
  },
});
