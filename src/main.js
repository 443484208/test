// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from './vuex/store.js'
import App from './App'
import router from './router'
import api from './axios/index.js' // 导入api接口
console.log(api)
Vue.prototype.$api = api; // 将api挂载到vue的原型上
Vue.prototype.$Vuex = Vuex; // 将api挂载到vue的原型上
Vue.prototype.$Icon ='../../../static/icon/'//定义获取图标。只能在common文件夹下一层文件夹获取。如果再多一层文件夹就不信
Vue.prototype.$images ='../../../static/images/'//定义获取图片。只能在common文件夹下一层文件夹获取。如果再多一层文件夹就不信
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
