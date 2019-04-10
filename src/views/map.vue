<template>
  <div id="b_map">
    <nav-header>
      <span slot="title">充电桩地图</span>
    </nav-header>
    <baidu-map class="bm-view" :center="center" :zoom="zoom">
      <bm-marker v-for="item in data" :position='getPosition(item.lng, item.lat)' @click="getDetail(item)"
                 :icon="{url: 'http://wsmpage.cn/e-charge/e-charge.png', size: {width: 20, height: 20}}"
                 ></bm-marker>
      <bm-marker class="my-location" :position='getPosition(this.my_location.x, this.my_location.y)'
                 :icon="{url: 'http://wsmpage.cn/map/err_map.png', size: {width: 20, height: 20}}">
      </bm-marker>
    </baidu-map>
    <div @click="close">
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <mark-layer v-if="flag"></mark-layer>
      </transition>
    </div>

    <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <detail v-if="flag" :flag="flag" :detail="detail_item"></detail>
    </transition>
  </div>
</template>

<script>

  import NavHeader from '../components/NavHeader'
  import MarkLayer from '../components/MarkLayer'
  import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
  import Detail from '../components/Detail'


  export default {
    name: "map",
    data() {
      return {
        center: {lng: 117.211056, lat: 39.1434},
        zoom: 11,
        data: [],
        my_location: '',
        flag: 0,
        detail_item: ''
      }
    },
    components: {
      NavHeader,
      BaiduMap,
      MarkLayer,
      Detail,
    },
    mounted() {
      this.showData()
      this.getLocation()
    },
    methods: {
      showData() {
        this.axios.get('/car/index.php/index/index/powstainfor').then(res => {

          res.data.forEach(item => {
            this.axios.get('/api/geoconv/v1/', {
              params: {
                coords: `${item.lng},${item.lat}`,
                from: 1,
                to: 5,
                ak: 'OGQnghxuwbYbqcTm3mzrEGQbGVMdv4id',
              }
            }).then(res => {
              item.lng = res.data.result[0].x
              item.lat = res.data.result[0].y
            }).then(() => {
              this.data = res.data
            })
          })

        })
      },
      getPosition(lng, lat) {
        return {lng: lng, lat: lat}
      },
      getLocation() {
        navigator.geolocation.getCurrentPosition((p) => {
          this.axios.get('/api/geoconv/v1/', {
            params: {
              coords: `${p.coords.longitude},${p.coords.latitude}`,
              from: 1,
              to: 5,
              ak: 'OGQnghxuwbYbqcTm3mzrEGQbGVMdv4id',
            }
          }).then(res => {
            // console.log(res.data.result)
            this.my_location = res.data.result[0]
          })
        })
      },
      close() {
        this.flag = 0
      },
      open() {
        this.flag = 1
      },
      getDetail(item) {
        this.flag = 1
        this.detail_item = item
        // console.log(this.detail_item)
      }
    }
  }
</script>

<style lang="stylus">
  #b_map
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
