<template>
  <div id="app">
    <div class="hero is-light is-medium" style="background:url('https://hdwallpaperim.com/wp-content/uploads/2017/08/22/351740-space-Earth-Moon-stars-minimalism-Sun.jpg');background-size:cover;background-repeat:no-repeat;">
        <div class="hero-body" style="text-shadow:5px 5px #1e1e1e">
            <Title class="has-text-centered" msg="Build. Create. Learn." sub="A social justice project - revamped!"/>
        </div>
    </div>
  </div>
</template>

<script>
import Title from './components/Title.vue'

export default {
  name: 'App',
  components: {
    Title
  }
}
</script>

<style>
#app {
}
</style>
