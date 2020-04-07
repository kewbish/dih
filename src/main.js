import Vue from 'vue'
import App from './App.vue'
import Learn from './components/Learn.vue';

Vue.config.productionTip = false;

Vue.component('learn', Learn);

new Vue({
    render: h => h(App),
}).$mount('#app')
