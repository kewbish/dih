<template>
  <section class="section">
    <div class="container">
      <div class="message is-info is-bold is-medium is-v-centered">
        <div class="message-header">
          <h1 class="title has-text-white">Sign in, and let's get started!</h1>
        </div>
        <div class="message-body">
          <p class="subtitle">We do not collect any information other than your display name.</p>
          <div class="tile is-ancestor">
              <div class="tile is-parent">
                <div class="tile is-child box">
                  <div class="login" v-if="loginSwitch">
                      <h1 class="title is-4">Login <a class="switch" @click="switchLogin">or create</a></h1>
                      <div class="field">
                          <label class="label">Email</label>
                          <div class="control"><input class="input" type="email" v-model="email" placeholder="Your email."></div>
                      </div>
                      <div class="field">
                          <label class="label">Password</label>
                          <div class="control"><input class="input" type="password" v-model="pass" placeholder="Password."></div>
                      </div>
                      <div class="field">
                          <div class="control"><button class="button is-dark" style="margin-right: 1%;" @click="loginEmail()">Log In</button> 
                          <button class="button is-dark" @click="forgotEmailSwitch()">Forgot password?</button>
                          </div>
                      </div>
                    </div>
                    <div v-else-if="forgot">
                      <h1 class="title is-4">Reset password <a class="switch" @click="switchLogin">or login</a></h1>
                      <div class="field">
                          <label class="label">Email</label>
                          <div class="control"><input class="input" type="email" v-model="email" placeholder="Your email."></div>
                      </div>
                      <div class="field">
                          <div class="control"><button class="button is-dark" style="margin-right: 1%;" @click="forgotEmail()">Send reset email</button> 
                          </div>
                      </div>
                    </div>
                    <div class="create" v-else>
                      <h1 class="title is-4">Create account <a class="switch" @click="switchLogin">or login</a></h1>
                      <div class="field">
                          <label class="label">Email</label>
                          <div class="control"><input class="input" type="email" v-model="email" placeholder="Your email."></div>
                      </div>
                      <div class="field">
                          <label class="label">Password</label>
                          <div class="control"><input class="input" type="password" v-model="pass" placeholder="Password."></div>
                      </div>
                      <div class="field">
                          <label class="label">Confirm password</label>
                          <div class="control"><input class="input" type="password" v-model="passrep" placeholder="Confirm password."></div>
                      </div>
                      <div class="field">
                          <div class="control"><button class="button is-dark" @click="createEmail()">Create</button></div>
                      </div>
                     </div>
                  </div>
               </div>
              <div class="tile is-4 is-parent">
                  <div class="tile is-child">
                      <div class="box">
                          <h1 class="title is-4">Other options</h1>
                          <a class="button is-dark" style="margin-bottom:10px" @click="loginGoogle">Log In - Gmail</a><br>
                          <a class="button is-dark" style="margin-bottom:10px" @click="loginGitHub">Log In - GitHub</a><br> 
                          <a class="button is-dark" style="margin-bottom:10px" @click="loginAnon">Anonymous - no info</a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="message is-danger" v-if="err">
             <div class="message-header">Error</div>
             <div class="message-body">
               {{err}}
             </div>
          </div>
          <div class="message is-success" v-if="message">
             <div class="message-header">Success!</div>
             <div class="message-body">
               {{message}}
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
        loginSwitch: true,
        forgot: false,
        email: null,
        pass: null,
        passrep: null,
        err: null,
        message: null
    }
  },
  methods: {
    switchLogin() {
      this.loginSwitch = !this.loginSwitch;
      this.forgot = false;
    },
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
        const user = firebase.auth().user;
        if (!user) {
            firebase
            .auth()
            .signInAnonymously()
            .then(() => {
              this.$router.push(lastRoute != null ? lastRoute : "/0")
              .catch((err) => {
                console.log("There was an error.", err);
              });
            })
            .catch((err) => {
              console.log("There was an error.", err);
              this.err = `${err} - please try again!`;
            });
        } else {
           this.$router.push(lastRoute != null ? lastRoute : "/0")
           .catch((err) => {
             console.log("There was an error.", err);
           });
        }
    },
    loginEmail() {
        const lastRoute = localStorage.getItem("page");
        const user = firebase.auth().user;
        if (!user) {
            firebase.auth().signInWithEmailAndPassword(this.email, this.pass)
            .then(() => {
              this.$router.push(lastRoute != null ? lastRoute : "/0")
              .catch((err) => {
                console.log("There was an error.", err);
              });
            })
            .catch((err) => {
              console.log("There was an error.", err);
              this.err = `${err} - please try again!`;
            });
        } else {
           this.$router.push(lastRoute != null ? lastRoute : "/0")
           .catch((err) => {
             console.log("There was an error.", err);
           });
        }
    },
    forgotEmailSwitch() {
        this.loginSwitch = false;
        this.forgot = true;
    },
    forgotEmail() {
        firebase.auth().sendPasswordResetEmail(this.email)
        .then(() => {
            this.message = "A password reset was sent.";
            this.loginSwitch = true;
            this.forgot = false;
        })
        .catch((err) => {
          console.log("There was an error.", err);
          this.err = `${err} - please try again!`;
        });
    },
    createEmail() {
        const lastRoute = localStorage.getItem("page");
        const user = firebase.auth().user;
        if (!user) {
            if (this.pass != this.passrep) {
                console.log("There was an error.");
                this.err = "Passwords do not match - please try again!";
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(this.email, this.pass)
            .then(() => {
              this.$router.push(lastRoute != null ? lastRoute : "/0")
              .catch((err) => {
                console.log("There was an error.", err);
              });
            })
            .catch((err) => {
              if (err == "auth/email-already-in-use") {
                firebase.auth().signInWithEmailAndPassword(this.email, this.pass)
                .then(() => {
                  this.$router.push(lastRoute != null ? lastRoute : "/0")
                  .catch((err) => {
                    console.log("There was an error.", err);
                  });
                })                                                          
                .catch((err) => {                                           
                  console.log("There was an error.", err);
                  this.err = `${err} - please try again!`;
                });
              } else {
                  console.log("There was an error.", err);
                  this.err = `${err} - please try again!`;
              }
            });
        } else {
           this.$router.push(lastRoute != null ? lastRoute : "/0") 
           .catch((err) => {
             console.log("There was an error.", err);
           });
        }
    },
    login(provider) {
        const lastRoute = localStorage.getItem("page");
        const user = firebase.auth().user;
        if (!user) {
            firebase
            .auth()
            .signInWithPopup(provider)
            .then(() => {
              this.$router.push(lastRoute != null ? lastRoute : "/0")
              .catch((err) => {
                console.log("There was an error.", err);
              });
            })
            .catch((err) => {
              console.log("There was an error.", err);
              this.err = `${err} - please try again!`;
            });
        } else {
           this.$router.push(lastRoute != null ? lastRoute : "/0")
           .catch((err) => {
             console.log("There was an error.", err);
           });
        }
    }
  },
  beforeCreate: function () {
    const lastRoute = localStorage.getItem("page");
    firebase.auth().onAuthStateChanged((user) => {
      if (user && lastRoute) {
        this.$router.push(lastRoute != "undefined" || lastRoute != null ? lastRoute : "/0")
        .catch((err) => {
          console.log("There was an error.", err);
        });
      }
    })
    .catch((err) => {
        console.log("There was an error.", err);
    });
  },
};
</script>

<style scoped>
.switch:hover {
    color: #209cee !important;
    transition: 0.3s ease all;
}
</style>
