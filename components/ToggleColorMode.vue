<template>
  <Menu as="div" class="relative ml-4">
    <div>
      <MenuButton class="flex rounded-full bg-zinc-200 dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 p-2">
        <span class="sr-only">Theme Mode</span>
        <Icon v-if="$colorMode.value === 'light'" name="heroicons:sun" class="h-7 w-7 text-zinc-700 dark:text-zinc-300" aria-hidden="true" />
        <Icon v-if="$colorMode.value === 'dark'" name="heroicons:moon" class="h-7 w-7 text-zinc-700 dark:text-zinc-300" aria-hidden="true" />
      </MenuButton>
    </div>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-zinc-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <MenuItem as="div" class="hover:bg-gray-200 dark:hover:bg-primary-700">
          <button @click="colorMode.preference = 'light'" type="button" class="flex gap-2 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 w-full">
            <Icon name="heroicons:sun" class="h-6 w-6" aria-hidden="true" />
            <span class="text-zinc-700 dark:text-zinc-300">Light Mode</span>
          </button>
        </MenuItem>
        <MenuItem as="div" class="hover:bg-gray-200 dark:hover:bg-primary-700">
          <button @click="colorMode.preference = 'dark'" type="button" class="flex gap-2 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 w-full">
            <Icon name="heroicons:moon" class="h-6 w-6" aria-hidden="true" />
            <span class="text-zinc-700 dark:text-zinc-300">Dark Mode</span>
          </button>
        </MenuItem>
        <MenuItem as="div" class="hover:bg-gray-200 dark:hover:bg-primary-700">
          <button @click="colorMode.preference = 'system'" type="button" class="flex gap-2 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 w-full">
            <Icon name="heroicons:computer-desktop" class="h-6 w-6" aria-hidden="true" />
            <span class="text-zinc-700 dark:text-zinc-300">System Mode</span>
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
const colorMode = useColorMode()
</script>
