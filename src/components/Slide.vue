<template>
  <section class="section">
    <h1 class="title is-1">{{ slideSubject }}</h1>
    <div class="content is-medium">
      <vue-markdown :source="slideContent"></vue-markdown>
    </div>
  </section>
</template>

<script>
// eslint-disable-next-line
import VueMarkdown from "vue-markdown";
export default {
  props: {
    slideSubject: String,
    slideContent: String,
  },
};
</script>