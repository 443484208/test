import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'// nprogress样式文件
import { resolve } from 'url';
import routers from'./rout'
Vue.use(Router)
// 个性化配置进度条外观
NProgress.configure({
  easing: 'ease',  // 动画方式    
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})

const router = new Router({
	// mode:'history',
  routes: routers
})
// 添加路由守卫
// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   if (to.path == "/login") {
//       next();
//       NProgress.done()
//   } else {
//       isLogin ? next() : next("/login");
//       NProgress.done()
//   }
// })
//当路由开始跳转时
router.beforeEach((to, from, next) => {
  // 开启进度条
  NProgress.start();
  console.log(to.matched.length)
  console.log(from)
  if (to.matched.length === 0) {                                        //如果未匹配到路由
     next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next();                                                                            //如果匹配到正确跳转
  }
});
router.afterEach(() => {
  NProgress.done()
})
export default router;
