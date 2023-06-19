<template>
  <div class="flex flex-col min-h-screen overflow-hidden bg-white dark:bg-zinc-900 font-inter">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="container mx-auto flex flex-wrap p-5 flex-col grow my-16">
      <!-- Page sections -->
      <slot />
    </main>

    <!-- Site footer -->
    <BuyMeCoffee />
    <Footer />
  </div>
</template>
<script setup>
// add whatever you need to HTML Head tag
useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://rsms.me/' },
    { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
  ],
  script: [{ src: 'https://unpkg.com/aos@next/dist/aos.js' }], // AOS animation, you can remove if you don't use it
})
</script>
