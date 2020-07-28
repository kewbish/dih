<template>
  <div id="app">
    <router-view></router-view>
    <input v-if="!isNaN(count)" type="text" class="input fixed-input" v-model="count" />
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
        var newU = this.count + 1;
        this.$router.push(`/${newU}`);
      }
    },
    countDown() {
      if (this.count > 0) {
        var newU = this.count - 1;
        this.$router.push(`/${newU}`);
      }
    },
  },
  computed: {
    count: {
      get: function () {
        return parseInt(this.$route.fullPath.replace("/", ""));
      },
      set: function (val) {
        this.$router.push(`/${val}`);
      },
    },
  },
};
</script>
