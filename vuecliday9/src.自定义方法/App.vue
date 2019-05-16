<template>
  <div>
    <!-- <div class="box" v-bg="color" v-html="$options.filters.formatDate('val')"></div> -->
    <div class="box" v-bg="color" >{{ val | formatDate }}</div>
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
      color:"tomato",
      val:"10000"

    }
  },
  computed:{

  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="">
  .box{
    width: 200px;
    height: 200px;
  }
</style>