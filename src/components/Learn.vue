<template>
    <div class="container">
        <div class="box is-blue" v-if="!auth">
            <a class="button" style="margin-bottom:10px" @click="login">Log In - Gmail</a>
        </div>
        <div v-if="auth">
            <h1 class="title">Hello {{firstName}}!</h1>
        </div>
    </div>
</template>>

<script>
import Firebase from '../firebase.js';
export default {
    name: 'Learn',
    data (){
        return{
            user:{
                logged: false,
                data:{
                }
            }
        }
    },
    computed: {
        auth(){
          return this.user.logged;
        },
        firstName(){
          if (this.user.data.displayName) {
            return this.user.data.displayName.split(' ')[0];
          }
          return null;
        }
    },
    methods: {
      login() {
        Firebase.login();
      },
      logout() {
        Firebase.logout()
      }
    },
    mounted: function() {
      Firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.logged = true;
          this.user.data = user;
        }
        else {
          this.user.logged = false;
          this.user.data = {};
        }
      })
    }
}
</script>