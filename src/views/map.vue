<template>
  <div id="b_map">
    <nav-header>
      <span slot="title" >充电桩地图</span>
    </nav-header>
    <baidu-map class="bm-view" :center="center" :zoom="zoom" >
      <bm-marker v-for="item in data" :position='getPosition(item.lng, item.lat)'
                 :icon="{url: 'http://wsmpage.cn/e-charge/e-charge.png', size: {width: 60, height: 32}}"
                 @click="goForDetail(item.psid)"></bm-marker>
    </baidu-map>
  </div>
</template>

<script>

  import NavHeader from '../components/NavHeader'
  import BaiduMap from 'vue-baidu-map/components/map/Map.vue'

  export default {
    name: "map",
    data() {
      return {
        center: {lng: 117.211056, lat: 39.1434},
        zoom: 11,
        data: '',
      }
    },
    components: {
      NavHeader,
      BaiduMap,
    },
    mounted() {
      this.showData()
    },
    methods: {
      async showData() {
        await this.axios.get('/car/index.php/index/index/powstainfor').then(res => {
          // console.log(res.data)
          this.data = res.data
        })
      },
      getPosition(lng, lat) {
        return {lng: lng, lat: lat}
      },
      goForDetail(psid) {
        this.$store.commit('updateFlag', 2)
        this.$router.push({
          name: 'infoDetail',
          params: {
            psid: psid
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
  #b_map
    .bm-view
      position: fixed
      top: 3rem
      bottom: 3.5rem
      width: 100%

      .anchorBL
        display: none

</style>
