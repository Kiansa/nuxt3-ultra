<template>
  <div class="flex min-h-screen flex-col overflow-hidden bg-white font-inter dark:bg-zinc-900">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="my-16 grow">
      <NuxtPage />
    </main>
    <!-- Site footer -->
    <BuyMeCoffee />
    <Footer />
  </div>
</template>

<script setup></script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
