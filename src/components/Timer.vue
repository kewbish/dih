<template>
  <div class="message is-info" style="margin-top: 20px;">
    <div class="message-header">
      <p>{{ title }}</p>
    </div>
    <div class="columns">
      <div class="column">
        <div class="box" style="margin: 10px;">
          <p>{{ subtitle }}</p>
        </div>
      </div>
      <div class="column">
        <div class="box" style="margin: 10px;">
          <h1 class="title">{{ formatTime }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["durationInSecs", "title", "subtitle"],
  data(){
      return{
          timerInt: this.durationInSecs,
          timerIsOn: true
      }
  },
  computed: {
    formatTime() {
      var timeLeft = this.timerInt;
      var minutes = Math.floor(timeLeft / 60);
      var seconds = timeLeft % 60;
      if (seconds < 10){
          seconds = `0${seconds}`;
      }
      return `${minutes}:${seconds}`;
    },
  },
  watch: {
      timerInt: {
          handler(val){
            if (val > 0){
                this.count();
            }
            else if (val <= 0){
                this.endTimer();
            }
          },
          immediate: true
      }
  },
  methods: {
      endTimer: function(){
          alert("Ended.");
      },
      count: function(){
          setTimeout(() => {this.timerInt--;}, 1000);
      }
  }
};
</script>