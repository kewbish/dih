import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC-ECsx_XHME5w_yjnrlQ9kyn9Ek_jVdYc",
    authDomain: "justin-116dc.firebaseapp.com",
    databaseURL: "https://justin-116dc.firebaseio.com",
    projectId: "justin-116dc",
    storageBucket: "justin-116dc.appspot.com",
    messagingSenderId: "230365228358",
    appId: "1:230365228358:web:98d0c2e7a2af045c318947"
};

firebase.initializeApp(firebaseConfig);

export default {
    auth: firebase.auth(),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error){
        console.log("There was an error.", error.code, error.message, error.email, error.credential);
        })
    },
    logout() {
      firebase.auth().signOut()
      .then(function() {})
      .catch(function(error) {
        console.log(error)});
    }
}