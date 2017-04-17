
const accountList = r => require.ensure([], () => 
	r(require('./components/accountList.vue')), 'chunks/account/chunk')

const accountUserList = r => require.ensure([], () => 
	r(require('./components/accountUserList.vue')), 'chunks/account/chunk')

// 路由控制器
const ctrl = 'account'

export default [
    { 
      path: '/account/account-list', 
      name: 'account-list',
      component: accountList,
      meta: { ctrl }
    },
    { 
      path: '/account/account-user-list', 
      name: 'account-user-list',
      component: accountUserList,
      meta: { ctrl }
    }
]


