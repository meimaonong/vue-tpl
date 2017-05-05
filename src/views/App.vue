<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

/*import sysHeader from './public-resource/sys/components/header.vue'
import sysFooter from './public-resource/sys/components/footer.vue'
import sideMenu from './public-resource/sys/components/sideMenu.vue'*/

let vm = null

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  computed: {

  },
  methods: {
    
  },
  mounted(){

    vm = this

    
    
  }
  /*,
  components: {
    sysHeader,
    sysFooter,
    sideMenu
  }*/
}
</script>

<style lang="less">
#app {
  height: 100%;
}

</style>


