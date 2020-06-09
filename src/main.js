import Vue from 'vue';
import VueShowdown from 'vue-showdown';
import App from './App.vue';
import Learn from './components/Learn.vue';
import Index from './components/Index.vue';
import Slide from './components/Slide.vue';
import Timer from './components/Timer.vue';

Vue.config.productionTip = false;

Vue.component('learn', Learn);
Vue.component('index', Index);
Vue.component('slide', Slide);
Vue.component('timer', Timer);

var index = new Vue({ data: { index: true } })
index.install = function () {
    Object.defineProperty(Vue.prototype, '$indexTrue', {
        get() { return index }
    })
}
Vue.use(index);

Vue.use(VueShowdown, {
    options: {
        emojis: true
    }
});

new Vue({
    methods: {
        switchIndex: function () {
            this.$indexTrue.index = false;
            return;
        }
    },
    render: h => h(App),
}).$mount('#app')
