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
import firebase from "firebase/app";
import "firebase/auth";
export default {
  methods: {
    login() {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          const provider = new firebase.auth.GoogleAuthProvider();
          firebase
            .auth()
            .signInWithPopup(provider)
            .then(() => {
              this.$router.push("/0");
            })
            .catch((err) => {
              console.log("There was an error.", err);
            });
        } else {
          this.$router.push("/0");
        }
      });
    },
  },
  beforeCreate: function () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push("/0");
      }
    });
  },
};
</script>