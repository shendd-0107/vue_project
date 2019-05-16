<template>
  <div>
    <p></p>
    <ul>
      <li v-for="(item,index) in arr" :key="index">
        {{item.title}}
          <mylist v-if="item.children" :arr=item.children></mylist>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mylist',
  props:["arr"],
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
