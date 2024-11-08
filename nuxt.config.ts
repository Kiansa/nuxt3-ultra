// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL, // change this to your site URL
    },
  },

  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://rsms.me/' },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
      ],
      htmlAttrs: {
        lang: 'en',
        class: 'scroll-smooth',
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: [
    '@nuxt/content', // remove this if you don't want to use @nuxt/content for your blog
    '@nuxt/ui',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore'],
      },
    ],
    'pinia-plugin-persistedstate/nuxt',
    'nuxt-gtag',
    '@nuxtjs/i18n',
  ],

  i18n: {
    // langDir: 'locales',
    lazy: true,
    baseUrl: process.env.SITE_URL,
    locales: [
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' },
      { code: 'es', name: 'Español', language: 'es-ES', file: 'es.json' },
      { code: 'fr', name: 'Français', language: 'fr-FR', file: 'fr.json' },
    ],
    debug: false,
    defaultLocale: 'en',
    // strategy: 'no_prefix',
    // strategy: 'prefix',
    // strategy: 'prefix_and_default',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  content: {
    highlight: {
      // Code Theme used in all color schemes.
      theme: 'one-dark-pro',
    },
  },

  gtag: {
    id: process.env.GTAG_ID, // change this to your Google Analytics ID G-xxxxxxxxxx
  },

  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode',
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-08-05',
})
