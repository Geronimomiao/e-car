<template>
  <div id="mask_layer">

  </div>
</template>

<script>
  export default {
    name: "MaskLayer",
    data() {
      return {}
    },
  }
</script>

<style lang="stylus">
  #mask_layer
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.65);
    z-index 100
</style>
