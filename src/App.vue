<template>
  <div id="app">
    <index v-if="$indexTrue.index"></index>
    <learn v-if="!$indexTrue.index"></learn>
  </div>
</template>

<script>
export default {
};
</script>
