<template>
  <el-col :span="24">
     <div class="contBody">
       <div class="contTit">
         实时胜率评估
       </div>
       <div class="contBottom1">
         <el-col :span="24">
           <div class="divNum" v-for="(item,index) in dataList" :key="index">
             <p>{{item.name}}</p>
             <span class="spanStyle">{{item.value}}</span>
             <div class="numDiv">
               <i class="el-icon-caret-top"></i>
               <span>{{item.num}}</span>
             </div>
             <div class="clearBoth"></div>
           </div>
         </el-col>
         <chartItem />
       </div>
     </div>
  </el-col>
</template>
<script>
import chartItem from "./chartItem";
export default {
  name: "Container1",
  mounted(){
    //this.timerFun();
  },
  components: {
    chartItem
  },
  data() {
    return {
        dataList:[{
          name:'胜率',
          value:'72%',
          num:'2%'
        },{
          name:'置信度',
          value:'79%',
          num:'6%'
        }]
    };
  },
  methods: {
    dataFun() {
      //this.num++
      //window.console.log(this.num)
      var self = this;
      this.dataList.forEach((item) => {
        item.list.forEach((item1) => {
          //window.console.log(self.random(20,90))
          item1.value = self.random(20,90)
        })
      })
    },
    timerFun() {
      //this.dataFun();
      var self = this;
      this.timer = setInterval(() => {
        self.dataFun()
      },3000);
    },
    random(m,n) {
    return Math.floor(Math.random() * (n - m)) + m
    }
  },
  destroyed() {
   //clearInterval(this.timer)
   if (this.timer) {
       window.console.log("销毁定时器")
       clearInterval(this.timer); //在Vue实例销毁前，清除我们的定时器
    }
  }
};
</script>