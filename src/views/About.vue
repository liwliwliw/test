<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <button type="primary">按钮</button> -->
    <echartmap></echartmap>
    
  </div>
</template>
<script>
import echartmap from "../components/echartsmap.vue"
export default {
    components:{
      echartmap
    }
}
</script>
<style lang="scss" scoped>
.about{
  width: 100%;
  height: 100%;
}
  
</style>
