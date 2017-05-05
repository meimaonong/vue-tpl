
import { XButton, ViewBox, XHeader, Tabbar, TabbarItem } from 'vux'

let vm = null

export default {
	data () {
    return {
      show: false
    }
  },
  methods: {
  		onShow() {

  		},
  		onHide() {

  		},
  		cf() {
  			// 显示
  			vm.$vux.alert.show({
  			  title: '标题测试',
  			  content: '确定删除吗?',
  			  onShow () {
  			    console.log('Plugin: I\'m showing')
  			  },
  			  onHide () {
  			    console.log('Plugin: I\'m hiding')
  			  }
  			})

  		}
  },
  mounted() {

    vm = this
    

  },
  components: {
    XButton,
    ViewBox,
    XHeader,
    Tabbar
  }
}