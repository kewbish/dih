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
import z7 from './components/slides/z7.vue';
import z8 from './components/slides/z8.vue';
import z9 from './components/slides/z9.vue';
import z10 from './components/slides/z10.vue';
import z11 from './components/slides/z11.vue';
import z12 from './components/slides/z12.vue';
import z13 from './components/slides/z13.vue';
import z14 from './components/slides/z14.vue';
import z15 from './components/slides/z15.vue';
import z16 from './components/slides/z16.vue';
import z17 from './components/slides/z17.vue';
import z18 from './components/slides/z18.vue';
import z19 from './components/slides/z19.vue';
import z20 from './components/slides/z20.vue';
import z21 from './components/slides/z21.vue';
import z22 from './components/slides/z22.vue';
import zAny from './components/slides/zAny.vue';

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
        { path: "/7", component: z7, meta: { requiresAuth: true } },
        { path: "/8", component: z8, meta: { requiresAuth: true } },
        { path: "/9", component: z9, meta: { requiresAuth: true } },
        { path: "/10", component: z10, meta: { requiresAuth: true } },
        { path: "/11", component: z11, meta: { requiresAuth: true } },
        { path: "/12", component: z12, meta: { requiresAuth: true } },
        { path: "/13", component: z13, meta: { requiresAuth: true } },
        { path: "/14", component: z14, meta: { requiresAuth: true } },
        { path: "/15", component: z15, meta: { requiresAuth: true } },
        { path: "/16", component: z16, meta: { requiresAuth: true } },
        { path: "/17", component: z17, meta: { requiresAuth: true } },
        { path: "/18", component: z18, meta: { requiresAuth: true } },
        { path: "/19", component: z19, meta: { requiresAuth: true } },
        { path: "/20", component: z20, meta: { requiresAuth: true } },
        { path: "/21", component: z21, meta: { requiresAuth: true } },
        { path: "/22", component: z22, meta: { requiresAuth: true } },
        { path: "/login", component: Login },
        { path: "/", component: Index },
        { path: "*", component: zAny, meta: { requiresAuth: true } }
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
