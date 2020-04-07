import Vue from 'vue'
import App from './App.vue'
import Learn from './components/Learn.vue';
import Index from './components/Index.vue';

Vue.config.productionTip = false;

Vue.component('learn', Learn);
Vue.component('index', Index);

new Vue({
    render: h => h(App),
}).$mount('#app')
