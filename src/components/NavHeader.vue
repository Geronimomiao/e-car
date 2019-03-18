<template>
    <div id="nav_header">
      <el-row>
        <el-col :span="3">
          <i class="iconfont icon-celan"></i>
        </el-col>
        <el-col :span="15">
          <div class="title">
            <slot name="title"></slot>
          </div>
        </el-col>
        <el-col :span="3">
          <i class="iconfont icon-sousuo"></i>
        </el-col>
        <el-col :span="3">
          <i class="iconfont icon-ccgl-shujuzidianxiugaijilu-7"></i>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: "NavHeader",
    data() {
      return {}
    },
  }
</script>

<style lang="stylus">
  
  #nav_header
    height: 3rem
    line-height: 3rem
    text-align: center
    background-color: #EEEEEE
    .title
      text-align: left

  
</style>
