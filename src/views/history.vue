<template>
  <div id="history">
    <nav-header>
      <span slot="title">充电桩地图</span>
    </nav-header>
    <baidu-map class="bm-view" :center="center" :zoom="zoom">
      <bml-curve-line :points="points" :editing="true" @lineupdate="update"></bml-curve-line>
    </baidu-map>
  </div>
</template>

<script>

  import NavHeader from '../components/NavHeader'
  import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
  import {BmlCurveLine} from 'vue-baidu-map'

  export default {
    name: "history",
    data() {
      return {
        center: {lng: 117.211056, lat: 39.1434},
        zoom: 11,
        points: [
          {"lng": "117.113697", "lat": "39.07512"},
          {"lng": "117.121531", "lat": "39.075681"},
          {"lng": "117.121746", "lat": "39.078117"},
          {"lng": "117.129939", "lat": "39.078257"},
          {"lng": "117.139497", "lat": "39.078173"},
          {"lng": "117.146611", "lat": "39.08019"},
          {"lng": "117.151246", "lat": "39.08257"},
          {"lng": "117.156133", "lat": "39.085147"},
          {"lng": "117.162673", "lat": "39.085595"},
          {"lng": "117.166572", "lat": "39.085812"},
          {"lng": "117.170183", "lat": "39.085574"},
          {"lng": "117.173345", "lat": "39.085406"},
          {"lng": "117.176579", "lat": "39.085266"},
          {"lng": "117.179597", "lat": "39.085112"},
          {"lng": "117.180118", "lat": "39.089047"},
          {"lng": "117.180352", "lat": "39.092379"},
          {"lng": "117.180621", "lat": "39.094353"},
          {"lng": "117.180944", "lat": "39.097461"},
          {"lng": "117.181178", "lat": "39.100051"}
        ],

      }
    },
    components: {
      NavHeader,
      BaiduMap,
      BmlCurveLine,
    },

    mounted() {
      this.showData()

    },
    methods: {
      showData() {
        // this.axios.get('/car/index.php/index/index/location').then(res => {
        //   console.log(res.data[0])
        //   this.points = res.data
        // })
      },
      update(e) {
        this.points = e.target.cornerPoints
      },
    }
  }
</script>

<style lang="stylus">
  #history
    .BMap_Marker
      img
        width: 100%

    .bm-view
      position: fixed
      top: 3rem
      bottom: 3.5rem
      width: 100%

    .my-location
      z-index 10 !important

    .anchorBL
      img
        display: none

</style>
