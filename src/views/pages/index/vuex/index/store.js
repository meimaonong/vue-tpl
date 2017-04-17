
// store初始值
const initState = {
	name: 'index',
	data: {
		list: [
			{name: 'qcc', sex: 'man'},
			{name: 'qxx', sex: 'man'}
		]
	}
}

export default {
	index: {
		namespaced: true,

		// state
		state: initState,

		// actions
		actions: {
			// 初始化state
			INIT_STATE({commit}) {

			    commit('INIT_STATE', initState)

			    //dispatch('account/SET_NAME', 'account space', { root: true })

			},

			SET_NAME({commit}) {

			    commit('SET_NAME', {name: '新名称'})

			    //dispatch('account/SET_NAME', 'account space', { root: true })

			},

			// 测试异步
			async GET_PAY({commit, dispatch, state}) {

				/*return dispatch('GET_DATA').then(() => {
			        console.log('finish')
			    })*/

			    await dispatch('GET_DATA')

			},

			// 获取数据
			GET_DATA({commit, state}) {


				    /*return new Promise((resolve, reject) => {
				    	     Vue.http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
				    	         headers: {
				    	         },
				    	         emulateJSON: true
				    	     }).then(function(response) {
				    	         // 这里是处理正确的回调
				    	         state.subjects = response.data.subjects
				    	         resolve()
				    	         // this.articles = response.data["subjects"] 也可以
				    	     }, function(response) {
				    	         // 这里是处理错误的回调
				    	         console.log(response)
				    	     })  
				    })*/

				    
				    let p1 = new Promise((resolve, reject) => {
				    	     Vue.http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
				    	         headers: {
				    	         },
				    	         emulateJSON: true
				    	     }).then(function(response) {
				    	         // 这里是处理正确的回调
				    	         console.log('p1')
				    	         resolve('p1 result')
				    	         // this.articles = response.data["subjects"] 也可以
				    	     }, function(response) {
				    	         // 这里是处理错误的回调
				    	         console.log(response)
				    	     })  
				    })

				    let p2 = new Promise((resolve, reject) => {
				    	     Vue.http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
				    	         headers: {
				    	         },
				    	         emulateJSON: true
				    	     }).then(function(response) {
				    	         // 这里是处理正确的回调
				    	         console.log('p2')
				    	         resolve('p2 result')
				    	         // this.articles = response.data["subjects"] 也可以
				    	     }, function(response) {
				    	         // 这里是处理错误的回调
				    	         console.log(response)
				    	     })  
				    })


				    return Promise.all(
				    	[ p1, p2 ]
				    )
				    .then(([books, user]) => {
				    	console.log(books)
				    	console.log(user)
				    	console.log('done')
				    })
				    



			}
			
		},

		// mutations
		mutations: {
			// 初始化state
		    INIT_STATE (state, payload) {

		    	Object.assign(state, payload)

		    },

		    SET_NAME (state, payload) {
		    	state.name = payload.name
		    }
		},
		
		// getters
		getters: {

		}
	}
}