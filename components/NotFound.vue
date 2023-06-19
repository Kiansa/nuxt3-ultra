<template>
  <div class="flex flex-col overflow-hidden">
    <main class="grow">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p class="text-sm font-semibold text-h text-opacity-50 uppercase tracking-wide">404 error</p>
        <h1 class="mt-2 text-4xl font-extrabold text-h tracking-tight sm:text-5xl">Uh oh! I think you’re lost.</h1>
        <p class="mt-2 text-lg font-medium text-zinc-700 dark:text-zinc-300">It looks like the page you’re looking for doesn't exist.</p>
        <div class="mt-6">
          <button @click="handleError" class="bg-btn-gd inline-flex items-center px-8 py-3 text-lg font-bold rounded-full text-h">Go back home</button>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
const props = defineProps({
  error: Object,
})
const handleError = () => clearError({ redirect: '/' })
</script>
