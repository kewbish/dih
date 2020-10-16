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
        { path: "/0", name: "0", component: () => import('./components/slides/z0.vue'), meta: { requiresAuth: true } },
        { path: "/1", name: "1", component: () => import('./components/slides/z1.vue'), meta: { requiresAuth: true } },
        { path: "/2", name: "2", component: () => import('./components/slides/z2.vue'), meta: { requiresAuth: true } },
        { path: "/3", name: "3", component: () => import('./components/slides/z3.vue'), meta: { requiresAuth: true } },
        { path: "/4", name: "4", component: () => import('./components/slides/z4.vue'), meta: { requiresAuth: true } },
        { path: "/5", name: "5", component: () => import('./components/slides/z5.vue'), meta: { requiresAuth: true } },
        { path: "/6", name: "6", component: () => import('./components/slides/z6.vue'), meta: { requiresAuth: true } },
        { path: "/7", name: "7", component: () => import('./components/slides/z7.vue'), meta: { requiresAuth: true } },
        { path: "/8", name: "8", component: () => import('./components/slides/z8.vue'), meta: { requiresAuth: true } },
        { path: "/9", name: "9", component: () => import('./components/slides/z9.vue'), meta: { requiresAuth: true } },
        { path: "/10", name: "10", component: () => import('./components/slides/z10.vue'), meta: { requiresAuth: true } },
        { path: "/11", name: "11", component: () => import('./components/slides/z11.vue'), meta: { requiresAuth: true } },
        { path: "/12", name: "12", component: () => import('./components/slides/z12.vue'), meta: { requiresAuth: true } },
        { path: "/13", name: "13", component: () => import('./components/slides/z13.vue'), meta: { requiresAuth: true } },
        { path: "/14", name: "14", component: () => import('./components/slides/z14.vue'), meta: { requiresAuth: true } },
        { path: "/15", name: "15", component: () => import('./components/slides/z15.vue'), meta: { requiresAuth: true } },
        { path: "/16", name: "16", component: () => import('./components/slides/z16.vue'), meta: { requiresAuth: true } },
        { path: "/17", name: "17", component: () => import('./components/slides/z17.vue'), meta: { requiresAuth: true } },
        { path: "/18", name: "18", component: () => import('./components/slides/z18.vue'), meta: { requiresAuth: true } },
        { path: "/19", name: "19", component: () => import('./components/slides/z19.vue'), meta: { requiresAuth: true } },
        { path: "/20", name: "20", component: () => import('./components/slides/z20.vue'), meta: { requiresAuth: true } },
        { path: "/21", name: "21", component: () => import('./components/slides/z21.vue'), meta: { requiresAuth: true } },
        { path: "/22", name: "22", component: () => import('./components/slides/z22.vue'), meta: { requiresAuth: true } },
        { path: "/editor", name: "editor", component: () => import('./components/Editor.vue', meta: { requiresAuth: true })},
        { path: "/login", name: "login", component: () => import('./components/Login.vue') },
        { path: "/", name: "index", component: Index },
        { path: "*", name: "any", component: () => import('./components/slides/zAny.vue'), meta: { requiresAuth: true } }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
});
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        var user = auth().currentUser;
        if (to == "/0" && from == "/login") {
            next()
        } else if (!user) {
            next("/login");
        } else {
            next();
        }
    }
    else {
        next();
    }
});
router.afterEach((to) => {
    if (to.name != "index" && to.name != "any" && to.name != "login") {
        localStorage.setItem("page", to.name);
    }
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
