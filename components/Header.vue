<template>
  <header class="dark:text-zinc-200 text-zinc-600">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <NuxtLink :to="localePath('/')" class="flex font-medium items-center text-zinc-900 dark:text-zinc-50 mb-4 md:mb-0">
        <img src="/nuxt-logo.svg" alt="logo" class="w-10 h-10" />
        <span class="ml-3 text-xl">Nuxt Ultra</span>
      </NuxtLink>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
        <NuxtLink :to="localePath('/')" class="mr-5 hover:dark:text-zinc-50 hover:text-zinc-800">{{ $t('home') }}</NuxtLink>
        <NuxtLink :to="localePath('/about')" class="mr-5 hover:dark:text-zinc-50 hover:text-zinc-800">{{ $t('about') }}</NuxtLink>
        <NuxtLink :to="localePath('/services')" class="mr-5 hover:dark:text-zinc-50 hover:text-zinc-800">{{ $t('services') }}</NuxtLink>
        <NuxtLink :to="localePath('/contact')" class="mr-5 hover:dark:text-zinc-50 hover:text-zinc-800">{{ $t('contact') }}</NuxtLink>
        <NuxtLink :to="localePath('/blog')" class="mr-5 hover:dark:text-zinc-50 hover:text-zinc-800">{{ $t('blog') }}</NuxtLink>
      </nav>
      <LocaleSwitch />
      <ToggleColorMode />
    </div>
  </header>
</template>

<script setup>
const localePath = useLocalePath()
</script>
