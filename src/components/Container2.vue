<template>
  <el-col :span="24">
     <div class="contBody">
       <div class="contTit">
         即时比分
       </div>
       <div class="contBottom">
         <div class="contListTit2">
           <span class="dwName">队伍一</span>
           <div class="scoreList">
             <div class="score">3</div>
             <div class="score">0</div>
           </div>
         </div>
         <div class="contListTit3">
           <span class="dwName">队伍二</span>
           <div class="scoreList">
             <div class="score">5</div>
             <div class="score">5</div>
           </div>
         </div>
         <div class="contList1">
            <ul class="listItem">
              <li v-for="(item,index) in listArr" :key="index">
                <span>{{item.name}}</span>
                <i>{{item.num}}</i>
              </li>
            </ul>
         </div>
         <div class="contList1">
            <ul class="listItem">
              <li v-for="(item,index) in listArr1" :key="index">
                <span>{{item.name}}</span>
                <i>{{item.num}}</i>
              </li>
            </ul>
         </div>
         <div class="contList">
           <div class="listCont1">
              <ul>
                <li v-for="(item,index) in dataList" :key="index">{{item}}</li>
              </ul>
           </div>
         </div>
         <div class="contList">
           <div class="listCont1">
              <ul>
                <li v-for="(item,index) in dataList1" :key="index">{{item}}</li>
              </ul>
           </div>
         </div>
       </div>
     </div>
  </el-col>
</template>
<script>
export default {
  name: "Container2",
  mounted(){
    //this.timerFun();
  },
  data() {
    return {
        timer:null,
        num:0,
        listArr:[{
          name:'驱逐舰',
          num:'3/4'
        },{
          name:'战斗机',
          num:'4/12'
        },{
          name:'坦克',
          num:'10/28'
        },{
          name:'潜艇',
          num:'1/1'
        },{
          name:'反潜直升机',
          num:'2/12'
        },{
          name:'迫榴炮',
          num:'2/28'
        }],
        listArr1:[{
          name:'指挥所',
          num:'2/2'
        },{
          name:'地面防空',
          num:'1/2'
        },{
          name:'侦察机',
          num:'1/1'
        },{
          name:'无人机',
          num:'1/2'
        },{
          name:'火炮',
          num:'3/6'
        },{
          name:'电子战飞机',
          num:'1/1'
        }],
        dataList:['驱逐舰航路机动','对空攻击','潜艇航路机动','护卫舰对舰攻击','电子战飞机弹药补给','战斗机损毁','驱逐舰航路机动','对空攻击','潜艇航路机动','护卫舰对舰攻击','电子战飞机弹药补给','战斗机损毁'],
        dataList1:['地导打击','战斗机损毁','预警机目标侦察','护卫舰对舰攻击','反潜直升机起飞','潜艇对空侦察','地导打击','战斗机损毁','预警机目标侦察','护卫舰对舰攻击','反潜直升机起飞','潜艇对空侦察']
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