<template>
  <div>
      <header>
        <span>《</span>
        <slot name="ipt" :list=list :arr=arr></slot>
        <span>···</span>
      </header>
  </div>
</template>
<script>
export default {
  props:{

  },
  components:{

  },
  data(){
    return {
      list:"aaaaaaa",
      arr:[1,2,3.4]
    }
  },
  computed:{

  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
  
  
</style>