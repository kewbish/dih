import Vue from 'vue'
import App from './App.vue'
import Learn from './components/Learn.vue';
import Index from './components/Index.vue';

Vue.config.productionTip = false;

Vue.component('learn', Learn);
Vue.component('index', Index);

var index = true;
console.log(`Index is currently ${index}`);

var app = new Vue({
    data: {
        index: index
    },
    render: h => h(App),
}).$mount('#app')
console.log(app);