<template>
  <section class="section">
    <div class="container">
      <div class="message is-info is-bold is-medium">
        <div class="message-header">
          <h1 class="title has-text-white">Sign in, and let's get started!</h1>
        </div>
        <div class="message-body">
          <p class="subtitle">
            We do not collect any information other than your display name.
            <br />This site works best on desktop. It
            <em>may</em> work on mobile, but it's difficult to view the code snippets.
          </p>
          <a class="button" style="margin-bottom:10px" @click="login">Log In - Gmail</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Firebase from "../firebase.js";
export default {
  methods: {
    login() {
      Firebase.login();
      this.$router.push("/0");
    }
  }
};
</script>