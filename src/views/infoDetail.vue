<template>
  <div id="info_detail">
    <nav-header>
      <span slot="title">充电桩信息</span>
    </nav-header>
    <div class="container" ref="detail">
      <div class="container-content">
        <div class="test">
          <el-card class="box-card"  v-for="item in data" v-bind:key = "item">
            <div class="title"> {{ item.epname }} {{ item.epid }} 桩 </div>
            <div class="msg">
              <div class="price">价格：{{ item.price }} 元/度</div>
              <div class="num">当前使用人数：{{ item.using }} 人 </div>
              <div class="num">充电桩状态：{{ !item.state ? '良好' : '待维修' }} </div>
              <div class="num">预约：022-5688868 </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import NavHeader from '../components/NavHeader'

  export default {
    name: "infoDetail",
    data() {
      return {
        data: ''
      }
    },
    components: {
      NavHeader
    },
    mounted() {
      this.showData()
    },
    methods: {
      content() {
        let scroll = new BScroll(this.$refs.detail, {
          click: true,
          scrollY: true,
        })
      },
      async showData() {
        console.log(this.$route.params.psid)
        let postData = this.$qs.stringify({
          psid: this.$route.params.psid
        });
        await this.axios({
          method: 'post',
          url: '/car/index.php/index/index/getinfor',
          data: postData
        }).then(res => {
          console.log(res)
          this.data = res.data
          this.content()
          // console.log(this.data)
        })
      },
    },
  }
</script>

<style lang="stylus">
  #info_detail
    .container
      background-color: #eee
      position: fixed
      top: 3rem
      bottom: 3.5rem
      width: 100%
      overflow hidden
      .container-content
        width: 90%
        margin-left: 5%
        .box-card
          margin-bottom: 0.5rem
          .el-card__body
            padding-top: 10px
            padding-bottom: 10px
          .title
            font-size: 0.8rem
            font-weight: 600
          .msg
            margin-top: 0.5rem
            font-size: 0.8rem
            line-height: 1rem
</style>
