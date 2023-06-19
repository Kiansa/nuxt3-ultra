<template>
  <Head>
    <Title>{{ data.title }}</Title>
    <Meta name="description" :content="data.meta" />
    <Meta property="og:description" :content="data.meta" />
    <Meta property="og:title" :content="data.title" />
    <Meta property="og:image" :content="data.img" />
  </Head>
  <main>
    <section class="">
      <!-- Article content -->
      <article class="prose dark:prose-invert max-w-4xl mx-auto">
        <ContentDoc data-aos="fade-up" data-aos-delay="450">
          <template #not-found>
            <NotFound />
          </template>
        </ContentDoc>
      </article>
    </section>
  </main>
</template>
<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).only(['title', 'meta', 'img', 'date']).findOne()
})
</script>
