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
        })
      }
    },
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
