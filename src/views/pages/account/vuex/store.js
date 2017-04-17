
 
import storeArr from './**/store.js'


// 频道级store，合并vuex配置
let storeObj = {}
storeArr.forEach(function(value, index, array) {
    Object.assign(storeObj, value.default)
})

// store初始值
const initState = {
	name: 'acdcount'
}

export default {
	account: {
		namespaced: true,

		// state
		state: initState,

		// actions
		actions: {
			// 初始化state
			INIT_STATE({commit}) {

			    commit('INIT_STATE', initState)

			}
		},

		// mutations
		mutations: {
			// 初始化state
		    INIT_STATE (state, initState) {

		    	Object.assign(state, initState)

		    }
		},
		
		// getters
		getters: {},

		modules: storeObj
	}
}