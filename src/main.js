// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import echarts from 'echarts' //引入echarts
// import native from './api/native';
import common from './api/common'
Vue.prototype.$echarts = echarts
Vue.prototype.$https = axios


Vue.config.productionTip = false
// native.initJsBridge(function (){});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

common.getUrlData();
console.log(common.getUrlData().userNo);

