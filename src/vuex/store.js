import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import {mutations} from './mutations.js'
import getters from './getters.js'
//1使用export导出需要{}，与此相对使用import导入也需要{}
//2使用export default 导出不需要{}，与此相对使用import导入也不需要{}
Vue.use(Vuex);
const store = new Vuex.Store({
	state: state,
	//	状态
	//使用username() {
	//				return store.state.username;
	//		}

	//this.username=this.$Vuex.state.username
	mutations: mutations,
	//方法
	//使用this.$Vuex.commit('updateHello', val);
	getters: getters,
	//计算方法
	//使用this.$Vuex.getters.doubleCountHello;
})
export default store;
