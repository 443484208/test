// import axios from 'axios'
import axios from './axios.js'
var configType=false;
var configApi=configType==true?'6':'7';
console.log(axios)
const loginApi = {
	login: configApi + 'login',
	addUSer: configApi + 'addUSer',
	search: configApi+ 'search',
	article: configApi + 'wz/article',
	wzsearch:configApi+ 'wz/search',

}
console.log(loginApi)
class ggFn {
	constructor() {}

	login(data) {
		//		登陆
		return(axios.post(loginApi.login, data))
	}

	addUSer(data) {
		//		新增人员
		return(axios.post(loginApi.addUSer, data))
	}

	search(data) {
		//		查找
		return(axios.post(loginApi.search, data))
	}
	article(data) {
		//		新增文章
		return(axios.post(loginApi.article, data))
	}
	wzsearch(data) {
		//		查找文章
		if(data) {
			return(axios.get(loginApi.wzsearch + '?' + data))
		} else {
			return(axios.get(loginApi.wzsearch))
		}
	}
}
var gg = new ggFn();
export default gg;