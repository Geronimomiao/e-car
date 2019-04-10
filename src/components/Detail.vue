<template>
  <div id="detail">
    <el-card class="box-card">
      <div class="title">
        <div class="item">
          {{detail.psname}}
        </div>
        <div class="item">
          到这去   <i class="el-icon-location"></i>
        </div>
      </div>
      <div class="func">
        <div class="item" @click="goForDetail(detail.psid)">
          充电站详情 <i class="el-icon-document"></i>
        </div>
        <div class="item">
          发现周边 <i class="el-icon-view"></i>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "Detail",
    props: ['flag', 'detail'],
    data() {
      return {}
    },
    mounted() {
      console.log(this.detail)
    },
    methods: {
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

  #detail
    height: 4.5rem
    background-color: #fff
    z-index 150
    position: absolute
    bottom: 0
    right: 0
    left: 0
    border-top-left-radius: 1rem
    border-top-right-radius: 1rem
    .box-card
      height: 4.5rem
      width: 100%
      border-top-left-radius: 1rem
      border-top-right-radius: 1rem
      .el-card__body
        padding-top: 10px
        padding-bottom: 0
      .title
        display: flex
        justify-content space-between
        position: relative
        height: 1.3rem
        .item
          font-size: 0.8rem

      .func
        width: 90%
        margin-left: 5%
        height: 2rem
        display: flex
        align-items center
        justify-content space-between

</style>
