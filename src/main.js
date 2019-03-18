// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAxios from 'vue-axios'
import axios from 'axios'
import animate from 'animate.css'
import BaiduMap from 'vue-baidu-map'

import createStore from './vuex/store'
import qs from 'qs';

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAxios,axios);
Vue.use(animate)
Vue.use(BaiduMap, {
  ak: 'OGQnghxuwbYbqcTm3mzrEGQbGVMdv4id'
})
Vue.prototype.$qs = qs;

const store = createStore()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
