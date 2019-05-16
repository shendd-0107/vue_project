<template>
  <div id="app">
    <div class="month">
      <ul>
        <!--点击会触发pickpre函数，重新刷新当前日期 @click(vue v-on:click缩写) -->
        <li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li>
        <li class="year-month" @click="pickYear(currentYear,currentMonth)">
          <span class="choose-year">{{ currentYear }}年</span>
          <span class="choose-month">{{ currentMonth }}月</span>
        </li>
        <li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li>
      </ul>
    </div>
    <!-- 星期 -->
    <ul class="weekdays">
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li style="color:red">六</li>
      <li style="color:red">日</li>
    </ul>
    <!-- 日期 -->
    <ul class="days">
      <!-- 核心 v-for循环 每一次循环用<li>标签创建一天 -->
      <li v-for="(dayobject,index) in days" :key="index">
        <!--本月-->
        <!--如果不是本月  改变类名加灰色-->

        <span
          v-if="dayobject.day.getMonth()+1 != currentMonth"
          class="other-month"
        >{{ dayobject.day.getDate() }}</span>

        <!--如果是本月  还需要判断是不是这一天-->
        <span v-else>
          <!--今天  同年同月同日-->
          <span
            v-if="dayobject.day.getFullYear() == new Date().getFullYear() && dayobject.day.getMonth() == new Date().getMonth() && dayobject.day.getDate() == new Date().getDate()"
            class="active"
          >{{ dayobject.day.getDate() }}</span>
          <span v-else>{{ dayobject.day.getDate() }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      currentDay: 1,
      currentMonth: 1,
      currentYear: 1970,
      currentWeek: 1,
      days: []
    };
  },
  computed: {},
  methods: {
    initData: function(cur) {
      var leftcount = 0; //存放剩余数量
      var date;

      if (cur) {
        date = new Date(cur);
      } else {
        var now = new Date();
        var d = new Date(this.formatDate(now.getFullYear(), now.getMonth(), 1));
        d.setDate(35);
        date = new Date(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
      }
      this.currentDay = date.getDate();
      this.currentYear = date.getFullYear();
      this.currentMonth = date.getMonth() + 1;

      this.currentWeek = date.getDay(); // 1...6,0
      if (this.currentWeek == 0) {
        this.currentWeek = 7;
      }
      var str = this.formatDate(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      );
      this.days.length = 0;
      // 今天是周日，放在第一行第7个位置，前面6个
      //初始化本周
      for (var i = this.currentWeek - 1; i >= 0; i--) {
        var d = new Date(str);
        d.setDate(d.getDate() - i);
        var dayobject = {}; //用一个对象包装Date对象  以便为以后预定功能添加属性
        dayobject.day = d;
        this.days.push(dayobject); //将日期放入data 中的days数组 供页面渲染使用
      }
      //其他周
      for (var i = 1; i <= 35 - this.currentWeek; i++) {
        var d = new Date(str);
        d.setDate(d.getDate() + i);
        var dayobject = {};
        dayobject.day = d;
        this.days.push(dayobject);
      }
    },
    pickPre: function(year, month) {
      // setDate(0); 上月最后一天
      // setDate(-1); 上月倒数第二天
      // setDate(dx) 参数dx为 上月最后一天的前后dx天
      var d = new Date(this.formatDate(year, month, 1));
      d.setDate(0);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    pickNext: function(year, month) {
      var d = new Date(this.formatDate(year, month, 1));
      d.setDate(35);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    pickYear: function(year, month) {
      alert(year + "," + month);
    },

    // 返回 类似 2016-01-02 格式的字符串
    formatDate: function(year, month, day) {
      var y = year;
      var m = month;
      if (m < 10) m = "0" + m;
      var d = day;
      if (d < 10) d = "0" + d;
      return y + "-" + m + "-" + d;
    }
  },
  created() {
    this.initData(null);
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
#app{
  width: 702px;
  height: 500px;
  border: 1px solid black;
  .month{
    width: 100%;
    height: 50px;
    ul{
      width: 100%;
      height: 100%;
      display: flex;
      li{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .weekdays{
    width: 100%;
    height: 50px;
    display: flex;
    li{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .days{
    width: 100%;
    height: 400px;
    display: flex;
    flex-flow: wrap;
    li{
      // flex: 1;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
