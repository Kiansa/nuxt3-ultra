<template>
  <header class="text-zinc-600 dark:text-zinc-200">
    <div class="container mx-auto flex flex-row flex-wrap items-center justify-between p-5">
      <NuxtLink :to="localePath('/')" class="flex items-center font-medium text-zinc-900 dark:text-zinc-50">
        <img src="/nuxt-logo.svg" alt="logo" class="h-10 w-10" />
        <span class="ml-3 text-xl">Nuxt Ultra</span>
      </NuxtLink>
      <!-- Mobile nav -->
      <div class="flex md:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Icon name="heroicons:bars-3" class="h-7 w-7" />
        </button>
      </div>
      <ClientOnly>
        <Dialog as="div" class="md:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
          <div class="fixed inset-0 z-10" />
          <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full max-w-sm overflow-y-auto bg-zinc-50 px-6 py-6 text-zinc-600 drop-shadow-2xl dark:bg-zinc-800 dark:text-zinc-200 sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-end">
              <button type="button" class="-m-2.5 rounded-md p-2.5" @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <Icon name="heroicons:x-mark" class="h-7 w-7" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-zinc-500/10">
                <div class="space-y-2 py-6">
                  <NuxtLink :to="localePath('/')" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-zinc-800 hover:dark:text-zinc-50">{{ $t('home') }}</NuxtLink>
                  <NuxtLink :to="localePath('/about')" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-zinc-800 hover:dark:text-zinc-50">{{ $t('about') }}</NuxtLink>
                  <NuxtLink :to="localePath('/services')" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-zinc-800 hover:dark:text-zinc-50">{{ $t('services') }}</NuxtLink>
                  <NuxtLink :to="localePath('/contact')" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-zinc-800 hover:dark:text-zinc-50">{{ $t('contact') }}</NuxtLink>
                  <NuxtLink :to="localePath('/blog')" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-zinc-800 hover:dark:text-zinc-50">{{ $t('blog.title') }}</NuxtLink>
                </div>
                <div class="flex justify-end space-x-3 py-6">
                  <LocaleSwitch />
                  <ToggleColorMode />
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </ClientOnly>
      <!-- Desktop nav -->
      <nav class="hidden flex-wrap items-center justify-center text-base md:ml-4 md:mr-auto md:flex md:border-l md:border-gray-400 md:py-1 md:pl-4">
        <NuxtLink :to="localePath('/')" class="mr-5 hover:text-zinc-800 hover:dark:text-zinc-50">{{ $t('home') }}</NuxtLink>
        <NuxtLink :to="localePath('/about')" class="mr-5 hover:text-zinc-800 hover:dark:text-zinc-50">{{ $t('about') }}</NuxtLink>
        <NuxtLink :to="localePath('/services')" class="mr-5 hover:text-zinc-800 hover:dark:text-zinc-50">{{ $t('services') }}</NuxtLink>
        <NuxtLink :to="localePath('/contact')" class="mr-5 hover:text-zinc-800 hover:dark:text-zinc-50">{{ $t('contact') }}</NuxtLink>
        <NuxtLink :to="localePath('/blog')" class="mr-5 hover:text-zinc-800 hover:dark:text-zinc-50">{{ $t('blog.title') }}</NuxtLink>
      </nav>
      <div class="hidden flex-wrap md:flex">
        <LocaleSwitch />
        <ToggleColorMode />
      </div>
    </div>
  </header>
</template>

<script setup>
const localePath = useLocalePath()
const mobileMenuOpen = ref(false)
</script>
