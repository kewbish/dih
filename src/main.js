import Vue from 'vue';
import VueRouter from 'vue-router';
import VueShowdown from 'vue-showdown';
import { initializeApp, auth } from 'firebase/app';
import firebaseConfig from './firebase.js';
import App from './App.vue';
import Login from './components/Login.vue';
import Learn from './components/Learn.vue';
import Index from './components/Index.vue';
import Slide from './components/Slide.vue';
import Timer from './components/Timer.vue';
import z0 from './components/slides/z0.vue';
import z1 from './components/slides/z1.vue';
import z2 from './components/slides/z2.vue';
import z3 from './components/slides/z3.vue';
import z4 from './components/slides/z4.vue';
import z5 from './components/slides/z5.vue';
import z6 from './components/slides/z6.vue';

Vue.config.productionTip = false;

Vue.component('learn', Learn);
Vue.component('index', Index);
Vue.component('slide', Slide);
Vue.component('timer', Timer);

Vue.use(VueShowdown);

initializeApp(firebaseConfig);

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        { path: "/0", component: z0, meta: { requiresAuth: true } },
        { path: "/1", component: z1, meta: { requiresAuth: true } },
        { path: "/2", component: z2, meta: { requiresAuth: true } },
        { path: "/3", component: z3, meta: { requiresAuth: true } },
        { path: "/4", component: z4, meta: { requiresAuth: true } },
        { path: "/5", component: z5, meta: { requiresAuth: true } },
        { path: "/6", component: z6, meta: { requiresAuth: true } },
        { path: "/login", component: Login },
        { path: "/", component: Index }
    ]
});
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        auth().onAuthStateChanged(user => {
            if (!user) {
                next("/login");
            }
            else {
                next();
            }
        })
    }
    else {
        next();
    }
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
