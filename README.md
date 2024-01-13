<div align='center'>
<h1>Nuxt 3 Ultra - Starter Template</h1>
<img src='https://nuxt.com/assets/design-kit/icon-green.svg' alt='Nuxt3 Ultra - Opinionated Nuxt 3 Starter Template' width='344'/>
</div>

<p align='center'>
Develop your next web app with <b>Nuxt 3 Ultra </b><sup><em>(speed)</em></sup><br>
</p>

## Modules

### This template comes with the following modules:

- nuxt-headlessui - [Documentation](https://github.com/P4sca1/nuxt-headlessui)
- @nuxt/ui - [Documentation](https://ui.nuxt.com/)
- @nuxtjs/i18n - [Documentation](https://v8.i18n.nuxtjs.org/)
- @pinia/nuxt - [Documentation](https://pinia.vuejs.org/ssr/nuxt.html)
- @pinia-plugin-persistedstate/nuxt - [Documentation](https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html)
- nuxt-gtag - [Documentation](https://github.com/johannschopplich/nuxt-gtag)
- @nuxt/content - [Documentation](https://content.nuxt.com/)
- @nuxtjs/seo - [Documentation](https://nuxtseo.com/nuxt-seo/getting-started/installation)

### Latest Changes
- nuxt-icon - [Documentation](https://github.com/nuxt-modules/icon#readme) (removed! now includes in @nuxt/ui)
- @nuxtjs/tailwindcss - [Documentation](https://tailwindcss.nuxtjs.org/) (removed! now includes in @nuxt/ui)
- @nuxtjs/color-mode - [Documentation](https://color-mode.nuxtjs.org/) (removed! now includes in @nuxt/ui)
- @heroicons/vue - [Documentation](https://heroicons.com/) (removed! now includes in @nuxt/ui)
- nuxt-simple-sitemap - [Documentation](https://github.com/harlan-zw/nuxt-simple-sitemap)(removed! now includes in @nuxtjs/seo
- nuxt-simple-robots - [Documentation](https://github.com/harlan-zw/nuxt-simple-robots)(removed! now includes in @nuxtjs/seo)

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more about Nuxt 3.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production For SSG

```bash
# npm
npm run generate

# pnpm
pnpm run generate

# yarn
yarn generate
```

### How to deploy on traditional hosting (Plesk, cPanel, etc.)

After you run the `generate` command, you will have a `.output` folder that contains `public`, `server` and a `nitro.json`. All you need is to copy the folders and files inside the `.output/public` and paste it in your domain directory to deploy your application.

### How to deploy on modern hosting (Netlify, Vercel, etc.)

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/deployment#supported-hosting-providers) to learn more.

## Production (For Advanced Users)

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
