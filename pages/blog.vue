<template>
  <section class="relative px-4">
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold dark:text-zinc-50 text-zinc-900 sm:text-4xl">From the blog</h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl dark:text-zinc-200 text-zinc-600 font-semibold sm:mt-4">Latest guides and how to do's for Developers.</p>
      </div>
      <ContentList :query="query" v-slot="{ list }">
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <div v-for="blog in list" :key="blog.title" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover" :src="blog.img" :alt="blog.title" />
            </div>
            <div class="flex-1 bg-accent p-6 flex flex-col justify-between">
              <div class="flex-1">
                <div class="flex flex-row gap-2">
                  <p v-for="tag in blog.tags" class="text-sm font-medium bg-gradient-to-r from-primary-800 via-primary-600 to-primary-500 text-zinc-100 rounded-full px-4 py-1">
                    {{ tag }}
                  </p>
                </div>
                <NuxtLink :to="blog._path" class="block mt-2">
                  <p class="text-lg font-semibold dark:text-zinc-50 text-zinc-900">
                    {{ blog.title }}
                  </p>
                  <p class="mt-3 text-sm dark:text-zinc-200 text-zinc-600">
                    {{ blog.meta }}
                  </p>
                </NuxtLink>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <NuxtLink to="/about">
                    <span class="sr-only">Kian Salout</span>
                    <img class="h-10 w-10 rounded-full" src="https://res.cloudinary.com/kiansa/image/upload/v1673960966/kiansalout_avatar.webp" alt="Kian Salout" />
                  </NuxtLink>
                </div>
                <div class="ml-3">
                  <div class="flex space-x-1 text-xs dark:text-zinc-200 text-zinc-600">
                    <NuxtLink to="/about" class="text-xs font-medium dark:text-zinc-200 text-zinc-600 hover:underline"> Kian Salout </NuxtLink>
                    <span aria-hidden="true"> &middot; </span>
                    <time :datetime="blog.date">
                      {{ blog.date }}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentList>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

useServerSeoMeta({
  title: 'Kian Salout | Blog For Developers',
  ogTitle: 'Kian Salout | Blog For Developers',
  description: 'Full Stack Developer specializing in Vue 3, Nuxt 3, and Tailwind CSS delivering high-quality, responsive webapps, websites and ecommerce solutions for businesses.',
  ogDescription: 'Full Stack Developer specializing in Vue 3, Nuxt 3, and Tailwind CSS delivering high-quality, responsive webapps, websites and ecommerce solutions for businesses.',
  ogImage: 'https://res.cloudinary.com/kiansa/image/upload/v1675371644/Kiansalout.com.png',
  twitterCard: 'summary_large_image',
})
const query: QueryBuilderParams = { path: '/blog', sort: [{ date: -1 }] }
</script>
