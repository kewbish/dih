<template>
  <div id="app">
      <index v-on:switchIndex="switchIndexParent" v-if="index"></index>
      <learn v-if="!index"></learn>
  </div>
</template>

<script>
export default {
    data(){
        return{
            index: true
        }
    },
    methods:{
        switchIndexParent: function () {
            this.index = !this.index;
        }
    },   
};
</script>
