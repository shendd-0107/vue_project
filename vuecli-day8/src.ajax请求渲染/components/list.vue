<template>
  <div>
    <dl>
      <button @click="$emit('clickFn',cont,ind)">点击</button>
      <dt>

        <img :src="item" v-for="(item,index) in img" :key="index" :style="styles"/>
      </dt>
      <dd>
        <span>{{title}}</span>
        <span>{{cont}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>

export default {
  name: 'list',
  props:["title","cont","img","styles","ind"],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  span{
    color:tomato;
  }

</style>
