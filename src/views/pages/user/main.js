
import App from './../../App.vue'

import JGO from './../../../common/js/JGO'

// 导入路由配置
import routeArr from './../**/route.js'

// 导入vuex配置
import storeArr from './**/vuex/store.js'

// 导入 sys vuex
import sysStoreArr from './../../public-resource/**/vuex/store.js'


// VueResource
Vue.use(VueResource)

// 配置路由
Vue.use(VueRouter)

//路由封装函数
Vue.prototype.JGO = JGO

// 合并路由配置
let routes = []
routeArr.forEach(function(value, index, array) {
    routes.push(...value.default)
})

const router = new VueRouter({
  routes
})

// 路由钩子
router.beforeEach((to, from, next) => {

  // 如果控制器相同
  if (to.meta.ctrl == from.meta.ctrl) {
  	 next()
  } else {
  	 if (to.meta.ctrl == 'index') {
       from.meta.ctrl ? window.location = '/#' + to.fullPath : next()
     } else {
       from.meta.ctrl ? window.location = '/' + to.meta.ctrl + '#' + to.fullPath : next()
     }
  }

  
})

// 配置vuex
Vue.use(Vuex)

// 合并vuex配置
let storeObj = {}
let mergeStore = [...storeArr, ...sysStoreArr]
mergeStore.forEach(function(value, index, array) {
    Object.assign(storeObj, value.default)
})

const store = new Vuex.Store({
	modules: storeObj
})

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})

