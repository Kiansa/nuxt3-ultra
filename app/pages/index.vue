<template>
  <div class="mx-auto flex max-w-8xl flex-col justify-center rounded-full py-2">
    <h1 class="bg-primary-600 text-7xl font-extrabold text-zinc-900 dark:text-zinc-50">{{ $t('home') }}</h1>
    <UCard>
      <div>
        <p>Count: {{ counter.count }}</p>
        <p>Computed Count: {{ counter.computedCount }}</p>
        <UButton variant="solid" label="add" @click="counter.increment" />
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const counter = useCounterStore()
</script>
