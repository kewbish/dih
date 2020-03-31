<template>
  <div>
    <h1 class="title is-1 has-text-white">{{ msg }}</h1>
    <p class="subtitle is-3 has-text-white">{{ sub }}</p>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    msg: String,
    sub: String
  }
}
</script>

<style scoped>

</style>
