<template>
	<div class="main_content_w">
		
		index
		<button type="button" @click="cf()">触发</button>
		<!-- <alert v-model="show"  @on-show="onShow" @on-hide="onHide">测试</alert> -->
	</div>
</template>

<script>



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
  			/*this.$vux.alert.show({
  			  title: 'Vux is Cool',
  			  content: 'Do you agree?',
  			  onShow () {
  			    console.log('Plugin: I\'m showing')
  			  },
  			  onHide () {
  			    console.log('Plugin: I\'m hiding')
  			  }
  			})*/
  			alert('in');

  			console.log(Vue);
  		}
  },
  mounted() {

    vm = this
    

  },
  components: {
    
  }
}

</script>
