<template>
  <section class="section">
    <div class="container">
      <section class="section">
        <h1 class="title is-1">{{ slideSubject }}</h1>
        <div class="content is-medium">
          <VueShowdown :markdown="slideContent" :vueTemplate="true" />
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    slideSubject: String,
    slideContent: String,
  },
};
</script>