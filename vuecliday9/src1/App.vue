<template>
  <div id="app">
      <input type="text" v-focus>
      <div class="divs" v-img="arr[0]"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      arr:["https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg"]
    }
  },
  components: {
    
  },
  methods:{
    
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .divs{
    width: 200px;height:200px;
  }
</style>
