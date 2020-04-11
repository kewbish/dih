<template>
  <div class="message is-info">
    <div class="message-header">
      <p>{{ title }}</p>
    </div>
    <div class="columns">
      <div class="column">
          <div class="box">
              <p class="has-text-white">{{ subtitle }}</p>
          </div>
      </div>
      <div class="column">
        <div class="box">
            <h1 class="title has-text-white"></h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["durationInSecs", "title", "subtitle"],
  computed: {
    formatTime() {
      var timeLeft = this.durationInSecs;
      var minutes = Math.floor(timeLeft / 60);
      var seconds = timeLeft % 60;
      if (seconds < 10){
          seconds = `0${seconds}`;
      }
      return `${minutes}:${seconds}`
    },
    timeLeft(){
        return this.timeLeft //
    }
  },
  data(){
      return timerInt = null;
  },
  methods:{
      startTimer(){
          this.timerInt = setInterval(() => (this.))
      }
  }
};
</script>