<template>
    <div class="sys-header">
        <a class="sys-logo" href="/">
            <em></em>
            <span>网站名称</span>
            <i class="fa fa-home"></i>
        </a>
    </div>
</template>

<style lang="less">
.sys-header {
    position: relative;
    z-index: 10;
    min-width: 1300px;
    height: 40px;
    background: #368ee0;

    .sys-logo {
        padding: 7px 0 0 10px;
		width: 200px;
        height: 40px;
        float: left;

        &:hover{
           .fa-home{
            opacity: 0.8;
           } 
        }
        em {
            display: block;
            float: left;
            width: 26px;
            height: 26px;
            background: url(../../../../public/logo.png) no-repeat center center;
            background-size: contain;
        }
        span {
            display: block;
            float: left;
            color: #fff;
            line-height: 26px;
            padding-left: 5px;
            position: relative;
        }
        i {
        	float: right;
        	margin-right: 12px;
            font-size: 16px;
            color:#fff;
            line-height: 26px;
            opacity: 0.6;
        }
    }
}
</style>

