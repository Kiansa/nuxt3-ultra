<template>
  <footer class="body-font text-gray-600">
    <div class="container mx-auto flex flex-col items-center px-5 py-8 md:flex-row">
      <NuxtLink :to="$localePath('/')" class="mb-4 flex items-center font-medium text-zinc-900 dark:text-zinc-50 md:mb-0">
        <img src="/nuxt-logo.svg" alt="logo" class="h-10 w-10" />
        <span class="ml-3 text-xl">Nuxt Ultra</span>
      </NuxtLink>
      <p class="order-1 mt-4 text-sm text-gray-500 md:order-none md:ml-4 md:mt-0 md:border-l-2 md:border-gray-200 md:py-2 md:pl-4">
        © {{ currentYear }} Your Awesome Company —
        <a href="https://twitter.com/KSalout" class="ml-1 text-gray-600" rel="noopener noreferrer" target="_blank">@KSalout</a>
      </p>
      <span class="mt-4 inline-flex justify-center md:ml-auto md:mt-0 md:justify-start">
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
