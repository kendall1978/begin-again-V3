// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [["@pinia/nuxt",
    {
      autoImports: ['defineStore', 'acceptHMRUpdate', 'usePinia'],
    }
  ]],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
});
