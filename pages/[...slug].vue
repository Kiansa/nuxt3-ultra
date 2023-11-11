<template>
  <section class="">
    <!-- Article content -->
    <article v-if="data" class="prose mx-auto max-w-4xl dark:prose-invert">
      <ContentDoc :path="$route.path">
        <template #not-found>
          <NotFound />
        </template>
      </ContentDoc>
    </article>
  </section>
</template>
<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => queryContent().where({ _path: path }).only(['title', 'meta', 'img', 'date']).findOne())
useHead({
  title: data.title,
  meta: [
    { name: 'description', content: data.meta },
    { property: 'og:description', content: data.meta },
    { property: 'og:title', content: data.title },
    { property: 'og:image', content: data.img },
  ],
})
</script>
