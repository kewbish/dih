import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.VUE_APP_API,
    authDomain: process.env.VUE_APP_AUTH,
    databaseURL: process.env.VUE_APP_DATABASE,
    projectId: process.env.VUE_APP_ID,
    storageBucket: process.env.VUE_APP_BUCKET,
    messagingSenderId: process.env.VUE_APP_SENDER,
    appId: process.env.VUE_APP_APPID
};

firebase.initializeApp(firebaseConfig);

export default {
    auth: firebase.auth(),
    login() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                console.log(result);
            })
            .catch(function (error) {
                console.log("There was an error.", error.code, error.message, error.email, error.credential);
            })
    },
    logout() {
        firebase.auth().signOut()
            .then(function () { })
            .catch(function (error) {
                console.log(error)
            });
    }
}