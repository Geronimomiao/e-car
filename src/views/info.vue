<template>
  <div id="info">
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
</style>
