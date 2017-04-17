
 
import storeArr from './**/store.js'


// 频道级store，合并vuex配置
let storeObj = {}
storeArr.forEach(function(value, index, array) {
    Object.assign(storeObj, value.default)
})

// store初始值
const initState = {
	isFold: false
}

export default {
	sys: {
		namespaced: true,

		// state
		state: initState,

		// actions
		actions: {

			// 左侧导航显示状态切换
			SWITCH_FOLD({commit, state}) {

				// 将左侧导航折叠状态存入sessionStorage
				sessionStorage.setItem('isFold', !state.isFold ? 1 : 0)

			    commit('SWITCH_FOLD', {isFold: !state.isFold})

			}

		},

		// mutations
		mutations: {

			// 左侧导航显示状态切换
			SWITCH_FOLD (state, payload) {
				state.isFold = payload.isFold
			}

		},
		
		// getters
		getters: {},

		modules: storeObj
	}
}