<template>
  <div id="index">
    <transition  mode="out-in"
                 enter-active-class="animated fadeIn faster"
                 leave-active-class="animated fadeOut faster">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import NavFooter from '../components/NavFooter'
  export default {
    name: "index",
    data() {
      return {}
    },
    components: {
      NavFooter
    }
  }
</script>

<style lang="stylus">
  #index
    height: 100vh
</style>
