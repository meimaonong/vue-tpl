<template>

<div class="sys-side-menu">
<div class="sys-side-flex">
	<span class="foldbars" @click="SWITCH_FOLD()"><i class="fa fa-bars"></i></span>

  <div class="channel-w">
    <el-tooltip class="item" effect="dark" content="控制面板" placement="right">
      <router-link :to="JGO({ name: 'index'})" class="fold-dt">
      <i class="fa fa-tachometer"></i>
      </router-link>
    </el-tooltip>
    <router-link :to="JGO({ name: 'index'})" class="unfold-link">
    <i class="fa fa-tachometer"></i>
    <span>控制面板</span>
    </router-link>
  </div>
	<div class="channel-w">
    <div class="fold-dt"><i class="fa fa-pie-chart"></i></div>
		<dl>
		<dt class="unfold-dt">
    <i class="fa fa-pie-chart"></i>
    <span>账户管理</span>
    <em><i class="fa fa-angle-down"></i></em>
    </dt>
		<dd>
    <router-link :to="JGO({ name: 'account-list'})">
    账户管理1
    </router-link>  
    </dd>
    <dd>
    <router-link :to="JGO({ name: 'account-user-list'})">
    账户管理2
    </router-link>  
    </dd>
		</dl>
	</div>
   <div class="channel-w">
      <div class="fold-dt"><i class="fa fa-file-text"></i></div>
      <dl>
      <dt class="unfold-dt">
      <i class="fa fa-file-text"></i>
      <span>用户管理</span>
      <em><i class="fa fa-angle-down"></i></em>
      </dt>
      <dd>
      <router-link :to="JGO({ name: 'month-list'})">
      用户管理1
      </router-link>  
      </dd>
      <dd>
      <router-link :to="JGO({ name: 'year-rank'})">
      用户管理2
      </router-link>  
      </dd>
      </dl>
    </div>
  <div class="channel-w">
    <el-tooltip class="item" effect="dark" content="一级标题" placement="right">
      <a class="fold-dt" href="javascript:void(0)"><i class="fa fa-bar-chart"></i></a>
    </el-tooltip>
    <a class="unfold-link" href="javascript:void(0)"><i class="fa fa-bar-chart"></i><span>一级标题</span></a>
  </div>
  <div class="channel-w">
    <el-tooltip class="item" effect="dark" content="一级标题" placement="right">
      <a class="fold-dt" href="javascript:void(0)"><i class="fa fa-comments-o"></i></a>
    </el-tooltip>
    <a class="unfold-link" href="javascript:void(0)"><i class="fa fa-comments-o"></i><span>一级标题</span></a>
  </div>
</div>
</div>

</template>

<script>
  
let vm = null

export default {
  methods: {
    ...Vuex.mapActions({
       SWITCH_FOLD: 'sys/SWITCH_FOLD'
    })
  },
  mounted() {

    vm = this

    // $(document).on('mouseenter','#app.fold .sys-side-menu .channel-w', function(){
    //     console.log('entry')
    //     $(this).find('dl').show()
    // })

  }
}

</script>

<style lang="scss" scoped>

.sys-side-menu {
  border-right: 1px solid #e9eced;
  background: #fff;
  width: 200px;
  position: absolute;
  z-index: 9;
  left: 0;
  top: 40px;
  bottom: 0;
  padding-top: 25px;

  overflow-y: auto;

  .sys-side-flex {
    position: relative;
    padding-top: 10px;

      .foldbars{
        position: absolute;
        right: 12px;
        top: -14px;
        cursor: pointer;

        &:hover{
          .fa-bars{
            color:#999;
          }
        }

        .fa-bars{
          color:#ccc;
        }       
      }
  }

  &::-webkit-scrollbar {display:none}

  .channel-w {
  		position: relative;

      .fold-dt{
        display: none;
        line-height: 40px;
        text-align: center;
        list-style: none;
        border-bottom: 1px solid #eee;
        color: #999;
        font-size: 18px;
      }

      .unfold-link {
          display: block;
          width: 85%;
          margin:0 auto;

          height: 40px;
          line-height: 40px;
          color: #666;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          position: relative;
          font-size: 14px;

          >i {
            font-size: 14px;
            display: inline-block;
          }

          span {
            display: inline-block;
            position: absolute;
            text-indent: 22px;
            left: 0;
            top: 0;
            height: 40px;
            line-height: 40px;
            width: 100%;
          }

          &:hover{
            color: #000;
          }
      }

  		dl{
  		  width: 85%;
  		  margin: 0 auto;
  		  list-style: none;
  		  font-size: 14px;

  		  dt{
          height: 40px;
  		    line-height: 40px;
  		    color: #999;
  		    cursor: pointer;
          position: relative;
          border-bottom: 1px solid #eee;
          margin-bottom: 5px;

  		    >i {
  		      font-size: 14px;
            display: inline-block;
  		    }

          >em {
            position: absolute;
            right: 5px;
            top:0;
          }

          span {
            display: inline-block;
            position: absolute;
            text-indent: 22px;
            left: 0;
            top: 0;
            height: 40px;
            width: 100%;
          }

  		  }

  		  dd {
  		    margin: 0;
  		    line-height: 35px;

  		    a{
  		      display: block;
  		      text-decoration: none;
  		      color: #000;
  		      text-indent: 22px;
            font-size: 13px;
  		    }

  		  }

  		  dd:hover{
  		    background: #f1f1f1;
  		  }

  		}
  }

}

#app.fold .sys-side-menu {

   width: 40px;
   overflow-y: visible;

   .sys-side-flex{
      padding-top: 15px;
   }

   .channel-w {

      width: 100%;

      .fold-dt{
        display: block;
      }

      .unfold-link {
        display: none;
      }

      dl {
        display: none;
        padding-top: 0;
        border: 1px solid #eee;
        background: #fff;
        position: absolute;
        left: 39px;
        top: -1px;
        width: 200px;

        dt {
            margin-left: -1px;
            background: #fff;
            border-bottom: none;
            >i{
              display:none;
            }
            span {
              border-bottom: 1px solid #eee;
              width: 154px;
              text-indent: 0;
              left: 23px;
            }
        }
      }

      
   }

   .channel-w:hover{
       dl {
           display: block;
       }
   }

}

</style>