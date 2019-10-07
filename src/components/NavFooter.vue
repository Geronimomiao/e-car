<template>
  <div id="nav_footer">
    <div class="item" :class="[(flag==1)?'selected':'']" @click="map">
      <i class="iconfont icon-tubiaozhizuomoban-"></i>
      <span>地图</span>
    </div>
    <div class="item" :class="[(flag==2)?'selected':'']" @click="info">
      <i class="iconfont icon-svg-"></i>
      <span>信息</span>
    </div>
    <div class="item" :class="[(flag==3)?'selected':'']" @click="message">
      <i class="iconfont icon-wode"></i>
      <span>我的</span>
    </div>
    <div class="item" :class="[(flag==4)?'selected':'']" @click="attention">
      <i class="iconfont icon-tixing"></i>
      <span>提醒</span>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "NavFooter",
    computed: {
      ...mapState(['flag'])
    },
    methods: {
      map() {
        this.$store.commit('updateFlag', 1)
        this.$router.push({path: '/map'})
      },
      info() {
        this.$store.commit('updateFlag', 2)
        this.$router.push({path: '/info'})
      },
      message() {
        this.$store.commit('updateFlag', 3)
        this.$router.push({path: '/message'})
      },
      attention() {
        this.$store.commit('updateFlag', 4)
        this.$router.push({path: '/attention'})
      },
    }
  }
</script>

<style lang="stylus">

  #nav_footer
    position: fixed
    bottom: 0
    width: 100%
    height 3.5rem
    background-color #EEEEEE
    display flex

    .item
      text-align: center
      flex 1
      display: flex
      flex-direction column
      color #8F8F8F
      &.selected
        color: #16263B
      i
        font-size: 1.5rem
        line-height: 2rem
      span
        line-height: 1.2rem

</style>
