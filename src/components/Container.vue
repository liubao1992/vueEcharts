<template>
  <el-col :span="24">
     <div class="contBody">
       <div class="contTit">
         决策指令
       </div>
       <div class="contBottom">
         <div class="contListTit">
           红方
         </div>
         <div class="contListTit1">
           蓝方
         </div>
         <div class="contList" v-for="(item,index) in dataList" :key="index" >
           <div :class="item.type =='red' ? 'listTit':'listTit1'">{{item.name}}</div>
           <div class="listCont">
             <div v-if="item.type =='red'">
               <div class="progressItem"  v-for="(item1,index1) in item.list" :key="index1">
               <span class="progressName">{{item1.name}}</span>
               <div class="progressBar">
                 <el-progress :text-inside="true" :stroke-width="20" :percentage="item1.value" status="exception"></el-progress>
               </div>
               <div class="clearBoth"></div>
             </div>
             </div>
             <div v-if="item.type =='blue'">
               <div class="progressItem"  v-for="(item1,index1) in item.list" :key="index1">
               <span class="progressName">{{item1.name}}</span>
               <div class="progressBar">
                 <el-progress :text-inside="true" :stroke-width="20" :percentage="item1.value" ></el-progress>
               </div>
               <div class="clearBoth"></div>
             </div>
             </div>
           </div>
         </div>
       </div>
     </div>
  </el-col>
</template>
<script>
export default {
  name: "Container",
  mounted(){
    this.timerFun();
  },
  data() {
    return {
        imgSrc:require('../assets/tit.png'),
        timer:null,
        dataList:[{
          name:'驱逐舰-1',
          type:'red',
          list:[{
            name:'航路机动',
            value:60
          },{
            name:'弹药补给',
            value:75
          },{
            name:'燃料补给',
            value:70
          },{
            name:'区域防空',
            value:45
          },{
            name:'对空攻击',
            value:90
          },{
            name:'对空攻击',
            value:90
          }]
        },{
          name:'电子战飞机-1',
          type:'blue',
          list:[{
            name:'航路机动',
            value:60
          },{
            name:'弹药补给',
            value:75
          },{
            name:'燃料补给',
            value:70
          },{
            name:'区域防空',
            value:45
          },{
            name:'对空攻击',
            value:90
          }]
        },{
          name:'战斗机-3',
          type:'red',
          list:[{
            name:'航路机动',
            value:60
          },{
            name:'弹药补给',
            value:75
          },{
            name:'燃料补给',
            value:70
          },{
            name:'对地攻击',
            value:45
          },{
            name:'对海打击',
            value:90
          }]
        },{
          name:'预警机-2',
          type:'blue',
          list:[{
            name:'航路机动',
            value:60
          },{
            name:'弹药补给',
            value:75
          },{
            name:'燃料补给',
            value:70
          },{
            name:'目标侦察',
            value:45
          },{
            name:'情报共享',
            value:90
          }]
        },{
          name:'反潜直升机-4',
          type:'red',
          list:[{
            name:'航路机动',
            value:60
          },{
            name:'弹药补给',
            value:75
          },{
            name:'燃料补给',
            value:70
          },{
            name:'反潜侦查',
            value:45
          },{
            name:'起飞降落',
            value:90
          }]
        },{
          name:'护卫舰-3',
          type:'blue',
          list:[{
            name:'航路机动',
            value:60
          },{
            name:'弹药补给',
            value:75
          },{
            name:'燃料补给',
            value:70
          },{
            name:'对舰攻击',
            value:45
          },{
            name:'支援任务',
            value:90
          }]
        }],
        num:0
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