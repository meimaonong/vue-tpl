
const index = r => require.ensure([], () => 
	r(require('./components/index/index.vue')), 'chunks/index/chunk')


// 路由控制器
const ctrl = 'index'

export default [
    { 
      path: '/', 
      name: 'index',
      component: index,
      meta: { ctrl }
    }
]


