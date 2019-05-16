<template>
    <div class="items" ref="items">
        <h3>{{name}}</h3>
        <dl class="item" v-for="(item,index) in foods" :key="index">
            <dt>
                <img :src="item.image" alt>
            </dt>
            <dd class="ddd">
                <p>{{item.name}}</p>
                <p>{{item.price}}</p>
                <p>{{item.description}}</p>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
  props: ["name", "foods"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {
    
  },
  mounted() {}
};
</script>
<style  lang="scss">
.items {
  width: 100%;
  .item {
    width: 100%;
    height: 120px;
    display: flex;
    > dt {
      width: 100px;
      height: 100px;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    > .ddd {
      flex: 1;
      display: flex;
      flex-direction: column;
      > p {
        flex: 1;
      }
    }
  }
}
</style>