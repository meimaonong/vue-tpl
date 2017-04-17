
// store初始值
const initState = {
	name: 'footer'
}

export default {
	footer: {
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
		getters: {

		}
	}
}