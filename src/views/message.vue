<template>
  <div id="message">
    <nav-header>
      <span slot="title">我的座驾</span>
    </nav-header>
    <div class="container">
      <div class="container-header">
        <i class="icon-qiche iconfont"></i>
        <div class="login">
          <span>登录/注册</span>
        </div>
      </div>
      <div class="container-body">
        <div class="item" @click="attention">
          <span>车辆信息</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="item" @click="attention">
          <span>车辆状态</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="item" @click="history">
          <span>行程记录</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="item">
          <span>我的账户</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="item" @click="map">
          <span>充电桩查询</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="item">
          <span>设置</span>
          <i class="el-icon-caret-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavHeader from '../components/NavHeader'

  export default {
    name: "message",
    data() {
      return {}
    },
    components: {
      NavHeader
    },
    methods: {
      attention() {
        this.$router.push({path: '/attention'})
      },
      map() {
        this.$router.push({path: '/map'})
      },
      history() {

      }
    }
  }
</script>

<style lang="stylus">

  #message
    .container
      background-color: #EEEEEE
      position: fixed
      top: 3rem
      bottom: 3.5rem
      width: 100%

      .container-header
        text-align: center

        i
          font-size: 3rem
          border 2px solid #D9D8D9
          border-radius 50%

        .login
          display: block
          margin-top: 1rem
          span
            border 2px solid #D9D8D9
            padding: 0.2rem
            border-radius 0.9rem
      .container-body
        .item
          border-radius 0.2rem
          background-color: #FAFAFA
          margin: 1.5rem 2rem
          display: flex
          justify-content space-between
          padding: 0.7rem 0.9rem
</style>
