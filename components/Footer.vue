<template>
  <footer class="text-gray-600 body-font">
    <div class="container px-5 py-8 mx-auto flex items-center md:flex-row flex-col">
      <NuxtLink :to="localePath('/')" class="flex font-medium items-center text-zinc-900 dark:text-zinc-50 mb-4 md:mb-0">
        <img src="/nuxt-logo.svg" alt="logo" class="w-10 h-10" />
        <span class="ml-3 text-xl">Nuxt Ultra</span>
      </NuxtLink>
      <p class="order-1 md:order-none text-sm text-gray-500 md:ml-4 md:pl-4 md:border-l-2 md:border-gray-200 md:py-2 md:mt-0 mt-4">
        © {{ currentYear }} Your Awsome Company —
        <a href="https://twitter.com/KSalout" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@KSalout</a>
      </p>
      <span class="inline-flex md:ml-auto md:mt-0 mt-4 justify-center md:justify-start">
        <a class="text-gray-500">
          <Icon name="bxl:facebook" class="h-6 w-6 text-zinc-500" aria-hidden="true" />
        </a>
        <a class="ml-3 text-gray-500">
          <Icon name="bxl:twitter" class="h-6 w-6 text-zinc-500" aria-hidden="true" />
        </a>
        <a class="ml-3 text-gray-500">
          <Icon name="bxl:instagram" class="h-6 w-6 text-zinc-500" aria-hidden="true" />
        </a>
        <a class="ml-3 text-gray-500">
          <Icon name="bxl:linkedin" class="h-6 w-6 text-zinc-500" aria-hidden="true" />
        </a>
      </span>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
