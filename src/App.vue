<template>
  <div id="app">
      <index v-if="app.index"></index>
      <learn v-if="!app.index"></learn>
  </div>
</template>

<script>
export default {
};
</script>
