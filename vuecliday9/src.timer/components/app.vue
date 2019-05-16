<template>
  <div>
      <h5>你当前选中的日期是：{{seleDate}}</h5>
	    <div class="div" v-for="(item,index) in list" @click="fn(index)" :key="index" :class="{active:ide ==index}">{{item}}</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      seleDate: '',
 
			list: [],
 
			ide: 0 //默认选择第一个

    }
  },
  components: {
    
  },
  methods:{
    fn(index) {
				this.ide = index;
				this.seleDate = document.getElementsByClassName('div')[index].innerHTML; //获取当前选中的时间
 
			},
 
			getDate(n) {
 
				var ss = 24 * 60 * 60 * 1000; //一天的毫秒数86400
 
				var timestamp = new Date().getTime(); //获取当前时间戳
 
				var date1 = new Date(ss * n + timestamp) //加上n天的国际标准日期
 
				var newTime = date1.toLocaleString(); //把日期转换成2018/6/4 下午10:45:19 格式
 
				var arr = newTime.split(" "); //把2018/6/4提取出来
 
				var arr2 = arr[0].split('/'); //把年月日数字单独提出来
 
				return arr2[0] + '年' + arr2[1] + '月' + arr2[2] + '日'; //拼接成我们需要的格式返回
 
			}
  },
  created(){
    var dateObj = {};
 
			for(var i = 1; i <= 5; i++) {
 
				dateObj = this.getDate(i); //把返回的日期赋值给对象
 
				this.list.push(dateObj); //把对象添加到数组里面，然后渲染到页面
 
			}
  },
  computed:{

  }
}
</script>
<style lang="scss">
  *{
    margin:0;
    padding:0;
  }
  h5,.div {
		width: 20%;
		line-height: 60px;
		text-align: center;
		margin: 0 auto;
		border: 1px solid #ddd;
	}
	
	.active {
		color: red;
		background-color: #ddd;
	}

</style>
