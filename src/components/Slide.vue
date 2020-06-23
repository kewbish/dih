<template>
  <section class="section">
    <h1 class="title is-1">{{ slideSubject }}</h1>
    <div class="content is-medium">
      <div v-for="(s, index) in slideContent" :key="index">
        <vue-markdown :source="s.md" v-if="s.md" />
        <timer
          v-if="s.timer"
          :title="s.timer[0]"
          :subtitle="s.timer[1]"
          :durationInSecs="s.timer[2]"
        ></timer>
      </div>
    </div>
  </section>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  props: {
    slideSubject: String,
    slideContent: Array
  },
  components: {
    VueMarkdown
  }
};
</script>