<template>
  <div id="app">
    <button @click="flag=!flag">显示/隐藏</button>
      <transition>
        <Box v-show="flag"></Box>
      </transition>
      <transition name="one"> 
        <Box v-show="flag"></Box>
      </transition>
      <transition name="two"
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideInDown"
      > 
        <Box v-show="flag"></Box>
      </transition>
  </div>
  
</template>
<script>
import Box from "./components/box.vue";
import Mock from "mockjs"
import "./css/animate.css"
export default {
  props: {},
  components: {Box},
  data() {
    return {
        flag:false
    };
  },
  created(){
    let mockData = Mock.mock({
      "list|10":[{
        "num|+1":1
      }]
    })
    console.log(mockData);
  }
};
</script>
<style scoped lang="scss">
  *{
    margin:0;
    padding:0;
  }
  .v-enter,.v-leave-to{
    opacity: 0;
  }
  .v-enter-active,.v-leave-active{
    transition:all 2s;
  }
  .v-enter-to,.v-leave{
    opacity: 1;
  }

  .one-enter,.one-leave-to{
    transform: scale(0);
  }
  .one-enter-active,.one-leave-active{
    transition:all 2s;
  }
  .one-enter-to,.one-leave{
    transform: scale(2);
  }

</style>
