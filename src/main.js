import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import echarts from 'echarts';
import axios from 'axios';
// import Vueaxios from 'Vue-axios';

Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
// 全局属性引入echarts
Vue.config.productionTip = true
import router from './router'

new Vue({router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')