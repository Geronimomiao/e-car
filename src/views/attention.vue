<template>
  <div id="attention">
    <nav-header>
      <span slot="title">车辆信息</span>
    </nav-header>
    <div class="container">
      <div class="img">
        <!--<img src="http://wsmpage.cn/e-charge/PQSUBTmehn_small.jpg" alt="">-->
        <i class="icon-qiche iconfont"></i>
      </div>
      <div class="msg">
        <!-- <div class="status">
          状态良好
        </div>
        <div class="item">
          <i class="iconfont icon-dianliang"></i>
          <span>电量100%</span>
        </div>
        <div class="item">
          <i class="iconfont icon-licheng"></i>
          <span>续航里程1523km</span>
        </div> -->
		<img src="../../static/背景.png" style="width: auto;  
    height: auto;  
    max-width: 100%;  
    max-height: 100%;     "/>
        <div class="item">
          <i class="iconfont icon-taiyajiance"></i>
          <span>四轮胎压正常</span>
        </div>
        <div class="item">
          <i class="iconfont icon-kongtiao"></i>
          <span>空调未开</span>
        </div>
        <div class="item">
          <i class="iconfont icon-baoyang"></i>
          <span>无需保养</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavHeader from '../components/NavHeader'

  export default {
    name: "attention",
    data() {
      return {}
    },
    components: {
      NavHeader
    }
  }
</script>

<style lang="stylus">
  #attention
    .container
      background-color: #EEEEEE
      position: fixed
      top: 3rem
      bottom: 3.5rem
      width: 100%
      .img
        text-align: center
        img
          width: 80%
        i
          font-size: 9rem
      .msg
        background-color: #FFFFFF
        height: 20rem
        display: flex
        flex-direction column
        .status
          font-size: 1.9rem
          text-align: center
          padding: 0.8rem 0
          font-weight: bold
          color #78AA79
        .item
          font-size: 1.4rem
          padding: 0.7rem 3rem

</style>
