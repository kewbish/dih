<template>
  <section class="section">
    <div class="container">
      <div class="message is-info is-bold is-medium is-v-centered">
        <div class="message-header">
          <h1 class="title has-text-white">Sign in, and let's get started!</h1>
        </div>
        <div class="message-body">
          <p class="subtitle">
            We do not collect any information other than your display name.
            <br />This site works best on desktop. It
            <em>may</em> work on mobile, but it's difficult to view the code snippets.
          </p>
          <div class="tile is-ancestor">
              <div class="tile is-parent">
                <div class="tile is-child notification is-info">
                  <a class="button" style="margin-bottom:10px" @click="loginGoogle">Log In - Gmail</a><br>
                  <a class="button" style="margin-bottom:10px" @click="loginGitHub">Log In - GitHub</a><br>
                  <a class="button" style="margin-bottom:10px" @click="loginAnon">Continue without logging in</a>
                </div>
              </div>
              <div class="tile is-parent">
                <div class="tile is-child notification is-info">
                  <div class="field">
                      <label class="label has-text-white">Email</label>
                      <div class="control"><input class="input" type="email" v-model="email" placeholder="Your email."></div>
                  </div>
                  <div class="field">
                      <label class="label has-text-white">Password</label>
                      <div class="control"><input class="input" type="text" v-model="pass" placeholder="Password."></div>
                  </div>
                  <div class="field">
                      <label class="label has-text-white">Confirm password</label>
                      <div class="control"><input class="input" type="text" v-model="passrep" placeholder="Confirm password."></div>
                  </div>
                  <div class="field">
                      <div class="control"><button class="button is-dark" @click="loginEmail()">Log In / Create</button></div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data: function () {
    return {
        email: null,
        pass: null,
        passrep: null
    }
  },
  methods: {
    loginGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      this.login(provider);
    },
    loginGitHub() {
        const provider = new firebase.auth.GithubAuthProvider();
        this.login(provider);
    },
    loginAnon() {
        const lastRoute = localStorage.getItem("page");
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                firebase
                .auth()
                .signInAnonymously()
                .then(() => {
                  this.$router.push(lastRoute != null ? lastRoute : "/0");
                })
                .catch((err) => {
                  console.log("There was an error.", err);
                });
            } else {
               this.$router.push(lastRoute != null ? lastRoute : "/0");                                 
            }
        });
    },
    loginEmail() {
        const lastRoute = localStorage.getItem("page");
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                if (this.pass != this.passrep) {
                    console.log("There was an error.");
                }
                firebase.auth().signInWithEmailAndPassword(this.email, this.pass)
                .then(() => {
                  this.$router.push(lastRoute != null ? lastRoute : "/0");
                })
                .catch((err) => {
                  console.log("There was an error.", err);
                });
            } else {
               this.$router.push(lastRoute != null ? lastRoute : "/0");                                 
            }
        });
    },
    login(provider) {
        const lastRoute = localStorage.getItem("page");
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                firebase
                .auth()
                .signInWithPopup(provider)
                .then(() => {
                  this.$router.push(lastRoute != null ? lastRoute : "/0");
                })
                .catch((err) => {
                  console.log("There was an error.", err);
                });
            } else {
               this.$router.push(lastRoute != null ? lastRoute : "/0");                                 
            }
        });
    }
  },
  beforeCreate: function () {
    const lastRoute = localStorage.getItem("page");
    firebase.auth().onAuthStateChanged((user) => {
      if (user && lastRoute) {
        this.$router.push(lastRoute != "undefined" || lastRoute != null ? lastRoute : "/0");
      }
    });
  },
};
</script>
