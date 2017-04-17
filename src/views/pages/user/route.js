
const monthList = r => require.ensure([], () => 
	r(require('./components/monthList.vue')), 'chunks/user/chunk')

const yearRank = r => require.ensure([], () => 
	r(require('./components/yearRank.vue')), 'chunks/user/chunk')

// 路由控制器
const ctrl = 'user'

export default [
    { 
    	path: '/user/month-list', 
        name: 'month-list',
    	component: monthList,
        meta: { ctrl }
    },
    { 
    	path: '/user/year-rank', 
        name: 'year-rank',
    	component: yearRank,
        meta: { ctrl }
    }
]

