<template>
  <div id="info_detail">
    <nav-header>
      <span slot="title">充电桩信息</span>
    </nav-header>
    <div class="container">

    </div>
  </div>
</template>

<script>
  import NavHeader from '../components/NavHeader'

  export default {
    name: "infoDetail",
    data() {
      return {}
    },
    components: {
      NavHeader
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
</style>
