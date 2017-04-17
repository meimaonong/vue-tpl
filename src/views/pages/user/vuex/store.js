
 
import storeArr from './**/store.js'


// 频道级store，合并vuex配置
let storeObj = {}
storeArr.forEach(function(value, index, array) {
    Object.assign(storeObj, value.default)
})

// store初始值
const initState = {}

export default {
	user: {
		namespaced: true,

		// state
		state: initState,

		// actions
		actions: {},

		// mutations
		mutations: {},
		
		// getters
		getters: {},

		modules: storeObj
	}
}