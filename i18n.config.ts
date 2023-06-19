export default defineI18nConfig(() => ({
  legacy: false,
  locales: [
    {
      code: 'en',
      name: 'English',
      iso: 'en-US',
      file: 'en.json',
    },
    {
      code: 'es',
      name: 'Español',
      iso: 'es-ES',
      file: 'es.json',
    },
    {
      code: 'fr',
      name: 'Français',
      iso: 'fr-FR',
      file: 'fr.json',
    },
  ],
  lazy: true,
  strategy: 'prefix_except_default',

  langDir: 'locales',
  defaultLocale: 'en',
}))
