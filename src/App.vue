<template>
  <div id="app">
    <router-view></router-view>
    <div class="fixed-input">
        <input
          v-if="!['/', '/login', '/editor'].includes($router.currentRoute.path)"
          type="text"
          class="input fixed-count"
          v-model.lazy="count"
          :placeholder="count"
        />
        <div class="fixed-drop dropdown is-up" id="dropdown" v-if="!['/', '/login', '/editor'].includes($router.currentRoute.path) && anon">
          <div class="dropdown-trigger" @click="trigger">
            <button class="button">Link account</button>
          </div>
          <div class="dropdown-menu">
            <div class="dropdown-content">
              <div class="dropdown-item">
                <a @click="linkGmail()" class="is-size-6">Link to Google</a>
              </div>
              <hr class="dropdown-divider">
              <div class="dropdown-item">
                <a @click="linkGithub()" class="is-size-6">Link to GitHub</a>
              </div>
              <hr class="dropdown-divider">
              <div class="dropdown-item">
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input class="input is-small is-size-6" type="text" placeholder="Email." v-model="email">
                  </div>
                </div>
                <div class="field">
                  <label class="label">New password</label>
                  <div class="control">
                    <input class="input is-small is-size-6" type="password" placeholder="Password." v-model="password">
                  </div>
                </div>
                <a @click="linkEmail()" class="is-size-6">Link email</a>
                <div class="message is-danger is-small mt-2" v-if="err">
                  <div class="message-header">Error</div>
                  <div class="message-body is-size-6">
                    {{err}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <button
      v-if="parseInt(count) > 0"
      @click="countDown"
      class="button is-info fixed-back is-small"
    >&lt;</button>
    <button
      v-if="parseInt(count) < 22"
      @click="countUp"
      class="button is-info fixed-right is-small"
    >&gt;</button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data () {
    return {
      anon: null,
      email: null,
      password: null,
      err: null
    };
  },
  methods: {
    trigger() {
      document.getElementById("dropdown").classList.toggle("is-active");
    },
    countUp() {
      if (parseInt(this.count) < 22) {
        if (!(0 <= parseInt(this.count) && parseInt(this.count) < 22)) {
          this.$router.push(`/0`);
        } else {
          var newU = parseInt(this.count) + 1;
          this.$router.push(`/${newU}`);
        }
      }
    },
    countDown() {
      if (parseInt(this.count) > 0) {
        if (!(0 < parseInt(this.count) && parseInt(this.count) <= 22)) {
          this.$router.push(`/22`);
        } else {
          var newU = parseInt(this.count) - 1;
          this.$router.push(`/${newU}`);
        }
      }
    },
    linkGmail() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().currentUser.linkWithPopup(provider)
      .then(() => {
        console.log("Account upgraded successfully.");
        this.anon = false;
      }).catch((err) => {
        console.log("Error upgrading anonymous account", err);
        this.err = err + "- please try again!";
      });
    },
    linkGithub() {
      var provider = new firebase.auth.GithubAuthProvider();
      firebase.auth().currentUser.linkWithPopup(provider)
      .then(() => {
        console.log("Account upgraded successfully.");
        this.anon = false;
      }).catch((err) => {
        console.log("Error upgrading anonymous account", err);
        this.err = err + "- please try again!";
      });
    },
    linkEmail() {
      var provider = new firebase.auth.EmailAuthProvider.credential(this.email, this.password);
      firebase.auth().currentUser.linkWithCredential(provider)
      .then(() => {
        console.log("Account upgraded successfully.");
        this.anon = false;
      }).catch((err) => {
        console.log("Error upgrading anonymous account", err);
        this.err = err + "- please try again!";
      });
    }
  },
  computed: {
    count: {
      get: function () {
        return this.$route.fullPath.replace("/", "");
      },
      set: function (val) {
        if (val !== "" && !isNaN(parseInt(val))) {
          this.$router.push(`/${val}`);
        }
      },
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
       if (user) {
         this.anon = user.isAnonymous; 
       } else {
         this.anon = false;
       }
    });
  }
};
</script>
