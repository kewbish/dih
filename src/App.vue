<template>
  <div id="app">
    <router-view></router-view>
    <input type="text" class="input fixed-input" v-model="count" />
    <button v-if="count > 0" @click="countDown" class="button is-info fixed-back is-small">&lt;</button>
    <button v-if="count < 22" @click="countUp" class="button is-info fixed-right is-small">&gt;</button>
    <div class="fixed-right-bottom">
      <a
        href="https://canadalearningcode.secure.nonprofitsoapbox.com/clc-donate"
        class="button is-danger"
      >Support CLC 🍁</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    countUp() {
      if (this.count < 22) {
        this.count++;
        this.$router.push(`/${this.count}`);
      }
    },
    countDown() {
      if (this.count > 0) {
        this.count--;
        this.$router.push(`/${this.count}`);
      }
    },
  },
  computed: {
    count: {
      get() {
        return parseInt(this.$route.fullPath.replace("/", ""));
      },
      set(newCount) {
        return newCount;
      },
    },
  },
};
</script>
