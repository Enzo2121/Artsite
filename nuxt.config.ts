// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxthq/studio'
  ],
  routeRules: {
    '/': { prerender: true }
  }
})