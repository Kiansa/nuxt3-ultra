<template>
  <header class="dark:text-zinc-200 text-zinc-600">
    <div class="container mx-auto flex justify-between flex-wrap p-5 flex-row items-center">
      <NuxtLink :to="localePath('/')" class="flex font-medium items-center text-zinc-900 dark:text-zinc-50">
        <img src="/nuxt-logo.svg" alt="logo" class="w-10 h-10" />
        <span class="ml-3 text-xl">Nuxt Ultra</span>
      </NuxtLink>
      <!-- Mobile nav -->
      <div class="flex md:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-10 w-10" aria-hidden="true" />
        </button>
      </div>
      <Dialog as="div" class="md:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel class="fixed drop-shadow-2xl inset-y-0 right-0 z-10 w-full overflow-y-auto dark:text-zinc-200 text-zinc-600 bg-zinc-50 dark:bg-zinc-800 px-6 py-6 max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-end">
            <button type="button" class="-m-2.5 rounded-md p-2.5" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-zinc-500/10">
              <div class="space-y-2 py-6">
                <NuxtLink :to="localePath('/')" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:dark:text-zinc-50 hover:text-zinc-800">{{ $t('home') }}</NuxtLink>
                <NuxtLink :to="localePath('/about')" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:dark:text-zinc-50 hover:text-zinc-800">{{ $t('about') }}</NuxtLink>
                <NuxtLink :to="localePath('/services')" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:dark:text-zinc-50 hover:text-zinc-800">{{ $t('services') }}</NuxtLink>
                <NuxtLink :to="localePath('/contact')" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:dark:text-zinc-50 hover:text-zinc-800">{{ $t('contact') }}</NuxtLink>
                <NuxtLink :to="localePath('/blog')" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:dark:text-zinc-50 hover:text-zinc-800">{{ $t('blog') }}</NuxtLink>
              </div>
              <div class="flex justify-end space-x-3 py-6">
                <LocaleSwitch />
                <ToggleColorMode />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      <!-- Desktop nav -->
      <nav class="hidden md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 md:flex flex-wrap items-center text-base justify-center">
        <NuxtLink :to="localePath('/')" class="mr-5 hover:dark:text-zinc-50 hover:text-zinc-800">{{ $t('home') }}</NuxtLink>
        <NuxtLink :to="localePath('/about')" class="mr-5 hover:dark:text-zinc-50 hover:text-zinc-800">{{ $t('about') }}</NuxtLink>
        <NuxtLink :to="localePath('/services')" class="mr-5 hover:dark:text-zinc-50 hover:text-zinc-800">{{ $t('services') }}</NuxtLink>
        <NuxtLink :to="localePath('/contact')" class="mr-5 hover:dark:text-zinc-50 hover:text-zinc-800">{{ $t('contact') }}</NuxtLink>
        <NuxtLink :to="localePath('/blog')" class="mr-5 hover:dark:text-zinc-50 hover:text-zinc-800">{{ $t('blog') }}</NuxtLink>
      </nav>
      <div class="hidden md:flex flex-wrap">
        <LocaleSwitch />
        <ToggleColorMode />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
const localePath = useLocalePath()
const mobileMenuOpen = ref(false)
</script>
