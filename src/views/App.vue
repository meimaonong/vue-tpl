<template>
  <div id="app" :class="{ fold: state.isFold }">
      <sysHeader></sysHeader>
      <sysFooter></sysFooter>
      <sideMenu></sideMenu>
      <div class="main_w">
        <router-view></router-view>       
      </div>
  </div>
</template>

<script>

import sysHeader from './public-resource/sys/components/header.vue'
import sysFooter from './public-resource/sys/components/footer.vue'
import sideMenu from './public-resource/sys/components/sideMenu.vue'

let vm = null

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  computed: {
    ...Vuex.mapState({
       state: state => state.sys
    })
  },
  methods: {
    // 修复高度太低导致#app高度问题
    fixHeight() {
       let [doc_h, win_h] = [$(document).height(), $(window).height()]

       if (parseInt(doc_h) > parseInt(win_h)) {
          $('html, body').height(doc_h)
       } else {
          $('html, body').height('100%')
       }
    },
    ...Vuex.mapActions({
       SWITCH_FOLD: 'sys/SWITCH_FOLD'
    })
  },
  mounted(){

    vm = this

    // 获取isFold，判断导航是否折叠
    let isFold = sessionStorage.getItem("isFold")
    isFold ? isFold = parseInt(isFold) : isFold = 0
    if (isFold) {
      if (!vm.state.isFold) vm.SWITCH_FOLD()
    } else {
      if (vm.state.isFold) vm.SWITCH_FOLD()
    }

    // 修复高度太低导致#app高度问题
    $(window).bind('resize scroll', function(){
      vm.fixHeight()
    })
    
  },
  components: {
    sysHeader,
    sysFooter,
    sideMenu
  }
}
</script>

<style lang="less">

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}


html,body{
  height: 100%;
  min-width: 1300px;
}

body{
  margin: 0;
  padding: 0;
  background: #f3f5f6;
}

#app {
  width: 100%;
  height: 100%;
  position: relative;
}

.main_w{
  position: absolute;
  z-index: 8;
  left: 200px;
  top: 40px;
  right: 0;
  bottom: 0;
  padding: 15px;
  overflow-y: auto;

  .main_content_w {
    width: 100%;
    min-height: 100%;
    position: relative;
    background: #fff;
  }
}

#app.fold .main_w {
  left: 40px;
}

</style>



