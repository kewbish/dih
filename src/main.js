import Vue from 'vue';
import VueRouter from 'vue-router';
import VueShowdown from 'vue-showdown';
import { initializeApp, auth } from 'firebase/app';
import firebaseConfig from './firebase.js';
import App from './App.vue';
import Index from './components/Index.vue';
import Slide from './components/Slide.vue';
import Timer from './components/Timer.vue';

Vue.config.productionTip = false;

Vue.component('slide', Slide);
Vue.component('timer', Timer);

Vue.use(VueShowdown);

initializeApp(firebaseConfig);

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        { path: "/0", component: () => import('./components/slides/z0.vue'), meta: { requiresAuth: true } },
        { path: "/1", component: () => import('./components/slides/z1.vue'), meta: { requiresAuth: true } },
        { path: "/2", component: () => import('./components/slides/z2.vue'), meta: { requiresAuth: true } },
        { path: "/3", component: () => import('./components/slides/z3.vue'), meta: { requiresAuth: true } },
        { path: "/4", component: () => import('./components/slides/z4.vue'), meta: { requiresAuth: true } },
        { path: "/5", component: () => import('./components/slides/z5.vue'), meta: { requiresAuth: true } },
        { path: "/6", component: () => import('./components/slides/z6.vue'), meta: { requiresAuth: true } },
        { path: "/7", component: () => import('./components/slides/z7.vue'), meta: { requiresAuth: true } },
        { path: "/8", component: () => import('./components/slides/z8.vue'), meta: { requiresAuth: true } },
        { path: "/9", component: () => import('./components/slides/z9.vue'), meta: { requiresAuth: true } },
        { path: "/10", component: () => import('./components/slides/z10.vue'), meta: { requiresAuth: true } },
        { path: "/11", component: () => import('./components/slides/z11.vue'), meta: { requiresAuth: true } },
        { path: "/12", component: () => import('./components/slides/z12.vue'), meta: { requiresAuth: true } },
        { path: "/13", component: () => import('./components/slides/z13.vue'), meta: { requiresAuth: true } },
        { path: "/14", component: () => import('./components/slides/z14.vue'), meta: { requiresAuth: true } },
        { path: "/15", component: () => import('./components/slides/z15.vue'), meta: { requiresAuth: true } },
        { path: "/16", component: () => import('./components/slides/z16.vue'), meta: { requiresAuth: true } },
        { path: "/17", component: () => import('./components/slides/z17.vue'), meta: { requiresAuth: true } },
        { path: "/18", component: () => import('./components/slides/z18.vue'), meta: { requiresAuth: true } },
        { path: "/19", component: () => import('./components/slides/z19.vue'), meta: { requiresAuth: true } },
        { path: "/20", component: () => import('./components/slides/z20.vue'), meta: { requiresAuth: true } },
        { path: "/21", component: () => import('./components/slides/z21.vue'), meta: { requiresAuth: true } },
        { path: "/22", component: () => import('./components/slides/z22.vue'), meta: { requiresAuth: true } },
        { path: "/login", component: () => import('./components/Login.vue') },
        { path: "/", component: Index },
        { path: "*", component: () => import('./components/slides/zAny.vue'), meta: { requiresAuth: true } }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
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
