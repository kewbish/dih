import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMarkdown from 'vue-markdown';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.js';
import App from './App.vue';
import Login from './components/Login.vue';
import Learn from './components/Learn.vue';
import Index from './components/Index.vue';
import Slide from './components/Slide.vue';
import Timer from './components/Timer.vue';

Vue.config.productionTip = false;

Vue.component('learn', Learn);
Vue.component('index', Index);
Vue.component('slide', Slide);
Vue.component('timer', Timer);

Vue.use(VueMarkdown);
Vue.component('vue-markdown', VueMarkdown);

initializeApp(firebaseConfig);

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        { path: "/login", component: Login },
        { path: "/", component: Index }
    ]
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
