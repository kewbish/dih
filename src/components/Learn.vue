<template>
  <section class="section">
    <div class="container">
      <div class="message is-info is-bold is-medium" v-if="!auth">
        <div class="message-header">
          <h1 class="title has-text-white">Sign in, and let's get started!</h1>
        </div>
        <div class="message-body">
          <p class="subtitle">This is required to prevent abuse.</p>
          <a class="button" style="margin-bottom:10px" @click="login">Log In - Gmail</a>
        </div>
      </div>
      <div v-if="auth">
        <slide v-if="count == 1" :slideSubject="'Hello ' + firstName + '!'" :slideContent="[{line: 'Time to get started on your web development journey!'},{line:'First, let\'s download some software.'},{img: `https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png`},{list:[{item: 'hello'}, {item: 'hi'}]}]"></slide>
      </div>
    </div>
  </section>
</template>>

<script>
import Firebase from "../firebase.js";
export default {
  name: "Learn",
  data() {
    return {
      user: {
        logged: false,
        data: {}
      },
      count: 1
    };
  },
  computed: {
    auth() {
      return this.user.logged;
    },
    firstName() {
      if (this.user.data.displayName) {
        return this.user.data.displayName.split(" ")[0];
      }
      return null;
    }
  },
  methods: {
    login() {
      Firebase.login();
    }
  },
  mounted: function() {
    Firebase.auth.onAuthStateChanged(user => {
      if (user) {
        this.user.logged = true;
        this.user.data = user;
      } else {
        this.user.logged = false;
        this.user.data = {};
      }
    });
  }
};
</script>