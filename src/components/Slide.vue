<template>
  <section class="section">
    <h1 class="title is-1">{{ slideSubject }}</h1>
    <div v-for="(s, index) in slideContent" :key="index" style="margin: 5px 0;">
      <p class="is-size-5" v-if="s.line">{{ s.line }}</p>
      <div v-if="s.img">
        <img :src="s.img[0]" :alt="s.img[1]" style="margin: 5px 0;" />
        <p style="margin: 5px 0;">
          <em>{{ s.img[1] }}</em>
        </p>
      </div>
      <ul v-if="s.list" style="margin: 5px;">
        <li v-for="(sl, i) in s.list" :key="i" class="is-size-5">
          <a v-if="sl.link" :src="sl.link">● {{ sl.item }}</a>
          <p v-else>● {{ sl.item }}</p>
        </li>
      </ul>
      <timer v-if="s.timer" :title="s.timer[0]" :subtitle="s.timer[1]" :durationInSecs="s.timer[2]"></timer>
      <div v-if="s.code" style="margin: 5px 0;">
        <pre><code>{{ s.code }}</code></pre>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
      slideSubject: String,
      slideContent: Array
  }
};
</script>