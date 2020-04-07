import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

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

new Vue({
  render: h => h(App),
}).$mount('#app')
