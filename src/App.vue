<template>
  <div id="app">
    <router-view></router-view>
    <div class="fixed-input">
        <input
          v-if="$router.currentRoute.path !== '/' && $router.currentRoute.path !== '/login'"
          type="text"
          class="input fixed-count"
          v-model.lazy="count"
          :placeholder="count"
        />
        <div class="fixed-drop dropdown is-up" v-if="anon">
          <div class="dropdown-trigger" @click="trigger">
            <button class="button">Link account</button>
          </div>
          <div class="dropdown-menu">
            <div class="dropdown-content">
              <div class="dropdown-item">
                <a @click="linkGmail()">Link to Google</a>
              </div>
              <hr class="dropdown-divider">
              <div class="dropdown-item">
                <a @click="linkGithub()">Link to Github</a>
              </div>
              <hr class="dropdown-divider">
              <div class="dropdown-item">
                <details>
                    <summary>Link email</summary>
                    <label class="label">Email</label>
                    <input class="input" type="text" placeholder="Email">
                    <label class="label">Password</label>
                    <input class="input" type="password" placeholder="Password">
                    <a @click="linkEmail()">Link email</a>
                </details>
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
      anon: null
    };
  },
  methods: {
    trigger(target) {
     target.target.classList.toggle("is-active"); 
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
  created() {
    firebase.auth().onAuthStateChanged((user) => {
       if (user) {
         this.anon = user.isAnonymous; 
       } else {
         return false;
       }
    });
  }
};
</script>
