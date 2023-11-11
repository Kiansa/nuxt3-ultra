<template>
  <section class="relative px-4">
    <div class="relative mx-auto max-w-7xl">
      <div class="text-center">
        <h2 class="text-h text-3xl font-extrabold tracking-tight sm:text-4xl">From the blog</h2>
        <p class="text-p mx-auto mt-3 max-w-2xl text-xl font-semibold sm:mt-4">Latest guides and how to do's for Developers.</p>
      </div>
      <ContentList path="/blog" v-slot="{ list }">
        <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          <div v-for="blog in list" :key="blog.title" class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover" :src="blog.img" :alt="blog.title" />
            </div>
            <div class="bg-accent flex flex-1 flex-col justify-between p-6">
              <div class="flex-1">
                <div class="flex flex-row gap-2">
                  <p v-for="tag in blog.tags" class="bg-gd text-p rounded-full px-4 py-1 text-xs font-semibold tracking-wide">
                    {{ tag }}
                  </p>
                </div>
                <NuxtLink :to="blog._path" class="mt-2 block">
                  <p class="text-h text-lg font-semibold">
                    {{ blog.title }}
                  </p>
                  <p class="text-p mt-3 text-sm">
                    {{ blog.meta }}
                  </p>
                </NuxtLink>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <NuxtLink to="/about">
                    <span class="sr-only">{{ blog.author }}</span>
                    <img class="h-10 w-10 rounded-full" :src="blog.authorAvatar" :alt="blog.author" />
                  </NuxtLink>
                </div>
                <div class="ml-3">
                  <div class="text-p flex space-x-1 text-sm">
                    <p class="text-p text-xs font-medium">
                      <NuxtLink to="/about" class="hover:underline"> {{ blog.author }} </NuxtLink>
                    </p>
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

<script setup>
useServerSeoMeta({
  title: '',
  ogTitle: '',
  description: '',
  ogDescription: '',
  ogImage: '',
  twitterCard: 'summary_large_image',
})
</script>
