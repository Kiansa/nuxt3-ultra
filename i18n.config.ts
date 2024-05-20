export default defineI18nConfig(() => ({
  legacy: false,
  lazy: true,
  strategy: 'prefix_except_default',
  langDir: 'locales',
  defaultLocale: 'en',
}))
