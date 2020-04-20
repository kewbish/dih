<template>
  <div class="message is-info is-bold" style="margin-top: 20px; margin-bottom: 20px;">
    <div class="message-header">
      <h1 class="title has-text-white">{{ title }}</h1>
    </div>
    <div class="columns">
      <div class="column">
        <div class="box" style="margin: 10px;">
          <p style="margin-bottom:15px">{{ subtitle }}</p>
          <a class="button is-dark" @click="endTimer">{{ switchText }}</a>
          <a class="button is-dark" @click="resTimer" style="margin-left: 5px">↪️ Reset</a>
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
  props: {
    durationInSecs: Number,
    title: String,
    subtitle: String,
  },
  data(){
      return{
          timerInt: this.durationInSecs,
          c: 0,
          isOn: false,
          switchText: "▶️ Timer"
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
                this.c = setTimeout(() => {this.timerInt--;}, 1000);
            }
            else if (val <= 0){
                this.endTimer();
            }
            if (this.timerInt == 0){
                alert("Your timer's run out! 📚")
            }
          }
      }
  },
  methods: {
      endTimer: function(){
          if (this.isOn == true){
            clearInterval(this.c);
            this.switchText = "▶️ Timer";
            this.isOn = false;
          }
          else{
              this.c = setTimeout(() => {this.timerInt--;}, 1000);
              this.switchText = "⏸️ Timer";
              this.isOn = true;
          }
      },
      resTimer: function(){
          clearInterval(this.c);
          this.timerInt = this.durationInSecs;
      }
  }
};
</script>