<template>
  <el-col :span="24">
    <div class="chartStyle" id="chart2"></div>
  </el-col>
</template>
<script>
export default {
  name: "chartItem",
  mounted() {
    //this.chart1()
    // 基于准备好的dom，初始化echarts实例
    this.myChart = this.$echarts.init(document.getElementById("chart2"));
    this.chart1();
    this.$chartResize([this.myChart])
  },
  beforeDestroy() {
    //组件销毁前取消bus监听，否则会多次触发
  },
  data() {
    return {
      myChart: ""
    };
  },
  methods: {
    chart1() {
      var timeData = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      var option = {
        grid: [
          {
            left: 50,
            right: 50,
            height: "44%"
          },
          {
            left: 50,
            right: 50,
            top: "51.5%",
            height: "44%"
          }
        ],
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            show: false,
            axisLine: {
              onZero: false,
              lineStyle: {
                color: "#FFF"
              }
            },
            data: timeData,
            
          },
          {
            gridIndex: 1,
            type: "category",
            show: false,
            boundaryGap: false,
            data: timeData,
            position: "top"
          }
        ],
        yAxis: [
          {
            name: "胜率(%)",
            type: "value",
            max: 100,
            axisLine: {
              lineStyle: {
                color: "#FFF"
              }
            }
          },
          {
            gridIndex: 1,
            name: "",
            type: "value",
            max: 100,
            axisLine: {
              lineStyle: {
                color: "#FFF"
              }
            },
            inverse: true
          }
        ],
        series: [
          {
            name: "流量",
            type: "line",
            symbolSize: 8,
            hoverAnimation: false,
            itemStyle: {
                color: 'rgb(129, 102, 217)'
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(102, 70, 179)"
                },
                {
                  offset: 1,
                  color: "rgb(54, 98, 146)"
                }
              ])
            },
            data: [60, 74, 58, 68, 69, 67, 60, 56, 54]
          },
          {
            name: "降雨量",
            type: "line",
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
            itemStyle: {
                color: 'rgb(92, 170, 226)'
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(26, 89, 142)"
                },
                {
                  offset: 1,
                  color: "rgb(70, 141, 194)"
                }
              ])
            },
            data: [62, 64, 60, 61, 58, 65, 55, 56, 57]
          }
        ]
      };
      // 绘制图表
      this.myChart.setOption(option);
    }
  }
};
</script>