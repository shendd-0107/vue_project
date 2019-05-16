<template>
  <div class="main">
    
      <keep-alive>
        <component :is="componentId[list]" ></component>
      </keep-alive>
    
  </div>
</template>

<script>
import myclassify from "./classify";
import mybrand from "./brand";
export default {
  name: 'myList',
  props:["list"],
  data () {
    return {
      componentId:["myclassify","mybrand"]
    }
  },
  components:{
    myclassify,
    mybrand
  }
}
</script>

<style scoped>

</style>
