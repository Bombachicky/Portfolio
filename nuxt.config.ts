// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: [
    "~/index.css",
],
})
