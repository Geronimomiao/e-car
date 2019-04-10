<template>
  <div id="info">
    <nav-header>
      <span slot="title">充电桩信息</span>
    </nav-header>
    <div class="container" ref="detail">
      <div class="container-content">
        <div class="test">
          <el-card class="box-card" v-for="item in data" @click.native="goForDetail(item.psid)">
            <div class="title"> {{ item.psname }}</div>
            <div class="msg">
              <div class="total-nums">电桩总数：{{ item.ttnum }}</div>
              <div class="available-nums">可用电桩数：{{ item.psact }}</div>
              <div class="total-cars">累计充电车辆数：{{ item.ttchar }}</div>
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
    name: "info",
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
      async showData() {
        await this.axios.get('/car/index.php/index/index/powstainfor').then(res => {
          console.log(res.data)
          this.data = res.data
          this.content()
        })
      },
      content() {
        let scroll = new BScroll(this.$refs.detail, {
          click: true,
          scrollY: true,
        })
      },
      goForDetail(psid) {
        this.$store.commit('updateFlag', 2)
        this.$router.push({
          name: 'infoDetail',
          params: {
            psid: psid
          }
        })
      },
    }
  }
</script>

<style lang="stylus">

  #info
    .container
      background-color: #EEEEEE
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

