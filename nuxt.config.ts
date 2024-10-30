// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-quasar-ui',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/eslint-module',
    // With options
    // ['@nuxtjs/eslint-module', { /* module options */ }]
  ],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  compatibilityDate: '2024-04-03',
  eslint: {
    // config: {
    //   stylistic: true,
    // },
  },
  quasar: {
    plugins: [
      'Notify',
      'Loading',
      'LoadingBar',
      'LoadingBar',
      'Dialog',
      'LocalStorage',
      'SessionStorage',
      'Cookies',
      'Dark',
    ],
    // Configurable Component Defaults
    components: {
      defaults: {
        QBtn: {
          dense: true,
          flat: true,
        },
        QInput: {
          dense: true
        }
      }
    },
  },
})