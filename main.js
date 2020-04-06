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
        user: null
    },
    methods: {
        authUser: function () {
            const provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithRedirect(provider).then((result) => {
                this.user = result.user;
            }).catch(err => console.log(error));
        }
    }
});