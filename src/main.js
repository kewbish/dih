import Vue from 'vue'
import App from './App.vue'
import Learn from './components/Learn.vue';
import Index from './components/Index.vue';

Vue.config.productionTip = false;

Vue.component('learn', Learn);
Vue.component('index', Index);

var index = new Vue({data:{ index: true }})
index.install = function(){
    Object.defineProperty(Vue.prototype, '$indexTrue', {
      get () { return index }
    })
  }
Vue.use(index);

new Vue({
    methods:{
        switchIndex: function () {
            this.$indexTrue.index = false;
            return
        }
    },
    render: h => h(App),
}).$mount('#app')
