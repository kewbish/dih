var firebaseConfig = {
    apiKey: "AIzaSyC-ECsx_XHME5w_yjnrlQ9kyn9Ek_jVdYc",
    authDomain: "justin-116dc.firebaseapp.com",
    projectId: "justin-116dc",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const appVue = new Vue({
    el: '#app',
    data: {
        loading: true,
    },
    methods: {
        authUser: function () {
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('https://www.googleapis.com/auth/drive');
            firebase.auth().signInWithPopup(provider).then((result) => {
                this.user = result.user;
            }).catch(err => console.log(err));
        }
    }
});